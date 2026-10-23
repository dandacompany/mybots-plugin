"""Hermes mounts this router behind its authenticated plugin API transport."""
import hashlib
import importlib.util
import json
from pathlib import Path
import platform
import re
import sys
import threading
import time
from urllib.parse import urlsplit

from fastapi import APIRouter, HTTPException, Request
from starlette.concurrency import run_in_threadpool
from hermes_constants import get_default_hermes_root,get_hermes_home

_spec=importlib.util.spec_from_file_location('mybots_installer',Path(__file__).with_name('installer.py'))
_module=importlib.util.module_from_spec(_spec)
sys.modules[_spec.name]=_module
_spec.loader.exec_module(_module)
Installer,InstallError=_module.Installer,_module.InstallError
router=APIRouter()
VERSION='0.6.1'
# After a self-update the files on disk are the new version while this process still runs the old
# one, and installer.py/plugin_api.py load sibling modules from disk per request. Until Hermes
# restarts, every write answers this fixed 409 so old and new code never mix in a write.
RESTART_REQUIRED='MyBots를 업데이트했습니다. Hermes를 다시 시작한 뒤 이용해 주세요.'
_restart_required=False
def restart_guard():
    if _restart_required:raise HTTPException(409,RESTART_REQUIRED)
_engine=None
_credentials=None

@router.get('/presentations/{locale}')
def presentations(locale:str):
    if locale not in ('en','ko'):raise HTTPException(400,'Unsupported presentation locale')
    inst=engine()
    if not inst.authority:raise HTTPException(503,'Signed catalog required')
    try:return _module._sibling('remote_catalog').fetch_presentations(inst.origin,locale,_module.fetch_bytes)
    except Exception as exc:raise HTTPException(503,'Display translations unavailable')from exc

def credentials():
    global _credentials
    if _credentials is None:
        try:
            module=_module._sibling('credentials')
            _credentials=module.Credentials(Path(__file__).with_name('publisher-keys.json'),default_home()/'.mybots/credentials')
        except Exception as exc:raise HTTPException(503,'제작자 키 공급자 설정을 확인해 주세요.')from exc
    return _credentials

def creator(write=False):
    inst=engine(write=write);provider=credentials();client=_module._sibling('market_client')
    return client.MarketClient(inst.origin,lambda:provider.resolve(inst.origin),allowed_origins=provider.allowed)

def default_home():
    # Hermes' own default root (~/.hermes, %LOCALAPPDATA%\hermes on Windows, or a custom HERMES_HOME root).
    return Path(get_default_hermes_root())

def engine(write=False):
    global _engine
    home=default_home()
    if write:restart_guard()
    if write and Path(get_hermes_home()).resolve()!=home.resolve():
        raise HTTPException(409,'로컬 default 프로필로 연결한 뒤 다시 시도해 주세요.')
    settings_path=Path(__file__).with_name('settings.json')
    machine=hashlib.sha256((platform.node()+str(home)).encode()).hexdigest()
    # A fresh Git package has no machine-specific configuration. Use the signed
    # production catalog in memory; preserve existing local settings exactly.
    settings=json.loads(settings_path.read_text(encoding='utf-8')) if settings_path.exists() else {
        'catalogOrigin':'https://mybots.work','catalogProtocol':1,'machine':machine}
    if settings.get('machine')!=machine:raise HTTPException(403,'이 기기에서 설정한 설치 도우미만 사용할 수 있습니다.')
    signed=settings.get('catalogProtocol')==1
    if _engine is not None and(_engine.origin!=settings['catalogOrigin']or bool(_engine.authority)!=signed):
        with _engine.mutex:_engine.previews.clear()
        _engine=None
    if _engine is None:
        try:
            authority=None
            if signed:
                remote=_module._sibling('remote_catalog')
                authority=remote.CatalogAuthority(settings['catalogOrigin'],Path(__file__).with_name('publisher-keys.json'),home/'.mybots/catalog-cache',_module.fetch_bytes)
            _engine=Installer(home,settings['catalogOrigin'],authority=authority)
        except (ValueError,InstallError)as exc:raise HTTPException(503,'MyBots의 서버 출처와 공개키 연결 설정을 확인해 주세요.')from exc
    return _engine

