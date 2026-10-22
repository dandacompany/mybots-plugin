// packages/hermes-plugin/desktop/plugin.tsx
import { ROUTES_AREA, SIDEBAR_NAV_AREA } from "@hermes/plugin-sdk";

// packages/hermes-plugin/desktop/i18n.ts
import * as sdk from "@hermes/plugin-sdk";

// packages/hermes-plugin/desktop/locales.json
var locales_default = {
  en: {
    "Could not load installed bots. Please retry.": "Could not load installed bots. Please retry.",
    "Could not load the catalog. Installed bots are still available.": "Could not load the catalog. Installed bots are still available.",
    "This bot version is no longer published.": "This bot version is no longer published.",
    "Refresh to check installation status.": "Refresh to check installation status.",
    "Find your next AI colleague.": "Find your next AI colleague.",
    Refresh: "Refresh",
    "MyBots menu": "MyBots menu",
    "Browse bots": "Browse bots",
    "Installed bots": "Installed bots",
    "My submissions": "My submissions",
    "Connection settings": "Connection settings",
    "Showing the saved catalog while offline. Reconnect to install.": "Showing the saved catalog while offline. Reconnect to install.",
    "Last checked:": "Last checked:",
    "Search bots": "Search bots",
    "Search by name or role": "Search by name or role",
    "Bot category": "Bot category",
    "All categories": "All categories",
    Business: "Business",
    Learning: "Learning",
    "Daily life": "Daily life",
    "Loading colleagues": "Loading colleagues",
    "{0} colleagues": "{0} colleagues",
    Soul: "Soul",
    Skills: "Skills",
    Plugins: "Plugins",
    Voice: "Voice",
    Meet: "Meet",
    "Motion preview": "Motion preview",
    "No matching bots": "No matching bots",
    "Try another search or category.": "Try another search or category.",
    "No bots installed yet": "No bots installed yet",
    "Find your first colleague in Browse bots.": "Find your first colleague in Browse bots.",
    "Check version": "Check version",
    Installed: "Installed",
    "Other version": "Other version",
    "Check files": "Check files",
    "Open chat": "Open chat",
    "Loading submissions": "Loading submissions",
    "Could not load connection settings. Check the server origin.": "Could not load connection settings. Check the server origin.",
    "Could not connect. Check key expiry, permissions and storage.": "Could not connect. Check key expiry, permissions and storage.",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "Browsing and installation need no key. Submitting bots requires a creator API key.",
    Server: "Server",
    Connection: "Connection",
    Connected: "Connected",
    Disconnected: "Disconnected",
    "Environment · provider": "Environment · provider",
    Permissions: "Permissions",
    Expires: "Expires",
    "Key provider": "Key provider",
    "bws item ID (recommended)": "bws item ID (recommended)",
    "OS secure storage": "OS secure storage",
    "This session only": "This session only",
    "bws item ID": "bws item ID",
    "MyBots API key": "MyBots API key",
    "Session keys stay in backend memory and are cleared on restart.": "Session keys stay in backend memory and are cleared on restart.",
    "Secure OS storage is unavailable. Choose bws or session storage.": "Secure OS storage is unavailable. Choose bws or session storage.",
    Connect: "Connect",
    Disconnect: "Disconnect",
    "Refresh connection": "Refresh connection",
    Draft: "Draft",
    Validated: "Validated",
    Published: "Published",
    Unpublished: "Unpublished",
    "Bot ID": "Bot ID",
    Version: "Version",
    Name: "Name",
    "English name": "English name",
    Role: "Role",
    Personality: "Personality",
    Description: "Description",
    "First prompt": "First prompt",
    "Could not load connection details.": "Could not load connection details.",
    "Could not load submissions. Check your key connection.": "Could not load submissions. Check your key connection.",
    "The screen or connection changed.": "The screen or connection changed.",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.",
    "Select MyBots package": "Select MyBots package",
    "ZIP ID or version differs. Create a new draft.": "ZIP ID or version differs. Create a new draft.",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "Save your bot and validate its package. An operator reviews publication in the CMS.",
    "Connect a creator API key in Connection settings first.": "Connect a creator API key in Connection settings first.",
    "Submit a bot": "Submit a bot",
    "Refresh submissions": "Refresh submissions",
    "No submissions yet": "No submissions yet",
    "Start your first draft with a Soul and avatar.": "Start your first draft with a Soul and avatar.",
    "Submission details": "Submission details",
    "New draft": "New draft",
    Category: "Category",
    "Save details": "Save details",
    "Save draft": "Save draft",
    "Soul and avatar": "Soul and avatar",
    "Select bot avatar": "Select bot avatar",
    "Choose avatar": "Choose avatar",
    "Avatar selected": "Avatar selected",
    "PNG/JPEG · square, 128–2048px": "PNG/JPEG · square, 128–2048px",
    "Save Soul and avatar package": "Save Soul and avatar package",
    "Full package": "Full package",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "Choose a full ZIP for bots with skills, MCP, plugins or voice.",
    "Choose package": "Choose package",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "This Hermes version has no plugin file picker. Upload through the CMS.",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "ZIP details differ from the draft. Apply the ZIP details before uploading.",
    "Apply ZIP details and upload": "Apply ZIP details and upload",
    Cancel: "Cancel",
    "Validate package": "Validate package",
    "Validated · awaiting CMS review and publication.": "Validated · awaiting CMS review and publication.",
    "Published · available in the gallery.": "Published · available in the gallery.",
    "MCP · runs local Python": "MCP · runs local Python",
    "Plugin · runs local Python": "Plugin · runs local Python",
    "Recommended GPT Live voice": "Recommended GPT Live voice",
    "Could not review the installation. Check connection and publication status.": "Could not review the installation. Check connection and publication status.",
    "Could not install. Review the configuration and retry.": "Could not install. Review the configuration and retry.",
    "Meet {0}": "Meet {0}",
    "Soul and avatar required": "Soul and avatar required",
    "Include these features": "Include these features",
    "Start with a Soul and avatar.": "Start with a Soul and avatar.",
    "Reviewing installation": "Reviewing installation",
    "New profile:": "New profile:",
    "Author:": "Author:",
    "Selected MCP and plugins execute Python on this device.": "Selected MCP and plugins execute Python on this device.",
    "Recommended voice:": "Recommended voice:",
    "Configure voice authentication in Hermes.": "Configure voice authentication in Hermes.",
    "Soul and file verification": "Soul and file verification",
    "Install {0}": "Install {0}",
    "Review again": "Review again",
    "Already installed": "Already installed",
    "Installation complete": "Installation complete",
    "Configure a model and authentication in Hermes.": "Configure a model and authentication in Hermes.",
    "Your profile is ready.": "Your profile is ready.",
    "First prompt:": "First prompt:",
    "Setup guide": "Setup guide",
    "Open bot chat": "Open bot chat",
    "Please check": "Please check",
    "Install and submit from Local → default on this device.": "Install and submit from Local → default on this device.",
    "Could not open the local connection. Please retry.": "Could not open the local connection. Please retry.",
    "Connect to this device’s default": "Connect to this device’s default",
    Idle: "Idle",
    Thinking: "Thinking",
    "Recently working": "Recently working",
    "Status unavailable": "Status unavailable",
    "{0} avatar": "{0} avatar",
    "Confirm installation of {0}": "Confirm installation of {0}",
    "Not auditioned": "Not auditioned",
    "Existing voice settings were preserved. Check the profile’s Voice settings.": "Existing voice settings were preserved. Check the profile’s Voice settings.",
    "Recommended voice {0} included. Check voice authentication.": "Recommended voice {0} included. Check voice authentication.",
    "Voice settings were not included.": "Voice settings were not included.",
    "Validation issue at {0}. Check the package format and required fields.": "Validation issue at {0}. Check the package format and required fields.",
    Avatar: "Avatar",
    "Revision {0}": "Revision {0}",
    "{0} bytes": "{0} bytes",
    "A bot named {0} already exists. The existing bot was not changed.": "A bot named {0} already exists. The existing bot was not changed.",
    "The {0} profile has manual changes, so installation stopped. The existing bot was not changed.": "The {0} profile has manual changes, so installation stopped. The existing bot was not changed.",
    "The review expired, so nothing was installed. Review the configuration again.": "The review expired, so nothing was installed. Review the configuration again.",
    "A profile named {0} already exists, so this bot cannot be installed. The existing bot will not be changed. Rename the existing profile and try again.": "A profile named {0} already exists, so this bot cannot be installed. The existing bot will not be changed. Rename the existing profile and try again.",
    "Model: {0} (same as the default profile)": "Model: {0} (same as the default profile)",
    "Model: the default profile has no model, so this stays empty. Choose a model first after installing.": "Model: the default profile has no model, so this stays empty. Choose a model first after installing.",
    "Choose a model first. This bot has no model yet.": "Choose a model first. This bot has no model yet.",
    "You can chat right away with the same model as the default profile ({0}).": "You can chat right away with the same model as the default profile ({0}).",
    "Language packs: {0} (copied from the default profile)": "Language packs: {0} (copied from the default profile)",
    "Keys this bot needs are stored only in bot profiles on this computer": "Keys this bot needs are stored only in bot profiles on this computer",
    "Could not save this key to the default profile; the bot profile has it": "Could not save this key to the default profile; the bot profile has it",
    "The default profile key file could not be checked safely, so it was left unchanged; the bot profile has this key": "The default profile key file could not be checked safely, so it was left unchanged; the bot profile has this key",
    "Keys apply from the next new chat (or after restarting Hermes)": "Keys apply from the next new chat (or after restarting Hermes)",
    "The bot profile key file could not be checked safely, so nothing was changed": "The bot profile key file could not be checked safely, so nothing was changed",
    "Service keys": "Service keys",
    Required: "Required",
    Optional: "Optional",
    "Get a key": "Get a key",
    "Imported from the default profile ✓": "Imported from the default profile ✓",
    "Save to the default profile so other bots can use it": "Save to the default profile so other bots can use it",
    "The default profile value stays as it is": "The default profile value stays as it is",
    "Required keys left empty: {0}. You can add them after installing.": "Required keys left empty: {0}. You can add them after installing.",
    "Required keys still empty: {0}.": "Required keys still empty: {0}.",
    Set: "Set",
    Empty: "Empty",
    Skipped: "Skipped",
    "Could not check": "Could not check",
    "Keys needed": "Keys needed",
    "Check keys": "Check keys",
    "Taken from the default profile": "Taken from the default profile",
    "Also saved to the default profile": "Also saved to the default profile",
    "The default profile value was kept": "The default profile value was kept",
    "Add keys": "Add keys",
    "Add keys for {0}": "Add keys for {0}",
    "Save keys": "Save keys",
    "Loading keys": "Loading keys",
    "Bot profile: {0}": "Bot profile: {0}",
    "The request was not accepted, so nothing was changed. Update MyBots and retry.": "The request was not accepted, so nothing was changed. Update MyBots and retry.",
    "A key value is empty. Enter it or leave the key out. Nothing was changed.": "A key value is empty. Enter it or leave the key out. Nothing was changed.",
    "A key must be one line of at most 4,096 bytes without control characters. Nothing was changed.": "A key must be one line of at most 4,096 bytes without control characters. Nothing was changed.",
    "The keys did not match this bot. Review again; nothing was changed.": "The keys did not match this bot. Review again; nothing was changed.",
    "The bot profile config could not be read safely, so nothing was changed.": "The bot profile config could not be read safely, so nothing was changed.",
    "Could not save the keys to the bot profile. Retry.": "Could not save the keys to the bot profile. Retry.",
    "This bot was not installed by MyBots with keys, so add keys in Hermes settings.": "This bot was not installed by MyBots with keys, so add keys in Hermes settings.",
    "The installed version changed. Refresh the bot list and retry.": "The installed version changed. Refresh the bot list and retry.",
    "This bot needs a newer MyBots helper. Update MyBots and retry.": "This bot needs a newer MyBots helper. Update MyBots and retry.",
    "Could not save the keys. Retry.": "Could not save the keys. Retry.",
    "This bot was already installed, so the keys you entered were not saved. Add them below with Add keys.": "This bot was already installed, so the keys you entered were not saved. Add them below with Add keys.",
    "Coming soon": "Coming soon",
    "This bot is still being prepared. You can install it once it opens.": "This bot is still being prepared. You can install it once it opens.",
    "This bot is not open yet.": "This bot is not open yet.",
    Update: "Update",
    "Update available": "Update available",
    "Update {0}": "Update {0}",
    "Reviewing update": "Reviewing update",
    "Version {0} → {1}": "Version {0} → {1}",
    "{0} files will be replaced and {1} removed.": "{0} files will be replaced and {1} removed.",
    "Updates files of the installed local profile; files you added are kept": "Updates files of the installed local profile; files you added are kept",
    "{0} files you changed will be backed up, then replaced by the new version.": "{0} files you changed will be backed up, then replaced by the new version.",
    "Keys new in this version. You can skip them and add them later with Add keys.": "Keys new in this version. You can skip them and add them later with Add keys.",
    "Wait until the chat in progress ends, then try again.": "Wait until the chat in progress ends, then try again.",
    "Update complete": "Update complete",
    "Restart Hermes to apply.": "Restart Hermes to apply.",
    "Only a newer version can be installed as an update. Refresh the bot list.": "Only a newer version can be installed as an update. Refresh the bot list.",
    "This version cannot be updated in place. Reinstall the bot to get it.": "This version cannot be updated in place. Reinstall the bot to get it.",
    "The installed bot changed after the review, so nothing was changed. Review the update again.": "The installed bot changed after the review, so nothing was changed. Review the update again.",
    "The update failed, and the previous version was restored.": "The update failed, and the previous version was restored.",
    "The update failed and some files could not be restored. The previous files are in the profile’s .mybots-backup folder.": "The update failed and some files could not be restored. The previous files are in the profile’s .mybots-backup folder.",
    "The review expired, so nothing was updated. Review the update again.": "The review expired, so nothing was updated. Review the update again.",
    "This bot was not installed by MyBots, so it cannot be updated here.": "This bot was not installed by MyBots, so it cannot be updated here.",
    "Could not update. Review the update again and retry.": "Could not update. Review the update again and retry."
  },
  ko: {
    "Could not load installed bots. Please retry.": "설치된 봇을 확인하지 못했습니다. 다시 시도해 주세요.",
    "Could not load the catalog. Installed bots are still available.": "카탈로그를 불러오지 못했습니다. 설치된 봇은 계속 열 수 있어요.",
    "This bot version is no longer published.": "이 링크의 봇 버전은 현재 공개되어 있지 않습니다.",
    "Refresh to check installation status.": "설치 상태를 다시 확인해 주세요.",
    "Find your next AI colleague.": "나와 맞는 AI 동료를 찾아보세요.",
    Refresh: "새로고침",
    "MyBots menu": "MyBots 메뉴",
    "Browse bots": "봇 탐색",
    "Installed bots": "설치된 봇",
    "My submissions": "내 등록",
    "Connection settings": "연결 설정",
    "Showing the saved catalog while offline. Reconnect to install.": "서버에 연결하지 못해 저장된 목록을 보여드려요. 설치하려면 다시 연결해 주세요.",
    "Last checked:": "마지막 확인:",
    "Search bots": "봇 검색",
    "Search by name or role": "이름이나 역할로 검색",
    "Bot category": "봇 분류",
    "All categories": "모든 분류",
    Business: "업무",
    Learning: "학습",
    "Daily life": "일상",
    "Loading colleagues": "동료를 불러오고 있어요",
    "{0} colleagues": "{0}명의 동료",
    Soul: "소울",
    Skills: "스킬",
    Plugins: "플러그인",
    Voice: "보이스",
    Meet: "만나보기",
    "Motion preview": "모션 미리보기",
    "No matching bots": "조건에 맞는 봇이 없어요",
    "Try another search or category.": "검색어나 분류를 바꿔보세요.",
    "No bots installed yet": "아직 설치된 봇이 없어요",
    "Find your first colleague in Browse bots.": "봇 탐색에서 첫 동료를 만나보세요.",
    "Check version": "버전 확인 필요",
    Installed: "설치됨",
    "Other version": "다른 버전",
    "Check files": "파일 확인 필요",
    "Open chat": "대화 열기",
    "Loading submissions": "등록 기능을 연결하고 있어요",
    "Could not load connection settings. Check the server origin.": "연결 정보를 확인하지 못했습니다. 서버 출처 설정을 확인해 주세요.",
    "Could not connect. Check key expiry, permissions and storage.": "연결하지 못했습니다. 키 만료·폐기·권한과 선택한 저장소를 확인해 주세요.",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "봇 탐색과 설치는 키 없이 이용해요. 내 봇 등록에는 제작자 API 키가 필요합니다.",
    Server: "서버",
    Connection: "연결",
    Connected: "연결됨",
    Disconnected: "연결 안 됨",
    "Environment · provider": "환경 · 공급자",
    Permissions: "권한",
    Expires: "만료",
    "Key provider": "키 공급자",
    "bws item ID (recommended)": "bws 항목 ID (단테 권장)",
    "OS secure storage": "OS 보안 저장소",
    "This session only": "이번 세션만",
    "bws item ID": "bws 항목 ID",
    "MyBots API key": "MyBots API 키",
    "Session keys stay in backend memory and are cleared on restart.": "키는 이번 백엔드 세션의 메모리에만 보관하며 재시작하면 해제됩니다.",
    "Secure OS storage is unavailable. Choose bws or session storage.": "이 Hermes 환경에는 사용할 수 있는 OS 보안 저장소가 없습니다. bws 또는 이번 세션을 선택해 주세요.",
    Connect: "연결하기",
    Disconnect: "연결 해제",
    "Refresh connection": "연결 상태 새로고침",
    Draft: "초안",
    Validated: "검증 완료",
    Published: "공개됨",
    Unpublished: "비공개",
    "Bot ID": "봇 ID",
    Version: "버전",
    Name: "이름",
    "English name": "영문 이름",
    Role: "역할",
    Personality: "성격",
    Description: "소개",
    "First prompt": "첫 질문",
    "Could not load connection details.": "연결 정보를 확인하지 못했습니다.",
    "Could not load submissions. Check your key connection.": "등록 목록을 불러오지 못했습니다. 키 연결을 확인해 주세요.",
    "The screen or connection changed.": "화면이나 연결이 변경되었습니다.",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "저장·검증하지 못했습니다. 입력, 키 연결과 서버 상태를 확인해 주세요. 응답을 못 받았다면 같은 내용으로 다시 저장하거나 목록을 새로고침하세요.",
    "Select MyBots package": "MyBots 패키지 선택",
    "ZIP ID or version differs. Create a new draft.": "ZIP의 ID 또는 버전이 다릅니다. 새 초안을 만들어 주세요.",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "내 봇을 저장하고 패키지를 검증해요. 공개 발행은 운영자가 CMS에서 검토합니다.",
    "Connect a creator API key in Connection settings first.": "연결 설정에서 제작자 API 키를 먼저 연결해 주세요.",
    "Submit a bot": "새 봇 등록",
    "Refresh submissions": "등록 목록 새로고침",
    "No submissions yet": "아직 등록한 봇이 없어요",
    "Start your first draft with a Soul and avatar.": "소울과 아바타로 첫 초안을 만들어보세요.",
    "Submission details": "등록 정보",
    "New draft": "새 초안",
    Category: "분류",
    "Save details": "정보 저장",
    "Save draft": "초안 저장",
    "Soul and avatar": "소울과 아바타",
    "Select bot avatar": "봇 아바타 선택",
    "Choose avatar": "아바타 선택",
    "Avatar selected": "아바타 선택됨",
    "PNG/JPEG · square, 128–2048px": "PNG/JPEG · 정사각형 128–2048px",
    "Save Soul and avatar package": "소울·아바타 패키지 저장",
    "Full package": "전체 패키지",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "스킬·MCP·플러그인·보이스가 있는 봇은 전체 ZIP 패키지를 선택해 주세요.",
    "Choose package": "패키지 선택",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "이 Hermes 버전은 플러그인 파일 선택을 제공하지 않습니다. CMS에서 패키지를 올려 주세요.",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "ZIP 정보가 저장된 초안과 다릅니다. ZIP의 소개·구성을 적용한 뒤 업로드할 수 있어요.",
    "Apply ZIP details and upload": "ZIP 정보 적용 후 업로드",
    Cancel: "취소",
    "Validate package": "패키지 검증",
    "Validated · awaiting CMS review and publication.": "검증 완료 · 운영자의 CMS 검토와 발행을 기다립니다.",
    "Published · available in the gallery.": "공개됨 · 갤러리에서 확인할 수 있어요.",
    "MCP · runs local Python": "MCP · 로컬 Python 실행",
    "Plugin · runs local Python": "플러그인 · 로컬 Python 실행",
    "Recommended GPT Live voice": "GPT Live 추천 보이스",
    "Could not review the installation. Check connection and publication status.": "설치 구성을 확인하지 못했습니다. 서버 연결과 공개 상태를 확인해 주세요.",
    "Could not install. Review the configuration and retry.": "설치하지 못했습니다. 구성을 다시 확인해 주세요.",
    "Meet {0}": "{0} 만나기",
    "Soul and avatar required": "소울 · 아바타 필수",
    "Include these features": "함께 설치할 기능",
    "Start with a Soul and avatar.": "소울과 아바타로 시작해요.",
    "Reviewing installation": "설치 구성을 확인하고 있어요",
    "New profile:": "새 프로필:",
    "Author:": "· 제작자:",
    "Selected MCP and plugins execute Python on this device.": "선택한 MCP·플러그인은 이 기기에서 Python 코드를 실행합니다.",
    "Recommended voice:": "추천 보이스:",
    "Configure voice authentication in Hermes.": "음성 인증은 Hermes에서 설정해 주세요.",
    "Soul and file verification": "소울과 파일 검증 정보",
    "Install {0}": "{0} 설치하기",
    "Review again": "구성 다시 확인",
    "Already installed": "이미 설치된 봇이에요",
    "Installation complete": "설치 완료",
    "Configure a model and authentication in Hermes.": "모델과 인증을 Hermes에서 설정해 주세요.",
    "Your profile is ready.": "프로필이 준비됐어요.",
    "First prompt:": "첫 질문:",
    "Setup guide": "설정 안내",
    "Open bot chat": "봇 대화 열기",
    "Please check": "확인이 필요해요",
    "Install and submit from Local → default on this device.": "설치와 등록은 이 기기의 Local → default에서 진행합니다.",
    "Could not open the local connection. Please retry.": "로컬 연결을 열지 못했습니다. 다시 시도해 주세요.",
    "Connect to this device’s default": "이 기기의 default로 연결",
    Idle: "대기 중",
    Thinking: "생각 중",
    "Recently working": "최근 작업 중",
    "Status unavailable": "상태 확인 불가",
    "{0} avatar": "{0} 아바타",
    "Confirm installation of {0}": "{0} 설치 확인",
    "Not auditioned": "청취 검증 전",
    "Existing voice settings were preserved. Check the profile’s Voice settings.": "기존 보이스 설정을 보존했어요. 추천 보이스 적용 여부는 해당 프로필의 Voice 설정에서 확인해 주세요.",
    "Recommended voice {0} included. Check voice authentication.": "추천 보이스 {0} 설정 포함 · 음성 인증 확인이 필요합니다.",
    "Voice settings were not included.": "보이스 설정은 포함하지 않았어요.",
    "Validation issue at {0}. Check the package format and required fields.": "{0} 검증 문제 · 패키지 형식과 필수 항목을 확인해 주세요.",
    Avatar: "아바타",
    "Revision {0}": "리비전 {0}",
    "{0} bytes": "{0}바이트",
    "A bot named {0} already exists. The existing bot was not changed.": "같은 이름({0})의 봇이 이미 있어요. 기존 봇은 바꾸지 않았습니다.",
    "The {0} profile has manual changes, so installation stopped. The existing bot was not changed.": "{0} 프로필에 직접 바꾼 내용이 있어 설치를 멈췄어요. 기존 봇은 바꾸지 않았습니다.",
    "The review expired, so nothing was installed. Review the configuration again.": "확인한 지 오래되어 설치하지 않았어요. 구성을 다시 확인해 주세요.",
    "A profile named {0} already exists, so this bot cannot be installed. The existing bot will not be changed. Rename the existing profile and try again.": "같은 이름({0})의 프로필이 이미 있어 설치할 수 없어요. 기존 봇은 바꾸지 않습니다. 기존 프로필 이름을 바꾼 뒤 다시 시도해 주세요.",
    "Model: {0} (same as the default profile)": "모델: {0} (기본 프로필과 같음)",
    "Model: the default profile has no model, so this stays empty. Choose a model first after installing.": "모델: 기본 프로필에 모델이 없어 비워 둡니다. 설치 후 먼저 모델을 골라 주세요.",
    "Choose a model first. This bot has no model yet.": "먼저 모델을 골라 주세요. 이 봇에는 아직 모델이 없어요.",
    "You can chat right away with the same model as the default profile ({0}).": "기본 프로필과 같은 모델({0})로 바로 대화할 수 있어요.",
    "Language packs: {0} (copied from the default profile)": "언어팩: {0} (기본 프로필에서 복사)",
    "Keys this bot needs are stored only in bot profiles on this computer": "필요한 키는 이 컴퓨터의 봇 프로필에만 저장됩니다",
    "Could not save this key to the default profile; the bot profile has it": "기본 프로필에는 이 키를 저장하지 못했습니다. 봇 프로필에는 저장되었습니다",
    "The default profile key file could not be checked safely, so it was left unchanged; the bot profile has this key": "기본 프로필의 키 파일을 안전하게 확인할 수 없어 그대로 두었습니다. 봇 프로필에는 이 키가 저장되었습니다",
    "Keys apply from the next new chat (or after restarting Hermes)": "새 대화(또는 Hermes 재시작)부터 적용됩니다",
    "The bot profile key file could not be checked safely, so nothing was changed": "봇 프로필의 키 파일을 안전하게 확인할 수 없어 아무것도 바꾸지 않았습니다",
    "Service keys": "필요한 키",
    Required: "필수",
    Optional: "선택",
    "Get a key": "키 발급받기",
    "Imported from the default profile ✓": "기본 프로필에서 가져옴 ✓",
    "Save to the default profile so other bots can use it": "다른 봇에도 쓰도록 기본 프로필에 저장",
    "The default profile value stays as it is": "기본 프로필 값은 그대로 둡니다",
    "Required keys left empty: {0}. You can add them after installing.": "필수 키 {0}개가 비어 있습니다. 설치 후 넣을 수 있습니다",
    "Required keys still empty: {0}.": "필수 키 {0}개가 아직 비어 있습니다",
    Set: "설정됨",
    Empty: "비어 있음",
    Skipped: "건너뜀",
    "Could not check": "확인할 수 없음",
    "Keys needed": "키 필요",
    "Check keys": "키 확인 필요",
    "Taken from the default profile": "기본 프로필에서 가져옴",
    "Also saved to the default profile": "기본 프로필에도 저장됨",
    "The default profile value was kept": "기본 프로필 값은 그대로 두었습니다",
    "Add keys": "키 넣기",
    "Add keys for {0}": "{0}의 키 넣기",
    "Save keys": "키 저장",
    "Loading keys": "키 정보를 불러오는 중",
    "Bot profile: {0}": "봇 프로필: {0}",
    "The request was not accepted, so nothing was changed. Update MyBots and retry.": "요청이 받아들여지지 않아 아무것도 바꾸지 않았습니다. MyBots를 업데이트한 뒤 다시 시도해 주세요.",
    "A key value is empty. Enter it or leave the key out. Nothing was changed.": "비어 있는 키 값이 있습니다. 값을 넣거나 그 키를 비워 두세요. 아무것도 바꾸지 않았습니다.",
    "A key must be one line of at most 4,096 bytes without control characters. Nothing was changed.": "키는 제어 문자 없이 4,096바이트 이하의 한 줄이어야 합니다. 아무것도 바꾸지 않았습니다.",
    "The keys did not match this bot. Review again; nothing was changed.": "키가 이 봇과 맞지 않습니다. 다시 확인해 주세요. 아무것도 바꾸지 않았습니다.",
    "The bot profile config could not be read safely, so nothing was changed.": "봇 프로필 설정을 안전하게 읽을 수 없어 아무것도 바꾸지 않았습니다.",
    "Could not save the keys to the bot profile. Retry.": "봇 프로필에 키를 저장하지 못했습니다. 다시 시도해 주세요.",
    "This bot was not installed by MyBots with keys, so add keys in Hermes settings.": "MyBots가 키와 함께 설치한 봇이 아닙니다. Hermes 설정에서 키를 넣어 주세요.",
    "The installed version changed. Refresh the bot list and retry.": "설치된 버전이 바뀌었습니다. 봇 목록을 새로 고친 뒤 다시 시도해 주세요.",
    "This bot needs a newer MyBots helper. Update MyBots and retry.": "이 봇에는 더 새로운 MyBots 설치 도우미가 필요합니다. MyBots를 업데이트한 뒤 다시 시도해 주세요.",
    "Could not save the keys. Retry.": "키를 저장하지 못했습니다. 다시 시도해 주세요.",
    "This bot was already installed, so the keys you entered were not saved. Add them below with Add keys.": "이미 설치된 봇이라 입력한 키는 저장하지 않았습니다. 아래 '키 넣기'로 넣어 주세요.",
    "Coming soon": "준비 중",
    "This bot is still being prepared. You can install it once it opens.": "아직 준비 중인 봇입니다. 공개되면 설치할 수 있습니다.",
    "This bot is not open yet.": "아직 공개되지 않은 봇입니다.",
    Update: "업데이트",
    "Update available": "업데이트 가능",
    "Update {0}": "{0} 업데이트",
    "Reviewing update": "업데이트 내용을 확인하고 있어요",
    "Version {0} → {1}": "버전 {0} → {1}",
    "{0} files will be replaced and {1} removed.": "파일 {0}개를 바꾸고 {1}개를 지웁니다.",
    "Updates files of the installed local profile; files you added are kept": "설치된 로컬 프로필의 파일을 업데이트합니다. 직접 추가한 파일은 그대로 둡니다.",
    "{0} files you changed will be backed up, then replaced by the new version.": "직접 고친 파일 {0}개는 백업한 뒤 새 버전으로 바뀝니다.",
    "Keys new in this version. You can skip them and add them later with Add keys.": "이 버전에서 새로 필요한 키입니다. 건너뛰고 나중에 키 넣기로 넣을 수 있습니다.",
    "Wait until the chat in progress ends, then try again.": "진행 중인 대화가 끝난 뒤 다시 시도해 주세요.",
    "Update complete": "업데이트 완료",
    "Restart Hermes to apply.": "Hermes를 다시 시작하면 적용됩니다.",
    "Only a newer version can be installed as an update. Refresh the bot list.": "더 새로운 버전만 업데이트로 설치할 수 있습니다. 봇 목록을 새로 고쳐 주세요.",
    "This version cannot be updated in place. Reinstall the bot to get it.": "이 버전은 제자리 업데이트가 되지 않습니다. 봇을 다시 설치해 주세요.",
    "The installed bot changed after the review, so nothing was changed. Review the update again.": "확인한 뒤 설치된 봇이 바뀌어 아무것도 바꾸지 않았습니다. 업데이트를 다시 확인해 주세요.",
    "The update failed, and the previous version was restored.": "업데이트에 실패해 이전 버전으로 되돌렸습니다.",
    "The update failed and some files could not be restored. The previous files are in the profile’s .mybots-backup folder.": "업데이트에 실패했고 일부 파일을 되돌리지 못했습니다. 이전 파일은 프로필의 .mybots-backup 폴더에 있습니다.",
    "The review expired, so nothing was updated. Review the update again.": "확인 시간이 지나 아무것도 업데이트하지 않았습니다. 업데이트를 다시 확인해 주세요.",
    "This bot was not installed by MyBots, so it cannot be updated here.": "MyBots가 설치한 봇이 아니어서 여기서 업데이트할 수 없습니다.",
    "Could not update. Review the update again and retry.": "업데이트하지 못했습니다. 업데이트를 다시 확인한 뒤 시도해 주세요."
  },
  zh: {
    "Could not load installed bots. Please retry.": "无法加载已安装的机器人。请重试。",
    "Could not load the catalog. Installed bots are still available.": "无法加载目录。仍可打开已安装的机器人。",
    "This bot version is no longer published.": "此机器人版本尚未公开。",
    "Refresh to check installation status.": "请刷新以检查安装状态。",
    "Find your next AI colleague.": "寻找适合你的 AI 同事。",
    Refresh: "刷新",
    "MyBots menu": "MyBots 菜单",
    "Browse bots": "探索机器人",
    "Installed bots": "已安装的机器人",
    "My submissions": "我的提交",
    "Connection settings": "连接设置",
    "Showing the saved catalog while offline. Reconnect to install.": "离线时显示已保存的目录。请重新连接后安装。",
    "Last checked:": "上次检查：",
    "Search bots": "搜索机器人",
    "Search by name or role": "按名称或角色搜索",
    "Bot category": "机器人分类",
    "All categories": "所有分类",
    Business: "工作",
    Learning: "学习",
    "Daily life": "日常",
    "Loading colleagues": "正在加载同事",
    "{0} colleagues": "{0} 位同事",
    Soul: "灵魂",
    Skills: "技能",
    Plugins: "插件",
    Voice: "语音",
    Meet: "认识一下",
    "Motion preview": "动作预览",
    "No matching bots": "没有匹配的机器人",
    "Try another search or category.": "请尝试其他搜索或分类。",
    "No bots installed yet": "尚未安装机器人",
    "Find your first colleague in Browse bots.": "在探索机器人中寻找第一位同事。",
    "Check version": "请检查版本",
    Installed: "已安装",
    "Other version": "其他版本",
    "Check files": "请检查文件",
    "Open chat": "打开聊天",
    "Loading submissions": "正在加载提交",
    "Could not load connection settings. Check the server origin.": "无法加载连接设置。请检查服务器地址。",
    "Could not connect. Check key expiry, permissions and storage.": "无法连接。请检查密钥有效期、权限及存储。",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "浏览和安装无需密钥。提交机器人需要创作者 API 密钥。",
    Server: "服务器",
    Connection: "连接",
    Connected: "已连接",
    Disconnected: "未连接",
    "Environment · provider": "环境 · 提供方",
    Permissions: "权限",
    Expires: "到期",
    "Key provider": "密钥提供方",
    "bws item ID (recommended)": "bws 项目 ID（推荐）",
    "OS secure storage": "系统安全存储",
    "This session only": "仅此会话",
    "bws item ID": "bws 项目 ID",
    "MyBots API key": "MyBots API 密钥",
    "Session keys stay in backend memory and are cleared on restart.": "会话密钥仅保存在后端内存中，重启后清除。",
    "Secure OS storage is unavailable. Choose bws or session storage.": "系统安全存储不可用。请选择 bws 或会话存储。",
    Connect: "连接",
    Disconnect: "断开连接",
    "Refresh connection": "刷新连接",
    Draft: "草稿",
    Validated: "验证通过",
    Published: "已发布",
    Unpublished: "未公开",
    "Bot ID": "机器人 ID",
    Version: "版本",
    Name: "名称",
    "English name": "英文名称",
    Role: "角色",
    Personality: "性格",
    Description: "简介",
    "First prompt": "首个问题",
    "Could not load connection details.": "无法加载连接信息。",
    "Could not load submissions. Check your key connection.": "无法加载提交。请检查密钥连接。",
    "The screen or connection changed.": "页面或连接已更改。",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "无法保存或验证。请检查输入、密钥和服务器。重试相同内容或刷新以确认结果。",
    "Select MyBots package": "选择 MyBots 包",
    "ZIP ID or version differs. Create a new draft.": "ZIP 的 ID 或版本不同。请新建草稿。",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "保存机器人并验证其包。管理员将在 CMS 中审核发布。",
    "Connect a creator API key in Connection settings first.": "请先在连接设置中连接创作者 API 密钥。",
    "Submit a bot": "提交机器人",
    "Refresh submissions": "刷新提交",
    "No submissions yet": "尚无提交",
    "Start your first draft with a Soul and avatar.": "用灵魂和头像创建第一份草稿。",
    "Submission details": "提交信息",
    "New draft": "新建草稿",
    Category: "分类",
    "Save details": "保存信息",
    "Save draft": "保存草稿",
    "Soul and avatar": "灵魂与头像",
    "Select bot avatar": "选择机器人头像",
    "Choose avatar": "选择头像",
    "Avatar selected": "已选择头像",
    "PNG/JPEG · square, 128–2048px": "PNG/JPEG · 正方形，128–2048px",
    "Save Soul and avatar package": "保存灵魂与头像包",
    "Full package": "完整包",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "含技能、MCP、插件或语音的机器人请选择完整 ZIP。",
    "Choose package": "选择包",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "此 Hermes 版本不提供插件文件选择器。请通过 CMS 上传。",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "ZIP 信息与草稿不同。请先应用 ZIP 信息再上传。",
    "Apply ZIP details and upload": "应用 ZIP 信息并上传",
    Cancel: "取消",
    "Validate package": "验证包",
    "Validated · awaiting CMS review and publication.": "验证通过 · 等待 CMS 审核与发布。",
    "Published · available in the gallery.": "已发布 · 可在画廊查看。",
    "MCP · runs local Python": "MCP · 运行本地 Python",
    "Plugin · runs local Python": "插件 · 运行本地 Python",
    "Recommended GPT Live voice": "推荐 GPT Live 语音",
    "Could not review the installation. Check connection and publication status.": "无法确认安装配置。请检查连接及发布状态。",
    "Could not install. Review the configuration and retry.": "无法安装。请检查配置并重试。",
    "Meet {0}": "认识 {0}",
    "Soul and avatar required": "必须包含灵魂和头像",
    "Include these features": "同时安装的功能",
    "Start with a Soul and avatar.": "从灵魂和头像开始。",
    "Reviewing installation": "正在确认安装配置",
    "New profile:": "新配置档：",
    "Author:": "作者：",
    "Selected MCP and plugins execute Python on this device.": "所选 MCP 和插件将在此设备执行 Python 代码。",
    "Recommended voice:": "推荐语音：",
    "Configure voice authentication in Hermes.": "请在 Hermes 中配置语音认证。",
    "Soul and file verification": "灵魂及文件验证",
    "Install {0}": "安装 {0}",
    "Review again": "重新确认配置",
    "Already installed": "机器人已安装",
    "Installation complete": "安装完成",
    "Configure a model and authentication in Hermes.": "请在 Hermes 中配置模型及认证。",
    "Your profile is ready.": "配置档已就绪。",
    "First prompt:": "首个问题：",
    "Setup guide": "设置指南",
    "Open bot chat": "打开机器人聊天",
    "Please check": "请检查",
    "Install and submit from Local → default on this device.": "请从此设备的 Local → default 进行安装和提交。",
    "Could not open the local connection. Please retry.": "无法打开本地连接。请重试。",
    "Connect to this device’s default": "连接此设备的 default",
    Idle: "待机",
    Thinking: "思考中",
    "Recently working": "最近有任务",
    "Status unavailable": "状态不可用",
    "{0} avatar": "{0} 头像",
    "Confirm installation of {0}": "确认安装 {0}",
    "Not auditioned": "尚未试听",
    "Existing voice settings were preserved. Check the profile’s Voice settings.": "已保留原有语音设置。请检查配置档的语音设置。",
    "Recommended voice {0} included. Check voice authentication.": "已包含推荐语音 {0}。请检查语音认证。",
    "Voice settings were not included.": "未包含语音设置。",
    "Validation issue at {0}. Check the package format and required fields.": "{0} 验证问题。请检查包格式及必填项。",
    Avatar: "头像",
    "Revision {0}": "修订版 {0}",
    "{0} bytes": "{0} 字节",
    "A bot named {0} already exists. The existing bot was not changed.": "名为 {0} 的机器人已存在。现有机器人未被更改。",
    "The {0} profile has manual changes, so installation stopped. The existing bot was not changed.": "{0} 配置文件包含手动更改，因此已停止安装。现有机器人未被更改。",
    "The review expired, so nothing was installed. Review the configuration again.": "审核已过期，未进行安装。请重新检查配置。",
    "A profile named {0} already exists, so this bot cannot be installed. The existing bot will not be changed. Rename the existing profile and try again.": "名为 {0} 的配置文件已存在，因此无法安装此机器人。现有机器人不会被更改。请重命名现有配置文件后重试。",
    "Model: {0} (same as the default profile)": "模型：{0}（与默认配置文件相同）",
    "Model: the default profile has no model, so this stays empty. Choose a model first after installing.": "模型：默认配置文件没有模型，因此保持为空。安装后请先选择模型。",
    "Choose a model first. This bot has no model yet.": "请先选择模型。此机器人还没有模型。",
    "You can chat right away with the same model as the default profile ({0}).": "可以立即使用与默认配置文件相同的模型（{0}）聊天。",
    "Language packs: {0} (copied from the default profile)": "语言包：{0}（从默认配置文件复制）",
    "Keys this bot needs are stored only in bot profiles on this computer": "所需的密钥仅保存在这台电脑上的机器人配置文件中",
    "Could not save this key to the default profile; the bot profile has it": "无法将此密钥保存到默认配置文件；机器人配置文件中已保存",
    "The default profile key file could not be checked safely, so it was left unchanged; the bot profile has this key": "无法安全检查默认配置文件的密钥文件，因此未作更改；机器人配置文件中已保存此密钥",
    "Keys apply from the next new chat (or after restarting Hermes)": "密钥将从下一次新对话（或重启 Hermes 后）开始生效",
    "The bot profile key file could not be checked safely, so nothing was changed": "无法安全检查机器人配置文件的密钥文件，因此未做任何更改",
    "Service keys": "所需密钥",
    Required: "必填",
    Optional: "可选",
    "Get a key": "获取密钥",
    "Imported from the default profile ✓": "已从默认配置文件导入 ✓",
    "Save to the default profile so other bots can use it": "保存到默认配置文件，供其他机器人使用",
    "The default profile value stays as it is": "默认配置文件中的值保持不变",
    "Required keys left empty: {0}. You can add them after installing.": "有 {0} 个必填密钥为空。安装后可以再添加。",
    "Required keys still empty: {0}.": "仍有 {0} 个必填密钥为空。",
    Set: "已设置",
    Empty: "为空",
    Skipped: "已跳过",
    "Could not check": "无法检查",
    "Keys needed": "需要密钥",
    "Check keys": "检查密钥",
    "Taken from the default profile": "取自默认配置文件",
    "Also saved to the default profile": "也已保存到默认配置文件",
    "The default profile value was kept": "默认配置文件中的值已保留",
    "Add keys": "添加密钥",
    "Add keys for {0}": "为 {0} 添加密钥",
    "Save keys": "保存密钥",
    "Loading keys": "正在加载密钥",
    "Bot profile: {0}": "机器人配置文件：{0}",
    "The request was not accepted, so nothing was changed. Update MyBots and retry.": "请求未被接受，未做任何更改。请更新 MyBots 后重试。",
    "A key value is empty. Enter it or leave the key out. Nothing was changed.": "有密钥值为空。请填写或不填该密钥。未做任何更改。",
    "A key must be one line of at most 4,096 bytes without control characters. Nothing was changed.": "密钥必须是一行，不超过 4,096 字节且不含控制字符。未做任何更改。",
    "The keys did not match this bot. Review again; nothing was changed.": "密钥与此机器人不匹配。请重新检查；未做任何更改。",
    "The bot profile config could not be read safely, so nothing was changed.": "无法安全读取机器人配置文件的设置，因此未做任何更改。",
    "Could not save the keys to the bot profile. Retry.": "无法将密钥保存到机器人配置文件。请重试。",
    "This bot was not installed by MyBots with keys, so add keys in Hermes settings.": "此机器人不是由 MyBots 带密钥安装的，请在 Hermes 设置中添加密钥。",
    "The installed version changed. Refresh the bot list and retry.": "已安装的版本已变化。请刷新机器人列表后重试。",
    "This bot needs a newer MyBots helper. Update MyBots and retry.": "此机器人需要更新版本的 MyBots 安装助手。请更新 MyBots 后重试。",
    "Could not save the keys. Retry.": "无法保存密钥。请重试。",
    "This bot was already installed, so the keys you entered were not saved. Add them below with Add keys.": "此机器人已安装，因此未保存你输入的密钥。请在下方用“添加密钥”添加。",
    "Coming soon": "即将推出",
    "This bot is still being prepared. You can install it once it opens.": "这个机器人仍在准备中。公开后即可安装。",
    "This bot is not open yet.": "这个机器人尚未公开。",
    Update: "更新",
    "Update available": "可更新",
    "Update {0}": "更新{0}",
    "Reviewing update": "正在检查更新",
    "Version {0} → {1}": "版本 {0} → {1}",
    "{0} files will be replaced and {1} removed.": "将替换 {0} 个文件并删除 {1} 个。",
    "Updates files of the installed local profile; files you added are kept": "更新已安装的本地配置文件中的文件；你添加的文件会保留",
    "{0} files you changed will be backed up, then replaced by the new version.": "你修改过的 {0} 个文件会先备份，然后替换为新版本。",
    "Keys new in this version. You can skip them and add them later with Add keys.": "这些是此版本新增的密钥。可以跳过，之后用“添加密钥”填写。",
    "Wait until the chat in progress ends, then try again.": "请等待进行中的对话结束后再试。",
    "Update complete": "更新完成",
    "Restart Hermes to apply.": "重新启动 Hermes 后生效。",
    "Only a newer version can be installed as an update. Refresh the bot list.": "只能将更新的版本作为更新安装。请刷新机器人列表。",
    "This version cannot be updated in place. Reinstall the bot to get it.": "此版本无法原地更新。请重新安装该机器人。",
    "The installed bot changed after the review, so nothing was changed. Review the update again.": "检查后已安装的机器人发生了变化，因此未做任何更改。请重新检查更新。",
    "The update failed, and the previous version was restored.": "更新失败，已恢复到之前的版本。",
    "The update failed and some files could not be restored. The previous files are in the profile’s .mybots-backup folder.": "更新失败，部分文件未能恢复。之前的文件在配置文件的 .mybots-backup 文件夹中。",
    "The review expired, so nothing was updated. Review the update again.": "检查已过期，因此未更新任何内容。请重新检查更新。",
    "This bot was not installed by MyBots, so it cannot be updated here.": "此机器人不是由 MyBots 安装的，无法在此更新。",
    "Could not update. Review the update again and retry.": "无法更新。请重新检查更新后再试。"
  },
  "zh-hant": {
    "Could not load installed bots. Please retry.": "無法載入已安裝的機器人。請重試。",
    "Could not load the catalog. Installed bots are still available.": "無法載入目錄。仍可開啟已安裝的機器人。",
    "This bot version is no longer published.": "此機器人版本尚未公開。",
    "Refresh to check installation status.": "請重新整理以檢查安裝狀態。",
    "Find your next AI colleague.": "尋找適合你的 AI 同事。",
    Refresh: "重新整理",
    "MyBots menu": "MyBots 選單",
    "Browse bots": "探索機器人",
    "Installed bots": "已安裝的機器人",
    "My submissions": "我的提交",
    "Connection settings": "連線設定",
    "Showing the saved catalog while offline. Reconnect to install.": "離線時顯示已儲存的目錄。請重新連線後安裝。",
    "Last checked:": "上次檢查：",
    "Search bots": "搜尋機器人",
    "Search by name or role": "依名稱或角色搜尋",
    "Bot category": "機器人分類",
    "All categories": "所有分類",
    Business: "工作",
    Learning: "學習",
    "Daily life": "日常",
    "Loading colleagues": "正在載入同事",
    "{0} colleagues": "{0} 位同事",
    Soul: "靈魂",
    Skills: "技能",
    Plugins: "外掛",
    Voice: "語音",
    Meet: "認識一下",
    "Motion preview": "動作預覽",
    "No matching bots": "沒有符合的機器人",
    "Try another search or category.": "請嘗試其他搜尋或分類。",
    "No bots installed yet": "尚未安裝機器人",
    "Find your first colleague in Browse bots.": "在探索機器人中尋找第一位同事。",
    "Check version": "請檢查版本",
    Installed: "已安裝",
    "Other version": "其他版本",
    "Check files": "請檢查檔案",
    "Open chat": "開啟聊天",
    "Loading submissions": "正在載入提交",
    "Could not load connection settings. Check the server origin.": "無法載入連線設定。請檢查伺服器位址。",
    "Could not connect. Check key expiry, permissions and storage.": "無法連線。請檢查金鑰有效期、權限及儲存。",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "瀏覽和安裝無需金鑰。提交機器人需要創作者 API 金鑰。",
    Server: "伺服器",
    Connection: "連線",
    Connected: "已連線",
    Disconnected: "未連線",
    "Environment · provider": "環境 · 供應者",
    Permissions: "權限",
    Expires: "到期",
    "Key provider": "金鑰供應者",
    "bws item ID (recommended)": "bws 項目 ID（建議）",
    "OS secure storage": "系統安全儲存",
    "This session only": "僅此工作階段",
    "bws item ID": "bws 項目 ID",
    "MyBots API key": "MyBots API 金鑰",
    "Session keys stay in backend memory and are cleared on restart.": "工作階段金鑰僅保存在後端記憶體中，重新啟動後清除。",
    "Secure OS storage is unavailable. Choose bws or session storage.": "系統安全儲存無法使用。請選擇 bws 或工作階段儲存。",
    Connect: "連線",
    Disconnect: "中斷連線",
    "Refresh connection": "重新整理連線",
    Draft: "草稿",
    Validated: "驗證通過",
    Published: "已發佈",
    Unpublished: "未公開",
    "Bot ID": "機器人 ID",
    Version: "版本",
    Name: "名稱",
    "English name": "英文名稱",
    Role: "角色",
    Personality: "個性",
    Description: "簡介",
    "First prompt": "第一個問題",
    "Could not load connection details.": "無法載入連線資訊。",
    "Could not load submissions. Check your key connection.": "無法載入提交。請檢查金鑰連線。",
    "The screen or connection changed.": "畫面或連線已變更。",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "無法儲存或驗證。請檢查輸入、金鑰和伺服器。重試相同內容或重新整理以確認結果。",
    "Select MyBots package": "選擇 MyBots 套件",
    "ZIP ID or version differs. Create a new draft.": "ZIP 的 ID 或版本不同。請新增草稿。",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "儲存機器人並驗證其套件。管理員將在 CMS 中審核發佈。",
    "Connect a creator API key in Connection settings first.": "請先在連線設定中連接創作者 API 金鑰。",
    "Submit a bot": "提交機器人",
    "Refresh submissions": "重新整理提交",
    "No submissions yet": "尚無提交",
    "Start your first draft with a Soul and avatar.": "用靈魂和頭像建立第一份草稿。",
    "Submission details": "提交資訊",
    "New draft": "新增草稿",
    Category: "分類",
    "Save details": "儲存資訊",
    "Save draft": "儲存草稿",
    "Soul and avatar": "靈魂與頭像",
    "Select bot avatar": "選擇機器人頭像",
    "Choose avatar": "選擇頭像",
    "Avatar selected": "已選擇頭像",
    "PNG/JPEG · square, 128–2048px": "PNG/JPEG · 正方形，128–2048px",
    "Save Soul and avatar package": "儲存靈魂與頭像套件",
    "Full package": "完整套件",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "含技能、MCP、外掛或語音的機器人請選擇完整 ZIP。",
    "Choose package": "選擇套件",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "此 Hermes 版本不提供外掛檔案選擇器。請透過 CMS 上傳。",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "ZIP 資訊與草稿不同。請先套用 ZIP 資訊再上傳。",
    "Apply ZIP details and upload": "套用 ZIP 資訊並上傳",
    Cancel: "取消",
    "Validate package": "驗證套件",
    "Validated · awaiting CMS review and publication.": "驗證通過 · 等待 CMS 審核與發佈。",
    "Published · available in the gallery.": "已發佈 · 可在圖庫查看。",
    "MCP · runs local Python": "MCP · 執行本機 Python",
    "Plugin · runs local Python": "外掛 · 執行本機 Python",
    "Recommended GPT Live voice": "推薦 GPT Live 語音",
    "Could not review the installation. Check connection and publication status.": "無法確認安裝設定。請檢查連線及發佈狀態。",
    "Could not install. Review the configuration and retry.": "無法安裝。請檢查設定並重試。",
    "Meet {0}": "認識 {0}",
    "Soul and avatar required": "必須包含靈魂和頭像",
    "Include these features": "同時安裝的功能",
    "Start with a Soul and avatar.": "從靈魂和頭像開始。",
    "Reviewing installation": "正在確認安裝設定",
    "New profile:": "新設定檔：",
    "Author:": "作者：",
    "Selected MCP and plugins execute Python on this device.": "所選 MCP 和外掛將在此裝置執行 Python 程式碼。",
    "Recommended voice:": "推薦語音：",
    "Configure voice authentication in Hermes.": "請在 Hermes 中設定語音驗證。",
    "Soul and file verification": "靈魂及檔案驗證",
    "Install {0}": "安裝 {0}",
    "Review again": "重新確認設定",
    "Already installed": "機器人已安裝",
    "Installation complete": "安裝完成",
    "Configure a model and authentication in Hermes.": "請在 Hermes 中設定模型及驗證。",
    "Your profile is ready.": "設定檔已準備就緒。",
    "First prompt:": "第一個問題：",
    "Setup guide": "設定指南",
    "Open bot chat": "開啟機器人聊天",
    "Please check": "請檢查",
    "Install and submit from Local → default on this device.": "請從此裝置的 Local → default 進行安裝和提交。",
    "Could not open the local connection. Please retry.": "無法開啟本機連線。請重試。",
    "Connect to this device’s default": "連線此裝置的 default",
    Idle: "待命",
    Thinking: "思考中",
    "Recently working": "最近有工作",
    "Status unavailable": "狀態無法取得",
    "{0} avatar": "{0} 頭像",
    "Confirm installation of {0}": "確認安裝 {0}",
    "Not auditioned": "尚未試聽",
    "Existing voice settings were preserved. Check the profile’s Voice settings.": "已保留原有語音設定。請檢查設定檔的語音設定。",
    "Recommended voice {0} included. Check voice authentication.": "已包含推薦語音 {0}。請檢查語音驗證。",
    "Voice settings were not included.": "未包含語音設定。",
    "Validation issue at {0}. Check the package format and required fields.": "{0} 驗證問題。請檢查套件格式及必填項。",
    Avatar: "頭像",
    "Revision {0}": "修訂版 {0}",
    "{0} bytes": "{0} 位元組",
    "A bot named {0} already exists. The existing bot was not changed.": "名為 {0} 的機器人已存在。現有機器人未被變更。",
    "The {0} profile has manual changes, so installation stopped. The existing bot was not changed.": "{0} 設定檔含有手動變更，因此已停止安裝。現有機器人未被變更。",
    "The review expired, so nothing was installed. Review the configuration again.": "審核已過期，未進行安裝。請重新檢查設定。",
    "A profile named {0} already exists, so this bot cannot be installed. The existing bot will not be changed. Rename the existing profile and try again.": "名為 {0} 的設定檔已存在，因此無法安裝此機器人。現有機器人不會被變更。請重新命名現有設定檔後再試一次。",
    "Model: {0} (same as the default profile)": "模型：{0}（與預設設定檔相同）",
    "Model: the default profile has no model, so this stays empty. Choose a model first after installing.": "模型：預設設定檔沒有模型，因此保持空白。安裝後請先選擇模型。",
    "Choose a model first. This bot has no model yet.": "請先選擇模型。此機器人還沒有模型。",
    "You can chat right away with the same model as the default profile ({0}).": "可以立即使用與預設設定檔相同的模型（{0}）聊天。",
    "Language packs: {0} (copied from the default profile)": "語言包：{0}（從預設設定檔複製）",
    "Keys this bot needs are stored only in bot profiles on this computer": "所需的金鑰僅儲存在這台電腦上的機器人設定檔中",
    "Could not save this key to the default profile; the bot profile has it": "無法將此金鑰儲存到預設設定檔；機器人設定檔中已儲存",
    "The default profile key file could not be checked safely, so it was left unchanged; the bot profile has this key": "無法安全檢查預設設定檔的金鑰檔案，因此未作變更；機器人設定檔中已儲存此金鑰",
    "Keys apply from the next new chat (or after restarting Hermes)": "金鑰將從下一次新對話（或重新啟動 Hermes 後）開始生效",
    "The bot profile key file could not be checked safely, so nothing was changed": "無法安全檢查機器人設定檔的金鑰檔案，因此未做任何變更",
    "Service keys": "所需金鑰",
    Required: "必填",
    Optional: "選填",
    "Get a key": "取得金鑰",
    "Imported from the default profile ✓": "已從預設設定檔匯入 ✓",
    "Save to the default profile so other bots can use it": "儲存到預設設定檔，供其他機器人使用",
    "The default profile value stays as it is": "預設設定檔中的值保持不變",
    "Required keys left empty: {0}. You can add them after installing.": "有 {0} 個必填金鑰為空。安裝後可以再新增。",
    "Required keys still empty: {0}.": "仍有 {0} 個必填金鑰為空。",
    Set: "已設定",
    Empty: "為空",
    Skipped: "已略過",
    "Could not check": "無法檢查",
    "Keys needed": "需要金鑰",
    "Check keys": "檢查金鑰",
    "Taken from the default profile": "取自預設設定檔",
    "Also saved to the default profile": "也已儲存到預設設定檔",
    "The default profile value was kept": "預設設定檔中的值已保留",
    "Add keys": "新增金鑰",
    "Add keys for {0}": "為 {0} 新增金鑰",
    "Save keys": "儲存金鑰",
    "Loading keys": "正在載入金鑰",
    "Bot profile: {0}": "機器人設定檔：{0}",
    "The request was not accepted, so nothing was changed. Update MyBots and retry.": "請求未被接受，未做任何變更。請更新 MyBots 後重試。",
    "A key value is empty. Enter it or leave the key out. Nothing was changed.": "有金鑰值為空。請填寫或不填該金鑰。未做任何變更。",
    "A key must be one line of at most 4,096 bytes without control characters. Nothing was changed.": "金鑰必須是一行，不超過 4,096 位元組且不含控制字元。未做任何變更。",
    "The keys did not match this bot. Review again; nothing was changed.": "金鑰與此機器人不相符。請重新檢查；未做任何變更。",
    "The bot profile config could not be read safely, so nothing was changed.": "無法安全讀取機器人設定檔的設定，因此未做任何變更。",
    "Could not save the keys to the bot profile. Retry.": "無法將金鑰儲存到機器人設定檔。請重試。",
    "This bot was not installed by MyBots with keys, so add keys in Hermes settings.": "此機器人不是由 MyBots 帶金鑰安裝的，請在 Hermes 設定中新增金鑰。",
    "The installed version changed. Refresh the bot list and retry.": "已安裝的版本已變更。請重新整理機器人清單後重試。",
    "This bot needs a newer MyBots helper. Update MyBots and retry.": "此機器人需要較新版本的 MyBots 安裝助手。請更新 MyBots 後重試。",
    "Could not save the keys. Retry.": "無法儲存金鑰。請重試。",
    "This bot was already installed, so the keys you entered were not saved. Add them below with Add keys.": "此機器人已安裝，因此未儲存你輸入的金鑰。請在下方用「新增金鑰」新增。",
    "Coming soon": "即將推出",
    "This bot is still being prepared. You can install it once it opens.": "這個機器人仍在準備中。公開後即可安裝。",
    "This bot is not open yet.": "這個機器人尚未公開。",
    Update: "更新",
    "Update available": "可更新",
    "Update {0}": "更新{0}",
    "Reviewing update": "正在檢查更新",
    "Version {0} → {1}": "版本 {0} → {1}",
    "{0} files will be replaced and {1} removed.": "將取代 {0} 個檔案並刪除 {1} 個。",
    "Updates files of the installed local profile; files you added are kept": "更新已安裝的本機設定檔中的檔案；你新增的檔案會保留",
    "{0} files you changed will be backed up, then replaced by the new version.": "你修改過的 {0} 個檔案會先備份，然後取代為新版本。",
    "Keys new in this version. You can skip them and add them later with Add keys.": "這些是此版本新增的金鑰。可以略過，之後用「新增金鑰」填寫。",
    "Wait until the chat in progress ends, then try again.": "請等待進行中的對話結束後再試。",
    "Update complete": "更新完成",
    "Restart Hermes to apply.": "重新啟動 Hermes 後生效。",
    "Only a newer version can be installed as an update. Refresh the bot list.": "只能將較新的版本作為更新安裝。請重新整理機器人清單。",
    "This version cannot be updated in place. Reinstall the bot to get it.": "此版本無法就地更新。請重新安裝該機器人。",
    "The installed bot changed after the review, so nothing was changed. Review the update again.": "檢查後已安裝的機器人發生變化，因此未做任何變更。請重新檢查更新。",
    "The update failed, and the previous version was restored.": "更新失敗，已還原至先前的版本。",
    "The update failed and some files could not be restored. The previous files are in the profile’s .mybots-backup folder.": "更新失敗，部分檔案未能還原。先前的檔案在設定檔的 .mybots-backup 資料夾中。",
    "The review expired, so nothing was updated. Review the update again.": "檢查已逾時，因此未更新任何內容。請重新檢查更新。",
    "This bot was not installed by MyBots, so it cannot be updated here.": "此機器人不是由 MyBots 安裝的，無法在此更新。",
    "Could not update. Review the update again and retry.": "無法更新。請重新檢查更新後再試。"
  },
  ja: {
    "Could not load installed bots. Please retry.": "インストール済みボットを読み込めません。再試行してください。",
    "Could not load the catalog. Installed bots are still available.": "カタログを読み込めません。インストール済みのボットは開けます。",
    "This bot version is no longer published.": "このボットのバージョンは公開されていません。",
    "Refresh to check installation status.": "更新してインストール状況を確認してください。",
    "Find your next AI colleague.": "あなたに合う AI の仲間を見つけましょう。",
    Refresh: "更新",
    "MyBots menu": "MyBots メニュー",
    "Browse bots": "ボットを探す",
    "Installed bots": "インストール済み",
    "My submissions": "自分の登録",
    "Connection settings": "接続設定",
    "Showing the saved catalog while offline. Reconnect to install.": "オフラインのため保存済みの一覧を表示しています。インストールには再接続が必要です。",
    "Last checked:": "最終確認：",
    "Search bots": "ボットを検索",
    "Search by name or role": "名前や役割で検索",
    "Bot category": "ボットの分類",
    "All categories": "すべての分類",
    Business: "仕事",
    Learning: "学習",
    "Daily life": "日常",
    "Loading colleagues": "仲間を読み込み中",
    "{0} colleagues": "{0} 人の仲間",
    Soul: "ソウル",
    Skills: "スキル",
    Plugins: "プラグイン",
    Voice: "音声",
    Meet: "詳しく見る",
    "Motion preview": "モーションのプレビュー",
    "No matching bots": "該当するボットがありません",
    "Try another search or category.": "検索語や分類を変えてみてください。",
    "No bots installed yet": "まだボットがありません",
    "Find your first colleague in Browse bots.": "「ボットを探す」で最初の仲間を見つけましょう。",
    "Check version": "バージョンを確認",
    Installed: "インストール済み",
    "Other version": "別のバージョン",
    "Check files": "ファイルを確認",
    "Open chat": "チャットを開く",
    "Loading submissions": "登録を読み込み中",
    "Could not load connection settings. Check the server origin.": "接続設定を読み込めません。サーバーのアドレスを確認してください。",
    "Could not connect. Check key expiry, permissions and storage.": "接続できません。キーの有効期限、権限、保存先を確認してください。",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "閲覧とインストールにキーは不要です。登録には制作者の API キーが必要です。",
    Server: "サーバー",
    Connection: "接続",
    Connected: "接続済み",
    Disconnected: "未接続",
    "Environment · provider": "環境 · プロバイダー",
    Permissions: "権限",
    Expires: "有効期限",
    "Key provider": "キーの保存先",
    "bws item ID (recommended)": "bws 項目 ID（推奨）",
    "OS secure storage": "OS の安全なストレージ",
    "This session only": "このセッションのみ",
    "bws item ID": "bws 項目 ID",
    "MyBots API key": "MyBots API キー",
    "Session keys stay in backend memory and are cleared on restart.": "セッションのキーはバックエンドのメモリだけに保存され、再起動で消去されます。",
    "Secure OS storage is unavailable. Choose bws or session storage.": "OS の安全なストレージが使えません。bws またはセッションを選んでください。",
    Connect: "接続する",
    Disconnect: "切断する",
    "Refresh connection": "接続を更新",
    Draft: "下書き",
    Validated: "検証済み",
    Published: "公開済み",
    Unpublished: "非公開",
    "Bot ID": "ボット ID",
    Version: "バージョン",
    Name: "名前",
    "English name": "英語名",
    Role: "役割",
    Personality: "性格",
    Description: "紹介",
    "First prompt": "最初の質問",
    "Could not load connection details.": "接続情報を読み込めません。",
    "Could not load submissions. Check your key connection.": "登録を読み込めません。キーの接続を確認してください。",
    "The screen or connection changed.": "画面または接続が変わりました。",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "保存または検証できません。入力、キー、サーバーを確認し、同じ内容で再試行するか一覧を更新してください。",
    "Select MyBots package": "MyBots パッケージを選択",
    "ZIP ID or version differs. Create a new draft.": "ZIP の ID またはバージョンが違います。新しい下書きを作成してください。",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "ボットを保存しパッケージを検証します。公開は運営者が CMS で確認します。",
    "Connect a creator API key in Connection settings first.": "先に接続設定で制作者の API キーを接続してください。",
    "Submit a bot": "ボットを登録",
    "Refresh submissions": "登録一覧を更新",
    "No submissions yet": "まだ登録がありません",
    "Start your first draft with a Soul and avatar.": "ソウルとアバターで最初の下書きを作りましょう。",
    "Submission details": "登録情報",
    "New draft": "新しい下書き",
    Category: "分類",
    "Save details": "情報を保存",
    "Save draft": "下書きを保存",
    "Soul and avatar": "ソウルとアバター",
    "Select bot avatar": "ボットのアバターを選択",
    "Choose avatar": "アバターを選択",
    "Avatar selected": "アバター選択済み",
    "PNG/JPEG · square, 128–2048px": "PNG/JPEG · 正方形 128–2048px",
    "Save Soul and avatar package": "ソウルとアバターのパッケージを保存",
    "Full package": "完全なパッケージ",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "スキル、MCP、プラグイン、音声を含む場合は完全な ZIP を選んでください。",
    "Choose package": "パッケージを選択",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "この Hermes にはファイル選択機能がありません。CMS からアップロードしてください。",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "ZIP の情報が下書きと異なります。適用してからアップロードしてください。",
    "Apply ZIP details and upload": "ZIP 情報を適用してアップロード",
    Cancel: "キャンセル",
    "Validate package": "パッケージを検証",
    "Validated · awaiting CMS review and publication.": "検証済み · CMS の確認と公開を待っています。",
    "Published · available in the gallery.": "公開済み · ギャラリーで確認できます。",
    "MCP · runs local Python": "MCP · ローカル Python 実行",
    "Plugin · runs local Python": "プラグイン · ローカル Python 実行",
    "Recommended GPT Live voice": "推奨 GPT Live 音声",
    "Could not review the installation. Check connection and publication status.": "インストール内容を確認できません。接続と公開状況を確認してください。",
    "Could not install. Review the configuration and retry.": "インストールできません。構成を確認して再試行してください。",
    "Meet {0}": "{0} に会う",
    "Soul and avatar required": "ソウルとアバターは必須",
    "Include these features": "一緒にインストールする機能",
    "Start with a Soul and avatar.": "ソウルとアバターで始めましょう。",
    "Reviewing installation": "インストール内容を確認中",
    "New profile:": "新しいプロファイル：",
    "Author:": "作成者：",
    "Selected MCP and plugins execute Python on this device.": "選択した MCP とプラグインはこの端末で Python コードを実行します。",
    "Recommended voice:": "推奨音声：",
    "Configure voice authentication in Hermes.": "音声の認証は Hermes で設定してください。",
    "Soul and file verification": "ソウルとファイルの検証情報",
    "Install {0}": "{0} をインストール",
    "Review again": "もう一度確認",
    "Already installed": "インストール済みです",
    "Installation complete": "インストール完了",
    "Configure a model and authentication in Hermes.": "モデルと認証を Hermes で設定してください。",
    "Your profile is ready.": "プロファイルの準備ができました。",
    "First prompt:": "最初の質問：",
    "Setup guide": "設定ガイド",
    "Open bot chat": "ボットのチャットを開く",
    "Please check": "確認してください",
    "Install and submit from Local → default on this device.": "この端末の Local → default からインストールと登録を行います。",
    "Could not open the local connection. Please retry.": "ローカル接続を開けません。再試行してください。",
    "Connect to this device’s default": "この端末の default に接続",
    Idle: "待機中",
    Thinking: "考え中",
    "Recently working": "最近の作業中",
    "Status unavailable": "状態を確認できません",
    "{0} avatar": "{0} のアバター",
    "Confirm installation of {0}": "{0} のインストールを確認",
    "Not auditioned": "試聴未確認",
    "Existing voice settings were preserved. Check the profile’s Voice settings.": "既存の音声設定を保持しました。プロファイルの Voice 設定を確認してください。",
    "Recommended voice {0} included. Check voice authentication.": "推奨音声 {0} を含みます。音声認証を確認してください。",
    "Voice settings were not included.": "音声設定は含まれていません。",
    "Validation issue at {0}. Check the package format and required fields.": "{0} の検証に問題があります。形式と必須項目を確認してください。",
    Avatar: "アバター",
    "Revision {0}": "リビジョン {0}",
    "{0} bytes": "{0} バイト",
    "A bot named {0} already exists. The existing bot was not changed.": "{0} という名前のボットがすでにあります。既存のボットは変更していません。",
    "The {0} profile has manual changes, so installation stopped. The existing bot was not changed.": "{0} プロファイルに手動の変更があるため、インストールを中止しました。既存のボットは変更していません。",
    "The review expired, so nothing was installed. Review the configuration again.": "確認の有効期限が切れたため、インストールしませんでした。構成をもう一度確認してください。",
    "A profile named {0} already exists, so this bot cannot be installed. The existing bot will not be changed. Rename the existing profile and try again.": "{0} という名前のプロファイルがすでにあるため、このボットはインストールできません。既存のボットは変更されません。既存のプロファイル名を変更してから、もう一度お試しください。",
    "Model: {0} (same as the default profile)": "モデル：{0}（デフォルトプロファイルと同じ）",
    "Model: the default profile has no model, so this stays empty. Choose a model first after installing.": "モデル：デフォルトプロファイルにモデルがないため、空のままにします。インストール後、まずモデルを選んでください。",
    "Choose a model first. This bot has no model yet.": "まずモデルを選んでください。このボットにはまだモデルがありません。",
    "You can chat right away with the same model as the default profile ({0}).": "デフォルトプロファイルと同じモデル（{0}）ですぐに会話できます。",
    "Language packs: {0} (copied from the default profile)": "言語パック：{0}（デフォルトプロファイルからコピー）",
    "Keys this bot needs are stored only in bot profiles on this computer": "必要なキーはこのコンピューターのボットプロフィールにのみ保存されます",
    "Could not save this key to the default profile; the bot profile has it": "このキーをデフォルトプロフィールに保存できませんでした。ボットプロフィールには保存されています",
    "The default profile key file could not be checked safely, so it was left unchanged; the bot profile has this key": "デフォルトプロフィールのキーファイルを安全に確認できなかったため、変更していません。ボットプロフィールにはこのキーが保存されています",
    "Keys apply from the next new chat (or after restarting Hermes)": "キーは次の新しい会話（または Hermes の再起動後）から適用されます",
    "The bot profile key file could not be checked safely, so nothing was changed": "ボットプロファイルのキーファイルを安全に確認できなかったため、何も変更していません",
    "Service keys": "必要なキー",
    Required: "必須",
    Optional: "任意",
    "Get a key": "キーを取得",
    "Imported from the default profile ✓": "デフォルトプロフィールから取り込み済み ✓",
    "Save to the default profile so other bots can use it": "他のボットでも使えるようデフォルトプロフィールに保存",
    "The default profile value stays as it is": "デフォルトプロフィールの値はそのままにします",
    "Required keys left empty: {0}. You can add them after installing.": "必須キーが {0} 個空です。インストール後に追加できます。",
    "Required keys still empty: {0}.": "必須キーがまだ {0} 個空です。",
    Set: "設定済み",
    Empty: "空",
    Skipped: "スキップ",
    "Could not check": "確認できません",
    "Keys needed": "キーが必要",
    "Check keys": "キーを確認",
    "Taken from the default profile": "デフォルトプロフィールから取得",
    "Also saved to the default profile": "デフォルトプロフィールにも保存しました",
    "The default profile value was kept": "デフォルトプロフィールの値はそのままにしました",
    "Add keys": "キーを追加",
    "Add keys for {0}": "{0} のキーを追加",
    "Save keys": "キーを保存",
    "Loading keys": "キーを読み込み中",
    "Bot profile: {0}": "ボットプロフィール: {0}",
    "The request was not accepted, so nothing was changed. Update MyBots and retry.": "リクエストが受け付けられなかったため、何も変更していません。MyBots を更新してから再試行してください。",
    "A key value is empty. Enter it or leave the key out. Nothing was changed.": "空のキー値があります。値を入力するか、そのキーを空欄のままにしてください。何も変更していません。",
    "A key must be one line of at most 4,096 bytes without control characters. Nothing was changed.": "キーは制御文字を含まない 4,096 バイト以下の 1 行である必要があります。何も変更していません。",
    "The keys did not match this bot. Review again; nothing was changed.": "キーがこのボットと一致しません。もう一度確認してください。何も変更していません。",
    "The bot profile config could not be read safely, so nothing was changed.": "ボットプロフィールの設定を安全に読み込めなかったため、何も変更していません。",
    "Could not save the keys to the bot profile. Retry.": "ボットプロフィールにキーを保存できませんでした。再試行してください。",
    "This bot was not installed by MyBots with keys, so add keys in Hermes settings.": "このボットは MyBots がキー付きでインストールしたものではありません。Hermes の設定でキーを追加してください。",
    "The installed version changed. Refresh the bot list and retry.": "インストール済みのバージョンが変わりました。ボット一覧を更新してから再試行してください。",
    "This bot needs a newer MyBots helper. Update MyBots and retry.": "このボットには新しい MyBots インストールヘルパーが必要です。MyBots を更新してから再試行してください。",
    "Could not save the keys. Retry.": "キーを保存できませんでした。再試行してください。",
    "This bot was already installed, so the keys you entered were not saved. Add them below with Add keys.": "このボットはすでにインストール済みのため、入力したキーは保存していません。下の「キーを追加」から追加してください。",
    "Coming soon": "準備中",
    "This bot is still being prepared. You can install it once it opens.": "このボットはまだ準備中です。公開されるとインストールできます。",
    "This bot is not open yet.": "このボットはまだ公開されていません。",
    Update: "アップデート",
    "Update available": "アップデートあり",
    "Update {0}": "{0}をアップデート",
    "Reviewing update": "アップデート内容を確認しています",
    "Version {0} → {1}": "バージョン {0} → {1}",
    "{0} files will be replaced and {1} removed.": "{0} 個のファイルを置き換え、{1} 個を削除します。",
    "Updates files of the installed local profile; files you added are kept": "インストール済みのローカルプロファイルのファイルを更新します。追加したファイルはそのまま残ります",
    "{0} files you changed will be backed up, then replaced by the new version.": "変更した {0} 個のファイルはバックアップしてから新しいバージョンに置き換えます。",
    "Keys new in this version. You can skip them and add them later with Add keys.": "このバージョンで新しく必要なキーです。スキップして、後で「キーを追加」から入力できます。",
    "Wait until the chat in progress ends, then try again.": "進行中の会話が終わってからもう一度お試しください。",
    "Update complete": "アップデート完了",
    "Restart Hermes to apply.": "Hermes を再起動すると反映されます。",
    "Only a newer version can be installed as an update. Refresh the bot list.": "アップデートとしてインストールできるのは新しいバージョンだけです。ボット一覧を更新してください。",
    "This version cannot be updated in place. Reinstall the bot to get it.": "このバージョンはその場でアップデートできません。ボットを再インストールしてください。",
    "The installed bot changed after the review, so nothing was changed. Review the update again.": "確認後にインストール済みのボットが変わったため、何も変更していません。アップデートをもう一度確認してください。",
    "The update failed, and the previous version was restored.": "アップデートに失敗したため、以前のバージョンに戻しました。",
    "The update failed and some files could not be restored. The previous files are in the profile’s .mybots-backup folder.": "アップデートに失敗し、一部のファイルを元に戻せませんでした。以前のファイルはプロファイルの .mybots-backup フォルダーにあります。",
    "The review expired, so nothing was updated. Review the update again.": "確認の有効期限が切れたため、何もアップデートしていません。アップデートをもう一度確認してください。",
    "This bot was not installed by MyBots, so it cannot be updated here.": "MyBots でインストールしたボットではないため、ここではアップデートできません。",
    "Could not update. Review the update again and retry.": "アップデートできませんでした。アップデートをもう一度確認してからお試しください。"
  },
  ar: {
    "Could not load installed bots. Please retry.": "تعذر تحميل البوتات المثبتة. حاول مجددًا.",
    "Could not load the catalog. Installed bots are still available.": "تعذر تحميل الكتالوج. لا تزال البوتات المثبتة متاحة.",
    "This bot version is no longer published.": "هذا الإصدار من البوت غير منشور.",
    "Refresh to check installation status.": "حدّث للتحقق من حالة التثبيت.",
    "Find your next AI colleague.": "اعثر على زميلك القادم من الذكاء الاصطناعي.",
    Refresh: "تحديث",
    "MyBots menu": "قائمة MyBots",
    "Browse bots": "استكشاف البوتات",
    "Installed bots": "البوتات المثبتة",
    "My submissions": "مساهماتي",
    "Connection settings": "إعدادات الاتصال",
    "Showing the saved catalog while offline. Reconnect to install.": "يُعرض الكتالوج المحفوظ دون اتصال. أعد الاتصال للتثبيت.",
    "Last checked:": "آخر تحقق:",
    "Search bots": "البحث عن بوت",
    "Search by name or role": "ابحث بالاسم أو الدور",
    "Bot category": "فئة البوت",
    "All categories": "جميع الفئات",
    Business: "العمل",
    Learning: "التعلم",
    "Daily life": "الحياة اليومية",
    "Loading colleagues": "جارٍ تحميل الزملاء",
    "{0} colleagues": "{0} من الزملاء",
    Soul: "الشخصية",
    Skills: "المهارات",
    Plugins: "الإضافات",
    Voice: "الصوت",
    Meet: "تعرّف عليه",
    "Motion preview": "معاينة الحركة",
    "No matching bots": "لا توجد بوتات مطابقة",
    "Try another search or category.": "جرّب بحثًا أو فئة أخرى.",
    "No bots installed yet": "لا توجد بوتات مثبتة بعد",
    "Find your first colleague in Browse bots.": "اعثر على زميلك الأول في استكشاف البوتات.",
    "Check version": "تحقق من الإصدار",
    Installed: "مثبت",
    "Other version": "إصدار آخر",
    "Check files": "تحقق من الملفات",
    "Open chat": "فتح المحادثة",
    "Loading submissions": "جارٍ تحميل المساهمات",
    "Could not load connection settings. Check the server origin.": "تعذر تحميل إعدادات الاتصال. تحقق من عنوان الخادم.",
    "Could not connect. Check key expiry, permissions and storage.": "تعذر الاتصال. تحقق من صلاحية المفتاح وأذوناته ومكان تخزينه.",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "التصفح والتثبيت لا يحتاجان مفتاحًا. إرسال البوتات يتطلب مفتاح API للمنشئ.",
    Server: "الخادم",
    Connection: "الاتصال",
    Connected: "متصل",
    Disconnected: "غير متصل",
    "Environment · provider": "البيئة · المزود",
    Permissions: "الأذونات",
    Expires: "انتهاء الصلاحية",
    "Key provider": "مزود المفتاح",
    "bws item ID (recommended)": "معرّف عنصر bws (موصى به)",
    "OS secure storage": "التخزين الآمن للنظام",
    "This session only": "هذه الجلسة فقط",
    "bws item ID": "معرّف عنصر bws",
    "MyBots API key": "مفتاح API لـ MyBots",
    "Session keys stay in backend memory and are cleared on restart.": "تُحفظ مفاتيح الجلسة في ذاكرة الخلفية وتُمسح عند إعادة التشغيل.",
    "Secure OS storage is unavailable. Choose bws or session storage.": "التخزين الآمن غير متاح. اختر bws أو تخزين الجلسة.",
    Connect: "اتصال",
    Disconnect: "قطع الاتصال",
    "Refresh connection": "تحديث الاتصال",
    Draft: "مسودة",
    Validated: "تم التحقق",
    Published: "منشور",
    Unpublished: "غير منشور",
    "Bot ID": "معرّف البوت",
    Version: "الإصدار",
    Name: "الاسم",
    "English name": "الاسم بالإنجليزية",
    Role: "الدور",
    Personality: "الطبع",
    Description: "الوصف",
    "First prompt": "السؤال الأول",
    "Could not load connection details.": "تعذر تحميل تفاصيل الاتصال.",
    "Could not load submissions. Check your key connection.": "تعذر تحميل المساهمات. تحقق من اتصال المفتاح.",
    "The screen or connection changed.": "تغيرت الشاشة أو الاتصال.",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "تعذر الحفظ أو التحقق. راجع البيانات والمفتاح والخادم. أعد المحاولة بالمحتوى نفسه أو حدّث للتأكد.",
    "Select MyBots package": "اختر حزمة MyBots",
    "ZIP ID or version differs. Create a new draft.": "معرّف ZIP أو إصداره مختلف. أنشئ مسودة جديدة.",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "احفظ البوت وتحقق من حزمته. يراجع المسؤول النشر في CMS.",
    "Connect a creator API key in Connection settings first.": "اربط مفتاح API للمنشئ في إعدادات الاتصال أولًا.",
    "Submit a bot": "إرسال بوت",
    "Refresh submissions": "تحديث المساهمات",
    "No submissions yet": "لا توجد مساهمات بعد",
    "Start your first draft with a Soul and avatar.": "ابدأ مسودتك الأولى بشخصية وصورة.",
    "Submission details": "تفاصيل المساهمة",
    "New draft": "مسودة جديدة",
    Category: "الفئة",
    "Save details": "حفظ التفاصيل",
    "Save draft": "حفظ المسودة",
    "Soul and avatar": "الشخصية والصورة",
    "Select bot avatar": "اختر صورة البوت",
    "Choose avatar": "اختيار الصورة",
    "Avatar selected": "تم اختيار الصورة",
    "PNG/JPEG · square, 128–2048px": "PNG/JPEG · مربع، 128–2048px",
    "Save Soul and avatar package": "حفظ حزمة الشخصية والصورة",
    "Full package": "الحزمة الكاملة",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "اختر ZIP كاملًا للبوتات ذات المهارات أو MCP أو الإضافات أو الصوت.",
    "Choose package": "اختيار الحزمة",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "هذا الإصدار لا يدعم اختيار ملفات الإضافات. ارفعها عبر CMS.",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "تفاصيل ZIP تختلف عن المسودة. طبّقها قبل الرفع.",
    "Apply ZIP details and upload": "تطبيق تفاصيل ZIP والرفع",
    Cancel: "إلغاء",
    "Validate package": "التحقق من الحزمة",
    "Validated · awaiting CMS review and publication.": "تم التحقق · بانتظار المراجعة والنشر في CMS.",
    "Published · available in the gallery.": "منشور · متاح في المعرض.",
    "MCP · runs local Python": "MCP · يشغّل Python محليًا",
    "Plugin · runs local Python": "إضافة · تشغّل Python محليًا",
    "Recommended GPT Live voice": "صوت GPT Live المقترح",
    "Could not review the installation. Check connection and publication status.": "تعذرت مراجعة التثبيت. تحقق من الاتصال وحالة النشر.",
    "Could not install. Review the configuration and retry.": "تعذر التثبيت. راجع الإعدادات وحاول مجددًا.",
    "Meet {0}": "تعرّف على {0}",
    "Soul and avatar required": "الشخصية والصورة مطلوبتان",
    "Include these features": "تضمين هذه الميزات",
    "Start with a Soul and avatar.": "ابدأ بشخصية وصورة.",
    "Reviewing installation": "جارٍ مراجعة التثبيت",
    "New profile:": "ملف جديد:",
    "Author:": "المؤلف:",
    "Selected MCP and plugins execute Python on this device.": "تنفذ MCP والإضافات المحددة Python على هذا الجهاز.",
    "Recommended voice:": "الصوت المقترح:",
    "Configure voice authentication in Hermes.": "اضبط مصادقة الصوت في Hermes.",
    "Soul and file verification": "الشخصية والتحقق من الملفات",
    "Install {0}": "تثبيت {0}",
    "Review again": "مراجعة مجددًا",
    "Already installed": "مثبت بالفعل",
    "Installation complete": "اكتمل التثبيت",
    "Configure a model and authentication in Hermes.": "اضبط النموذج والمصادقة في Hermes.",
    "Your profile is ready.": "ملفك جاهز.",
    "First prompt:": "السؤال الأول:",
    "Setup guide": "دليل الإعداد",
    "Open bot chat": "فتح محادثة البوت",
    "Please check": "يرجى التحقق",
    "Install and submit from Local → default on this device.": "ثبّت وأرسل من Local → default على هذا الجهاز.",
    "Could not open the local connection. Please retry.": "تعذر فتح الاتصال المحلي. حاول مجددًا.",
    "Connect to this device’s default": "الاتصال بملف default لهذا الجهاز",
    Idle: "في الانتظار",
    Thinking: "يفكر",
    "Recently working": "عمل حديثًا",
    "Status unavailable": "الحالة غير متاحة",
    "{0} avatar": "صورة {0}",
    "Confirm installation of {0}": "تأكيد تثبيت {0}",
    "Not auditioned": "لم يُختبر بالاستماع",
    "Existing voice settings were preserved. Check the profile’s Voice settings.": "حُفظت إعدادات الصوت السابقة. تحقق من إعدادات الصوت للملف.",
    "Recommended voice {0} included. Check voice authentication.": "أُدرج الصوت المقترح {0}. تحقق من مصادقة الصوت.",
    "Voice settings were not included.": "لم تُدرج إعدادات الصوت.",
    "Validation issue at {0}. Check the package format and required fields.": "مشكلة تحقق في {0}. راجع تنسيق الحزمة والحقول المطلوبة.",
    Avatar: "الصورة الرمزية",
    "Revision {0}": "المراجعة {0}",
    "{0} bytes": "{0} بايت",
    "A bot named {0} already exists. The existing bot was not changed.": "يوجد بالفعل روبوت باسم {0}. لم يتم تغيير الروبوت الحالي.",
    "The {0} profile has manual changes, so installation stopped. The existing bot was not changed.": "يحتوي الملف الشخصي {0} على تغييرات يدوية، لذلك توقف التثبيت. لم يتم تغيير الروبوت الحالي.",
    "The review expired, so nothing was installed. Review the configuration again.": "انتهت صلاحية المراجعة، لذلك لم يتم تثبيت أي شيء. راجع الإعدادات مرة أخرى.",
    "A profile named {0} already exists, so this bot cannot be installed. The existing bot will not be changed. Rename the existing profile and try again.": "يوجد بالفعل ملف شخصي باسم {0}، لذلك لا يمكن تثبيت هذا الروبوت. لن يتم تغيير الروبوت الحالي. أعد تسمية الملف الشخصي الحالي ثم حاول مرة أخرى.",
    "Model: {0} (same as the default profile)": "النموذج: {0} (مثل الملف الشخصي الافتراضي)",
    "Model: the default profile has no model, so this stays empty. Choose a model first after installing.": "النموذج: لا يحتوي الملف الشخصي الافتراضي على نموذج، لذلك يبقى فارغًا. اختر نموذجًا أولًا بعد التثبيت.",
    "Choose a model first. This bot has no model yet.": "اختر نموذجًا أولًا. لا يوجد نموذج لهذا الروبوت بعد.",
    "You can chat right away with the same model as the default profile ({0}).": "يمكنك الدردشة فورًا باستخدام نفس نموذج الملف الشخصي الافتراضي ({0}).",
    "Language packs: {0} (copied from the default profile)": "حزم اللغة: {0} (منسوخة من الملف الشخصي الافتراضي)",
    "Keys this bot needs are stored only in bot profiles on this computer": "تُحفظ المفاتيح التي يحتاجها هذا البوت في ملفات تعريف البوتات على هذا الكمبيوتر فقط",
    "Could not save this key to the default profile; the bot profile has it": "تعذّر حفظ هذا المفتاح في الملف التعريفي الافتراضي؛ وهو محفوظ في ملف تعريف البوت",
    "The default profile key file could not be checked safely, so it was left unchanged; the bot profile has this key": "تعذّر التحقق من ملف مفاتيح الملف التعريفي الافتراضي بأمان، لذا تُرك دون تغيير؛ وهذا المفتاح محفوظ في ملف تعريف البوت",
    "Keys apply from the next new chat (or after restarting Hermes)": "تُطبَّق المفاتيح بدءًا من المحادثة الجديدة التالية (أو بعد إعادة تشغيل Hermes)",
    "The bot profile key file could not be checked safely, so nothing was changed": "تعذّر التحقق من ملف مفاتيح ملف تعريف البوت بأمان، لذلك لم يتم تغيير أي شيء",
    "Service keys": "المفاتيح المطلوبة",
    Required: "مطلوب",
    Optional: "اختياري",
    "Get a key": "احصل على مفتاح",
    "Imported from the default profile ✓": "تم الاستيراد من الملف التعريفي الافتراضي ✓",
    "Save to the default profile so other bots can use it": "احفظ في الملف التعريفي الافتراضي لتستخدمه البوتات الأخرى",
    "The default profile value stays as it is": "تبقى قيمة الملف التعريفي الافتراضي كما هي",
    "Required keys left empty: {0}. You can add them after installing.": "{0} من المفاتيح المطلوبة فارغة. يمكنك إضافتها بعد التثبيت.",
    "Required keys still empty: {0}.": "لا يزال {0} من المفاتيح المطلوبة فارغًا.",
    Set: "مُعيَّن",
    Empty: "فارغ",
    Skipped: "تم التخطي",
    "Could not check": "تعذّر التحقق",
    "Keys needed": "مفاتيح مطلوبة",
    "Check keys": "تحقق من المفاتيح",
    "Taken from the default profile": "مأخوذ من الملف التعريفي الافتراضي",
    "Also saved to the default profile": "حُفظ أيضًا في الملف التعريفي الافتراضي",
    "The default profile value was kept": "بقيت قيمة الملف التعريفي الافتراضي كما هي",
    "Add keys": "إضافة مفاتيح",
    "Add keys for {0}": "إضافة مفاتيح لـ {0}",
    "Save keys": "حفظ المفاتيح",
    "Loading keys": "جارٍ تحميل المفاتيح",
    "Bot profile: {0}": "ملف تعريف البوت: {0}",
    "The request was not accepted, so nothing was changed. Update MyBots and retry.": "لم يُقبل الطلب، لذا لم يتغير شيء. حدّث MyBots ثم أعد المحاولة.",
    "A key value is empty. Enter it or leave the key out. Nothing was changed.": "قيمة أحد المفاتيح فارغة. أدخلها أو اترك المفتاح فارغًا. لم يتغير شيء.",
    "A key must be one line of at most 4,096 bytes without control characters. Nothing was changed.": "يجب أن يكون المفتاح سطرًا واحدًا لا يتجاوز 4,096 بايت دون أحرف تحكم. لم يتغير شيء.",
    "The keys did not match this bot. Review again; nothing was changed.": "المفاتيح لا تطابق هذا البوت. راجع مرة أخرى؛ لم يتغير شيء.",
    "The bot profile config could not be read safely, so nothing was changed.": "تعذّر قراءة إعدادات ملف تعريف البوت بأمان، لذا لم يتغير شيء.",
    "Could not save the keys to the bot profile. Retry.": "تعذّر حفظ المفاتيح في ملف تعريف البوت. أعد المحاولة.",
    "This bot was not installed by MyBots with keys, so add keys in Hermes settings.": "لم يثبّت MyBots هذا البوت مع مفاتيح، لذا أضف المفاتيح من إعدادات Hermes.",
    "The installed version changed. Refresh the bot list and retry.": "تغيّر الإصدار المثبّت. حدّث قائمة البوتات ثم أعد المحاولة.",
    "This bot needs a newer MyBots helper. Update MyBots and retry.": "يحتاج هذا البوت إلى مساعد MyBots أحدث. حدّث MyBots ثم أعد المحاولة.",
    "Could not save the keys. Retry.": "تعذّر حفظ المفاتيح. أعد المحاولة.",
    "This bot was already installed, so the keys you entered were not saved. Add them below with Add keys.": "هذا البوت مثبّت بالفعل، لذا لم تُحفظ المفاتيح التي أدخلتها. أضفها أدناه عبر «إضافة مفاتيح».",
    "Coming soon": "قريبًا",
    "This bot is still being prepared. You can install it once it opens.": "لا يزال هذا البوت قيد التحضير. يمكنك تثبيته بمجرد إتاحته.",
    "This bot is not open yet.": "هذا البوت غير متاح بعد.",
    Update: "تحديث",
    "Update available": "تحديث متاح",
    "Update {0}": "تحديث {0}",
    "Reviewing update": "جارٍ مراجعة التحديث",
    "Version {0} → {1}": "الإصدار {0} → {1}",
    "{0} files will be replaced and {1} removed.": "سيتم استبدال {0} من الملفات وحذف {1}.",
    "Updates files of the installed local profile; files you added are kept": "يحدّث ملفات الملف الشخصي المحلي المثبّت؛ وتبقى الملفات التي أضفتها",
    "{0} files you changed will be backed up, then replaced by the new version.": "سيتم نسخ {0} من الملفات التي عدّلتها احتياطيًا ثم استبدالها بالإصدار الجديد.",
    "Keys new in this version. You can skip them and add them later with Add keys.": "مفاتيح جديدة في هذا الإصدار. يمكنك تخطيها وإضافتها لاحقًا عبر إضافة مفاتيح.",
    "Wait until the chat in progress ends, then try again.": "انتظر حتى تنتهي المحادثة الجارية، ثم حاول مرة أخرى.",
    "Update complete": "اكتمل التحديث",
    "Restart Hermes to apply.": "أعد تشغيل Hermes لتطبيق التحديث.",
    "Only a newer version can be installed as an update. Refresh the bot list.": "لا يمكن تثبيت إلا إصدار أحدث كتحديث. حدّث قائمة البوتات.",
    "This version cannot be updated in place. Reinstall the bot to get it.": "لا يمكن تحديث هذا الإصدار في مكانه. أعد تثبيت البوت.",
    "The installed bot changed after the review, so nothing was changed. Review the update again.": "تغيّر البوت المثبّت بعد المراجعة، لذلك لم يتغير شيء. راجع التحديث مرة أخرى.",
    "The update failed, and the previous version was restored.": "فشل التحديث، وتمت استعادة الإصدار السابق.",
    "The update failed and some files could not be restored. The previous files are in the profile’s .mybots-backup folder.": "فشل التحديث وتعذّرت استعادة بعض الملفات. الملفات السابقة موجودة في مجلد .mybots-backup في الملف الشخصي.",
    "The review expired, so nothing was updated. Review the update again.": "انتهت صلاحية المراجعة، لذلك لم يُحدَّث شيء. راجع التحديث مرة أخرى.",
    "This bot was not installed by MyBots, so it cannot be updated here.": "لم يثبّت MyBots هذا البوت، لذلك لا يمكن تحديثه هنا.",
    "Could not update. Review the update again and retry.": "تعذّر التحديث. راجع التحديث مرة أخرى ثم أعد المحاولة."
  },
  ru: {
    "Could not load installed bots. Please retry.": "Не удалось загрузить установленных ботов. Повторите попытку.",
    "Could not load the catalog. Installed bots are still available.": "Не удалось загрузить каталог. Установленные боты доступны.",
    "This bot version is no longer published.": "Эта версия бота не опубликована.",
    "Refresh to check installation status.": "Обновите статус установки.",
    "Find your next AI colleague.": "Найдите своего ИИ-коллегу.",
    Refresh: "Обновить",
    "MyBots menu": "Меню MyBots",
    "Browse bots": "Найти ботов",
    "Installed bots": "Установленные боты",
    "My submissions": "Мои заявки",
    "Connection settings": "Настройки подключения",
    "Showing the saved catalog while offline. Reconnect to install.": "Показан сохранённый каталог. Для установки подключитесь снова.",
    "Last checked:": "Последняя проверка:",
    "Search bots": "Поиск ботов",
    "Search by name or role": "Поиск по имени или роли",
    "Bot category": "Категория бота",
    "All categories": "Все категории",
    Business: "Работа",
    Learning: "Обучение",
    "Daily life": "Повседневное",
    "Loading colleagues": "Загрузка коллег",
    "{0} colleagues": "Коллег: {0}",
    Soul: "Душа",
    Skills: "Навыки",
    Plugins: "Плагины",
    Voice: "Голос",
    Meet: "Познакомиться",
    "Motion preview": "Просмотр движения",
    "No matching bots": "Подходящих ботов нет",
    "Try another search or category.": "Измените запрос или категорию.",
    "No bots installed yet": "Боты ещё не установлены",
    "Find your first colleague in Browse bots.": "Найдите первого коллегу в каталоге ботов.",
    "Check version": "Проверьте версию",
    Installed: "Установлен",
    "Other version": "Другая версия",
    "Check files": "Проверьте файлы",
    "Open chat": "Открыть чат",
    "Loading submissions": "Загрузка заявок",
    "Could not load connection settings. Check the server origin.": "Не удалось загрузить настройки. Проверьте адрес сервера.",
    "Could not connect. Check key expiry, permissions and storage.": "Не удалось подключиться. Проверьте срок ключа, права и хранилище.",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "Просмотр и установка без ключа. Для заявки нужен API-ключ автора.",
    Server: "Сервер",
    Connection: "Подключение",
    Connected: "Подключено",
    Disconnected: "Не подключено",
    "Environment · provider": "Среда · провайдер",
    Permissions: "Права",
    Expires: "Истекает",
    "Key provider": "Хранилище ключа",
    "bws item ID (recommended)": "ID элемента bws (рекомендуется)",
    "OS secure storage": "Защищённое хранилище ОС",
    "This session only": "Только этот сеанс",
    "bws item ID": "ID элемента bws",
    "MyBots API key": "API-ключ MyBots",
    "Session keys stay in backend memory and are cleared on restart.": "Ключи сеанса хранятся в памяти сервера и удаляются при перезапуске.",
    "Secure OS storage is unavailable. Choose bws or session storage.": "Хранилище ОС недоступно. Выберите bws или хранение в сеансе.",
    Connect: "Подключить",
    Disconnect: "Отключить",
    "Refresh connection": "Обновить подключение",
    Draft: "Черновик",
    Validated: "Проверено",
    Published: "Опубликовано",
    Unpublished: "Не опубликовано",
    "Bot ID": "ID бота",
    Version: "Версия",
    Name: "Имя",
    "English name": "Имя на английском",
    Role: "Роль",
    Personality: "Характер",
    Description: "Описание",
    "First prompt": "Первый запрос",
    "Could not load connection details.": "Не удалось загрузить данные подключения.",
    "Could not load submissions. Check your key connection.": "Не удалось загрузить заявки. Проверьте ключ.",
    "The screen or connection changed.": "Экран или подключение изменились.",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "Не удалось сохранить или проверить. Проверьте ввод, ключ и сервер. Повторите те же данные или обновите результат.",
    "Select MyBots package": "Выберите пакет MyBots",
    "ZIP ID or version differs. Create a new draft.": "ID или версия ZIP отличаются. Создайте новый черновик.",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "Сохраните бота и проверьте пакет. Публикацию проверяет оператор в CMS.",
    "Connect a creator API key in Connection settings first.": "Сначала подключите API-ключ автора в настройках.",
    "Submit a bot": "Подать заявку",
    "Refresh submissions": "Обновить заявки",
    "No submissions yet": "Заявок пока нет",
    "Start your first draft with a Soul and avatar.": "Начните черновик с души и аватара.",
    "Submission details": "Данные заявки",
    "New draft": "Новый черновик",
    Category: "Категория",
    "Save details": "Сохранить данные",
    "Save draft": "Сохранить черновик",
    "Soul and avatar": "Душа и аватар",
    "Select bot avatar": "Выберите аватар бота",
    "Choose avatar": "Выбрать аватар",
    "Avatar selected": "Аватар выбран",
    "PNG/JPEG · square, 128–2048px": "PNG/JPEG · квадрат, 128–2048px",
    "Save Soul and avatar package": "Сохранить пакет души и аватара",
    "Full package": "Полный пакет",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "Для навыков, MCP, плагинов или голоса выберите полный ZIP.",
    "Choose package": "Выбрать пакет",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "В этой версии Hermes нет выбора файлов плагина. Загрузите через CMS.",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "Данные ZIP отличаются. Примените их перед загрузкой.",
    "Apply ZIP details and upload": "Применить данные ZIP и загрузить",
    Cancel: "Отмена",
    "Validate package": "Проверить пакет",
    "Validated · awaiting CMS review and publication.": "Проверено · ожидает проверки и публикации в CMS.",
    "Published · available in the gallery.": "Опубликовано · доступно в галерее.",
    "MCP · runs local Python": "MCP · локальный Python",
    "Plugin · runs local Python": "Плагин · локальный Python",
    "Recommended GPT Live voice": "Рекомендуемый голос GPT Live",
    "Could not review the installation. Check connection and publication status.": "Не удалось проверить установку. Проверьте подключение и публикацию.",
    "Could not install. Review the configuration and retry.": "Не удалось установить. Проверьте настройки и повторите.",
    "Meet {0}": "Знакомство: {0}",
    "Soul and avatar required": "Душа и аватар обязательны",
    "Include these features": "Включить функции",
    "Start with a Soul and avatar.": "Начните с души и аватара.",
    "Reviewing installation": "Проверка установки",
    "New profile:": "Новый профиль:",
    "Author:": "Автор:",
    "Selected MCP and plugins execute Python on this device.": "Выбранные MCP и плагины выполняют Python на этом устройстве.",
    "Recommended voice:": "Рекомендуемый голос:",
    "Configure voice authentication in Hermes.": "Настройте голосовую авторизацию в Hermes.",
    "Soul and file verification": "Проверка души и файлов",
    "Install {0}": "Установить {0}",
    "Review again": "Проверить снова",
    "Already installed": "Уже установлен",
    "Installation complete": "Установка завершена",
    "Configure a model and authentication in Hermes.": "Настройте модель и авторизацию в Hermes.",
    "Your profile is ready.": "Профиль готов.",
    "First prompt:": "Первый запрос:",
    "Setup guide": "Инструкция по настройке",
    "Open bot chat": "Открыть чат бота",
    "Please check": "Требуется проверка",
    "Install and submit from Local → default on this device.": "Устанавливайте и отправляйте из Local → default на этом устройстве.",
    "Could not open the local connection. Please retry.": "Не удалось открыть локальное подключение. Повторите.",
    "Connect to this device’s default": "Подключить default этого устройства",
    Idle: "Ожидание",
    Thinking: "Думает",
    "Recently working": "Недавняя работа",
    "Status unavailable": "Статус недоступен",
    "{0} avatar": "Аватар {0}",
    "Confirm installation of {0}": "Подтвердить установку {0}",
    "Not auditioned": "Не прослушано",
    "Existing voice settings were preserved. Check the profile’s Voice settings.": "Прежние настройки голоса сохранены. Проверьте настройки профиля.",
    "Recommended voice {0} included. Check voice authentication.": "Включён голос {0}. Проверьте голосовую авторизацию.",
    "Voice settings were not included.": "Настройки голоса не включены.",
    "Validation issue at {0}. Check the package format and required fields.": "Ошибка проверки в {0}. Проверьте формат и обязательные поля.",
    Avatar: "Аватар",
    "Revision {0}": "Редакция {0}",
    "{0} bytes": "{0} байт",
    "A bot named {0} already exists. The existing bot was not changed.": "Бот с именем {0} уже существует. Существующий бот не изменён.",
    "The {0} profile has manual changes, so installation stopped. The existing bot was not changed.": "В профиле {0} есть ручные изменения, поэтому установка остановлена. Существующий бот не изменён.",
    "The review expired, so nothing was installed. Review the configuration again.": "Срок проверки истёк, поэтому ничего не установлено. Проверьте конфигурацию ещё раз.",
    "A profile named {0} already exists, so this bot cannot be installed. The existing bot will not be changed. Rename the existing profile and try again.": "Профиль с именем {0} уже существует, поэтому этого бота нельзя установить. Существующий бот не будет изменён. Переименуйте существующий профиль и повторите попытку.",
    "Model: {0} (same as the default profile)": "Модель: {0} (как в профиле по умолчанию)",
    "Model: the default profile has no model, so this stays empty. Choose a model first after installing.": "Модель: в профиле по умолчанию нет модели, поэтому поле остаётся пустым. После установки сначала выберите модель.",
    "Choose a model first. This bot has no model yet.": "Сначала выберите модель. У этого бота ещё нет модели.",
    "You can chat right away with the same model as the default profile ({0}).": "Можно сразу общаться с той же моделью, что и в профиле по умолчанию ({0}).",
    "Language packs: {0} (copied from the default profile)": "Языковые пакеты: {0} (скопированы из профиля по умолчанию)",
    "Keys this bot needs are stored only in bot profiles on this computer": "Нужные боту ключи хранятся только в профилях ботов на этом компьютере",
    "Could not save this key to the default profile; the bot profile has it": "Не удалось сохранить этот ключ в профиль по умолчанию; в профиле бота он сохранён",
    "The default profile key file could not be checked safely, so it was left unchanged; the bot profile has this key": "Не удалось безопасно проверить файл ключей профиля по умолчанию, поэтому он не изменён; в профиле бота этот ключ сохранён",
    "Keys apply from the next new chat (or after restarting Hermes)": "Ключи начнут действовать со следующего нового чата (или после перезапуска Hermes)",
    "The bot profile key file could not be checked safely, so nothing was changed": "Не удалось безопасно проверить файл ключей профиля бота, поэтому ничего не изменено",
    "Service keys": "Нужные ключи",
    Required: "Обязательный",
    Optional: "Необязательный",
    "Get a key": "Получить ключ",
    "Imported from the default profile ✓": "Взят из профиля по умолчанию ✓",
    "Save to the default profile so other bots can use it": "Сохранить в профиль по умолчанию для других ботов",
    "The default profile value stays as it is": "Значение в профиле по умолчанию останется прежним",
    "Required keys left empty: {0}. You can add them after installing.": "Пустых обязательных ключей: {0}. Их можно добавить после установки.",
    "Required keys still empty: {0}.": "Пустых обязательных ключей всё ещё: {0}.",
    Set: "Задан",
    Empty: "Пусто",
    Skipped: "Пропущен",
    "Could not check": "Не удалось проверить",
    "Keys needed": "Нужны ключи",
    "Check keys": "Проверьте ключи",
    "Taken from the default profile": "Взят из профиля по умолчанию",
    "Also saved to the default profile": "Также сохранён в профиль по умолчанию",
    "The default profile value was kept": "Значение в профиле по умолчанию сохранено",
    "Add keys": "Добавить ключи",
    "Add keys for {0}": "Ключи для {0}",
    "Save keys": "Сохранить ключи",
    "Loading keys": "Загрузка ключей",
    "Bot profile: {0}": "Профиль бота: {0}",
    "The request was not accepted, so nothing was changed. Update MyBots and retry.": "Запрос не принят, поэтому ничего не изменено. Обновите MyBots и повторите попытку.",
    "A key value is empty. Enter it or leave the key out. Nothing was changed.": "Значение ключа пустое. Введите его или оставьте ключ незаполненным. Ничего не изменено.",
    "A key must be one line of at most 4,096 bytes without control characters. Nothing was changed.": "Ключ должен быть одной строкой не длиннее 4 096 байт без управляющих символов. Ничего не изменено.",
    "The keys did not match this bot. Review again; nothing was changed.": "Ключи не соответствуют этому боту. Проверьте ещё раз; ничего не изменено.",
    "The bot profile config could not be read safely, so nothing was changed.": "Не удалось безопасно прочитать настройки профиля бота, поэтому ничего не изменено.",
    "Could not save the keys to the bot profile. Retry.": "Не удалось сохранить ключи в профиль бота. Повторите попытку.",
    "This bot was not installed by MyBots with keys, so add keys in Hermes settings.": "Этот бот установлен не через MyBots с ключами, поэтому добавьте ключи в настройках Hermes.",
    "The installed version changed. Refresh the bot list and retry.": "Установленная версия изменилась. Обновите список ботов и повторите попытку.",
    "This bot needs a newer MyBots helper. Update MyBots and retry.": "Этому боту нужен более новый помощник MyBots. Обновите MyBots и повторите попытку.",
    "Could not save the keys. Retry.": "Не удалось сохранить ключи. Повторите попытку.",
    "This bot was already installed, so the keys you entered were not saved. Add them below with Add keys.": "Этот бот уже установлен, поэтому введённые ключи не сохранены. Добавьте их ниже через «Добавить ключи».",
    "Coming soon": "Скоро",
    "This bot is still being prepared. You can install it once it opens.": "Этот бот ещё готовится. Его можно будет установить, когда он откроется.",
    "This bot is not open yet.": "Этот бот ещё не открыт.",
    Update: "Обновить",
    "Update available": "Доступно обновление",
    "Update {0}": "Обновить {0}",
    "Reviewing update": "Проверяем обновление",
    "Version {0} → {1}": "Версия {0} → {1}",
    "{0} files will be replaced and {1} removed.": "Будет заменено файлов: {0}, удалено: {1}.",
    "Updates files of the installed local profile; files you added are kept": "Обновляет файлы установленного локального профиля; добавленные вами файлы сохраняются",
    "{0} files you changed will be backed up, then replaced by the new version.": "Изменённые вами файлы ({0}) будут сохранены в резервную копию, а затем заменены новой версией.",
    "Keys new in this version. You can skip them and add them later with Add keys.": "Новые ключи этой версии. Их можно пропустить и добавить позже через «Добавить ключи».",
    "Wait until the chat in progress ends, then try again.": "Дождитесь окончания текущего чата и повторите попытку.",
    "Update complete": "Обновление завершено",
    "Restart Hermes to apply.": "Перезапустите Hermes, чтобы применить изменения.",
    "Only a newer version can be installed as an update. Refresh the bot list.": "Обновлением можно установить только более новую версию. Обновите список ботов.",
    "This version cannot be updated in place. Reinstall the bot to get it.": "Эту версию нельзя обновить на месте. Переустановите бота.",
    "The installed bot changed after the review, so nothing was changed. Review the update again.": "Установленный бот изменился после проверки, поэтому ничего не изменено. Проверьте обновление ещё раз.",
    "The update failed, and the previous version was restored.": "Обновление не удалось, предыдущая версия восстановлена.",
    "The update failed and some files could not be restored. The previous files are in the profile’s .mybots-backup folder.": "Обновление не удалось, и некоторые файлы не удалось восстановить. Предыдущие файлы находятся в папке .mybots-backup профиля.",
    "The review expired, so nothing was updated. Review the update again.": "Срок проверки истёк, поэтому ничего не обновлено. Проверьте обновление ещё раз.",
    "This bot was not installed by MyBots, so it cannot be updated here.": "Этот бот установлен не через MyBots, поэтому обновить его здесь нельзя.",
    "Could not update. Review the update again and retry.": "Не удалось обновить. Проверьте обновление ещё раз и повторите попытку."
  },
  fr: {
    "Could not load installed bots. Please retry.": "Impossible de charger les bots installés. Réessayez.",
    "Could not load the catalog. Installed bots are still available.": "Impossible de charger le catalogue. Les bots installés restent disponibles.",
    "This bot version is no longer published.": "Cette version du bot n’est pas publiée.",
    "Refresh to check installation status.": "Actualisez pour vérifier l’installation.",
    "Find your next AI colleague.": "Trouvez votre prochain collègue IA.",
    Refresh: "Actualiser",
    "MyBots menu": "Menu MyBots",
    "Browse bots": "Explorer les bots",
    "Installed bots": "Bots installés",
    "My submissions": "Mes contributions",
    "Connection settings": "Paramètres de connexion",
    "Showing the saved catalog while offline. Reconnect to install.": "Catalogue enregistré affiché hors ligne. Reconnectez-vous pour installer.",
    "Last checked:": "Dernière vérification :",
    "Search bots": "Rechercher des bots",
    "Search by name or role": "Rechercher par nom ou rôle",
    "Bot category": "Catégorie du bot",
    "All categories": "Toutes les catégories",
    Business: "Travail",
    Learning: "Apprentissage",
    "Daily life": "Quotidien",
    "Loading colleagues": "Chargement des collègues",
    "{0} colleagues": "{0} collègues",
    Soul: "Soul",
    Skills: "Compétences",
    Plugins: "Extensions",
    Voice: "Voix",
    Meet: "Découvrir",
    "Motion preview": "Aperçu animé",
    "No matching bots": "Aucun bot correspondant",
    "Try another search or category.": "Essayez une autre recherche ou catégorie.",
    "No bots installed yet": "Aucun bot installé",
    "Find your first colleague in Browse bots.": "Trouvez votre premier collègue dans le catalogue.",
    "Check version": "Vérifier la version",
    Installed: "Installé",
    "Other version": "Autre version",
    "Check files": "Vérifier les fichiers",
    "Open chat": "Ouvrir la discussion",
    "Loading submissions": "Chargement des contributions",
    "Could not load connection settings. Check the server origin.": "Impossible de charger les paramètres. Vérifiez l’adresse du serveur.",
    "Could not connect. Check key expiry, permissions and storage.": "Connexion impossible. Vérifiez la validité, les droits et le stockage de la clé.",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "Aucune clé pour parcourir et installer. Une clé API créateur est requise pour soumettre un bot.",
    Server: "Serveur",
    Connection: "Connexion",
    Connected: "Connecté",
    Disconnected: "Déconnecté",
    "Environment · provider": "Environnement · fournisseur",
    Permissions: "Autorisations",
    Expires: "Expiration",
    "Key provider": "Stockage de la clé",
    "bws item ID (recommended)": "ID d’élément bws (recommandé)",
    "OS secure storage": "Stockage sécurisé du système",
    "This session only": "Cette session uniquement",
    "bws item ID": "ID d’élément bws",
    "MyBots API key": "Clé API MyBots",
    "Session keys stay in backend memory and are cleared on restart.": "Les clés de session restent en mémoire et sont effacées au redémarrage.",
    "Secure OS storage is unavailable. Choose bws or session storage.": "Stockage sécurisé indisponible. Choisissez bws ou la session.",
    Connect: "Connecter",
    Disconnect: "Déconnecter",
    "Refresh connection": "Actualiser la connexion",
    Draft: "Brouillon",
    Validated: "Validé",
    Published: "Publié",
    Unpublished: "Non publié",
    "Bot ID": "ID du bot",
    Version: "Version",
    Name: "Nom",
    "English name": "Nom anglais",
    Role: "Rôle",
    Personality: "Personnalité",
    Description: "Description",
    "First prompt": "Première question",
    "Could not load connection details.": "Impossible de charger la connexion.",
    "Could not load submissions. Check your key connection.": "Impossible de charger les contributions. Vérifiez la clé.",
    "The screen or connection changed.": "L’écran ou la connexion a changé.",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "Échec de l’enregistrement ou validation. Vérifiez les données, la clé et le serveur. Réessayez ou actualisez pour confirmer.",
    "Select MyBots package": "Choisir un paquet MyBots",
    "ZIP ID or version differs. Create a new draft.": "L’ID ou la version ZIP diffère. Créez un brouillon.",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "Enregistrez le bot et validez son paquet. Un opérateur examine la publication dans le CMS.",
    "Connect a creator API key in Connection settings first.": "Connectez d’abord une clé API créateur dans les paramètres.",
    "Submit a bot": "Soumettre un bot",
    "Refresh submissions": "Actualiser les contributions",
    "No submissions yet": "Aucune contribution",
    "Start your first draft with a Soul and avatar.": "Créez un brouillon avec un Soul et un avatar.",
    "Submission details": "Détails de la contribution",
    "New draft": "Nouveau brouillon",
    Category: "Catégorie",
    "Save details": "Enregistrer les détails",
    "Save draft": "Enregistrer le brouillon",
    "Soul and avatar": "Soul et avatar",
    "Select bot avatar": "Choisir l’avatar du bot",
    "Choose avatar": "Choisir un avatar",
    "Avatar selected": "Avatar sélectionné",
    "PNG/JPEG · square, 128–2048px": "PNG/JPEG · carré, 128–2048px",
    "Save Soul and avatar package": "Enregistrer le paquet Soul et avatar",
    "Full package": "Paquet complet",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "Choisissez un ZIP complet pour les compétences, MCP, extensions ou voix.",
    "Choose package": "Choisir un paquet",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "Cette version de Hermes n’a pas de sélecteur de fichiers. Utilisez le CMS.",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "Les détails du ZIP diffèrent. Appliquez-les avant l’envoi.",
    "Apply ZIP details and upload": "Appliquer le ZIP et envoyer",
    Cancel: "Annuler",
    "Validate package": "Valider le paquet",
    "Validated · awaiting CMS review and publication.": "Validé · en attente de publication dans le CMS.",
    "Published · available in the gallery.": "Publié · disponible dans la galerie.",
    "MCP · runs local Python": "MCP · exécute Python localement",
    "Plugin · runs local Python": "Extension · exécute Python localement",
    "Recommended GPT Live voice": "Voix GPT Live recommandée",
    "Could not review the installation. Check connection and publication status.": "Impossible de vérifier l’installation. Vérifiez la connexion et la publication.",
    "Could not install. Review the configuration and retry.": "Installation impossible. Vérifiez la configuration et réessayez.",
    "Meet {0}": "Rencontrer {0}",
    "Soul and avatar required": "Soul et avatar requis",
    "Include these features": "Inclure ces fonctions",
    "Start with a Soul and avatar.": "Commencez avec un Soul et un avatar.",
    "Reviewing installation": "Vérification de l’installation",
    "New profile:": "Nouveau profil :",
    "Author:": "Auteur :",
    "Selected MCP and plugins execute Python on this device.": "Les MCP et extensions sélectionnés exécutent Python sur cet appareil.",
    "Recommended voice:": "Voix recommandée :",
    "Configure voice authentication in Hermes.": "Configurez l’authentification vocale dans Hermes.",
    "Soul and file verification": "Soul et vérification des fichiers",
    "Install {0}": "Installer {0}",
    "Review again": "Vérifier à nouveau",
    "Already installed": "Déjà installé",
    "Installation complete": "Installation terminée",
    "Configure a model and authentication in Hermes.": "Configurez le modèle et l’authentification dans Hermes.",
    "Your profile is ready.": "Votre profil est prêt.",
    "First prompt:": "Première question :",
    "Setup guide": "Guide de configuration",
    "Open bot chat": "Ouvrir la discussion du bot",
    "Please check": "Vérification nécessaire",
    "Install and submit from Local → default on this device.": "Installez et soumettez depuis Local → default sur cet appareil.",
    "Could not open the local connection. Please retry.": "Impossible d’ouvrir la connexion locale. Réessayez.",
    "Connect to this device’s default": "Connecter le default de cet appareil",
    Idle: "En attente",
    Thinking: "Réflexion",
    "Recently working": "Activité récente",
    "Status unavailable": "État indisponible",
    "{0} avatar": "Avatar de {0}",
    "Confirm installation of {0}": "Confirmer l’installation de {0}",
    "Not auditioned": "Non écouté",
    "Existing voice settings were preserved. Check the profile’s Voice settings.": "Les réglages vocaux existants sont conservés. Vérifiez le profil.",
    "Recommended voice {0} included. Check voice authentication.": "Voix {0} incluse. Vérifiez l’authentification vocale.",
    "Voice settings were not included.": "Réglages vocaux non inclus.",
    "Validation issue at {0}. Check the package format and required fields.": "Erreur de validation à {0}. Vérifiez le format et les champs requis.",
    Avatar: "Avatar",
    "Revision {0}": "Révision {0}",
    "{0} bytes": "{0} octets",
    "A bot named {0} already exists. The existing bot was not changed.": "Un bot nommé {0} existe déjà. Le bot existant n’a pas été modifié.",
    "The {0} profile has manual changes, so installation stopped. The existing bot was not changed.": "Le profil {0} contient des modifications manuelles, l’installation a donc été arrêtée. Le bot existant n’a pas été modifié.",
    "The review expired, so nothing was installed. Review the configuration again.": "La vérification a expiré, rien n’a été installé. Vérifiez à nouveau la configuration.",
    "A profile named {0} already exists, so this bot cannot be installed. The existing bot will not be changed. Rename the existing profile and try again.": "Un profil nommé {0} existe déjà, ce bot ne peut donc pas être installé. Le bot existant ne sera pas modifié. Renommez le profil existant puis réessayez.",
    "Model: {0} (same as the default profile)": "Modèle : {0} (identique au profil par défaut)",
    "Model: the default profile has no model, so this stays empty. Choose a model first after installing.": "Modèle : le profil par défaut n’a pas de modèle, ce champ reste donc vide. Choisissez d’abord un modèle après l’installation.",
    "Choose a model first. This bot has no model yet.": "Choisissez d’abord un modèle. Ce bot n’a pas encore de modèle.",
    "You can chat right away with the same model as the default profile ({0}).": "Vous pouvez discuter immédiatement avec le même modèle que le profil par défaut ({0}).",
    "Language packs: {0} (copied from the default profile)": "Packs de langue : {0} (copiés depuis le profil par défaut)",
    "Keys this bot needs are stored only in bot profiles on this computer": "Les clés nécessaires à ce bot sont stockées uniquement dans les profils de bots de cet ordinateur",
    "Could not save this key to the default profile; the bot profile has it": "Impossible d'enregistrer cette clé dans le profil par défaut ; elle est enregistrée dans le profil du bot",
    "The default profile key file could not be checked safely, so it was left unchanged; the bot profile has this key": "Le fichier de clés du profil par défaut n'a pas pu être vérifié en toute sécurité ; il n'a pas été modifié. Le profil du bot contient cette clé",
    "Keys apply from the next new chat (or after restarting Hermes)": "Les clés s’appliquent à partir de la prochaine nouvelle conversation (ou après le redémarrage de Hermes)",
    "The bot profile key file could not be checked safely, so nothing was changed": "Le fichier de clés du profil du bot n’a pas pu être vérifié en toute sécurité ; rien n’a été modifié",
    "Service keys": "Clés nécessaires",
    Required: "Obligatoire",
    Optional: "Facultative",
    "Get a key": "Obtenir une clé",
    "Imported from the default profile ✓": "Importée du profil par défaut ✓",
    "Save to the default profile so other bots can use it": "Enregistrer dans le profil par défaut pour les autres bots",
    "The default profile value stays as it is": "La valeur du profil par défaut reste inchangée",
    "Required keys left empty: {0}. You can add them after installing.": "{0} clés obligatoires sont vides. Vous pourrez les ajouter après l’installation.",
    "Required keys still empty: {0}.": "{0} clés obligatoires sont encore vides.",
    Set: "Définie",
    Empty: "Vide",
    Skipped: "Ignorée",
    "Could not check": "Vérification impossible",
    "Keys needed": "Clés nécessaires",
    "Check keys": "Vérifier les clés",
    "Taken from the default profile": "Reprise du profil par défaut",
    "Also saved to the default profile": "Aussi enregistrée dans le profil par défaut",
    "The default profile value was kept": "La valeur du profil par défaut a été conservée",
    "Add keys": "Ajouter des clés",
    "Add keys for {0}": "Ajouter des clés pour {0}",
    "Save keys": "Enregistrer les clés",
    "Loading keys": "Chargement des clés",
    "Bot profile: {0}": "Profil du bot : {0}",
    "The request was not accepted, so nothing was changed. Update MyBots and retry.": "La requête n’a pas été acceptée ; rien n’a été modifié. Mettez à jour MyBots et réessayez.",
    "A key value is empty. Enter it or leave the key out. Nothing was changed.": "Une valeur de clé est vide. Saisissez-la ou laissez la clé de côté. Rien n’a été modifié.",
    "A key must be one line of at most 4,096 bytes without control characters. Nothing was changed.": "Une clé doit tenir sur une ligne d’au plus 4 096 octets sans caractères de contrôle. Rien n’a été modifié.",
    "The keys did not match this bot. Review again; nothing was changed.": "Les clés ne correspondent pas à ce bot. Vérifiez à nouveau ; rien n’a été modifié.",
    "The bot profile config could not be read safely, so nothing was changed.": "La configuration du profil du bot n’a pas pu être lue en toute sécurité ; rien n’a été modifié.",
    "Could not save the keys to the bot profile. Retry.": "Impossible d’enregistrer les clés dans le profil du bot. Réessayez.",
    "This bot was not installed by MyBots with keys, so add keys in Hermes settings.": "Ce bot n’a pas été installé par MyBots avec des clés ; ajoutez les clés dans les réglages de Hermes.",
    "The installed version changed. Refresh the bot list and retry.": "La version installée a changé. Actualisez la liste des bots et réessayez.",
    "This bot needs a newer MyBots helper. Update MyBots and retry.": "Ce bot nécessite un assistant MyBots plus récent. Mettez à jour MyBots et réessayez.",
    "Could not save the keys. Retry.": "Impossible d’enregistrer les clés. Réessayez.",
    "This bot was already installed, so the keys you entered were not saved. Add them below with Add keys.": "Ce bot était déjà installé ; les clés saisies n’ont donc pas été enregistrées. Ajoutez-les ci-dessous avec « Ajouter des clés ».",
    "Coming soon": "Bientôt disponible",
    "This bot is still being prepared. You can install it once it opens.": "Ce bot est encore en préparation. Vous pourrez l’installer dès son ouverture.",
    "This bot is not open yet.": "Ce bot n’est pas encore ouvert.",
    Update: "Mettre à jour",
    "Update available": "Mise à jour disponible",
    "Update {0}": "Mettre à jour {0}",
    "Reviewing update": "Vérification de la mise à jour",
    "Version {0} → {1}": "Version {0} → {1}",
    "{0} files will be replaced and {1} removed.": "{0} fichiers seront remplacés et {1} supprimés.",
    "Updates files of the installed local profile; files you added are kept": "Met à jour les fichiers du profil local installé ; les fichiers que vous avez ajoutés sont conservés",
    "{0} files you changed will be backed up, then replaced by the new version.": "{0} fichiers que vous avez modifiés seront sauvegardés, puis remplacés par la nouvelle version.",
    "Keys new in this version. You can skip them and add them later with Add keys.": "Clés nouvelles dans cette version. Vous pouvez les ignorer et les ajouter plus tard avec Ajouter des clés.",
    "Wait until the chat in progress ends, then try again.": "Attendez la fin de la conversation en cours, puis réessayez.",
    "Update complete": "Mise à jour terminée",
    "Restart Hermes to apply.": "Redémarrez Hermes pour l’appliquer.",
    "Only a newer version can be installed as an update. Refresh the bot list.": "Seule une version plus récente peut être installée comme mise à jour. Actualisez la liste des bots.",
    "This version cannot be updated in place. Reinstall the bot to get it.": "Cette version ne peut pas être mise à jour sur place. Réinstallez le bot.",
    "The installed bot changed after the review, so nothing was changed. Review the update again.": "Le bot installé a changé après la vérification, donc rien n’a été modifié. Vérifiez de nouveau la mise à jour.",
    "The update failed, and the previous version was restored.": "La mise à jour a échoué et la version précédente a été restaurée.",
    "The update failed and some files could not be restored. The previous files are in the profile’s .mybots-backup folder.": "La mise à jour a échoué et certains fichiers n’ont pas pu être restaurés. Les fichiers précédents se trouvent dans le dossier .mybots-backup du profil.",
    "The review expired, so nothing was updated. Review the update again.": "La vérification a expiré, donc rien n’a été mis à jour. Vérifiez de nouveau la mise à jour.",
    "This bot was not installed by MyBots, so it cannot be updated here.": "Ce bot n’a pas été installé par MyBots, il ne peut donc pas être mis à jour ici.",
    "Could not update. Review the update again and retry.": "Impossible de mettre à jour. Vérifiez de nouveau la mise à jour et réessayez."
  },
  de: {
    "Could not load installed bots. Please retry.": "Installierte Bots konnten nicht geladen werden. Bitte erneut versuchen.",
    "Could not load the catalog. Installed bots are still available.": "Katalog konnte nicht geladen werden. Installierte Bots bleiben verfügbar.",
    "This bot version is no longer published.": "Diese Bot-Version ist nicht veröffentlicht.",
    "Refresh to check installation status.": "Zum Prüfen des Installationsstatus aktualisieren.",
    "Find your next AI colleague.": "Finde deinen nächsten KI-Kollegen.",
    Refresh: "Aktualisieren",
    "MyBots menu": "MyBots-Menü",
    "Browse bots": "Bots entdecken",
    "Installed bots": "Installierte Bots",
    "My submissions": "Meine Einreichungen",
    "Connection settings": "Verbindungseinstellungen",
    "Showing the saved catalog while offline. Reconnect to install.": "Offline wird der gespeicherte Katalog angezeigt. Zum Installieren erneut verbinden.",
    "Last checked:": "Zuletzt geprüft:",
    "Search bots": "Bots suchen",
    "Search by name or role": "Nach Name oder Rolle suchen",
    "Bot category": "Bot-Kategorie",
    "All categories": "Alle Kategorien",
    Business: "Arbeit",
    Learning: "Lernen",
    "Daily life": "Alltag",
    "Loading colleagues": "Kollegen werden geladen",
    "{0} colleagues": "{0} Kollegen",
    Soul: "Soul",
    Skills: "Fähigkeiten",
    Plugins: "Plugins",
    Voice: "Stimme",
    Meet: "Kennenlernen",
    "Motion preview": "Bewegungsvorschau",
    "No matching bots": "Keine passenden Bots",
    "Try another search or category.": "Versuche eine andere Suche oder Kategorie.",
    "No bots installed yet": "Noch keine Bots installiert",
    "Find your first colleague in Browse bots.": "Finde deinen ersten Kollegen unter „Bots entdecken“.",
    "Check version": "Version prüfen",
    Installed: "Installiert",
    "Other version": "Andere Version",
    "Check files": "Dateien prüfen",
    "Open chat": "Chat öffnen",
    "Loading submissions": "Einreichungen werden geladen",
    "Could not load connection settings. Check the server origin.": "Verbindungseinstellungen konnten nicht geladen werden. Serveradresse prüfen.",
    "Could not connect. Check key expiry, permissions and storage.": "Verbindung fehlgeschlagen. Schlüsselgültigkeit, Rechte und Speicher prüfen.",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "Suchen und Installieren geht ohne Schlüssel. Zum Einreichen ist ein Ersteller-API-Schlüssel nötig.",
    Server: "Server",
    Connection: "Verbindung",
    Connected: "Verbunden",
    Disconnected: "Nicht verbunden",
    "Environment · provider": "Umgebung · Anbieter",
    Permissions: "Berechtigungen",
    Expires: "Läuft ab",
    "Key provider": "Schlüsselanbieter",
    "bws item ID (recommended)": "bws-Eintrags-ID (empfohlen)",
    "OS secure storage": "Sicherer Systemspeicher",
    "This session only": "Nur diese Sitzung",
    "bws item ID": "bws-Eintrags-ID",
    "MyBots API key": "MyBots-API-Schlüssel",
    "Session keys stay in backend memory and are cleared on restart.": "Sitzungsschlüssel bleiben im Backend-Arbeitsspeicher und werden beim Neustart gelöscht.",
    "Secure OS storage is unavailable. Choose bws or session storage.": "Sicherer Systemspeicher nicht verfügbar. Wähle bws oder Sitzungsspeicher.",
    Connect: "Verbinden",
    Disconnect: "Trennen",
    "Refresh connection": "Verbindung aktualisieren",
    Draft: "Entwurf",
    Validated: "Geprüft",
    Published: "Veröffentlicht",
    Unpublished: "Nicht veröffentlicht",
    "Bot ID": "Bot-ID",
    Version: "Version",
    Name: "Name",
    "English name": "Englischer Name",
    Role: "Rolle",
    Personality: "Persönlichkeit",
    Description: "Beschreibung",
    "First prompt": "Erste Frage",
    "Could not load connection details.": "Verbindungsdaten konnten nicht geladen werden.",
    "Could not load submissions. Check your key connection.": "Einreichungen konnten nicht geladen werden. Schlüsselverbindung prüfen.",
    "The screen or connection changed.": "Ansicht oder Verbindung wurde geändert.",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "Speichern oder Prüfen fehlgeschlagen. Eingaben, Schlüssel und Server prüfen. Gleichen Inhalt erneut senden oder Ergebnis aktualisieren.",
    "Select MyBots package": "MyBots-Paket wählen",
    "ZIP ID or version differs. Create a new draft.": "ZIP-ID oder Version weicht ab. Neuen Entwurf erstellen.",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "Bot speichern und Paket prüfen. Die Veröffentlichung wird im CMS geprüft.",
    "Connect a creator API key in Connection settings first.": "Zuerst einen Ersteller-API-Schlüssel in den Verbindungseinstellungen verbinden.",
    "Submit a bot": "Bot einreichen",
    "Refresh submissions": "Einreichungen aktualisieren",
    "No submissions yet": "Noch keine Einreichungen",
    "Start your first draft with a Soul and avatar.": "Beginne den Entwurf mit Soul und Avatar.",
    "Submission details": "Einreichungsdetails",
    "New draft": "Neuer Entwurf",
    Category: "Kategorie",
    "Save details": "Details speichern",
    "Save draft": "Entwurf speichern",
    "Soul and avatar": "Soul und Avatar",
    "Select bot avatar": "Bot-Avatar wählen",
    "Choose avatar": "Avatar wählen",
    "Avatar selected": "Avatar gewählt",
    "PNG/JPEG · square, 128–2048px": "PNG/JPEG · quadratisch, 128–2048px",
    "Save Soul and avatar package": "Soul- und Avatar-Paket speichern",
    "Full package": "Vollständiges Paket",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "Für Fähigkeiten, MCP, Plugins oder Stimme ein vollständiges ZIP wählen.",
    "Choose package": "Paket wählen",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "Diese Hermes-Version hat keine Plugin-Dateiauswahl. Über das CMS hochladen.",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "ZIP-Details weichen vom Entwurf ab. Vor dem Hochladen übernehmen.",
    "Apply ZIP details and upload": "ZIP-Details übernehmen und hochladen",
    Cancel: "Abbrechen",
    "Validate package": "Paket prüfen",
    "Validated · awaiting CMS review and publication.": "Geprüft · wartet auf CMS-Prüfung und Veröffentlichung.",
    "Published · available in the gallery.": "Veröffentlicht · in der Galerie verfügbar.",
    "MCP · runs local Python": "MCP · führt Python lokal aus",
    "Plugin · runs local Python": "Plugin · führt Python lokal aus",
    "Recommended GPT Live voice": "Empfohlene GPT-Live-Stimme",
    "Could not review the installation. Check connection and publication status.": "Installation konnte nicht geprüft werden. Verbindung und Veröffentlichung prüfen.",
    "Could not install. Review the configuration and retry.": "Installation fehlgeschlagen. Konfiguration prüfen und erneut versuchen.",
    "Meet {0}": "{0} kennenlernen",
    "Soul and avatar required": "Soul und Avatar erforderlich",
    "Include these features": "Diese Funktionen einschließen",
    "Start with a Soul and avatar.": "Beginne mit Soul und Avatar.",
    "Reviewing installation": "Installation wird geprüft",
    "New profile:": "Neues Profil:",
    "Author:": "Autor:",
    "Selected MCP and plugins execute Python on this device.": "Gewählte MCP und Plugins führen Python auf diesem Gerät aus.",
    "Recommended voice:": "Empfohlene Stimme:",
    "Configure voice authentication in Hermes.": "Sprachauthentifizierung in Hermes einrichten.",
    "Soul and file verification": "Soul- und Dateiprüfung",
    "Install {0}": "{0} installieren",
    "Review again": "Erneut prüfen",
    "Already installed": "Bereits installiert",
    "Installation complete": "Installation abgeschlossen",
    "Configure a model and authentication in Hermes.": "Modell und Authentifizierung in Hermes einrichten.",
    "Your profile is ready.": "Dein Profil ist bereit.",
    "First prompt:": "Erste Frage:",
    "Setup guide": "Einrichtungsanleitung",
    "Open bot chat": "Bot-Chat öffnen",
    "Please check": "Bitte prüfen",
    "Install and submit from Local → default on this device.": "Auf diesem Gerät über Local → default installieren und einreichen.",
    "Could not open the local connection. Please retry.": "Lokale Verbindung konnte nicht geöffnet werden. Erneut versuchen.",
    "Connect to this device’s default": "Mit default dieses Geräts verbinden",
    Idle: "Bereit",
    Thinking: "Denkt nach",
    "Recently working": "Kürzlich aktiv",
    "Status unavailable": "Status nicht verfügbar",
    "{0} avatar": "Avatar von {0}",
    "Confirm installation of {0}": "Installation von {0} bestätigen",
    "Not auditioned": "Noch nicht angehört",
    "Existing voice settings were preserved. Check the profile’s Voice settings.": "Vorhandene Stimmeinstellungen wurden beibehalten. Voice-Einstellungen des Profils prüfen.",
    "Recommended voice {0} included. Check voice authentication.": "Empfohlene Stimme {0} enthalten. Sprachauthentifizierung prüfen.",
    "Voice settings were not included.": "Stimmeinstellungen wurden nicht eingeschlossen.",
    "Validation issue at {0}. Check the package format and required fields.": "Prüfproblem bei {0}. Paketformat und Pflichtfelder prüfen.",
    Avatar: "Avatar",
    "Revision {0}": "Revision {0}",
    "{0} bytes": "{0} Bytes",
    "A bot named {0} already exists. The existing bot was not changed.": "Ein Bot namens {0} existiert bereits. Der vorhandene Bot wurde nicht geändert.",
    "The {0} profile has manual changes, so installation stopped. The existing bot was not changed.": "Das Profil {0} enthält manuelle Änderungen, daher wurde die Installation abgebrochen. Der vorhandene Bot wurde nicht geändert.",
    "The review expired, so nothing was installed. Review the configuration again.": "Die Prüfung ist abgelaufen, daher wurde nichts installiert. Prüfen Sie die Konfiguration erneut.",
    "A profile named {0} already exists, so this bot cannot be installed. The existing bot will not be changed. Rename the existing profile and try again.": "Ein Profil namens {0} existiert bereits, daher kann dieser Bot nicht installiert werden. Der vorhandene Bot wird nicht geändert. Benennen Sie das vorhandene Profil um und versuchen Sie es erneut.",
    "Model: {0} (same as the default profile)": "Modell: {0} (wie im Standardprofil)",
    "Model: the default profile has no model, so this stays empty. Choose a model first after installing.": "Modell: Das Standardprofil hat kein Modell, daher bleibt dies leer. Wählen Sie nach der Installation zuerst ein Modell.",
    "Choose a model first. This bot has no model yet.": "Wählen Sie zuerst ein Modell. Dieser Bot hat noch kein Modell.",
    "You can chat right away with the same model as the default profile ({0}).": "Sie können sofort mit demselben Modell wie im Standardprofil ({0}) chatten.",
    "Language packs: {0} (copied from the default profile)": "Sprachpakete: {0} (aus dem Standardprofil kopiert)",
    "Keys this bot needs are stored only in bot profiles on this computer": "Die benötigten Schlüssel werden nur in Bot-Profilen auf diesem Computer gespeichert",
    "Could not save this key to the default profile; the bot profile has it": "Dieser Schlüssel konnte nicht im Standardprofil gespeichert werden; im Bot-Profil ist er gespeichert",
    "The default profile key file could not be checked safely, so it was left unchanged; the bot profile has this key": "Die Schlüsseldatei des Standardprofils konnte nicht sicher geprüft werden und blieb unverändert; das Bot-Profil enthält diesen Schlüssel",
    "Keys apply from the next new chat (or after restarting Hermes)": "Schlüssel gelten ab dem nächsten neuen Chat (oder nach einem Neustart von Hermes)",
    "The bot profile key file could not be checked safely, so nothing was changed": "Die Schlüsseldatei des Bot-Profils konnte nicht sicher geprüft werden, daher wurde nichts geändert",
    "Service keys": "Benötigte Schlüssel",
    Required: "Erforderlich",
    Optional: "Optional",
    "Get a key": "Schlüssel anfordern",
    "Imported from the default profile ✓": "Aus dem Standardprofil übernommen ✓",
    "Save to the default profile so other bots can use it": "Im Standardprofil speichern, damit andere Bots ihn nutzen können",
    "The default profile value stays as it is": "Der Wert im Standardprofil bleibt unverändert",
    "Required keys left empty: {0}. You can add them after installing.": "{0} erforderliche Schlüssel sind leer. Sie können sie nach der Installation hinzufügen.",
    "Required keys still empty: {0}.": "{0} erforderliche Schlüssel sind noch leer.",
    Set: "Gesetzt",
    Empty: "Leer",
    Skipped: "Übersprungen",
    "Could not check": "Prüfung nicht möglich",
    "Keys needed": "Schlüssel fehlen",
    "Check keys": "Schlüssel prüfen",
    "Taken from the default profile": "Aus dem Standardprofil übernommen",
    "Also saved to the default profile": "Auch im Standardprofil gespeichert",
    "The default profile value was kept": "Der Wert im Standardprofil wurde beibehalten",
    "Add keys": "Schlüssel hinzufügen",
    "Add keys for {0}": "Schlüssel für {0} hinzufügen",
    "Save keys": "Schlüssel speichern",
    "Loading keys": "Schlüssel werden geladen",
    "Bot profile: {0}": "Bot-Profil: {0}",
    "The request was not accepted, so nothing was changed. Update MyBots and retry.": "Die Anfrage wurde nicht angenommen, daher wurde nichts geändert. Aktualisieren Sie MyBots und versuchen Sie es erneut.",
    "A key value is empty. Enter it or leave the key out. Nothing was changed.": "Ein Schlüsselwert ist leer. Geben Sie ihn ein oder lassen Sie den Schlüssel weg. Es wurde nichts geändert.",
    "A key must be one line of at most 4,096 bytes without control characters. Nothing was changed.": "Ein Schlüssel muss eine Zeile mit höchstens 4.096 Byte ohne Steuerzeichen sein. Es wurde nichts geändert.",
    "The keys did not match this bot. Review again; nothing was changed.": "Die Schlüssel passen nicht zu diesem Bot. Prüfen Sie erneut; es wurde nichts geändert.",
    "The bot profile config could not be read safely, so nothing was changed.": "Die Konfiguration des Bot-Profils konnte nicht sicher gelesen werden, daher wurde nichts geändert.",
    "Could not save the keys to the bot profile. Retry.": "Die Schlüssel konnten nicht im Bot-Profil gespeichert werden. Versuchen Sie es erneut.",
    "This bot was not installed by MyBots with keys, so add keys in Hermes settings.": "Dieser Bot wurde nicht von MyBots mit Schlüsseln installiert; fügen Sie die Schlüssel in den Hermes-Einstellungen hinzu.",
    "The installed version changed. Refresh the bot list and retry.": "Die installierte Version hat sich geändert. Aktualisieren Sie die Bot-Liste und versuchen Sie es erneut.",
    "This bot needs a newer MyBots helper. Update MyBots and retry.": "Dieser Bot benötigt einen neueren MyBots-Installationshelfer. Aktualisieren Sie MyBots und versuchen Sie es erneut.",
    "Could not save the keys. Retry.": "Die Schlüssel konnten nicht gespeichert werden. Versuchen Sie es erneut.",
    "This bot was already installed, so the keys you entered were not saved. Add them below with Add keys.": "Dieser Bot war bereits installiert, daher wurden die eingegebenen Schlüssel nicht gespeichert. Fügen Sie sie unten mit „Schlüssel hinzufügen“ hinzu.",
    "Coming soon": "Demnächst",
    "This bot is still being prepared. You can install it once it opens.": "Dieser Bot wird noch vorbereitet. Sie können ihn installieren, sobald er freigegeben ist.",
    "This bot is not open yet.": "Dieser Bot ist noch nicht freigegeben.",
    Update: "Aktualisieren",
    "Update available": "Update verfügbar",
    "Update {0}": "{0} aktualisieren",
    "Reviewing update": "Update wird geprüft",
    "Version {0} → {1}": "Version {0} → {1}",
    "{0} files will be replaced and {1} removed.": "{0} Dateien werden ersetzt und {1} entfernt.",
    "Updates files of the installed local profile; files you added are kept": "Aktualisiert Dateien des installierten lokalen Profils; von Ihnen hinzugefügte Dateien bleiben erhalten",
    "{0} files you changed will be backed up, then replaced by the new version.": "{0} von Ihnen geänderte Dateien werden gesichert und dann durch die neue Version ersetzt.",
    "Keys new in this version. You can skip them and add them later with Add keys.": "Neue Schlüssel in dieser Version. Sie können sie überspringen und später mit Schlüssel hinzufügen eintragen.",
    "Wait until the chat in progress ends, then try again.": "Warten Sie, bis der laufende Chat beendet ist, und versuchen Sie es dann erneut.",
    "Update complete": "Update abgeschlossen",
    "Restart Hermes to apply.": "Starten Sie Hermes neu, um es anzuwenden.",
    "Only a newer version can be installed as an update. Refresh the bot list.": "Als Update kann nur eine neuere Version installiert werden. Aktualisieren Sie die Bot-Liste.",
    "This version cannot be updated in place. Reinstall the bot to get it.": "Diese Version kann nicht direkt aktualisiert werden. Installieren Sie den Bot neu.",
    "The installed bot changed after the review, so nothing was changed. Review the update again.": "Der installierte Bot hat sich nach der Prüfung geändert, daher wurde nichts geändert. Prüfen Sie das Update erneut.",
    "The update failed, and the previous version was restored.": "Das Update ist fehlgeschlagen, die vorherige Version wurde wiederhergestellt.",
    "The update failed and some files could not be restored. The previous files are in the profile’s .mybots-backup folder.": "Das Update ist fehlgeschlagen und einige Dateien konnten nicht wiederhergestellt werden. Die vorherigen Dateien liegen im Ordner .mybots-backup des Profils.",
    "The review expired, so nothing was updated. Review the update again.": "Die Prüfung ist abgelaufen, daher wurde nichts aktualisiert. Prüfen Sie das Update erneut.",
    "This bot was not installed by MyBots, so it cannot be updated here.": "Dieser Bot wurde nicht von MyBots installiert und kann hier nicht aktualisiert werden.",
    "Could not update. Review the update again and retry.": "Aktualisierung nicht möglich. Prüfen Sie das Update erneut und versuchen Sie es noch einmal."
  },
  es: {
    "Could not load installed bots. Please retry.": "No se pudieron cargar los bots instalados. Inténtalo de nuevo.",
    "Could not load the catalog. Installed bots are still available.": "No se pudo cargar el catálogo. Los bots instalados siguen disponibles.",
    "This bot version is no longer published.": "Esta versión del bot no está publicada.",
    "Refresh to check installation status.": "Actualiza para comprobar la instalación.",
    "Find your next AI colleague.": "Encuentra a tu próximo colega de IA.",
    Refresh: "Actualizar",
    "MyBots menu": "Menú de MyBots",
    "Browse bots": "Explorar bots",
    "Installed bots": "Bots instalados",
    "My submissions": "Mis envíos",
    "Connection settings": "Ajustes de conexión",
    "Showing the saved catalog while offline. Reconnect to install.": "Se muestra el catálogo guardado sin conexión. Vuelve a conectarte para instalar.",
    "Last checked:": "Última comprobación:",
    "Search bots": "Buscar bots",
    "Search by name or role": "Buscar por nombre o función",
    "Bot category": "Categoría del bot",
    "All categories": "Todas las categorías",
    Business: "Trabajo",
    Learning: "Aprendizaje",
    "Daily life": "Vida diaria",
    "Loading colleagues": "Cargando colegas",
    "{0} colleagues": "{0} colegas",
    Soul: "Soul",
    Skills: "Habilidades",
    Plugins: "Complementos",
    Voice: "Voz",
    Meet: "Conocer",
    "Motion preview": "Vista previa animada",
    "No matching bots": "No hay bots coincidentes",
    "Try another search or category.": "Prueba otra búsqueda o categoría.",
    "No bots installed yet": "Todavía no hay bots instalados",
    "Find your first colleague in Browse bots.": "Encuentra a tu primer colega en Explorar bots.",
    "Check version": "Comprobar versión",
    Installed: "Instalado",
    "Other version": "Otra versión",
    "Check files": "Comprobar archivos",
    "Open chat": "Abrir chat",
    "Loading submissions": "Cargando envíos",
    "Could not load connection settings. Check the server origin.": "No se pudieron cargar los ajustes. Comprueba la dirección del servidor.",
    "Could not connect. Check key expiry, permissions and storage.": "No se pudo conectar. Comprueba la vigencia, permisos y almacenamiento de la clave.",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "Explorar e instalar no requiere clave. Para enviar bots necesitas una clave API de creador.",
    Server: "Servidor",
    Connection: "Conexión",
    Connected: "Conectado",
    Disconnected: "Desconectado",
    "Environment · provider": "Entorno · proveedor",
    Permissions: "Permisos",
    Expires: "Caduca",
    "Key provider": "Proveedor de claves",
    "bws item ID (recommended)": "ID de elemento bws (recomendado)",
    "OS secure storage": "Almacenamiento seguro del sistema",
    "This session only": "Solo esta sesión",
    "bws item ID": "ID de elemento bws",
    "MyBots API key": "Clave API de MyBots",
    "Session keys stay in backend memory and are cleared on restart.": "Las claves de sesión se guardan en memoria y se borran al reiniciar.",
    "Secure OS storage is unavailable. Choose bws or session storage.": "El almacenamiento seguro no está disponible. Elige bws o la sesión.",
    Connect: "Conectar",
    Disconnect: "Desconectar",
    "Refresh connection": "Actualizar conexión",
    Draft: "Borrador",
    Validated: "Validado",
    Published: "Publicado",
    Unpublished: "No publicado",
    "Bot ID": "ID del bot",
    Version: "Versión",
    Name: "Nombre",
    "English name": "Nombre en inglés",
    Role: "Función",
    Personality: "Personalidad",
    Description: "Descripción",
    "First prompt": "Primera pregunta",
    "Could not load connection details.": "No se pudieron cargar los datos de conexión.",
    "Could not load submissions. Check your key connection.": "No se pudieron cargar los envíos. Comprueba la clave.",
    "The screen or connection changed.": "La pantalla o conexión cambió.",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "No se pudo guardar o validar. Revisa los datos, la clave y el servidor. Reintenta el mismo contenido o actualiza el resultado.",
    "Select MyBots package": "Seleccionar paquete MyBots",
    "ZIP ID or version differs. Create a new draft.": "El ID o versión del ZIP es distinto. Crea otro borrador.",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "Guarda el bot y valida su paquete. Un operador revisa la publicación en el CMS.",
    "Connect a creator API key in Connection settings first.": "Conecta primero una clave API de creador en los ajustes.",
    "Submit a bot": "Enviar un bot",
    "Refresh submissions": "Actualizar envíos",
    "No submissions yet": "Todavía no hay envíos",
    "Start your first draft with a Soul and avatar.": "Crea tu primer borrador con Soul y avatar.",
    "Submission details": "Detalles del envío",
    "New draft": "Nuevo borrador",
    Category: "Categoría",
    "Save details": "Guardar datos",
    "Save draft": "Guardar borrador",
    "Soul and avatar": "Soul y avatar",
    "Select bot avatar": "Seleccionar avatar del bot",
    "Choose avatar": "Elegir avatar",
    "Avatar selected": "Avatar seleccionado",
    "PNG/JPEG · square, 128–2048px": "PNG/JPEG · cuadrado, 128–2048px",
    "Save Soul and avatar package": "Guardar paquete de Soul y avatar",
    "Full package": "Paquete completo",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "Elige un ZIP completo para bots con habilidades, MCP, complementos o voz.",
    "Choose package": "Elegir paquete",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "Esta versión de Hermes no permite elegir archivos. Súbelos mediante el CMS.",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "Los datos del ZIP difieren. Aplícalos antes de subirlo.",
    "Apply ZIP details and upload": "Aplicar datos del ZIP y subir",
    Cancel: "Cancelar",
    "Validate package": "Validar paquete",
    "Validated · awaiting CMS review and publication.": "Validado · pendiente de revisión y publicación en CMS.",
    "Published · available in the gallery.": "Publicado · disponible en la galería.",
    "MCP · runs local Python": "MCP · ejecuta Python local",
    "Plugin · runs local Python": "Complemento · ejecuta Python local",
    "Recommended GPT Live voice": "Voz GPT Live recomendada",
    "Could not review the installation. Check connection and publication status.": "No se pudo revisar la instalación. Comprueba la conexión y publicación.",
    "Could not install. Review the configuration and retry.": "No se pudo instalar. Revisa la configuración y reintenta.",
    "Meet {0}": "Conocer a {0}",
    "Soul and avatar required": "Soul y avatar obligatorios",
    "Include these features": "Incluir estas funciones",
    "Start with a Soul and avatar.": "Empieza con Soul y avatar.",
    "Reviewing installation": "Revisando instalación",
    "New profile:": "Nuevo perfil:",
    "Author:": "Autor:",
    "Selected MCP and plugins execute Python on this device.": "Los MCP y complementos elegidos ejecutan Python en este dispositivo.",
    "Recommended voice:": "Voz recomendada:",
    "Configure voice authentication in Hermes.": "Configura la autenticación de voz en Hermes.",
    "Soul and file verification": "Soul y verificación de archivos",
    "Install {0}": "Instalar {0}",
    "Review again": "Revisar de nuevo",
    "Already installed": "Ya está instalado",
    "Installation complete": "Instalación completada",
    "Configure a model and authentication in Hermes.": "Configura el modelo y la autenticación en Hermes.",
    "Your profile is ready.": "Tu perfil está listo.",
    "First prompt:": "Primera pregunta:",
    "Setup guide": "Guía de configuración",
    "Open bot chat": "Abrir chat del bot",
    "Please check": "Comprueba los datos",
    "Install and submit from Local → default on this device.": "Instala y envía desde Local → default en este dispositivo.",
    "Could not open the local connection. Please retry.": "No se pudo abrir la conexión local. Inténtalo de nuevo.",
    "Connect to this device’s default": "Conectar al default de este dispositivo",
    Idle: "En espera",
    Thinking: "Pensando",
    "Recently working": "Actividad reciente",
    "Status unavailable": "Estado no disponible",
    "{0} avatar": "Avatar de {0}",
    "Confirm installation of {0}": "Confirmar instalación de {0}",
    "Not auditioned": "Sin prueba de escucha",
    "Existing voice settings were preserved. Check the profile’s Voice settings.": "Se conservaron los ajustes de voz existentes. Comprueba los del perfil.",
    "Recommended voice {0} included. Check voice authentication.": "Se incluyó la voz {0}. Comprueba la autenticación de voz.",
    "Voice settings were not included.": "No se incluyeron ajustes de voz.",
    "Validation issue at {0}. Check the package format and required fields.": "Problema de validación en {0}. Revisa el formato y campos obligatorios.",
    Avatar: "Avatar",
    "Revision {0}": "Revisión {0}",
    "{0} bytes": "{0} bytes",
    "A bot named {0} already exists. The existing bot was not changed.": "Ya existe un bot llamado {0}. El bot existente no se modificó.",
    "The {0} profile has manual changes, so installation stopped. The existing bot was not changed.": "El perfil {0} tiene cambios manuales, así que la instalación se detuvo. El bot existente no se modificó.",
    "The review expired, so nothing was installed. Review the configuration again.": "La revisión caducó, así que no se instaló nada. Revisa la configuración de nuevo.",
    "A profile named {0} already exists, so this bot cannot be installed. The existing bot will not be changed. Rename the existing profile and try again.": "Ya existe un perfil llamado {0}, así que no se puede instalar este bot. El bot existente no se modificará. Cambia el nombre del perfil existente e inténtalo de nuevo.",
    "Model: {0} (same as the default profile)": "Modelo: {0} (igual que el perfil predeterminado)",
    "Model: the default profile has no model, so this stays empty. Choose a model first after installing.": "Modelo: el perfil predeterminado no tiene modelo, así que queda vacío. Elige un modelo primero después de instalar.",
    "Choose a model first. This bot has no model yet.": "Elige un modelo primero. Este bot aún no tiene modelo.",
    "You can chat right away with the same model as the default profile ({0}).": "Puedes chatear de inmediato con el mismo modelo que el perfil predeterminado ({0}).",
    "Language packs: {0} (copied from the default profile)": "Paquetes de idioma: {0} (copiados del perfil predeterminado)",
    "Keys this bot needs are stored only in bot profiles on this computer": "Las claves que necesita este bot se guardan solo en los perfiles de bots de este equipo",
    "Could not save this key to the default profile; the bot profile has it": "No se pudo guardar esta clave en el perfil predeterminado; el perfil del bot sí la tiene",
    "The default profile key file could not be checked safely, so it was left unchanged; the bot profile has this key": "No se pudo comprobar de forma segura el archivo de claves del perfil predeterminado, así que no se modificó; el perfil del bot tiene esta clave",
    "Keys apply from the next new chat (or after restarting Hermes)": "Las claves se aplican a partir del próximo chat nuevo (o tras reiniciar Hermes)",
    "The bot profile key file could not be checked safely, so nothing was changed": "No se pudo comprobar de forma segura el archivo de claves del perfil del bot, así que no se cambió nada",
    "Service keys": "Claves necesarias",
    Required: "Obligatoria",
    Optional: "Opcional",
    "Get a key": "Obtener una clave",
    "Imported from the default profile ✓": "Importada del perfil predeterminado ✓",
    "Save to the default profile so other bots can use it": "Guardar en el perfil predeterminado para otros bots",
    "The default profile value stays as it is": "El valor del perfil predeterminado se mantiene",
    "Required keys left empty: {0}. You can add them after installing.": "Hay {0} claves obligatorias vacías. Puedes añadirlas después de instalar.",
    "Required keys still empty: {0}.": "Todavía hay {0} claves obligatorias vacías.",
    Set: "Configurada",
    Empty: "Vacía",
    Skipped: "Omitida",
    "Could not check": "No se pudo comprobar",
    "Keys needed": "Faltan claves",
    "Check keys": "Revisar claves",
    "Taken from the default profile": "Tomada del perfil predeterminado",
    "Also saved to the default profile": "También guardada en el perfil predeterminado",
    "The default profile value was kept": "Se mantuvo el valor del perfil predeterminado",
    "Add keys": "Añadir claves",
    "Add keys for {0}": "Añadir claves para {0}",
    "Save keys": "Guardar claves",
    "Loading keys": "Cargando claves",
    "Bot profile: {0}": "Perfil del bot: {0}",
    "The request was not accepted, so nothing was changed. Update MyBots and retry.": "No se aceptó la solicitud, así que no se cambió nada. Actualiza MyBots y vuelve a intentarlo.",
    "A key value is empty. Enter it or leave the key out. Nothing was changed.": "Hay un valor de clave vacío. Escríbelo o deja esa clave sin rellenar. No se cambió nada.",
    "A key must be one line of at most 4,096 bytes without control characters. Nothing was changed.": "Una clave debe ser una sola línea de 4.096 bytes como máximo, sin caracteres de control. No se cambió nada.",
    "The keys did not match this bot. Review again; nothing was changed.": "Las claves no coinciden con este bot. Revisa de nuevo; no se cambió nada.",
    "The bot profile config could not be read safely, so nothing was changed.": "No se pudo leer de forma segura la configuración del perfil del bot, así que no se cambió nada.",
    "Could not save the keys to the bot profile. Retry.": "No se pudieron guardar las claves en el perfil del bot. Vuelve a intentarlo.",
    "This bot was not installed by MyBots with keys, so add keys in Hermes settings.": "MyBots no instaló este bot con claves; añade las claves en los ajustes de Hermes.",
    "The installed version changed. Refresh the bot list and retry.": "La versión instalada cambió. Actualiza la lista de bots y vuelve a intentarlo.",
    "This bot needs a newer MyBots helper. Update MyBots and retry.": "Este bot necesita un asistente de MyBots más reciente. Actualiza MyBots y vuelve a intentarlo.",
    "Could not save the keys. Retry.": "No se pudieron guardar las claves. Vuelve a intentarlo.",
    "This bot was already installed, so the keys you entered were not saved. Add them below with Add keys.": "Este bot ya estaba instalado, así que no se guardaron las claves que escribiste. Añádelas abajo con «Añadir claves».",
    "Coming soon": "Próximamente",
    "This bot is still being prepared. You can install it once it opens.": "Este bot aún se está preparando. Podrás instalarlo cuando se abra.",
    "This bot is not open yet.": "Este bot aún no está abierto.",
    Update: "Actualizar",
    "Update available": "Actualización disponible",
    "Update {0}": "Actualizar {0}",
    "Reviewing update": "Revisando la actualización",
    "Version {0} → {1}": "Versión {0} → {1}",
    "{0} files will be replaced and {1} removed.": "Se reemplazarán {0} archivos y se eliminarán {1}.",
    "Updates files of the installed local profile; files you added are kept": "Actualiza los archivos del perfil local instalado; los archivos que añadiste se conservan",
    "{0} files you changed will be backed up, then replaced by the new version.": "{0} archivos que modificaste se guardarán como copia de seguridad y luego se reemplazarán por la nueva versión.",
    "Keys new in this version. You can skip them and add them later with Add keys.": "Claves nuevas en esta versión. Puedes omitirlas y añadirlas más tarde con Añadir claves.",
    "Wait until the chat in progress ends, then try again.": "Espera a que termine la conversación en curso y vuelve a intentarlo.",
    "Update complete": "Actualización completada",
    "Restart Hermes to apply.": "Reinicia Hermes para aplicarla.",
    "Only a newer version can be installed as an update. Refresh the bot list.": "Solo se puede instalar una versión más reciente como actualización. Actualiza la lista de bots.",
    "This version cannot be updated in place. Reinstall the bot to get it.": "Esta versión no se puede actualizar en el sitio. Reinstala el bot.",
    "The installed bot changed after the review, so nothing was changed. Review the update again.": "El bot instalado cambió después de la revisión, así que no se cambió nada. Revisa la actualización de nuevo.",
    "The update failed, and the previous version was restored.": "La actualización falló y se restauró la versión anterior.",
    "The update failed and some files could not be restored. The previous files are in the profile’s .mybots-backup folder.": "La actualización falló y algunos archivos no se pudieron restaurar. Los archivos anteriores están en la carpeta .mybots-backup del perfil.",
    "The review expired, so nothing was updated. Review the update again.": "La revisión caducó, así que no se actualizó nada. Revisa la actualización de nuevo.",
    "This bot was not installed by MyBots, so it cannot be updated here.": "MyBots no instaló este bot, así que no se puede actualizar aquí.",
    "Could not update. Review the update again and retry.": "No se pudo actualizar. Revisa la actualización de nuevo y vuelve a intentarlo."
  }
};

