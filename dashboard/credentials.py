"""Origin-scoped references to bws or secure OS keyrings; session tokens are memory-only."""
import importlib.util,json,os,re,secrets,shlex,stat,subprocess,tempfile,threading
from pathlib import Path
from datetime import datetime,timezone
_spec=importlib.util.spec_from_file_location('mybots_credentials_client',Path(__file__).with_name('market_client.py'));client_module=importlib.util.module_from_spec(_spec);_spec.loader.exec_module(client_module)
remote=client_module.remote
TOKEN=re.compile(r'mb_(dev|live)_([a-f0-9-]{36})\.[A-Za-z0-9_-]{43}')
SECURE={'keyring.backends.macOS.Keyring','keyring.backends.SecretService.Keyring','keyring.backends.Windows.WinVaultKeyring'}
def token_format(token):
    if not isinstance(token,str)or not TOKEN.fullmatch(token):raise ValueError('MyBots API 키 형식을 확인해 주세요.')
    return TOKEN.fullmatch(token)
def bws_secret(secret_id):
    client_module.uuid(secret_id)
    auth=Path.home()/'.claude/auth/bitwarden.env';remote.no_links(auth)
    try:
        fd=os.open(auth,os.O_RDONLY|os.O_NOFOLLOW|os.O_NONBLOCK)
        with os.fdopen(fd,'rb')as f:
            info=os.fstat(f.fileno())
            if not stat.S_ISREG(info.st_mode)or info.st_uid!=os.getuid()or info.st_mode&0o077:raise ValueError('Invalid bws authentication file')
            raw=f.read(65537)
            if len(raw)>65536:raise ValueError('Invalid bws authentication file')
        access=None
        for line in raw.decode().splitlines():
            line=line.strip().removeprefix('export ');key,sep,value=line.partition('=')
            if sep and key.strip()=='BWS_ACCESS_TOKEN':
                parsed=shlex.split(value,comments=True)
                if len(parsed)!=1:raise ValueError('Invalid bws authentication file')
                access=parsed[0]
        if not access:raise ValueError('Missing bws authentication')
        result=subprocess.run(['bws','secret','get',secret_id,'-o','json'],env={**os.environ,'BWS_ACCESS_TOKEN':access},capture_output=True,timeout=20)
        if result.returncode or len(result.stdout)>65536:raise ValueError('bws unavailable')
        record=remote.strict_json(result.stdout)
        if record.get('id')!=secret_id or record.get('value')=='PENDING':raise ValueError('bws secret is not configured')
        token=record.get('value');token_format(token);return token
    except Exception as exc:raise ValueError('bws 연결과 항목의 설정 여부를 확인해 주세요.')from exc
