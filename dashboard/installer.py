"""Bounded catalog installer. Never executes package installation commands."""
from __future__ import annotations
import base64
import copy
import ctypes
import errno
import hashlib
import json
import logging
import os
from pathlib import Path, PurePosixPath
import re
import secrets
import stat
import shutil
import subprocess
import sys
import threading
import time
import urllib.error
import urllib.request
from urllib.parse import urlsplit, quote

import jsonschema
import yaml

# Support both isolated dynamic loading by Hermes and direct source tests.
import importlib.util
def _sibling(name):
    spec=importlib.util.spec_from_file_location("mybots_"+name,Path(__file__).with_name(name+".py"));module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module);return module
_catalog=_sibling("catalog");_voice=_sibling("voice");_roster_motion=_sibling("roster_motion");_secret_decls=_sibling("secret_decls");_portable=_sibling("portable")

_log=logging.getLogger(__name__)

class InstallError(Exception):
    pass

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        raise InstallError('Catalog redirects are not allowed')

def fetch_bytes(url, limit):
    try:
        request=urllib.request.Request(url,headers={"User-Agent":"MyBots/0.6.1"})
        with urllib.request.build_opener(NoRedirect).open(request, timeout=15) as response:
            blob=response.read(limit+1)
        if len(blob)>limit:raise InstallError('File exceeds size limit')
        return blob
    except InstallError:raise
    except urllib.error.HTTPError as exc:
        if exc.code==403 and _not_open(exc):raise InstallError(NOT_OPEN) from exc
        raise InstallError('Catalog unavailable; retry after checking the connection') from exc
    except Exception as exc:raise InstallError('Catalog unavailable; retry after checking the connection') from exc

# The market refuses packages of a coming-soon bot with exactly 403 {"detail": NOT_OPEN}.
# Only that body (read to 1KB) names the reason; every other refusal keeps the generic text.
NOT_OPEN='This bot is not open yet'
def _not_open(error):
    try:return json.loads(error.read(1024).decode('utf-8'))=={'detail':NOT_OPEN}
    except Exception:return False

def rename_exclusive(source, target):
    if _portable.WINDOWS:os.rename(source,target);return # Windows refuses an existing target (FileExistsError)
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

# Only fields Hermes reads to reach a model travel; credentials (inline keys, key_cmd, headers)
# never do, because MyBots profiles are distributions whose config.yaml can be exported.
SAFE_MODEL={'default','model','provider','base_url','api_mode','transport','context_length','max_tokens','ollama_num_ctx','key_env','api_key_env'}
SAFE_PROVIDER=SAFE_MODEL|{'name','api','url','default_model','models','timeout','supports_vision','modalities','extra_body'}
SECRET_WORDS={'key','apikey','token','secret','password','passwd','pwd','passphrase','auth','authorization','bearer','jwt','session','cookie','cookies','credential','credentials','header','headers','signature'}
def _secret_name(name):
    words=re.sub(r'([a-z0-9])([A-Z])',r'\1_\2',str(name)).lower().replace('-','_').split('_')
    return 'apikey'in ''.join(words) or any(w in SECRET_WORDS for w in words)
def _scrub(value):
    if isinstance(value,dict):return {k:_scrub(v)for k,v in value.items()if not _secret_name(k)}
    if isinstance(value,list):return [_scrub(v)for v in value]
    if isinstance(value,str)and re.match(r'\s*[a-z][a-z0-9+.-]*://',value,re.I):
        parts=urlsplit(value.strip());host=parts.hostname or ''
        if ':' in host:host='['+host+']'
        return parts._replace(netloc=host+(f':{parts.port}'if parts.port else''),query='',fragment='').geturl()
    return value
def without_secrets(seed):
    out={}
    model=seed.get('model')
    if isinstance(model,str):out['model']=_scrub(model)
    elif isinstance(model,dict):out['model']={k:_scrub(v)for k,v in model.items()if k in SAFE_MODEL}
    providers=seed.get('providers')
    if isinstance(providers,dict):
        out['providers']={n:{k:_scrub(v)for k,v in p.items()if k in SAFE_PROVIDER}for n,p in providers.items()if isinstance(p,dict)}
    return out

def model_seed(source):
    """Hermes' own rule for a fresh profile (``hermes profile create``): copy the launch profile's
    model block, plus its custom ``providers:`` entry when it names one, minus credentials."""
    try:from hermes_cli.profiles import launch_model_seed
    except ImportError:launch_model_seed=None
    return without_secrets(launch_model_seed(source)if launch_model_seed else _launch_model_seed(source))

def _launch_model_seed(source):
    model=source.get('model')
    if not model:return {}
    seed={'model':model};providers=source.get('providers');name=model.get('provider')if isinstance(model,dict)else None
    if isinstance(providers,dict)and name in providers:seed['providers']={name:providers[name]}
    return seed

def model_summary(model):
    if isinstance(model,str)and model:return {'name':model,'provider':None}
    if isinstance(model,dict)and isinstance(model.get('default'),str)and model['default']:
        return {'name':model['default'],'provider':model.get('provider')if isinstance(model.get('provider'),str)else None}
    return None

# Names only (upper case: Windows' os.environ reports keys upper-cased). The Windows ones let the
# staging child find its home (Path.home(), %LOCALAPPDATA%) and start; none of them is a credential.
STAGING_ENV=frozenset(('PATH','HOME','TMPDIR','LANG','USERPROFILE','LOCALAPPDATA','APPDATA','SYSTEMROOT','SYSTEMDRIVE',
    'WINDIR','TEMP','TMP','HOMEDRIVE','HOMEPATH','PATHEXT','COMSPEC'))
STAGING_FAILED='Hermes distribution staging failed; Hermes could not prepare the bot in a temporary home on this computer. Nothing was changed. Restart Hermes and try again.'

