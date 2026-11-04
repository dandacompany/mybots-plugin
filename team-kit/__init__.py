"""mybots-team-kit (MyBots 0.7.0): copied by team recruit into every member profile.

Tools: team_post_card (a card on the team board by role), team_request_review / team_close_review (a person's
review, opened by any member and closed by the lead on the person's word) and team_info (the team in team.json).
pre_llm_call adds one short pointer to the team's TEAM.md and its rules; the rules themselves live in that file.
The team is found by looking for this profile in <root>/teams/*/team.json, so a disbanded team simply stops matching.
"""
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys

TAG_DEFAULT = '역할'
HUMAN_REVIEWER = '사람'  # not a profile: the dispatcher's review lane skips it (measured 11-03, skipped_nonspawnable)
_CARD_ID = re.compile(r'^[A-Za-z0-9_][A-Za-z0-9_.:-]{0,79}$')


class TeamKitError(Exception):
    pass


def find_team(root, bot):
    for p in sorted((Path(root) / 'teams').glob('*/team.json')):
        try:
            t = json.loads(p.read_text(encoding='utf-8'))
        except (OSError, ValueError):
            continue
        if isinstance(t, dict) and bot in (t.get('members') or []):
            t['_dir'] = str(p.parent)
            return t
    return None


def _team_or_error(root, bot):
    t = find_team(root, bot)
    if t is None:
        raise TeamKitError('이 봇은 영입된 팀에 속해 있지 않아요.')
    return t


def _role_of(team, bot):
    return next((r for r, bots in (team.get('roles') or {}).items() if bot in bots), None)


def info(*, root, bot):
    t = _team_or_error(root, bot)
    return dict(id=t['id'], name=t.get('name'), mode=t.get('mode'), leader=t.get('leader'), board=t.get('board'),
                work=t.get('work'), roles=t.get('roles'), team_md=str(Path(t['_dir']) / 'TEAM.md'),
                me=dict(bot=bot, role=_role_of(t, bot), is_leader=t.get('leader') == bot))


def post_card(args, *, root, bot, run):
    t = _team_or_error(root, bot)
    roles = t.get('roles') or {}
    role, title, body = args.get('role') or '', (args.get('title') or '').strip(), args.get('body') or ''
    if role not in roles:
        raise TeamKitError('팀에 없는 역할이에요. 고를 수 있는 역할: ' + ', '.join(roles))
    if not title or len(title) > 200 or len(body) > 20000:
        raise TeamKitError('제목(200자 이하)과 본문(2만 자 이하)을 확인해 주세요.')
    parents = args.get('parents') or []
    if not isinstance(parents, list) or len(parents) > 10 or not all(isinstance(p, str) and _CARD_ID.fullmatch(p)
                                                                     for p in parents):
        raise TeamKitError('앞 카드(parents)는 카드 id 목록이어야 해요.')
    pull = t.get('mode') == 'pull'
    if pull:  # MyBots assigns it by this first line on a later dispatcher tick
        body = f"{(t.get('pull') or {}).get('tag') or TAG_DEFAULT}: {role}\n{body}".rstrip('\n')
    argv = ['kanban', '--board', t['board'], 'create', '--body=' + body, '--workspace=dir:' + t['work']]
    argv += ['--parent=' + p for p in parents]
    if not pull:
        argv.append('--assignee=' + roles[role][0])
    argv += ['--created-by=' + bot, '--json', '--', title]
    code, out, _err = run(argv)
    if code:
        raise TeamKitError('카드를 올리지 못했어요. 팀 보드가 있는지 확인해 주세요.')
    try:
        d = json.loads(out or '{}')
        card = d.get('id') or (d.get('task') or {}).get('id')
    except (ValueError, AttributeError):
        card = None
    nxt = ('담당은 팀 역할 표를 보고 MyBots가 붙여요(약 2분). 맞는 역할이 없으면 리더에게 돌아와요.' if pull
           else f'{roles[role][0]} 에게 배정했어요.')
    return dict(card=card, board=t['board'], role=role, next=nxt)


