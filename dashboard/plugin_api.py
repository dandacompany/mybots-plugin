"""Hermes mounts this router behind its authenticated plugin API transport."""
import hashlib
import importlib.util
import json
from pathlib import Path
import platform
import re
import sys

from fastapi import APIRouter, HTTPException, Request
from starlette.concurrency import run_in_threadpool
from hermes_constants import get_hermes_home

_spec=importlib.util.spec_from_file_location('mybots_installer',Path(__file__).with_name('installer.py'))
_module=importlib.util.module_from_spec(_spec)
sys.modules[_spec.name]=_module
_spec.loader.exec_module(_module)
Installer,InstallError=_module.Installer,_module.InstallError
router=APIRouter()
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
            _credentials=module.Credentials(Path(__file__).with_name('publisher-keys.json'),Path.home()/'.hermes/.mybots/credentials')
        except Exception as exc:raise HTTPException(503,'제작자 키 공급자 설정을 확인해 주세요.')from exc
    return _credentials

def creator(write=False):
    inst=engine(write=write);provider=credentials();client=_module._sibling('market_client')
    return client.MarketClient(inst.origin,lambda:provider.resolve(inst.origin),allowed_origins=provider.allowed)

def engine(write=False):
    global _engine
    home=Path.home()/'.hermes'
    if write and Path(get_hermes_home()).resolve()!=home.resolve():
        raise HTTPException(409,'로컬 default 프로필로 연결한 뒤 다시 시도해 주세요.')
    settings_path=Path(__file__).with_name('settings.json')
    machine=hashlib.sha256((platform.node()+str(home)).encode()).hexdigest()
    # A fresh Git package has no machine-specific configuration. Use the signed
    # production catalog in memory; preserve existing local settings exactly.
    settings=json.loads(settings_path.read_text()) if settings_path.exists() else {
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
    Electron transport always sends application/json for object bodies (fetchJson)."""
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
    return {'installerVersion':'0.6.0','marketProtocol':1 if inst.authority else 0,'registration':bool(inst.authority),'credentialProviders':credentials().providers() if inst.authority else [],'bots':[dict(id=b,version=v)for b,v in inst.trusted]}

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
