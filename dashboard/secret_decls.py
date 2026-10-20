"""Declared install-time secrets (manifest v3).

Mirrors ``parseSecrets`` in packages/contracts/src/index.ts rule for rule; the shared cases in
tests/fixtures/secret-cases.json pin both. Error messages never echo the offending input.

Loaded by installer.py through ``_sibling`` (module name ``mybots_secret_decls``).

Also reads the default profile's ``.env`` (review: which declared names it already holds; install:
the values a ``default`` source copies) and writes the new profile's ``.env``. Values travel only
from a request or the default ``.env`` into a profile ``.env``. Nothing in this module logs or
raises with a value.
"""
from __future__ import annotations
import codecs
import json
import os
import re
import stat
import tempfile
from pathlib import Path

NAME_RE=re.compile(r'[A-Z][A-Z0-9_]{2,63}')
URL_RE=re.compile(r'https://[A-Za-z0-9.-]+(:[0-9]{1,5})?(/[!-~]*)?')
TARGET_RE=re.compile(r'(env|mcp:[a-z][a-z0-9-]{0,39})')
BLANK_RE=re.compile(r'[ \t\n\r]*')
CONTROL_RE=re.compile(r'[\x00-\x1f\x7f]')
KEYS=('name','required','label','purpose','url','component','targets')
COMPONENTS=('skills','plugin','mcp')

class DenylistUnavailable(RuntimeError):
    pass

def _load_denylist():
    # Fail closed: without the denylist no secret name can be checked, so refuse to load at all.
    path=Path(__file__).with_name('env-denylist.json')
    if not path.exists():path=Path(__file__).resolve().parents[2]/'contracts/env-denylist.json'
    try:
        data=json.loads(path.read_text())
        names,prefixes=data['names'],data['prefixes']
        if type(names) is not list or type(prefixes) is not list or not names or not prefixes or any(type(v) is not str for v in names+prefixes):raise ValueError
    except (OSError,ValueError,KeyError,TypeError) as exc:
        raise DenylistUnavailable('MyBots env-denylist.json is missing or invalid; reinstall the MyBots helper') from None
    return frozenset(names),tuple(prefixes)

DENY_NAMES,DENY_PREFIXES=_load_denylist()

def _text(value,limit):
    return 1<=len(value)<=limit and not BLANK_RE.fullmatch(value) and not CONTROL_RE.search(value)

def _schema_version(manifest,*versions):
    # Same as TS ``typeof v==='number'``: bool is excluded, 3 and 3.0 are equal.
    v=manifest.get('schemaVersion');return type(v) in (int,float) and v in versions

def manifest_secrets(manifest,metadata)->list[dict]:
    """Secrets declared by any manifest: v1/v2 declare none, v3 goes through parse_secrets."""
    if type(manifest) is dict and _schema_version(manifest,1,2):return []
    return parse_secrets(manifest,metadata)

def parse_secrets(value,metadata)->list[dict]:
    """Validate a ``secrets`` list (or a v3 manifest carrying one) and return detached copies.

    Anything else, including a v1/v2 manifest, raises ``Invalid secrets list``.
    ``metadata`` needs ``optional`` and ``mcp`` (``{'serverId': ...}`` or None).
    """
    if type(value) is dict and _schema_version(value,3):value=value.get('secrets')
    if type(value) is not list:raise ValueError('Invalid secrets list')
    if len(value)>8:raise ValueError('Too many secrets')
    optional=metadata.get('optional') or [];mcp=metadata.get('mcp')
    names=set();out=[]
    for entry in value:
        if type(entry) is not dict or len(entry)!=len(KEYS) or any(k not in entry for k in KEYS) or type(entry['required']) is not bool \
                or any(type(entry[k]) is not str for k in ('name','label','purpose','url','component')):
            raise ValueError('Invalid secret declaration')
        name=entry['name']
        if not NAME_RE.fullmatch(name):raise ValueError('Invalid secret name')
        if name in DENY_NAMES or name.startswith(DENY_PREFIXES):raise ValueError('Secret name is reserved')
        if not _text(entry['label'],80):raise ValueError('Invalid secret label')
        if not _text(entry['purpose'],200):raise ValueError('Invalid secret purpose')
        if len(entry['url'])>300 or not URL_RE.fullmatch(entry['url']):raise ValueError('Invalid secret URL')
        component=entry['component']
        if component not in COMPONENTS:raise ValueError('Invalid secret component')
        targets=entry['targets']
        if type(targets) is not list or len(targets)!=1 or type(targets[0]) is not str or not TARGET_RE.fullmatch(targets[0]):
            raise ValueError('Invalid secret targets')
        if component not in optional or (component=='mcp' and not mcp):raise ValueError('Secret component is not provided by this bot')
        target=targets[0]
        if target!=('mcp:'+mcp['serverId'] if component=='mcp' else 'env'):raise ValueError('Secret target mismatch')
        if name in names:raise ValueError('Duplicate secret name')
        names.add(name)
        out.append({'name':name,'required':entry['required'],'label':entry['label'],'purpose':entry['purpose'],'url':entry['url'],'component':component,'targets':[target]})
    return out