def request_human_review(args, *, root, bot, run):
    """Move a card to the review column with the reviewer 「사람」. A reviewer profile (or kanban_request_review
    keeping the assignee) makes the dispatcher's review lane run the card again (VM 11-03: the lead's package card
    was re-claimed, crashed twice and ended blocked); a non-profile reviewer is skipped, so the card waits for a
    person and the review notice sees it."""
    t = _team_or_error(root, bot)
    task, summary = args.get('task_id') or '', (args.get('summary') or '').strip()
    if not _CARD_ID.fullmatch(task):
        raise TeamKitError('카드 id를 확인해 주세요.')
    if not summary or len(summary) > 2000:
        raise TeamKitError('사람이 볼 요약(2000자 이하)을 적어 주세요.')
    code, _out, _err = run(['kanban', '--board', t['board'], 'request-review', task, '--summary=' + summary,
                            '--reviewer=' + HUMAN_REVIEWER, '--force'])
    if code:
        raise TeamKitError('검수 칸으로 보내지 못했어요. 카드 id와 상태를 확인해 주세요.')
    return dict(card=task, board=t['board'], reviewer=HUMAN_REVIEWER,
                next='사람 검수 대기로 넘겼어요. 이 카드의 작업은 여기서 끝내고, 사람에게 무엇을 봐 달라는지 한 줄로 알리세요.')


VERDICTS = {'approve': '승인', 'changes': '반려'}


def close_review(args, *, root, bot, run):
    """A person approved or rejected a review card in the chat: the lead closes that same card (approve → done) or
    sends it back to its implementer (changes → reopen-review), quoting the person. Without this the card stayed in
    review after a spoken approval and a spoken rejection piled up new cards next to it (VM 11-03)."""
    t = _team_or_error(root, bot)
    if t.get('leader') != bot:
        raise TeamKitError('검수 카드는 팀 리더만 닫을 수 있어요.')
    task, verdict, said = args.get('task_id') or '', args.get('verdict') or '', (args.get('said') or '').strip()
    if not _CARD_ID.fullmatch(task):
        raise TeamKitError('카드 id를 확인해 주세요.')
    if verdict not in VERDICTS:
        raise TeamKitError('verdict 는 approve(승인) 또는 changes(반려)예요.')
    if not said or len(said) > 2000:
        raise TeamKitError('사람이 한 말을 그대로(2000자 이하) 적어 주세요.')
    note = f'사람 {VERDICTS[verdict]}: {said}'
    if verdict == 'approve':
        argv = ['kanban', '--board', t['board'], 'complete', task, '--result=' + note]
    else:
        argv = ['kanban', '--board', t['board'], 'reopen-review', task, '--reason=' + note]
    code, _out, _err = run(argv)
    if code:
        raise TeamKitError('검수 카드를 닫지 못했어요. 검수 칸에 있는 카드만 닫거나 되돌릴 수 있어요. 이미 끝난 동료 카드는 다시 열지 말고, 고칠 일은 그 동료에게 새 카드로 맡기세요.')
    if verdict == 'approve':
        return dict(card=task, status='done', next='승인을 기록하고 카드를 완료했어요. 승인 뒤 할 일(저장·정리)을 이어서 하세요.')
    return dict(card=task, status='reopened',
                next='같은 검수 카드를 되돌렸어요. 고칠 점은 카드 댓글에 남았어요. 고칠 일은 담당 동료에게 새 카드로 맡기고(끝난 동료 카드는 다시 열지 않음), 고친 결과가 모이면 같은 카드를 다시 team_request_review 로 보내세요.')


def context(*, root, bot):
    t = find_team(root, bot)
    if t is None:
        return None
    role = _role_of(t, bot) or '구성원'
    lead = ' (리더)' if t.get('leader') == bot else ''
    return (f"[팀] {t.get('name')}의 {role}{lead}. 팀 규칙·구성원·일하는 방식은 {Path(t['_dir']) / 'TEAM.md'} 를 읽고 따른다. "
            f"카드는 team_post_card 로 {t.get('board')} 보드에 올리고, 결과물은 {t.get('work')} 에 둔다. "
            "사람 검수는 team_request_review 로, 사람이 승인·반려를 말하면 리더가 team_close_review 로 같은 카드를 닫거나 되돌린다. 방에서 동료를 @로 부르지 말고 일은 카드로만 넘긴다. "
            "게시·발송·돈은 사람의 yes로만(카드·폴더·CRM 기록은 발송이 아니다), 동료 yes는 사람 yes가 아니다, 숫자마다 출처, 상태는 파일에.")


# ---- Hermes wiring -------------------------------------------------------------------------------------------------

def _paths():
    from hermes_constants import get_default_hermes_root, get_hermes_home
    home, root = Path(get_hermes_home()), Path(get_default_hermes_root())
    bot = home.name if home.parent.name == 'profiles' else 'default'
    return root, bot