# Request bodies are parsed here, not by pydantic models: a pydantic v2 422 carries the offending
# ``input``, and for a missing field that is the whole body, which for /install and /secrets holds
# key values. Hermes mounts this router into its own app, so an app-wide validation handler would
# change other routes; the rule stays local. Every error below is a fixed text without input.
BOT_RE=re.compile(r'[a-z][a-z0-9-]{0,39}');VERSION_RE=re.compile(r'[0-9]+\.[0-9]+\.[0-9]+')
INVALID_REQUEST='Invalid request'

JSON_TYPE=re.compile(r'application/([a-z0-9.!#$&^_-]+\+)?json',re.I)
CHARSET_PARAM=re.compile(r'charset\s*=\s*("?)utf-8\1',re.I)

def require_json(request):
    """415 unless Content-Type is application/json or */*+json, optionally with charset=utf-8.

    Every body route needs this: a cross-origin form or text/plain POST is a CORS "simple"
    request with no preflight, so without it a web page could reach these routes. The Desktop's
    Electron transport always sends application/json for object bodies (fetchJson). Every body route
    is a write, so the restart guard runs first, before any sibling module is loaded."""
    restart_guard()
    media,*params=(request.headers.get('content-type')or'').split(';')
    if not JSON_TYPE.fullmatch(media.strip())or any(not CHARSET_PARAM.fullmatch(p.strip())for p in params):
        raise HTTPException(415,'Content-Type must be application/json')

async def json_body(request,limit,required,optional=()):
    """The body as a dict holding all ``required`` and only ``required``/``optional`` fields.
    A non-JSON media type gets 415, oversized bodies 413, anything else malformed 422; none
    echoes the body."""
    require_json(request);size=0;chunks=[]
    async for chunk in request.stream():
        size+=len(chunk)
        if size>limit:raise HTTPException(413,'Request is too large')
        chunks.append(chunk)
    try:body=_module._sibling('remote_catalog').strict_json(b''.join(chunks))
    except Exception:raise HTTPException(422,INVALID_REQUEST)from None
    if type(body) is not dict or not set(required)<=set(body)<=set(required)|set(optional):raise HTTPException(422,INVALID_REQUEST)
    return body

def bot_version(body):
    bot,version=body['bot'],body['version']
    if type(bot) is not str or not BOT_RE.fullmatch(bot) or type(version) is not str or not VERSION_RE.fullmatch(version):raise HTTPException(422,INVALID_REQUEST)
    return bot,version

@router.post('/review')
async def review(request:Request):
    body=await json_body(request,4096,('bot','version'),('components',));bot,version=bot_version(body)
    components=body.get('components',[])
    if type(components) is not list or len(components)>4 or any(type(c) is not str for c in components):raise HTTPException(422,INVALID_REQUEST)
    def run():
        try:return engine(write=True).review(bot,version,components)
        except InstallError as exc:raise HTTPException(400,str(exc)) from exc
    return await run_in_threadpool(run)

@router.post('/install')
async def install(request:Request):
    # ``secrets`` is {NAME: {source, value?, saveToDefault?}}; the installer checks it against the
    # reviewed declarations and its errors never name the input.
    body=await json_body(request,100_000,('token',),('secrets',));token=body['token']
    if type(token) is not str or not 30<=len(token)<=80:raise HTTPException(422,INVALID_REQUEST)
    def run():
        try:return engine(write=True).install(token,body.get('secrets'))
        except InstallError as exc:raise HTTPException(409,str(exc)) from exc
    return await run_in_threadpool(run)

@router.post('/review-update')
async def review_update(request:Request):
    body=await json_body(request,4096,('bot','version'));bot,version=bot_version(body)
    def run():
        try:return engine(write=True).review_update(bot,version)
        except InstallError as exc:raise HTTPException(400,str(exc)) from exc
    return await run_in_threadpool(run)

@router.post('/update')
async def update_bot(request:Request):
    # Same shape and rules as /install: ``secrets`` holds only keys new to this version, and the
    # installer's refusals are fixed texts that never name the input.
    body=await json_body(request,100_000,('token',),('secrets',));token=body['token']
    if type(token) is not str or not 30<=len(token)<=80:raise HTTPException(422,INVALID_REQUEST)
    def run():
        try:return engine(write=True).update(token,body.get('secrets'))
        except InstallError as exc:raise HTTPException(409,str(exc)) from exc
    return await run_in_threadpool(run)

