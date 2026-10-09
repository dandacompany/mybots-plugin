"""Bounded creator API transport. Credentials stay in the local backend."""
import importlib.util,json,os,re,stat,zipfile
from pathlib import Path
import requests

def sibling(name):
    spec=importlib.util.spec_from_file_location('mybots_market_'+name,Path(__file__).with_name(name+'.py'));module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module);return module
remote=sibling('remote_catalog');contract=remote.contract
UUID=re.compile(r'[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}')
def uuid(value):
    if not isinstance(value,str)or not UUID.fullmatch(value):raise ValueError('Invalid request identifier')
    return value
class MarketClientError(ValueError):
    def __init__(self,status,code,message):super().__init__(message);self.status=status;self.code=code
ERRORS={400:'입력 정보를 확인해 주세요.',401:'API 키가 만료·폐기되었거나 올바르지 않습니다.',403:'이 키에 필요한 등록 권한이 없습니다.',404:'등록 정보를 찾을 수 없습니다.',409:'등록 정보가 변경되었습니다. 다시 불러와 주세요.',413:'파일 크기 한도를 초과했습니다.',422:'패키지와 아바타 구성을 확인해 주세요.'}
def selected_file(value,extensions,limit):
    if not isinstance(value,str)or not value or len(value)>4096:raise ValueError('명시적으로 선택한 파일이 필요합니다.')
    p=Path(value).absolute();remote.no_links(p)
    if p.suffix.lower()not in extensions or p.name.startswith('.'):raise ValueError('허용된 파일을 선택해 주세요.')
    fd=os.open(p,os.O_RDONLY|os.O_NOFOLLOW|os.O_NONBLOCK)
    with os.fdopen(fd,'rb')as f:
        info=os.fstat(f.fileno())
        if not stat.S_ISREG(info.st_mode)or not 1<=info.st_size<=limit:raise ValueError('파일 형식 또는 크기를 확인해 주세요.')
        data=f.read(limit+1)
        if len(data)>limit:raise ValueError('파일 크기 한도를 초과했습니다.')
        return data
class MarketClient:
    def __init__(self,origin,token_provider,*,allowed_origins,session=None):
        self.origin=remote.origin(origin)
        if self.origin not in allowed_origins:raise ValueError('Unregistered catalog origin')
        self.token_provider=token_provider;self.session=session or requests.Session();self.session.trust_env=False
    def request(self,method,path,*,body=None,raw=None,headers=None):
        token=self.token_provider()
        if not token:raise MarketClientError(401,'missing_key','먼저 제작자 API 키를 연결해 주세요.')
        request_headers={**(headers or{}),'User-Agent':'MyBots/0.4.0','Authorization':'Bearer '+token}
        try:
            with self.session.request(method,self.origin+'/api/v1'+path,headers=request_headers,json=body if raw is None else None,data=raw,allow_redirects=False,stream=True,timeout=(5,15))as response:
                if 300<=response.status_code<400:raise MarketClientError(502,'redirect_rejected','인증 요청의 리디렉션을 거부했습니다.')
                if not 200<=response.status_code<300:raise MarketClientError(response.status_code,'request_rejected',ERRORS.get(response.status_code,'등록 서버에 연결하지 못했습니다.'))
                total=0;chunks=[]
                for chunk in response.iter_content(65536):
                    total+=len(chunk)
                    if total>2_800_000:raise MarketClientError(502,'response_limit','서버 응답 크기 한도를 초과했습니다.')
                    chunks.append(chunk)
                return remote.strict_json(b''.join(chunks))if total else None
        except MarketClientError:raise
        except Exception as exc:raise MarketClientError(502,'unavailable','등록 서버에 연결하지 못했습니다. 저장 완료 여부를 다시 확인해 주세요.')from exc
    def me(self):return self.request('GET','/me')
    def list_submissions(self):return self.request('GET','/submissions')
    def get_submission(self,draft_id):return self.request('GET','/submissions/'+uuid(draft_id))
    def create_submission(self,request_id,metadata):return self.request('POST','/submissions',body=contract.parse_metadata(metadata),headers={'Idempotency-Key':uuid(request_id)})
    def patch_submission(self,draft_id,revision,metadata):return self.request('PATCH','/submissions/'+uuid(draft_id),body=dict(revision=revision,metadata=contract.parse_metadata(metadata)))
    def package_metadata(self,path):
        import io
        raw=selected_file(path,{'.zip'},6_000_000)
        try:
            with zipfile.ZipFile(io.BytesIO(raw))as z:
                seen=set();total=0
                if len(z.infolist())>34:raise ValueError('Invalid ZIP')
                for info in z.infolist():
                    contract.safe_path(info.filename);mode=info.external_attr>>16&0o170000;total+=info.file_size
                    if info.filename.lower()in seen or info.flag_bits&1 or mode not in(0,0o100000)or total>5_100_000 or info.file_size>2_000_000 or info.filename not in('metadata.json','manifest.json')and not info.filename.startswith('payload/'):raise ValueError('Invalid ZIP')
                    seen.add(info.filename.lower())
                info=z.getinfo('metadata.json')
                if info.file_size>65536:raise ValueError('Metadata limit')
                return contract.parse_metadata(remote.strict_json(z.read(info)))
        except Exception as exc:raise ValueError('ZIP 파일 구성과 metadata.json을 확인해 주세요.')from exc
    def upload(self,draft_id,revision,path):
        self.package_metadata(path)
        return self.request('PUT','/submissions/'+uuid(draft_id)+'/package',raw=selected_file(path,{'.zip'},6_000_000),headers={'Content-Type':'application/zip','If-Match':str(revision)})
    def minimal(self,draft_id,revision,soul,avatar_path):
        from PIL import Image
        import io
        if not isinstance(soul,str)or not soul.strip()or len(soul.encode())>65536:raise ValueError('Soul 내용을 확인해 주세요.')
        raw=selected_file(avatar_path,{'.png','.jpg','.jpeg'},2_000_000)
        try:
            with Image.open(io.BytesIO(raw))as image:
                if image.width!=image.height or not 128<=image.width<=2048 or not((image.format=='PNG'and image.mode=='RGBA')or(image.format=='JPEG'and image.mode=='RGB'))or getattr(image,'n_frames',1)!=1:raise ValueError('Invalid avatar')
                image.load()
        except Exception as exc:raise ValueError('정사각형 PNG 또는 JPEG 아바타를 선택해 주세요.')from exc
        import base64
        return self.request('POST','/submissions/'+uuid(draft_id)+'/minimal-package',body=dict(revision=revision,soul=soul,avatarBase64=base64.b64encode(raw).decode()))
    def validate(self,draft_id,revision):return self.request('POST','/submissions/'+uuid(draft_id)+'/validate',body={'revision':revision})