// packages/hermes-plugin/desktop/i18n.ts
var supportedLocales = Object.keys(locales_default);
var messageIds = Object.fromEntries(Object.keys(locales_default.en).map((key, index) => [key, "message" + index]));
function normalizePluginLocale(value) {
  return Object.hasOwn(locales_default, value) ? value : "en";
}
var formatMessage = (message, args) => message.replace(/\{(\d+)\}/g, (whole, index) => args[Number(index)] === void 0 ? whole : String(args[Number(index)]));
function registerMyBotsI18n(ctx) {
  ctx.i18n?.register(Object.fromEntries(supportedLocales.map((locale) => [locale, Object.fromEntries(Object.entries(locales_default[locale]).map(([key, value]) => [messageIds[key], value]))])));
}
function useMyBots() {
  const hostLocale = typeof sdk.useI18n === "function" ? sdk.useI18n().locale : "en";
  const locale = normalizePluginLocale(hostLocale);
  const scoped = typeof sdk.usePluginI18n === "function" ? sdk.usePluginI18n("mybots") : null;
  const t = (key, ...args) => {
    const id = messageIds[key], resolved = id ? scoped?.(id) : void 0;
    if (resolved && resolved !== id) return formatMessage(resolved, args);
    const messages = locales_default[locale];
    return formatMessage(messages[key] ?? locales_default.en[key] ?? key, args);
  };
  return { locale, t, dir: locale === "ar" ? "rtl" : "ltr", contentLocale: locale === "ko" ? "ko" : "en" };
}