@router.post('/secrets')
async def update_secrets(request:Request):
    body=await json_body(request,100_000,('bot','version'),('secrets',));bot,version=bot_version(body)
    def run():
        try:return engine(write=True).update_secrets(bot,version,body.get('secrets'))
        except InstallError as exc:raise HTTPException(409,str(exc)) from exc
    return await run_in_threadpool(run)

@router.get('/capabilities')
def capabilities():
    inst=engine()
    return {'installerVersion':VERSION,'marketProtocol':1 if inst.authority else 0,'registration':bool(inst.authority),'credentialProviders':credentials().providers() if inst.authority else [],'bots':[dict(id=b,version=v)for b,v in inst.trusted]}

# Self-update. Hermes Desktop draws an update button only for catalog installs, so a Git-installed
# MyBots offers its own. Both routes ride Hermes' code: the check is ``hermes plugins check-updates``'
# per-plugin check (ls-remote of the recorded source against the recorded revision), the update is the
# ``hermes plugins update`` core (staged ``git pull --ff-only`` with autostash, install scan, atomic
# publish: the live tree is untouched until the scan passes). Answers carry fixed codes, never Git
# output, URLs or paths.
SELF_TTL,SELF_RETRY,SELF_WAIT=300,60,8
_self={'key':None,'at':0.0,'ttl':0,'value':None,'thread':None};_self_lock=threading.Lock();_self_running=threading.Lock()
# The raw plugin.yaml read is only for the official repository's exact origin; forks, mirrors and
# other spellings show the short SHA and fetch nothing.
OFFICIAL_ORIGIN=re.compile(r'https://(?i:github\.com)/dandacompany/mybots-plugin(?:\.git)?');OFFICIAL_REPO='dandacompany/mybots-plugin'
GITHUB_PATH=re.compile(r'/([A-Za-z0-9_.-]+)/([A-Za-z0-9_.-]+?)(?:\.git)?/?')
YAML_VERSION=re.compile(r'^version:\s*["\']?([0-9]+\.[0-9]+\.[0-9]+(?:-[0-9A-Za-z.-]+)?)["\']?\s*$',re.M)
SEMVER=re.compile(r'(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?');FULL_SHA=re.compile(r'[0-9a-fA-F]{40}')
SELF_NOTES=(('could not be stashed','local-changes-unsaved'),('conflicted with the update','local-changes-stashed'),
    ('re-applied on top of the update','local-changes-kept'),('new Python dependencies','dependencies'))

def _github(url):
    """``owner/repo`` of a plain https://github.com/<owner>/<repo>[.git] URL, else None."""
    try:
        parts=urlsplit(url)if isinstance(url,str)else None
        if parts is None or parts.scheme!='https'or parts.hostname!='github.com'or parts.port or parts.username or parts.query or parts.fragment:return None
    except ValueError:return None
    match=GITHUB_PATH.fullmatch(parts.path)
    return (match[1]+'/'+match[2]).lower()if match else None

def _same_path(a,b):
    import os
    return os.path.normcase(str(Path(a).resolve()))==os.path.normcase(str(Path(b).resolve()))

def _self_target():
    """``((provenance, origin), None)`` when this MyBots is the default profile's tracked Git install
    from GitHub, else ``(None, reason)`` with a fixed reason code."""
    home=default_home()
    if not _same_path(get_hermes_home(),home):return None,'profile'
    target=home/'plugins'/'mybots'
    if not target.is_dir()or not _same_path(Path(__file__).parent.parent,target):return None,'location'
    try:
        from hermes_cli.plugins_provenance import ProvenanceClass,_git_origin_url,plugins_provenance
        prov=next((p for p in plugins_provenance(home/'plugins')if p.name=='mybots'),None)
        if prov is None or prov.klass is not ProvenanceClass.GIT:return None,'not-git'
        row=prov.row or {}
        if row.get('catalog')or row.get('catalog_name'):return None,'catalog'
        if row.get('pinned')is True:return None,'pinned'
        repo,origin=_github(row.get('source')),_origin(target)
        if repo is None or _github(origin)!=repo:return None,'origin'
    except Exception:return None,'unsupported'
    return (prov,origin),None

