"""Strict data contracts shared by bundled and signed catalog authorities."""
import copy,json,re
from pathlib import Path
from urllib.parse import urlsplit
INSTALLER_VERSION='0.4.1'
META={'id','version','name','englishName','role','personality','description','category','firstPrompt','optional','skillId','mcp','pluginId','external','voice'}
OPTIONAL=('skills','mcp','plugin','voice')
_voice_schema=Path(__file__).with_name('voice.schema.json')
if not _voice_schema.exists():_voice_schema=Path(__file__).resolve().parents[2]/'contracts/voice.schema.json'
VOICE_IDS=json.loads(_voice_schema.read_text())['properties']['voice']['enum']
def record(value,keys):
    if not isinstance(value,dict)or set(value)!=set(keys):raise ValueError('Unexpected catalog fields')
    return value
def text(value,limit=1000):
    if not isinstance(value,str)or not value.strip()or len(value)>limit:raise ValueError('Invalid catalog text')
def identifier(value):
    if not isinstance(value,str)or not re.fullmatch(r'[a-z][a-z0-9-]{0,39}',value):raise ValueError('Invalid catalog identifier')
def unique(values):
    if not isinstance(values,list)or any(not isinstance(v,str)for v in values)or len(set(values))!=len(values):raise ValueError('Invalid string list')
def safe_path(value):
    if not isinstance(value,str)or not value or len(value)>160 or '\\'in value or ':'in value or re.search(r'[\x00-\x1f\x7f]',value)or any(not p or p in('.','..')or p.startswith('.')or p.endswith(('.',' '))for p in value.split('/')):raise ValueError('Invalid package path')
    return value
def parse_metadata(value):
    b=record(value,META);identifier(b['id']);identifier(b['skillId']);text(b['version'],40)
    if not re.fullmatch(r'[0-9]+\.[0-9]+\.[0-9]+',b['version']):raise ValueError('Invalid version')
    for k in ('name','englishName','role','personality','description','firstPrompt'):text(b[k],80 if k in('name','englishName')else 1000)
    if b['category']not in('business','learning','daily'):raise ValueError('Invalid category')
    unique(b['optional'])
    if b['optional']!=[c for c in OPTIONAL if c in b['optional']]:raise ValueError('Invalid optional component order')
    for component,field in [('mcp','mcp'),('plugin','pluginId'),('voice','voice')]:
        if (component in b['optional'])!=(b[field]is not None):raise ValueError('Component metadata mismatch')
    if b['mcp']is not None:
        m=record(b['mcp'],('serverId','tools'));identifier(m['serverId']);unique(m['tools'])
        if not 1<=len(m['tools'])<=16 or any(not re.fullmatch(r'[a-z][a-z0-9_]{0,63}',t)for t in m['tools']):raise ValueError('Invalid tools')
    if b['pluginId']is not None:identifier(b['pluginId'])
    if b['voice']is not None:
        v=record(b['voice'],('id','style','audition'))
        if v['id']not in VOICE_IDS or v['audition']!='not-tested':raise ValueError('Invalid voice metadata')
        text(v['style'],2000)
    if not isinstance(b['external'],list)or len(b['external'])>8:raise ValueError('Invalid guides')
    for link in b['external']:
        e=record(link,('service','label','guide','requirement','status'))
        if e['service']not in('figma','notion','github','context7','todoist','web-search')or e['status']!='not-connected':raise ValueError('Invalid guide state')
        text(e['label'],80);text(e['guide']);text(e['requirement']);u=urlsplit(e['guide'])
        if u.scheme!='https'or not u.hostname or u.username or u.password:raise ValueError('Unsafe guide')
    return copy.deepcopy(b)
def parse_entries(entries):
    try:
        if not isinstance(entries,list)or len(entries)>400:raise ValueError('Invalid trust list')
        result={}
        for entry in entries:
            record(entry,('metadata','manifestSha256','files','mcp','pluginId'));b=parse_metadata(entry['metadata']);identity=(b['id'],b['version'])
            if identity in result or not isinstance(entry['manifestSha256'],str)or not re.fullmatch('[a-f0-9]{64}',entry['manifestSha256']):raise ValueError('Invalid trust identity')
            if entry['pluginId']!=b['pluginId']:raise ValueError('Plugin metadata mismatch')
            seen=set();total=0;present=set()
            if not isinstance(entry['files'],list)or not 2<=len(entry['files'])<=32:raise ValueError('Invalid files')
            for f in entry['files']:
                record(f,('path','component','size','sha256'));rel=safe_path(f['path']);component=f['component'];lower=rel.lower()
                if lower in seen or component not in('soul','avatar',*b['optional'])or type(f['size'])is not int or not 1<=f['size']<=2_000_000 or not isinstance(f['sha256'],str)or not re.fullmatch('[a-f0-9]{64}',f['sha256']):raise ValueError('Invalid package file')
                if component=='soul'and rel!='SOUL.md'or component=='avatar'and rel not in('assets/avatar.jpg','assets/avatar.png')or component=='voice'and rel!='voice/preset.json':raise ValueError('Component path mismatch')
                if component=='skills'and not(rel.startswith('skills/'+b['skillId']+'/')and rel.endswith('.md')):raise ValueError('Skill path mismatch')
                if component=='mcp'and not re.fullmatch(r'mcp/[a-zA-Z0-9_-]+\.(py|json|md)',rel):raise ValueError('MCP path mismatch')
                if component=='plugin'and not(rel.startswith('plugins/'+b['pluginId']+'/')and re.fullmatch(r'plugin\.yaml|[a-zA-Z0-9_]+\.py|data\.json',rel.rsplit('/',1)[1])):raise ValueError('Plugin path mismatch')
                seen.add(lower);total+=f['size'];present.add(component)
            if total>5_000_000 or present!=set(('soul','avatar',*b['optional']))or 'soul.md'not in seen or len(seen&{'assets/avatar.jpg','assets/avatar.png'})!=1:raise ValueError('Incomplete package')
            if b['mcp']is None:
                if entry['mcp']is not None:raise ValueError('MCP mismatch')
            else:
                m=record(entry['mcp'],('serverId','entrypoint','tools'));safe_path(m['entrypoint'])
                if m['entrypoint']not in('mcp/server.py','mcp/examples.py')or m['entrypoint'].lower()not in seen or {k:m[k]for k in('serverId','tools')}!=b['mcp']:raise ValueError('MCP mismatch')
            result[identity]=copy.deepcopy(entry)
        return result
    except (ValueError,TypeError,KeyError,AssertionError,RecursionError)as exc:raise ValueError('Installer registry is invalid; update the helper')from exc

def load_trusted(path):
    try:
        raw=Path(path).read_bytes()
        if len(raw)>500000:raise ValueError('Registry size limit')
        data=record(json.loads(raw),('schemaVersion','installerVersion','bots'))
        if data['schemaVersion']!=1 or data['installerVersion']!='0.3.0'or not data['bots']:raise ValueError('Invalid bundled registry')
        return parse_entries(data['bots'])
    except (OSError,ValueError,TypeError,KeyError)as exc:raise ValueError('Installer registry is invalid; update the helper')from exc

def profile_config(entry,selected,target,executable):
    config={}
    if 'mcp'in selected:
        m=entry['mcp'];config['mcp_servers']={m['serverId']:dict(command=executable,args=[str(target/m['entrypoint'])],tools=dict(include=m['tools']))}
    if 'plugin'in selected:config['plugins']=dict(enabled=[entry['pluginId']])
    return config
