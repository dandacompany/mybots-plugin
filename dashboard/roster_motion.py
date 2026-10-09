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