// packages/hermes-plugin/desktop/submissions-page.tsx
import { useEffect as useEffect2, useRef, useState as useState2 } from "react";

// packages/contracts/src/voice.ts
var VOICE_IDS = ["marin", "cedar", "quartz", "ripple", "vesper", "willow", "stone", "gleam", "meridian", "bossa", "tempo", "beacon", "delta", "cinder"];

// packages/contracts/env-denylist.json
var env_denylist_default = {
  source: "hermes-agent hermes_cli/config.py _ENV_VAR_NAME_DENY_PREFIXES and _ENV_VAR_NAME_DENYLIST (lines 94-131)",
  prefixes: [
    "LD_",
    "DYLD_",
    "GIT_CONFIG_"
  ],
  names: [
    "BASH_ENV",
    "BROWSER",
    "CLASSPATH",
    "DYLD_FALLBACK_FRAMEWORK_PATH",
    "DYLD_FALLBACK_LIBRARY_PATH",
    "DYLD_FRAMEWORK_PATH",
    "DYLD_INSERT_LIBRARIES",
    "DYLD_LIBRARY_PATH",
    "EDITOR",
    "ENV",
    "EXINIT",
    "GIT_ASKPASS",
    "GIT_DIR",
    "GIT_EDITOR",
    "GIT_EXEC_PATH",
    "GIT_EXTERNAL_DIFF",
    "GIT_PAGER",
    "GIT_PROXY_COMMAND",
    "GIT_SEQUENCE_EDITOR",
    "GIT_SHELL",
    "GIT_SSH",
    "GIT_SSH_COMMAND",
    "GIT_TEMPLATE_DIR",
    "GOFLAGS",
    "HERMES_ACCEPT_HOOKS",
    "HERMES_CONFIG",
    "HERMES_CONFIG_PATH",
    "HERMES_COPILOT_ACP_ARGS",
    "HERMES_COPILOT_ACP_COMMAND",
    "HERMES_CRON_SESSION",
    "HERMES_ENV",
    "HERMES_ENV_PATH",
    "HERMES_EXEC_ASK",
    "HERMES_GATEWAY_SESSION",
    "HERMES_HOME",
    "HERMES_INTERACTIVE",
    "HERMES_OPTIONAL_MCPS",
    "HERMES_PROFILE",
    "HERMES_REDACT_SECRETS",
    "HERMES_SESSION_KEY",
    "HERMES_SESSION_PLATFORM",
    "HERMES_SINGLE_QUERY_SESSION",
    "HERMES_YOLO_MODE",
    "JAVA_TOOL_OPTIONS",
    "JDK_JAVA_OPTIONS",
    "LD_AUDIT",
    "LD_DEBUG",
    "LD_LIBRARY_PATH",
    "LD_PRELOAD",
    "MANPAGER",
    "NODE_OPTIONS",
    "NODE_PATH",
    "PAGER",
    "PATH",
    "PERL5LIB",
    "PERL5OPT",
    "PERLLIB",
    "PROMPT_COMMAND",
    "PYTHONBREAKPOINT",
    "PYTHONCASEOK",
    "PYTHONEXECUTABLE",
    "PYTHONHOME",
    "PYTHONNOUSERSITE",
    "PYTHONPATH",
    "PYTHONSTARTUP",
    "PYTHONUSERBASE",
    "RUBYLIB",
    "RUBYOPT",
    "RUSTFLAGS",
    "SHELL",
    "SSH_ASKPASS",
    "SUDO_ASKPASS",
    "VIMINIT",
    "VISUAL",
    "ZDOTDIR",
    "_JAVA_OPTIONS"
  ]
};

