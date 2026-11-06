"""MyBots package entrypoint; authenticated APIs live in dashboard/.

From 0.7.0 it also registers the pull-team assigner on the kanban dispatcher tick (dashboard/team_assign.py)."""
import importlib.util
from pathlib import Path

_HERE = Path(__file__).resolve().parent


def _assigner():
    spec = importlib.util.spec_from_file_location('mybots_team_assign', _HERE / 'dashboard' / 'team_assign.py')
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def _on_kanban_dispatch_tick(**kw):
    try:
        from hermes_constants import get_default_hermes_root
        root = get_default_hermes_root()
        ta = _assigner()
        teams_spec = importlib.util.spec_from_file_location('mybots_teams_rt', _HERE / 'dashboard' / 'teams.py')
        teams = importlib.util.module_from_spec(teams_spec)
        teams_spec.loader.exec_module(teams)
        return ta.on_tick(root=root, runner=teams.HermesRunner(root), **kw)
    except Exception:
        return None


def _refresh_team_kits():
    """At gateway start, before the bots' own plugins load: every recruited bot gets this version's team kit."""
    try:
        from hermes_constants import get_default_hermes_root
        spec = importlib.util.spec_from_file_location('mybots_teams_kit_refresh', _HERE / 'dashboard' / 'teams.py')
        teams = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(teams)
        return teams.refresh_kits(get_default_hermes_root())
    except Exception:
        return None


def _backfill_motion():
    """At gateway start: installed MyBots bots whose portrait was calibrated after they were installed get their
    blink motion (team bots and Tinker, 2026-11-07)."""
    try:
        from hermes_constants import get_default_hermes_root
        spec = importlib.util.spec_from_file_location('mybots_roster_motion_backfill', _HERE / 'dashboard' / 'roster_motion.py')
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)
        return mod.backfill(get_default_hermes_root())
    except Exception:
        return None


def register(ctx):
    """Hermes discovers the dashboard API and desktop half from this package."""
    _refresh_team_kits()
    _backfill_motion()
    ctx.register_hook('on_kanban_dispatch_tick', _on_kanban_dispatch_tick)
