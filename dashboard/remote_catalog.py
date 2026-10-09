"""Verify signed snapshots with pinned publisher keys. No executable policy is downloaded."""
import base64,fcntl,hashlib,importlib.util,json,os,re,stat,tempfile,threading,time
from contextlib import contextmanager
from datetime import datetime,timezone,timedelta
from pathlib import Path
from urllib.parse import urlsplit,quote
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PublicKey
_spec=importlib.util.spec_from_file_location('mybots_catalog_contract',Path(__file__).with_name('catalog.py'));contract=importlib.util.module_from_spec(_spec);_spec.loader.exec_module(contract)
def unique_object(pairs):
    result={}
    for key,value in pairs:
        if key in result:raise ValueError('Duplicate JSON key')
        result[key]=value
    return result
def strict_json(raw):return json.loads(raw.decode('utf-8')if isinstance(raw,bytes)else raw,object_pairs_hook=unique_object,parse_constant=lambda _:(_ for _ in()).throw(ValueError('Invalid JSON number')))
def origin(value):
    if not isinstance(value,str):raise ValueError('Invalid catalog origin')
    u=urlsplit(value)
    if not u.hostname or u.username or u.password or u.path not in('','/')or u.query or u.fragment or not(u.scheme=='https'or u.scheme=='http'and u.hostname in('127.0.0.1','localhost','::1')):raise ValueError('Use a registered HTTPS catalog origin')
    try:u.port
    except ValueError as exc:raise ValueError('Invalid catalog origin')from exc
    return value.rstrip('/')
def no_links(path):
    for p in(Path(path),*Path(path).parents):
        if p.is_symlink():raise ValueError('Symlinked catalog state is unsupported')
def timestamp(value):
    if not isinstance(value,str)or not re.fullmatch(r'\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,6})?Z',value):raise ValueError('Invalid catalog timestamp')
    return datetime.fromisoformat(value.replace('Z','+00:00'))
class VerifiedCatalog:
    def __init__(self,data,key_id):
        self.data=data;self.key_id=key_id;self.revision=int(data['revision']);self.expires_at=timestamp(data['expiresAt']);self.issued_at=timestamp(data['issuedAt']);self.bots=data['bots'];self.trusted=contract.parse_entries(data['trusted'])