METADATA=('mybots-receipt.json','distribution.yaml','profile.yaml','config.yaml') # always in an update backup
def _version(value):return tuple(map(int,value.split('.')))

def _make_parents(root,rel,created):
    """Parent folder of ``root/rel``, creating missing ones (appended to ``created``). A link or a
    non-folder on the way raises ``OSError``, so nothing is written through it."""
    folder=Path(root)
    for part in rel.split('/')[:-1]:
        folder=folder/part
        if _portable.is_link(folder):raise OSError('Link in profile path')
        if not os.path.lexists(folder):os.mkdir(folder,0o755);created.append(folder)
        elif not folder.is_dir():raise OSError('Not a folder')
    return folder

def _write_new(root,rel,blob):
    """``root/rel`` as a new 0600 file (never replacing or following anything), parents 0700 (Windows: inherited ACL)."""
    folder=Path(root)
    for part in rel.split('/')[:-1]:
        folder=folder/part
        if not os.path.lexists(folder):_portable.make_dir(folder)
        elif _portable.is_link(folder)or not folder.is_dir():raise OSError('Invalid backup path')
    fd=_portable.open_nofollow(folder/rel.rsplit('/',1)[-1],os.O_WRONLY|os.O_CREAT|os.O_EXCL,0o600)
    with os.fdopen(fd,'wb')as stream:stream.write(blob);stream.flush();os.fsync(stream.fileno())