// packages/contracts/src/index.ts
var BOT_ID = /^[a-z][a-z0-9-]{0,39}$/;
var VERSION = /^\d+\.\d+\.\d+$/;
var DENY_NAMES = new Set(env_denylist_default.names);
var DENY_PREFIXES = env_denylist_default.prefixes;
function parseInstallLink(input) {
  const u = new URL(input);
  if (u.protocol !== "hermes:" || u.hostname !== "mybots" || u.pathname !== "/install" || u.hash || u.username || u.password || u.port) throw new Error("Invalid install link");
  const entries = [...u.searchParams.keys()];
  if (entries.length !== 2 || !entries.includes("bot") || !entries.includes("version")) throw new Error("Only bot and version are supported");
  const bot = u.searchParams.get("bot"), version = u.searchParams.get("version");
  if (!BOT_ID.test(bot) || !VERSION.test(version)) throw new Error("Invalid bot or version");
  return { bot, version };
}
function installLink(bot, version) {
  const u = `hermes://mybots/install?bot=${encodeURIComponent(bot)}&version=${encodeURIComponent(version)}`;
  parseInstallLink(u);
  return u;
}

// packages/contracts/src/catalog.ts
function record(value, keys) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Expected an object");
  const obj = value;
  if (Object.keys(obj).length !== keys.length || keys.some((k) => !Object.hasOwn(obj, k))) throw new Error("Unexpected or missing catalog fields");
  return obj;
}
function text(value, max = 1e3) {
  if (typeof value !== "string" || !value.trim() || value.length > max) throw new Error("Invalid catalog text");
}
function identifier(value) {
  text(value, 64);
  if (!BOT_ID.test(value)) throw new Error("Invalid identifier");
}
function strings(value) {
  if (!Array.isArray(value) || value.some((v) => typeof v !== "string") || new Set(value).size !== value.length) throw new Error("Invalid unique string list");
}
function parseAuthoredCatalog(input) {
  if (!Array.isArray(input) || !input.length || input.length > 200) throw new Error("Invalid catalog list");
  const ids = /* @__PURE__ */ new Set();
  for (const entry of input) {
    const b = record(entry, ["id", "version", "name", "englishName", "role", "personality", "description", "category", "firstPrompt", "optional", "skillId", "mcp", "pluginId", "external", "voice"]);
    identifier(b.id);
    identifier(b.skillId);
    text(b.version, 40);
    if (!VERSION.test(b.version) || ids.has(b.id)) throw new Error("Invalid version or duplicate profile");
    ids.add(b.id);
    for (const key of ["name", "englishName", "role", "personality", "description", "firstPrompt"]) text(b[key], key === "name" || key === "englishName" ? 80 : 1e3);
    if (!["business", "learning", "daily"].includes(String(b.category))) throw new Error("Unknown category");
    strings(b.optional);
    const order = ["skills", "mcp", "plugin", "voice"];
    if (b.optional.some((v, i) => !order.includes(v) || i > 0 && order.indexOf(v) <= order.indexOf(b.optional[i - 1]))) throw new Error("Invalid component order");
    if (b.optional.includes("mcp") !== (b.mcp !== null) || b.optional.includes("plugin") !== (b.pluginId !== null) || b.optional.includes("voice") !== (b.voice !== null)) throw new Error("Component declaration mismatch");
    if (b.mcp !== null) {
      const mcp = record(b.mcp, ["serverId", "tools"]);
      identifier(mcp.serverId);
      strings(mcp.tools);
      if (!mcp.tools.length || mcp.tools.length > 16 || mcp.tools.some((t) => !/^[a-z][a-z0-9_]{0,63}$/.test(t))) throw new Error("Invalid MCP tools");
    }
    if (b.voice !== null) {
      const v = record(b.voice, ["id", "style", "audition"]);
      if (!VOICE_IDS.some((id) => id === v.id) || v.audition !== "not-tested") throw new Error("Invalid voice metadata");
      text(v.style, 2e3);
    }
    if (b.pluginId !== null) identifier(b.pluginId);
    if (!Array.isArray(b.external) || b.external.length > 8) throw new Error("Invalid external guides");
    for (const link of b.external) {
      const e = record(link, ["service", "label", "guide", "requirement", "status"]);
      if (!["figma", "notion", "github", "context7", "todoist", "web-search"].includes(String(e.service)) || e.status !== "not-connected") throw new Error("Invalid external service state");
      text(e.label, 80);
      text(e.guide, 1e3);
      text(e.requirement, 1e3);
      const url = new URL(e.guide);
      if (url.protocol !== "https:" || !url.hostname || url.username || url.password) throw new Error("Unsafe external guide");
    }
  }
  return structuredClone(input);
}
function filterBots(bots, query, category) {
  const q = query.normalize("NFKC").trim().toLocaleLowerCase();
  return bots.filter((b) => (category === "all" || b.category === category) && [b.name, b.englishName, b.role, b.personality, b.description].join(" ").normalize("NFKC").toLocaleLowerCase().includes(q));
}

