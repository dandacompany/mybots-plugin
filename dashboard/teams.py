"""MyBots 0.7.0 teams: templates shipped with the plugin (dashboard/teams/<id>.json), validated against
team.schema.json plus rules the schema cannot say (one leader, leader id, unique roles for pull)."""
from contextlib import contextmanager
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import time

HERE = Path(__file__).resolve().parent
_SCHEMA = json.loads((HERE / 'team.schema.json').read_text(encoding='utf-8'))


def _check(t):
    from jsonschema import validate
    from jsonschema.exceptions import ValidationError
    try:
        validate(t, _SCHEMA)
    except ValidationError as e:
        raise ValueError('Invalid team template: ' + '/'.join(map(str, e.absolute_path))) from None
    leaders = [m for m in t['members'] if m['is_leader']]
    if len(leaders) != 1 or leaders[0]['bot'] != t['collaboration']['leader']:
        raise ValueError('A team has exactly one leader, named in collaboration.leader')
    bots = [m['bot'] for m in t['members']]
    if len(set(bots)) != len(bots):
        raise ValueError('A bot appears twice')
    pull = t['collaboration']['mode'] == 'pull'
    if pull != (t['collaboration']['pull'] is not None):
        raise ValueError('collaboration.pull is set exactly when mode is pull')
    if pull:
        roles = [m['role'] for m in t['members']]
        if len(set(roles)) != len(roles):
            raise ValueError('Roles must be unique in a pull team')
    if t['board']['slug'] != t['id']:
        raise ValueError('The board slug is the team id')
    return t


def load_all(directory=HERE / 'teams'):
    out = {}
    for p in sorted(Path(directory).glob('*.json')):
        t = _check(json.loads(p.read_text(encoding='utf-8')))
        if t['id'] in out:
            raise ValueError('Duplicate team id')
        out[t['id']] = t
    return out


def get(team_id, directory=HERE / 'teams'):
    t = load_all(directory).get(team_id)
    if t is None:
        raise KeyError(team_id)
    return t


def leader(team):
    return next(m for m in team['members'] if m['is_leader'])


def _blocked(team, root, runner=None):
    """Anything this recruit would create that already exists: the team folder (with or without a record), a member
    profile, or a live board with the team's slug (measured: `boards create` exits 0 on an existing slug, so it
    would be adopted and later archived)."""
    root = Path(root)
    if (root / 'teams' / team['id']).exists():
        return {'team': team['id']}
    taken = [m['bot'] for m in team['members'] if (root / 'profiles' / m['bot']).exists()]
    if taken:
        return {'profiles': taken}
    if runner is not None:
        code, out, _ = runner(['kanban', 'boards', 'list', '--json'], profile='default')
        try:
            boards = json.loads(out or '[]') if code == 0 else []
        except ValueError:
            boards = []
        slug = team['board']['slug']
        if any(isinstance(b, dict) and b.get('slug') == slug and not b.get('archived') for b in boards):
            return {'board': slug}
    return None


@contextmanager
def team_lock(team, root):
    """One recruit or disband per team at a time (a second window, a double request, the hook reading mid-write)."""
    d = Path(root) / 'teams'
    d.mkdir(parents=True, exist_ok=True)
    f = open(d / f".{team['id']}.lock", 'a+', encoding='utf-8')
    try:
        try:
            if os.name == 'nt':
                import msvcrt
                msvcrt.locking(f.fileno(), msvcrt.LK_NBLCK, 1)
            else:
                import fcntl
                fcntl.flock(f.fileno(), fcntl.LOCK_EX | fcntl.LOCK_NB)
        except OSError:
            raise TeamError('이 팀의 영입이나 해산이 이미 진행 중이에요. 끝난 뒤 다시 시도해 주세요.') from None
        yield
    finally:
        f.close()