class Credentials:
    def __init__(self,keys_path,state_dir,*,verify=None,bws_read=bws_secret,keyring_backend=None):
        remote.no_links(keys_path);raw=Path(keys_path).read_bytes()
        if len(raw)>65536:raise ValueError('Invalid publisher keys')
        keys=remote.contract.record(remote.strict_json(raw),('schemaVersion','origins'))
        if keys['schemaVersion']!=1 or not isinstance(keys['origins'],dict):raise ValueError('Invalid publisher keys')
        self.allowed={remote.origin(o)for o,k in keys['origins'].items()if isinstance(k,dict)and k};self.directory=Path(state_dir).absolute();remote.no_links(self.directory);self.directory.mkdir(parents=True,exist_ok=True,mode=0o700)
        if self.directory.stat().st_uid!=os.getuid()or self.directory.stat().st_mode&0o077:raise ValueError('Credential state must be owner-only')
        self.file=self.directory/'connections.json';remote.no_links(self.file);self.session={};self.mutex=threading.RLock();self.bws_read=bws_read;self.backend=keyring_backend
        if self.backend is None:
            try:
                import keyring
                self.backend=keyring.get_keyring()
            except Exception:self.backend=None
        self.verify=verify or(lambda origin,token:client_module.MarketClient(origin,lambda:token,allowed_origins=self.allowed).me())
        self.bindings={}
        if self.file.exists():
            if self.file.stat().st_uid!=os.getuid()or self.file.stat().st_mode&0o077 or self.file.stat().st_size>65536:raise ValueError('Invalid credential references')
            data=remote.strict_json(self.file.read_bytes());remote.contract.record(data,('bindings',));self.bindings=data['bindings']
            if not isinstance(self.bindings,dict)or len(self.bindings)>20:raise ValueError('Invalid credential references')
            for o,b in self.bindings.items():
                self._origin(o);remote.contract.record(b,('mode','secretId')if b.get('mode')=='bws'else('mode',))
                if b['mode']=='bws':client_module.uuid(b['secretId'])
                elif b['mode']!='keyring':raise ValueError('Invalid credential provider')
    def _origin(self,value):
        value=remote.origin(value)
        if value not in self.allowed:raise ValueError('Unregistered catalog origin')
        return value
    def _secure(self):return self.backend is not None and (type(self.backend).__module__+'.'+type(self.backend).__qualname__)in SECURE
    def providers(self):return ['bws',*(['keyring']if self._secure()else[]),'session']
    def _save(self,bindings):
        remote.no_links(self.directory);remote.no_links(self.file);fd,name=tempfile.mkstemp(prefix='.connection-',dir=self.directory)
        try:
            with os.fdopen(fd,'w')as f:json.dump({'bindings':bindings},f);f.flush();os.fsync(f.fileno())
            os.replace(name,self.file);fd=os.open(self.directory,os.O_RDONLY);os.fsync(fd);os.close(fd)
        finally:
            if os.path.exists(name):os.unlink(name)
    def _verify(self,origin,token):
        match=token_format(token);actor=self.verify(origin,token);remote.contract.record(actor,('ownerId','keyId','scopes','expiresAt'));client_module.uuid(actor['ownerId']);client_module.uuid(actor['keyId'])
        if actor['keyId']!=match[2]or not isinstance(actor['scopes'],list)or not actor['scopes']or not set(actor['scopes'])<={'submissions:read','submissions:write'}or len(set(actor['scopes']))!=len(actor['scopes']):raise ValueError('API 키 권한을 확인해 주세요.')
        expiry=datetime.fromisoformat(actor['expiresAt'].replace('Z','+00:00'))
        if expiry.tzinfo is None or expiry<=datetime.now(timezone.utc):raise ValueError('API 키가 만료되었습니다.')
        return actor
    def resolve(self,origin):
        origin=self._origin(origin)
        with self.mutex:
            if origin in self.session:return self.session[origin]
            binding=self.bindings.get(origin)
            if not binding:return None
            if binding['mode']=='bws':token=self.bws_read(binding['secretId'])
            else:
                if not self._secure():raise ValueError('A secure OS keyring is unavailable')
                try:token=self.backend.get_password('MyBots',origin)
                except Exception as exc:raise ValueError('OS 보안 저장소에 연결하지 못했습니다.')from exc
            token_format(token);return token
    def _change(self,origin,binding,session_token=None):
        # Persist references before changing memory. Never silently downgrade storage.
        bindings={**self.bindings}
        if binding is None:bindings.pop(origin,None)
        else:bindings[origin]=binding
        old=self.bindings.get(origin,{})
        removed=None
        if old.get('mode')=='keyring'and(binding or{}).get('mode')!='keyring':
            if not self._secure():raise ValueError('Secure keyring unavailable; saved key could not be removed')
            removed=self.backend.get_password('MyBots',origin)
            self.backend.delete_password('MyBots',origin)
        try:self._save(bindings)
        except Exception:
            if removed is not None:self.backend.set_password('MyBots',origin,removed)
            raise
        self.bindings=bindings
        self.session.pop(origin,None)
        if session_token is not None:self.session[origin]=session_token
    def connect_session(self,origin,token):
        origin=self._origin(origin);self._verify(origin,token)
        with self.mutex:self._change(origin,None,token)
    def connect_keyring(self,origin,token):
        origin=self._origin(origin)
        if not self._secure():raise ValueError('A secure OS keyring is unavailable')
        self._verify(origin,token);account=secrets.token_hex(16);probe=secrets.token_urlsafe(32)
        with self.mutex:
            previous=self.backend.get_password('MyBots',origin)
            try:
                try:
                    self.backend.set_password('MyBots probe',account,probe)
                    if self.backend.get_password('MyBots probe',account)!=probe:raise ValueError('Secure keyring probe failed')
                finally:self.backend.delete_password('MyBots probe',account)
                self.backend.set_password('MyBots',origin,token)
                if self.backend.get_password('MyBots',origin)!=token:raise ValueError('Secure keyring save failed')
                self._change(origin,{'mode':'keyring'})
            except Exception as exc:
                if previous is None:self.backend.delete_password('MyBots',origin)
                else:self.backend.set_password('MyBots',origin,previous)
                raise ValueError('Secure keyring save failed; session fallback was not used')from exc
    def bind_bws(self,origin,secret_id):
        origin=self._origin(origin);client_module.uuid(secret_id);token=self.bws_read(secret_id);self._verify(origin,token)
        with self.mutex:self._change(origin,{'mode':'bws','secretId':secret_id})
    def disconnect(self,origin):
        origin=self._origin(origin)
        with self.mutex:self._change(origin,None)
    def status(self,origin):
        origin=self._origin(origin);provider='session'if origin in self.session else self.bindings.get(origin,{}).get('mode');result=dict(origin=origin,environment=None,provider=provider,connected=False,providers=self.providers(),owner=None,scopes=[],expiresAt=None)
        if provider is None:return result
        try:
            token=self.resolve(origin);actor=self._verify(origin,token);result.update(environment=token_format(token)[1],connected=True,owner=actor['ownerId'],scopes=actor['scopes'],expiresAt=actor['expiresAt'])
        except Exception:result['reason']='키 만료·폐기 여부와 자격 공급자 연결을 확인해 주세요.'
        return result