// packages/contracts/src/market.ts
var SUBMISSION_SCOPES = ["submissions:read", "submissions:write"];
var CMS_SCOPES = ["bots:read", "bots:write", "bots:publish", "availability:write"];
var SCOPES = [...SUBMISSION_SCOPES, ...CMS_SCOPES];
function parseMetadata(input) {
  return structuredClone(parseAuthoredCatalog([input])[0]);
}
function canonicalJson(value) {
  if (Array.isArray(value)) return "[" + value.map(canonicalJson).join(",") + "]";
  if (value !== null && typeof value === "object") return "{" + Object.keys(value).sort().map((k) => JSON.stringify(k) + ":" + canonicalJson(value[k])).join(",") + "}";
  return JSON.stringify(value);
}

// packages/hermes-plugin/desktop/market-api.ts
var MarketApi = class {
  constructor(ctx) {
    this.ctx = ctx;
  }
  connection() {
    return this.ctx.rest("/connection");
  }
  connect(body) {
    return this.ctx.rest("/connection", { method: "POST", body, timeoutMs: 3e4 });
  }
  disconnect() {
    return this.ctx.rest("/connection", { method: "DELETE" });
  }
  submissions() {
    return this.ctx.rest("/submissions");
  }
  create(requestId, metadata) {
    return this.ctx.rest("/submissions", { method: "POST", body: { requestId, metadata } });
  }
  patch(id, revision, metadata) {
    return this.ctx.rest("/submissions/" + id, { method: "PATCH", body: { revision, metadata } });
  }
  packageMetadata(path) {
    return this.ctx.rest("/package-metadata", { method: "POST", body: { path } });
  }
  upload(id, revision, path) {
    return this.ctx.rest("/submissions/" + id + "/upload", { method: "POST", body: { revision, path }, timeoutMs: 45e3 });
  }
  minimal(id, revision, soul, avatarPath) {
    return this.ctx.rest("/submissions/" + id + "/minimal", { method: "POST", body: { revision, soul, avatarPath }, timeoutMs: 45e3 });
  }
  validate(id, revision) {
    return this.ctx.rest("/submissions/" + id + "/validate", { method: "POST", body: { revision } });
  }
  load() {
    return this.ctx.rest("/market");
  }
  presentations(locale) {
    return this.ctx.rest("/presentations/" + locale);
  }
  installed() {
    return this.ctx.rest("/installed");
  }
  review(bot, version, components) {
    return this.ctx.rest("/review", { method: "POST", body: { bot, version, components }, timeoutMs: 12e4 });
  }
  install(token, secrets) {
    return this.ctx.rest("/install", { method: "POST", body: secrets && Object.keys(secrets).length ? { token, secrets } : { token }, timeoutMs: 9e4 });
  }
  reviewUpdate(bot, version) {
    return this.ctx.rest("/review-update", { method: "POST", body: { bot, version }, timeoutMs: 12e4 });
  }
  update(token, secrets) {
    return this.ctx.rest("/update", { method: "POST", body: secrets && Object.keys(secrets).length ? { token, secrets } : { token }, timeoutMs: 9e4 });
  }
  updateSecrets(bot, version, secrets) {
    return this.ctx.rest("/secrets", { method: "POST", body: { bot, version, secrets }, timeoutMs: 3e4 });
  }
};