class CatalogAuthority:
    def __init__(self,origin_value,keys_path,state_dir,fetch,now=None):
        self.origin=origin(origin_value);self.fetch=fetch;self.now=now or(lambda:datetime.now(timezone.utc));self.mutex=threading.Lock();self.checked_at=None;self.checked_monotonic=None;self.current=None
        try:
            no_links(keys_path);raw=Path(keys_path).read_bytes()
            if len(raw)>65536:raise ValueError('Publisher key size limit')
            config=contract.record(strict_json(raw),('schemaVersion','origins'))
            if config['schemaVersion']!=1 or not isinstance(config['origins'],dict):raise ValueError('Invalid publisher keys')
            self.keys=config['origins'].get(self.origin)
            if not isinstance(self.keys,dict)or not self.keys:raise ValueError('Unregistered catalog origin')
            for key_id,key in self.keys.items():
                if not re.fullmatch(r'[a-zA-Z0-9_-]{1,64}',key_id)or len(base64.b64decode(key,validate=True))!=32:raise ValueError('Invalid publisher key')
        except (OSError,TypeError,KeyError)as exc:raise ValueError('Publisher keys unavailable')from exc
        self.state_dir=Path(state_dir).absolute();no_links(self.state_dir);self.state_dir.mkdir(mode=0o700,parents=True,exist_ok=True)
        if self.state_dir.stat().st_uid!=os.getuid()or self.state_dir.stat().st_mode&0o077:raise ValueError('Catalog state must be owner-only')
        self.states={key_id:self.state_dir/(hashlib.sha256((self.origin+'\0'+key_id).encode()).hexdigest()+'.json')for key_id in self.keys}
        self.high_water={}
        for key_id,state in self.states.items():
            no_links(state)
            if state.exists():
                envelope=strict_json(self._read_state(key_id));verified=self._verify(json.dumps(envelope).encode(),allow_expired=True)
                if verified.key_id!=key_id:raise ValueError('Invalid saved catalog key')
                self.high_water[key_id]=envelope
    def _read_state(self,key_id):
        fd=os.open(self.states[key_id],os.O_RDONLY|os.O_NOFOLLOW|os.O_NONBLOCK)
        with os.fdopen(fd,'rb')as f:
            info=os.fstat(f.fileno())
            if not stat.S_ISREG(info.st_mode)or info.st_uid!=os.getuid()or info.st_mode&0o077:raise ValueError('Invalid saved catalog state')
            raw=f.read(2_000_001)
            if len(raw)>2_000_000:raise ValueError('Saved catalog size limit')
            return raw
    @contextmanager
    def _state_lock(self,key_id):
        no_links(self.state_dir);file=self.states[key_id].with_suffix('.lock');no_links(file)
        fd=os.open(file,os.O_CREAT|os.O_RDWR|os.O_NOFOLLOW,0o600)
        with os.fdopen(fd,'a')as lock:
            if not stat.S_ISREG(os.fstat(lock.fileno()).st_mode):raise ValueError('Invalid catalog lock')
            fcntl.flock(lock,fcntl.LOCK_EX);yield
    def _verify(self,raw,allow_expired=False):
        try:
            if not isinstance(raw,bytes)or len(raw)>2_000_000:raise ValueError('Catalog response size limit')
            envelope=contract.record(strict_json(raw),('keyId','payload','signature'));key_id=envelope['keyId']
            if key_id not in self.keys:raise ValueError('Unregistered publisher key')
            payload=base64.b64decode(envelope['payload'],validate=True);signature=base64.b64decode(envelope['signature'],validate=True)
            if len(payload)>1_500_000 or len(signature)!=64:raise ValueError('Invalid catalog signature size')
            Ed25519PublicKey.from_public_bytes(base64.b64decode(self.keys[key_id],validate=True)).verify(signature,payload)
            data=contract.record(strict_json(payload),('schemaVersion','minimumInstallerVersion','revision','issuedAt','expiresAt','bots','trusted'))
            if type(data['schemaVersion'])is not int or data['schemaVersion']!=2 or data['minimumInstallerVersion']!='0.4.0':raise ValueError('Incompatible catalog schema')
            if not isinstance(data['revision'],str)or not re.fullmatch(r'[1-9][0-9]{0,19}',data['revision']):raise ValueError('Invalid catalog revision')
            issued,expires=timestamp(data['issuedAt']),timestamp(data['expiresAt']);now=self.now()
            if expires<=issued or expires-issued>timedelta(hours=24)or not allow_expired and(issued>now+timedelta(minutes=5)or expires<=now):raise ValueError('Catalog expired or issued in future')
            verified=VerifiedCatalog(data,key_id)
            if not isinstance(data['bots'],list)or len(data['bots'])>200:raise ValueError('Invalid public bots')
            latest={}
            for identity,entry in verified.trusted.items():
                bot,version=identity
                if bot not in latest or tuple(map(int,version.split('.')))>tuple(map(int,latest[bot]['metadata']['version'].split('.'))):latest[bot]=entry
            cards=set()
            for card in data['bots']:
                contract.record(card,(*contract.META,'avatarUrl','detailUrl','installUrl'));bot=card['id'];entry=latest.get(bot)
                if bot in cards or not entry or {k:card[k]for k in contract.META}!=entry['metadata']:raise ValueError('Card/trust mismatch')
                avatar=next(f['path']for f in entry['files']if f['component']=='avatar');version=card['version']
                if card['avatarUrl']!=f'/api/bots/{bot}/{version}/files/{avatar}'or card['detailUrl']!=f'/bot.html?bot={bot}'or card['installUrl']!=f'hermes://mybots/install?bot={bot}&version={version}':raise ValueError('Unsafe public bot paths')
                cards.add(bot)
            if cards!=set(latest):raise ValueError('Card/trust mismatch')
            return verified
        except (ValueError,KeyError,TypeError,StopIteration,UnicodeError,RecursionError)as exc:raise ValueError('Invalid signed catalog: '+str(exc))from exc
        except Exception as exc:raise ValueError('Catalog signature verification failed')from exc
    def _persist(self,envelope,key_id):
        no_links(self.state_dir);no_links(self.states[key_id]);fd,name=tempfile.mkstemp(prefix='.catalog-',dir=self.state_dir)
        try:
            with os.fdopen(fd,'w')as f:json.dump(envelope,f,separators=(',',':'));f.flush();os.fsync(f.fileno())
            os.replace(name,self.states[key_id])
            fd=os.open(self.state_dir,os.O_RDONLY);os.fsync(fd);os.close(fd)
        finally:
            if os.path.exists(name):os.unlink(name)
    def refresh(self):
        try:raw=self.fetch(self.origin+'/api/v1/catalog',2_000_000)
        except Exception as exc:raise ValueError('Catalog unavailable; installation requires a live check')from exc
        verified=self._verify(raw);envelope=strict_json(raw)
        with self.mutex,self._state_lock(verified.key_id):
            if self.states[verified.key_id].exists():
                stored=strict_json(self._read_state(verified.key_id))
                if self._verify(json.dumps(stored).encode(),allow_expired=True).key_id!=verified.key_id:raise ValueError('Invalid saved catalog')
                self.high_water[verified.key_id]=stored
            previous=self.high_water.get(verified.key_id)
            if previous:
                old=self._verify(json.dumps(previous).encode(),allow_expired=True)
                if verified.revision<old.revision or verified.revision==old.revision and envelope!=previous:raise ValueError('Catalog revision rollback or equivocation')
            values={**self.high_water,verified.key_id:envelope};self._persist(envelope,verified.key_id);self.high_water=values;self.current=verified;self.checked_at=self.now().isoformat();self.checked_monotonic=time.monotonic()
        return verified
    def cached(self):
        with self.mutex:
            if self.current:return self.current
            verified=[self._verify(json.dumps(e).encode(),allow_expired=True)for e in self.high_water.values()]
            return max(verified,key=lambda c:c.issued_at)if verified else None