def _prune(root,rel):
    """Remove folders left empty by deleting ``root/rel``, up to (not including) ``root``."""
    folder=(Path(root)/rel).parent
    while folder!=Path(root):
        try:os.rmdir(folder)
        except OSError:return
        folder=folder.parent


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
        # Seams (Ruling B): failure-path tests replace these; production uses the real writers.
        self.commit=rename_exclusive
        self.write_env=_secret_decls.write_profile_env
        self.save_default=_secret_decls.save_default_env
        self.run_staging=subprocess.run
        self.run_icacls=subprocess.run # Windows only (W4): portable.grant_private on MyBots folder roots
        schema_path=Path(__file__).with_name('bot.schema.json')
        if not schema_path.exists():schema_path=Path(__file__).resolve().parents[2]/'contracts/bot.schema.json'
        self.schema=json.loads(schema_path.read_text(encoding='utf-8'))
        new_path=schema_path.with_name('bot-v2.schema.json');self.schema_v2=json.loads(new_path.read_text(encoding='utf-8'))
        self.schema_v3=json.loads(schema_path.with_name('bot-v3.schema.json').read_text(encoding='utf-8'))
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
        if not isinstance(bot,str) or not re.fullmatch(r'[a-z][a-z0-9-]{0,39}',bot) or not isinstance(version,str) or not re.fullmatch(r'[0-9]+\.[0-9]+\.[0-9]+',version):
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
            schema_version=manifest.get("schemaVersion")
            jsonschema.validate(manifest,self.schema_v2 if schema_version==2 else self.schema_v3 if schema_version==3 else self.schema)
            declared=_secret_decls.manifest_secrets(manifest,trusted_entry['metadata'])
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
        digest=hashlib.sha256(raw).hexdigest();seed,packs=self._launch_seed()
        # Declarations only: the token store and the response learn whether the default profile
        # has a value for a name, never the value itself.
        needed=_secret_decls.applicable(declared,components)
        default_env=_secret_decls.read_default_env(self.home)if needed else {}
        listed=[]
        for decl in needed:
            present=_secret_decls.has_value(default_env,decl['name'])
            listed.append({**decl,'targets':list(decl['targets']),'prefill':'default'if present else None,'defaultHasValue':present})
        del default_env
        preview={'manifest':manifest,'digest':digest,'components':sorted(components),'blobs':blobs,'expires':time.monotonic()+600,'entry':trusted_entry,'voice':preset,'seed':seed,'packs':packs,'secrets':needed}
        if self.authority:preview.update(origin=self.origin,publisherKeyId=self.authority.current.key_id)
        token=secrets.token_urlsafe(32)
        with self.mutex:
            self.previews={k:v for k,v in self.previews.items() if v['expires']>time.monotonic()}
            if len(self.previews)>=8:raise InstallError('Too many pending reviews; retry in a few minutes')
            self.previews[token]=preview
        return {'token':token,'manifest':manifest,'digest':digest,'components':preview['components'],
            'profile':bot,'expiresIn':600,'avatar':'data:'+avatar_mime+';base64,'+base64.b64encode(blobs[avatar_path]).decode(),
            'soul':soul,'catalog':self.origin,'metadata':metadata,'voice':preset if 'voice'in components else None,
            'model':model_summary(seed.get('model')),'languagePacks':[dict(name=p['name'],locales=p['locales'])for p in packs],
            'secrets':listed,'permissions':['Writes a new local profile','Selected MCP and plugin run local Python code',_secret_decls.STORAGE_NOTICE]}

    def install(self, token, secrets=None):
        with self.mutex:
            preview=self.previews.get(token)
            live=preview is not None and preview['expires']>time.monotonic()
            if live:
                # A malformed key request keeps the review, so the user can correct it and retry.
                try:plan=_secret_decls.install_plan(preview['secrets'],secrets)
                except ValueError as exc:raise InstallError(str(exc))from None
            self.previews.pop(token,None)
        if not live:raise InstallError('Review expired or already used; review again')
        values=self._key_values(plan)
        self._check_live(preview)
        if _portable.is_link(self.home):raise InstallError('Symlinked Hermes home is not supported')
        profiles=self.home/'profiles'
        if _portable.is_link(profiles):raise InstallError('Symlinked profiles directory is not supported')
        _portable.make_dir(profiles,parents=True,exist_ok=True)
        target=profiles/preview['manifest']['id']
        lock_path=profiles/'.mybots-install.lock'
        with _portable.file_lock(lock_path):
            receipt=self._new_receipt(preview)
            if target.exists() or _portable.is_link(target):
                marker=target/'mybots-receipt.json'
                if not _portable.is_link(target) and marker.is_file():
                    try:
                        if json.loads(self._profile_file(target,'mybots-receipt.json',32768))==receipt:
                            if self.authority and not self._profile_matches(target,receipt):raise InstallError('Existing MyBots profile has changes; nothing was overwritten')
                            activate_profile(target)
                            # Nothing is written to an existing profile, so no key was set here.
                            return self._result('already-installed',target.name,preview,[])
                    except (ValueError,OSError,RecursionError):pass
                raise InstallError('Profile name already exists; nothing was overwritten')
            try:
                # Windows (W4): a TemporaryDirectory would carry its owner-only DACL into the profile, so
                # the staging root gets the explicit DACL while still empty; everything below inherits it.
                with _portable.staging_dir('.mybots-stage-',self.home.parent,self.run_icacls) as work:
                    work=Path(work);source=work/'source';source.mkdir()
                    for entry in preview['manifest']['files']:
                        if entry['component'] not in ['soul','avatar',*preview['components']]:continue
                        file=source/entry['path'];file.parent.mkdir(parents=True,exist_ok=True)
                        file.write_bytes(preview['blobs'][entry['path']])
                    mcp_env={}
                    for item in plan:
                        target_id=item['decl']['targets'][0]
                        if item['decl']['name']in values and target_id.startswith('mcp:'):mcp_env.setdefault(target_id[4:],[]).append(item['decl']['name'])
                    config={**preview['seed'],**_catalog.profile_config(preview['entry'],preview['components'],target,sys.executable,mcp_env)}
                    packs=[p for p in preview['packs']if p['name']!=preview['entry']['metadata'].get('pluginId')]
                    for pack in packs:
                        for rel,blob in pack['files'].items():
                            file=source/'plugins'/pack['name']/rel;file.parent.mkdir(parents=True,exist_ok=True);file.write_bytes(blob)
                    if packs:
                        plugins=dict(config.get('plugins')or{});plugins['enabled']=[*plugins.get('enabled',[]),*[p['name']for p in packs]];config['plugins']=plugins
                    if 'voice'in preview['components']:config['voice']=_voice.voice_config(preview['voice'])
                    _catalog.ensure_profile_defaults(config)
                    (source/'config.yaml').write_text(yaml.safe_dump(config,allow_unicode=True),encoding='utf-8')
                    profile_meta={'description':preview['manifest']['description'],'display_name':preview['manifest']['name']}
                    avatar_file=next(f for f in preview['manifest']['files']if f['component']=='avatar')
                    motion=_roster_motion.motion_for_avatar(target.name,preview['blobs'][avatar_file['path']])
                    if motion is not None:profile_meta['ui_meta']={'hermes-bots':{'avatarMotion':motion}}
                    (source/'profile.yaml').write_text(yaml.safe_dump(profile_meta,allow_unicode=True),encoding='utf-8')
                    (source/'distribution.yaml').write_text(yaml.safe_dump({'name':target.name,'version':receipt['version'],'hermes_requires':preview['manifest']['hermesRequires'],
                        'distribution_owned':['SOUL.md','config.yaml','profile.yaml','assets','skills','mcp','plugins','voice','distribution.yaml']}),encoding='utf-8')
                    isolated=work/'home';isolated.mkdir()
                    # Minimal environment: the parent may hold credentials (Hermes publishes saved
                    # keys into os.environ), and staging needs none of them.
                    env={k:v for k,v in os.environ.items()if k.upper()in STAGING_ENV or k.startswith('LC_')}
                    env['HERMES_HOME']=str(isolated)
                    # Core distribution installer executes in an isolated root, without changing parent process scope.
                    import hermes_cli
                    hermes_source=str(Path(hermes_cli.__file__).resolve().parent.parent)
                    import_paths=json.dumps([hermes_source,*[p for p in sys.path if p and Path(p).is_absolute()]])
                    code='import sys,json; from pathlib import Path; sys.path[:0]=json.loads(sys.argv[1]); from hermes_constants import get_default_hermes_root; assert get_default_hermes_root().resolve()==Path(sys.argv[3]).resolve(), "Unsafe staging root"; from hermes_cli.profile_distribution import install_distribution; plan=install_distribution(sys.argv[2],create_alias=False); assert plan.target_dir.resolve().is_relative_to(Path(sys.argv[3]).resolve())'
                    result=self.run_staging([sys.executable,'-I','-c',code,import_paths,str(source),str(isolated)],env=env,capture_output=True,timeout=60)
                    if result.returncode:raise InstallError(STAGING_FAILED)
                    staged=isolated/'profiles'/target.name
                    for entry in preview['manifest']['files']:
                        if entry['component'] in ['soul','avatar',*preview['components']]:
                            if hashlib.sha256((staged/entry['path']).read_bytes()).hexdigest()!=entry['sha256']:
                                raise InstallError('Installed file verification failed')
                    # Distribution staging provenance is temporary; record the real fixed catalog source.
                    dist=yaml.safe_load((staged/'distribution.yaml').read_text(encoding='utf-8'));dist['source']=f'{self.origin}/api/bots/{target.name}/{receipt["version"]}'
                    (staged/'distribution.yaml').write_text(yaml.safe_dump(dist),encoding='utf-8')
                    (staged/'mybots-receipt.json').write_text(json.dumps(receipt,sort_keys=True),encoding='utf-8')
                    # .env is a Hermes credential path, so distribution staging never writes it; it
                    # goes in now and is published by the same atomic commit as the profile.
                    if values:self.write_env(staged,values)
                    self._check_live(preview)
                    # Windows (W4): the profile root keeps its own explicit DACL after the rename
                    # (root only: its children already inherited the same entries from staging).
                    if not _portable.grant_private(staged,self.run_icacls):raise _portable.AclError(_portable.STAGING_ACL_FAILED)
                    self.commit(staged,target)
                    activate_profile(target)
            except InstallError:raise
            except _portable.AclError:raise InstallError(_portable.STAGING_ACL_FAILED)from None
            except Exception as exc:raise InstallError('Installation failed; no existing profile was changed') from exc
            report=self._save_defaults(plan,values)
        return self._result('installed',target.name,preview,report)

    def _grant_root(self,folder):
        """Windows (W4): the explicit DACL on ``folder`` itself (never its tree). Never fails an update;
        a failure is logged with a fixed line and the caller reports ``warning``."""
        ok=_portable.grant_private(folder,self.run_icacls)
        if not ok:_log.warning(_portable.ACL_GRANT_LOG)
        return ok

    def _new_receipt(self,preview):
        receipt={'bot':preview['manifest']['id'],'version':preview['manifest']['version'],'digest':preview['digest'],'components':preview['components']}
        if self.authority:receipt.update(origin=self.origin,publisherKeyId=preview['publisherKeyId'],name=preview['manifest']['name'],files=[f for f in preview['manifest']['files']if f['component']in ('soul','avatar',*preview['components'])])
        # v3 receipts carry the whole declarations (never values) so 「키 넣기」 can label keys
        # without a review.
        # v1/v2 receipts stay byte-identical, so their already-installed check still matches.
        if preview['manifest'].get('schemaVersion')==3:
            receipt['secrets']=[{k:(list(d[k])if k=='targets'else d[k])for k in _secret_decls.KEYS}for d in preview['secrets']]
        return receipt

    # --- update: a newer catalog version over an installed bot, in place -------------------------
    # Hermes' update_distribution replaces every distribution-owned tree (all of skills/, plugins/),
    # which would drop what the user or the bot added. Only files the installed version's receipt
    # (or its trusted entry) names are replaced or removed; config.yaml keeps every user key.

    def review_update(self,bot,version):
        """``review()`` for a newer version with the installed components, plus ``update``:
        ``{from, replace, remove, modified, newSecrets}``. ``secrets`` lists only declarations the
        installed version did not have; keys the bot already has are kept."""
        if not isinstance(bot,str) or not re.fullmatch(r'[a-z][a-z0-9-]{0,39}',bot) or not isinstance(version,str) or not re.fullmatch(r'[0-9]+\.[0-9]+\.[0-9]+',version):
            raise InstallError('Invalid bot or fixed version')
        target=self._update_target(bot);receipt=self._installed_receipt(target,bot)
        if _version(version)<=_version(receipt['version']):raise InstallError('Only a newer version can be installed as an update')
        self._same_origin(receipt)
        result=self.review(bot,version,list(receipt['components']))
        try:
            with self.mutex:preview=self.previews[result['token']]
            old=self._previous_files(receipt);changes=self._update_changes(target,preview,old)
            try:known={d['name']for d in _secret_decls.receipt_secrets(receipt)}
            except ValueError:known=set()
            offer=[d for d in preview['secrets']if d['name']not in known]
        except BaseException:
            with self.mutex:self.previews.pop(result['token'],None)
            raise
        with self.mutex:preview.update(update=dict(receipt=receipt,old=old),offer=offer)
        names=[d['name']for d in offer]
        return {**result,'secrets':[s for s in result['secrets']if s['name']in names],
            'permissions':['Updates files of the installed local profile; files you added are kept',*result['permissions'][1:]],
            'update':{'from':receipt['version'],'replace':len(changes['replace']),'remove':len(changes['remove']),'modified':changes['modified'],'newSecrets':names}}

    def update(self,token,secrets=None):
        """Apply a ``review_update`` token. Keys go only to names the bot does not have yet. Files
        are backed up to ``<profile>/.mybots-backup/<UTC time>/`` (never ``.env``), replaced one by
        one (temp file + ``os.replace``) and all restored when anything fails."""
        with self.mutex:
            preview=self.previews.get(token)
            live=preview is not None and preview['expires']>time.monotonic()and 'update'in preview
            if live:
                try:plan=_secret_decls.install_plan(preview['offer'],secrets)
                except ValueError as exc:raise InstallError(str(exc))from None
            self.previews.pop(token,None)
        if not live:raise InstallError('Review expired or already used; review again')
        values=self._key_values(plan)
        self._check_live(preview)
        bot=preview['manifest']['id'];target=self._update_target(bot)
        with _portable.file_lock(target.parent/'.mybots-install.lock'):
            receipt=self._installed_receipt(target,bot)
            if receipt!=preview['update']['receipt']:raise InstallError('The installed bot changed after the review; review again')
            self._same_origin(receipt)
            changes=self._update_changes(target,preview,preview['update']['old'])
            kept=set();env_blob=None
            if values:
                env=_secret_decls.env_state(target)
                if env is None:raise InstallError(_secret_decls.PROFILE_ENV_UNCHECKED)
                kept={n for n in values if _secret_decls.has_value(env,n)};del env
                values={n:v for n,v in values.items()if n not in kept}
            if values:
                try:env_blob=_secret_decls.prepare_profile_env(target,values)
                except ValueError as exc:
                    raise InstallError(_secret_decls.PROFILE_ENV_UNCHECKED if str(exc)==_secret_decls.PROFILE_ENV_UNCHECKED else 'Keys could not be saved; nothing was changed')from None
            refs={}
            for item in plan:
                name=item['decl']['name'];where=item['decl']['targets'][0]
                if (name in values or name in kept)and where.startswith('mcp:'):refs.setdefault(where[4:],[]).append(name)
            ops=[('write',rel,preview['blobs'][rel])for rel in changes['replace']]+[('remove',rel,None)for rel in changes['remove']]
            ops+=[('write',name,blob)for name,blob in self._update_metadata(target,preview,refs)]
            if env_blob is not None:ops.append(('write','.env',env_blob))
            ops.append(('write','mybots-receipt.json',json.dumps(self._new_receipt(preview),sort_keys=True).encode()))
            del env_blob
            self._check_live(preview)
            backup_acl=self._apply_update(target,ops,{f['path']:f['sha256']for f in preview['manifest']['files']})
            # Windows (W4): future children of an existing profile inherit the explicit DACL.
            acl_ok=self._grant_root(target)and backup_acl
            report=self._save_defaults(plan,values)
        for row in report:
            if row['name']in kept:row['state']='set'
        # Measured: a running Hermes does not pick up a changed profile plugin in new chats, and
        # plugins_activation only reloads the caller's own profile scope (the default profile here),
        # unloading every plugin of this process on the way. So the change applies after a restart.
        result={**self._result('updated',bot,preview,report),'applies':'restart'}
        return result if acl_ok else {**result,'warning':_portable.ACL_GRANT_FAILED}

    def _update_target(self,bot):
        profiles=self.home/'profiles';target=profiles/bot
        if _portable.is_link(self.home)or _portable.is_link(profiles)or _portable.is_link(target)or not target.is_dir():raise InstallError('This bot is not installed')
        return target

    def _installed_receipt(self,target,bot):
        try:
            receipt=json.loads(self._profile_file(target,'mybots-receipt.json',32768))
            if type(receipt)is not dict or receipt.get('bot')!=bot or type(receipt.get('version'))is not str or not re.fullmatch(r'[0-9]+\.[0-9]+\.[0-9]+',receipt['version'])\
                    or type(receipt.get('digest'))is not str or not re.fullmatch('[a-f0-9]{64}',receipt['digest'])or type(receipt.get('components'))is not list:raise ValueError('Invalid receipt')
        except (OSError,ValueError,RecursionError):raise InstallError('This bot was not installed by MyBots')from None
        return receipt

    def _same_origin(self,receipt):
        """Only a bot installed from this catalog origin is updated in place: a same-id bot from another
        catalog must not replace it. The publisher key may differ (rotation); the current authority
        verifies the new version. A receipt without an origin predates the signed catalog."""
        if receipt.get('origin')!=self.origin:raise InstallError('Update needs a reinstall for this version')

    def _previous_files(self,receipt,trusted=None):
        """``{path: sha256}`` of the installed version: the receipt's ``files``, else that version's
        trusted entry (same digest). Paths are checked like a package path before anything uses them;
        profile metadata names are never package files."""
        self._same_origin(receipt)
        files=receipt.get('files')
        if files is None:
            entry=(self.trusted if trusted is None else trusted).get((receipt['bot'],receipt['version']))
            if not entry or entry['manifestSha256']!=receipt['digest']:raise InstallError('Update needs a reinstall for this version')
            files=[f for f in entry['files']if f['component']in ('soul','avatar',*receipt['components'])]
        try:
            if type(files)is not list or not 2<=len(files)<=32:raise ValueError('Invalid files')
            old={}
            for f in files:
                _catalog.record(f,('path','component','size','sha256'));_catalog.safe_path(f['path'])
                if f['path']in old or f['path']in METADATA or type(f['sha256'])is not str or not re.fullmatch('[a-f0-9]{64}',f['sha256']):raise ValueError('Invalid files')
                old[f['path']]=f['sha256']
            return old
        except (ValueError,KeyError,TypeError):raise InstallError('Update needs a reinstall for this version')from None

    def _update_changes(self,target,preview,old):
        """What the update does, from the files on disk now: ``replace`` (new files whose bytes
        differ), ``remove`` (present files only the old version had), ``modified`` (files the user
        changed that the update replaces or removes)."""
        new={f['path']:f['sha256']for f in preview['manifest']['files']if f['component']in ('soul','avatar',*preview['components'])}
        current={rel:self._current_sha(target,rel)for rel in {*new,*old}}
        replace=[rel for rel in new if current[rel]!=new[rel]]
        remove=sorted(rel for rel in old if rel not in new and current[rel]is not None)
        modified=sorted(rel for rel in {*replace,*remove}if current[rel]is not None and current[rel]!=old.get(rel))
        return dict(replace=replace,remove=remove,modified=modified)

    def _current_sha(self,target,rel):
        """sha256 of ``target/rel`` or ``None`` when absent. A link anywhere on the way, or a file the
        guarded reader refuses, stops the update before anything is written."""
        try:
            walk=target
            for part in rel.split('/'):
                walk=walk/part
                if _portable.is_link(walk):raise OSError('Link in installed path')
                if not os.path.lexists(walk):return None
            return hashlib.sha256(self._profile_file(target,rel,2_000_000)).hexdigest()
        except (OSError,ValueError):raise InstallError('The installed bot has files that could not be checked safely; nothing was changed')from None

    def _read_yaml(self,target,name):
        if not os.path.lexists(target/name):return {}
        try:data=yaml.safe_load(self._profile_file(target,name,1_000_000))
        except (OSError,ValueError,yaml.YAMLError,RecursionError):data=False
        if data is None:data={}
        if not isinstance(data,dict):raise InstallError('The bot profile could not be read safely; nothing was changed')
        return data

    def _update_metadata(self,target,preview,refs):
        """``[(name, bytes)]`` for config.yaml, profile.yaml and distribution.yaml, each only when it
        changes. config.yaml: the bot's plugin and the seeded language packs stay enabled, its own MCP
        entry is refreshed, ``voice`` is set only for the voice component, ``skills.write_approval`` and
        ``cron.wrap_response`` are added when missing; every other key is kept."""
        manifest=preview['manifest'];entry=preview['entry'];components=preview['components'];out=[]
        config=self._read_yaml(target,'config.yaml');before=copy.deepcopy(config)
        plugin_id=entry['metadata'].get('pluginId')
        ensure=[plugin_id]if 'plugin'in components else []
        # Only packs this profile was seeded with (their manifest copy is still there).
        ensure+=[p['name']for p in preview['packs']if p['name']!=plugin_id and os.path.lexists(target/'plugins'/p['name']/'plugin.yaml')]
        if ensure:
            plugins=config.get('plugins')if isinstance(config.get('plugins'),dict)else {}
            enabled=list(plugins.get('enabled'))if isinstance(plugins.get('enabled'),list)else []
            enabled+=[n for n in ensure if n not in enabled];config['plugins']={**plugins,'enabled':enabled}
        if 'mcp'in components:
            servers=config.get('mcp_servers')if isinstance(config.get('mcp_servers'),dict)else {}
            for sid,server in _catalog.profile_config(entry,components,target,sys.executable,refs)['mcp_servers'].items():
                old=servers.get(sid)if isinstance(servers.get(sid),dict)else {}
                env={**(old.get('env')if isinstance(old.get('env'),dict)else {}),**server.get('env',{})}
                servers[sid]={**old,**server,**({'env':env}if env else {})}
            config['mcp_servers']=servers
        if 'voice'in components:config['voice']=_voice.voice_config(preview['voice'])
        _catalog.ensure_profile_defaults(config)
        if config!=before:out.append(('config.yaml',yaml.safe_dump(config,allow_unicode=True,sort_keys=False).encode('utf-8')))
        meta=self._read_yaml(target,'profile.yaml');before=copy.deepcopy(meta)
        meta.update(description=manifest['description'],display_name=manifest['name'])
        avatar=next(f['path']for f in manifest['files']if f['component']=='avatar')
        motion=_roster_motion.motion_for_avatar(target.name,preview['blobs'][avatar])
        if motion is not None:
            ui=meta.get('ui_meta')if isinstance(meta.get('ui_meta'),dict)else {};own=ui.get('hermes-bots')if isinstance(ui.get('hermes-bots'),dict)else {}
            meta['ui_meta']={**ui,'hermes-bots':{**own,'avatarMotion':motion}}
        if meta!=before:out.append(('profile.yaml',yaml.safe_dump(meta,allow_unicode=True).encode('utf-8')))
        dist=self._read_yaml(target,'distribution.yaml');before=copy.deepcopy(dist)
        dist.update(version=manifest['version'],hermes_requires=manifest['hermesRequires'],source=f'{self.origin}/api/bots/{target.name}/{manifest["version"]}')
        if dist!=before:out.append(('distribution.yaml',yaml.safe_dump(dist).encode('utf-8')))
        return out

    def _apply_update(self,target,ops,expected):
        """Back up, then run ``ops`` in order; on any failure put every touched path back. Returns whether
        the Windows DACL of the backup folders MyBots created here was set (always True on POSIX)."""
        backup_root=target/'.mybots-backup'
        try:
            if _portable.is_link(backup_root):raise OSError('Linked backup folder')
            new_root=not os.path.lexists(backup_root)
            _portable.make_dir(backup_root,exist_ok=True) # Windows (W4): no owner-only DACL inside a profile
            acl_ok=self._grant_root(backup_root)if new_root else True
            stamp=time.strftime('%Y%m%dT%H%M%SZ',time.gmtime())
            for n in range(100):
                backup=backup_root/(stamp if n==0 else f'{stamp}-{n}')
                try:_portable.make_dir(backup);break
                except FileExistsError:continue
            else:raise OSError('No free backup name')
            acl_ok=self._grant_root(backup)and acl_ok
            originals={}
            # Package paths were checked in _previous_files/review; the rest are fixed names (.env too).
            for rel in [*(rel for _,rel,_ in ops),*METADATA]:
                if rel in originals:continue
                if not os.path.lexists(target/rel):originals[rel]=None;continue
                blob=_secret_decls.read_owned_file(target,rel,2_000_000);mode=stat.S_IMODE(os.lstat(target/rel).st_mode);originals[rel]=(blob,mode)
                # Keys stay in memory only: a backup must not become a second copy of the .env.
                if rel!='.env':_write_new(backup,rel,blob)
        except (OSError,ValueError):raise InstallError('The current files could not be backed up; nothing was changed')from None
        touched=[];created=[]
        try:
            for kind,rel,blob in ops:
                touched.append(rel)
                if kind=='remove':
                    os.unlink(target/rel);_prune(target,rel);continue
                parent=_make_parents(target,rel,created)
                mode=originals[rel][1]if originals[rel]else 0o600 if rel=='.env'else 0o644
                _secret_decls.write_file_atomic(parent,rel.rsplit('/',1)[-1],blob,mode)
                if rel in expected and hashlib.sha256(_secret_decls.read_owned_file(target,rel,2_000_000)).hexdigest()!=expected[rel]:raise ValueError('Written file differs')
        except Exception:
            failed=False
            for rel in reversed(touched):
                try:
                    original=originals[rel]
                    if original is None:
                        if os.path.lexists(target/rel):os.unlink(target/rel)
                    else:_secret_decls.write_file_atomic(_make_parents(target,rel,[]),rel.rsplit('/',1)[-1],original[0],original[1])
                except Exception:failed=True
            for folder in reversed(created):
                try:os.rmdir(folder)
                except OSError:pass
            del originals
            if failed:raise InstallError('Update failed and some files could not be restored; the previous files are in .mybots-backup')from None
            raise InstallError('Update failed; the previous version was restored')from None
        del originals
        return acl_ok

    def _key_values(self,plan):
        """Values to write, by name: request input as is, ``default`` reread from the default
        profile's .env now (the client's copy is never used). Unusable defaults count as absent."""
        values={item['decl']['name']:item['value']for item in plan if item['source']=='input'}
        if any(item['source']=='default'for item in plan):
            env=_secret_decls.read_default_env(self.home)
            for item in plan:
                name=item['decl']['name']
                if item['source']=='default'and _secret_decls.has_value(env,name)and _secret_decls.value_ok(env[name]):values[name]=env[name]
            del env
        return values

    def _save_defaults(self,plan,values):
        """After a committed install: the per-key report, saving ticked new keys to the default
        profile. An existing default value is never replaced, and a failed save never fails the
        install (the profile already has the key); the reason is not logged, it could hold a value."""
        report=[]
        for item in plan:
            decl=item['decl'];name=decl['name'];value=values.get(name)
            row=dict(name=name,state='set'if value is not None else 'missing'if decl['required']else 'skipped',
                fromDefault=item['source']=='default'and value is not None,savedToDefault=False,defaultKept=False,defaultError=None)
            if item['save']and value is not None:
                current=_secret_decls.default_env_state(self.home)
                # A .env we cannot read safely (symlink, oversized, foreign owner, unparsable) may
                # still hold this name, and Hermes' writer would follow it and replace that value.
                if current is None:row['defaultError']=_secret_decls.DEFAULT_UNCHECKED
                # A blank ``NAME=`` line is not a value (same rule as prefill), so it gets filled.
                elif _secret_decls.has_value(current,name):row['defaultKept']=True
                else:
                    try:
                        self.save_default(self.home,name,value)
                        row['savedToDefault']=(_secret_decls.default_env_state(self.home)or {}).get(name)==value
                    except Exception:pass
                    if not row['savedToDefault']:row['defaultError']=_secret_decls.DEFAULT_SAVE_FAILED
                del current
            report.append(row)
        return report

    def _launch_seed(self):
        """What a new profile inherits from the default profile: Hermes' model seed, and the
        enabled language packs as manifest-only copies (plugin.yaml + locales, never code) so
        the Desktop stays in the user's language. Unreadable sources simply inherit nothing."""
        try:source=yaml.safe_load(self._profile_file(self.home,'config.yaml',1_000_000))
        except (OSError,ValueError,yaml.YAMLError,RecursionError):return {},[]
        if not isinstance(source,dict):return {},[]
        seed=model_seed(source);packs=[];plugins=source.get('plugins')
        enabled=plugins.get('enabled')if isinstance(plugins,dict)else None
        for name in enabled if isinstance(enabled,list)else []:
            if not isinstance(name,str)or not re.fullmatch(r'[a-z0-9][a-z0-9._-]{0,63}',name)or len(packs)>=4:continue
            root=self.home/'plugins'/name
            try:
                manifest=yaml.safe_load(self._profile_file(root,'plugin.yaml',65536))
                declared=manifest.get('provides_locales')if isinstance(manifest,dict)else None
                locales=sorted({(l.get('id')if isinstance(l,dict)else l)for l in declared}if isinstance(declared,list)else set())
                if not locales or not all(isinstance(l,str)and re.fullmatch(r'[a-z]{2,3}(-[a-z0-9]{2,8})?',l)for l in locales):continue
                files={'plugin.yaml':self._profile_file(root,'plugin.yaml',65536)};total=0
                for entry in sorted(os.listdir(root/'locales')):
                    if not re.fullmatch(r'[a-z0-9-]+(\.[a-z0-9-]+)?\.yaml',entry):continue
                    blob=self._profile_file(root,'locales/'+entry,4_000_000);total+=len(blob)
                    if total>8_000_000:raise ValueError('Language pack too large')
                    files['locales/'+entry]=blob
                if len(files)>1:packs.append(dict(name=name,locales=locales,files=files))
            except (OSError,ValueError,yaml.YAMLError,RecursionError):continue
        display=source.get('display');language=display.get('language')if isinstance(display,dict)else None
        if packs and isinstance(language,str)and any(language in p['locales']for p in packs):seed['display']={'language':language}
        return seed,packs

    def _profile_file(self,target,rel,limit):
        _catalog.safe_path(rel);return _secret_decls.read_owned_file(target,rel,limit)

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
        if _portable.is_link(profiles)or _portable.is_link(self.home):raise InstallError('Symlinked profile root is unsupported')
        if profiles.is_dir():
            names.update(p.name for p in profiles.iterdir()if re.fullmatch(r'[a-z][a-z0-9-]{0,39}',p.name)and not _portable.is_link(p)and(p/'mybots-receipt.json').is_file())
        result=[];default_env=None
        for bot in sorted(names):
            target=profiles/bot;entry=latest.get(bot);version=None;state='available';name=entry['metadata']['name']if entry else bot;has_receipt=False
            if target.exists()or _portable.is_link(target):
                # ``receipt``: the file exists, valid or not. A profile without one is the user's own (hidden from 설치된 봇).
                state='name-conflict';has_receipt=os.path.lexists(target/'mybots-receipt.json')
                try:
                    receipt=json.loads(self._profile_file(target,'mybots-receipt.json',32768))
                    if receipt['bot']!=bot or not isinstance(receipt['version'],str)or not re.fullmatch(r'[0-9]+\.[0-9]+\.[0-9]+',receipt['version'])or not re.fullmatch('[a-f0-9]{64}',receipt['digest']):raise ValueError('Invalid receipt')
                    version=receipt['version'];label=receipt.get('name',name);name=label if isinstance(label,str)and len(label)<=80 else name;state='installed'if self._profile_matches(target,receipt)and(not entry or entry['metadata']['version']==version and entry['manifestSha256']==receipt['digest'])else'other-version'
                except (OSError,ValueError,KeyError,TypeError,RecursionError):pass
            row=dict(bot=bot,version=version,profile=bot,state=state,name=name,latest=entry['metadata']['version']if entry else None,updatable=False,receipt=has_receipt)
            if version is not None and entry and _version(version)<_version(row['latest']):
                # Updatable only when the installed file list is known (receipt files or trusted entry).
                try:self._previous_files(receipt,entries);row['updatable']=True
                except InstallError:pass
            if version is not None:
                # Only v3 receipts carry declarations; v1/v2 bots and broken receipts get no field.
                try:
                    needed=_secret_decls.receipt_secrets(receipt)
                    # Presence only: the default profile's values never leave this method.
                    if default_env is None:default_env=_secret_decls.read_default_env(self.home)
                    row['secrets']=[{**{k:d[k]for k in ('name','required','label','purpose','url')},'state':s['state'],'defaultHasValue':_secret_decls.has_value(default_env,d['name'])}
                        for d,s in zip(needed,_secret_decls.key_states(needed,_secret_decls.env_state(target)))]
                except ValueError:pass
            result.append(row)
        del default_env
        return result

    def update_secrets(self,bot,version,secrets):
        """「키 넣기」: set declared keys in an installed bot's own ``.env``.

        Only a bot whose receipt (same bot and version) records v3 declarations is accepted, and
        only those names, for the components it was installed with. Request rules, ``default``
        rereads and save-to-default are the install's. MCP keys get a ``${NAME}`` reference in that
        profile's config.yaml when it has none. Hermes' ``_profile_scope`` is not used: it would
        switch on multi-profile hosting. Errors never name or carry a value.
        """
        if type(bot) is not str or not re.fullmatch(r'[a-z][a-z0-9-]{0,39}',bot) or type(version) is not str or not re.fullmatch(r'[0-9]+\.[0-9]+\.[0-9]+',version):
            raise InstallError('Invalid bot or fixed version')
        profiles=self.home/'profiles';target=profiles/bot
        if _portable.is_link(self.home)or _portable.is_link(profiles)or _portable.is_link(target)or not target.is_dir():raise InstallError('This bot is not installed')
        lock_path=profiles/'.mybots-install.lock'
        with _portable.file_lock(lock_path):
            try:
                receipt=json.loads(self._profile_file(target,'mybots-receipt.json',32768))
                if type(receipt) is not dict or receipt.get('bot')!=bot:raise ValueError('Invalid receipt')
            except (OSError,ValueError,RecursionError):raise InstallError('This bot was not installed by MyBots')from None
            if receipt.get('version')!=version:raise InstallError('The installed version differs; reload the bot list')
            try:
                needed=_secret_decls.receipt_secrets(receipt)
                plan=_secret_decls.install_plan(needed,secrets)
            except ValueError as exc:raise InstallError(str(exc))from None
            values=self._key_values(plan)
            if values:
                refs={}
                for item in plan:
                    name=item['decl']['name'];where=item['decl']['targets'][0]
                    if name in values and where.startswith('mcp:'):refs.setdefault(where[4:],[]).append(name)
                # Every predictable refusal happens here, before either file is written.
                try:env_blob=_secret_decls.prepare_profile_env(target,values)
                except ValueError as exc:
                    raise InstallError(_secret_decls.PROFILE_ENV_UNCHECKED if str(exc)==_secret_decls.PROFILE_ENV_UNCHECKED else 'Keys could not be saved; nothing was changed')from None
                config=self._config_with_refs(target,refs)if refs else None
                try:
                    if config is not None:_secret_decls.write_file_atomic(target,'config.yaml',config[0],config[1])
                    _secret_decls.write_file_atomic(target,'.env',env_blob,0o600)
                except OSError:raise InstallError('Keys could not be saved to the bot profile')from None
                del env_blob
            report={row['name']:row for row in self._save_defaults(plan,values)}
            states=_secret_decls.key_states(needed,_secret_decls.env_state(target))
        rows=[{**state,'updated':state['name']in values,**{k:report[state['name']][k]for k in ('fromDefault','savedToDefault','defaultKept','defaultError')}}for state in states]
        return dict(bot=bot,profile=bot,secrets=rows,notice=_secret_decls.APPLY_NOTICE)

    def _config_with_refs(self,target,refs):
        """``(bytes, mode)`` of the profile's config.yaml with missing ``${NAME}`` references added
        under ``mcp_servers.<id>.env``, or ``None`` when nothing is missing. A server the user
        removed is not recreated. Everything else round-trips through ``yaml.safe_dump`` in its
        current order (comments are not kept). An unreadable config refuses the whole update."""
        try:
            config=yaml.safe_load(self._profile_file(target,'config.yaml',1_000_000))
            mode=stat.S_IMODE(os.lstat(target/'config.yaml').st_mode)
        except (OSError,ValueError,yaml.YAMLError,RecursionError):raise InstallError('The bot profile config could not be read safely; nothing was changed')from None
        if not isinstance(config,dict):raise InstallError('The bot profile config could not be read safely; nothing was changed')
        servers=config.get('mcp_servers');changed=False
        for server_id,names in refs.items():
            server=servers.get(server_id)if isinstance(servers,dict)else None
            if not isinstance(server,dict):continue
            if server.get('env')is None:server['env']={}
            env=server['env']
            if not isinstance(env,dict):continue
            for name in names:
                if name not in env:env[name]='${'+name+'}';changed=True
        return (yaml.safe_dump(config,allow_unicode=True,sort_keys=False).encode('utf-8'),mode)if changed else None

    def _result(self,status,profile,preview,secrets):
        configured='voice'in preview['components']
        voice_status='authentication-check-required'if configured else 'not-selected'
        if configured and status=='already-installed':
            # A matching receipt preserves user edits. It does not prove that
            # the recommended preset is still present in the current config.
            configured=False
            try:
                path=self.home/'profiles'/profile/'config.yaml'
                fd=_portable.open_nofollow(path,os.O_RDONLY|_portable.NONBLOCK)
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
        model=None
        if status=='installed':model=preview['seed'].get('model')
        else:
            try:
                config=yaml.safe_load(self._profile_file(self.home/'profiles'/profile,'config.yaml',1_000_000))
                model=config.get('model')if isinstance(config,dict)else None
            except (OSError,ValueError,yaml.YAMLError,RecursionError):pass
        return dict(status=status,profile=profile,modelSetupRequired=model_summary(model)is None,model=model_summary(model),voiceConfigured=configured,voice=preview['voice']if configured else None,voiceStatus=voice_status,secrets=secrets)