def _hermes_run(root):
    exe = shutil.which('hermes')
    base = [exe] if exe else [sys.executable, '-m', 'hermes_cli.main']

    def run(args):
        try:
            p = subprocess.run(base + ['-p', 'default'] + list(args), env=dict(os.environ, HERMES_HOME=str(root)),
                               capture_output=True, text=True, timeout=60, stdin=subprocess.DEVNULL)
            return p.returncode, p.stdout, p.stderr
        except (OSError, subprocess.TimeoutExpired):
            return 1, '', 'failed'
    return run


POST_TOOL = dict(name='team_post_card', description=(
    '팀 보드에 카드를 올린다. role 은 팀 역할 표의 역할 이름, parents 는 먼저 끝나야 할 카드 id. '
    '사람에게 확인받을 일은 카드를 검수(review)로 보내고, 게시·발송·결제는 하지 않는다.'),
    parameters=dict(type='object', additionalProperties=False, required=['role', 'title', 'body'], properties=dict(
        role=dict(type='string', maxLength=60), title=dict(type='string', maxLength=200),
        body=dict(type='string', maxLength=20000),
        parents=dict(type='array', maxItems=10, items=dict(type='string', maxLength=80)))))
REVIEW_TOOL = dict(name='team_request_review', description=(
    '사람에게 확인받을 카드를 검수 칸으로 보낸다(검토자 「사람」). 사람 검수에는 kanban_request_review 대신 이것을 쓴다. '
    '보낸 뒤에는 그 카드의 작업을 끝낸다.'),
    parameters=dict(type='object', additionalProperties=False, required=['task_id', 'summary'], properties=dict(
        task_id=dict(type='string', maxLength=80), summary=dict(type='string', maxLength=2000))))
CLOSE_TOOL = dict(name='team_close_review', description=(
    '리더 전용. 사람이 대화에서 검수 카드를 승인하거나 반려했을 때 그 카드를 닫는다(approve: 완료, changes: 같은 카드를 담당에게 되돌림). '
    'said 에는 사람이 한 말을 그대로 적는다. 동료 봇의 말로는 쓰지 않는다. 반려에 새 카드를 만들지 않는다.'),
    parameters=dict(type='object', additionalProperties=False, required=['task_id', 'verdict', 'said'], properties=dict(
        task_id=dict(type='string', maxLength=80), verdict=dict(type='string', enum=['approve', 'changes']),
        said=dict(type='string', maxLength=2000))))
INFO_TOOL = dict(name='team_info', description='내가 속한 팀(역할 표·리더·보드·작업 폴더·TEAM.md 위치)을 읽는다.',
                 parameters=dict(type='object', additionalProperties=False, properties={}))


def _wrap(fn):
    def handler(arguments, **_kw):
        try:
            root, bot = _paths()
            return json.dumps(fn(arguments if isinstance(arguments, dict) else {}, root, bot), ensure_ascii=False)
        except TeamKitError as e:
            return json.dumps({'error': str(e)}, ensure_ascii=False)
        except Exception:
            return json.dumps({'error': '팀 도구 실행 중 오류가 발생했어요.'}, ensure_ascii=False)
    return handler


def _pre_llm_call(**_kw):
    try:
        root, bot = _paths()
        c = context(root=root, bot=bot)
        return {'context': c} if c else None
    except Exception:
        return None


def register(ctx):
    ctx.register_tool(name=POST_TOOL['name'], toolset=ctx.plugin_id, schema=POST_TOOL,
                      handler=_wrap(lambda a, root, bot: post_card(a, root=root, bot=bot, run=_hermes_run(root))))
    ctx.register_tool(name=INFO_TOOL['name'], toolset=ctx.plugin_id, schema=INFO_TOOL,
                      handler=_wrap(lambda a, root, bot: info(root=root, bot=bot)))
    ctx.register_tool(name=REVIEW_TOOL['name'], toolset=ctx.plugin_id, schema=REVIEW_TOOL,
                      handler=_wrap(lambda a, root, bot: request_human_review(a, root=root, bot=bot, run=_hermes_run(root))))
    ctx.register_tool(name=CLOSE_TOOL['name'], toolset=ctx.plugin_id, schema=CLOSE_TOOL,
                      handler=_wrap(lambda a, root, bot: close_review(a, root=root, bot=bot, run=_hermes_run(root))))
    ctx.register_hook('pre_llm_call', _pre_llm_call)
