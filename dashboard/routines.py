"""Bot call panel (MyBots 0.7.0): every profile's scheduled jobs, and "run now" as `hermes [-p <profile>] cron run <id>`
started in the background. Reads cron/jobs.json only; never edits a job. A run's output body is never returned —
the job's own delivery decides where its result goes; the panel only says running / succeeded / failed."""
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import threading
import time
import uuid

_ID = re.compile(r'^[a-z0-9][a-z0-9_-]{0,63}$')  # Hermes profile names (hermes_constants.PROFILE_ID_RE)
_JOB = re.compile(r'^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$')
_FIELDS = ('id', 'name', 'state', 'last_run_at', 'next_run_at', 'last_status')
_SUCCESS = 'Ran now: succeeded'


class NotFound(Exception):
    pass


class Busy(Exception):
    pass


class Paused(Exception):
    pass


def _homes(root):
    root = Path(root)
    out = [('default', root)]
    profiles = root / 'profiles'
    if profiles.is_dir():
        out += sorted((p.name, p) for p in profiles.iterdir() if p.is_dir() and _ID.fullmatch(p.name))
    return out


def _jobs(home):
    try:
        raw = json.loads((Path(home) / 'cron/jobs.json').read_text(encoding='utf-8'))
    except (OSError, ValueError):
        return []
    items = raw.get('jobs', []) if isinstance(raw, dict) else raw if isinstance(raw, list) else []
    return [j for j in items if isinstance(j, dict) and isinstance(j.get('id'), str)]


def _schedule(job):
    s = job.get('schedule')
    if isinstance(s, dict):
        return str(s.get('display') or s.get('expr') or s.get('run_at') or '')[:60]
    return str(s or '')[:60]


def list_all(root):
    rows = []
    for profile, home in _homes(root):
        for j in _jobs(home):
            rows.append(dict(profile=profile, schedule=_schedule(j),
                             **{k: (str(j[k])[:80] if j.get(k) is not None else None) for k in _FIELDS}))
    return rows


def _hermes():
    found = shutil.which('hermes')
    return [found] if found else [sys.executable, '-m', 'hermes_cli.main']


def _spawn(argv, env=None):
    return subprocess.Popen(argv, stdin=subprocess.DEVNULL, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL,
                            text=True, start_new_session=True, env=env)


class Runs:
    def __init__(self, root, spawn=_spawn, hermes=None):
        self.root, self.spawn, self.hermes = Path(root), spawn, hermes
        self.lock = threading.Lock()
        self.runs = {}

    def _find(self, profile, job_id):
        if not isinstance(profile, str) or not isinstance(job_id, str) or not _JOB.fullmatch(job_id):
            raise NotFound()
        homes = dict(_homes(self.root))
        if profile not in homes:
            raise NotFound()
        for j in _jobs(homes[profile]):
            if j['id'] == job_id:
                return j
        raise NotFound()

    def start(self, profile, job_id):
        job = self._find(profile, job_id)
        if job.get('state') == 'paused' or job.get('paused_at') or job.get('enabled') is False:
            raise Paused()
        with self.lock:
            for r in self.runs.values():
                if (r['profile'], r['job']) == (profile, job_id) and self._state(r) == 'running':
                    raise Busy()
            # always -p and the same root: without them the child follows the sticky active profile or another root
            argv = (self.hermes or _hermes()) + ['-p', profile, 'cron', 'run', job_id]
            env = dict(os.environ, HERMES_HOME=str(self.root))
            rid = uuid.uuid4().hex[:12]
            self.runs[rid] = dict(run_id=rid, profile=profile, job=job_id, proc=self.spawn(argv, env=env),
                                  started_at=time.time(), finished_at=None, state='running')
            return rid

    def _state(self, r):
        if r['state'] != 'running':
            return r['state']
        code = r['proc'].poll()
        if code is None:
            return 'running'
        try:
            out, _ = r['proc'].communicate(timeout=5)
        except Exception:
            out = ''
        r['state'] = 'succeeded' if code == 0 and _SUCCESS in (out or '') else 'failed'
        r['finished_at'] = time.time()
        return r['state']

    def status(self, run_id):
        with self.lock:
            r = self.runs.get(run_id)
            if r is None:
                raise NotFound()
            self._state(r)
            return {k: r[k] for k in ('run_id', 'profile', 'job', 'state', 'started_at', 'finished_at')}
