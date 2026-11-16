# mybots-plugin

**바로 함께 일할 AI 동료를 Hermes Desktop에 영입하세요.**

English: [README.md](./README.md)

MyBots는 Hermes Desktop과 [MyBots 갤러리](https://mybots.work)를 연결합니다.
AI 동료를 둘러보고, 소울과 아바타를 확인한 뒤 봇마다 제공하는 스킬·MCP·플러그인·추천
보이스를 선택해 설치할 수 있습니다. 설치한 프로필은 Hermes에서 개인화할 수 있습니다.

## 준비

- 로컬 백엔드가 준비된 Hermes Desktop v0.21.5 이상.
- 프로필 설치 시 **이 기기(This device) / default** 연결.
- `plugin.yaml`에 선언된 Python 의존성. 설치 과정에서 Hermes가 의존성 검토를 안내합니다.

MyBots는 Hermes Agent만 지원합니다. 봇 탐색과 설치에는 MyBots 제작자 API 키가
필요하지 않습니다. 대화 모델, 음성 제공자와 사용하는 외부 서비스는 Hermes에서 별도로
설정하고 인증하세요.

## 설치

1. **Hermes → 설정 → 플러그인 → 플러그인 관리**를 엽니다.
2. **Git에서 설치**를 누릅니다.
3. `https://github.com/dandacompany/mybots-plugin`을 입력하고 **저장소 검토**를 누릅니다.
4. **에이전트**와 **데스크톱** 구성을 모두 포함합니다. 에이전트 대상은 **이 기기 / default**로
   선택하고, 의존성을 검토한 뒤 설치합니다.
5. 플러그인 목록에서 두 구성이 모두 켜져 있는지 확인합니다. Hermes가 재시작을 안내하면
   다시 연 뒤 왼쪽 메뉴에서 **MyBots**를 엽니다.

로컬에서 개발할 때도 같은 창에 해당 Git 저장소 주소를 입력하세요. CLI로 에이전트
구성만 설치하면 위 데스크톱 설치 절차가 완료되지 않습니다.

## 업데이트

macOS·Linux·Windows에서 같은 명령을 실행합니다.

```sh
hermes plugins update mybots
```

현재 활성 Hermes 프로필의 MyBots를 업데이트합니다. 기본 프로필을 명시하려면
`hermes -p default plugins update mybots`를 사용하세요. 여러 프로필에 MyBots를
별도로 설치했다면 `hermes -p PROFILE plugins update mybots`의 `PROFILE`을 각
프로필 이름으로 바꿔 반복합니다. `-p`는 `plugins` 앞에 두며, 아래 활성화·버전 확인
명령에도 같은 프로필 지정을 사용하세요.

MyBots가 비활성화돼 있으면 업데이트 성공 후 다시 켭니다.

```sh
hermes plugins enable mybots
```

이전 버전은 의존성 충돌로 자동 비활성화될 수 있었습니다. 업데이트로 알려진 충돌은
해소되지만, 이후 플러그인이 켜져 있는지 확인하세요.

해당 프로필들을 서비스하는 Hermes 게이트웨이를 다시 시작합니다. 기본 게이트웨이는
다음 명령을 사용합니다.

```sh
hermes -p default gateway restart
```

이어서 Hermes Desktop을 완전히 종료한 뒤 다시 실행하세요. 창만 닫는 것으로는
충분하지 않습니다. 대시보드 API와 Desktop 번들을 다시 불러오며, 게이트웨이 재시작으로
팀 키트를 적용합니다. 대시보드 백엔드를 별도로 실행 중이면 그것도 재시작하세요.
Desktop만 다시 열어도 독립적으로 실행 중인 게이트웨이가 재시작되지는 않습니다.

다음 목록의 `mybots` 행에서 설치된 버전과 활성 상태를 확인합니다.

```sh
hermes -p default plugins list --plain
```

Windows 관리자 계정에서 발생하던 카탈로그 소유자 검사 오류는 **0.7.23**에서
수정했습니다. 설치가 계속 실패하면 오류 코드가 보이는 화면, 발생 시각, 봇 이름,
Hermes 버전(`hermes --version`), MyBots 버전과 `<Hermes home>/logs/errors.log`의
관련 진단 줄 및 바로 뒤의 정제된 traceback을 보내 주세요. 로그 명령이 실제 파일
위치를 표시합니다.

Windows PowerShell:

```powershell
hermes -p default logs errors -n 300 | Select-String 'MyBots (install|ACL|owner) diagnostic' -Context 0,30
```

macOS / Linux:

```sh
hermes -p default logs errors -n 300 | grep -E -A 30 'MyBots (install|ACL|owner) diagnostic'
```

## 사용

MyBots에서 동료를 고르고 설치할 구성을 검토하세요. 웹사이트의 영입 버튼으로도
설치를 시작할 수 있습니다. 기존 프로필은 보존합니다. 설치한 소울의 성격·말투·배경·업무
기준을 수정해 나만의 동료로 만들 수 있습니다.

봇이 외부 서비스 키를 쓰는 경우 설치 창에서 키를 바로 넣을 수 있습니다. 기본
프로필에 같은 키가 있으면 미리 채워지고, 새로 넣은 키는 원하면 기본 프로필에도 저장합니다.
키는 그 봇 프로필의 `.env`에만 저장되며 MyBots 서버로 보내지 않습니다. 설치한 뒤에는
설치 목록의 **키 넣기**로 추가할 수 있습니다. 아직 공개되지 않은 봇은 **준비 중**으로
표시되고 설치할 수 없습니다.

직접 만든 봇을 제출하려면 발급받은 MyBots 제작자 API 키를 연결 설정에서 등록하세요.
제작자 키는 이 저장소에 포함되어 있지 않습니다.

## 언어

MyBots는 Hermes Desktop의 언어 설정을 자동으로 따릅니다. 영어·한국어·중국어 간체·중국어 번체·일본어·아랍어·러시아어·프랑스어·독일어·스페인어 UI를 지원하며, 아랍어는 오른쪽에서 왼쪽으로 표시합니다. 다른 언어 팩은 영어를 사용합니다. 언어를 바꿔도 열린 폼, 선택한 파일과 설치 옵션을 유지합니다.

봇 소개는 한국어 설정에서 한국어, 그 외에는 영어로 표시합니다. 표시 문구 번역은 서명된 설치 패키지와 소울·보이스 지시문을 바꾸지 않습니다. Hermes 코어를 수정할 필요는 없습니다. 번역된 소개를 가져올 수 없을 때는 제작자가 작성한 원래 소개를 표시합니다.

## 보안과 권한

- 처음 사용하는 카탈로그는 `https://mybots.work`입니다. 패키지에 고정된 운영 Ed25519
  공개키로 카탈로그 서명을 검증하고, 검토한 패키지를 설치하기 전에 파일 해시를 확인합니다.
- 프로필 설치는 로컬 default 연결에서 진행합니다. 선택한 구성요소를 로컬 Hermes
  프로필에 기록하며 기존 프로필은 보존합니다.
- 선택한 MCP와 플러그인은 코드를 실행할 수 있습니다. 설치 전에 제공하는 구성과 권한을
  확인하세요.
- 서비스 인증정보와 기기별 설정은 패키지에 포함하지 않습니다. 기존 MyBots 로컬 설정은
  보존합니다. 서명 검증은 발행자와 패키지 무결성을 확인하며, 설치한 코드를 격리하지 않습니다.

## 패키지 구성

`plugin.yaml`과 `__init__.py`는 에이전트 패키지를 식별합니다. `dashboard/`는 Hermes의
인증된 전송 경로 뒤에서 API를 제공합니다. `desktop/plugin.js`는 Hermes 플러그인 SDK로
사이드바 갤러리와 설치 화면을 제공합니다.

코드 주석과 커밋 메시지는 영문으로 작성합니다. 설치 방식이 바뀌면 영문과 한국어 README를
함께 갱신합니다.

## 라이선스

[MIT](./LICENSE) © 2026 Dante Labs.

---
[Dante Labs](https://dante-labs.com) · [YouTube @dante-labs](https://youtube.com/@dante-labs) · [메일](mailto:dante@dante-labs.com) · [커뮤니티](https://discord.com/invite/rXyy5e9ujs) · [후원](https://buymeacoffee.com/dante.labs)
