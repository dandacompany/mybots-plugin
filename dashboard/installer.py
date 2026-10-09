"""Bounded catalog installer. Never executes package installation commands."""
from __future__ import annotations
import base64
import ctypes
import errno
import fcntl
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import re
import secrets
import stat
import shutil
import subprocess
import sys
import tempfile
import threading
import time
import urllib.request
from urllib.parse import urlsplit, quote

import jsonschema
import yaml

# Support both isolated dynamic loading by Hermes and direct source tests.
import importlib.util
def _sibling(name):
    spec=importlib.util.spec_from_file_location("mybots_"+name,Path(__file__).with_name(name+".py"));module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module);return module
_catalog=_sibling("catalog");_voice=_sibling("voice");_roster_motion=_sibling("roster_motion")

class InstallError(Exception):
    pass

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        raise InstallError('Catalog redirects are not allowed')

def fetch_bytes(url, limit):
    try:
        request=urllib.request.Request(url,headers={"User-Agent":"MyBots/0.4.1"})
        with urllib.request.build_opener(NoRedirect).open(request, timeout=15) as response:
            blob=response.read(limit+1)
        if len(blob)>limit:raise InstallError('File exceeds size limit')
        return blob
    except InstallError:raise
    except Exception as exc:raise InstallError('Catalog unavailable; retry after checking the connection') from exc

def rename_exclusive(source, target):
    libc=ctypes.CDLL(None, use_errno=True)
    if sys.platform=='darwin':
        result=libc.renamex_np(os.fsencode(source),os.fsencode(target),4) # RENAME_EXCL
    elif sys.platform.startswith('linux') and hasattr(libc,'renameat2'):
        result=libc.renameat2(-100,os.fsencode(source),-100,os.fsencode(target),1) # RENAME_NOREPLACE
    else:raise InstallError('Atomic exclusive installation is unsupported on this platform')
    if result:
        code=ctypes.get_errno()
        raise OSError(code,os.strerror(code))

def activate_profile(target):
    # The staged distribution's root has no deletion history. Publish first,
    # then register the intentional reinstall in the real Hermes root.
    from hermes_constants import clear_named_profile_deleted, named_profile_is_live
    try:
        clear_named_profile_deleted(target)
        if not named_profile_is_live(target):raise InstallError('Installed profile is not available in Hermes')
    except OSError as exc:raise InstallError('Profile files are installed, but Hermes registration failed; review and retry') from exc