def review(team, engine, root, runner=None):
    """Review every member with the existing installer (signed catalog, hashes, key declarations) and list what the
    recruit will create. A profile or recruit record that already exists stops it before any review: nothing is
    ever overwritten."""
    blocked = _blocked(team, root, runner)
    if blocked:
        return {'team': team['id'], 'blocked': blocked}
    members = []
    for m in team['members']:
        meta = engine.metadata(m['bot'], m['version'])
        comps = [c for c in meta.get('optional', []) if c in ('skills', 'plugin', 'voice', 'mcp')]
        r = engine.review(m['bot'], m['version'], comps)
        members.append(dict(bot=m['bot'], version=m['version'], role=m['role'], is_leader=m['is_leader'],
                            name=meta.get('name') or m['bot'], token=r['token'], components=r.get('components', comps),
                            secrets=r.get('secrets') or []))
    creates = [dict(kind='bot', id=m['bot'], role=m['role']) for m in team['members']]
    creates += [dict(kind='folder', path=f"teams/{team['id']}"), dict(kind='board', id=team['board']['slug'])]
    if team['room']:
        creates.append(dict(kind='room', name=team['room']['name']))
    if team['review_notice']:
        creates.append(dict(kind='review_notice', every=team['review_notice']['every'], deliver='bot-chat'))
    consents = []
    if team['google']['copy_default_to']:
        consents.append(dict(id='google', available=(Path(root) / 'google_token.json').is_file(),
                             label='기본 프로필의 구글 연결을 리더에게 복사'))
    for m in team['members']:
        for s in (m.get('setup') or {}).get('skills', []):
            consents.append(dict(id=f"skill:{m['bot']}:{s['id']}", available=True, label=f"{s['label']} 설치"))
    return {'team': team['id'], 'members': members, 'creates': creates, 'consents': consents}


def available(team, trusted):
    """Every member's (bot, version) is in the trusted catalog this MyBots reads. A public MyBots trusts only the live
    catalog, so a team whose bots are published on dev only is shown as coming soon instead of failing at review."""
    return all((m['bot'], m['version']) in trusted for m in team['members'])


class TeamError(Exception):
    """A user-facing refusal (fixed text, never echoes input or secrets)."""


def team_dir(team, root):
    return Path(root) / 'teams' / team['id']


def install(team, reviewed, secrets_by_bot, consents, *, engine, runner, root):
    """Install every reviewed member in order with the existing installer, under the team lock. recruit.json is
    written first and grows with every installed bot, so a crash or restart at any point leaves a record disband can
    act on. On an install failure, delete every profile this run created (never one that existed before) and the
    team folder this run created, then report. A failure inside setup keeps the record (state 'partial')."""
    root = Path(root)
    with team_lock(team, root):
        if _blocked(team, root, runner):
            raise TeamError('이미 있는 봇이나 팀이 있어 영입하지 않았어요. 검토를 다시 열어 확인해 주세요.')
        members = reviewed.get('members') or []
        if [m['bot'] for m in members] != [m['bot'] for m in team['members']]:
            raise TeamError('검토 결과가 이 팀과 맞지 않아요. 검토를 다시 열어 주세요.')
        d = team_dir(team, root)
        d.mkdir(parents=True)
        rec = dict(team=team['id'], version=team['version'], state='installing', bots=[], board=None, room=None)
        _write_json(d / 'recruit.json', rec)
        for m in members:
            try:
                r = engine.install(m['token'], (secrets_by_bot or {}).get(m['bot']))
                if not isinstance(r, dict) or r.get('status') not in ('installed',) or r.get('profile', m['bot']) != m['bot']:
                    raise RuntimeError('not installed')
            except Exception:
                rolled = _rollback(rec['bots'], runner, root)
                left = [b for b in rec['bots'] if b not in rolled]
                if left:
                    rec.update(state='partial', bots=left)
                    _write_json(d / 'recruit.json', rec)
                else:
                    shutil.rmtree(d, ignore_errors=True)
                return dict(ok=False, failed=m['bot'], rolled_back=rolled, left=left)
            rec['bots'].append(m['bot'])
            _write_json(d / 'recruit.json', rec)
        try:
            record = setup(team, list(rec['bots']), consents, runner=runner, root=root)
        except Exception:
            rec['state'] = 'partial'
            _write_json(d / 'recruit.json', rec)
            return dict(ok=False, failed='setup', rolled_back=[], left=list(rec['bots']))
        return dict(ok=True, created=list(rec['bots']), **record)