# English source string; the Desktop translates it through locales.json under the same key.
STORAGE_NOTICE='Keys this bot needs are stored only in bot profiles on this computer'
ENV_LIMIT=65536

def applicable(secrets,components)->list[dict]:
    """Declarations used by the selected components, in manifest order, as detached copies."""
    chosen=set(components)
    return [{**s,'targets':list(s['targets'])}for s in secrets if s['component']in chosen]

def has_value(env,name)->bool:
    """True when ``env`` holds a usable value for ``name``: present and not blank."""
    value=env.get(name);return type(value) is str and value.strip()!=''

def read_owned_file(root,rel:str,limit:int)->bytes:
    """Bytes of ``root/rel`` with the guards every profile read uses, or ``ValueError``/``OSError``.

    Shared by ``Installer._profile_file`` and ``read_default_env``: no path component may be a
    symlink, and the file must be a regular file owned by this uid and at most ``limit`` bytes.
    ``rel`` is trusted here; callers that take it from a package check it first.
    """
    fd=os.open(root,os.O_RDONLY|os.O_DIRECTORY|os.O_NOFOLLOW)
    try:
        parts=rel.split('/')
        for part in parts[:-1]:
            child=os.open(part,os.O_RDONLY|os.O_DIRECTORY|os.O_NOFOLLOW,dir_fd=fd);os.close(fd);fd=child
        child=os.open(parts[-1],os.O_RDONLY|os.O_NOFOLLOW|os.O_NONBLOCK,dir_fd=fd)
        try:stream=os.fdopen(child,'rb')
        except BaseException:
            os.close(child);raise
        with stream:
            info=os.fstat(stream.fileno())
            if not stat.S_ISREG(info.st_mode)or info.st_uid!=os.getuid()or info.st_size>limit:raise ValueError('Invalid installed file')
            data=stream.read(limit+1)
            if len(data)>limit:raise ValueError('Installed file size limit')
            return data
    finally:os.close(fd)

def read_default_env(home:Path)->dict[str,str]:
    """Parse ``<home>/.env`` the way Hermes does, or ``{}`` on any problem (review prefill and the
    ``default`` source: an unreadable file simply has nothing to copy).

    Read through ``read_owned_file`` (no symlinks, regular file, this uid, at most 64 KB). The
    result holds secret values: callers keep it local and never return, store or log it.
    """
    state=env_state(home)
    return state if state is not None else {}

def env_state(home:Path)->dict[str,str]|None:
    """``<home>/.env`` of any profile (default or bot) like ``read_default_env``, but ``None`` when a
    ``.env`` entry exists that the guarded reader cannot vouch for (symlink, too large, other owner,
    not a regular file, unparsable).

    Writers must use this: Hermes' own writer follows symlinks and has no size limit, so a file we
    cannot read could still hold the name, and writing would replace the user's value.
    """
    try:
        if not os.path.lexists(Path(home)/'.env'):return {}
        env=_parse_env(read_owned_file(home,'.env',ENV_LIMIT))
        if type(env) is not dict:return None
        return {k:v for k,v in env.items()if type(k) is str and type(v) is str}
    except Exception:
        # Deliberately silent: the exception could carry file text.
        return None

default_env_state=env_state  # Task 4 name, kept for the default-profile call sites

def _parse_env(raw:bytes)->dict[str,str]:
    # Hermes' own tokenizer when running inside Hermes, so both sides agree on what a file defines.
    # load_env_file takes a path (and follows symlinks); we already hold the guarded bytes.
    try:from agent.secret_scope import _decode_env_bytes,_parse_env_text
    except ImportError:return _local_parse(raw)
    return _parse_env_text(_decode_env_bytes(raw))