def _origin(target):
    from hermes_cli.plugins_provenance import _git_origin_url
    return _git_origin_url(target)

def _remote_version(origin,sha):
    """plugin.yaml's version at that exact commit of the official repository, else None (no fetch)."""
    if not isinstance(origin,str)or not OFFICIAL_ORIGIN.fullmatch(origin):return None
    try:match=YAML_VERSION.search(_module.fetch_bytes(f'https://raw.githubusercontent.com/{OFFICIAL_REPO}/{sha}/plugin.yaml',4096).decode('utf-8'))
    except Exception:return None
    return match[1]if match else None

def _semver_key(text):
    """SemVer 2.0 precedence key (build metadata unsupported), else None."""
    match=SEMVER.fullmatch(text)if isinstance(text,str)else None
    if match is None:return None
    pre=match[4]
    # A release sorts after every prerelease of the same core; numeric identifiers sort before alphanumeric ones.
    tail=(1,)if pre is None else(0,*((0,int(p),'')if p.isdigit()else(1,0,p)for p in pre.split('.')))
    return (int(match[1]),int(match[2]),int(match[3]),tail)

def _newer(latest,installed):
    a,b=_semver_key(latest),_semver_key(installed)
    return a is not None and b is not None and a>b

def _checkout_head(path):
    """The checkout's own HEAD through Hermes' git helper (Hermes' record can be the install-time commit), else None."""
    try:
        from hermes_cli.plugins_cmd import _resolve_git_executable
        from hermes_cli.plugins_cmd_git import _git_head_revision
        return _git_head_revision(Path(path),_resolve_git_executable())
    except Exception:return None

def _self_check(prov,origin):
    """Offer an update only for a strictly newer plugin version, or, when the version cannot be read,
    for a remote commit other than the checkout's current HEAD. Never a downgrade or a same version."""
    from hermes_cli.plugins_updates import check_provenanced,default_fetch,default_ls_remote
    result=check_provenanced(prov,fetch=default_fetch,ls_remote=default_ls_remote)
    if result.needs_fixing or result.update_available is None:return {'latest':None,'available':False,'reason':'unavailable'}
    current={'latest':VERSION,'available':False}
    if not result.update_available:return current
    latest=str(result.latest or'')
    if not FULL_SHA.fullmatch(latest):return {'latest':latest,'available':True}if _newer(latest,VERSION)else current
    sha=latest.lower();head=_checkout_head(prov.path)
    if head==sha:return current
    remote=_remote_version(origin,sha)
    if remote is not None:return {'latest':remote,'available':True}if _newer(remote,VERSION)else current
    if head is None:return {'latest':None,'available':False,'reason':'unavailable'}
    return {'latest':sha[:7],'available':True}

def _self_fill(key,prov,origin):
    try:value=_self_check(prov,origin)
    except Exception:value={'latest':None,'available':False,'reason':'unavailable'}
    with _self_lock:_self.update(key=key,at=time.monotonic(),ttl=SELF_RETRY if value.get('reason')else SELF_TTL,value=value)

def self_status():
    """The installed version and, for a Git install, whether the recorded source has moved on.
    The remote check runs in a worker cached for a few minutes; a slow one answers ``checking``."""
    base={'installed':VERSION,'latest':None,'available':False,**({'restartRequired':True}if _restart_required else{})}
    found,reason=_self_target()
    if found is None:return {**base,'kind':'other','reason':reason}
    prov,origin=found;key=(origin,str((prov.row or{}).get('revision')or''))
    with _self_lock:
        fresh=_self['key']==key and _self['value']is not None and time.monotonic()-_self['at']<_self['ttl']
        worker=_self['thread']
        if not fresh and not(worker and worker.is_alive()):
            worker=_self['thread']=threading.Thread(target=_self_fill,args=(key,prov,origin),daemon=True);worker.start()
    if not fresh:worker.join(SELF_WAIT)
    with _self_lock:value=_self['value']if _self['key']==key else None
    return {**base,'kind':'git',**(value or{'reason':'checking'})}