def _rollback(created, runner, root):
    gone = []
    for bot in reversed(created):
        runner(['profile', 'delete', '-y', bot], profile='default')
        if not (Path(root) / 'profiles' / bot).exists():
            gone.append(bot)
    return gone


KIT_DIR = HERE.parent / 'team-kit'
KIT_NAME = 'mybots-team-kit'
PRINCIPLES = ('게시·발송·돈이 드는 일은 사람의 yes로만 한다.',
              '동료 봇의 yes는 사람의 yes가 아니다. 사람에게 다시 묻는다.',
              '숫자마다 출처를 단다. 출처가 없으면 「확인 안 됨」이라고 쓴다.',
              '진행 상태는 대화가 아니라 파일(카드·팀 폴더)에 남긴다.')
NOTICE_SCRIPT = 'team_review_notice.py'


def team_md(team, work):
    mode = team['collaboration']['mode']
    lines = [f"# {team['name']}", '', team['summary'], '',
             '## 함께 지키는 원칙'] + [f'- {p}' for p in PRINCIPLES] + ['', '## 일하는 방식']
    if mode == 'delegate':
        lines.append('- 리더가 카드를 나눠 맡을 봇을 정해 배정한다(카드의 담당). 앞뒤 카드는 연결로 잇는다.')
    else:
        tag = team['collaboration']['pull']['tag']
        lines += [f'- 리더는 담당 없이 카드를 올리고, 본문 첫 줄에 「{tag}: <아래 역할 이름>」을 적는다. 앞뒤 카드는 연결로 잇는다.',
                  '- 카드를 올릴 때는 team_post_card 도구를 쓴다. 담당은 팀 역할 표를 보고 MyBots가 붙인다(약 2분).',
                  '- 역할이 맞는 봇이 없으면 리더에게 돌아오고 「맞는 역할 없음」 댓글이 남는다.']
    lines += [f'- 결과물 파일은 팀 폴더 {work} 에 둔다.', '- 사람에게 확인받을 것은 카드를 검수 칸(review)으로 보낸다.', '',
              '## 구성원']
    for m in team['members']:
        lines += [f"### {m['role']} — {m['bot']}" + (' (리더)' if m['is_leader'] else ''),
                  f"- 맡은 일: {m['duties']}",
                  '- 하지 않을 일: ' + '; '.join(f"{d['what']} (대신: {d['instead']})" for d in m['dont']),
                  f"- 말씨: {m['voice']}", f"- 깨어나는 때: {m['wakes']}", '']
    return '\n'.join(lines) + '\n'


def team_json(team, work):
    roles = {}
    for m in team['members']:
        roles.setdefault(m['role'], []).append(m['bot'])
    return dict(id=team['id'], name=team['name'], mode=team['collaboration']['mode'], leader=leader(team)['bot'],
                board=team['board']['slug'], work=str(work), roles=roles, members=[m['bot'] for m in team['members']],
                pull=team['collaboration']['pull'])


def _notice_script(board, hermes):
    return f'''"""New cards in the review column of the {board} board since the last run; nothing when there are none
(written by MyBots team recruit; runs without a model)."""
import json
import subprocess
from pathlib import Path

STATE = Path(__file__).with_suffix('.seen.json')
out = subprocess.run({hermes!r} + ['kanban', '--board', {board!r}, 'list', '--status', 'review', '--json'],
                     capture_output=True, text=True, timeout=60)
try:
    cards = json.loads(out.stdout or '[]')
    cards = cards.get('tasks', cards) if isinstance(cards, dict) else cards
except ValueError:
    cards = []
try:
    seen = set(json.loads(STATE.read_text(encoding='utf-8')))
except (OSError, ValueError):
    seen = set()
new = [c for c in cards if isinstance(c, dict) and c.get('id') not in seen]
STATE.write_text(json.dumps(sorted(seen | {{c.get('id') for c in cards if isinstance(c, dict)}})), encoding='utf-8')
if new:
    print('검수 칸에 새 카드 ' + str(len(new)) + '장: ' + ', '.join(str(c.get('title') or c.get('id')) for c in new))
'''