# Fallback copy of agent/secret_scope.py (_decode_env_bytes, _parse_env_text, _strip_inline_comment,
# _parse_env_value); tests pin it to Hermes' output.
def _local_parse(raw:bytes)->dict[str,str]:
    raw=raw.removeprefix(codecs.BOM_UTF8)
    try:text=raw.decode('utf-8')
    except UnicodeDecodeError:text=raw.decode('latin-1')
    out={}
    for raw_line in text.splitlines():
        line=raw_line.strip()
        if not line or line.startswith('#'):continue
        if line.startswith('export '):line=line[len('export '):].lstrip()
        key,sep,value=line.partition('=');key=key.strip()
        if sep and key:out[key]=_unquote(_strip_comment(value))
    return out

def _strip_comment(value:str)->str:
    value=value.strip()
    if not value:return value
    quote=value[0]
    if quote in ("'",'"'):
        i=1
        while i<len(value):
            ch=value[i]
            if quote=='"' and ch=='\\':i+=2;continue
            if ch==quote:return value[:i+1]if value[i+1:].lstrip().startswith('#')else value
            i+=1
        return value
    return re.split(r'\s+#',value,maxsplit=1)[0].strip()

def _unquote(raw_value:str)->str:
    value=raw_value.strip()
    if len(value)>=2 and value[0]==value[-1]=='"':
        quoted=value[1:-1];parsed=[];i=0
        while i<len(quoted):
            escaped=quoted[i]=='\\' and quoted[i+1:i+2]in ('"','\\')
            parsed.append(quoted[i+1]if escaped else quoted[i]);i+=2 if escaped else 1
        return ''.join(parsed)
    if len(value)>=2 and value[0]==value[-1]=="'":return value[1:-1]
    return value


# --- install-time writes -------------------------------------------------------------------------
# English source strings; the Desktop translates them through locales.json under the same key.
DEFAULT_SAVE_FAILED='Could not save this key to the default profile; the bot profile has it'
DEFAULT_UNCHECKED='The default profile key file could not be checked safely, so it was left unchanged; the bot profile has this key'
VALUE_LIMIT=4096
SOURCES=('default','input','skip')
ENTRY_KEYS=frozenset(('source','value','saveToDefault'))
# Characters that would end or corrupt a .env line. Request values are held to CONTROL_RE.
LINE_BREAKING=re.compile(r'[\r\n\x00]')

def value_ok(value)->bool:
    """True for a value the installer may store: a non-blank string of at most 4 KB (UTF-8) with no
    control characters (line breaks, NUL, tabs, escapes)."""
    if type(value) is not str or not value.strip() or CONTROL_RE.search(value):return False
    try:return len(value.encode('utf-8'))<=VALUE_LIMIT
    except UnicodeEncodeError:return False

def install_plan(needed,request)->list[dict]:
    """Check an install request against the declarations ``needed`` and return one item per
    declaration, in order: ``{decl, source, value, save}``.

    ``request`` is ``None`` or ``{NAME: {source, value?, saveToDefault?}}``. Undeclared names, an
    ``input`` without a usable value and malformed entries raise ``ValueError`` whose message never
    names the input. ``value`` is kept only for ``input``; a value sent with ``default`` or ``skip``
    is ignored. Names left out of the request are skipped.
    """
    if request is None:request={}
    if type(request) is not dict:raise ValueError('Invalid key input')
    by={d['name']:d for d in needed}
    for name,entry in request.items():
        if name not in by:raise ValueError('Key is not declared for the selected components')
        if type(entry) is not dict or not set(entry)<=ENTRY_KEYS or entry.get('source')not in SOURCES or type(entry.get('saveToDefault',False)) is not bool:
            raise ValueError('Invalid key input')
        if entry['source']=='input':
            value=entry.get('value')
            if type(value) is not str or not value.strip():raise ValueError('Key value is missing')
            if not value_ok(value):raise ValueError('Key value must be one line of at most 4096 bytes without control characters')
    plan=[]
    for decl in needed:
        entry=request.get(decl['name'])or {'source':'skip'};source=entry['source']
        plan.append({'decl':decl,'source':source,'value':entry['value']if source=='input'else None,'save':source=='input'and entry.get('saveToDefault',False)})
    return plan

def quote_env_value(value:str)->str:
    """Hermes' own ``.env`` value serialization (``hermes_cli.config._quote_env_value``)."""
    try:from hermes_cli.config import _quote_env_value
    except ImportError:return _local_quote(value)
    return _quote_env_value(value)

