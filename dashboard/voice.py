"""Strict GPT Live preset reader and safe projection into a new profile config."""
import json
from pathlib import Path
import jsonschema

def read_preset(blob):
    if not isinstance(blob,bytes)or len(blob)>16384:raise ValueError('Preset size limit')
    try:
        preset=json.loads(blob.decode('utf-8'))
        schema=Path(__file__).with_name('voice.schema.json')
        if not schema.exists():schema=Path(__file__).resolve().parents[2]/'contracts/voice.schema.json'
        jsonschema.validate(preset,json.loads(schema.read_text()))
    except (UnicodeDecodeError,ValueError,jsonschema.ValidationError,RecursionError)as exc:raise ValueError('Invalid voice preset')from exc
    return preset

def voice_config(preset):
    # No credentials, endpoints or other config fields can pass this boundary.
    preset=read_preset(json.dumps(preset,ensure_ascii=False).encode())
    return dict(voice_chat_mode='gpt-live',gpt_live={k:preset[k]for k in ('model','voice','instructions')})