// packages/hermes-plugin/desktop/market-ui.tsx
import { useEffect, useState } from "react";
import { host, Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, ErrorState } from "@hermes/plugin-sdk";
import { Button as Button2, Input, Textarea, Badge, Loader, EmptyState, SearchField, Tabs, TabsList, TabsTrigger, Checkbox, Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Codicon } from "@hermes/plugin-sdk";
import { jsx, jsxs } from "react/jsx-runtime";
var isLocal = () => host.state.connectionId.get() === "local" && host.state.profile.get() === "default";
function useLocal() {
  const [local, setLocal] = useState(isLocal);
  useEffect(() => {
    const change = () => setLocal(isLocal());
    const a = host.state.connectionId.listen(change), b = host.state.profile.listen(change);
    return () => {
      a();
      b();
    };
  }, []);
  return local;
}
function Choice({ label, value, onChange, options, disabled = false }) {
  const { dir } = useMyBots();
  return /* @__PURE__ */ jsxs(Select, { dir, value, onValueChange: onChange, disabled, children: [
    /* @__PURE__ */ jsx(SelectTrigger, { "aria-label": label, children: /* @__PURE__ */ jsx(SelectValue, {}) }),
    /* @__PURE__ */ jsx(SelectContent, { children: options.map(([v, text2]) => /* @__PURE__ */ jsx(SelectItem, { value: v, children: text2 }, v)) })
  ] });
}
function Failure({ message }) {
  const { t } = useMyBots();
  return /* @__PURE__ */ jsx("div", { role: "alert", className: "mb-error", children: /* @__PURE__ */ jsx(ErrorState, { title: t("Please check"), description: message }) });
}
function LocalNotice() {
  const { t } = useMyBots();
  const [error, setError] = useState("");
  return /* @__PURE__ */ jsxs("section", { role: "status", className: "mb-notice", children: [
    /* @__PURE__ */ jsx("p", { children: t("Install and submit from Local → default on this device.") }),
    /* @__PURE__ */ jsx(Button, { variant: "secondary", onClick: async () => {
      try {
        await host.ensureAgent("local", "default");
      } catch {
        setError("Could not open the local connection. Please retry.");
      }
    }, children: t("Connect to this device’s default") }),
    error && /* @__PURE__ */ jsx(Failure, { message: t(error) })
  ] });
}

// packages/hermes-plugin/desktop/review-fence.ts
var ReviewFence = class {
  generation = 0;
  begin() {
    return ++this.generation;
  }
  isCurrent(ticket) {
    return ticket === this.generation;
  }
  invalidate() {
    this.generation++;
  }
  async run(request) {
    const generation = ++this.generation;
    const result = await request();
    return generation === this.generation ? result : void 0;
  }
};

// packages/hermes-plugin/desktop/submissions-page.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var states = { draft: "Draft", validated: "Validated", published: "Published", unpublished: "Unpublished" };
var empty = () => ({ id: "", version: "0.1.0", name: "", englishName: "", role: "", personality: "", description: "", category: "daily", firstPrompt: "", optional: [], skillId: "", mcp: null, pluginId: null, external: [], voice: null });
var fields = [["id", "Bot ID"], ["version", "Version"], ["name", "Name"], ["englishName", "English name"], ["role", "Role"], ["personality", "Personality"], ["description", "Description"], ["firstPrompt", "First prompt"]];
function SubmissionsPage({ ctx }) {
  const { t } = useMyBots();
  const [connection, setConnection] = useState2(null), [drafts, setDrafts] = useState2([]), [draft, setDraft] = useState2(null), [form, setForm] = useState2(empty), [soul, setSoul] = useState2(""), [avatar, setAvatar] = useState2(null), [zip, setZip] = useState2(null), [editing, setEditing] = useState2(false), [busy, setBusy] = useState2(false), [error, setError] = useState2(""), [reload, setReload] = useState2(0);
  const fence = useRef(new ReviewFence()), posting = useRef(null), requests = useRef(/* @__PURE__ */ new Map()), local = useLocal();
  useEffect2(() => {
    const ticket = fence.current.begin();
    posting.current = null;
    setBusy(false);
    setDrafts([]);
    setConnection(null);
    setDraft(null);
    setEditing(false);
    setAvatar(null);
    setZip(null);
    setSoul("");
    setError("");
    const api = new MarketApi(ctx);
    api.connection().then(async (c) => {
      if (!fence.current.isCurrent(ticket)) return;
      setConnection(c);
      if (c.connected) {
        const ds = await api.submissions();
        if (fence.current.isCurrent(ticket)) setDrafts(ds);
      }
    }, () => {
      if (fence.current.isCurrent(ticket)) setError("Could not load connection details.");
    }).catch(() => {
      if (fence.current.isCurrent(ticket)) setError("Could not load submissions. Check your key connection.");
    });
    return () => fence.current.invalidate();
  }, [ctx, local, reload]);
  function accept(next) {
    setDraft(next);
    setForm(next.metadata);
    setDrafts((ds) => [next, ...ds.filter((d) => d.id !== next.id)]);
  }
  async function run(action) {
    if (posting.current !== null || !isLocal()) return;
    const ticket = fence.current.begin();
    posting.current = ticket;
    setBusy(true);
    setError("");
    try {
      const guarded = new Proxy(new MarketApi(ctx), { get(target, key) {
        const value = Reflect.get(target, key);
        return typeof value === "function" ? async (...args) => {
          if (!fence.current.isCurrent(ticket) || !isLocal()) throw Error("The screen or connection changed.");
          const result = await value.apply(target, args);
          if (!fence.current.isCurrent(ticket) || !isLocal()) throw Error("The screen or connection changed.");
          return result;
        } : value;
      } });
      const next = await action(guarded);
      if (fence.current.isCurrent(ticket) && isLocal() && next) accept(next);
    } catch {
      if (fence.current.isCurrent(ticket)) setError("Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.");
    } finally {
      if (posting.current === ticket) posting.current = null;
      if (fence.current.isCurrent(ticket)) setBusy(false);
    }
  }
  function metadata() {
    return parseMetadata({ ...form, englishName: form.englishName || form.id, skillId: form.skillId || form.id });
  }
  async function save(api) {
    const m = metadata();
    if (draft) return api.patch(draft.id, draft.revision, m);
    const key = canonicalJson(m);
    let id = requests.current.get(key);
    if (!id) {
      id = crypto.randomUUID();
      requests.current.set(key, id);
    }
    return api.create(id, m);
  }
  async function pickZip() {
    if (posting.current !== null || !draft || !ctx.os?.pickOpenPath || !isLocal()) return;
    await run(async (api) => {
      const path = await ctx.os.pickOpenPath({ title: t("Select MyBots package"), filters: [{ name: "MyBots ZIP", extensions: ["zip"] }] });
      if (!path) return;
      const m = await api.packageMetadata(path);
      if (m.id !== draft.metadata.id || m.version !== draft.metadata.version) {
        setError("ZIP ID or version differs. Create a new draft.");
        return;
      }
      if (canonicalJson(m) !== canonicalJson(draft.metadata)) {
        setZip({ path, metadata: m });
        return;
      }
      return api.upload(draft.id, draft.revision, path);
    });
  }
  return /* @__PURE__ */ jsxs2("section", { className: "mb-stack", children: [
    /* @__PURE__ */ jsxs2("div", { className: "mb-section", children: [
      /* @__PURE__ */ jsx2("h2", { children: t("My submissions") }),
      /* @__PURE__ */ jsx2("p", { className: "mb-muted", children: t("Save your bot and validate its package. An operator reviews publication in the CMS.") })
    ] }),
    !local && /* @__PURE__ */ jsx2(LocalNotice, {}),
    error && /* @__PURE__ */ jsx2(Failure, { message: t(error) }),
    connection && !connection.connected && /* @__PURE__ */ jsx2("p", { role: "status", children: t("Connect a creator API key in Connection settings first.") }),
    connection?.connected && /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsxs2("div", { className: "mb-actions", children: [
        /* @__PURE__ */ jsx2(Button2, { disabled: busy || !local || !connection.scopes.includes("submissions:write"), onClick: () => {
          fence.current.invalidate();
          setDraft(null);
          setForm(empty());
          setSoul("");
          setAvatar(null);
          setZip(null);
          setEditing(true);
        }, children: t("Submit a bot") }),
        /* @__PURE__ */ jsx2(Button2, { variant: "ghost", disabled: busy, onClick: () => setReload((n) => n + 1), children: t("Refresh submissions") })
      ] }),
      /* @__PURE__ */ jsx2("div", { className: "mb-drafts", children: drafts.map((d) => /* @__PURE__ */ jsxs2(Button2, { variant: draft?.id === d.id ? "secondary" : "ghost", disabled: busy, onClick: () => {
        fence.current.invalidate();
        accept(d);
        setSoul("");
        setAvatar(null);
        setZip(null);
        setEditing(true);
      }, children: [
        d.metadata.name,
        " · ",
        t(states[d.state])
      ] }, d.id)) }),
      !drafts.length && !editing && /* @__PURE__ */ jsx2(EmptyState, { title: t("No submissions yet"), description: t("Start your first draft with a Soul and avatar.") }),
      editing && /* @__PURE__ */ jsxs2("form", { className: "mb-form", onSubmit: (e) => {
        e.preventDefault();
        void run(save);
      }, children: [
        /* @__PURE__ */ jsxs2("div", { className: "mb-actions", children: [
          /* @__PURE__ */ jsx2("h3", { children: draft ? t("Submission details") : t("New draft") }),
          draft && /* @__PURE__ */ jsxs2(Badge, { variant: "muted", children: [
            t(states[draft.state]),
            " · ",
            t("Revision {0}", draft.revision)
          ] })
        ] }),
        /* @__PURE__ */ jsxs2("fieldset", { disabled: busy || !local || !connection.scopes.includes("submissions:write") || draft?.state === "published", children: [
          /* @__PURE__ */ jsxs2("div", { className: "mb-fields", children: [
            fields.map(([key, label]) => /* @__PURE__ */ jsxs2("label", { className: "mb-field" + (["description", "firstPrompt"].includes(key) ? " mb-field-wide" : ""), children: [
              t(label),
              /* @__PURE__ */ jsx2(Input, { "aria-label": t(label), value: form[key], disabled: !!draft && (key === "id" || key === "version"), required: key !== "englishName", maxLength: key === "name" || key === "englishName" ? 80 : 1e3, onChange: (e) => setForm((f) => ({ ...f, [key]: e.target.value, ...key === "id" && !draft ? { skillId: e.target.value } : {} })) })
            ] }, key)),
            /* @__PURE__ */ jsxs2("label", { className: "mb-field", children: [
              t("Category"),
              /* @__PURE__ */ jsx2(Choice, { label: t("Category"), value: form.category, onChange: (v) => setForm((f) => ({ ...f, category: v })), options: [["daily", t("Daily life")], ["business", t("Business")], ["learning", t("Learning")]] })
            ] })
          ] }),
          /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(Button2, { type: "submit", loading: busy, children: draft ? t("Save details") : t("Save draft") }) }),
          draft && /* @__PURE__ */ jsxs2(Fragment, { children: [
            /* @__PURE__ */ jsx2("hr", { className: "mb-divider" }),
            /* @__PURE__ */ jsx2("h3", { children: t("Soul and avatar") }),
            /* @__PURE__ */ jsxs2("label", { className: "mb-field", children: [
              t("Soul"),
              /* @__PURE__ */ jsx2(Textarea, { "aria-label": t("Soul"), rows: 8, value: soul, onChange: (e) => setSoul(e.target.value) })
            ] }),
            /* @__PURE__ */ jsxs2("div", { className: "mb-actions", children: [
              /* @__PURE__ */ jsx2(Button2, { variant: "secondary", type: "button", disabled: !ctx.os?.pickOpenPath, onClick: () => void run(async (api) => {
                const p = await ctx.os.pickOpenPath({ title: t("Select bot avatar"), filters: [{ name: t("Avatar"), extensions: ["png", "jpg", "jpeg"] }] });
                if (p) {
                  await api.connection();
                  setAvatar(p);
                }
              }), children: t("Choose avatar") }),
              /* @__PURE__ */ jsx2("span", { className: "mb-muted", children: avatar ? t("Avatar selected") : t("PNG/JPEG · square, 128–2048px") })
            ] }),
            /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(Button2, { variant: "secondary", type: "button", disabled: !avatar || !soul.trim(), onClick: () => void run((api) => api.minimal(draft.id, draft.revision, soul, avatar)), children: t("Save Soul and avatar package") }) }),
            /* @__PURE__ */ jsx2("hr", { className: "mb-divider" }),
            /* @__PURE__ */ jsx2("h3", { children: t("Full package") }),
            /* @__PURE__ */ jsx2("p", { className: "mb-muted", children: t("Choose a full ZIP for bots with skills, MCP, plugins or voice.") }),
            /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(Button2, { variant: "secondary", type: "button", disabled: !ctx.os?.pickOpenPath, onClick: () => void pickZip(), children: t("Choose package") }) }),
            !ctx.os?.pickOpenPath && /* @__PURE__ */ jsx2("p", { children: t("This Hermes version has no plugin file picker. Upload through the CMS.") }),
            zip && /* @__PURE__ */ jsxs2("section", { role: "alert", className: "mb-section", children: [
              /* @__PURE__ */ jsx2("p", { children: t("ZIP details differ from the draft. Apply the ZIP details before uploading.") }),
              /* @__PURE__ */ jsx2("pre", { className: "mb-source", children: JSON.stringify(zip.metadata, null, 2) }),
              /* @__PURE__ */ jsxs2("div", { className: "mb-actions", children: [
                /* @__PURE__ */ jsx2(Button2, { variant: "secondary", type: "button", onClick: () => void run(async (api) => {
                  const next = await api.patch(draft.id, draft.revision, zip.metadata);
                  accept(next);
                  const uploaded = await api.upload(next.id, next.revision, zip.path);
                  setZip(null);
                  return uploaded;
                }), children: t("Apply ZIP details and upload") }),
                /* @__PURE__ */ jsx2(Button2, { variant: "text", type: "button", onClick: () => setZip(null), children: t("Cancel") })
              ] })
            ] }),
            /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(Button2, { type: "button", disabled: !draft.packageHash, onClick: () => void run((api) => api.validate(draft.id, draft.revision)), children: t("Validate package") }) })
          ] })
        ] }),
        draft?.issues.map((issue, i) => /* @__PURE__ */ jsx2("p", { role: "alert", children: t("Validation issue at {0}. Check the package format and required fields.", issue.path) }, i)),
        draft?.state === "validated" && /* @__PURE__ */ jsx2("p", { role: "status", children: t("Validated · awaiting CMS review and publication.") }),
        draft?.state === "published" && /* @__PURE__ */ jsx2("p", { role: "status", children: t("Published · available in the gallery.") })
      ] })
    ] })
  ] });
}