# Fallback copy of hermes_cli.config._quote_env_value; tests pin it to Hermes' output.
def _local_quote(value:str)->str:
    if value=='':return value
    if not ('#' in value or '"' in value or "'" in value or any(c.isspace()for c in value)):return value
    return '"'+value.replace('\\','\\\\').replace('"','\\"')+'"'

def write_profile_env(staged,values:dict[str,str])->None:
    """Write ``staged/.env`` (mode 0600) holding ``values``: temp file, fsync, rename.

    The staged profile is new, so the file is written whole. Errors never carry a value.
    """
    lines=[]
    for name,value in values.items():
        if type(name) is not str or not NAME_RE.fullmatch(name) or type(value) is not str or LINE_BREAKING.search(value):raise ValueError('Invalid key value')
        lines.append(f'{name}={quote_env_value(value)}\n')
    fd,tmp=tempfile.mkstemp(dir=staged,prefix='.env_',suffix='.tmp')
    try:
        try:
            os.fchmod(fd,0o600);stream=os.fdopen(fd,'w',encoding='utf-8')
        except BaseException:
            os.close(fd);raise
        with stream:
            stream.write(''.join(lines));stream.flush();os.fsync(stream.fileno())
        os.replace(tmp,Path(staged)/'.env')
    except BaseException:
        try:os.unlink(tmp)
        except OSError:pass
        raise

def save_default_env(home,name:str,value:str)->None:
    """Add ``name`` to the default profile's ``.env`` through Hermes' own writer.

    The dashboard runs in the default profile's scope; refuse when Hermes would write anywhere
    other than ``home``. Hermes prints the characters of a non-ASCII credential before stripping
    them, so such a value is refused here rather than logged.
    """
    from hermes_constants import get_hermes_home
    from hermes_cli.config import require_env_writable,save_env_value
    if Path(get_hermes_home()).resolve()!=Path(home).resolve():raise RuntimeError('Default profile scope mismatch')
    if not value.isascii():raise ValueError('Non-ASCII key value')
    require_env_writable(name,'set')
    save_env_value(name,value)


# --- 「키 넣기」: keys added to an installed bot ------------------------------------------------
# English source strings; the Desktop translates them through locales.json under the same key.
APPLY_NOTICE='Keys apply from the next new chat (or after restarting Hermes)'
PROFILE_ENV_UNCHECKED='The bot profile key file could not be checked safely, so nothing was changed'
RECEIPT_KEYS=frozenset(('name','required','component','targets'))  # receipts written before labels were kept
RECEIPT_FULL_KEYS=frozenset(KEYS)

def receipt_secrets(receipt)->list[dict]:
    """Declarations recorded in a v3 receipt, re-checked, limited to the receipt's components.

    Each item is a full declaration. An older receipt without ``label``/``purpose``/``url`` gets
    the name as label and empty purpose and url; a receipt that has them gets the manifest's text
    rules (label 80, purpose 200, https url).

    The receipt lives in a user-writable profile, so it is not trusted further than the rules a
    manifest declaration obeys: name pattern and denylist, component and target pairing, no
    duplicates, no extra fields. ``ValueError`` (never naming the input) when it does not hold.
    """
    if type(receipt) is not dict or 'secrets' not in receipt:raise ValueError('This bot was not installed with key declarations')
    value=receipt['secrets'];components=receipt.get('components')
    if type(value) is not list or len(value)>8 or type(components) is not list:raise ValueError('Invalid receipt key declarations')
    names=set();out=[]
    for entry in value:
        if type(entry) is not dict or set(entry)not in(RECEIPT_KEYS,RECEIPT_FULL_KEYS) or type(entry['name']) is not str or type(entry['required']) is not bool:
            raise ValueError('Invalid receipt key declarations')
        if len(entry)==len(KEYS):
            label,purpose,url=entry['label'],entry['purpose'],entry['url']
            if any(type(v) is not str for v in (label,purpose,url)) or not _text(label,80) or not _text(purpose,200) or len(url)>300 or not URL_RE.fullmatch(url):
                raise ValueError('Invalid receipt key declarations')
        else:label,purpose,url=entry['name'],'',''
        name=entry['name'];component=entry['component'];targets=entry['targets']
        if not NAME_RE.fullmatch(name) or name in DENY_NAMES or name.startswith(DENY_PREFIXES) or name in names:raise ValueError('Invalid receipt key declarations')
        if component not in COMPONENTS or component not in components:raise ValueError('Invalid receipt key declarations')
        if type(targets) is not list or len(targets)!=1 or type(targets[0]) is not str or not TARGET_RE.fullmatch(targets[0]) \
                or targets[0].startswith('mcp:')!=(component=='mcp'):
            raise ValueError('Invalid receipt key declarations')
        names.add(name);out.append({'name':name,'required':entry['required'],'label':label,'purpose':purpose,'url':url,'component':component,'targets':[targets[0]]})
    return out