def _hermes_update(prov):
    """Hermes' own non-interactive Git plugin update for this checkout; returns its output text."""
    from contextlib import nullcontext
    from hermes_cli import plugins_cmd as pc
    from hermes_cli.plugins_cmd_update import _post_pull_housekeeping,_pull_plugin_update
    try:from hermes_cli.web_server_profiles import _config_profile_scope as scope
    except Exception:scope=lambda _profile:nullcontext()
    with scope(None):output=_pull_plugin_update(prov.path,lambda _record:'pinned',lambda:'not a git checkout')
    # The new tree is already published here; a housekeeping failure (bytecode, example files) must
    # not read as "the current version stays installed" (Hermes' dashboard path ignores it too).
    try:_post_pull_housekeeping(prov.path,pc._console())
    except Exception:pass
    return output

def _revision():
    try:
        from hermes_cli import plugins_cmd as pc
        value=pc._read_install_metadata().get('mybots',{}).get('revision')
    except Exception:return None
    return value[:7].lower()if isinstance(value,str)and value else None

def _note(text):return next((code for needle,code in SELF_NOTES if needle in text),None)

def self_update_run(prov):
    from hermes_cli import plugins_cmd as pc
    before,result=_revision(),{'from':VERSION,'to':VERSION,'applies':'restart'}
    try:output=str(_hermes_update(prov)or'')
    except pc.PluginScanBlocked:return {**result,'status':'failed','note':'scan-blocked'}
    # Failures happen before publish: autostash only touched Hermes' staged copy, so even its
    # "preserved in git stash" texts leave the live tree as it was ('not-changed').
    except Exception as exc:return {**result,'status':'failed','note':_note(str(exc))or'not-changed'}
    with _self_lock:_self.update(key=None,value=None)
    after=_revision()
    if 'Already up to date'in output or before and before==after:return {**result,'status':'up-to-date'}
    try:to=YAML_VERSION.search((prov.path/'plugin.yaml').read_text(encoding='utf-8'))[1]
    except Exception:to=None
    global _restart_required
    _restart_required=True;note=_note(output)
    return {**result,'status':'updated','to':to,'revision':{'from':before,'to':after},**({'note':note}if note else{})}

@router.get('/self-update')
def self_update_status():return self_status()

@router.post('/self-update')
async def self_update(request:Request):
    await json_body(request,64,())
    found,reason=_self_target()
    if found is None:raise HTTPException(409,'로컬 default 프로필로 연결한 뒤 다시 시도해 주세요.'if reason=='profile'else'Git으로 설치한 MyBots만 여기서 업데이트할 수 있습니다.')
    if not _self_running.acquire(blocking=False):raise HTTPException(409,'MyBots 업데이트가 이미 진행 중입니다.')
    try:return await run_in_threadpool(self_update_run,found[0])
    finally:_self_running.release()

@router.get('/bots/{bot}/{version}')
def metadata(bot:str,version:str):
    try:return engine().metadata(bot,version)
    except InstallError as exc:raise HTTPException(400,str(exc))from exc

@router.get('/market')
def market():
    inst=engine()
    if not inst.authority:raise HTTPException(503,'서명 카탈로그 출처를 먼저 연결해 주세요.')
    cached=False
    try:catalog=inst._refresh()
    except InstallError:
        catalog=inst.authority.cached();cached=True
        if catalog is None:raise HTTPException(503,'카탈로그 서버에 연결하지 못했습니다. 다시 시도해 주세요.')
    checked=inst.authority.checked_at
    if checked is None:
        from datetime import datetime,timezone
        checked=datetime.fromtimestamp(inst.authority.states[catalog.key_id].stat().st_mtime,timezone.utc).isoformat()
    return dict(catalog=catalog.data,cached=cached,checkedAt=checked,statuses=inst.installed(catalog),origin=inst.origin)

@router.get('/installed')
def installed():return engine().installed()

@router.get('/connection')
def connection():
    inst=engine()
    try:return credentials().status(inst.origin)
    except ValueError as exc:raise HTTPException(503,'등록된 서버 출처와 공개키 설정이 필요합니다.')from exc

