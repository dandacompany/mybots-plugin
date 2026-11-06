"""Reviewed, hash-bound decoration; never accepts motion content from a package."""
import copy
import hashlib
import json
from pathlib import Path

def motion_for_avatar(bot,avatar):
    registry=Path(__file__).with_name('roster-motion.json')
    if not registry.is_file():return None
    raw=registry.read_bytes()
    if len(raw)>100_000:raise ValueError('Motion registry exceeds limit')
    records=json.loads(raw)
    if not isinstance(records,list)or len(records)>100:raise ValueError('Invalid motion registry')
    sha256=hashlib.sha256(avatar).hexdigest()
    for entry in records:
        if entry['bot']==bot and entry['motion']['sha256']==sha256:
            return copy.deepcopy(entry['motion'])
    return None


def _yaml():
    try:
        import hermes_yaml as y
    except ImportError:
        import yaml as y
    return y


def backfill(root):
    """Add the reviewed avatar motion to installed MyBots profiles that have none; returns the profiles changed.
    Motion is written only at install or update, so bots installed before their portrait was calibrated (team bots
    and Tinker, 2026-11-07) never blinked. Only receipt-bearing profiles with a regular avatar file whose hash is in
    the registry are touched; the rest of profile.yaml is kept, and every failure is skipped."""
    y = _yaml()
    done = []
    for prof in sorted(Path(root, 'profiles').glob('*')):
        try:
            receipt_file, meta_file = prof / 'mybots-receipt.json', prof / 'profile.yaml'
            if prof.is_symlink() or not receipt_file.is_file() or receipt_file.is_symlink() or meta_file.is_symlink():
                continue
            bot = json.loads(receipt_file.read_text(encoding='utf-8')).get('bot')
            meta = (y.safe_load(meta_file.read_text(encoding='utf-8')) if meta_file.is_file() else None) or {}
            if not isinstance(meta, dict) or not isinstance(bot, str):
                continue
            ui = meta.get('ui_meta') if isinstance(meta.get('ui_meta'), dict) else {}
            own = ui.get('hermes-bots') if isinstance(ui.get('hermes-bots'), dict) else {}
            if own.get('avatarMotion'):
                continue
            avatar = next((prof / 'assets' / n for n in ('avatar.png', 'avatar.jpg')
                           if (prof / 'assets' / n).is_file() and not (prof / 'assets' / n).is_symlink()), None)
            motion = motion_for_avatar(bot, avatar.read_bytes()) if avatar and avatar.stat().st_size <= 2_000_000 else None
            if motion is None:
                continue
            meta['ui_meta'] = {**ui, 'hermes-bots': {**own, 'avatarMotion': motion}}
            tmp = meta_file.with_name('.profile.yaml.mybots-motion')
            tmp.write_text(y.safe_dump(meta, allow_unicode=True), encoding='utf-8')
            tmp.replace(meta_file)
            done.append(prof.name)
        except Exception:
            continue
    return done