def key_states(decls,env)->list[dict]:
    """``{name, required, state}`` per declaration: ``set``/``missing`` from ``env``, or ``unknown``
    for every key when ``env`` is ``None`` (a .env the guarded reader cannot vouch for)."""
    return [{'name':d['name'],'required':d['required'],'state':'unknown'if env is None else 'set'if has_value(env,d['name'])else 'missing'}for d in decls]

def _line_key(line:bytes)->str|None:
    # Hermes' key rule (strip, skip comments, drop ``export ``, text before ``=``). latin-1 keeps
    # every byte; a key that decodes differently is caught by the parse check in update_profile_env.
    text=line.decode('latin-1').strip()
    if not text or text.startswith('#'):return None
    if text.startswith('export '):text=text[len('export '):].lstrip()
    key,sep,_=text.partition('=');key=key.strip()
    return key if sep and key else None

def prepare_profile_env(profile,values:dict[str,str])->bytes:
    """The new bytes of an existing profile's ``.env`` with ``values`` set and every other line kept.
    Nothing is written; ``update_profile_env`` writes the result.

    The first line defining a name is replaced, later lines defining it are dropped (Hermes lets the
    last one win), new names are appended. The file is read through the guarded reader; a ``.env``
    it cannot vouch for, a result over 64 KB, or a result Hermes would parse differently from
    "old keys plus ``values``" raises ``ValueError``. Errors never carry a value.
    """
    for name,value in values.items():
        if type(name) is not str or not NAME_RE.fullmatch(name) or type(value) is not str or LINE_BREAKING.search(value):raise ValueError('Invalid key value')
    path=Path(profile)/'.env'
    if os.path.lexists(path):
        try:
            raw=read_owned_file(profile,'.env',ENV_LIMIT);old=_parse_env(raw)
        except Exception:raise ValueError(PROFILE_ENV_UNCHECKED)from None
    else:raw=b'';old={}
    bom=codecs.BOM_UTF8 if raw.startswith(codecs.BOM_UTF8)else b''
    out=[];done=set()
    for line in raw[len(bom):].splitlines(keepends=True):
        key=_line_key(line)
        if key not in values:out.append(line);continue
        if key in done:continue
        done.add(key);ending=line[len(line.rstrip(b'\r\n')):]or b'\n'
        out.append(f'{key}={quote_env_value(values[key])}'.encode('utf-8')+ending)
    if out and not out[-1].endswith((b'\n',b'\r')):out[-1]+=b'\n'
    out.extend(f'{name}={quote_env_value(value)}\n'.encode('utf-8')for name,value in values.items()if name not in done)
    blob=bom+b''.join(out)
    if len(blob)>ENV_LIMIT:raise ValueError('Key file size limit')
    try:same=_parse_env(blob)=={**old,**values}
    except Exception:same=False
    if not same:raise ValueError(PROFILE_ENV_UNCHECKED)
    return blob

def update_profile_env(profile,values:dict[str,str])->None:
    """``prepare_profile_env`` written as temp file, fsync, rename, mode 0600."""
    write_file_atomic(profile,'.env',prepare_profile_env(profile,values),0o600)

def write_file_atomic(directory,name:str,blob:bytes,mode:int)->None:
    """``directory/name`` replaced by ``blob``: temp file in the same directory, fsync, rename."""
    fd,tmp=tempfile.mkstemp(dir=directory,prefix=name+'_',suffix='.tmp')
    try:
        try:
            os.fchmod(fd,mode);stream=os.fdopen(fd,'wb')
        except BaseException:
            os.close(fd);raise
        with stream:
            stream.write(blob);stream.flush();os.fsync(stream.fileno())
        os.replace(tmp,Path(directory)/name)
    except BaseException:
        try:os.unlink(tmp)
        except OSError:pass
        raise