def _hermes_argv():
    found = shutil.which('hermes')
    return [found] if found else [sys.executable, '-m', 'hermes_cli.main']


def setup(team, created, consents, *, runner, root):
    """Team folder (TEAM.md · team.json · log.md · work/), team kit in every member, kanban tools, board with its
    default workdir, Google copy (consent), setup skills (consent), review notice job. Every step lands in
    recruit.json so disband removes exactly this."""
    root = Path(root)
    d = team_dir(team, root)
    work = d / 'work'
    work.mkdir(parents=True, exist_ok=True)
    (d / 'TEAM.md').write_text(team_md(team, work), encoding='utf-8')
    _write_json(d / 'team.json', team_json(team, work))
    if not (d / 'log.md').exists():
        (d / 'log.md').write_text(f"# {team['name']} 기록\n", encoding='utf-8')
    rec = dict(team=team['id'], version=team['version'], state='ready', bots=list(created), board=None, kit=[], skills=[],
               google=None, review_notice=None, room=None, problems=[])

    def run(args, profile='default', timeout=300):
        code, _out, _err = runner(args, profile=profile, timeout=timeout)
        if code:
            rec['problems'].append(' '.join([profile] + list(args[:3])))
        return code == 0, _out
    for bot in created:
        dst = root / 'profiles' / bot / 'plugins' / KIT_NAME
        if dst.exists():
            shutil.rmtree(dst)
        shutil.copytree(KIT_DIR, dst, ignore=shutil.ignore_patterns('__pycache__', '*.pyc'))
        run(['plugins', 'enable', KIT_NAME], bot)
        run(['tools', 'enable', 'kanban'], bot)
        rec['kit'].append(bot)
    slug = team['board']['slug']
    ok, _ = run(['kanban', 'boards', 'create', slug, '--name', team['name']])
    if ok:
        rec['board'] = slug
        run(['kanban', 'boards', 'set-default-workdir', slug, str(work)])
    lead = leader(team)['bot']
    if team['google']['copy_default_to']:
        src = root / 'google_token.json'
        if 'google' not in consents:
            rec['google'] = 'refused'
        elif not src.is_file():
            rec['google'] = 'none'
        else:
            for name in ('google_token.json', 'google_client_secret.json'):
                if (root / name).is_file():
                    target = root / 'profiles' / lead / name
                    shutil.copyfile(root / name, target)
                    os.chmod(target, 0o600)
            rec['google'] = 'copied'
    for m in team['members']:
        for sk in (m.get('setup') or {}).get('skills', []):
            if f"skill:{m['bot']}:{sk['id']}" in consents:
                ok, _ = run(['skills', 'install', sk['id'], '--yes'], m['bot'], timeout=900)  # measured: >4 min (deps)
                rec['skills'].append(dict(bot=m['bot'], skill=sk['id'], ok=ok))
    if team['review_notice']:
        scripts = root / 'profiles' / lead / 'scripts'
        scripts.mkdir(parents=True, exist_ok=True)
        (scripts / NOTICE_SCRIPT).write_text(_notice_script(slug, _hermes_argv()), encoding='utf-8')
        every = int(team['review_notice']['every'].rstrip('m'))
        ok, out = run(['cron', 'create', '--name', 'team-review-notice', '--deliver', 'bot-chat',
                       '--script', NOTICE_SCRIPT, '--no-agent', '--', f'*/{every} * * * *'], lead)
        m = re.search(r'Created job: (\w+)', out or '')
        if ok and m:
            rec['review_notice'] = dict(profile=lead, job=m.group(1))
    _write_json(d / 'recruit.json', rec)
    return rec