@router.post('/connection')
async def connect(request:Request):
    require_json(request);inst=engine(write=True);size=0;chunks=[]
    async for chunk in request.stream():
        size+=len(chunk)
        if size>2048:raise HTTPException(413,'키 연결 요청이 너무 큽니다.')
        chunks.append(chunk)
    try:
        body=json.loads(b''.join(chunks));mode=body.get('mode')if isinstance(body,dict)else None
        if mode not in('session','keyring','bws')or set(body)!=({'mode','secretId'}if mode=='bws'else{'mode','token'}):raise ValueError('Invalid connection request')
        provider=credentials();value=body.get('secretId')if mode=='bws'else body.get('token')
        method=provider.bind_bws if mode=='bws'else provider.connect_keyring if mode=='keyring'else provider.connect_session
        await run_in_threadpool(method,inst.origin,value)
        return await run_in_threadpool(provider.status,inst.origin)
    except Exception as exc:
        if isinstance(exc,HTTPException):raise
        raise HTTPException(400,'키 형식·권한·만료와 선택한 공급자 연결을 확인해 주세요. 키는 연결되지 않았습니다.')from exc

@router.delete('/connection')
def disconnect():
    inst=engine(write=True)
    try:credentials().disconnect(inst.origin);return credentials().status(inst.origin)
    except ValueError as exc:raise HTTPException(400,'로컬 키 연결을 해제하지 못했습니다. 공급자 상태를 확인해 주세요.')from exc

async def registration_body(request,fields):
    """``(client, body)`` for a registration write. The media type is checked before the creator
    is built, so a cross-origin simple request gets 415 without any creator or profile work."""
    require_json(request);client=creator(write=True);size=0;chunks=[]
    async for chunk in request.stream():
        size+=len(chunk)
        if size>100000:raise HTTPException(413,'등록 요청이 너무 큽니다.')
        chunks.append(chunk)
    try:
        body=_module._sibling('remote_catalog').strict_json(b''.join(chunks))
        if not isinstance(body,dict)or set(body)!=set(fields):raise ValueError('Invalid fields')
        if 'revision'in body and(type(body['revision'])is not int or not 1<=body['revision']<=2147483647):raise ValueError('Invalid revision')
        return client,body
    except Exception as exc:raise HTTPException(400,'등록 입력을 확인해 주세요.')from exc

async def registration_call(method,*args):
    try:return await run_in_threadpool(method,*args)
    except Exception as exc:
        status=getattr(exc,'status',400)
        if status not in(400,401,403,404,409,413,422,502):status=502
        messages={401:'API 키가 없거나 만료·폐기되었습니다. 연결 설정에서 확인해 주세요.',403:'등록 권한이 없습니다.',404:'등록 정보를 찾을 수 없습니다.',409:'정보가 변경되었거나 패키지 정보가 다릅니다. 다시 불러와 주세요.',413:'파일 크기 한도를 초과했습니다.',422:'패키지 구성을 확인해 주세요.',502:'등록 서버에 연결하지 못했습니다. 저장 여부를 다시 확인해 주세요.'}
        raise HTTPException(status,messages.get(status,'입력과 선택한 파일의 형식·크기를 확인해 주세요.'))from exc

@router.get('/submissions')
async def submissions():return await registration_call(creator().list_submissions)

@router.post('/submissions')
async def create_submission(request:Request):
    client,body=await registration_body(request,['requestId','metadata'])
    return await registration_call(client.create_submission,body['requestId'],body['metadata'])

@router.post('/package-metadata')
async def package_metadata(request:Request):
    client,body=await registration_body(request,['path'])
    return await registration_call(client.package_metadata,body['path'])

@router.get('/submissions/{draft_id}')
async def submission(draft_id:str):return await registration_call(creator().get_submission,draft_id)

@router.patch('/submissions/{draft_id}')
async def patch_submission(draft_id:str,request:Request):
    client,body=await registration_body(request,['revision','metadata'])
    return await registration_call(client.patch_submission,draft_id,body['revision'],body['metadata'])

@router.post('/submissions/{draft_id}/upload')
async def upload_submission(draft_id:str,request:Request):
    client,body=await registration_body(request,['revision','path'])
    return await registration_call(client.upload,draft_id,body['revision'],body['path'])

@router.post('/submissions/{draft_id}/minimal')
async def minimal_submission(draft_id:str,request:Request):
    client,body=await registration_body(request,['revision','soul','avatarPath'])
    return await registration_call(client.minimal,draft_id,body['revision'],body['soul'],body['avatarPath'])

@router.post('/submissions/{draft_id}/validate')
async def validate_submission(draft_id:str,request:Request):
    client,body=await registration_body(request,['revision'])
    return await registration_call(client.validate,draft_id,body['revision'])
