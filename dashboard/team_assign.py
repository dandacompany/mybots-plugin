"""Pull teams (MyBots 0.7.0): on each kanban dispatcher tick, give unassigned cards on a pull team's board to the
member whose role matches the card's first line 「<tag>: <role>」. Least busy first, at most N running per bot
(over the cap the card waits for a later tick). No role or no match → the leader, with a 「맞는 역할 없음」 comment.
A card that already has an assignee is never touched; the core's atomic claim prevents double runs.
Measured 11-03: the hook fires in the gateway for the default profile's plugins, once per board per tick (60 s),
and an assign made here is spawned on the next tick. Never raises."""
import json
from pathlib import Path

_seen = set()  # (board, card) assigned by this process


def _teams(root):
    for p in (Path(root) / 'teams').glob('*/team.json'):
        try:
            t = json.loads(p.read_text(encoding='utf-8'))
        except (OSError, ValueError):
            continue
        if t.get('mode') == 'pull' and t.get('board'):
            yield t


def _json(runner, args):
    code, out, _ = runner(args, profile='default', timeout=60)
    if code:
        return None
    try:
        return json.loads(out or 'null')
    except ValueError:
        return None


def _running_by_bot(runner, board):
    rows = _json(runner, ['kanban', '--board', board, 'list', '--status', 'running', '--json']) or []
    rows = rows.get('tasks', rows) if isinstance(rows, dict) else rows
    counts = {}
    for r in rows if isinstance(rows, list) else []:
        if isinstance(r, dict) and r.get('status', 'running') == 'running' and r.get('assignee'):
            counts[r['assignee']] = counts.get(r['assignee'], 0) + 1
    return counts


def _role(body, tag):
    first = (body or '').strip().splitlines()[0] if (body or '').strip() else ''
    for sep in (':', '：'):
        if first.startswith(tag + sep):
            return first.split(sep, 1)[1].strip()
    return None


def assign_board(team, unassigned, runner):
    board, tag = team['board'], (team.get('pull') or {}).get('tag', '역할')
    cap = int((team.get('pull') or {}).get('max_running_per_bot', 1))
    busy = _running_by_bot(runner, board)
    done = []
    for card in unassigned:
        if (board, card) in _seen:
            continue
        shown = _json(runner, ['kanban', '--board', board, 'show', card, '--json'])
        task = (shown or {}).get('task') if isinstance(shown, dict) else None
        if not isinstance(task, dict) or task.get('assignee'):
            continue
        role = _role(task.get('body'), tag)
        bots = team['roles'].get(role) if role else None
        if bots:
            free = sorted((busy.get(b, 0), i, b) for i, b in enumerate(bots) if busy.get(b, 0) < cap)
            if not free:
                continue  # every bot of this role is at its cap: a later tick takes it
            target, note = free[0][2], None
        else:
            target, note = team['leader'], '맞는 역할 없음: 리더에게 넘겼어요. 첫 줄에 「' + tag + ': <역할>」을 적어 주세요.'
        code, _, _ = runner(['kanban', '--board', board, 'assign', card, target], profile='default', timeout=60)
        if code:
            continue
        _seen.add((board, card))
        busy[target] = busy.get(target, 0) + 1
        if note:
            runner(['kanban', '--board', board, 'comment', card, note], profile='default', timeout=60)
        done.append((card, target))
    return done


def on_tick(board=None, profile_name=None, dry_run=False, outcome=None, result=None, *, root, runner, **_):
    try:
        if dry_run or not board:
            return []
        unassigned = list(getattr(result, 'skipped_unassigned', None) or [])
        if not unassigned:
            return []
        for team in _teams(root):
            if team['board'] == board:
                return assign_board(team, unassigned, runner)
    except Exception:
        return []
    return []