// packages/hermes-plugin/desktop/connection-page.tsx
import { useEffect as useEffect3, useRef as useRef2, useState as useState3 } from "react";
import { Fragment as Fragment2, jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function ConnectionPage({ ctx }) {
  const { t, locale } = useMyBots();
  const [state, setState] = useState3(null), [mode, setMode] = useState3("bws"), [value, setValue] = useState3(""), [busy, setBusy] = useState3(false), [error, setError] = useState3(""), [reload, setReload] = useState3(0);
  const fence = useRef2(new ReviewFence()), posting = useRef2(null), local = useLocal();
  useEffect3(() => {
    const ticket = fence.current.begin();
    posting.current = null;
    setBusy(false);
    setValue("");
    setState(null);
    setError("");
    new MarketApi(ctx).connection().then((s) => {
      if (fence.current.isCurrent(ticket)) {
        setState(s);
        setMode(s.providers.includes("keyring") ? "keyring" : "bws");
      }
    }, () => {
      if (fence.current.isCurrent(ticket)) setError("Could not load connection settings. Check the server origin.");
    });
    return () => fence.current.invalidate();
  }, [ctx, local, reload]);
  async function change(disconnect = false) {
    if (posting.current !== null || !isLocal()) return;
    const ticket = fence.current.begin();
    posting.current = ticket;
    setBusy(true);
    setError("");
    const api = new MarketApi(ctx);
    try {
      const next = await (disconnect ? api.disconnect() : api.connect(mode === "bws" ? { mode, secretId: value } : { mode, token: value }));
      if (fence.current.isCurrent(ticket) && isLocal()) {
        setState(next);
        setValue("");
      }
    } catch {
      if (fence.current.isCurrent(ticket)) setError("Could not connect. Check key expiry, permissions and storage.");
    } finally {
      if (posting.current === ticket) posting.current = null;
      if (fence.current.isCurrent(ticket)) setBusy(false);
    }
  }
  return /* @__PURE__ */ jsxs3("section", { className: "mb-stack", children: [
    /* @__PURE__ */ jsxs3("div", { className: "mb-section", children: [
      /* @__PURE__ */ jsx3("h2", { children: t("Connection settings") }),
      /* @__PURE__ */ jsx3("p", { className: "mb-muted", children: t("Browsing and installation need no key. Submitting bots requires a creator API key.") })
    ] }),
    !local && /* @__PURE__ */ jsx3(LocalNotice, {}),
    error && /* @__PURE__ */ jsx3(Failure, { message: t(error) }),
    state && /* @__PURE__ */ jsxs3(Fragment2, { children: [
      /* @__PURE__ */ jsxs3("dl", { className: "mb-summary", children: [
        /* @__PURE__ */ jsx3("dt", { children: t("Server") }),
        /* @__PURE__ */ jsx3("dd", { children: state.origin }),
        /* @__PURE__ */ jsx3("dt", { children: t("Connection") }),
        /* @__PURE__ */ jsxs3("dd", { children: [
          /* @__PURE__ */ jsx3(Badge, { variant: state.connected ? "default" : "muted", children: state.connected ? t("Connected") : t("Disconnected") }),
          state.reason && " · " + t("Could not connect. Check key expiry, permissions and storage.")
        ] }),
        /* @__PURE__ */ jsx3("dt", { children: t("Environment · provider") }),
        /* @__PURE__ */ jsxs3("dd", { children: [
          state.environment || "—",
          " · ",
          state.provider || "—"
        ] }),
        /* @__PURE__ */ jsx3("dt", { children: t("Permissions") }),
        /* @__PURE__ */ jsx3("dd", { children: state.scopes.join(", ") || "—" }),
        /* @__PURE__ */ jsx3("dt", { children: t("Expires") }),
        /* @__PURE__ */ jsx3("dd", { children: state.expiresAt ? new Date(state.expiresAt).toLocaleString(locale === "zh-hant" ? "zh-TW" : locale) : "—" })
      ] }),
      /* @__PURE__ */ jsxs3("form", { className: "mb-form", onSubmit: (e) => {
        e.preventDefault();
        void change();
      }, children: [
        /* @__PURE__ */ jsxs3("label", { className: "mb-field", children: [
          t("Key provider"),
          /* @__PURE__ */ jsx3(Choice, { label: t("Key provider"), value: mode, disabled: busy || !local, onChange: (v) => {
            setMode(v);
            setValue("");
          }, options: [["bws", t("bws item ID (recommended)")], ...state.providers.includes("keyring") ? [["keyring", t("OS secure storage")]] : [], ["session", t("This session only")]] })
        ] }),
        /* @__PURE__ */ jsxs3("label", { className: "mb-field", children: [
          mode === "bws" ? t("bws item ID") : t("MyBots API key"),
          /* @__PURE__ */ jsx3(Input, { "aria-label": mode === "bws" ? t("bws item ID") : t("MyBots API key"), type: mode === "bws" ? "text" : "password", autoComplete: "off", spellCheck: false, value, disabled: busy || !local, onChange: (e) => setValue(e.target.value) })
        ] }),
        mode === "session" && /* @__PURE__ */ jsx3("p", { className: "mb-muted", children: t("Session keys stay in backend memory and are cleared on restart.") }),
        !state.providers.includes("keyring") && /* @__PURE__ */ jsx3("p", { className: "mb-muted", children: t("Secure OS storage is unavailable. Choose bws or session storage.") }),
        /* @__PURE__ */ jsxs3("div", { className: "mb-actions", children: [
          /* @__PURE__ */ jsx3(Button2, { type: "submit", disabled: busy || !local || !value.trim(), loading: busy, children: t("Connect") }),
          state.provider && /* @__PURE__ */ jsx3(Button2, { variant: "text", type: "button", disabled: busy || !local, onClick: () => void change(true), children: t("Disconnect") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(Button2, { variant: "ghost", disabled: busy, onClick: () => setReload((n) => n + 1), children: t("Refresh connection") }) })
  ] });
}

// packages/hermes-plugin/desktop/lumi-icon.ts
var lumiIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="1.5" y="2" width="13" height="12" rx="5.5" fill="none" stroke="black" stroke-width="1.25"/><ellipse cx="6" cy="8" rx=".75" ry="1.5"/><ellipse cx="10" cy="8" rx=".75" ry="1.5"/></svg>';
function registerLumiIcon() {
  if (typeof document === "undefined") return () => {
  };
  const style = document.createElement("style");
  style.dataset.mybotsIcon = "lumi";
  const mask = `url("data:image/svg+xml,${encodeURIComponent(lumiIconSvg)}")`;
  style.textContent = `.codicon.codicon-mybots-lumi::before{content:"";display:block;width:1em;height:1em;background-color:currentColor;mask-image:${mask};mask-repeat:no-repeat;mask-position:center;mask-size:contain}`;
  document.head.append(style);
  return () => style.remove();
}

// packages/hermes-plugin/desktop/market-page.tsx
import { useCallback, useEffect as useEffect7, useRef as useRef6, useState as useState7 } from "react";
import { host as host4 } from "@hermes/plugin-sdk";

// packages/hermes-plugin/desktop/install-confirmation.tsx
import { useEffect as useEffect5, useRef as useRef5, useState as useState5 } from "react";
import { host as host2 } from "@hermes/plugin-sdk";

// packages/hermes-plugin/desktop/secrets-fields.tsx
import { useId, useRef as useRef3, useState as useState4 } from "react";

// packages/hermes-plugin/desktop/install-state.ts
var format = (key, ...args) => key.replace(/\{(\d+)\}/g, (_, n) => String(args[Number(n)] ?? ""));
var initialSelection = (bot) => [...bot.optional];
var normalizeSelection = (bot, selected) => bot.optional.filter((c) => selected.includes(c));
function voiceResultMessage(result, t = format) {
  if (result.voiceStatus === "existing-settings-preserved") return t("Existing voice settings were preserved. Check the profile’s Voice settings.");
  return result.voiceConfigured ? t("Recommended voice {0} included. Check voice authentication.", result.voice?.voice ?? "") : t("Voice settings were not included.");
}
function profileDestination(profile) {
  if (!BOT_ID.test(profile)) throw Error("Invalid profile");
  return { route: { connectionId: "local", mode: "local", profile, targetProfile: profile }, options: { workspaceMode: "bots", workspaceOwnerKey: `bot:local::${profile}` } };
}
function installErrorMessage(error, profile, t = format) {
  const reason = detail(error);
  if (reason.startsWith("Profile name already exists")) return t("A bot named {0} already exists. The existing bot was not changed.", profile);
  if (reason.startsWith("Existing MyBots profile has changes")) return t("The {0} profile has manual changes, so installation stopped. The existing bot was not changed.", profile);
  if (reason.startsWith("Review expired")) return t("The review expired, so nothing was installed. Review the configuration again.");
  return keyRefusal(reason, t) ?? t("Could not install. Review the configuration and retry.");
}
var PROFILE_ENV_UNCHECKED = "The bot profile key file could not be checked safely, so nothing was changed";
function detail(error) {
  const text2 = String(error?.message ?? error), start = text2.indexOf("{");
  if (start < 0) return "";
  try {
    const body = JSON.parse(text2.slice(start));
    return typeof body?.detail === "string" ? body.detail : "";
  } catch {
    return "";
  }
}
function keyRefusal(reason, t) {
  if (!reason) return null;
  if (["Invalid request", "Request is too large", "Content-Type must be application/json"].includes(reason)) return t("The request was not accepted, so nothing was changed. Update MyBots and retry.");
  if (reason === "Key value is missing") return t("A key value is empty. Enter it or leave the key out. Nothing was changed.");
  if (reason.startsWith("Key value must be one line")) return t("A key must be one line of at most 4,096 bytes without control characters. Nothing was changed.");
  if (reason === "Key is not declared for the selected components" || reason === "Invalid key input") return t("The keys did not match this bot. Review again; nothing was changed.");
  if (reason === PROFILE_ENV_UNCHECKED) return t(PROFILE_ENV_UNCHECKED);
  if (reason.startsWith("The bot profile config could not be read safely")) return t("The bot profile config could not be read safely, so nothing was changed.");
  if (reason.startsWith("Keys could not be saved")) return t("Could not save the keys to the bot profile. Retry.");
  if (["This bot is not installed", "This bot was not installed by MyBots", "This bot was not installed with key declarations", "Invalid receipt key declarations"].includes(reason)) return t("This bot was not installed by MyBots with keys, so add keys in Hermes settings.");
  if (reason.startsWith("The installed version differs") || reason === "Invalid bot or fixed version") return t("The installed version changed. Refresh the bot list and retry.");
  return null;
}
function keyErrorMessage(error, t = format) {
  return keyRefusal(detail(error), t) ?? t("Could not save the keys. Retry.");
}
var NOT_OPEN = "This bot is not open yet";
function reviewErrorMessage(error) {
  const reason = detail(error);
  if (reason === NOT_OPEN) return "This bot is not open yet.";
  if (reason === "Invalid manifest" || reason.startsWith("This bot/version requires a newer MyBots helper")) return "This bot needs a newer MyBots helper. Update MyBots and retry.";
  return "Could not review the installation. Check connection and publication status.";
}
var UPDATE_REFUSALS = {
  "Only a newer version can be installed as an update": "Only a newer version can be installed as an update. Refresh the bot list.",
  "Update needs a reinstall for this version": "This version cannot be updated in place. Reinstall the bot to get it.",
  "The installed bot changed after the review; review again": "The installed bot changed after the review, so nothing was changed. Review the update again.",
  "Update failed; the previous version was restored": "The update failed, and the previous version was restored.",
  "Update failed and some files could not be restored; the previous files are in .mybots-backup": "The update failed and some files could not be restored. The previous files are in the profile’s .mybots-backup folder.",
  "Review expired or already used; review again": "The review expired, so nothing was updated. Review the update again.",
  "This bot is not installed": "This bot was not installed by MyBots, so it cannot be updated here.",
  "This bot was not installed by MyBots": "This bot was not installed by MyBots, so it cannot be updated here."
};
function updateErrorMessage(error, stage) {
  const reason = detail(error);
  if (Object.hasOwn(UPDATE_REFUSALS, reason)) return UPDATE_REFUSALS[reason];
  if (stage === "review") return reviewErrorMessage(error);
  return keyRefusal(reason, format) ?? "Could not update. Review the update again and retry.";
}
var startsDefault = (r) => r.prefill === "default" && r.startWithDefault !== false;
var initialKeys = (rows) => Object.fromEntries(rows.map((r) => [r.name, { useDefault: startsDefault(r), value: "", save: true }]));
var choice = (r, keys) => keys[r.name] ?? { useDefault: startsDefault(r), value: "", save: true };
var usesDefault = (r, keys) => r.prefill === "default" && choice(r, keys).useDefault;
function keyRequest(rows, keys) {
  return Object.fromEntries(rows.map((r) => {
    const c = choice(r, keys), value = c.value.trim();
    if (usesDefault(r, keys)) return [r.name, { source: "default" }];
    return [r.name, value ? { source: "input", value, saveToDefault: c.save && !r.defaultHasValue } : { source: "skip" }];
  }));
}
var missingRequired = (rows, keys) => rows.filter((r) => r.required && !usesDefault(r, keys) && !choice(r, keys).value.trim()).length;
var listedInstalled = (rows) => rows.filter((x) => x.state !== "available" && !(x.state === "name-conflict" && !x.receipt));
var nameConflictMessage = (profile, t = format) => t("A profile named {0} already exists, so this bot cannot be installed. The existing bot will not be changed. Rename the existing profile and try again.", profile);
var modelReviewMessage = (model, t = format) => model ? t("Model: {0} (same as the default profile)", model.name) : t("Model: the default profile has no model, so this stays empty. Choose a model first after installing.");
var modelResultMessage = (result, t = format) => result.modelSetupRequired || !result.model ? t("Choose a model first. This bot has no model yet.") : t("You can chat right away with the same model as the default profile ({0}).", result.model.name);
var languagePackMessage = (packs, t = format) => packs?.length ? t("Language packs: {0} (copied from the default profile)", packs.map((p) => p.name).join(", ")) : "";

// packages/hermes-plugin/desktop/secrets-fields.tsx
import { Fragment as Fragment3, jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var STORAGE_NOTICE = "Keys this bot needs are stored only in bot profiles on this computer";
var APPLY_NOTICE = "Keys apply from the next new chat (or after restarting Hermes)";
var DEFAULT_ERRORS = [
  "Could not save this key to the default profile; the bot profile has it",
  "The default profile key file could not be checked safely, so it was left unchanged; the bot profile has this key"
];
var FROM_DEFAULT = "Imported from the default profile ✓";
var SAVE_DEFAULT = "Save to the default profile so other bots can use it";
function SecretsFields({
  secrets,
  value,
  onChange,
  disabled = false,
  missingMessage = "Required keys left empty: {0}. You can add them after installing."
}) {
  const { t } = useMyBots();
  const id = useId();
  if (!secrets.length) return null;
  const current = (r) => value[r.name] ?? initialKeys([r])[r.name];
  const set = (r, patch) => onChange({ ...value, [r.name]: { ...current(r), ...patch } });
  const missing = missingRequired(secrets, value);
  return /* @__PURE__ */ jsxs4("fieldset", { disabled, className: "mb-keys", children: [
    /* @__PURE__ */ jsx4("legend", { children: t("Service keys") }),
    /* @__PURE__ */ jsx4("p", { className: "mb-muted", children: t(STORAGE_NOTICE) }),
    secrets.map((r, i) => {
      const c = current(r), fromDefault = usesDefault(r, value), purpose = `${id}-${i}-purpose`, note = `${id}-${i}-note`;
      return /* @__PURE__ */ jsxs4("div", { className: "mb-key", children: [
        /* @__PURE__ */ jsxs4("div", { className: "mb-key-head", children: [
          /* @__PURE__ */ jsx4("b", { children: r.label }),
          /* @__PURE__ */ jsx4(Badge, { variant: "muted", children: r.required ? t("Required") : t("Optional") })
        ] }),
        (r.purpose || r.url) && /* @__PURE__ */ jsxs4("p", { id: purpose, className: "mb-muted", children: [
          r.purpose,
          r.purpose && r.url && " · ",
          r.url && /* @__PURE__ */ jsx4("a", { href: r.url, target: "_blank", rel: "noopener noreferrer", children: t("Get a key") })
        ] }),
        r.prefill === "default" && /* @__PURE__ */ jsxs4("label", { className: "mb-option", children: [
          /* @__PURE__ */ jsx4(
            Checkbox,
            {
              "aria-label": `${r.label}: ${t(FROM_DEFAULT)}`,
              checked: fromDefault,
              onCheckedChange: (checked) => set(r, { useDefault: checked === true, value: "" })
            }
          ),
          /* @__PURE__ */ jsx4("span", { children: t(FROM_DEFAULT) })
        ] }),
        !fromDefault && /* @__PURE__ */ jsxs4(Fragment3, { children: [
          /* @__PURE__ */ jsx4(
            Input,
            {
              type: "password",
              autoComplete: "off",
              spellCheck: false,
              maxLength: 4096,
              "aria-label": r.label,
              "aria-required": r.required,
              "aria-describedby": [
                r.purpose || r.url ? purpose : "",
                r.defaultHasValue ? note : ""
              ].filter(Boolean).join(" ") || void 0,
              value: c.value,
              onChange: (e) => set(r, { value: e.target.value })
            }
          ),
          r.defaultHasValue ? /* @__PURE__ */ jsx4("small", { id: note, className: "mb-muted", children: t("The default profile value stays as it is") }) : /* @__PURE__ */ jsxs4("label", { className: "mb-option", children: [
            /* @__PURE__ */ jsx4(
              Checkbox,
              {
                "aria-label": `${r.label}: ${t(SAVE_DEFAULT)}`,
                checked: c.save,
                onCheckedChange: (checked) => set(r, { save: checked === true })
              }
            ),
            /* @__PURE__ */ jsx4("span", { children: t(SAVE_DEFAULT) })
          ] })
        ] })
      ] }, r.name);
    }),
    /* @__PURE__ */ jsx4("p", { role: "status", className: "mb-muted", children: missing > 0 ? t(missingMessage, missing) : "" })
  ] });
}
var STATE_LABELS = {
  set: "Set",
  missing: "Empty",
  skipped: "Skipped",
  unknown: "Could not check"
};
function keyBadge(states2) {
  if (states2?.some((s) => s.required && s.state === "missing"))
    return { label: "Keys needed", variant: "warn" };
  if (states2?.some((s) => s.state === "unknown"))
    return { label: "Check keys", variant: "muted" };
  return null;
}
function KeyResults({
  rows,
  labels: labels2
}) {
  const { t } = useMyBots();
  return /* @__PURE__ */ jsx4("ul", { className: "mb-key-results", children: rows.map((r) => /* @__PURE__ */ jsxs4("li", { children: [
    /* @__PURE__ */ jsx4("b", { children: labels2[r.name] || r.name }),
    " ·",
    " ",
    t(STATE_LABELS[r.state] ?? "Could not check"),
    r.fromDefault && /* @__PURE__ */ jsxs4(Fragment3, { children: [
      " · ",
      t("Taken from the default profile")
    ] }),
    r.savedToDefault && /* @__PURE__ */ jsxs4(Fragment3, { children: [
      " · ",
      t("Also saved to the default profile")
    ] }),
    r.defaultKept && /* @__PURE__ */ jsxs4(Fragment3, { children: [
      " · ",
      t("The default profile value was kept")
    ] }),
    r.defaultError && /* @__PURE__ */ jsxs4(Fragment3, { children: [
      " ",
      "·",
      " ",
      t(
        DEFAULT_ERRORS.includes(r.defaultError) ? r.defaultError : DEFAULT_ERRORS[0]
      )
    ] })
  ] }, r.name)) });
}
function AddKeysForm({
  ctx,
  bot,
  version,
  secrets,
  states: states2,
  onSaved
}) {
  const { t } = useMyBots();
  const [keys, setKeys] = useState4(
    () => initialKeys(secrets)
  ), [busy, setBusy] = useState4(false), [error, setError] = useState4(""), [result, setResult] = useState4(null);
  const posting = useRef3(false), local = useLocal();
  const labels2 = Object.fromEntries(secrets.map((r) => [r.name, r.label]));
  const request = keyRequest(secrets, keys), empty2 = Object.values(request).every((x) => x.source === "skip");
  async function save() {
    if (posting.current || !isLocal() || empty2) return;
    posting.current = true;
    setBusy(true);
    setError("");
    setKeys(initialKeys(secrets));
    try {
      const value = await new MarketApi(ctx).updateSecrets(
        bot,
        version,
        request
      );
      setResult(value);
      onSaved?.(value);
    } catch (reason) {
      setError(keyErrorMessage(reason, t));
    } finally {
      posting.current = false;
      setBusy(false);
    }
  }
  if (result)
    return /* @__PURE__ */ jsxs4("section", { role: "status", className: "mb-section", children: [
      /* @__PURE__ */ jsx4(KeyResults, { rows: result.secrets, labels: labels2 }),
      /* @__PURE__ */ jsx4("p", { children: t(APPLY_NOTICE) })
    ] });
  return /* @__PURE__ */ jsxs4("div", { className: "mb-section", children: [
    error && /* @__PURE__ */ jsx4(Failure, { message: error }),
    states2 && /* @__PURE__ */ jsx4(KeyResults, { rows: states2, labels: labels2 }),
    /* @__PURE__ */ jsx4(
      SecretsFields,
      {
        secrets,
        value: keys,
        onChange: setKeys,
        disabled: busy || !local,
        missingMessage: "Required keys still empty: {0}."
      }
    ),
    /* @__PURE__ */ jsx4(DialogFooter, { children: /* @__PURE__ */ jsx4(
      Button2,
      {
        disabled: busy || !local || empty2,
        loading: busy,
        onClick: save,
        children: t("Save keys")
      }
    ) })
  ] });
}
var installedFields = (states2) => states2.map((s) => ({
  name: s.name,
  required: s.required,
  label: s.label || s.name,
  purpose: s.purpose || "",
  url: s.url || "",
  prefill: s.defaultHasValue ? "default" : null,
  defaultHasValue: !!s.defaultHasValue,
  // A key the bot already has is never replaced by the default unless the user ticks it.
  startWithDefault: s.state !== "set"
}));
function AddKeysDialog({
  ctx,
  status,
  label,
  onClose,
  onSaved
}) {
  const { t, locale, dir } = useMyBots();
  const opener = useRef3(document.activeElement);
  const [fields2] = useState4(() => installedFields(status.secrets));
  return /* @__PURE__ */ jsx4(
    Dialog,
    {
      open: true,
      onOpenChange: (open) => {
        if (!open) onClose();
      },
      children: /* @__PURE__ */ jsxs4(
        DialogContent,
        {
          "aria-label": t("Add keys for {0}", label),
          lang: locale,
          dir,
          className: "mb-install",
          onCloseAutoFocus: (event) => {
            if (opener.current?.isConnected) {
              event.preventDefault();
              opener.current.focus();
            }
          },
          children: [
            /* @__PURE__ */ jsxs4(DialogHeader, { children: [
              /* @__PURE__ */ jsx4(DialogTitle, { children: t("Add keys for {0}", label) }),
              /* @__PURE__ */ jsx4(DialogDescription, { children: t("Bot profile: {0}", status.profile) })
            ] }),
            /* @__PURE__ */ jsx4(
              AddKeysForm,
              {
                ctx,
                bot: status.bot,
                version: status.version,
                secrets: fields2,
                states: status.secrets,
                onSaved
              }
            )
          ]
        }
      )
    }
  );
}

// packages/hermes-plugin/desktop/bot-avatar.tsx
import { useEffect as useEffect4, useRef as useRef4 } from "react";
import * as sdk2 from "@hermes/plugin-sdk";

// packages/hermes-plugin/desktop/avatar-presets.ts
var portraits = {
  "lumi": {
    "sha256": "31aacab796100938ad48f7e9590057ab90009b1085ffa5310d19ef56e13ad505",
    "eyes": [
      {
        "x": 110,
        "y": 128,
        "rx": 9,
        "ry": 15,
        "skin": "#f9a9cc"
      },
      {
        "x": 145,
        "y": 125.5,
        "rx": 9,
        "ry": 14.5,
        "skin": "#fcadcf"
      }
    ],
    "pace": 0.94,
    "phase": 0
  },
  "mybots-mira": {
    "sha256": "352a7fd23f1b0ffc8aece97502256575e19ec5d4908fcda706d25f5f97f1c08b",
    "eyes": [
      {
        "x": 110,
        "y": 128.5,
        "rx": 8,
        "ry": 14.5,
        "skin": "#8cb9fb"
      },
      {
        "x": 142,
        "y": 128.5,
        "rx": 8,
        "ry": 14.5,
        "skin": "#82b4fc"
      }
    ],
    "pace": 1,
    "phase": 0.61
  },
  "mybots-nori": {
    "sha256": "0fd42a5baf70e345f103130a22f350136b5a901af08e5d7ae45806f80b4286e1",
    "eyes": [
      {
        "x": 109.5,
        "y": 128.5,
        "rx": 8.5,
        "ry": 14.5,
        "skin": "#fd8f7b"
      },
      {
        "x": 144.5,
        "y": 128.5,
        "rx": 8.5,
        "ry": 14.5,
        "skin": "#fd8a75"
      }
    ],
    "pace": 1.06,
    "phase": 1.22
  },
  "mybots-sage": {
    "sha256": "4e9de8f24b0938502bc2204a0c7bea6842dd291f90d0442f2b73493724b2fb9d",
    "eyes": [
      {
        "x": 109.5,
        "y": 129.5,
        "rx": 8.5,
        "ry": 14.5,
        "skin": "#92e3bb"
      },
      {
        "x": 141.5,
        "y": 129.5,
        "rx": 8.5,
        "ry": 14.5,
        "skin": "#89deb4"
      }
    ],
    "pace": 0.94,
    "phase": 1.83
  },
  "mybots-pico": {
    "sha256": "79e57e5e0e6e9ffeb70e18dc0fed26072e365c302a97dee0743d27a2ad8c4eef",
    "eyes": [
      {
        "x": 111,
        "y": 142,
        "rx": 8,
        "ry": 14,
        "skin": "#d0c1f0"
      },
      {
        "x": 143,
        "y": 142,
        "rx": 8,
        "ry": 14,
        "skin": "#d3c5f2"
      }
    ],
    "pace": 1,
    "phase": 2.44
  },
  "mybots-tess": {
    "sha256": "12cb05ffb1a12908cbb843406c0cd8ca09687dfe6f13f80ffc0ea5b528705fb8",
    "eyes": [
      {
        "x": 109,
        "y": 128,
        "rx": 9,
        "ry": 15,
        "skin": "#f9d05a"
      },
      {
        "x": 144,
        "y": 128,
        "rx": 9,
        "ry": 15,
        "skin": "#f9ce5a"
      }
    ],
    "pace": 1.06,
    "phase": 3.05
  },
  "mybots-echo": {
    "sha256": "5f135ba001bbbea24cee8e5df86497763b2e53eb1232c44cabf79ef3491e961f",
    "eyes": [
      {
        "x": 114.5,
        "y": 126.5,
        "rx": 8.5,
        "ry": 14.5,
        "skin": "#beacec"
      },
      {
        "x": 147.5,
        "y": 127,
        "rx": 8.5,
        "ry": 15,
        "skin": "#b9a6e8"
      }
    ],
    "pace": 0.94,
    "phase": 3.66
  },
  "mybots-roan": {
    "sha256": "8dcddc0e661c627c1af5f5527473e64bbce7b7dd7a250f60b1b07a160102814b",
    "eyes": [
      {
        "x": 108,
        "y": 126,
        "rx": 9,
        "ry": 15,
        "skin": "#fca4b6"
      },
      {
        "x": 145,
        "y": 125.5,
        "rx": 9,
        "ry": 15.5,
        "skin": "#fca0b3"
      }
    ],
    "pace": 1,
    "phase": 4.27
  },
  "mybots-vera": {
    "sha256": "e2fb83d03e8380fdf80f4f82e286676a69b8ea46f6cd5910d53003531d2f5936",
    "eyes": [
      {
        "x": 110,
        "y": 125.5,
        "rx": 9,
        "ry": 14.5,
        "skin": "#8bbffa"
      },
      {
        "x": 143,
        "y": 125,
        "rx": 9,
        "ry": 15,
        "skin": "#83bcfc"
      }
    ],
    "pace": 1.06,
    "phase": 4.88
  },
  "mybots-cleo": {
    "sha256": "944fbc6ad45af98c69595a765a07aa8a94b4ef263563358bd2fd20045e979575",
    "eyes": [
      {
        "x": 109.5,
        "y": 137,
        "rx": 8.5,
        "ry": 15,
        "skin": "#f0caa2"
      },
      {
        "x": 142.5,
        "y": 137,
        "rx": 8.5,
        "ry": 15,
        "skin": "#eecca7"
      }
    ],
    "pace": 0.94,
    "phase": 5.49
  },
  "mybots-milo": {
    "sha256": "41b78d2472ca3fe3a102ef0b14c5def578eb4b9bff3cc79f79804f273a0a43f2",
    "eyes": [
      {
        "x": 109.5,
        "y": 130.5,
        "rx": 8.5,
        "ry": 14.5,
        "skin": "#74dab5"
      },
      {
        "x": 143,
        "y": 130.5,
        "rx": 9,
        "ry": 14.5,
        "skin": "#71d6b0"
      }
    ],
    "pace": 1,
    "phase": 6.1
  },
  "mybots-quill": {
    "sha256": "c1a92425eae0b9233edda0ed7b1ad291b233b6b82ab099e2d136c7ff5783fdeb",
    "eyes": [
      {
        "x": 110,
        "y": 122,
        "rx": 9,
        "ry": 15,
        "skin": "#fd8268"
      },
      {
        "x": 145,
        "y": 122,
        "rx": 9,
        "ry": 15,
        "skin": "#fc7c64"
      }
    ],
    "pace": 1.06,
    "phase": 6.71
  },
  "mybots-lexi": {
    "sha256": "3627789cc3f24e3e58ff636410f581c59cb739961e2e7ab6fa306f22a1cc5ab9",
    "eyes": [
      {
        "x": 109.5,
        "y": 130.5,
        "rx": 8.5,
        "ry": 14.5,
        "skin": "#a4bffc"
      },
      {
        "x": 142.5,
        "y": 130.5,
        "rx": 8.5,
        "ry": 14.5,
        "skin": "#a3bffc"
      }
    ],
    "pace": 0.94,
    "phase": 7.32
  },
  "mybots-orbit": {
    "sha256": "6f76db98f23bbe3183d193afeaf5452ac0f4bbd7d86879d771312a1c1bd54d47",
    "eyes": [
      {
        "x": 111,
        "y": 133,
        "rx": 9,
        "ry": 15,
        "skin": "#fddb7d"
      },
      {
        "x": 143.5,
        "y": 133,
        "rx": 8.5,
        "ry": 15,
        "skin": "#fbd779"
      }
    ],
    "pace": 1,
    "phase": 7.93
  },
  "mybots-finn": {
    "sha256": "b0029db99882ea8ec52bbc1a010547c137d609f4a3e97bb56f9f92d1436a9e57",
    "eyes": [
      {
        "x": 109.5,
        "y": 128,
        "rx": 8.5,
        "ry": 15,
        "skin": "#e999de"
      },
      {
        "x": 143,
        "y": 127.5,
        "rx": 9,
        "ry": 15.5,
        "skin": "#e598dd"
      }
    ],
    "pace": 1.06,
    "phase": 8.54
  },
  "mybots-lyra": {
    "sha256": "47a7b834be13acdeebdd9a699fcc4fe9b9c4f75f57c3580844d5592b784c0b54",
    "eyes": [
      {
        "x": 89,
        "y": 141,
        "rx": 8,
        "ry": 14,
        "skin": "#9bb5fa"
      },
      {
        "x": 121.5,
        "y": 141.5,
        "rx": 8.5,
        "ry": 14.5,
        "skin": "#92aef9"
      }
    ],
    "pace": 0.94,
    "phase": 9.15
  },
  "mybots-momo": {
    "sha256": "160da77d4d536c8b1120a21a9c9ed173613d04c38dd5ec9f6ebfce114565dde6",
    "eyes": [
      {
        "x": 104,
        "y": 136,
        "rx": 9,
        "ry": 15,
        "skin": "#a8d798"
      },
      {
        "x": 138.5,
        "y": 135.5,
        "rx": 8.5,
        "ry": 15.5,
        "skin": "#a3d291"
      }
    ],
    "pace": 1,
    "phase": 9.76
  },
  "mybots-pepper": {
    "sha256": "37be1ceaba32abe3b9f566ef032f7231dd677fc2488a22e84d16d3a413822785",
    "eyes": [
      {
        "x": 106,
        "y": 125.5,
        "rx": 9,
        "ry": 15.5,
        "skin": "#eedfc6"
      },
      {
        "x": 142,
        "y": 125,
        "rx": 9,
        "ry": 16,
        "skin": "#eadac0"
      }
    ],
    "pace": 1.06,
    "phase": 10.37
  },
  "mybots-atlas": {
    "sha256": "ac44a64d51b3e61716bb0b498122ac4676c11e3c040914c084331bae57d4923d",
    "eyes": [
      {
        "x": 109,
        "y": 129,
        "rx": 9,
        "ry": 15,
        "skin": "#76ddd9"
      },
      {
        "x": 143,
        "y": 129,
        "rx": 9,
        "ry": 15,
        "skin": "#72dbd9"
      }
    ],
    "pace": 0.94,
    "phase": 10.98
  },
  "mybots-clover": {
    "sha256": "a08c800269f8245a12cb703278503fe290e6e93e249f0bc3f6af64402bc2fbe9",
    "eyes": [
      {
        "x": 110.5,
        "y": 132.5,
        "rx": 8.5,
        "ry": 14.5,
        "skin": "#fdc38f"
      },
      {
        "x": 144.5,
        "y": 132.5,
        "rx": 8.5,
        "ry": 14.5,
        "skin": "#fcbe89"
      }
    ],
    "pace": 1,
    "phase": 11.59
  },
  "mybots-bloom": {
    "sha256": "77d99ee496f2e8dc284ac8d1ecf0ff479c959d8960248bc9b3e84a5b438415c4",
    "eyes": [
      {
        "x": 105,
        "y": 126,
        "rx": 9,
        "ry": 15,
        "skin": "#d5bee6"
      },
      {
        "x": 141.5,
        "y": 124.5,
        "rx": 9.5,
        "ry": 15.5,
        "skin": "#d1b8e4"
      }
    ],
    "pace": 1.06,
    "phase": 12.2
  }
};
function avatarPreset(bot, sha256) {
  const p = portraits[bot];
  return p?.sha256 === sha256 ? p : null;
}

// packages/hermes-plugin/desktop/lumi-motion.ts
function resolveBotMood(profile, s) {
  if (!s.supported || !s.found) return "unavailable";
  if (s.busy && s.owner?.connectionId === "local" && s.owner.profile === profile)
    return "think";
  const age = s.now / 1e3 - (s.workerLastActive ?? 0);
  return Number.isFinite(age) && age >= 0 && age < 150 ? "work" : "idle";
}
function poseAt(mood, seconds) {
  const t = Math.max(0, seconds), period = mood === "idle" ? 4.6 : 2.8, blink = t % period;
  const eye = blink < period - 0.24 ? 1 : Math.max(0.06, Math.abs(blink - (period - 0.12)) / 0.12);
  if (mood === "work") {
    const bounce = Math.abs(Math.sin(t * Math.PI * 1.7));
    return {
      x: Math.sin(t * 2.2) * 1.2,
      y: -bounce * 10,
      rotation: Math.sin(t * 3) * 2,
      scaleX: 1.035 - bounce * 0.04,
      scaleY: 0.965 + bounce * 0.055,
      eye
    };
  }
  if (mood === "think")
    return {
      x: Math.sin(t * 1.7) * 3,
      y: Math.sin(t * 2) * 1.5 - 2,
      rotation: Math.sin(t * 1.3) * 6,
      scaleX: 1,
      scaleY: 1,
      eye
    };
  const routine = t % 14, hop = routine > 11 && routine < 12 ? Math.sin((routine - 11) * Math.PI) * 3 : 0;
  return {
    x: Math.sin(t * 0.8),
    y: Math.sin(t * 1.4) * 2.3 - hop,
    rotation: Math.sin(t * 0.9) * 1.6,
    scaleX: 1 + Math.sin(t * 1.4) * 8e-3,
    scaleY: 1 - Math.sin(t * 1.4) * 8e-3,
    eye
  };
}

// packages/hermes-plugin/desktop/lumi-scene.ts
var serial = 0;
function mountAvatarScene(svg, src, calibration, loopFactory) {
  const id = `mb-avatar-${++serial}`;
  svg.setAttribute("viewBox", "0 0 256 256");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", `${calibration.name || "봇"} 아바타`);
  const eyesMarkup = calibration.eyes.map((e, i) => `<clipPath id="${id}-eye-${i}"><ellipse cx="${e.x}" cy="${e.y}" rx="${e.rx}" ry="${e.ry}"/></clipPath>`).join("");
  svg.innerHTML = `<defs>${eyesMarkup}</defs><ellipse data-shadow cx="128" cy="225" rx="56" ry="6" fill="currentColor" opacity=".08"/><g data-body><image width="256" height="256"/><g data-lids opacity="0">${calibration.eyes.map((e, i) => `<ellipse cx="${e.x}" cy="${e.y}" rx="${e.rx + 1}" ry="${e.ry + 1}" fill="${e.skin}"/><g data-eye="${i}"><image width="256" height="256" clip-path="url(#${id}-eye-${i})"/></g>`).join("")}</g></g>`;
  svg.querySelectorAll("image").forEach((image) => image.setAttribute("href", src));
  const body = svg.querySelector("[data-body]"), lids = svg.querySelector("[data-lids]"), shadow = svg.querySelector("[data-shadow]");
  const eyes = [...svg.querySelectorAll("[data-eye]")];
  let mood = "idle", visible = true, reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches, disposed = false;
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  let pose = poseAt("idle", 0), previous = 0;
  const paint = (now) => {
    if (disposed) return;
    const target = poseAt(mood, now / 1e3 * calibration.pace + calibration.phase), mix = previous ? 1 - Math.exp(-Math.min(100, now - previous) / 85) : 1;
    previous = now;
    for (const key of ["x", "y", "rotation", "scaleX", "scaleY"])
      pose[key] += (target[key] - pose[key]) * mix;
    pose.eye = target.eye;
    body.setAttribute(
      "transform",
      `translate(${pose.x} ${pose.y}) translate(128 202) rotate(${pose.rotation}) scale(${pose.scaleX} ${pose.scaleY}) translate(-128 -202)`
    );
    lids.setAttribute("opacity", pose.eye < 0.999 ? "1" : "0");
    eyes.forEach((eye, i) => {
      const cy = calibration.eyes[i].y;
      eye.setAttribute(
        "transform",
        `translate(0 ${cy}) scale(1 ${pose.eye}) translate(0 ${-cy})`
      );
    });
    shadow.setAttribute("rx", String(56 + pose.y * 0.9));
    svg.dataset.mood = mood;
  };
  const reset = () => {
    body.removeAttribute("transform");
    lids.setAttribute("opacity", "0");
    shadow.setAttribute("rx", "56");
    svg.dataset.mood = mood;
  };
  const loop = loopFactory?.(
    (now) => {
      if (!disposed && visible && !reduced) paint(now);
    },
    { fps: 24, idleWhen: () => !visible || reduced }
  );
  const change = () => {
    reduced = media.matches;
    if (reduced) reset();
    else loop?.wake();
  };
  media.addEventListener("change", change);
  const observer = typeof IntersectionObserver === "function" ? new IntersectionObserver((entries) => {
    visible = entries.some((e) => e.isIntersecting);
    if (visible) loop?.wake();
  }) : null;
  observer?.observe(svg);
  reset();
  return {
    animated: Boolean(loop),
    setMood(next) {
      if (disposed) return;
      mood = next;
      svg.dataset.mood = mood;
      if (reduced || !loop) reset();
      else loop.wake();
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      loop?.dispose();
      observer?.disconnect();
      media.removeEventListener("change", change);
      svg.replaceChildren();
    }
  };
}

// packages/hermes-plugin/desktop/bot-avatar.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var targets = /* @__PURE__ */ new Set();
var clock;
var sharedLoop = (draw, options) => {
  const target = { draw, idle: options.idleWhen };
  targets.add(target);
  if (!clock) clock = sdk2.createBudgetedLoop?.((now) => {
    for (const t of targets) if (!t.idle()) t.draw(now);
  }, { fps: 24, idleWhen: () => [...targets].every((t) => t.idle()) });
  else clock.wake();
  return { wake() {
    clock?.wake();
  }, dispose() {
    targets.delete(target);
    if (!targets.size) {
      clock?.dispose();
      clock = void 0;
    }
  } };
};
function BotAvatar({ bot, name, src, sha256, mood = "idle", size = 80 }) {
  const { t } = useMyBots();
  const accessibleLabel = t("{0} avatar", name);
  const ref = useRef4(null), scene = useRef4(null);
  const calibration = sha256 ? avatarPreset(bot, sha256) : null;
  const animate = !!calibration && mood !== "unavailable";
  useEffect4(() => {
    if (!ref.current || !calibration || !animate) return;
    const controller = mountAvatarScene(ref.current, src, { ...calibration, name }, typeof sdk2.createBudgetedLoop === "function" ? sharedLoop : void 0);
    scene.current = controller;
    return () => {
      controller.dispose();
      scene.current = null;
    };
  }, [src, calibration, name, animate]);
  useEffect4(() => {
    ref.current?.setAttribute("aria-label", accessibleLabel);
  }, [accessibleLabel, src, animate]);
  useEffect4(() => {
    if (mood !== "unavailable") scene.current?.setMood(mood);
  }, [mood, src, animate]);
  return animate ? /* @__PURE__ */ jsx5("svg", { ref, width: size, height: size, className: "mb-avatar" }) : /* @__PURE__ */ jsx5("img", { src, alt: accessibleLabel, width: size, height: size, className: "mb-avatar" });
}

// packages/hermes-plugin/desktop/install-confirmation.tsx
import { Fragment as Fragment4, jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var labels = { skills: "Skills", mcp: "MCP · runs local Python", plugin: "Plugin · runs local Python", voice: "Recommended GPT Live voice" };
var CHAT_NOTE = "Wait until the chat in progress ends, then try again.";
function InstallConfirmation({ ctx, bot, onClose, onInstalled, onKeysSaved, mood = "idle", status, comingSoon: comingSoon2 = false, mode = "install" }) {
  const { t, locale, dir } = useMyBots();
  const updating = mode === "update";
  const [selection, setSelection] = useState5(() => initialSelection(bot)), [review, setReview] = useState5(null), [result, setResult] = useState5(null), [busy, setBusy] = useState5(false), [error, setError] = useState5(""), [retry, setRetry] = useState5(0);
  const [keys, setKeys] = useState5({}), [decls, setDecls] = useState5([]), [addKeys, setAddKeys] = useState5(null), [typed, setTyped] = useState5(false), [existing, setExisting] = useState5(null);
  const opener = useRef5(document.activeElement);
  const fence = useRef5(new ReviewFence()), posting = useRef5(false), local = useLocal();
  const identity = bot.id + "@" + bot.version;
  const conflict = !updating && status?.state === "name-conflict", chatBusy = updating && mood === "think";
  const owner = useRef5(identity);
  owner.current = identity;
  useEffect5(() => {
    setSelection(initialSelection(bot));
    setReview(null);
    setResult(null);
    setError("");
  }, [identity]);
  useEffect5(() => () => fence.current.invalidate(), []);
  useEffect5(() => {
    const ticket = fence.current.begin();
    setReview(null);
    setResult(null);
    setError("");
    setKeys({});
    if (!local || comingSoon2) {
      setBusy(false);
      return;
    }
    setBusy(true);
    const api = new MarketApi(ctx);
    (updating ? api.reviewUpdate(bot.id, bot.version) : api.review(bot.id, bot.version, normalizeSelection(bot, selection))).then((value) => {
      if (fence.current.isCurrent(ticket) && isLocal()) {
        setKeys(initialKeys(value.secrets ?? []));
        setReview(value);
      }
    }, (reason) => {
      if (fence.current.isCurrent(ticket)) setError(updating ? updateErrorMessage(reason, "review") : reviewErrorMessage(reason));
    }).finally(() => {
      if (fence.current.isCurrent(ticket)) setBusy(false);
    });
    return () => fence.current.invalidate();
  }, [ctx, identity, selection, local, retry, comingSoon2, updating]);
  async function install() {
    if (posting.current || !review || !isLocal() || chatBusy) return;
    posting.current = true;
    const ticket = fence.current.begin();
    const expected = owner.current;
    setBusy(true);
    setError("");
    const rows = review.secrets ?? [], request = keyRequest(rows, keys);
    setKeys({});
    setDecls(rows);
    setAddKeys(null);
    setExisting(null);
    setTyped(Object.values(request).some((x) => x.source === "input"));
    try {
      const api = new MarketApi(ctx), value = await (updating ? api.update(review.token, request) : api.install(review.token, request));
      if (fence.current.isCurrent(ticket) && isLocal() && owner.current === expected) {
        setResult(value);
        setReview(null);
        onInstalled(value);
        if (value.status === "already-installed") new MarketApi(ctx).installed().then((rows2) => {
          const row = rows2.find((r) => r.bot === bot.id && r.version === bot.version && r.secrets?.length);
          if (fence.current.isCurrent(ticket) && owner.current === expected && row) setExisting(row);
        }, () => {
        });
      }
    } catch (reason) {
      if (fence.current.isCurrent(ticket)) {
        setError(updating ? updateErrorMessage(reason, "update") : installErrorMessage(reason, review.manifest.id, t));
        setReview(null);
      }
    } finally {
      posting.current = false;
      if (fence.current.isCurrent(ticket)) setBusy(false);
    }
  }
  return /* @__PURE__ */ jsx6(Dialog, { open: true, onOpenChange: (open) => {
    if (!open) onClose();
  }, children: /* @__PURE__ */ jsxs5(DialogContent, { "aria-label": updating ? t("Update {0}", bot.name) : t("Confirm installation of {0}", bot.name), "aria-busy": busy, lang: locale, dir, className: "mb-install", onCloseAutoFocus: (event) => {
    if (opener.current?.isConnected) {
      event.preventDefault();
      opener.current.focus();
    }
  }, children: [
    /* @__PURE__ */ jsxs5(DialogHeader, { children: [
      /* @__PURE__ */ jsx6(DialogTitle, { children: updating ? t("Update {0}", bot.name) : t("Meet {0}", bot.name) }),
      /* @__PURE__ */ jsxs5(DialogDescription, { children: [
        bot.role,
        " · ",
        bot.personality
      ] })
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "mb-install-hero", children: [
      review && /* @__PURE__ */ jsx6(BotAvatar, { bot: bot.id, name: bot.name, src: review.avatar, sha256: review.manifest.files.find((f) => f.component === "avatar")?.sha256, mood, size: 96 }),
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx6("p", { children: bot.description }),
        /* @__PURE__ */ jsxs5("div", { className: "mb-badges", children: [
          /* @__PURE__ */ jsxs5(Badge, { variant: "muted", children: [
            "v",
            bot.version
          ] }),
          /* @__PURE__ */ jsx6(Badge, { variant: "muted", children: t("Soul and avatar required") }),
          comingSoon2 && /* @__PURE__ */ jsx6(Badge, { variant: "muted", children: t("Coming soon") })
        ] })
      ] })
    ] }),
    comingSoon2 ? /* @__PURE__ */ jsx6("section", { role: "status", className: "mb-notice", children: /* @__PURE__ */ jsx6("p", { children: t("This bot is still being prepared. You can install it once it opens.") }) }) : /* @__PURE__ */ jsxs5(Fragment4, { children: [
      !local && /* @__PURE__ */ jsx6(LocalNotice, {}),
      error && /* @__PURE__ */ jsx6(Failure, { message: t(error) })
    ] }),
    !result && !comingSoon2 && !updating && /* @__PURE__ */ jsxs5("fieldset", { disabled: busy && posting.current, className: "mb-options", children: [
      /* @__PURE__ */ jsx6("legend", { children: t("Include these features") }),
      bot.optional.length === 0 && /* @__PURE__ */ jsx6("p", { className: "mb-muted", children: t("Start with a Soul and avatar.") }),
      bot.optional.map((c) => /* @__PURE__ */ jsxs5("label", { className: "mb-option", children: [
        /* @__PURE__ */ jsx6(Checkbox, { "aria-label": t(labels[c]), checked: selection.includes(c), onCheckedChange: (checked) => {
          fence.current.invalidate();
          setReview(null);
          setSelection((s) => normalizeSelection(bot, checked === true ? [...s, c] : s.filter((x) => x !== c)));
        } }),
        /* @__PURE__ */ jsxs5("span", { children: [
          t(labels[c]),
          c === "voice" && bot.voice && ` · ${bot.voice.id} (${t("Not auditioned")})`
        ] })
      ] }, c))
    ] }),
    busy && !posting.current && /* @__PURE__ */ jsx6(Loader, { label: updating ? t("Reviewing update") : t("Reviewing installation") }),
    review && /* @__PURE__ */ jsxs5(Fragment4, { children: [
      updating && review.update ? /* @__PURE__ */ jsx6(UpdateSummary, { plan: review.update, to: review.manifest.version }) : /* @__PURE__ */ jsxs5(Fragment4, { children: [
        conflict ? /* @__PURE__ */ jsx6(Failure, { message: nameConflictMessage(review.manifest.id, t) }) : /* @__PURE__ */ jsxs5("p", { className: "mb-muted", children: [
          t("New profile:"),
          /* @__PURE__ */ jsx6("b", { children: review.manifest.id }),
          " ",
          t("Author:"),
          review.manifest.author
        ] }),
        /* @__PURE__ */ jsx6("p", { children: modelReviewMessage(review.model, t) }),
        languagePackMessage(review.languagePacks, t) && /* @__PURE__ */ jsx6("p", { children: languagePackMessage(review.languagePacks, t) })
      ] }),
      review.components.some((c) => c === "mcp" || c === "plugin") && /* @__PURE__ */ jsx6("p", { children: t("Selected MCP and plugins execute Python on this device.") }),
      review.voice && /* @__PURE__ */ jsxs5("p", { children: [
        t("Recommended voice:"),
        review.voice.voice,
        " · ",
        review.voice.instructions,
        /* @__PURE__ */ jsx6("br", {}),
        t("Configure voice authentication in Hermes.")
      ] }),
      updating && !!review.secrets?.length && /* @__PURE__ */ jsx6("p", { children: t("Keys new in this version. You can skip them and add them later with Add keys.") }),
      /* @__PURE__ */ jsx6(SecretsFields, { secrets: review.secrets ?? [], value: keys, onChange: setKeys, disabled: busy }),
      /* @__PURE__ */ jsxs5("details", { children: [
        /* @__PURE__ */ jsx6("summary", { children: t("Soul and file verification") }),
        /* @__PURE__ */ jsx6("pre", { className: "mb-source", children: review.soul }),
        /* @__PURE__ */ jsxs5("small", { children: [
          "SHA-256: ",
          review.digest
        ] }),
        /* @__PURE__ */ jsx6("ul", { children: review.manifest.files.filter((f) => ["soul", "avatar", ...review.components].includes(f.component)).map((f) => /* @__PURE__ */ jsxs5("li", { children: [
          f.path,
          " · ",
          t("{0} bytes", f.size)
        ] }, f.path)) })
      ] }),
      updating && /* @__PURE__ */ jsx6("p", { role: "status", className: "mb-notice", children: t(CHAT_NOTE) }),
      /* @__PURE__ */ jsx6(DialogFooter, { children: /* @__PURE__ */ jsx6(Button2, { disabled: busy || !local || conflict || chatBusy, loading: posting.current && busy, onClick: install, children: updating ? t("Update {0}", bot.name) : t("Install {0}", bot.name) }) })
    ] }),
    !review && !result && !busy && local && !comingSoon2 && /* @__PURE__ */ jsx6(Button2, { variant: "secondary", onClick: () => setRetry((n) => n + 1), children: t("Review again") }),
    result && /* @__PURE__ */ jsxs5("section", { role: "status", className: "mb-section", children: [
      /* @__PURE__ */ jsx6("h3", { children: updating ? t("Update complete") : result.status === "already-installed" ? t("Already installed") : t("Installation complete") }),
      updating ? /* @__PURE__ */ jsx6("p", { children: t("Restart Hermes to apply.") }) : /* @__PURE__ */ jsxs5(Fragment4, { children: [
        /* @__PURE__ */ jsx6("p", { children: modelResultMessage(result, t) }),
        /* @__PURE__ */ jsx6("p", { children: voiceResultMessage(result, t) })
      ] }),
      result.status === "already-installed" && typed && /* @__PURE__ */ jsx6("p", { children: t("This bot was already installed, so the keys you entered were not saved. Add them below with Add keys.") }),
      result.status === "already-installed" && existing?.secrets && (addKeys ? /* @__PURE__ */ jsx6(AddKeysForm, { ctx, bot: bot.id, version: bot.version, secrets: addKeys, states: existing.secrets, onSaved: () => onKeysSaved?.() }) : /* @__PURE__ */ jsx6(Button2, { variant: "secondary", onClick: () => setAddKeys(installedFields(existing.secrets)), children: t("Add keys") })),
      !!result.secrets?.length && (() => {
        const labels2 = Object.fromEntries(decls.map((d) => [d.name, d.label])), badge = keyBadge(result.secrets.map((r) => ({ required: decls.find((d) => d.name === r.name)?.required ?? false, state: r.state })));
        const open = () => decls.filter((d) => result.secrets.find((r) => r.name === d.name)?.state !== "set").map((d) => {
          const r = result.secrets.find((x) => x.name === d.name);
          const has = d.defaultHasValue || !!r?.savedToDefault || !!r?.defaultKept;
          return { ...d, prefill: has ? "default" : null, defaultHasValue: has };
        });
        const saved = (value) => {
          setResult((current) => current && { ...current, secrets: current.secrets?.map((row) => {
            const u = value.secrets.find((x) => x.name === row.name);
            return u?.updated ? { ...row, state: u.state === "set" ? "set" : row.state, fromDefault: u.fromDefault, savedToDefault: row.savedToDefault || u.savedToDefault, defaultKept: row.defaultKept || u.defaultKept, defaultError: u.defaultError ?? null } : row;
          }) });
          onKeysSaved?.();
        };
        return /* @__PURE__ */ jsxs5("div", { className: "mb-section", children: [
          /* @__PURE__ */ jsxs5("div", { className: "mb-key-head", children: [
            /* @__PURE__ */ jsx6("b", { children: t("Service keys") }),
            badge && /* @__PURE__ */ jsx6(Badge, { variant: badge.variant, children: t(badge.label) })
          ] }),
          /* @__PURE__ */ jsx6(KeyResults, { rows: result.secrets, labels: labels2 }),
          addKeys ? /* @__PURE__ */ jsx6(AddKeysForm, { ctx, bot: bot.id, version: bot.version, secrets: addKeys, onSaved: saved }) : open().length > 0 && /* @__PURE__ */ jsx6(Button2, { variant: "secondary", onClick: () => setAddKeys(open()), children: t("Add keys") })
        ] });
      })(),
      !updating && /* @__PURE__ */ jsxs5(Fragment4, { children: [
        /* @__PURE__ */ jsxs5("p", { children: [
          t("First prompt:"),
          bot.firstPrompt
        ] }),
        bot.external.map((e) => /* @__PURE__ */ jsxs5("p", { children: [
          /* @__PURE__ */ jsxs5("a", { href: e.guide, target: "_blank", rel: "noopener noreferrer", children: [
            e.label,
            " · ",
            t("Setup guide")
          ] }),
          " · ",
          e.requirement
        ] }, e.service)),
        /* @__PURE__ */ jsx6(DialogFooter, { children: /* @__PURE__ */ jsx6(Button2, { onClick: () => {
          const d = profileDestination(result.profile);
          onClose();
          host2.newChat(d.route, d.options);
          location.hash = "#/";
        }, children: t("Open bot chat") }) })
      ] })
    ] })
  ] }) });
}
function UpdateSummary({ plan, to }) {
  const { t } = useMyBots();
  return /* @__PURE__ */ jsxs5("section", { className: "mb-section", children: [
    /* @__PURE__ */ jsx6("p", { children: /* @__PURE__ */ jsx6("b", { children: t("Version {0} → {1}", plan.from, to) }) }),
    /* @__PURE__ */ jsx6("p", { children: t("{0} files will be replaced and {1} removed.", plan.replace, plan.remove) }),
    /* @__PURE__ */ jsx6("p", { className: "mb-muted", children: t("Updates files of the installed local profile; files you added are kept") }),
    plan.modified.length > 0 && /* @__PURE__ */ jsxs5("div", { role: "note", className: "mb-notice", children: [
      /* @__PURE__ */ jsx6("p", { children: t("{0} files you changed will be backed up, then replaced by the new version.", plan.modified.length) }),
      /* @__PURE__ */ jsx6("ul", { children: plan.modified.map((path) => /* @__PURE__ */ jsx6("li", { children: path }, path)) })
    ] })
  ] });
}

// packages/hermes-plugin/desktop/bot-status.ts
import { useEffect as useEffect6, useState as useState6 } from "react";
import { host as host3 } from "@hermes/plugin-sdk";
var isLocalSource = () => host3.state.connectionId.get() === "local";
function useBotStatuses(enabled) {
  const [moods, setMoods] = useState6({});
  useEffect6(() => {
    let disposed = false, inflight = false, generation = 0;
    setMoods({});
    let rows = [];
    const state = host3.state, supported = !!(state.busy && state.focusedSessionOwner && host3.requestProfile);
    const update = () => {
      if (disposed) return;
      const base = { supported, owner: state.focusedSessionOwner?.get() ?? null, busy: state.busy?.get() ?? false, now: Date.now() };
      const next = {};
      for (const row of rows) next[row.name] = resolveBotMood(row.name, { ...base, found: true, workerLastActive: row.worker_session?.last_active });
      setMoods((old) => JSON.stringify(old) === JSON.stringify(next) ? old : next);
    };
    async function poll() {
      if (disposed || inflight || !enabled || !supported || !isLocalSource() || document.visibilityState === "hidden") return;
      inflight = true;
      const ticket = generation;
      try {
        const result = await host3.requestProfile({ connectionId: "local", mode: "local", profile: "default", targetProfile: "default" }, "profiles.list", { include_sessions: true }, 1e4);
        if (!disposed && ticket === generation && isLocalSource()) {
          rows = result.profiles;
          update();
        }
      } catch {
        if (!disposed && ticket === generation) {
          rows = [];
          update();
        }
      } finally {
        inflight = false;
        if (!disposed && ticket !== generation) void poll();
      }
    }
    const changed = () => {
      generation++;
      rows = [];
      update();
      void poll();
    };
    const listeners = [state.busy?.listen(update), state.focusedSessionOwner?.listen(update), state.connectionId.listen(changed), state.profile.listen(changed)];
    const visible = () => {
      if (document.visibilityState === "visible") void poll();
    };
    document.addEventListener("visibilitychange", visible);
    void poll();
    const timer = enabled ? window.setInterval(() => {
      update();
      void poll();
    }, 5e3) : void 0;
    return () => {
      disposed = true;
      if (timer !== void 0) window.clearInterval(timer);
      listeners.forEach((fn) => fn?.());
      document.removeEventListener("visibilitychange", visible);
    };
  }, [enabled]);
  return moods;
}
var moodLabels = { idle: "Idle", think: "Thinking", work: "Recently working", unavailable: "Status unavailable" };

// packages/hermes-plugin/desktop/market-styles.ts
var marketStyles = `
.mybots{width:100%;max-width:75rem;margin:0 auto;padding-block:1.25rem;color:var(--ui-text-primary);font-size:.75rem;line-height:1.5;container-type:inline-size}
.mybots *, .mb-install *{box-sizing:border-box}
.mybots h1{font-size:1rem;font-weight:600;margin:0}
.mybots h2,.mybots h3{font-size:.8125rem;font-weight:600;margin:0}
.mybots p,.mb-install p{margin:0}
.mb-muted{color:var(--ui-text-secondary)}
.mb-header{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1rem}
.mb-header p{margin-top:.25rem;color:var(--ui-text-secondary)}
.mb-toolbar,.mb-actions{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap}
.mb-toolbar{margin-block:1rem}.mb-toolbar>div:first-child{flex:1;min-width:10rem}.mb-filter{width:8rem;flex:none}
.mb-content{margin-top:1rem}.mb-stack{display:grid;gap:1rem}.mb-section{display:grid;gap:.75rem}
.mb-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(12rem,1fr));column-gap:1rem;row-gap:.5rem}
.mb-bot{display:flex;flex-direction:column;align-items:flex-start;gap:.5rem;min-width:0;padding:1rem .5rem}
.mb-bot .mb-avatar{align-self:center}.mb-bot h2{margin-top:.25rem}.mb-bot .mb-description{color:var(--ui-text-secondary);flex:1}
.mb-avatar{display:block;object-fit:contain;flex-shrink:0;overflow:visible;max-width:100%}
.mb-badges{display:flex;gap:.25rem;flex-wrap:wrap}.mb-count{color:var(--ui-text-tertiary);margin-bottom:.5rem!important}
.mb-row{display:flex;align-items:center;gap:.75rem;padding-block:.75rem;min-width:0}.mb-row>div{flex:1;min-width:0}.mb-row p{color:var(--ui-text-secondary);overflow-wrap:anywhere}
.mb-notice{display:grid;gap:.5rem;margin-block:.75rem;color:var(--ui-text-secondary)}.mb-notice>button{justify-self:start}
.mb-error{margin-block:1rem}.mb-error h2{font-size:.875rem}.mb-error>div{gap:.5rem}
.mb-form{display:grid;gap:1rem;max-width:48rem}.mb-form fieldset{border:0;padding:0;margin:0;min-width:0;display:grid;gap:1rem}
.mb-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem 1rem}
.mb-field{display:grid;gap:.375rem;min-width:0}.mb-field-wide{grid-column:1/-1}
.mb-summary{display:grid;grid-template-columns:7rem minmax(0,1fr);gap:.5rem 1rem}.mb-summary dt{color:var(--ui-text-secondary)}.mb-summary dd{margin:0;overflow-wrap:anywhere}
.mb-divider{border:0;border-top:1px solid var(--ui-stroke-tertiary);margin:0}
.mb-drafts{display:flex;flex-wrap:wrap;gap:.375rem}
.mb-install{font-size:.75rem;line-height:1.5}.mb-install-hero{display:flex;align-items:center;gap:1rem}.mb-install-hero>div{min-width:0;display:grid;gap:.375rem}
.mb-options{border:0;margin:0;padding:0;display:grid;gap:.75rem}.mb-options legend{font-weight:600;margin-bottom:.75rem}
.mb-option{display:flex;align-items:center;gap:.5rem}.mb-source{white-space:pre-wrap;font:inherit;max-height:12rem;overflow:auto;color:var(--ui-text-secondary)}
.mb-keys{border:0;margin:0;padding:0;min-width:0;display:grid;gap:.75rem}.mb-keys legend{font-weight:600;margin-bottom:.5rem}
.mb-key{display:grid;gap:.375rem;min-width:0}.mb-key-head{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap}.mb-key-results{margin:0;padding-inline-start:1rem;display:grid;gap:.25rem}
.mb-install small{overflow-wrap:anywhere}.mb-install details{display:grid;gap:.5rem}.mb-install summary{cursor:pointer;color:var(--ui-text-secondary)}
@container(max-width:32rem){.mb-fields{grid-template-columns:1fr}.mb-summary{grid-template-columns:1fr;gap:.25rem}.mb-header{align-items:flex-start}.mb-grid{grid-template-columns:repeat(auto-fill,minmax(10rem,1fr))}}
@media(prefers-reduced-motion:reduce){.mb-avatar{animation:none;transition:none}}
`;

// packages/hermes-plugin/desktop/presentations.ts
function presentBot(bot, display) {
  const p = display?.bots.find((p2) => p2.id === bot.id && p2.version === bot.version);
  if (!p) return display?.locale === "en" ? { ...bot, name: bot.englishName } : bot;
  const next = structuredClone(bot);
  for (const key of ["name", "role", "personality", "description", "firstPrompt"]) if (typeof p[key] === "string" && p[key].trim() && p[key].length <= (key === "name" ? 80 : 1e3)) next[key] = p[key];
  if (next.voice && typeof p.voiceStyle === "string" && p.voiceStyle.length <= 2e3) next.voice.style = p.voiceStyle;
  if (Array.isArray(p.external) && p.external.length === next.external.length) next.external = next.external.map((link, i) => {
    const label = p.external[i]?.label, requirement = p.external[i]?.requirement;
    return { ...link, label: typeof label === "string" && label.trim() && label.length <= 80 ? label : link.label, requirement: typeof requirement === "string" && requirement.trim() && requirement.length <= 1e3 ? requirement : link.requirement };
  });
  return next;
}
var comingSoon = (bot, display) => display?.bots.some((p) => p.id === bot.id && p.availability === "coming-soon") === true;

// packages/hermes-plugin/desktop/market-page.tsx
import { Fragment as Fragment5, jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var INSTALLED_FAILED = "Could not load installed bots. Please retry.";
function MarketPage({ ctx, renderTab }) {
  const { t, locale, dir, contentLocale } = useMyBots();
  const [display, setDisplay] = useState7(null);
  const [displayDone, setDisplayDone] = useState7("");
  const [tab, setTab] = useState7("browse"), [view, setView] = useState7(null), [installed, setInstalled] = useState7([]), [query, setQuery] = useState7(""), [category, setCategory] = useState7("all"), [selected, setSelected] = useState7(null), [error, setError] = useState7(""), [busy, setBusy] = useState7(false), [reload, setReload] = useState7(0), [hash, setHash] = useState7(location.hash), [linkSequence, setLinkSequence] = useState7(0), [keysFor, setKeysFor] = useState7(null), [updateFor, setUpdateFor] = useState7(null);
  const fence = useRef6(new ReviewFence()), local = useLocal();
  useEffect7(() => {
    const update = () => {
      setSelected(null);
      setHash(location.hash);
    };
    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);
    const desktop = window.hermesDesktop;
    const unsubscribe = desktop?.onDeepLink?.((payload) => {
      if (payload?.kind !== "mybots" || payload.name !== "install") return;
      setSelected(null);
      setHash("");
      try {
        const url = "hermes://mybots/install?" + new URLSearchParams(payload.params || {});
        parseInstallLink(url);
        setLinkSequence((n) => n + 1);
        setHash("#/" + url.slice("hermes://".length));
      } catch {
      }
    });
    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
      unsubscribe?.();
    };
  }, []);
  useEffect7(() => {
    const ticket = fence.current.begin();
    let fresh = false;
    setBusy(true);
    setError("");
    const api = new MarketApi(ctx);
    api.installed().then((x) => {
      if (fence.current.isCurrent(ticket) && !fresh) setInstalled(x);
    }).catch(() => {
      if (fence.current.isCurrent(ticket) && !fresh) setError(INSTALLED_FAILED);
    });
    api.load().then((x) => {
      if (fence.current.isCurrent(ticket)) {
        setView(x);
        if (Array.isArray(x.statuses)) {
          fresh = true;
          setInstalled(x.statuses);
          setError((e) => e === INSTALLED_FAILED ? "" : e);
        }
      }
    }, () => {
      if (fence.current.isCurrent(ticket)) {
        setView(null);
        setError("Could not load the catalog. Installed bots are still available.");
      }
    }).finally(() => {
      if (fence.current.isCurrent(ticket)) setBusy(false);
    });
    return () => fence.current.invalidate();
  }, [ctx, reload, local]);
  useEffect7(() => {
    if (!view || view.cached || displayDone !== view.origin + "|" + contentLocale) return;
    try {
      const link = parseInstallLink("hermes://" + hash.replace(/^#\/?/, ""));
      const latest = view.catalog.bots.find((b) => b.id === link.bot && b.version === link.version);
      const exact = view.catalog.trusted.find((b) => b.metadata.id === link.bot && b.metadata.version === link.version);
      const avatar = exact?.files.find((f) => f.component === "avatar");
      const bot = latest || (exact && avatar ? { ...exact.metadata, avatarUrl: `/api/bots/${link.bot}/${link.version}/files/${avatar.path.split("/").map(encodeURIComponent).join("/")}`, detailUrl: `/bots/${link.bot}`, installUrl: installLink(link.bot, link.version) } : null);
      if (bot) setSelected(bot);
      else setError("This bot version is no longer published.");
    } catch {
    }
  }, [hash, view, linkSequence, displayDone, contentLocale]);
  const close = useCallback(() => {
    setSelected(null);
    try {
      parseInstallLink("hermes://" + location.hash.replace(/^#\/?/, ""));
      location.hash = "#/mybots";
      setHash(location.hash);
    } catch {
    }
  }, []);
  const done = useCallback(() => {
    const api = new MarketApi(ctx), fallback = () => api.installed().then(setInstalled);
    api.load().then((v) => Array.isArray(v?.statuses) ? setInstalled(v.statuses) : fallback(), fallback).catch(() => setError("Refresh to check installation status."));
  }, [ctx]);
  const moods = useBotStatuses(tab === "browse" || tab === "installed" || !!selected);
  const installedProfile = (bot) => installed.find((x) => x.bot === bot.id && x.version === bot.version && x.state === "installed");
  const botMood = (bot) => {
    const own = installedProfile(bot);
    return own ? moods[own.profile] || "unavailable" : "idle";
  };
  useEffect7(() => {
    let active = true;
    if (!view) return;
    const key = view.origin + "|" + contentLocale, settle = () => {
      if (active) setDisplayDone(key);
    };
    const timer = setTimeout(settle, 3e3);
    new MarketApi(ctx).presentations(contentLocale).then((catalog) => {
      if (active && catalog?.locale === contentLocale && Array.isArray(catalog.bots)) setDisplay({ origin: view.origin, catalog });
    }, () => {
    }).finally(() => {
      clearTimeout(timer);
      settle();
    });
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [ctx, view, contentLocale]);
  const linkWaiting = !!view && !view.cached && !selected && displayDone !== view.origin + "|" + contentLocale && (() => {
    try {
      parseInstallLink("hermes://" + hash.replace(/^#\/?/, ""));
      return true;
    } catch {
      return false;
    }
  })();
  const presentation = display?.origin === view?.origin && display?.catalog.locale === contentLocale ? display.catalog : null;
  const shown = (bot) => presentBot(bot, presentation ?? { locale: contentLocale, bots: [] });
  const installedLabel = (x) => {
    const original = view?.catalog.trusted.find((b) => b.metadata.id === x.bot && b.metadata.version === x.version)?.metadata;
    if (!original || x.name && x.name !== original.name && x.name !== original.englishName) return x.name || x.bot;
    return presentBot(original, presentation ?? { locale: contentLocale, bots: [] }).name;
  };
  const latestBot = (x) => x.updatable && x.latest ? view?.catalog.bots.find((b) => b.id === x.bot && b.version === x.latest) ?? null : null;
  const visible = filterBots((view?.catalog.bots || []).map(shown), query, category);
  const portrait = (id, version) => {
    const b = view?.catalog.trusted.find((b2) => b2.metadata.id === id && b2.metadata.version === version);
    const f = b?.files.find((f2) => f2.component === "avatar");
    return f ? { sha256: f.sha256, src: new URL(`/api/bots/${id}/${version}/files/${f.path.split("/").map(encodeURIComponent).join("/")}`, view.origin).href } : null;
  };
  return /* @__PURE__ */ jsxs6("main", { lang: locale, dir, className: "mybots px-[clamp(1.25rem,4vw,4rem)]", children: [
    /* @__PURE__ */ jsx7("style", { children: marketStyles }),
    /* @__PURE__ */ jsxs6("header", { className: "mb-header", children: [
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx7("h1", { children: "MyBots" }),
        /* @__PURE__ */ jsx7("p", { children: t("Find your next AI colleague.") })
      ] }),
      (tab === "browse" || tab === "installed") && /* @__PURE__ */ jsx7(Button2, { variant: "ghost", disabled: busy, loading: busy, onClick: () => setReload((n) => n + 1), children: t("Refresh") })
    ] }),
    /* @__PURE__ */ jsx7(Tabs, { dir, value: tab, onValueChange: (v) => setTab(v), children: /* @__PURE__ */ jsx7(TabsList, { className: "self-start", "aria-label": t("MyBots menu"), children: [["browse", t("Browse bots")], ["installed", t("Installed bots")], ["submissions", t("My submissions")], ["connection", t("Connection settings")]].map(([value, label]) => /* @__PURE__ */ jsx7(TabsTrigger, { value, children: label }, value)) }) }),
    error && /* @__PURE__ */ jsx7(Failure, { message: t(error) }),
    /* @__PURE__ */ jsxs6("div", { className: "mb-content", children: [
      linkWaiting && /* @__PURE__ */ jsx7(Loader, { label: t("Loading colleagues") }),
      tab === "browse" && /* @__PURE__ */ jsxs6(Fragment5, { children: [
        !local && /* @__PURE__ */ jsx7(LocalNotice, {}),
        view?.cached && /* @__PURE__ */ jsxs6("section", { className: "mb-notice", role: "status", children: [
          /* @__PURE__ */ jsx7("p", { children: t("Showing the saved catalog while offline. Reconnect to install.") }),
          /* @__PURE__ */ jsxs6("small", { children: [
            t("Last checked:"),
            new Date(view.checkedAt).toLocaleString(locale === "zh-hant" ? "zh-TW" : locale)
          ] })
        ] }),
        !!view?.catalog.bots.length && /* @__PURE__ */ jsxs6("div", { className: "mb-toolbar", children: [
          /* @__PURE__ */ jsx7(SearchField, { "aria-label": t("Search bots"), placeholder: t("Search by name or role"), value: query, onChange: setQuery }),
          /* @__PURE__ */ jsx7("div", { className: "mb-filter", children: /* @__PURE__ */ jsx7(Choice, { label: t("Bot category"), value: category, onChange: (v) => setCategory(v), options: [["all", t("All categories")], ["business", t("Business")], ["learning", t("Learning")], ["daily", t("Daily life")]] }) })
        ] }),
        busy && !view && /* @__PURE__ */ jsx7(Loader, { label: t("Loading colleagues") }),
        view && /* @__PURE__ */ jsx7("p", { className: "mb-count", children: t("{0} colleagues", visible.length) }),
        /* @__PURE__ */ jsx7("div", { className: "mb-grid", children: visible.map((bot) => {
          const asset = portrait(bot.id, bot.version), owned = !!installedProfile(bot), soon = comingSoon(bot, presentation);
          const mood = botMood(bot);
          return /* @__PURE__ */ jsxs6("article", { className: "mb-bot", children: [
            /* @__PURE__ */ jsx7(BotAvatar, { bot: bot.id, name: bot.name, src: new URL(bot.avatarUrl, view.origin).href, sha256: asset?.sha256, mood, size: 112 }),
            /* @__PURE__ */ jsx7("h2", { children: bot.name }),
            /* @__PURE__ */ jsx7("p", { children: bot.role }),
            /* @__PURE__ */ jsx7("p", { className: "mb-description", children: bot.description }),
            /* @__PURE__ */ jsxs6("div", { className: "mb-badges", children: [
              soon && /* @__PURE__ */ jsx7(Badge, { id: "mb-soon-" + bot.id, variant: "muted", children: t("Coming soon") }),
              /* @__PURE__ */ jsx7(Badge, { variant: "muted", children: t("Soul") }),
              bot.optional.map((c) => /* @__PURE__ */ jsx7(Badge, { variant: "muted", children: { skills: t("Skills"), mcp: "MCP", plugin: t("Plugins"), voice: t("Voice") }[c] }, c))
            ] }),
            /* @__PURE__ */ jsxs6("div", { className: "mb-actions", children: [
              /* @__PURE__ */ jsx7(Button2, { variant: "secondary", disabled: view.cached || !local || soon, "aria-describedby": soon ? "mb-soon-" + bot.id : void 0, onClick: () => setSelected(view.catalog.bots.find((b) => b.id === bot.id && b.version === bot.version) ?? bot), children: t("Meet") }),
              /* @__PURE__ */ jsx7("small", { className: "mb-muted", children: owned ? t(moodLabels[mood]) : t("Motion preview") })
            ] })
          ] }, bot.id);
        }) }),
        view && visible.length === 0 && /* @__PURE__ */ jsx7(EmptyState, { title: t("No matching bots"), description: t("Try another search or category.") })
      ] }),
      tab === "installed" && /* @__PURE__ */ jsxs6("section", { className: "mb-section", children: [
        /* @__PURE__ */ jsx7("h2", { children: t("Installed bots") }),
        listedInstalled(installed).length === 0 && /* @__PURE__ */ jsx7(EmptyState, { title: t("No bots installed yet"), description: t("Find your first colleague in Browse bots.") }),
        listedInstalled(installed).map((x) => {
          const asset = portrait(x.bot, x.version);
          const mood = moods[x.profile] || "unavailable", label = installedLabel(x);
          return /* @__PURE__ */ jsxs6("article", { className: "mb-row", children: [
            asset && /* @__PURE__ */ jsx7(BotAvatar, { bot: x.bot, name: label, src: asset.src, sha256: asset.sha256, mood, size: 56 }),
            /* @__PURE__ */ jsxs6("div", { children: [
              /* @__PURE__ */ jsx7("h3", { children: label }),
              /* @__PURE__ */ jsxs6("p", { children: [
                x.profile,
                " · ",
                x.version || t("Check version")
              ] }),
              /* @__PURE__ */ jsx7("small", { className: "mb-muted", children: t(moodLabels[mood]) })
            ] }),
            /* @__PURE__ */ jsx7(Badge, { variant: x.state === "name-conflict" ? "warn" : "muted", children: x.updatable ? t("Update available") : x.state === "installed" ? t("Installed") : x.state === "other-version" ? t("Other version") : t("Check files") }),
            (() => {
              const badge = keyBadge(x.secrets);
              return badge && /* @__PURE__ */ jsx7(Badge, { variant: badge.variant, children: t(badge.label) });
            })(),
            !!x.secrets?.length && x.version && (x.state === "installed" || x.state === "other-version") && /* @__PURE__ */ jsx7(Button2, { variant: "secondary", disabled: !local, onClick: () => setKeysFor(x), children: t("Add keys") }),
            (() => {
              const latest = latestBot(x);
              return latest && /* @__PURE__ */ jsx7(Button2, { variant: "secondary", disabled: !local || view.cached || comingSoon(latest, presentation), onClick: () => setUpdateFor(x), children: t("Update") });
            })(),
            (x.state === "installed" || x.state === "other-version") && /* @__PURE__ */ jsx7(Button2, { variant: "secondary", onClick: () => {
              const d = profileDestination(x.profile);
              host4.newChat(d.route, d.options);
              location.hash = "#/";
            }, children: t("Open chat") })
          ] }, x.profile);
        })
      ] }),
      (tab === "connection" || tab === "submissions") && (renderTab ? renderTab(tab) : /* @__PURE__ */ jsx7(Loader, { label: t("Loading submissions") }))
    ] }),
    keysFor?.version && keysFor.secrets && /* @__PURE__ */ jsx7(AddKeysDialog, { ctx, status: { ...keysFor, version: keysFor.version, secrets: keysFor.secrets }, label: installedLabel(keysFor), onClose: () => setKeysFor(null), onSaved: done }, keysFor.profile),
    updateFor && (() => {
      const latest = latestBot(updateFor);
      return latest && /* @__PURE__ */ jsx7(InstallConfirmation, { mode: "update", ctx, bot: shown(latest), mood: moods[updateFor.profile] || "unavailable", status: updateFor, onClose: () => setUpdateFor(null), onInstalled: done, onKeysSaved: done, comingSoon: comingSoon(latest, presentation) }, "update:" + updateFor.profile);
    })(),
    selected && /* @__PURE__ */ jsx7(InstallConfirmation, { ctx, bot: shown(selected), mood: botMood(selected), status: installed.find((x) => x.bot === selected.id), onClose: close, onInstalled: done, onKeysSaved: done, comingSoon: comingSoon(selected, presentation) }, selected.id + "@" + selected.version)
  ] });
}

// packages/hermes-plugin/desktop/plugin.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var plugin_default = {
  id: "mybots",
  name: "MyBots",
  version: "0.6.0",
  description: "Browse and install MyBots profiles",
  defaultEnabled: true,
  register(ctx) {
    registerMyBotsI18n(ctx);
    const disposeIcon = registerLumiIcon();
    ctx.onDispose?.(disposeIcon);
    ctx.registerMany([
      { id: "market", area: ROUTES_AREA, data: { path: "/mybots" }, render: () => /* @__PURE__ */ jsx8(MarketPage, { ctx, renderTab: (tab) => tab === "connection" ? /* @__PURE__ */ jsx8(ConnectionPage, { ctx }) : /* @__PURE__ */ jsx8(SubmissionsPage, { ctx }) }) },
      { id: "install", area: ROUTES_AREA, data: { path: "/mybots/install" }, render: () => /* @__PURE__ */ jsx8(MarketPage, { ctx, renderTab: (tab) => tab === "connection" ? /* @__PURE__ */ jsx8(ConnectionPage, { ctx }) : /* @__PURE__ */ jsx8(SubmissionsPage, { ctx }) }) },
      { id: "nav", area: SIDEBAR_NAV_AREA, data: { path: "/mybots", label: "MyBots", codicon: "mybots-lumi" } }
    ]);
  }
};
export {
  plugin_default as default
};
