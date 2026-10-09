"""Hermes mounts this router behind its authenticated plugin API transport."""
import hashlib
import importlib.util
import json
from pathlib import Path
import platform
import sys

from fastapi import APIRouter, HTTPException, Request
from starlette.concurrency import run_in_threadpool
from pydantic import BaseModel, ConfigDict, Field
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

class ReviewRequest(BaseModel):
    model_config=ConfigDict(extra='forbid')
    bot:str=Field(pattern=r'^[a-z][a-z0-9-]{0,39}$')
    version:str=Field(pattern=r'^\d+\.\d+\.\d+$')
    components:list[str]=Field(default_factory=list,max_length=4)

class InstallRequest(BaseModel):
    model_config=ConfigDict(extra='forbid')
    token:str=Field(min_length=30,max_length=80)

@router.post('/review')
def review(request:ReviewRequest):
    try:return engine(write=True).review(request.bot,request.version,request.components)
    except InstallError as exc:raise HTTPException(400,str(exc)) from exc

@router.post('/install')
def install(request:InstallRequest):
    try:return engine(write=True).install(request.token)
    except InstallError as exc:raise HTTPException(409,str(exc)) from exc

@router.get('/capabilities')
def capabilities():
    inst=engine()
    return {'installerVersion':'0.4.1','marketProtocol':1 if inst.authority else 0,'registration':bool(inst.authority),'credentialProviders':credentials().providers() if inst.authority else [],'bots':[dict(id=b,version=v)for b,v in inst.trusted]}

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
    inst=engine(write=True);size=0;chunks=[]
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
    size=0;chunks=[]
    async for chunk in request.stream():
        size+=len(chunk)
        if size>100000:raise HTTPException(413,'등록 요청이 너무 큽니다.')
        chunks.append(chunk)
    try:
        body=_module._sibling('remote_catalog').strict_json(b''.join(chunks))
        if not isinstance(body,dict)or set(body)!=set(fields):raise ValueError('Invalid fields')
        if 'revision'in body and(type(body['revision'])is not int or not 1<=body['revision']<=2147483647):raise ValueError('Invalid revision')
        return body
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
    client=creator(write=True);body=await registration_body(request,['requestId','metadata'])
    return await registration_call(client.create_submission,body['requestId'],body['metadata'])

@router.post('/package-metadata')
async def package_metadata(request:Request):
    client=creator(write=True);body=await registration_body(request,['path'])
    return await registration_call(client.package_metadata,body['path'])

@router.get('/submissions/{draft_id}')
async def submission(draft_id:str):return await registration_call(creator().get_submission,draft_id)

@router.patch('/submissions/{draft_id}')
async def patch_submission(draft_id:str,request:Request):
    client=creator(write=True);body=await registration_body(request,['revision','metadata'])
    return await registration_call(client.patch_submission,draft_id,body['revision'],body['metadata'])

@router.post('/submissions/{draft_id}/upload')
async def upload_submission(draft_id:str,request:Request):
    client=creator(write=True);body=await registration_body(request,['revision','path'])
    return await registration_call(client.upload,draft_id,body['revision'],body['path'])

@router.post('/submissions/{draft_id}/minimal')
async def minimal_submission(draft_id:str,request:Request):
    client=creator(write=True);body=await registration_body(request,['revision','soul','avatarPath'])
    return await registration_call(client.minimal,draft_id,body['revision'],body['soul'],body['avatarPath'])

@router.post('/submissions/{draft_id}/validate')
async def validate_submission(draft_id:str,request:Request):
    client=creator(write=True);body=await registration_body(request,['revision'])
    return await registration_call(client.validate,draft_id,body['revision'])