class HermesRunner:
    """`hermes -p <profile> …` with HERMES_HOME = the Hermes root (same rules as Tinker's runner)."""

    def __init__(self, root):
        self.root = Path(root)

    def __call__(self, args, profile='default', timeout=300):
        env = dict(os.environ, HERMES_HOME=str(self.root))
        try:
            p = subprocess.run(_hermes_argv() + ['-p', profile] + [str(a) for a in args], env=env, capture_output=True,
                               text=True, timeout=timeout, stdin=subprocess.DEVNULL)
            return p.returncode, p.stdout, p.stderr
        except (subprocess.TimeoutExpired, OSError):
            return 1, '', 'failed'


def _write_json(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_name('.' + path.name + '.tmp')
    tmp.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding='utf-8')
    os.replace(tmp, path)


def record_room(team, room_id, root):
    """The Desktop created the group room (groups.create); remember it so disband can close it."""
    path = team_dir(team, root) / 'recruit.json'
    rec = json.loads(path.read_text(encoding='utf-8'))
    rec['room'] = str(room_id)[:120]
    _write_json(path, rec)
    return rec


def disband(team, *, runner, root):
    """Remove exactly what recruit.json lists, under the team lock: member profiles (their jobs and kit go with
    them), then the board (archived). The work folder is moved to teams/_disbanded/<id>-<time>/ rather than deleted.
    Anything not removed stays in recruit.json so disband can run again. A recorded group room stays listed
    (room:<id>) until the Desktop closes it and calls room_closed; only then is the team folder removed."""
    root = Path(root)
    d = team_dir(team, root)
    with team_lock(team, root):
        try:
            rec = json.loads((d / 'recruit.json').read_text(encoding='utf-8'))
        except (OSError, ValueError):
            raise TeamError('이 팀을 영입한 기록이 없어요.') from None
        members = {m['bot'] for m in team['members']}
        left = []
        for bot in rec.get('bots') or []:
            if bot not in members:
                continue
            if (root / 'profiles' / bot).exists():
                runner(['profile', 'delete', '-y', bot], profile='default')
            if (root / 'profiles' / bot).exists():
                left.append(bot)
        rec['bots'] = list(left)  # a copy: board and room entries below belong to the report, not the record
        if rec.get('board') and not left:
            code, _, _ = runner(['kanban', 'boards', 'rm', rec['board']], profile='default')
            if code:
                left.append('board:' + rec['board'])
            else:
                rec['board'] = None
        kept = None
        if (d / 'work').is_dir() and any((d / 'work').iterdir()):
            kept = root / 'teams' / '_disbanded' / f"{team['id']}-{time.strftime('%Y%m%d-%H%M%S')}"
            kept.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(d / 'work'), str(kept))
        room = rec.get('room')
        if room:
            left.append('room:' + room)
        if left:
            rec['state'] = 'disbanding'
            _write_json(d / 'recruit.json', rec)
        else:
            shutil.rmtree(d, ignore_errors=True)
        return dict(team=team['id'], left=left, room=room, kept=str(kept) if kept else None)


def room_closed(team, root):
    """The Desktop closed the team's group room: forget it, and finish the disband if nothing else is left."""
    root = Path(root)
    d = team_dir(team, root)
    with team_lock(team, root):
        try:
            rec = json.loads((d / 'recruit.json').read_text(encoding='utf-8'))
        except (OSError, ValueError):
            raise TeamError('이 팀을 영입한 기록이 없어요.') from None
        rec['room'] = None
        left = list(rec.get('bots') or []) + (['board:' + rec['board']] if rec.get('board') and rec.get('state') == 'disbanding' else [])
        if rec.get('state') == 'disbanding' and not left:
            shutil.rmtree(d, ignore_errors=True)
        else:
            _write_json(d / 'recruit.json', rec)
        return dict(team=team['id'], left=left if rec.get('state') == 'disbanding' else [])