class Installer:
    def __init__(self, home:Path, origin:str, *, fetch=fetch_bytes, trusted_path=None, authority=None):
        u=urlsplit(origin)
        loopback=u.scheme=='http' and u.hostname in ('127.0.0.1','localhost','::1')
        if (u.scheme!='https' and not loopback) or u.username or u.password or u.path not in ('','/') or u.query or u.fragment or not u.hostname:
            raise InstallError('Use an HTTPS catalog origin, or explicit loopback development server')
        self.home=Path(home).absolute()
        self.origin=origin.rstrip('/')
        self.fetch=fetch
        self.authority=authority
        self.previews={}
        self.mutex=threading.Lock()
        self.commit=rename_exclusive
        schema_path=Path(__file__).with_name('bot.schema.json')
        if not schema_path.exists():schema_path=Path(__file__).resolve().parents[2]/'contracts/bot.schema.json'
        self.schema=json.loads(schema_path.read_text())
        new_path=schema_path.with_name('bot-v2.schema.json');self.schema_v2=json.loads(new_path.read_text())
        try:self.trusted=authority.cached().trusted if authority and authority.cached() else {} if authority else _catalog.load_trusted(trusted_path or Path(__file__).with_name('trusted-catalog.json'))
        except ValueError as exc:raise InstallError(str(exc))from exc

    def metadata(self,bot,version):
        entry=self._entry(bot,version)
        return {**entry['metadata'],'installerVersion':_catalog.INSTALLER_VERSION}

    def _refresh(self):
        try:
            if self.authority.origin!=self.origin:raise ValueError('Catalog origin changed')
            current=self.authority.refresh();self.trusted=current.trusted;return current
        except ValueError as exc:raise InstallError(str(exc))from exc

    def _entry(self,bot,version):
        if self.authority:self._refresh()
        entry=self.trusted.get((bot,version))
        if not entry:raise InstallError('This bot/version requires a newer MyBots helper')
        return entry

    def _check_live(self,preview):
        if not self.authority:return
        current=self._refresh();identity=(preview['manifest']['id'],preview['manifest']['version']);entry=current.trusted.get(identity)
        if preview['origin']!=self.origin or current.key_id!=preview['publisherKeyId']or not entry or entry['manifestSha256']!=preview['digest']:
            raise InstallError('This version is no longer published; review again')

    def review(self, bot, version, components):
        if not isinstance(bot,str) or not re.fullmatch(r'[a-z][a-z0-9-]{0,39}',bot) or not isinstance(version,str) or not re.fullmatch(r'\d+\.\d+\.\d+',version):
            raise InstallError('Invalid bot or fixed version')
        if not isinstance(components,list) or any(c not in ('skills','mcp','plugin','voice') for c in components) or len(set(components))!=len(components):
            raise InstallError('Unknown component selection')
        trusted_entry=self._entry(bot,version);metadata={**trusted_entry['metadata'],'installerVersion':_catalog.INSTALLER_VERSION}
        if not set(components)<=set(metadata['optional']):raise InstallError('Selected component is not provided by this bot')
        url=f'{self.origin}/api/bots/{bot}/{version}'
        raw=self.fetch(url,32768)
        if len(raw)>32768:raise InstallError('Manifest exceeds size limit')
        if hashlib.sha256(raw).hexdigest()!=trusted_entry['manifestSha256']:raise InstallError('Manifest is not trusted by this helper version')
        try:
            manifest=json.loads(raw)
            jsonschema.validate(manifest,self.schema_v2 if manifest.get("schemaVersion")==2 else self.schema)
        except Exception as exc:raise InstallError('Invalid manifest') from exc
        if manifest['id']!=bot or manifest['version']!=version:raise InstallError('Catalog identity mismatch')
        from hermes_cli.profile_distribution import check_hermes_requires, DistributionError
        from hermes_cli.version_info import get_version_info
        try:check_hermes_requires(manifest['hermesRequires'],get_version_info().base_version)
        except DistributionError as exc:raise InstallError(str(exc)) from exc
        if manifest['files']!=trusted_entry['files']:raise InstallError('Manifest files differ from trusted registry')
        allowed={f['path']:f['component']for f in trusted_entry['files']}
        seen=set();total=0;blobs={}
        for entry in manifest['files']:
            rel=entry['path']; size=entry['size'];total+=size
            if rel in seen or allowed.get(rel)!=entry['component'] or PurePosixPath(rel).is_absolute() or total>5_000_000:
                raise InstallError('Unexpected, duplicate or oversized package file')
            seen.add(rel)
            blob=self.fetch(url+'/files/'+quote(rel,safe='/'),size)
            if len(blob)!=size or hashlib.sha256(blob).hexdigest()!=entry['sha256']:
                raise InstallError('Package integrity check failed')
            blobs[rel]=blob
        avatars=[p for p,c in allowed.items()if c=='avatar']
        if len(avatars)!=1 or avatars[0]not in ('assets/avatar.jpg','assets/avatar.png') or 'SOUL.md'not in blobs or not blobs['SOUL.md'].strip():
            raise InstallError('Soul and one valid avatar are required')
        avatar_path=avatars[0];avatar_mime='image/png'if avatar_path.endswith('.png')else'image/jpeg'
        if not blobs[avatar_path].startswith(b'\x89PNG\r\n\x1a\n'if avatar_mime=='image/png'else b'\xff\xd8'):
            raise InstallError('Avatar format does not match its filename')
        for component in components:
            required={p for p,c in allowed.items() if c==component}
            if not required.issubset(seen):raise InstallError('Selected component is incomplete')
        try:soul=blobs['SOUL.md'].decode('utf-8')
        except UnicodeDecodeError as exc:raise InstallError('Soul must be UTF-8 text') from exc
        preset=None
        if metadata['voice'] is not None:
            try:preset=_voice.read_preset(blobs['voice/preset.json'])
            except (ValueError,KeyError)as exc:raise InstallError('Invalid voice preset')from exc
            if preset['voice']!=metadata['voice']['id']:raise InstallError('Voice metadata mismatch')
        digest=hashlib.sha256(raw).hexdigest()
        preview={'manifest':manifest,'digest':digest,'components':sorted(components),'blobs':blobs,'expires':time.monotonic()+600,'entry':trusted_entry,'voice':preset}
        if self.authority:preview.update(origin=self.origin,publisherKeyId=self.authority.current.key_id)
        token=secrets.token_urlsafe(32)
        with self.mutex:
            self.previews={k:v for k,v in self.previews.items() if v['expires']>time.monotonic()}
            if len(self.previews)>=8:raise InstallError('Too many pending reviews; retry in a few minutes')
            self.previews[token]=preview
        return {'token':token,'manifest':manifest,'digest':digest,'components':preview['components'],
            'profile':bot,'expiresIn':600,'avatar':'data:'+avatar_mime+';base64,'+base64.b64encode(blobs[avatar_path]).decode(),
            'soul':soul,'catalog':self.origin,'metadata':metadata,'voice':preset if 'voice'in components else None,
            'permissions':['Writes a new local profile','Selected MCP and plugin run local Python code','No external service credentials included']}

    def install(self, token):
        with self.mutex:
            preview=self.previews.pop(token,None)
        if not preview or preview['expires']<=time.monotonic():raise InstallError('Review expired or already used; review again')
        self._check_live(preview)
        if self.home.is_symlink():raise InstallError('Symlinked Hermes home is not supported')
        profiles=self.home/'profiles'
        if profiles.is_symlink():raise InstallError('Symlinked profiles directory is not supported')
        profiles.mkdir(mode=0o700,parents=True,exist_ok=True)
        target=profiles/preview['manifest']['id']
        lock_path=profiles/'.mybots-install.lock'
        fd=os.open(lock_path,os.O_CREAT|os.O_RDWR|os.O_NOFOLLOW,0o600)
        with os.fdopen(fd,'w') as lock:
            fcntl.flock(lock,fcntl.LOCK_EX)
            receipt={'bot':preview['manifest']['id'],'version':preview['manifest']['version'],'digest':preview['digest'],'components':preview['components']}
            if self.authority:receipt.update(origin=self.origin,publisherKeyId=preview['publisherKeyId'],name=preview['manifest']['name'],files=[f for f in preview['manifest']['files']if f['component']in ('soul','avatar',*preview['components'])])
            if target.exists() or target.is_symlink():
                marker=target/'mybots-receipt.json'
                if not target.is_symlink() and marker.is_file():
                    try:
                        if json.loads(self._profile_file(target,'mybots-receipt.json',32768))==receipt:
                            if self.authority and not self._profile_matches(target,receipt):raise InstallError('Existing MyBots profile has changes; nothing was overwritten')
                            activate_profile(target)
                            return self._result('already-installed',target.name,preview)
                    except (ValueError,OSError):pass
                raise InstallError('Profile name already exists; nothing was overwritten')
            try:
                with tempfile.TemporaryDirectory(prefix='.mybots-stage-',dir=self.home.parent) as work:
                    work=Path(work);source=work/'source';source.mkdir()
                    for entry in preview['manifest']['files']:
                        if entry['component'] not in ['soul','avatar',*preview['components']]:continue
                        file=source/entry['path'];file.parent.mkdir(parents=True,exist_ok=True)
                        file.write_bytes(preview['blobs'][entry['path']])
                    config=_catalog.profile_config(preview['entry'],preview['components'],target,sys.executable)
                    if 'voice'in preview['components']:config['voice']=_voice.voice_config(preview['voice'])
                    (source/'config.yaml').write_text(yaml.safe_dump(config,allow_unicode=True))
                    profile_meta={'description':preview['manifest']['description'],'display_name':preview['manifest']['name']}
                    avatar_file=next(f for f in preview['manifest']['files']if f['component']=='avatar')
                    motion=_roster_motion.motion_for_avatar(target.name,preview['blobs'][avatar_file['path']])
                    if motion is not None:profile_meta['ui_meta']={'hermes-bots':{'avatarMotion':motion}}
                    (source/'profile.yaml').write_text(yaml.safe_dump(profile_meta,allow_unicode=True))
                    (source/'distribution.yaml').write_text(yaml.safe_dump({'name':target.name,'version':receipt['version'],'hermes_requires':preview['manifest']['hermesRequires'],
                        'distribution_owned':['SOUL.md','config.yaml','profile.yaml','assets','skills','mcp','plugins','voice','distribution.yaml']}))
                    isolated=work/'home';isolated.mkdir()
                    env=dict(os.environ,HERMES_HOME=str(isolated))
                    # Core distribution installer executes in an isolated root, without changing parent process scope.
                    import hermes_cli
                    hermes_source=str(Path(hermes_cli.__file__).resolve().parent.parent)
                    import_paths=json.dumps([hermes_source,*[p for p in sys.path if p and Path(p).is_absolute()]])
                    code='import sys,json; from pathlib import Path; sys.path[:0]=json.loads(sys.argv[1]); from hermes_constants import get_default_hermes_root; assert get_default_hermes_root().resolve()==Path(sys.argv[3]).resolve(), "Unsafe staging root"; from hermes_cli.profile_distribution import install_distribution; plan=install_distribution(sys.argv[2],create_alias=False); assert plan.target_dir.resolve().is_relative_to(Path(sys.argv[3]).resolve())'
                    result=subprocess.run([sys.executable,'-I','-c',code,import_paths,str(source),str(isolated)],env=env,capture_output=True,timeout=60)
                    if result.returncode:raise InstallError('Hermes distribution staging failed')
                    staged=isolated/'profiles'/target.name
                    for entry in preview['manifest']['files']:
                        if entry['component'] in ['soul','avatar',*preview['components']]:
                            if hashlib.sha256((staged/entry['path']).read_bytes()).hexdigest()!=entry['sha256']:
                                raise InstallError('Installed file verification failed')
                    # Distribution staging provenance is temporary; record the real fixed catalog source.
                    dist=yaml.safe_load((staged/'distribution.yaml').read_text());dist['source']=f'{self.origin}/api/bots/{target.name}/{receipt["version"]}'
                    (staged/'distribution.yaml').write_text(yaml.safe_dump(dist))
                    (staged/'mybots-receipt.json').write_text(json.dumps(receipt,sort_keys=True))
                    self._check_live(preview)
                    self.commit(staged,target)
                    activate_profile(target)
            except InstallError:raise
            except Exception as exc:raise InstallError('Installation failed; no existing profile was changed') from exc
        return self._result('installed',target.name,preview)

    def _profile_file(self,target,rel,limit):
        _catalog.safe_path(rel);fd=os.open(target,os.O_RDONLY|os.O_DIRECTORY|os.O_NOFOLLOW)
        try:
            parts=rel.split('/')
            for part in parts[:-1]:
                child=os.open(part,os.O_RDONLY|os.O_DIRECTORY|os.O_NOFOLLOW,dir_fd=fd);os.close(fd);fd=child
            child=os.open(parts[-1],os.O_RDONLY|os.O_NOFOLLOW|os.O_NONBLOCK,dir_fd=fd)
            with os.fdopen(child,'rb')as stream:
                info=os.fstat(stream.fileno())
                if not stat.S_ISREG(info.st_mode)or info.st_uid!=os.getuid()or info.st_size>limit:raise ValueError('Invalid installed file')
                data=stream.read(limit+1)
                if len(data)>limit:raise ValueError('Installed file size limit')
                return data
        finally:os.close(fd)

    def _profile_matches(self,target,receipt):
        try:
            files=receipt.get('files')
            if files is None:
                entry=self.trusted.get((receipt['bot'],receipt['version']))
                if not entry or entry['manifestSha256']!=receipt['digest']:return False
                files=[f for f in entry['files']if f['component']in ('soul','avatar',*receipt['components'])]
            if not isinstance(files,list)or not 2<=len(files)<=32 or not any(f['path']=='SOUL.md'and f['component']=='soul'for f in files)or len([f for f in files if f['component']=='avatar'])!=1:return False
            total=0;seen=set()
            for f in files:
                _catalog.record(f,('path','component','size','sha256'));_catalog.safe_path(f['path']);total+=f['size']
                if f['path']in seen or type(f['size'])is not int or not 1<=f['size']<=2_000_000 or total>5_000_000:return False
                seen.add(f['path']);blob=self._profile_file(target,f['path'],f['size'])
                if len(blob)!=f['size']or hashlib.sha256(blob).hexdigest()!=f['sha256']:return False
            return True
        except (OSError,ValueError,KeyError,TypeError):return False

    def installed(self,catalog=None):
        entries=catalog.trusted if catalog else self.trusted;latest={}
        for (bot,version),entry in entries.items():
            if bot not in latest or tuple(map(int,version.split('.')))>tuple(map(int,latest[bot]['metadata']['version'].split('.'))):latest[bot]=entry
        profiles=self.home/'profiles';names=set(latest)
        if profiles.is_symlink()or self.home.is_symlink():raise InstallError('Symlinked profile root is unsupported')
        if profiles.is_dir():
            names.update(p.name for p in profiles.iterdir()if re.fullmatch(r'[a-z][a-z0-9-]{0,39}',p.name)and not p.is_symlink()and(p/'mybots-receipt.json').is_file())
        result=[]
        for bot in sorted(names):
            target=profiles/bot;entry=latest.get(bot);version=None;state='available';name=entry['metadata']['name']if entry else bot
            if target.exists()or target.is_symlink():
                state='name-conflict'
                try:
                    receipt=json.loads(self._profile_file(target,'mybots-receipt.json',32768))
                    if receipt['bot']!=bot or not isinstance(receipt['version'],str)or not re.fullmatch(r'[0-9]+\.[0-9]+\.[0-9]+',receipt['version'])or not re.fullmatch('[a-f0-9]{64}',receipt['digest']):raise ValueError('Invalid receipt')
                    version=receipt['version'];label=receipt.get('name',name);name=label if isinstance(label,str)and len(label)<=80 else name;state='installed'if self._profile_matches(target,receipt)and(not entry or entry['metadata']['version']==version and entry['manifestSha256']==receipt['digest'])else'other-version'
                except (OSError,ValueError,KeyError,TypeError):pass
            result.append(dict(bot=bot,version=version,profile=bot,state=state,name=name))
        return result

    def _result(self,status,profile,preview):
        configured='voice'in preview['components']
        voice_status='authentication-check-required'if configured else 'not-selected'
        if configured and status=='already-installed':
            # A matching receipt preserves user edits. It does not prove that
            # the recommended preset is still present in the current config.
            configured=False
            try:
                path=self.home/'profiles'/profile/'config.yaml'
                fd=os.open(path,os.O_RDONLY|os.O_NOFOLLOW|os.O_NONBLOCK)
                with os.fdopen(fd,'rb')as stream:
                    if stat.S_ISREG(os.fstat(stream.fileno()).st_mode):
                        blob=stream.read(1_000_001)
                        if len(blob)<=1_000_000:
                            config=yaml.safe_load(blob)
                            actual=config.get('voice')if isinstance(config,dict)else None
                            expected=_voice.voice_config(preview['voice'])
                            live=actual.get('gpt_live')if isinstance(actual,dict)else None
                            configured=isinstance(live,dict)and actual.get('voice_chat_mode')==expected['voice_chat_mode']and all(live.get(k)==v for k,v in expected['gpt_live'].items())
            except (OSError,ValueError,yaml.YAMLError,RecursionError):pass
            if not configured:voice_status='existing-settings-preserved'
        return dict(status=status,profile=profile,modelSetupRequired=True,voiceConfigured=configured,voice=preview['voice']if configured else None,voiceStatus=voice_status)
