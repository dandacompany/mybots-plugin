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


def register(ctx):
    """Hermes discovers the dashboard API and desktop half from this package."""
    ctx.register_hook('on_kanban_dispatch_tick', _on_kanban_dispatch_tick)
