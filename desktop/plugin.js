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
    "Environment \xB7 provider": "Environment \xB7 provider",
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
    "PNG/JPEG \xB7 square, 128\u20132048px": "PNG/JPEG \xB7 square, 128\u20132048px",
    "Save Soul and avatar package": "Save Soul and avatar package",
    "Full package": "Full package",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "Choose a full ZIP for bots with skills, MCP, plugins or voice.",
    "Choose package": "Choose package",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "This Hermes version has no plugin file picker. Upload through the CMS.",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "ZIP details differ from the draft. Apply the ZIP details before uploading.",
    "Apply ZIP details and upload": "Apply ZIP details and upload",
    Cancel: "Cancel",
    "Validate package": "Validate package",
    "Validated \xB7 awaiting CMS review and publication.": "Validated \xB7 awaiting CMS review and publication.",
    "Published \xB7 available in the gallery.": "Published \xB7 available in the gallery.",
    "MCP \xB7 runs local Python": "MCP \xB7 runs local Python",
    "Plugin \xB7 runs local Python": "Plugin \xB7 runs local Python",
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
    "Install and submit from Local \u2192 default on this device.": "Install and submit from Local \u2192 default on this device.",
    "Could not open the local connection. Please retry.": "Could not open the local connection. Please retry.",
    "Connect to this device\u2019s default": "Connect to this device\u2019s default",
    Idle: "Idle",
    Thinking: "Thinking",
    "Recently working": "Recently working",
    "Status unavailable": "Status unavailable",
    "{0} avatar": "{0} avatar",
    "Confirm installation of {0}": "Confirm installation of {0}",
    "Not auditioned": "Not auditioned",
    "Existing voice settings were preserved. Check the profile\u2019s Voice settings.": "Existing voice settings were preserved. Check the profile\u2019s Voice settings.",
    "Recommended voice {0} included. Check voice authentication.": "Recommended voice {0} included. Check voice authentication.",
    "Voice settings were not included.": "Voice settings were not included.",
    "Validation issue at {0}. Check the package format and required fields.": "Validation issue at {0}. Check the package format and required fields.",
    Avatar: "Avatar",
    "Revision {0}": "Revision {0}",
    "{0} bytes": "{0} bytes"
  },
  ko: {
    "Could not load installed bots. Please retry.": "\uC124\uCE58\uB41C \uBD07\uC744 \uD655\uC778\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.",
    "Could not load the catalog. Installed bots are still available.": "\uCE74\uD0C8\uB85C\uADF8\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC124\uCE58\uB41C \uBD07\uC740 \uACC4\uC18D \uC5F4 \uC218 \uC788\uC5B4\uC694.",
    "This bot version is no longer published.": "\uC774 \uB9C1\uD06C\uC758 \uBD07 \uBC84\uC804\uC740 \uD604\uC7AC \uACF5\uAC1C\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
    "Refresh to check installation status.": "\uC124\uCE58 \uC0C1\uD0DC\uB97C \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.",
    "Find your next AI colleague.": "\uB098\uC640 \uB9DE\uB294 AI \uB3D9\uB8CC\uB97C \uCC3E\uC544\uBCF4\uC138\uC694.",
    Refresh: "\uC0C8\uB85C\uACE0\uCE68",
    "MyBots menu": "MyBots \uBA54\uB274",
    "Browse bots": "\uBD07 \uD0D0\uC0C9",
    "Installed bots": "\uC124\uCE58\uB41C \uBD07",
    "My submissions": "\uB0B4 \uB4F1\uB85D",
    "Connection settings": "\uC5F0\uACB0 \uC124\uC815",
    "Showing the saved catalog while offline. Reconnect to install.": "\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD574 \uC800\uC7A5\uB41C \uBAA9\uB85D\uC744 \uBCF4\uC5EC\uB4DC\uB824\uC694. \uC124\uCE58\uD558\uB824\uBA74 \uB2E4\uC2DC \uC5F0\uACB0\uD574 \uC8FC\uC138\uC694.",
    "Last checked:": "\uB9C8\uC9C0\uB9C9 \uD655\uC778:",
    "Search bots": "\uBD07 \uAC80\uC0C9",
    "Search by name or role": "\uC774\uB984\uC774\uB098 \uC5ED\uD560\uB85C \uAC80\uC0C9",
    "Bot category": "\uBD07 \uBD84\uB958",
    "All categories": "\uBAA8\uB4E0 \uBD84\uB958",
    Business: "\uC5C5\uBB34",
    Learning: "\uD559\uC2B5",
    "Daily life": "\uC77C\uC0C1",
    "Loading colleagues": "\uB3D9\uB8CC\uB97C \uBD88\uB7EC\uC624\uACE0 \uC788\uC5B4\uC694",
    "{0} colleagues": "{0}\uBA85\uC758 \uB3D9\uB8CC",
    Soul: "\uC18C\uC6B8",
    Skills: "\uC2A4\uD0AC",
    Plugins: "\uD50C\uB7EC\uADF8\uC778",
    Voice: "\uBCF4\uC774\uC2A4",
    Meet: "\uB9CC\uB098\uBCF4\uAE30",
    "Motion preview": "\uBAA8\uC158 \uBBF8\uB9AC\uBCF4\uAE30",
    "No matching bots": "\uC870\uAC74\uC5D0 \uB9DE\uB294 \uBD07\uC774 \uC5C6\uC5B4\uC694",
    "Try another search or category.": "\uAC80\uC0C9\uC5B4\uB098 \uBD84\uB958\uB97C \uBC14\uAFD4\uBCF4\uC138\uC694.",
    "No bots installed yet": "\uC544\uC9C1 \uC124\uCE58\uB41C \uBD07\uC774 \uC5C6\uC5B4\uC694",
    "Find your first colleague in Browse bots.": "\uBD07 \uD0D0\uC0C9\uC5D0\uC11C \uCCAB \uB3D9\uB8CC\uB97C \uB9CC\uB098\uBCF4\uC138\uC694.",
    "Check version": "\uBC84\uC804 \uD655\uC778 \uD544\uC694",
    Installed: "\uC124\uCE58\uB428",
    "Other version": "\uB2E4\uB978 \uBC84\uC804",
    "Check files": "\uD30C\uC77C \uD655\uC778 \uD544\uC694",
    "Open chat": "\uB300\uD654 \uC5F4\uAE30",
    "Loading submissions": "\uB4F1\uB85D \uAE30\uB2A5\uC744 \uC5F0\uACB0\uD558\uACE0 \uC788\uC5B4\uC694",
    "Could not load connection settings. Check the server origin.": "\uC5F0\uACB0 \uC815\uBCF4\uB97C \uD655\uC778\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC11C\uBC84 \uCD9C\uCC98 \uC124\uC815\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.",
    "Could not connect. Check key expiry, permissions and storage.": "\uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uD0A4 \uB9CC\uB8CC\xB7\uD3D0\uAE30\xB7\uAD8C\uD55C\uACFC \uC120\uD0DD\uD55C \uC800\uC7A5\uC18C\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "\uBD07 \uD0D0\uC0C9\uACFC \uC124\uCE58\uB294 \uD0A4 \uC5C6\uC774 \uC774\uC6A9\uD574\uC694. \uB0B4 \uBD07 \uB4F1\uB85D\uC5D0\uB294 \uC81C\uC791\uC790 API \uD0A4\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.",
    Server: "\uC11C\uBC84",
    Connection: "\uC5F0\uACB0",
    Connected: "\uC5F0\uACB0\uB428",
    Disconnected: "\uC5F0\uACB0 \uC548 \uB428",
    "Environment \xB7 provider": "\uD658\uACBD \xB7 \uACF5\uAE09\uC790",
    Permissions: "\uAD8C\uD55C",
    Expires: "\uB9CC\uB8CC",
    "Key provider": "\uD0A4 \uACF5\uAE09\uC790",
    "bws item ID (recommended)": "bws \uD56D\uBAA9 ID (\uB2E8\uD14C \uAD8C\uC7A5)",
    "OS secure storage": "OS \uBCF4\uC548 \uC800\uC7A5\uC18C",
    "This session only": "\uC774\uBC88 \uC138\uC158\uB9CC",
    "bws item ID": "bws \uD56D\uBAA9 ID",
    "MyBots API key": "MyBots API \uD0A4",
    "Session keys stay in backend memory and are cleared on restart.": "\uD0A4\uB294 \uC774\uBC88 \uBC31\uC5D4\uB4DC \uC138\uC158\uC758 \uBA54\uBAA8\uB9AC\uC5D0\uB9CC \uBCF4\uAD00\uD558\uBA70 \uC7AC\uC2DC\uC791\uD558\uBA74 \uD574\uC81C\uB429\uB2C8\uB2E4.",
    "Secure OS storage is unavailable. Choose bws or session storage.": "\uC774 Hermes \uD658\uACBD\uC5D0\uB294 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 OS \uBCF4\uC548 \uC800\uC7A5\uC18C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. bws \uB610\uB294 \uC774\uBC88 \uC138\uC158\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.",
    Connect: "\uC5F0\uACB0\uD558\uAE30",
    Disconnect: "\uC5F0\uACB0 \uD574\uC81C",
    "Refresh connection": "\uC5F0\uACB0 \uC0C1\uD0DC \uC0C8\uB85C\uACE0\uCE68",
    Draft: "\uCD08\uC548",
    Validated: "\uAC80\uC99D \uC644\uB8CC",
    Published: "\uACF5\uAC1C\uB428",
    Unpublished: "\uBE44\uACF5\uAC1C",
    "Bot ID": "\uBD07 ID",
    Version: "\uBC84\uC804",
    Name: "\uC774\uB984",
    "English name": "\uC601\uBB38 \uC774\uB984",
    Role: "\uC5ED\uD560",
    Personality: "\uC131\uACA9",
    Description: "\uC18C\uAC1C",
    "First prompt": "\uCCAB \uC9C8\uBB38",
    "Could not load connection details.": "\uC5F0\uACB0 \uC815\uBCF4\uB97C \uD655\uC778\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.",
    "Could not load submissions. Check your key connection.": "\uB4F1\uB85D \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uD0A4 \uC5F0\uACB0\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.",
    "The screen or connection changed.": "\uD654\uBA74\uC774\uB098 \uC5F0\uACB0\uC774 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "\uC800\uC7A5\xB7\uAC80\uC99D\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC785\uB825, \uD0A4 \uC5F0\uACB0\uACFC \uC11C\uBC84 \uC0C1\uD0DC\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694. \uC751\uB2F5\uC744 \uBABB \uBC1B\uC558\uB2E4\uBA74 \uAC19\uC740 \uB0B4\uC6A9\uC73C\uB85C \uB2E4\uC2DC \uC800\uC7A5\uD558\uAC70\uB098 \uBAA9\uB85D\uC744 \uC0C8\uB85C\uACE0\uCE68\uD558\uC138\uC694.",
    "Select MyBots package": "MyBots \uD328\uD0A4\uC9C0 \uC120\uD0DD",
    "ZIP ID or version differs. Create a new draft.": "ZIP\uC758 ID \uB610\uB294 \uBC84\uC804\uC774 \uB2E4\uB985\uB2C8\uB2E4. \uC0C8 \uCD08\uC548\uC744 \uB9CC\uB4E4\uC5B4 \uC8FC\uC138\uC694.",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "\uB0B4 \uBD07\uC744 \uC800\uC7A5\uD558\uACE0 \uD328\uD0A4\uC9C0\uB97C \uAC80\uC99D\uD574\uC694. \uACF5\uAC1C \uBC1C\uD589\uC740 \uC6B4\uC601\uC790\uAC00 CMS\uC5D0\uC11C \uAC80\uD1A0\uD569\uB2C8\uB2E4.",
    "Connect a creator API key in Connection settings first.": "\uC5F0\uACB0 \uC124\uC815\uC5D0\uC11C \uC81C\uC791\uC790 API \uD0A4\uB97C \uBA3C\uC800 \uC5F0\uACB0\uD574 \uC8FC\uC138\uC694.",
    "Submit a bot": "\uC0C8 \uBD07 \uB4F1\uB85D",
    "Refresh submissions": "\uB4F1\uB85D \uBAA9\uB85D \uC0C8\uB85C\uACE0\uCE68",
    "No submissions yet": "\uC544\uC9C1 \uB4F1\uB85D\uD55C \uBD07\uC774 \uC5C6\uC5B4\uC694",
    "Start your first draft with a Soul and avatar.": "\uC18C\uC6B8\uACFC \uC544\uBC14\uD0C0\uB85C \uCCAB \uCD08\uC548\uC744 \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694.",
    "Submission details": "\uB4F1\uB85D \uC815\uBCF4",
    "New draft": "\uC0C8 \uCD08\uC548",
    Category: "\uBD84\uB958",
    "Save details": "\uC815\uBCF4 \uC800\uC7A5",
    "Save draft": "\uCD08\uC548 \uC800\uC7A5",
    "Soul and avatar": "\uC18C\uC6B8\uACFC \uC544\uBC14\uD0C0",
    "Select bot avatar": "\uBD07 \uC544\uBC14\uD0C0 \uC120\uD0DD",
    "Choose avatar": "\uC544\uBC14\uD0C0 \uC120\uD0DD",
    "Avatar selected": "\uC544\uBC14\uD0C0 \uC120\uD0DD\uB428",
    "PNG/JPEG \xB7 square, 128\u20132048px": "PNG/JPEG \xB7 \uC815\uC0AC\uAC01\uD615 128\u20132048px",
    "Save Soul and avatar package": "\uC18C\uC6B8\xB7\uC544\uBC14\uD0C0 \uD328\uD0A4\uC9C0 \uC800\uC7A5",
    "Full package": "\uC804\uCCB4 \uD328\uD0A4\uC9C0",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "\uC2A4\uD0AC\xB7MCP\xB7\uD50C\uB7EC\uADF8\uC778\xB7\uBCF4\uC774\uC2A4\uAC00 \uC788\uB294 \uBD07\uC740 \uC804\uCCB4 ZIP \uD328\uD0A4\uC9C0\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.",
    "Choose package": "\uD328\uD0A4\uC9C0 \uC120\uD0DD",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "\uC774 Hermes \uBC84\uC804\uC740 \uD50C\uB7EC\uADF8\uC778 \uD30C\uC77C \uC120\uD0DD\uC744 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. CMS\uC5D0\uC11C \uD328\uD0A4\uC9C0\uB97C \uC62C\uB824 \uC8FC\uC138\uC694.",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "ZIP \uC815\uBCF4\uAC00 \uC800\uC7A5\uB41C \uCD08\uC548\uACFC \uB2E4\uB985\uB2C8\uB2E4. ZIP\uC758 \uC18C\uAC1C\xB7\uAD6C\uC131\uC744 \uC801\uC6A9\uD55C \uB4A4 \uC5C5\uB85C\uB4DC\uD560 \uC218 \uC788\uC5B4\uC694.",
    "Apply ZIP details and upload": "ZIP \uC815\uBCF4 \uC801\uC6A9 \uD6C4 \uC5C5\uB85C\uB4DC",
    Cancel: "\uCDE8\uC18C",
    "Validate package": "\uD328\uD0A4\uC9C0 \uAC80\uC99D",
    "Validated \xB7 awaiting CMS review and publication.": "\uAC80\uC99D \uC644\uB8CC \xB7 \uC6B4\uC601\uC790\uC758 CMS \uAC80\uD1A0\uC640 \uBC1C\uD589\uC744 \uAE30\uB2E4\uB9BD\uB2C8\uB2E4.",
    "Published \xB7 available in the gallery.": "\uACF5\uAC1C\uB428 \xB7 \uAC24\uB7EC\uB9AC\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC5B4\uC694.",
    "MCP \xB7 runs local Python": "MCP \xB7 \uB85C\uCEEC Python \uC2E4\uD589",
    "Plugin \xB7 runs local Python": "\uD50C\uB7EC\uADF8\uC778 \xB7 \uB85C\uCEEC Python \uC2E4\uD589",
    "Recommended GPT Live voice": "GPT Live \uCD94\uCC9C \uBCF4\uC774\uC2A4",
    "Could not review the installation. Check connection and publication status.": "\uC124\uCE58 \uAD6C\uC131\uC744 \uD655\uC778\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC11C\uBC84 \uC5F0\uACB0\uACFC \uACF5\uAC1C \uC0C1\uD0DC\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.",
    "Could not install. Review the configuration and retry.": "\uC124\uCE58\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uAD6C\uC131\uC744 \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.",
    "Meet {0}": "{0} \uB9CC\uB098\uAE30",
    "Soul and avatar required": "\uC18C\uC6B8 \xB7 \uC544\uBC14\uD0C0 \uD544\uC218",
    "Include these features": "\uD568\uAED8 \uC124\uCE58\uD560 \uAE30\uB2A5",
    "Start with a Soul and avatar.": "\uC18C\uC6B8\uACFC \uC544\uBC14\uD0C0\uB85C \uC2DC\uC791\uD574\uC694.",
    "Reviewing installation": "\uC124\uCE58 \uAD6C\uC131\uC744 \uD655\uC778\uD558\uACE0 \uC788\uC5B4\uC694",
    "New profile:": "\uC0C8 \uD504\uB85C\uD544:",
    "Author:": "\xB7 \uC81C\uC791\uC790:",
    "Selected MCP and plugins execute Python on this device.": "\uC120\uD0DD\uD55C MCP\xB7\uD50C\uB7EC\uADF8\uC778\uC740 \uC774 \uAE30\uAE30\uC5D0\uC11C Python \uCF54\uB4DC\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4.",
    "Recommended voice:": "\uCD94\uCC9C \uBCF4\uC774\uC2A4:",
    "Configure voice authentication in Hermes.": "\uC74C\uC131 \uC778\uC99D\uC740 Hermes\uC5D0\uC11C \uC124\uC815\uD574 \uC8FC\uC138\uC694.",
    "Soul and file verification": "\uC18C\uC6B8\uACFC \uD30C\uC77C \uAC80\uC99D \uC815\uBCF4",
    "Install {0}": "{0} \uC124\uCE58\uD558\uAE30",
    "Review again": "\uAD6C\uC131 \uB2E4\uC2DC \uD655\uC778",
    "Already installed": "\uC774\uBBF8 \uC124\uCE58\uB41C \uBD07\uC774\uC5D0\uC694",
    "Installation complete": "\uC124\uCE58 \uC644\uB8CC",
    "Configure a model and authentication in Hermes.": "\uBAA8\uB378\uACFC \uC778\uC99D\uC744 Hermes\uC5D0\uC11C \uC124\uC815\uD574 \uC8FC\uC138\uC694.",
    "Your profile is ready.": "\uD504\uB85C\uD544\uC774 \uC900\uBE44\uB410\uC5B4\uC694.",
    "First prompt:": "\uCCAB \uC9C8\uBB38:",
    "Setup guide": "\uC124\uC815 \uC548\uB0B4",
    "Open bot chat": "\uBD07 \uB300\uD654 \uC5F4\uAE30",
    "Please check": "\uD655\uC778\uC774 \uD544\uC694\uD574\uC694",
    "Install and submit from Local \u2192 default on this device.": "\uC124\uCE58\uC640 \uB4F1\uB85D\uC740 \uC774 \uAE30\uAE30\uC758 Local \u2192 default\uC5D0\uC11C \uC9C4\uD589\uD569\uB2C8\uB2E4.",
    "Could not open the local connection. Please retry.": "\uB85C\uCEEC \uC5F0\uACB0\uC744 \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.",
    "Connect to this device\u2019s default": "\uC774 \uAE30\uAE30\uC758 default\uB85C \uC5F0\uACB0",
    Idle: "\uB300\uAE30 \uC911",
    Thinking: "\uC0DD\uAC01 \uC911",
    "Recently working": "\uCD5C\uADFC \uC791\uC5C5 \uC911",
    "Status unavailable": "\uC0C1\uD0DC \uD655\uC778 \uBD88\uAC00",
    "{0} avatar": "{0} \uC544\uBC14\uD0C0",
    "Confirm installation of {0}": "{0} \uC124\uCE58 \uD655\uC778",
    "Not auditioned": "\uCCAD\uCDE8 \uAC80\uC99D \uC804",
    "Existing voice settings were preserved. Check the profile\u2019s Voice settings.": "\uAE30\uC874 \uBCF4\uC774\uC2A4 \uC124\uC815\uC744 \uBCF4\uC874\uD588\uC5B4\uC694. \uCD94\uCC9C \uBCF4\uC774\uC2A4 \uC801\uC6A9 \uC5EC\uBD80\uB294 \uD574\uB2F9 \uD504\uB85C\uD544\uC758 Voice \uC124\uC815\uC5D0\uC11C \uD655\uC778\uD574 \uC8FC\uC138\uC694.",
    "Recommended voice {0} included. Check voice authentication.": "\uCD94\uCC9C \uBCF4\uC774\uC2A4 {0} \uC124\uC815 \uD3EC\uD568 \xB7 \uC74C\uC131 \uC778\uC99D \uD655\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.",
    "Voice settings were not included.": "\uBCF4\uC774\uC2A4 \uC124\uC815\uC740 \uD3EC\uD568\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694.",
    "Validation issue at {0}. Check the package format and required fields.": "{0} \uAC80\uC99D \uBB38\uC81C \xB7 \uD328\uD0A4\uC9C0 \uD615\uC2DD\uACFC \uD544\uC218 \uD56D\uBAA9\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.",
    Avatar: "\uC544\uBC14\uD0C0",
    "Revision {0}": "\uB9AC\uBE44\uC804 {0}",
    "{0} bytes": "{0}\uBC14\uC774\uD2B8"
  },
  zh: {
    "Could not load installed bots. Please retry.": "\u65E0\u6CD5\u52A0\u8F7D\u5DF2\u5B89\u88C5\u7684\u673A\u5668\u4EBA\u3002\u8BF7\u91CD\u8BD5\u3002",
    "Could not load the catalog. Installed bots are still available.": "\u65E0\u6CD5\u52A0\u8F7D\u76EE\u5F55\u3002\u4ECD\u53EF\u6253\u5F00\u5DF2\u5B89\u88C5\u7684\u673A\u5668\u4EBA\u3002",
    "This bot version is no longer published.": "\u6B64\u673A\u5668\u4EBA\u7248\u672C\u5C1A\u672A\u516C\u5F00\u3002",
    "Refresh to check installation status.": "\u8BF7\u5237\u65B0\u4EE5\u68C0\u67E5\u5B89\u88C5\u72B6\u6001\u3002",
    "Find your next AI colleague.": "\u5BFB\u627E\u9002\u5408\u4F60\u7684 AI \u540C\u4E8B\u3002",
    Refresh: "\u5237\u65B0",
    "MyBots menu": "MyBots \u83DC\u5355",
    "Browse bots": "\u63A2\u7D22\u673A\u5668\u4EBA",
    "Installed bots": "\u5DF2\u5B89\u88C5\u7684\u673A\u5668\u4EBA",
    "My submissions": "\u6211\u7684\u63D0\u4EA4",
    "Connection settings": "\u8FDE\u63A5\u8BBE\u7F6E",
    "Showing the saved catalog while offline. Reconnect to install.": "\u79BB\u7EBF\u65F6\u663E\u793A\u5DF2\u4FDD\u5B58\u7684\u76EE\u5F55\u3002\u8BF7\u91CD\u65B0\u8FDE\u63A5\u540E\u5B89\u88C5\u3002",
    "Last checked:": "\u4E0A\u6B21\u68C0\u67E5\uFF1A",
    "Search bots": "\u641C\u7D22\u673A\u5668\u4EBA",
    "Search by name or role": "\u6309\u540D\u79F0\u6216\u89D2\u8272\u641C\u7D22",
    "Bot category": "\u673A\u5668\u4EBA\u5206\u7C7B",
    "All categories": "\u6240\u6709\u5206\u7C7B",
    Business: "\u5DE5\u4F5C",
    Learning: "\u5B66\u4E60",
    "Daily life": "\u65E5\u5E38",
    "Loading colleagues": "\u6B63\u5728\u52A0\u8F7D\u540C\u4E8B",
    "{0} colleagues": "{0} \u4F4D\u540C\u4E8B",
    Soul: "\u7075\u9B42",
    Skills: "\u6280\u80FD",
    Plugins: "\u63D2\u4EF6",
    Voice: "\u8BED\u97F3",
    Meet: "\u8BA4\u8BC6\u4E00\u4E0B",
    "Motion preview": "\u52A8\u4F5C\u9884\u89C8",
    "No matching bots": "\u6CA1\u6709\u5339\u914D\u7684\u673A\u5668\u4EBA",
    "Try another search or category.": "\u8BF7\u5C1D\u8BD5\u5176\u4ED6\u641C\u7D22\u6216\u5206\u7C7B\u3002",
    "No bots installed yet": "\u5C1A\u672A\u5B89\u88C5\u673A\u5668\u4EBA",
    "Find your first colleague in Browse bots.": "\u5728\u63A2\u7D22\u673A\u5668\u4EBA\u4E2D\u5BFB\u627E\u7B2C\u4E00\u4F4D\u540C\u4E8B\u3002",
    "Check version": "\u8BF7\u68C0\u67E5\u7248\u672C",
    Installed: "\u5DF2\u5B89\u88C5",
    "Other version": "\u5176\u4ED6\u7248\u672C",
    "Check files": "\u8BF7\u68C0\u67E5\u6587\u4EF6",
    "Open chat": "\u6253\u5F00\u804A\u5929",
    "Loading submissions": "\u6B63\u5728\u52A0\u8F7D\u63D0\u4EA4",
    "Could not load connection settings. Check the server origin.": "\u65E0\u6CD5\u52A0\u8F7D\u8FDE\u63A5\u8BBE\u7F6E\u3002\u8BF7\u68C0\u67E5\u670D\u52A1\u5668\u5730\u5740\u3002",
    "Could not connect. Check key expiry, permissions and storage.": "\u65E0\u6CD5\u8FDE\u63A5\u3002\u8BF7\u68C0\u67E5\u5BC6\u94A5\u6709\u6548\u671F\u3001\u6743\u9650\u53CA\u5B58\u50A8\u3002",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "\u6D4F\u89C8\u548C\u5B89\u88C5\u65E0\u9700\u5BC6\u94A5\u3002\u63D0\u4EA4\u673A\u5668\u4EBA\u9700\u8981\u521B\u4F5C\u8005 API \u5BC6\u94A5\u3002",
    Server: "\u670D\u52A1\u5668",
    Connection: "\u8FDE\u63A5",
    Connected: "\u5DF2\u8FDE\u63A5",
    Disconnected: "\u672A\u8FDE\u63A5",
    "Environment \xB7 provider": "\u73AF\u5883 \xB7 \u63D0\u4F9B\u65B9",
    Permissions: "\u6743\u9650",
    Expires: "\u5230\u671F",
    "Key provider": "\u5BC6\u94A5\u63D0\u4F9B\u65B9",
    "bws item ID (recommended)": "bws \u9879\u76EE ID\uFF08\u63A8\u8350\uFF09",
    "OS secure storage": "\u7CFB\u7EDF\u5B89\u5168\u5B58\u50A8",
    "This session only": "\u4EC5\u6B64\u4F1A\u8BDD",
    "bws item ID": "bws \u9879\u76EE ID",
    "MyBots API key": "MyBots API \u5BC6\u94A5",
    "Session keys stay in backend memory and are cleared on restart.": "\u4F1A\u8BDD\u5BC6\u94A5\u4EC5\u4FDD\u5B58\u5728\u540E\u7AEF\u5185\u5B58\u4E2D\uFF0C\u91CD\u542F\u540E\u6E05\u9664\u3002",
    "Secure OS storage is unavailable. Choose bws or session storage.": "\u7CFB\u7EDF\u5B89\u5168\u5B58\u50A8\u4E0D\u53EF\u7528\u3002\u8BF7\u9009\u62E9 bws \u6216\u4F1A\u8BDD\u5B58\u50A8\u3002",
    Connect: "\u8FDE\u63A5",
    Disconnect: "\u65AD\u5F00\u8FDE\u63A5",
    "Refresh connection": "\u5237\u65B0\u8FDE\u63A5",
    Draft: "\u8349\u7A3F",
    Validated: "\u9A8C\u8BC1\u901A\u8FC7",
    Published: "\u5DF2\u53D1\u5E03",
    Unpublished: "\u672A\u516C\u5F00",
    "Bot ID": "\u673A\u5668\u4EBA ID",
    Version: "\u7248\u672C",
    Name: "\u540D\u79F0",
    "English name": "\u82F1\u6587\u540D\u79F0",
    Role: "\u89D2\u8272",
    Personality: "\u6027\u683C",
    Description: "\u7B80\u4ECB",
    "First prompt": "\u9996\u4E2A\u95EE\u9898",
    "Could not load connection details.": "\u65E0\u6CD5\u52A0\u8F7D\u8FDE\u63A5\u4FE1\u606F\u3002",
    "Could not load submissions. Check your key connection.": "\u65E0\u6CD5\u52A0\u8F7D\u63D0\u4EA4\u3002\u8BF7\u68C0\u67E5\u5BC6\u94A5\u8FDE\u63A5\u3002",
    "The screen or connection changed.": "\u9875\u9762\u6216\u8FDE\u63A5\u5DF2\u66F4\u6539\u3002",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "\u65E0\u6CD5\u4FDD\u5B58\u6216\u9A8C\u8BC1\u3002\u8BF7\u68C0\u67E5\u8F93\u5165\u3001\u5BC6\u94A5\u548C\u670D\u52A1\u5668\u3002\u91CD\u8BD5\u76F8\u540C\u5185\u5BB9\u6216\u5237\u65B0\u4EE5\u786E\u8BA4\u7ED3\u679C\u3002",
    "Select MyBots package": "\u9009\u62E9 MyBots \u5305",
    "ZIP ID or version differs. Create a new draft.": "ZIP \u7684 ID \u6216\u7248\u672C\u4E0D\u540C\u3002\u8BF7\u65B0\u5EFA\u8349\u7A3F\u3002",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "\u4FDD\u5B58\u673A\u5668\u4EBA\u5E76\u9A8C\u8BC1\u5176\u5305\u3002\u7BA1\u7406\u5458\u5C06\u5728 CMS \u4E2D\u5BA1\u6838\u53D1\u5E03\u3002",
    "Connect a creator API key in Connection settings first.": "\u8BF7\u5148\u5728\u8FDE\u63A5\u8BBE\u7F6E\u4E2D\u8FDE\u63A5\u521B\u4F5C\u8005 API \u5BC6\u94A5\u3002",
    "Submit a bot": "\u63D0\u4EA4\u673A\u5668\u4EBA",
    "Refresh submissions": "\u5237\u65B0\u63D0\u4EA4",
    "No submissions yet": "\u5C1A\u65E0\u63D0\u4EA4",
    "Start your first draft with a Soul and avatar.": "\u7528\u7075\u9B42\u548C\u5934\u50CF\u521B\u5EFA\u7B2C\u4E00\u4EFD\u8349\u7A3F\u3002",
    "Submission details": "\u63D0\u4EA4\u4FE1\u606F",
    "New draft": "\u65B0\u5EFA\u8349\u7A3F",
    Category: "\u5206\u7C7B",
    "Save details": "\u4FDD\u5B58\u4FE1\u606F",
    "Save draft": "\u4FDD\u5B58\u8349\u7A3F",
    "Soul and avatar": "\u7075\u9B42\u4E0E\u5934\u50CF",
    "Select bot avatar": "\u9009\u62E9\u673A\u5668\u4EBA\u5934\u50CF",
    "Choose avatar": "\u9009\u62E9\u5934\u50CF",
    "Avatar selected": "\u5DF2\u9009\u62E9\u5934\u50CF",
    "PNG/JPEG \xB7 square, 128\u20132048px": "PNG/JPEG \xB7 \u6B63\u65B9\u5F62\uFF0C128\u20132048px",
    "Save Soul and avatar package": "\u4FDD\u5B58\u7075\u9B42\u4E0E\u5934\u50CF\u5305",
    "Full package": "\u5B8C\u6574\u5305",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "\u542B\u6280\u80FD\u3001MCP\u3001\u63D2\u4EF6\u6216\u8BED\u97F3\u7684\u673A\u5668\u4EBA\u8BF7\u9009\u62E9\u5B8C\u6574 ZIP\u3002",
    "Choose package": "\u9009\u62E9\u5305",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "\u6B64 Hermes \u7248\u672C\u4E0D\u63D0\u4F9B\u63D2\u4EF6\u6587\u4EF6\u9009\u62E9\u5668\u3002\u8BF7\u901A\u8FC7 CMS \u4E0A\u4F20\u3002",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "ZIP \u4FE1\u606F\u4E0E\u8349\u7A3F\u4E0D\u540C\u3002\u8BF7\u5148\u5E94\u7528 ZIP \u4FE1\u606F\u518D\u4E0A\u4F20\u3002",
    "Apply ZIP details and upload": "\u5E94\u7528 ZIP \u4FE1\u606F\u5E76\u4E0A\u4F20",
    Cancel: "\u53D6\u6D88",
    "Validate package": "\u9A8C\u8BC1\u5305",
    "Validated \xB7 awaiting CMS review and publication.": "\u9A8C\u8BC1\u901A\u8FC7 \xB7 \u7B49\u5F85 CMS \u5BA1\u6838\u4E0E\u53D1\u5E03\u3002",
    "Published \xB7 available in the gallery.": "\u5DF2\u53D1\u5E03 \xB7 \u53EF\u5728\u753B\u5ECA\u67E5\u770B\u3002",
    "MCP \xB7 runs local Python": "MCP \xB7 \u8FD0\u884C\u672C\u5730 Python",
    "Plugin \xB7 runs local Python": "\u63D2\u4EF6 \xB7 \u8FD0\u884C\u672C\u5730 Python",
    "Recommended GPT Live voice": "\u63A8\u8350 GPT Live \u8BED\u97F3",
    "Could not review the installation. Check connection and publication status.": "\u65E0\u6CD5\u786E\u8BA4\u5B89\u88C5\u914D\u7F6E\u3002\u8BF7\u68C0\u67E5\u8FDE\u63A5\u53CA\u53D1\u5E03\u72B6\u6001\u3002",
    "Could not install. Review the configuration and retry.": "\u65E0\u6CD5\u5B89\u88C5\u3002\u8BF7\u68C0\u67E5\u914D\u7F6E\u5E76\u91CD\u8BD5\u3002",
    "Meet {0}": "\u8BA4\u8BC6 {0}",
    "Soul and avatar required": "\u5FC5\u987B\u5305\u542B\u7075\u9B42\u548C\u5934\u50CF",
    "Include these features": "\u540C\u65F6\u5B89\u88C5\u7684\u529F\u80FD",
    "Start with a Soul and avatar.": "\u4ECE\u7075\u9B42\u548C\u5934\u50CF\u5F00\u59CB\u3002",
    "Reviewing installation": "\u6B63\u5728\u786E\u8BA4\u5B89\u88C5\u914D\u7F6E",
    "New profile:": "\u65B0\u914D\u7F6E\u6863\uFF1A",
    "Author:": "\u4F5C\u8005\uFF1A",
    "Selected MCP and plugins execute Python on this device.": "\u6240\u9009 MCP \u548C\u63D2\u4EF6\u5C06\u5728\u6B64\u8BBE\u5907\u6267\u884C Python \u4EE3\u7801\u3002",
    "Recommended voice:": "\u63A8\u8350\u8BED\u97F3\uFF1A",
    "Configure voice authentication in Hermes.": "\u8BF7\u5728 Hermes \u4E2D\u914D\u7F6E\u8BED\u97F3\u8BA4\u8BC1\u3002",
    "Soul and file verification": "\u7075\u9B42\u53CA\u6587\u4EF6\u9A8C\u8BC1",
    "Install {0}": "\u5B89\u88C5 {0}",
    "Review again": "\u91CD\u65B0\u786E\u8BA4\u914D\u7F6E",
    "Already installed": "\u673A\u5668\u4EBA\u5DF2\u5B89\u88C5",
    "Installation complete": "\u5B89\u88C5\u5B8C\u6210",
    "Configure a model and authentication in Hermes.": "\u8BF7\u5728 Hermes \u4E2D\u914D\u7F6E\u6A21\u578B\u53CA\u8BA4\u8BC1\u3002",
    "Your profile is ready.": "\u914D\u7F6E\u6863\u5DF2\u5C31\u7EEA\u3002",
    "First prompt:": "\u9996\u4E2A\u95EE\u9898\uFF1A",
    "Setup guide": "\u8BBE\u7F6E\u6307\u5357",
    "Open bot chat": "\u6253\u5F00\u673A\u5668\u4EBA\u804A\u5929",
    "Please check": "\u8BF7\u68C0\u67E5",
    "Install and submit from Local \u2192 default on this device.": "\u8BF7\u4ECE\u6B64\u8BBE\u5907\u7684 Local \u2192 default \u8FDB\u884C\u5B89\u88C5\u548C\u63D0\u4EA4\u3002",
    "Could not open the local connection. Please retry.": "\u65E0\u6CD5\u6253\u5F00\u672C\u5730\u8FDE\u63A5\u3002\u8BF7\u91CD\u8BD5\u3002",
    "Connect to this device\u2019s default": "\u8FDE\u63A5\u6B64\u8BBE\u5907\u7684 default",
    Idle: "\u5F85\u673A",
    Thinking: "\u601D\u8003\u4E2D",
    "Recently working": "\u6700\u8FD1\u6709\u4EFB\u52A1",
    "Status unavailable": "\u72B6\u6001\u4E0D\u53EF\u7528",
    "{0} avatar": "{0} \u5934\u50CF",
    "Confirm installation of {0}": "\u786E\u8BA4\u5B89\u88C5 {0}",
    "Not auditioned": "\u5C1A\u672A\u8BD5\u542C",
    "Existing voice settings were preserved. Check the profile\u2019s Voice settings.": "\u5DF2\u4FDD\u7559\u539F\u6709\u8BED\u97F3\u8BBE\u7F6E\u3002\u8BF7\u68C0\u67E5\u914D\u7F6E\u6863\u7684\u8BED\u97F3\u8BBE\u7F6E\u3002",
    "Recommended voice {0} included. Check voice authentication.": "\u5DF2\u5305\u542B\u63A8\u8350\u8BED\u97F3 {0}\u3002\u8BF7\u68C0\u67E5\u8BED\u97F3\u8BA4\u8BC1\u3002",
    "Voice settings were not included.": "\u672A\u5305\u542B\u8BED\u97F3\u8BBE\u7F6E\u3002",
    "Validation issue at {0}. Check the package format and required fields.": "{0} \u9A8C\u8BC1\u95EE\u9898\u3002\u8BF7\u68C0\u67E5\u5305\u683C\u5F0F\u53CA\u5FC5\u586B\u9879\u3002",
    Avatar: "\u5934\u50CF",
    "Revision {0}": "\u4FEE\u8BA2\u7248 {0}",
    "{0} bytes": "{0} \u5B57\u8282"
  },
  "zh-hant": {
    "Could not load installed bots. Please retry.": "\u7121\u6CD5\u8F09\u5165\u5DF2\u5B89\u88DD\u7684\u6A5F\u5668\u4EBA\u3002\u8ACB\u91CD\u8A66\u3002",
    "Could not load the catalog. Installed bots are still available.": "\u7121\u6CD5\u8F09\u5165\u76EE\u9304\u3002\u4ECD\u53EF\u958B\u555F\u5DF2\u5B89\u88DD\u7684\u6A5F\u5668\u4EBA\u3002",
    "This bot version is no longer published.": "\u6B64\u6A5F\u5668\u4EBA\u7248\u672C\u5C1A\u672A\u516C\u958B\u3002",
    "Refresh to check installation status.": "\u8ACB\u91CD\u65B0\u6574\u7406\u4EE5\u6AA2\u67E5\u5B89\u88DD\u72C0\u614B\u3002",
    "Find your next AI colleague.": "\u5C0B\u627E\u9069\u5408\u4F60\u7684 AI \u540C\u4E8B\u3002",
    Refresh: "\u91CD\u65B0\u6574\u7406",
    "MyBots menu": "MyBots \u9078\u55AE",
    "Browse bots": "\u63A2\u7D22\u6A5F\u5668\u4EBA",
    "Installed bots": "\u5DF2\u5B89\u88DD\u7684\u6A5F\u5668\u4EBA",
    "My submissions": "\u6211\u7684\u63D0\u4EA4",
    "Connection settings": "\u9023\u7DDA\u8A2D\u5B9A",
    "Showing the saved catalog while offline. Reconnect to install.": "\u96E2\u7DDA\u6642\u986F\u793A\u5DF2\u5132\u5B58\u7684\u76EE\u9304\u3002\u8ACB\u91CD\u65B0\u9023\u7DDA\u5F8C\u5B89\u88DD\u3002",
    "Last checked:": "\u4E0A\u6B21\u6AA2\u67E5\uFF1A",
    "Search bots": "\u641C\u5C0B\u6A5F\u5668\u4EBA",
    "Search by name or role": "\u4F9D\u540D\u7A31\u6216\u89D2\u8272\u641C\u5C0B",
    "Bot category": "\u6A5F\u5668\u4EBA\u5206\u985E",
    "All categories": "\u6240\u6709\u5206\u985E",
    Business: "\u5DE5\u4F5C",
    Learning: "\u5B78\u7FD2",
    "Daily life": "\u65E5\u5E38",
    "Loading colleagues": "\u6B63\u5728\u8F09\u5165\u540C\u4E8B",
    "{0} colleagues": "{0} \u4F4D\u540C\u4E8B",
    Soul: "\u9748\u9B42",
    Skills: "\u6280\u80FD",
    Plugins: "\u5916\u639B",
    Voice: "\u8A9E\u97F3",
    Meet: "\u8A8D\u8B58\u4E00\u4E0B",
    "Motion preview": "\u52D5\u4F5C\u9810\u89BD",
    "No matching bots": "\u6C92\u6709\u7B26\u5408\u7684\u6A5F\u5668\u4EBA",
    "Try another search or category.": "\u8ACB\u5617\u8A66\u5176\u4ED6\u641C\u5C0B\u6216\u5206\u985E\u3002",
    "No bots installed yet": "\u5C1A\u672A\u5B89\u88DD\u6A5F\u5668\u4EBA",
    "Find your first colleague in Browse bots.": "\u5728\u63A2\u7D22\u6A5F\u5668\u4EBA\u4E2D\u5C0B\u627E\u7B2C\u4E00\u4F4D\u540C\u4E8B\u3002",
    "Check version": "\u8ACB\u6AA2\u67E5\u7248\u672C",
    Installed: "\u5DF2\u5B89\u88DD",
    "Other version": "\u5176\u4ED6\u7248\u672C",
    "Check files": "\u8ACB\u6AA2\u67E5\u6A94\u6848",
    "Open chat": "\u958B\u555F\u804A\u5929",
    "Loading submissions": "\u6B63\u5728\u8F09\u5165\u63D0\u4EA4",
    "Could not load connection settings. Check the server origin.": "\u7121\u6CD5\u8F09\u5165\u9023\u7DDA\u8A2D\u5B9A\u3002\u8ACB\u6AA2\u67E5\u4F3A\u670D\u5668\u4F4D\u5740\u3002",
    "Could not connect. Check key expiry, permissions and storage.": "\u7121\u6CD5\u9023\u7DDA\u3002\u8ACB\u6AA2\u67E5\u91D1\u9470\u6709\u6548\u671F\u3001\u6B0A\u9650\u53CA\u5132\u5B58\u3002",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "\u700F\u89BD\u548C\u5B89\u88DD\u7121\u9700\u91D1\u9470\u3002\u63D0\u4EA4\u6A5F\u5668\u4EBA\u9700\u8981\u5275\u4F5C\u8005 API \u91D1\u9470\u3002",
    Server: "\u4F3A\u670D\u5668",
    Connection: "\u9023\u7DDA",
    Connected: "\u5DF2\u9023\u7DDA",
    Disconnected: "\u672A\u9023\u7DDA",
    "Environment \xB7 provider": "\u74B0\u5883 \xB7 \u4F9B\u61C9\u8005",
    Permissions: "\u6B0A\u9650",
    Expires: "\u5230\u671F",
    "Key provider": "\u91D1\u9470\u4F9B\u61C9\u8005",
    "bws item ID (recommended)": "bws \u9805\u76EE ID\uFF08\u5EFA\u8B70\uFF09",
    "OS secure storage": "\u7CFB\u7D71\u5B89\u5168\u5132\u5B58",
    "This session only": "\u50C5\u6B64\u5DE5\u4F5C\u968E\u6BB5",
    "bws item ID": "bws \u9805\u76EE ID",
    "MyBots API key": "MyBots API \u91D1\u9470",
    "Session keys stay in backend memory and are cleared on restart.": "\u5DE5\u4F5C\u968E\u6BB5\u91D1\u9470\u50C5\u4FDD\u5B58\u5728\u5F8C\u7AEF\u8A18\u61B6\u9AD4\u4E2D\uFF0C\u91CD\u65B0\u555F\u52D5\u5F8C\u6E05\u9664\u3002",
    "Secure OS storage is unavailable. Choose bws or session storage.": "\u7CFB\u7D71\u5B89\u5168\u5132\u5B58\u7121\u6CD5\u4F7F\u7528\u3002\u8ACB\u9078\u64C7 bws \u6216\u5DE5\u4F5C\u968E\u6BB5\u5132\u5B58\u3002",
    Connect: "\u9023\u7DDA",
    Disconnect: "\u4E2D\u65B7\u9023\u7DDA",
    "Refresh connection": "\u91CD\u65B0\u6574\u7406\u9023\u7DDA",
    Draft: "\u8349\u7A3F",
    Validated: "\u9A57\u8B49\u901A\u904E",
    Published: "\u5DF2\u767C\u4F48",
    Unpublished: "\u672A\u516C\u958B",
    "Bot ID": "\u6A5F\u5668\u4EBA ID",
    Version: "\u7248\u672C",
    Name: "\u540D\u7A31",
    "English name": "\u82F1\u6587\u540D\u7A31",
    Role: "\u89D2\u8272",
    Personality: "\u500B\u6027",
    Description: "\u7C21\u4ECB",
    "First prompt": "\u7B2C\u4E00\u500B\u554F\u984C",
    "Could not load connection details.": "\u7121\u6CD5\u8F09\u5165\u9023\u7DDA\u8CC7\u8A0A\u3002",
    "Could not load submissions. Check your key connection.": "\u7121\u6CD5\u8F09\u5165\u63D0\u4EA4\u3002\u8ACB\u6AA2\u67E5\u91D1\u9470\u9023\u7DDA\u3002",
    "The screen or connection changed.": "\u756B\u9762\u6216\u9023\u7DDA\u5DF2\u8B8A\u66F4\u3002",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "\u7121\u6CD5\u5132\u5B58\u6216\u9A57\u8B49\u3002\u8ACB\u6AA2\u67E5\u8F38\u5165\u3001\u91D1\u9470\u548C\u4F3A\u670D\u5668\u3002\u91CD\u8A66\u76F8\u540C\u5167\u5BB9\u6216\u91CD\u65B0\u6574\u7406\u4EE5\u78BA\u8A8D\u7D50\u679C\u3002",
    "Select MyBots package": "\u9078\u64C7 MyBots \u5957\u4EF6",
    "ZIP ID or version differs. Create a new draft.": "ZIP \u7684 ID \u6216\u7248\u672C\u4E0D\u540C\u3002\u8ACB\u65B0\u589E\u8349\u7A3F\u3002",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "\u5132\u5B58\u6A5F\u5668\u4EBA\u4E26\u9A57\u8B49\u5176\u5957\u4EF6\u3002\u7BA1\u7406\u54E1\u5C07\u5728 CMS \u4E2D\u5BE9\u6838\u767C\u4F48\u3002",
    "Connect a creator API key in Connection settings first.": "\u8ACB\u5148\u5728\u9023\u7DDA\u8A2D\u5B9A\u4E2D\u9023\u63A5\u5275\u4F5C\u8005 API \u91D1\u9470\u3002",
    "Submit a bot": "\u63D0\u4EA4\u6A5F\u5668\u4EBA",
    "Refresh submissions": "\u91CD\u65B0\u6574\u7406\u63D0\u4EA4",
    "No submissions yet": "\u5C1A\u7121\u63D0\u4EA4",
    "Start your first draft with a Soul and avatar.": "\u7528\u9748\u9B42\u548C\u982D\u50CF\u5EFA\u7ACB\u7B2C\u4E00\u4EFD\u8349\u7A3F\u3002",
    "Submission details": "\u63D0\u4EA4\u8CC7\u8A0A",
    "New draft": "\u65B0\u589E\u8349\u7A3F",
    Category: "\u5206\u985E",
    "Save details": "\u5132\u5B58\u8CC7\u8A0A",
    "Save draft": "\u5132\u5B58\u8349\u7A3F",
    "Soul and avatar": "\u9748\u9B42\u8207\u982D\u50CF",
    "Select bot avatar": "\u9078\u64C7\u6A5F\u5668\u4EBA\u982D\u50CF",
    "Choose avatar": "\u9078\u64C7\u982D\u50CF",
    "Avatar selected": "\u5DF2\u9078\u64C7\u982D\u50CF",
    "PNG/JPEG \xB7 square, 128\u20132048px": "PNG/JPEG \xB7 \u6B63\u65B9\u5F62\uFF0C128\u20132048px",
    "Save Soul and avatar package": "\u5132\u5B58\u9748\u9B42\u8207\u982D\u50CF\u5957\u4EF6",
    "Full package": "\u5B8C\u6574\u5957\u4EF6",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "\u542B\u6280\u80FD\u3001MCP\u3001\u5916\u639B\u6216\u8A9E\u97F3\u7684\u6A5F\u5668\u4EBA\u8ACB\u9078\u64C7\u5B8C\u6574 ZIP\u3002",
    "Choose package": "\u9078\u64C7\u5957\u4EF6",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "\u6B64 Hermes \u7248\u672C\u4E0D\u63D0\u4F9B\u5916\u639B\u6A94\u6848\u9078\u64C7\u5668\u3002\u8ACB\u900F\u904E CMS \u4E0A\u50B3\u3002",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "ZIP \u8CC7\u8A0A\u8207\u8349\u7A3F\u4E0D\u540C\u3002\u8ACB\u5148\u5957\u7528 ZIP \u8CC7\u8A0A\u518D\u4E0A\u50B3\u3002",
    "Apply ZIP details and upload": "\u5957\u7528 ZIP \u8CC7\u8A0A\u4E26\u4E0A\u50B3",
    Cancel: "\u53D6\u6D88",
    "Validate package": "\u9A57\u8B49\u5957\u4EF6",
    "Validated \xB7 awaiting CMS review and publication.": "\u9A57\u8B49\u901A\u904E \xB7 \u7B49\u5F85 CMS \u5BE9\u6838\u8207\u767C\u4F48\u3002",
    "Published \xB7 available in the gallery.": "\u5DF2\u767C\u4F48 \xB7 \u53EF\u5728\u5716\u5EAB\u67E5\u770B\u3002",
    "MCP \xB7 runs local Python": "MCP \xB7 \u57F7\u884C\u672C\u6A5F Python",
    "Plugin \xB7 runs local Python": "\u5916\u639B \xB7 \u57F7\u884C\u672C\u6A5F Python",
    "Recommended GPT Live voice": "\u63A8\u85A6 GPT Live \u8A9E\u97F3",
    "Could not review the installation. Check connection and publication status.": "\u7121\u6CD5\u78BA\u8A8D\u5B89\u88DD\u8A2D\u5B9A\u3002\u8ACB\u6AA2\u67E5\u9023\u7DDA\u53CA\u767C\u4F48\u72C0\u614B\u3002",
    "Could not install. Review the configuration and retry.": "\u7121\u6CD5\u5B89\u88DD\u3002\u8ACB\u6AA2\u67E5\u8A2D\u5B9A\u4E26\u91CD\u8A66\u3002",
    "Meet {0}": "\u8A8D\u8B58 {0}",
    "Soul and avatar required": "\u5FC5\u9808\u5305\u542B\u9748\u9B42\u548C\u982D\u50CF",
    "Include these features": "\u540C\u6642\u5B89\u88DD\u7684\u529F\u80FD",
    "Start with a Soul and avatar.": "\u5F9E\u9748\u9B42\u548C\u982D\u50CF\u958B\u59CB\u3002",
    "Reviewing installation": "\u6B63\u5728\u78BA\u8A8D\u5B89\u88DD\u8A2D\u5B9A",
    "New profile:": "\u65B0\u8A2D\u5B9A\u6A94\uFF1A",
    "Author:": "\u4F5C\u8005\uFF1A",
    "Selected MCP and plugins execute Python on this device.": "\u6240\u9078 MCP \u548C\u5916\u639B\u5C07\u5728\u6B64\u88DD\u7F6E\u57F7\u884C Python \u7A0B\u5F0F\u78BC\u3002",
    "Recommended voice:": "\u63A8\u85A6\u8A9E\u97F3\uFF1A",
    "Configure voice authentication in Hermes.": "\u8ACB\u5728 Hermes \u4E2D\u8A2D\u5B9A\u8A9E\u97F3\u9A57\u8B49\u3002",
    "Soul and file verification": "\u9748\u9B42\u53CA\u6A94\u6848\u9A57\u8B49",
    "Install {0}": "\u5B89\u88DD {0}",
    "Review again": "\u91CD\u65B0\u78BA\u8A8D\u8A2D\u5B9A",
    "Already installed": "\u6A5F\u5668\u4EBA\u5DF2\u5B89\u88DD",
    "Installation complete": "\u5B89\u88DD\u5B8C\u6210",
    "Configure a model and authentication in Hermes.": "\u8ACB\u5728 Hermes \u4E2D\u8A2D\u5B9A\u6A21\u578B\u53CA\u9A57\u8B49\u3002",
    "Your profile is ready.": "\u8A2D\u5B9A\u6A94\u5DF2\u6E96\u5099\u5C31\u7DD2\u3002",
    "First prompt:": "\u7B2C\u4E00\u500B\u554F\u984C\uFF1A",
    "Setup guide": "\u8A2D\u5B9A\u6307\u5357",
    "Open bot chat": "\u958B\u555F\u6A5F\u5668\u4EBA\u804A\u5929",
    "Please check": "\u8ACB\u6AA2\u67E5",
    "Install and submit from Local \u2192 default on this device.": "\u8ACB\u5F9E\u6B64\u88DD\u7F6E\u7684 Local \u2192 default \u9032\u884C\u5B89\u88DD\u548C\u63D0\u4EA4\u3002",
    "Could not open the local connection. Please retry.": "\u7121\u6CD5\u958B\u555F\u672C\u6A5F\u9023\u7DDA\u3002\u8ACB\u91CD\u8A66\u3002",
    "Connect to this device\u2019s default": "\u9023\u7DDA\u6B64\u88DD\u7F6E\u7684 default",
    Idle: "\u5F85\u547D",
    Thinking: "\u601D\u8003\u4E2D",
    "Recently working": "\u6700\u8FD1\u6709\u5DE5\u4F5C",
    "Status unavailable": "\u72C0\u614B\u7121\u6CD5\u53D6\u5F97",
    "{0} avatar": "{0} \u982D\u50CF",
    "Confirm installation of {0}": "\u78BA\u8A8D\u5B89\u88DD {0}",
    "Not auditioned": "\u5C1A\u672A\u8A66\u807D",
    "Existing voice settings were preserved. Check the profile\u2019s Voice settings.": "\u5DF2\u4FDD\u7559\u539F\u6709\u8A9E\u97F3\u8A2D\u5B9A\u3002\u8ACB\u6AA2\u67E5\u8A2D\u5B9A\u6A94\u7684\u8A9E\u97F3\u8A2D\u5B9A\u3002",
    "Recommended voice {0} included. Check voice authentication.": "\u5DF2\u5305\u542B\u63A8\u85A6\u8A9E\u97F3 {0}\u3002\u8ACB\u6AA2\u67E5\u8A9E\u97F3\u9A57\u8B49\u3002",
    "Voice settings were not included.": "\u672A\u5305\u542B\u8A9E\u97F3\u8A2D\u5B9A\u3002",
    "Validation issue at {0}. Check the package format and required fields.": "{0} \u9A57\u8B49\u554F\u984C\u3002\u8ACB\u6AA2\u67E5\u5957\u4EF6\u683C\u5F0F\u53CA\u5FC5\u586B\u9805\u3002",
    Avatar: "\u982D\u50CF",
    "Revision {0}": "\u4FEE\u8A02\u7248 {0}",
    "{0} bytes": "{0} \u4F4D\u5143\u7D44"
  },
  ja: {
    "Could not load installed bots. Please retry.": "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307F\u30DC\u30C3\u30C8\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3002\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Could not load the catalog. Installed bots are still available.": "\u30AB\u30BF\u30ED\u30B0\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3002\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307F\u306E\u30DC\u30C3\u30C8\u306F\u958B\u3051\u307E\u3059\u3002",
    "This bot version is no longer published.": "\u3053\u306E\u30DC\u30C3\u30C8\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306F\u516C\u958B\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002",
    "Refresh to check installation status.": "\u66F4\u65B0\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u72B6\u6CC1\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Find your next AI colleague.": "\u3042\u306A\u305F\u306B\u5408\u3046 AI \u306E\u4EF2\u9593\u3092\u898B\u3064\u3051\u307E\u3057\u3087\u3046\u3002",
    Refresh: "\u66F4\u65B0",
    "MyBots menu": "MyBots \u30E1\u30CB\u30E5\u30FC",
    "Browse bots": "\u30DC\u30C3\u30C8\u3092\u63A2\u3059",
    "Installed bots": "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307F",
    "My submissions": "\u81EA\u5206\u306E\u767B\u9332",
    "Connection settings": "\u63A5\u7D9A\u8A2D\u5B9A",
    "Showing the saved catalog while offline. Reconnect to install.": "\u30AA\u30D5\u30E9\u30A4\u30F3\u306E\u305F\u3081\u4FDD\u5B58\u6E08\u307F\u306E\u4E00\u89A7\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059\u3002\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306B\u306F\u518D\u63A5\u7D9A\u304C\u5FC5\u8981\u3067\u3059\u3002",
    "Last checked:": "\u6700\u7D42\u78BA\u8A8D\uFF1A",
    "Search bots": "\u30DC\u30C3\u30C8\u3092\u691C\u7D22",
    "Search by name or role": "\u540D\u524D\u3084\u5F79\u5272\u3067\u691C\u7D22",
    "Bot category": "\u30DC\u30C3\u30C8\u306E\u5206\u985E",
    "All categories": "\u3059\u3079\u3066\u306E\u5206\u985E",
    Business: "\u4ED5\u4E8B",
    Learning: "\u5B66\u7FD2",
    "Daily life": "\u65E5\u5E38",
    "Loading colleagues": "\u4EF2\u9593\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D",
    "{0} colleagues": "{0} \u4EBA\u306E\u4EF2\u9593",
    Soul: "\u30BD\u30A6\u30EB",
    Skills: "\u30B9\u30AD\u30EB",
    Plugins: "\u30D7\u30E9\u30B0\u30A4\u30F3",
    Voice: "\u97F3\u58F0",
    Meet: "\u8A73\u3057\u304F\u898B\u308B",
    "Motion preview": "\u30E2\u30FC\u30B7\u30E7\u30F3\u306E\u30D7\u30EC\u30D3\u30E5\u30FC",
    "No matching bots": "\u8A72\u5F53\u3059\u308B\u30DC\u30C3\u30C8\u304C\u3042\u308A\u307E\u305B\u3093",
    "Try another search or category.": "\u691C\u7D22\u8A9E\u3084\u5206\u985E\u3092\u5909\u3048\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002",
    "No bots installed yet": "\u307E\u3060\u30DC\u30C3\u30C8\u304C\u3042\u308A\u307E\u305B\u3093",
    "Find your first colleague in Browse bots.": "\u300C\u30DC\u30C3\u30C8\u3092\u63A2\u3059\u300D\u3067\u6700\u521D\u306E\u4EF2\u9593\u3092\u898B\u3064\u3051\u307E\u3057\u3087\u3046\u3002",
    "Check version": "\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u78BA\u8A8D",
    Installed: "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307F",
    "Other version": "\u5225\u306E\u30D0\u30FC\u30B8\u30E7\u30F3",
    "Check files": "\u30D5\u30A1\u30A4\u30EB\u3092\u78BA\u8A8D",
    "Open chat": "\u30C1\u30E3\u30C3\u30C8\u3092\u958B\u304F",
    "Loading submissions": "\u767B\u9332\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D",
    "Could not load connection settings. Check the server origin.": "\u63A5\u7D9A\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3002\u30B5\u30FC\u30D0\u30FC\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Could not connect. Check key expiry, permissions and storage.": "\u63A5\u7D9A\u3067\u304D\u307E\u305B\u3093\u3002\u30AD\u30FC\u306E\u6709\u52B9\u671F\u9650\u3001\u6A29\u9650\u3001\u4FDD\u5B58\u5148\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "\u95B2\u89A7\u3068\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306B\u30AD\u30FC\u306F\u4E0D\u8981\u3067\u3059\u3002\u767B\u9332\u306B\u306F\u5236\u4F5C\u8005\u306E API \u30AD\u30FC\u304C\u5FC5\u8981\u3067\u3059\u3002",
    Server: "\u30B5\u30FC\u30D0\u30FC",
    Connection: "\u63A5\u7D9A",
    Connected: "\u63A5\u7D9A\u6E08\u307F",
    Disconnected: "\u672A\u63A5\u7D9A",
    "Environment \xB7 provider": "\u74B0\u5883 \xB7 \u30D7\u30ED\u30D0\u30A4\u30C0\u30FC",
    Permissions: "\u6A29\u9650",
    Expires: "\u6709\u52B9\u671F\u9650",
    "Key provider": "\u30AD\u30FC\u306E\u4FDD\u5B58\u5148",
    "bws item ID (recommended)": "bws \u9805\u76EE ID\uFF08\u63A8\u5968\uFF09",
    "OS secure storage": "OS \u306E\u5B89\u5168\u306A\u30B9\u30C8\u30EC\u30FC\u30B8",
    "This session only": "\u3053\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u307F",
    "bws item ID": "bws \u9805\u76EE ID",
    "MyBots API key": "MyBots API \u30AD\u30FC",
    "Session keys stay in backend memory and are cleared on restart.": "\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30AD\u30FC\u306F\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u306E\u30E1\u30E2\u30EA\u3060\u3051\u306B\u4FDD\u5B58\u3055\u308C\u3001\u518D\u8D77\u52D5\u3067\u6D88\u53BB\u3055\u308C\u307E\u3059\u3002",
    "Secure OS storage is unavailable. Choose bws or session storage.": "OS \u306E\u5B89\u5168\u306A\u30B9\u30C8\u30EC\u30FC\u30B8\u304C\u4F7F\u3048\u307E\u305B\u3093\u3002bws \u307E\u305F\u306F\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044\u3002",
    Connect: "\u63A5\u7D9A\u3059\u308B",
    Disconnect: "\u5207\u65AD\u3059\u308B",
    "Refresh connection": "\u63A5\u7D9A\u3092\u66F4\u65B0",
    Draft: "\u4E0B\u66F8\u304D",
    Validated: "\u691C\u8A3C\u6E08\u307F",
    Published: "\u516C\u958B\u6E08\u307F",
    Unpublished: "\u975E\u516C\u958B",
    "Bot ID": "\u30DC\u30C3\u30C8 ID",
    Version: "\u30D0\u30FC\u30B8\u30E7\u30F3",
    Name: "\u540D\u524D",
    "English name": "\u82F1\u8A9E\u540D",
    Role: "\u5F79\u5272",
    Personality: "\u6027\u683C",
    Description: "\u7D39\u4ECB",
    "First prompt": "\u6700\u521D\u306E\u8CEA\u554F",
    "Could not load connection details.": "\u63A5\u7D9A\u60C5\u5831\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3002",
    "Could not load submissions. Check your key connection.": "\u767B\u9332\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3002\u30AD\u30FC\u306E\u63A5\u7D9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "The screen or connection changed.": "\u753B\u9762\u307E\u305F\u306F\u63A5\u7D9A\u304C\u5909\u308F\u308A\u307E\u3057\u305F\u3002",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "\u4FDD\u5B58\u307E\u305F\u306F\u691C\u8A3C\u3067\u304D\u307E\u305B\u3093\u3002\u5165\u529B\u3001\u30AD\u30FC\u3001\u30B5\u30FC\u30D0\u30FC\u3092\u78BA\u8A8D\u3057\u3001\u540C\u3058\u5185\u5BB9\u3067\u518D\u8A66\u884C\u3059\u308B\u304B\u4E00\u89A7\u3092\u66F4\u65B0\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Select MyBots package": "MyBots \u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u9078\u629E",
    "ZIP ID or version differs. Create a new draft.": "ZIP \u306E ID \u307E\u305F\u306F\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u9055\u3044\u307E\u3059\u3002\u65B0\u3057\u3044\u4E0B\u66F8\u304D\u3092\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "\u30DC\u30C3\u30C8\u3092\u4FDD\u5B58\u3057\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u691C\u8A3C\u3057\u307E\u3059\u3002\u516C\u958B\u306F\u904B\u55B6\u8005\u304C CMS \u3067\u78BA\u8A8D\u3057\u307E\u3059\u3002",
    "Connect a creator API key in Connection settings first.": "\u5148\u306B\u63A5\u7D9A\u8A2D\u5B9A\u3067\u5236\u4F5C\u8005\u306E API \u30AD\u30FC\u3092\u63A5\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Submit a bot": "\u30DC\u30C3\u30C8\u3092\u767B\u9332",
    "Refresh submissions": "\u767B\u9332\u4E00\u89A7\u3092\u66F4\u65B0",
    "No submissions yet": "\u307E\u3060\u767B\u9332\u304C\u3042\u308A\u307E\u305B\u3093",
    "Start your first draft with a Soul and avatar.": "\u30BD\u30A6\u30EB\u3068\u30A2\u30D0\u30BF\u30FC\u3067\u6700\u521D\u306E\u4E0B\u66F8\u304D\u3092\u4F5C\u308A\u307E\u3057\u3087\u3046\u3002",
    "Submission details": "\u767B\u9332\u60C5\u5831",
    "New draft": "\u65B0\u3057\u3044\u4E0B\u66F8\u304D",
    Category: "\u5206\u985E",
    "Save details": "\u60C5\u5831\u3092\u4FDD\u5B58",
    "Save draft": "\u4E0B\u66F8\u304D\u3092\u4FDD\u5B58",
    "Soul and avatar": "\u30BD\u30A6\u30EB\u3068\u30A2\u30D0\u30BF\u30FC",
    "Select bot avatar": "\u30DC\u30C3\u30C8\u306E\u30A2\u30D0\u30BF\u30FC\u3092\u9078\u629E",
    "Choose avatar": "\u30A2\u30D0\u30BF\u30FC\u3092\u9078\u629E",
    "Avatar selected": "\u30A2\u30D0\u30BF\u30FC\u9078\u629E\u6E08\u307F",
    "PNG/JPEG \xB7 square, 128\u20132048px": "PNG/JPEG \xB7 \u6B63\u65B9\u5F62 128\u20132048px",
    "Save Soul and avatar package": "\u30BD\u30A6\u30EB\u3068\u30A2\u30D0\u30BF\u30FC\u306E\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u4FDD\u5B58",
    "Full package": "\u5B8C\u5168\u306A\u30D1\u30C3\u30B1\u30FC\u30B8",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "\u30B9\u30AD\u30EB\u3001MCP\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u3001\u97F3\u58F0\u3092\u542B\u3080\u5834\u5408\u306F\u5B8C\u5168\u306A ZIP \u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044\u3002",
    "Choose package": "\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u9078\u629E",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "\u3053\u306E Hermes \u306B\u306F\u30D5\u30A1\u30A4\u30EB\u9078\u629E\u6A5F\u80FD\u304C\u3042\u308A\u307E\u305B\u3093\u3002CMS \u304B\u3089\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "ZIP \u306E\u60C5\u5831\u304C\u4E0B\u66F8\u304D\u3068\u7570\u306A\u308A\u307E\u3059\u3002\u9069\u7528\u3057\u3066\u304B\u3089\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Apply ZIP details and upload": "ZIP \u60C5\u5831\u3092\u9069\u7528\u3057\u3066\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",
    Cancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
    "Validate package": "\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u691C\u8A3C",
    "Validated \xB7 awaiting CMS review and publication.": "\u691C\u8A3C\u6E08\u307F \xB7 CMS \u306E\u78BA\u8A8D\u3068\u516C\u958B\u3092\u5F85\u3063\u3066\u3044\u307E\u3059\u3002",
    "Published \xB7 available in the gallery.": "\u516C\u958B\u6E08\u307F \xB7 \u30AE\u30E3\u30E9\u30EA\u30FC\u3067\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002",
    "MCP \xB7 runs local Python": "MCP \xB7 \u30ED\u30FC\u30AB\u30EB Python \u5B9F\u884C",
    "Plugin \xB7 runs local Python": "\u30D7\u30E9\u30B0\u30A4\u30F3 \xB7 \u30ED\u30FC\u30AB\u30EB Python \u5B9F\u884C",
    "Recommended GPT Live voice": "\u63A8\u5968 GPT Live \u97F3\u58F0",
    "Could not review the installation. Check connection and publication status.": "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5185\u5BB9\u3092\u78BA\u8A8D\u3067\u304D\u307E\u305B\u3093\u3002\u63A5\u7D9A\u3068\u516C\u958B\u72B6\u6CC1\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Could not install. Review the configuration and retry.": "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3067\u304D\u307E\u305B\u3093\u3002\u69CB\u6210\u3092\u78BA\u8A8D\u3057\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Meet {0}": "{0} \u306B\u4F1A\u3046",
    "Soul and avatar required": "\u30BD\u30A6\u30EB\u3068\u30A2\u30D0\u30BF\u30FC\u306F\u5FC5\u9808",
    "Include these features": "\u4E00\u7DD2\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u6A5F\u80FD",
    "Start with a Soul and avatar.": "\u30BD\u30A6\u30EB\u3068\u30A2\u30D0\u30BF\u30FC\u3067\u59CB\u3081\u307E\u3057\u3087\u3046\u3002",
    "Reviewing installation": "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5185\u5BB9\u3092\u78BA\u8A8D\u4E2D",
    "New profile:": "\u65B0\u3057\u3044\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\uFF1A",
    "Author:": "\u4F5C\u6210\u8005\uFF1A",
    "Selected MCP and plugins execute Python on this device.": "\u9078\u629E\u3057\u305F MCP \u3068\u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u3053\u306E\u7AEF\u672B\u3067 Python \u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002",
    "Recommended voice:": "\u63A8\u5968\u97F3\u58F0\uFF1A",
    "Configure voice authentication in Hermes.": "\u97F3\u58F0\u306E\u8A8D\u8A3C\u306F Hermes \u3067\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Soul and file verification": "\u30BD\u30A6\u30EB\u3068\u30D5\u30A1\u30A4\u30EB\u306E\u691C\u8A3C\u60C5\u5831",
    "Install {0}": "{0} \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",
    "Review again": "\u3082\u3046\u4E00\u5EA6\u78BA\u8A8D",
    "Already installed": "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307F\u3067\u3059",
    "Installation complete": "\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u5B8C\u4E86",
    "Configure a model and authentication in Hermes.": "\u30E2\u30C7\u30EB\u3068\u8A8D\u8A3C\u3092 Hermes \u3067\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Your profile is ready.": "\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u306E\u6E96\u5099\u304C\u3067\u304D\u307E\u3057\u305F\u3002",
    "First prompt:": "\u6700\u521D\u306E\u8CEA\u554F\uFF1A",
    "Setup guide": "\u8A2D\u5B9A\u30AC\u30A4\u30C9",
    "Open bot chat": "\u30DC\u30C3\u30C8\u306E\u30C1\u30E3\u30C3\u30C8\u3092\u958B\u304F",
    "Please check": "\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044",
    "Install and submit from Local \u2192 default on this device.": "\u3053\u306E\u7AEF\u672B\u306E Local \u2192 default \u304B\u3089\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3068\u767B\u9332\u3092\u884C\u3044\u307E\u3059\u3002",
    "Could not open the local connection. Please retry.": "\u30ED\u30FC\u30AB\u30EB\u63A5\u7D9A\u3092\u958B\u3051\u307E\u305B\u3093\u3002\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Connect to this device\u2019s default": "\u3053\u306E\u7AEF\u672B\u306E default \u306B\u63A5\u7D9A",
    Idle: "\u5F85\u6A5F\u4E2D",
    Thinking: "\u8003\u3048\u4E2D",
    "Recently working": "\u6700\u8FD1\u306E\u4F5C\u696D\u4E2D",
    "Status unavailable": "\u72B6\u614B\u3092\u78BA\u8A8D\u3067\u304D\u307E\u305B\u3093",
    "{0} avatar": "{0} \u306E\u30A2\u30D0\u30BF\u30FC",
    "Confirm installation of {0}": "{0} \u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3092\u78BA\u8A8D",
    "Not auditioned": "\u8A66\u8074\u672A\u78BA\u8A8D",
    "Existing voice settings were preserved. Check the profile\u2019s Voice settings.": "\u65E2\u5B58\u306E\u97F3\u58F0\u8A2D\u5B9A\u3092\u4FDD\u6301\u3057\u307E\u3057\u305F\u3002\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u306E Voice \u8A2D\u5B9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Recommended voice {0} included. Check voice authentication.": "\u63A8\u5968\u97F3\u58F0 {0} \u3092\u542B\u307F\u307E\u3059\u3002\u97F3\u58F0\u8A8D\u8A3C\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "Voice settings were not included.": "\u97F3\u58F0\u8A2D\u5B9A\u306F\u542B\u307E\u308C\u3066\u3044\u307E\u305B\u3093\u3002",
    "Validation issue at {0}. Check the package format and required fields.": "{0} \u306E\u691C\u8A3C\u306B\u554F\u984C\u304C\u3042\u308A\u307E\u3059\u3002\u5F62\u5F0F\u3068\u5FC5\u9808\u9805\u76EE\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    Avatar: "\u30A2\u30D0\u30BF\u30FC",
    "Revision {0}": "\u30EA\u30D3\u30B8\u30E7\u30F3 {0}",
    "{0} bytes": "{0} \u30D0\u30A4\u30C8"
  },
  ar: {
    "Could not load installed bots. Please retry.": "\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u0648\u062A\u0627\u062A \u0627\u0644\u0645\u062B\u0628\u062A\u0629. \u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u064B\u0627.",
    "Could not load the catalog. Installed bots are still available.": "\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0643\u062A\u0627\u0644\u0648\u062C. \u0644\u0627 \u062A\u0632\u0627\u0644 \u0627\u0644\u0628\u0648\u062A\u0627\u062A \u0627\u0644\u0645\u062B\u0628\u062A\u0629 \u0645\u062A\u0627\u062D\u0629.",
    "This bot version is no longer published.": "\u0647\u0630\u0627 \u0627\u0644\u0625\u0635\u062F\u0627\u0631 \u0645\u0646 \u0627\u0644\u0628\u0648\u062A \u063A\u064A\u0631 \u0645\u0646\u0634\u0648\u0631.",
    "Refresh to check installation status.": "\u062D\u062F\u0651\u062B \u0644\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u062B\u0628\u064A\u062A.",
    "Find your next AI colleague.": "\u0627\u0639\u062B\u0631 \u0639\u0644\u0649 \u0632\u0645\u064A\u0644\u0643 \u0627\u0644\u0642\u0627\u062F\u0645 \u0645\u0646 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A.",
    Refresh: "\u062A\u062D\u062F\u064A\u062B",
    "MyBots menu": "\u0642\u0627\u0626\u0645\u0629 MyBots",
    "Browse bots": "\u0627\u0633\u062A\u0643\u0634\u0627\u0641 \u0627\u0644\u0628\u0648\u062A\u0627\u062A",
    "Installed bots": "\u0627\u0644\u0628\u0648\u062A\u0627\u062A \u0627\u0644\u0645\u062B\u0628\u062A\u0629",
    "My submissions": "\u0645\u0633\u0627\u0647\u0645\u0627\u062A\u064A",
    "Connection settings": "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644",
    "Showing the saved catalog while offline. Reconnect to install.": "\u064A\u064F\u0639\u0631\u0636 \u0627\u0644\u0643\u062A\u0627\u0644\u0648\u062C \u0627\u0644\u0645\u062D\u0641\u0648\u0638 \u062F\u0648\u0646 \u0627\u062A\u0635\u0627\u0644. \u0623\u0639\u062F \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0644\u0644\u062A\u062B\u0628\u064A\u062A.",
    "Last checked:": "\u0622\u062E\u0631 \u062A\u062D\u0642\u0642:",
    "Search bots": "\u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0628\u0648\u062A",
    "Search by name or role": "\u0627\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u062F\u0648\u0631",
    "Bot category": "\u0641\u0626\u0629 \u0627\u0644\u0628\u0648\u062A",
    "All categories": "\u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u0626\u0627\u062A",
    Business: "\u0627\u0644\u0639\u0645\u0644",
    Learning: "\u0627\u0644\u062A\u0639\u0644\u0645",
    "Daily life": "\u0627\u0644\u062D\u064A\u0627\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629",
    "Loading colleagues": "\u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0632\u0645\u0644\u0627\u0621",
    "{0} colleagues": "{0} \u0645\u0646 \u0627\u0644\u0632\u0645\u0644\u0627\u0621",
    Soul: "\u0627\u0644\u0634\u062E\u0635\u064A\u0629",
    Skills: "\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A",
    Plugins: "\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062A",
    Voice: "\u0627\u0644\u0635\u0648\u062A",
    Meet: "\u062A\u0639\u0631\u0651\u0641 \u0639\u0644\u064A\u0647",
    "Motion preview": "\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u062D\u0631\u0643\u0629",
    "No matching bots": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u0648\u062A\u0627\u062A \u0645\u0637\u0627\u0628\u0642\u0629",
    "Try another search or category.": "\u062C\u0631\u0651\u0628 \u0628\u062D\u062B\u064B\u0627 \u0623\u0648 \u0641\u0626\u0629 \u0623\u062E\u0631\u0649.",
    "No bots installed yet": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u0648\u062A\u0627\u062A \u0645\u062B\u0628\u062A\u0629 \u0628\u0639\u062F",
    "Find your first colleague in Browse bots.": "\u0627\u0639\u062B\u0631 \u0639\u0644\u0649 \u0632\u0645\u064A\u0644\u0643 \u0627\u0644\u0623\u0648\u0644 \u0641\u064A \u0627\u0633\u062A\u0643\u0634\u0627\u0641 \u0627\u0644\u0628\u0648\u062A\u0627\u062A.",
    "Check version": "\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0625\u0635\u062F\u0627\u0631",
    Installed: "\u0645\u062B\u0628\u062A",
    "Other version": "\u0625\u0635\u062F\u0627\u0631 \u0622\u062E\u0631",
    "Check files": "\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0644\u0641\u0627\u062A",
    "Open chat": "\u0641\u062A\u062D \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629",
    "Loading submissions": "\u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0627\u062A",
    "Could not load connection settings. Check the server origin.": "\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062E\u0627\u062F\u0645.",
    "Could not connect. Check key expiry, permissions and storage.": "\u062A\u0639\u0630\u0631 \u0627\u0644\u0627\u062A\u0635\u0627\u0644. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0645\u0641\u062A\u0627\u062D \u0648\u0623\u0630\u0648\u0646\u0627\u062A\u0647 \u0648\u0645\u0643\u0627\u0646 \u062A\u062E\u0632\u064A\u0646\u0647.",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "\u0627\u0644\u062A\u0635\u0641\u062D \u0648\u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0644\u0627 \u064A\u062D\u062A\u0627\u062C\u0627\u0646 \u0645\u0641\u062A\u0627\u062D\u064B\u0627. \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0628\u0648\u062A\u0627\u062A \u064A\u062A\u0637\u0644\u0628 \u0645\u0641\u062A\u0627\u062D API \u0644\u0644\u0645\u0646\u0634\u0626.",
    Server: "\u0627\u0644\u062E\u0627\u062F\u0645",
    Connection: "\u0627\u0644\u0627\u062A\u0635\u0627\u0644",
    Connected: "\u0645\u062A\u0635\u0644",
    Disconnected: "\u063A\u064A\u0631 \u0645\u062A\u0635\u0644",
    "Environment \xB7 provider": "\u0627\u0644\u0628\u064A\u0626\u0629 \xB7 \u0627\u0644\u0645\u0632\u0648\u062F",
    Permissions: "\u0627\u0644\u0623\u0630\u0648\u0646\u0627\u062A",
    Expires: "\u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629",
    "Key provider": "\u0645\u0632\u0648\u062F \u0627\u0644\u0645\u0641\u062A\u0627\u062D",
    "bws item ID (recommended)": "\u0645\u0639\u0631\u0651\u0641 \u0639\u0646\u0635\u0631 bws (\u0645\u0648\u0635\u0649 \u0628\u0647)",
    "OS secure storage": "\u0627\u0644\u062A\u062E\u0632\u064A\u0646 \u0627\u0644\u0622\u0645\u0646 \u0644\u0644\u0646\u0638\u0627\u0645",
    "This session only": "\u0647\u0630\u0647 \u0627\u0644\u062C\u0644\u0633\u0629 \u0641\u0642\u0637",
    "bws item ID": "\u0645\u0639\u0631\u0651\u0641 \u0639\u0646\u0635\u0631 bws",
    "MyBots API key": "\u0645\u0641\u062A\u0627\u062D API \u0644\u0640 MyBots",
    "Session keys stay in backend memory and are cleared on restart.": "\u062A\u064F\u062D\u0641\u0638 \u0645\u0641\u0627\u062A\u064A\u062D \u0627\u0644\u062C\u0644\u0633\u0629 \u0641\u064A \u0630\u0627\u0643\u0631\u0629 \u0627\u0644\u062E\u0644\u0641\u064A\u0629 \u0648\u062A\u064F\u0645\u0633\u062D \u0639\u0646\u062F \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644.",
    "Secure OS storage is unavailable. Choose bws or session storage.": "\u0627\u0644\u062A\u062E\u0632\u064A\u0646 \u0627\u0644\u0622\u0645\u0646 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D. \u0627\u062E\u062A\u0631 bws \u0623\u0648 \u062A\u062E\u0632\u064A\u0646 \u0627\u0644\u062C\u0644\u0633\u0629.",
    Connect: "\u0627\u062A\u0635\u0627\u0644",
    Disconnect: "\u0642\u0637\u0639 \u0627\u0644\u0627\u062A\u0635\u0627\u0644",
    "Refresh connection": "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0627\u062A\u0635\u0627\u0644",
    Draft: "\u0645\u0633\u0648\u062F\u0629",
    Validated: "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642",
    Published: "\u0645\u0646\u0634\u0648\u0631",
    Unpublished: "\u063A\u064A\u0631 \u0645\u0646\u0634\u0648\u0631",
    "Bot ID": "\u0645\u0639\u0631\u0651\u0641 \u0627\u0644\u0628\u0648\u062A",
    Version: "\u0627\u0644\u0625\u0635\u062F\u0627\u0631",
    Name: "\u0627\u0644\u0627\u0633\u0645",
    "English name": "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629",
    Role: "\u0627\u0644\u062F\u0648\u0631",
    Personality: "\u0627\u0644\u0637\u0628\u0639",
    Description: "\u0627\u0644\u0648\u0635\u0641",
    "First prompt": "\u0627\u0644\u0633\u0624\u0627\u0644 \u0627\u0644\u0623\u0648\u0644",
    "Could not load connection details.": "\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0627\u062A\u0635\u0627\u0644.",
    "Could not load submissions. Check your key connection.": "\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0627\u062A. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u062A\u0635\u0627\u0644 \u0627\u0644\u0645\u0641\u062A\u0627\u062D.",
    "The screen or connection changed.": "\u062A\u063A\u064A\u0631\u062A \u0627\u0644\u0634\u0627\u0634\u0629 \u0623\u0648 \u0627\u0644\u0627\u062A\u0635\u0627\u0644.",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "\u062A\u0639\u0630\u0631 \u0627\u0644\u062D\u0641\u0638 \u0623\u0648 \u0627\u0644\u062A\u062D\u0642\u0642. \u0631\u0627\u062C\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0627\u0644\u0645\u0641\u062A\u0627\u062D \u0648\u0627\u0644\u062E\u0627\u062F\u0645. \u0623\u0639\u062F \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0628\u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0646\u0641\u0633\u0647 \u0623\u0648 \u062D\u062F\u0651\u062B \u0644\u0644\u062A\u0623\u0643\u062F.",
    "Select MyBots package": "\u0627\u062E\u062A\u0631 \u062D\u0632\u0645\u0629 MyBots",
    "ZIP ID or version differs. Create a new draft.": "\u0645\u0639\u0631\u0651\u0641 ZIP \u0623\u0648 \u0625\u0635\u062F\u0627\u0631\u0647 \u0645\u062E\u062A\u0644\u0641. \u0623\u0646\u0634\u0626 \u0645\u0633\u0648\u062F\u0629 \u062C\u062F\u064A\u062F\u0629.",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "\u0627\u062D\u0641\u0638 \u0627\u0644\u0628\u0648\u062A \u0648\u062A\u062D\u0642\u0642 \u0645\u0646 \u062D\u0632\u0645\u062A\u0647. \u064A\u0631\u0627\u062C\u0639 \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0646\u0634\u0631 \u0641\u064A CMS.",
    "Connect a creator API key in Connection settings first.": "\u0627\u0631\u0628\u0637 \u0645\u0641\u062A\u0627\u062D API \u0644\u0644\u0645\u0646\u0634\u0626 \u0641\u064A \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0623\u0648\u0644\u064B\u0627.",
    "Submit a bot": "\u0625\u0631\u0633\u0627\u0644 \u0628\u0648\u062A",
    "Refresh submissions": "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0627\u062A",
    "No submissions yet": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0633\u0627\u0647\u0645\u0627\u062A \u0628\u0639\u062F",
    "Start your first draft with a Soul and avatar.": "\u0627\u0628\u062F\u0623 \u0645\u0633\u0648\u062F\u062A\u0643 \u0627\u0644\u0623\u0648\u0644\u0649 \u0628\u0634\u062E\u0635\u064A\u0629 \u0648\u0635\u0648\u0631\u0629.",
    "Submission details": "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629",
    "New draft": "\u0645\u0633\u0648\u062F\u0629 \u062C\u062F\u064A\u062F\u0629",
    Category: "\u0627\u0644\u0641\u0626\u0629",
    "Save details": "\u062D\u0641\u0638 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644",
    "Save draft": "\u062D\u0641\u0638 \u0627\u0644\u0645\u0633\u0648\u062F\u0629",
    "Soul and avatar": "\u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0635\u0648\u0631\u0629",
    "Select bot avatar": "\u0627\u062E\u062A\u0631 \u0635\u0648\u0631\u0629 \u0627\u0644\u0628\u0648\u062A",
    "Choose avatar": "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0635\u0648\u0631\u0629",
    "Avatar selected": "\u062A\u0645 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0635\u0648\u0631\u0629",
    "PNG/JPEG \xB7 square, 128\u20132048px": "PNG/JPEG \xB7 \u0645\u0631\u0628\u0639\u060C 128\u20132048px",
    "Save Soul and avatar package": "\u062D\u0641\u0638 \u062D\u0632\u0645\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0635\u0648\u0631\u0629",
    "Full package": "\u0627\u0644\u062D\u0632\u0645\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "\u0627\u062E\u062A\u0631 ZIP \u0643\u0627\u0645\u0644\u064B\u0627 \u0644\u0644\u0628\u0648\u062A\u0627\u062A \u0630\u0627\u062A \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0623\u0648 MCP \u0623\u0648 \u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062A \u0623\u0648 \u0627\u0644\u0635\u0648\u062A.",
    "Choose package": "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062D\u0632\u0645\u0629",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "\u0647\u0630\u0627 \u0627\u0644\u0625\u0635\u062F\u0627\u0631 \u0644\u0627 \u064A\u062F\u0639\u0645 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062A. \u0627\u0631\u0641\u0639\u0647\u0627 \u0639\u0628\u0631 CMS.",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "\u062A\u0641\u0627\u0635\u064A\u0644 ZIP \u062A\u062E\u062A\u0644\u0641 \u0639\u0646 \u0627\u0644\u0645\u0633\u0648\u062F\u0629. \u0637\u0628\u0651\u0642\u0647\u0627 \u0642\u0628\u0644 \u0627\u0644\u0631\u0641\u0639.",
    "Apply ZIP details and upload": "\u062A\u0637\u0628\u064A\u0642 \u062A\u0641\u0627\u0635\u064A\u0644 ZIP \u0648\u0627\u0644\u0631\u0641\u0639",
    Cancel: "\u0625\u0644\u063A\u0627\u0621",
    "Validate package": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062D\u0632\u0645\u0629",
    "Validated \xB7 awaiting CMS review and publication.": "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642 \xB7 \u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0648\u0627\u0644\u0646\u0634\u0631 \u0641\u064A CMS.",
    "Published \xB7 available in the gallery.": "\u0645\u0646\u0634\u0648\u0631 \xB7 \u0645\u062A\u0627\u062D \u0641\u064A \u0627\u0644\u0645\u0639\u0631\u0636.",
    "MCP \xB7 runs local Python": "MCP \xB7 \u064A\u0634\u063A\u0651\u0644 Python \u0645\u062D\u0644\u064A\u064B\u0627",
    "Plugin \xB7 runs local Python": "\u0625\u0636\u0627\u0641\u0629 \xB7 \u062A\u0634\u063A\u0651\u0644 Python \u0645\u062D\u0644\u064A\u064B\u0627",
    "Recommended GPT Live voice": "\u0635\u0648\u062A GPT Live \u0627\u0644\u0645\u0642\u062A\u0631\u062D",
    "Could not review the installation. Check connection and publication status.": "\u062A\u0639\u0630\u0631\u062A \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u062A\u062B\u0628\u064A\u062A. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0648\u062D\u0627\u0644\u0629 \u0627\u0644\u0646\u0634\u0631.",
    "Could not install. Review the configuration and retry.": "\u062A\u0639\u0630\u0631 \u0627\u0644\u062A\u062B\u0628\u064A\u062A. \u0631\u0627\u062C\u0639 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0648\u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u064B\u0627.",
    "Meet {0}": "\u062A\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 {0}",
    "Soul and avatar required": "\u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0635\u0648\u0631\u0629 \u0645\u0637\u0644\u0648\u0628\u062A\u0627\u0646",
    "Include these features": "\u062A\u0636\u0645\u064A\u0646 \u0647\u0630\u0647 \u0627\u0644\u0645\u064A\u0632\u0627\u062A",
    "Start with a Soul and avatar.": "\u0627\u0628\u062F\u0623 \u0628\u0634\u062E\u0635\u064A\u0629 \u0648\u0635\u0648\u0631\u0629.",
    "Reviewing installation": "\u062C\u0627\u0631\u064D \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u062A\u062B\u0628\u064A\u062A",
    "New profile:": "\u0645\u0644\u0641 \u062C\u062F\u064A\u062F:",
    "Author:": "\u0627\u0644\u0645\u0624\u0644\u0641:",
    "Selected MCP and plugins execute Python on this device.": "\u062A\u0646\u0641\u0630 MCP \u0648\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062A \u0627\u0644\u0645\u062D\u062F\u062F\u0629 Python \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632.",
    "Recommended voice:": "\u0627\u0644\u0635\u0648\u062A \u0627\u0644\u0645\u0642\u062A\u0631\u062D:",
    "Configure voice authentication in Hermes.": "\u0627\u0636\u0628\u0637 \u0645\u0635\u0627\u062F\u0642\u0629 \u0627\u0644\u0635\u0648\u062A \u0641\u064A Hermes.",
    "Soul and file verification": "\u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0644\u0641\u0627\u062A",
    "Install {0}": "\u062A\u062B\u0628\u064A\u062A {0}",
    "Review again": "\u0645\u0631\u0627\u062C\u0639\u0629 \u0645\u062C\u062F\u062F\u064B\u0627",
    "Already installed": "\u0645\u062B\u0628\u062A \u0628\u0627\u0644\u0641\u0639\u0644",
    "Installation complete": "\u0627\u0643\u062A\u0645\u0644 \u0627\u0644\u062A\u062B\u0628\u064A\u062A",
    "Configure a model and authentication in Hermes.": "\u0627\u0636\u0628\u0637 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0648\u0627\u0644\u0645\u0635\u0627\u062F\u0642\u0629 \u0641\u064A Hermes.",
    "Your profile is ready.": "\u0645\u0644\u0641\u0643 \u062C\u0627\u0647\u0632.",
    "First prompt:": "\u0627\u0644\u0633\u0624\u0627\u0644 \u0627\u0644\u0623\u0648\u0644:",
    "Setup guide": "\u062F\u0644\u064A\u0644 \u0627\u0644\u0625\u0639\u062F\u0627\u062F",
    "Open bot chat": "\u0641\u062A\u062D \u0645\u062D\u0627\u062F\u062B\u0629 \u0627\u0644\u0628\u0648\u062A",
    "Please check": "\u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642",
    "Install and submit from Local \u2192 default on this device.": "\u062B\u0628\u0651\u062A \u0648\u0623\u0631\u0633\u0644 \u0645\u0646 Local \u2192 default \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632.",
    "Could not open the local connection. Please retry.": "\u062A\u0639\u0630\u0631 \u0641\u062A\u062D \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0627\u0644\u0645\u062D\u0644\u064A. \u062D\u0627\u0648\u0644 \u0645\u062C\u062F\u062F\u064B\u0627.",
    "Connect to this device\u2019s default": "\u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0645\u0644\u0641 default \u0644\u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632",
    Idle: "\u0641\u064A \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631",
    Thinking: "\u064A\u0641\u0643\u0631",
    "Recently working": "\u0639\u0645\u0644 \u062D\u062F\u064A\u062B\u064B\u0627",
    "Status unavailable": "\u0627\u0644\u062D\u0627\u0644\u0629 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629",
    "{0} avatar": "\u0635\u0648\u0631\u0629 {0}",
    "Confirm installation of {0}": "\u062A\u0623\u0643\u064A\u062F \u062A\u062B\u0628\u064A\u062A {0}",
    "Not auditioned": "\u0644\u0645 \u064A\u064F\u062E\u062A\u0628\u0631 \u0628\u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0639",
    "Existing voice settings were preserved. Check the profile\u2019s Voice settings.": "\u062D\u064F\u0641\u0638\u062A \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0635\u0648\u062A \u0627\u0644\u0633\u0627\u0628\u0642\u0629. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0635\u0648\u062A \u0644\u0644\u0645\u0644\u0641.",
    "Recommended voice {0} included. Check voice authentication.": "\u0623\u064F\u062F\u0631\u062C \u0627\u0644\u0635\u0648\u062A \u0627\u0644\u0645\u0642\u062A\u0631\u062D {0}. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0645\u0635\u0627\u062F\u0642\u0629 \u0627\u0644\u0635\u0648\u062A.",
    "Voice settings were not included.": "\u0644\u0645 \u062A\u064F\u062F\u0631\u062C \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0635\u0648\u062A.",
    "Validation issue at {0}. Check the package format and required fields.": "\u0645\u0634\u0643\u0644\u0629 \u062A\u062D\u0642\u0642 \u0641\u064A {0}. \u0631\u0627\u062C\u0639 \u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u062D\u0632\u0645\u0629 \u0648\u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629.",
    Avatar: "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0645\u0632\u064A\u0629",
    "Revision {0}": "\u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 {0}",
    "{0} bytes": "{0} \u0628\u0627\u064A\u062A"
  },
  ru: {
    "Could not load installed bots. Please retry.": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0431\u043E\u0442\u043E\u0432. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443.",
    "Could not load the catalog. Installed bots are still available.": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433. \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0431\u043E\u0442\u044B \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B.",
    "This bot version is no longer published.": "\u042D\u0442\u0430 \u0432\u0435\u0440\u0441\u0438\u044F \u0431\u043E\u0442\u0430 \u043D\u0435 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0430.",
    "Refresh to check installation status.": "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438.",
    "Find your next AI colleague.": "\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0435\u0433\u043E \u0418\u0418-\u043A\u043E\u043B\u043B\u0435\u0433\u0443.",
    Refresh: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",
    "MyBots menu": "\u041C\u0435\u043D\u044E MyBots",
    "Browse bots": "\u041D\u0430\u0439\u0442\u0438 \u0431\u043E\u0442\u043E\u0432",
    "Installed bots": "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0431\u043E\u0442\u044B",
    "My submissions": "\u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438",
    "Connection settings": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",
    "Showing the saved catalog while offline. Reconnect to install.": "\u041F\u043E\u043A\u0430\u0437\u0430\u043D \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0439 \u043A\u0430\u0442\u0430\u043B\u043E\u0433. \u0414\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u0441\u044C \u0441\u043D\u043E\u0432\u0430.",
    "Last checked:": "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430:",
    "Search bots": "\u041F\u043E\u0438\u0441\u043A \u0431\u043E\u0442\u043E\u0432",
    "Search by name or role": "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0438\u043C\u0435\u043D\u0438 \u0438\u043B\u0438 \u0440\u043E\u043B\u0438",
    "Bot category": "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0431\u043E\u0442\u0430",
    "All categories": "\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
    Business: "\u0420\u0430\u0431\u043E\u0442\u0430",
    Learning: "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435",
    "Daily life": "\u041F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435",
    "Loading colleagues": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u043E\u043B\u043B\u0435\u0433",
    "{0} colleagues": "\u041A\u043E\u043B\u043B\u0435\u0433: {0}",
    Soul: "\u0414\u0443\u0448\u0430",
    Skills: "\u041D\u0430\u0432\u044B\u043A\u0438",
    Plugins: "\u041F\u043B\u0430\u0433\u0438\u043D\u044B",
    Voice: "\u0413\u043E\u043B\u043E\u0441",
    Meet: "\u041F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F",
    "Motion preview": "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F",
    "No matching bots": "\u041F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u0431\u043E\u0442\u043E\u0432 \u043D\u0435\u0442",
    "Try another search or category.": "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441 \u0438\u043B\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E.",
    "No bots installed yet": "\u0411\u043E\u0442\u044B \u0435\u0449\u0451 \u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u044B",
    "Find your first colleague in Browse bots.": "\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043B\u043B\u0435\u0433\u0443 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 \u0431\u043E\u0442\u043E\u0432.",
    "Check version": "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0435\u0440\u0441\u0438\u044E",
    Installed: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D",
    "Other version": "\u0414\u0440\u0443\u0433\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F",
    "Check files": "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0444\u0430\u0439\u043B\u044B",
    "Open chat": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0447\u0430\u0442",
    "Loading submissions": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0437\u0430\u044F\u0432\u043E\u043A",
    "Could not load connection settings. Check the server origin.": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430.",
    "Could not connect. Check key expiry, permissions and storage.": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u0440\u043E\u043A \u043A\u043B\u044E\u0447\u0430, \u043F\u0440\u0430\u0432\u0430 \u0438 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435.",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0431\u0435\u0437 \u043A\u043B\u044E\u0447\u0430. \u0414\u043B\u044F \u0437\u0430\u044F\u0432\u043A\u0438 \u043D\u0443\u0436\u0435\u043D API-\u043A\u043B\u044E\u0447 \u0430\u0432\u0442\u043E\u0440\u0430.",
    Server: "\u0421\u0435\u0440\u0432\u0435\u0440",
    Connection: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435",
    Connected: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E",
    Disconnected: "\u041D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E",
    "Environment \xB7 provider": "\u0421\u0440\u0435\u0434\u0430 \xB7 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440",
    Permissions: "\u041F\u0440\u0430\u0432\u0430",
    Expires: "\u0418\u0441\u0442\u0435\u043A\u0430\u0435\u0442",
    "Key provider": "\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u043A\u043B\u044E\u0447\u0430",
    "bws item ID (recommended)": "ID \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 bws (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F)",
    "OS secure storage": "\u0417\u0430\u0449\u0438\u0449\u0451\u043D\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u041E\u0421",
    "This session only": "\u0422\u043E\u043B\u044C\u043A\u043E \u044D\u0442\u043E\u0442 \u0441\u0435\u0430\u043D\u0441",
    "bws item ID": "ID \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 bws",
    "MyBots API key": "API-\u043A\u043B\u044E\u0447 MyBots",
    "Session keys stay in backend memory and are cleared on restart.": "\u041A\u043B\u044E\u0447\u0438 \u0441\u0435\u0430\u043D\u0441\u0430 \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0432 \u043F\u0430\u043C\u044F\u0442\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u0443\u0434\u0430\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u043A\u0435.",
    "Secure OS storage is unavailable. Choose bws or session storage.": "\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u041E\u0421 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 bws \u0438\u043B\u0438 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0432 \u0441\u0435\u0430\u043D\u0441\u0435.",
    Connect: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C",
    Disconnect: "\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C",
    "Refresh connection": "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435",
    Draft: "\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A",
    Validated: "\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E",
    Published: "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E",
    Unpublished: "\u041D\u0435 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E",
    "Bot ID": "ID \u0431\u043E\u0442\u0430",
    Version: "\u0412\u0435\u0440\u0441\u0438\u044F",
    Name: "\u0418\u043C\u044F",
    "English name": "\u0418\u043C\u044F \u043D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C",
    Role: "\u0420\u043E\u043B\u044C",
    Personality: "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440",
    Description: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
    "First prompt": "\u041F\u0435\u0440\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441",
    "Could not load connection details.": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F.",
    "Could not load submissions. Check your key connection.": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043A\u043B\u044E\u0447.",
    "The screen or connection changed.": "\u042D\u043A\u0440\u0430\u043D \u0438\u043B\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0438\u0441\u044C.",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u043B\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0432\u043E\u0434, \u043A\u043B\u044E\u0447 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0442\u0435 \u0436\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u043B\u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442.",
    "Select MyBots package": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0430\u043A\u0435\u0442 MyBots",
    "ZIP ID or version differs. Create a new draft.": "ID \u0438\u043B\u0438 \u0432\u0435\u0440\u0441\u0438\u044F ZIP \u043E\u0442\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F. \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A.",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u0431\u043E\u0442\u0430 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0430\u043A\u0435\u0442. \u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0432 CMS.",
    "Connect a creator API key in Connection settings first.": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435 API-\u043A\u043B\u044E\u0447 \u0430\u0432\u0442\u043E\u0440\u0430 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445.",
    "Submit a bot": "\u041F\u043E\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
    "Refresh submissions": "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438",
    "No submissions yet": "\u0417\u0430\u044F\u0432\u043E\u043A \u043F\u043E\u043A\u0430 \u043D\u0435\u0442",
    "Start your first draft with a Soul and avatar.": "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u0441 \u0434\u0443\u0448\u0438 \u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430.",
    "Submission details": "\u0414\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u044F\u0432\u043A\u0438",
    "New draft": "\u041D\u043E\u0432\u044B\u0439 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A",
    Category: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
    "Save details": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435",
    "Save draft": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A",
    "Soul and avatar": "\u0414\u0443\u0448\u0430 \u0438 \u0430\u0432\u0430\u0442\u0430\u0440",
    "Select bot avatar": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0432\u0430\u0442\u0430\u0440 \u0431\u043E\u0442\u0430",
    "Choose avatar": "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440",
    "Avatar selected": "\u0410\u0432\u0430\u0442\u0430\u0440 \u0432\u044B\u0431\u0440\u0430\u043D",
    "PNG/JPEG \xB7 square, 128\u20132048px": "PNG/JPEG \xB7 \u043A\u0432\u0430\u0434\u0440\u0430\u0442, 128\u20132048px",
    "Save Soul and avatar package": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0430\u043A\u0435\u0442 \u0434\u0443\u0448\u0438 \u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430",
    "Full package": "\u041F\u043E\u043B\u043D\u044B\u0439 \u043F\u0430\u043A\u0435\u0442",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "\u0414\u043B\u044F \u043D\u0430\u0432\u044B\u043A\u043E\u0432, MCP, \u043F\u043B\u0430\u0433\u0438\u043D\u043E\u0432 \u0438\u043B\u0438 \u0433\u043E\u043B\u043E\u0441\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u043B\u043D\u044B\u0439 ZIP.",
    "Choose package": "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0430\u043A\u0435\u0442",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "\u0412 \u044D\u0442\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 Hermes \u043D\u0435\u0442 \u0432\u044B\u0431\u043E\u0440\u0430 \u0444\u0430\u0439\u043B\u043E\u0432 \u043F\u043B\u0430\u0433\u0438\u043D\u0430. \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 CMS.",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "\u0414\u0430\u043D\u043D\u044B\u0435 ZIP \u043E\u0442\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F. \u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u0435 \u0438\u0445 \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439.",
    "Apply ZIP details and upload": "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 ZIP \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",
    Cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
    "Validate package": "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043F\u0430\u043A\u0435\u0442",
    "Validated \xB7 awaiting CMS review and publication.": "\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E \xB7 \u043E\u0436\u0438\u0434\u0430\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u0432 CMS.",
    "Published \xB7 available in the gallery.": "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E \xB7 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0432 \u0433\u0430\u043B\u0435\u0440\u0435\u0435.",
    "MCP \xB7 runs local Python": "MCP \xB7 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 Python",
    "Plugin \xB7 runs local Python": "\u041F\u043B\u0430\u0433\u0438\u043D \xB7 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 Python",
    "Recommended GPT Live voice": "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0439 \u0433\u043E\u043B\u043E\u0441 GPT Live",
    "Could not review the installation. Check connection and publication status.": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E.",
    "Could not install. Review the configuration and retry.": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435.",
    "Meet {0}": "\u0417\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E: {0}",
    "Soul and avatar required": "\u0414\u0443\u0448\u0430 \u0438 \u0430\u0432\u0430\u0442\u0430\u0440 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B",
    "Include these features": "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u0438",
    "Start with a Soul and avatar.": "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u0434\u0443\u0448\u0438 \u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430.",
    "Reviewing installation": "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438",
    "New profile:": "\u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C:",
    "Author:": "\u0410\u0432\u0442\u043E\u0440:",
    "Selected MCP and plugins execute Python on this device.": "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 MCP \u0438 \u043F\u043B\u0430\u0433\u0438\u043D\u044B \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u044E\u0442 Python \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435.",
    "Recommended voice:": "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0439 \u0433\u043E\u043B\u043E\u0441:",
    "Configure voice authentication in Hermes.": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0443\u044E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044E \u0432 Hermes.",
    "Soul and file verification": "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0434\u0443\u0448\u0438 \u0438 \u0444\u0430\u0439\u043B\u043E\u0432",
    "Install {0}": "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C {0}",
    "Review again": "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0441\u043D\u043E\u0432\u0430",
    "Already installed": "\u0423\u0436\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D",
    "Installation complete": "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430",
    "Configure a model and authentication in Hermes.": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u043C\u043E\u0434\u0435\u043B\u044C \u0438 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044E \u0432 Hermes.",
    "Your profile is ready.": "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0433\u043E\u0442\u043E\u0432.",
    "First prompt:": "\u041F\u0435\u0440\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441:",
    "Setup guide": "\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435",
    "Open bot chat": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0447\u0430\u0442 \u0431\u043E\u0442\u0430",
    "Please check": "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430",
    "Install and submit from Local \u2192 default on this device.": "\u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0439\u0442\u0435 \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0438\u0437 Local \u2192 default \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435.",
    "Could not open the local connection. Please retry.": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435.",
    "Connect to this device\u2019s default": "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C default \u044D\u0442\u043E\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430",
    Idle: "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",
    Thinking: "\u0414\u0443\u043C\u0430\u0435\u0442",
    "Recently working": "\u041D\u0435\u0434\u0430\u0432\u043D\u044F\u044F \u0440\u0430\u0431\u043E\u0442\u0430",
    "Status unavailable": "\u0421\u0442\u0430\u0442\u0443\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D",
    "{0} avatar": "\u0410\u0432\u0430\u0442\u0430\u0440 {0}",
    "Confirm installation of {0}": "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443 {0}",
    "Not auditioned": "\u041D\u0435 \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0430\u043D\u043E",
    "Existing voice settings were preserved. Check the profile\u2019s Voice settings.": "\u041F\u0440\u0435\u0436\u043D\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0433\u043E\u043B\u043E\u0441\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044F.",
    "Recommended voice {0} included. Check voice authentication.": "\u0412\u043A\u043B\u044E\u0447\u0451\u043D \u0433\u043E\u043B\u043E\u0441 {0}. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0443\u044E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044E.",
    "Voice settings were not included.": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0433\u043E\u043B\u043E\u0441\u0430 \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u044B.",
    "Validation issue at {0}. Check the package format and required fields.": "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0432 {0}. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442 \u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F.",
    Avatar: "\u0410\u0432\u0430\u0442\u0430\u0440",
    "Revision {0}": "\u0420\u0435\u0434\u0430\u043A\u0446\u0438\u044F {0}",
    "{0} bytes": "{0} \u0431\u0430\u0439\u0442"
  },
  fr: {
    "Could not load installed bots. Please retry.": "Impossible de charger les bots install\xE9s. R\xE9essayez.",
    "Could not load the catalog. Installed bots are still available.": "Impossible de charger le catalogue. Les bots install\xE9s restent disponibles.",
    "This bot version is no longer published.": "Cette version du bot n\u2019est pas publi\xE9e.",
    "Refresh to check installation status.": "Actualisez pour v\xE9rifier l\u2019installation.",
    "Find your next AI colleague.": "Trouvez votre prochain coll\xE8gue IA.",
    Refresh: "Actualiser",
    "MyBots menu": "Menu MyBots",
    "Browse bots": "Explorer les bots",
    "Installed bots": "Bots install\xE9s",
    "My submissions": "Mes contributions",
    "Connection settings": "Param\xE8tres de connexion",
    "Showing the saved catalog while offline. Reconnect to install.": "Catalogue enregistr\xE9 affich\xE9 hors ligne. Reconnectez-vous pour installer.",
    "Last checked:": "Derni\xE8re v\xE9rification :",
    "Search bots": "Rechercher des bots",
    "Search by name or role": "Rechercher par nom ou r\xF4le",
    "Bot category": "Cat\xE9gorie du bot",
    "All categories": "Toutes les cat\xE9gories",
    Business: "Travail",
    Learning: "Apprentissage",
    "Daily life": "Quotidien",
    "Loading colleagues": "Chargement des coll\xE8gues",
    "{0} colleagues": "{0} coll\xE8gues",
    Soul: "Soul",
    Skills: "Comp\xE9tences",
    Plugins: "Extensions",
    Voice: "Voix",
    Meet: "D\xE9couvrir",
    "Motion preview": "Aper\xE7u anim\xE9",
    "No matching bots": "Aucun bot correspondant",
    "Try another search or category.": "Essayez une autre recherche ou cat\xE9gorie.",
    "No bots installed yet": "Aucun bot install\xE9",
    "Find your first colleague in Browse bots.": "Trouvez votre premier coll\xE8gue dans le catalogue.",
    "Check version": "V\xE9rifier la version",
    Installed: "Install\xE9",
    "Other version": "Autre version",
    "Check files": "V\xE9rifier les fichiers",
    "Open chat": "Ouvrir la discussion",
    "Loading submissions": "Chargement des contributions",
    "Could not load connection settings. Check the server origin.": "Impossible de charger les param\xE8tres. V\xE9rifiez l\u2019adresse du serveur.",
    "Could not connect. Check key expiry, permissions and storage.": "Connexion impossible. V\xE9rifiez la validit\xE9, les droits et le stockage de la cl\xE9.",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "Aucune cl\xE9 pour parcourir et installer. Une cl\xE9 API cr\xE9ateur est requise pour soumettre un bot.",
    Server: "Serveur",
    Connection: "Connexion",
    Connected: "Connect\xE9",
    Disconnected: "D\xE9connect\xE9",
    "Environment \xB7 provider": "Environnement \xB7 fournisseur",
    Permissions: "Autorisations",
    Expires: "Expiration",
    "Key provider": "Stockage de la cl\xE9",
    "bws item ID (recommended)": "ID d\u2019\xE9l\xE9ment bws (recommand\xE9)",
    "OS secure storage": "Stockage s\xE9curis\xE9 du syst\xE8me",
    "This session only": "Cette session uniquement",
    "bws item ID": "ID d\u2019\xE9l\xE9ment bws",
    "MyBots API key": "Cl\xE9 API MyBots",
    "Session keys stay in backend memory and are cleared on restart.": "Les cl\xE9s de session restent en m\xE9moire et sont effac\xE9es au red\xE9marrage.",
    "Secure OS storage is unavailable. Choose bws or session storage.": "Stockage s\xE9curis\xE9 indisponible. Choisissez bws ou la session.",
    Connect: "Connecter",
    Disconnect: "D\xE9connecter",
    "Refresh connection": "Actualiser la connexion",
    Draft: "Brouillon",
    Validated: "Valid\xE9",
    Published: "Publi\xE9",
    Unpublished: "Non publi\xE9",
    "Bot ID": "ID du bot",
    Version: "Version",
    Name: "Nom",
    "English name": "Nom anglais",
    Role: "R\xF4le",
    Personality: "Personnalit\xE9",
    Description: "Description",
    "First prompt": "Premi\xE8re question",
    "Could not load connection details.": "Impossible de charger la connexion.",
    "Could not load submissions. Check your key connection.": "Impossible de charger les contributions. V\xE9rifiez la cl\xE9.",
    "The screen or connection changed.": "L\u2019\xE9cran ou la connexion a chang\xE9.",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "\xC9chec de l\u2019enregistrement ou validation. V\xE9rifiez les donn\xE9es, la cl\xE9 et le serveur. R\xE9essayez ou actualisez pour confirmer.",
    "Select MyBots package": "Choisir un paquet MyBots",
    "ZIP ID or version differs. Create a new draft.": "L\u2019ID ou la version ZIP diff\xE8re. Cr\xE9ez un brouillon.",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "Enregistrez le bot et validez son paquet. Un op\xE9rateur examine la publication dans le CMS.",
    "Connect a creator API key in Connection settings first.": "Connectez d\u2019abord une cl\xE9 API cr\xE9ateur dans les param\xE8tres.",
    "Submit a bot": "Soumettre un bot",
    "Refresh submissions": "Actualiser les contributions",
    "No submissions yet": "Aucune contribution",
    "Start your first draft with a Soul and avatar.": "Cr\xE9ez un brouillon avec un Soul et un avatar.",
    "Submission details": "D\xE9tails de la contribution",
    "New draft": "Nouveau brouillon",
    Category: "Cat\xE9gorie",
    "Save details": "Enregistrer les d\xE9tails",
    "Save draft": "Enregistrer le brouillon",
    "Soul and avatar": "Soul et avatar",
    "Select bot avatar": "Choisir l\u2019avatar du bot",
    "Choose avatar": "Choisir un avatar",
    "Avatar selected": "Avatar s\xE9lectionn\xE9",
    "PNG/JPEG \xB7 square, 128\u20132048px": "PNG/JPEG \xB7 carr\xE9, 128\u20132048px",
    "Save Soul and avatar package": "Enregistrer le paquet Soul et avatar",
    "Full package": "Paquet complet",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "Choisissez un ZIP complet pour les comp\xE9tences, MCP, extensions ou voix.",
    "Choose package": "Choisir un paquet",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "Cette version de Hermes n\u2019a pas de s\xE9lecteur de fichiers. Utilisez le CMS.",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "Les d\xE9tails du ZIP diff\xE8rent. Appliquez-les avant l\u2019envoi.",
    "Apply ZIP details and upload": "Appliquer le ZIP et envoyer",
    Cancel: "Annuler",
    "Validate package": "Valider le paquet",
    "Validated \xB7 awaiting CMS review and publication.": "Valid\xE9 \xB7 en attente de publication dans le CMS.",
    "Published \xB7 available in the gallery.": "Publi\xE9 \xB7 disponible dans la galerie.",
    "MCP \xB7 runs local Python": "MCP \xB7 ex\xE9cute Python localement",
    "Plugin \xB7 runs local Python": "Extension \xB7 ex\xE9cute Python localement",
    "Recommended GPT Live voice": "Voix GPT Live recommand\xE9e",
    "Could not review the installation. Check connection and publication status.": "Impossible de v\xE9rifier l\u2019installation. V\xE9rifiez la connexion et la publication.",
    "Could not install. Review the configuration and retry.": "Installation impossible. V\xE9rifiez la configuration et r\xE9essayez.",
    "Meet {0}": "Rencontrer {0}",
    "Soul and avatar required": "Soul et avatar requis",
    "Include these features": "Inclure ces fonctions",
    "Start with a Soul and avatar.": "Commencez avec un Soul et un avatar.",
    "Reviewing installation": "V\xE9rification de l\u2019installation",
    "New profile:": "Nouveau profil :",
    "Author:": "Auteur :",
    "Selected MCP and plugins execute Python on this device.": "Les MCP et extensions s\xE9lectionn\xE9s ex\xE9cutent Python sur cet appareil.",
    "Recommended voice:": "Voix recommand\xE9e :",
    "Configure voice authentication in Hermes.": "Configurez l\u2019authentification vocale dans Hermes.",
    "Soul and file verification": "Soul et v\xE9rification des fichiers",
    "Install {0}": "Installer {0}",
    "Review again": "V\xE9rifier \xE0 nouveau",
    "Already installed": "D\xE9j\xE0 install\xE9",
    "Installation complete": "Installation termin\xE9e",
    "Configure a model and authentication in Hermes.": "Configurez le mod\xE8le et l\u2019authentification dans Hermes.",
    "Your profile is ready.": "Votre profil est pr\xEAt.",
    "First prompt:": "Premi\xE8re question :",
    "Setup guide": "Guide de configuration",
    "Open bot chat": "Ouvrir la discussion du bot",
    "Please check": "V\xE9rification n\xE9cessaire",
    "Install and submit from Local \u2192 default on this device.": "Installez et soumettez depuis Local \u2192 default sur cet appareil.",
    "Could not open the local connection. Please retry.": "Impossible d\u2019ouvrir la connexion locale. R\xE9essayez.",
    "Connect to this device\u2019s default": "Connecter le default de cet appareil",
    Idle: "En attente",
    Thinking: "R\xE9flexion",
    "Recently working": "Activit\xE9 r\xE9cente",
    "Status unavailable": "\xC9tat indisponible",
    "{0} avatar": "Avatar de {0}",
    "Confirm installation of {0}": "Confirmer l\u2019installation de {0}",
    "Not auditioned": "Non \xE9cout\xE9",
    "Existing voice settings were preserved. Check the profile\u2019s Voice settings.": "Les r\xE9glages vocaux existants sont conserv\xE9s. V\xE9rifiez le profil.",
    "Recommended voice {0} included. Check voice authentication.": "Voix {0} incluse. V\xE9rifiez l\u2019authentification vocale.",
    "Voice settings were not included.": "R\xE9glages vocaux non inclus.",
    "Validation issue at {0}. Check the package format and required fields.": "Erreur de validation \xE0 {0}. V\xE9rifiez le format et les champs requis.",
    Avatar: "Avatar",
    "Revision {0}": "R\xE9vision {0}",
    "{0} bytes": "{0} octets"
  },
  de: {
    "Could not load installed bots. Please retry.": "Installierte Bots konnten nicht geladen werden. Bitte erneut versuchen.",
    "Could not load the catalog. Installed bots are still available.": "Katalog konnte nicht geladen werden. Installierte Bots bleiben verf\xFCgbar.",
    "This bot version is no longer published.": "Diese Bot-Version ist nicht ver\xF6ffentlicht.",
    "Refresh to check installation status.": "Zum Pr\xFCfen des Installationsstatus aktualisieren.",
    "Find your next AI colleague.": "Finde deinen n\xE4chsten KI-Kollegen.",
    Refresh: "Aktualisieren",
    "MyBots menu": "MyBots-Men\xFC",
    "Browse bots": "Bots entdecken",
    "Installed bots": "Installierte Bots",
    "My submissions": "Meine Einreichungen",
    "Connection settings": "Verbindungseinstellungen",
    "Showing the saved catalog while offline. Reconnect to install.": "Offline wird der gespeicherte Katalog angezeigt. Zum Installieren erneut verbinden.",
    "Last checked:": "Zuletzt gepr\xFCft:",
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
    Skills: "F\xE4higkeiten",
    Plugins: "Plugins",
    Voice: "Stimme",
    Meet: "Kennenlernen",
    "Motion preview": "Bewegungsvorschau",
    "No matching bots": "Keine passenden Bots",
    "Try another search or category.": "Versuche eine andere Suche oder Kategorie.",
    "No bots installed yet": "Noch keine Bots installiert",
    "Find your first colleague in Browse bots.": "Finde deinen ersten Kollegen unter \u201EBots entdecken\u201C.",
    "Check version": "Version pr\xFCfen",
    Installed: "Installiert",
    "Other version": "Andere Version",
    "Check files": "Dateien pr\xFCfen",
    "Open chat": "Chat \xF6ffnen",
    "Loading submissions": "Einreichungen werden geladen",
    "Could not load connection settings. Check the server origin.": "Verbindungseinstellungen konnten nicht geladen werden. Serveradresse pr\xFCfen.",
    "Could not connect. Check key expiry, permissions and storage.": "Verbindung fehlgeschlagen. Schl\xFCsselg\xFCltigkeit, Rechte und Speicher pr\xFCfen.",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "Suchen und Installieren geht ohne Schl\xFCssel. Zum Einreichen ist ein Ersteller-API-Schl\xFCssel n\xF6tig.",
    Server: "Server",
    Connection: "Verbindung",
    Connected: "Verbunden",
    Disconnected: "Nicht verbunden",
    "Environment \xB7 provider": "Umgebung \xB7 Anbieter",
    Permissions: "Berechtigungen",
    Expires: "L\xE4uft ab",
    "Key provider": "Schl\xFCsselanbieter",
    "bws item ID (recommended)": "bws-Eintrags-ID (empfohlen)",
    "OS secure storage": "Sicherer Systemspeicher",
    "This session only": "Nur diese Sitzung",
    "bws item ID": "bws-Eintrags-ID",
    "MyBots API key": "MyBots-API-Schl\xFCssel",
    "Session keys stay in backend memory and are cleared on restart.": "Sitzungsschl\xFCssel bleiben im Backend-Arbeitsspeicher und werden beim Neustart gel\xF6scht.",
    "Secure OS storage is unavailable. Choose bws or session storage.": "Sicherer Systemspeicher nicht verf\xFCgbar. W\xE4hle bws oder Sitzungsspeicher.",
    Connect: "Verbinden",
    Disconnect: "Trennen",
    "Refresh connection": "Verbindung aktualisieren",
    Draft: "Entwurf",
    Validated: "Gepr\xFCft",
    Published: "Ver\xF6ffentlicht",
    Unpublished: "Nicht ver\xF6ffentlicht",
    "Bot ID": "Bot-ID",
    Version: "Version",
    Name: "Name",
    "English name": "Englischer Name",
    Role: "Rolle",
    Personality: "Pers\xF6nlichkeit",
    Description: "Beschreibung",
    "First prompt": "Erste Frage",
    "Could not load connection details.": "Verbindungsdaten konnten nicht geladen werden.",
    "Could not load submissions. Check your key connection.": "Einreichungen konnten nicht geladen werden. Schl\xFCsselverbindung pr\xFCfen.",
    "The screen or connection changed.": "Ansicht oder Verbindung wurde ge\xE4ndert.",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "Speichern oder Pr\xFCfen fehlgeschlagen. Eingaben, Schl\xFCssel und Server pr\xFCfen. Gleichen Inhalt erneut senden oder Ergebnis aktualisieren.",
    "Select MyBots package": "MyBots-Paket w\xE4hlen",
    "ZIP ID or version differs. Create a new draft.": "ZIP-ID oder Version weicht ab. Neuen Entwurf erstellen.",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "Bot speichern und Paket pr\xFCfen. Die Ver\xF6ffentlichung wird im CMS gepr\xFCft.",
    "Connect a creator API key in Connection settings first.": "Zuerst einen Ersteller-API-Schl\xFCssel in den Verbindungseinstellungen verbinden.",
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
    "Select bot avatar": "Bot-Avatar w\xE4hlen",
    "Choose avatar": "Avatar w\xE4hlen",
    "Avatar selected": "Avatar gew\xE4hlt",
    "PNG/JPEG \xB7 square, 128\u20132048px": "PNG/JPEG \xB7 quadratisch, 128\u20132048px",
    "Save Soul and avatar package": "Soul- und Avatar-Paket speichern",
    "Full package": "Vollst\xE4ndiges Paket",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "F\xFCr F\xE4higkeiten, MCP, Plugins oder Stimme ein vollst\xE4ndiges ZIP w\xE4hlen.",
    "Choose package": "Paket w\xE4hlen",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "Diese Hermes-Version hat keine Plugin-Dateiauswahl. \xDCber das CMS hochladen.",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "ZIP-Details weichen vom Entwurf ab. Vor dem Hochladen \xFCbernehmen.",
    "Apply ZIP details and upload": "ZIP-Details \xFCbernehmen und hochladen",
    Cancel: "Abbrechen",
    "Validate package": "Paket pr\xFCfen",
    "Validated \xB7 awaiting CMS review and publication.": "Gepr\xFCft \xB7 wartet auf CMS-Pr\xFCfung und Ver\xF6ffentlichung.",
    "Published \xB7 available in the gallery.": "Ver\xF6ffentlicht \xB7 in der Galerie verf\xFCgbar.",
    "MCP \xB7 runs local Python": "MCP \xB7 f\xFChrt Python lokal aus",
    "Plugin \xB7 runs local Python": "Plugin \xB7 f\xFChrt Python lokal aus",
    "Recommended GPT Live voice": "Empfohlene GPT-Live-Stimme",
    "Could not review the installation. Check connection and publication status.": "Installation konnte nicht gepr\xFCft werden. Verbindung und Ver\xF6ffentlichung pr\xFCfen.",
    "Could not install. Review the configuration and retry.": "Installation fehlgeschlagen. Konfiguration pr\xFCfen und erneut versuchen.",
    "Meet {0}": "{0} kennenlernen",
    "Soul and avatar required": "Soul und Avatar erforderlich",
    "Include these features": "Diese Funktionen einschlie\xDFen",
    "Start with a Soul and avatar.": "Beginne mit Soul und Avatar.",
    "Reviewing installation": "Installation wird gepr\xFCft",
    "New profile:": "Neues Profil:",
    "Author:": "Autor:",
    "Selected MCP and plugins execute Python on this device.": "Gew\xE4hlte MCP und Plugins f\xFChren Python auf diesem Ger\xE4t aus.",
    "Recommended voice:": "Empfohlene Stimme:",
    "Configure voice authentication in Hermes.": "Sprachauthentifizierung in Hermes einrichten.",
    "Soul and file verification": "Soul- und Dateipr\xFCfung",
    "Install {0}": "{0} installieren",
    "Review again": "Erneut pr\xFCfen",
    "Already installed": "Bereits installiert",
    "Installation complete": "Installation abgeschlossen",
    "Configure a model and authentication in Hermes.": "Modell und Authentifizierung in Hermes einrichten.",
    "Your profile is ready.": "Dein Profil ist bereit.",
    "First prompt:": "Erste Frage:",
    "Setup guide": "Einrichtungsanleitung",
    "Open bot chat": "Bot-Chat \xF6ffnen",
    "Please check": "Bitte pr\xFCfen",
    "Install and submit from Local \u2192 default on this device.": "Auf diesem Ger\xE4t \xFCber Local \u2192 default installieren und einreichen.",
    "Could not open the local connection. Please retry.": "Lokale Verbindung konnte nicht ge\xF6ffnet werden. Erneut versuchen.",
    "Connect to this device\u2019s default": "Mit default dieses Ger\xE4ts verbinden",
    Idle: "Bereit",
    Thinking: "Denkt nach",
    "Recently working": "K\xFCrzlich aktiv",
    "Status unavailable": "Status nicht verf\xFCgbar",
    "{0} avatar": "Avatar von {0}",
    "Confirm installation of {0}": "Installation von {0} best\xE4tigen",
    "Not auditioned": "Noch nicht angeh\xF6rt",
    "Existing voice settings were preserved. Check the profile\u2019s Voice settings.": "Vorhandene Stimmeinstellungen wurden beibehalten. Voice-Einstellungen des Profils pr\xFCfen.",
    "Recommended voice {0} included. Check voice authentication.": "Empfohlene Stimme {0} enthalten. Sprachauthentifizierung pr\xFCfen.",
    "Voice settings were not included.": "Stimmeinstellungen wurden nicht eingeschlossen.",
    "Validation issue at {0}. Check the package format and required fields.": "Pr\xFCfproblem bei {0}. Paketformat und Pflichtfelder pr\xFCfen.",
    Avatar: "Avatar",
    "Revision {0}": "Revision {0}",
    "{0} bytes": "{0} Bytes"
  },
  es: {
    "Could not load installed bots. Please retry.": "No se pudieron cargar los bots instalados. Int\xE9ntalo de nuevo.",
    "Could not load the catalog. Installed bots are still available.": "No se pudo cargar el cat\xE1logo. Los bots instalados siguen disponibles.",
    "This bot version is no longer published.": "Esta versi\xF3n del bot no est\xE1 publicada.",
    "Refresh to check installation status.": "Actualiza para comprobar la instalaci\xF3n.",
    "Find your next AI colleague.": "Encuentra a tu pr\xF3ximo colega de IA.",
    Refresh: "Actualizar",
    "MyBots menu": "Men\xFA de MyBots",
    "Browse bots": "Explorar bots",
    "Installed bots": "Bots instalados",
    "My submissions": "Mis env\xEDos",
    "Connection settings": "Ajustes de conexi\xF3n",
    "Showing the saved catalog while offline. Reconnect to install.": "Se muestra el cat\xE1logo guardado sin conexi\xF3n. Vuelve a conectarte para instalar.",
    "Last checked:": "\xDAltima comprobaci\xF3n:",
    "Search bots": "Buscar bots",
    "Search by name or role": "Buscar por nombre o funci\xF3n",
    "Bot category": "Categor\xEDa del bot",
    "All categories": "Todas las categor\xEDas",
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
    "Try another search or category.": "Prueba otra b\xFAsqueda o categor\xEDa.",
    "No bots installed yet": "Todav\xEDa no hay bots instalados",
    "Find your first colleague in Browse bots.": "Encuentra a tu primer colega en Explorar bots.",
    "Check version": "Comprobar versi\xF3n",
    Installed: "Instalado",
    "Other version": "Otra versi\xF3n",
    "Check files": "Comprobar archivos",
    "Open chat": "Abrir chat",
    "Loading submissions": "Cargando env\xEDos",
    "Could not load connection settings. Check the server origin.": "No se pudieron cargar los ajustes. Comprueba la direcci\xF3n del servidor.",
    "Could not connect. Check key expiry, permissions and storage.": "No se pudo conectar. Comprueba la vigencia, permisos y almacenamiento de la clave.",
    "Browsing and installation need no key. Submitting bots requires a creator API key.": "Explorar e instalar no requiere clave. Para enviar bots necesitas una clave API de creador.",
    Server: "Servidor",
    Connection: "Conexi\xF3n",
    Connected: "Conectado",
    Disconnected: "Desconectado",
    "Environment \xB7 provider": "Entorno \xB7 proveedor",
    Permissions: "Permisos",
    Expires: "Caduca",
    "Key provider": "Proveedor de claves",
    "bws item ID (recommended)": "ID de elemento bws (recomendado)",
    "OS secure storage": "Almacenamiento seguro del sistema",
    "This session only": "Solo esta sesi\xF3n",
    "bws item ID": "ID de elemento bws",
    "MyBots API key": "Clave API de MyBots",
    "Session keys stay in backend memory and are cleared on restart.": "Las claves de sesi\xF3n se guardan en memoria y se borran al reiniciar.",
    "Secure OS storage is unavailable. Choose bws or session storage.": "El almacenamiento seguro no est\xE1 disponible. Elige bws o la sesi\xF3n.",
    Connect: "Conectar",
    Disconnect: "Desconectar",
    "Refresh connection": "Actualizar conexi\xF3n",
    Draft: "Borrador",
    Validated: "Validado",
    Published: "Publicado",
    Unpublished: "No publicado",
    "Bot ID": "ID del bot",
    Version: "Versi\xF3n",
    Name: "Nombre",
    "English name": "Nombre en ingl\xE9s",
    Role: "Funci\xF3n",
    Personality: "Personalidad",
    Description: "Descripci\xF3n",
    "First prompt": "Primera pregunta",
    "Could not load connection details.": "No se pudieron cargar los datos de conexi\xF3n.",
    "Could not load submissions. Check your key connection.": "No se pudieron cargar los env\xEDos. Comprueba la clave.",
    "The screen or connection changed.": "La pantalla o conexi\xF3n cambi\xF3.",
    "Could not save or validate. Check inputs, key and server. Retry the same content or refresh to confirm the result.": "No se pudo guardar o validar. Revisa los datos, la clave y el servidor. Reintenta el mismo contenido o actualiza el resultado.",
    "Select MyBots package": "Seleccionar paquete MyBots",
    "ZIP ID or version differs. Create a new draft.": "El ID o versi\xF3n del ZIP es distinto. Crea otro borrador.",
    "Save your bot and validate its package. An operator reviews publication in the CMS.": "Guarda el bot y valida su paquete. Un operador revisa la publicaci\xF3n en el CMS.",
    "Connect a creator API key in Connection settings first.": "Conecta primero una clave API de creador en los ajustes.",
    "Submit a bot": "Enviar un bot",
    "Refresh submissions": "Actualizar env\xEDos",
    "No submissions yet": "Todav\xEDa no hay env\xEDos",
    "Start your first draft with a Soul and avatar.": "Crea tu primer borrador con Soul y avatar.",
    "Submission details": "Detalles del env\xEDo",
    "New draft": "Nuevo borrador",
    Category: "Categor\xEDa",
    "Save details": "Guardar datos",
    "Save draft": "Guardar borrador",
    "Soul and avatar": "Soul y avatar",
    "Select bot avatar": "Seleccionar avatar del bot",
    "Choose avatar": "Elegir avatar",
    "Avatar selected": "Avatar seleccionado",
    "PNG/JPEG \xB7 square, 128\u20132048px": "PNG/JPEG \xB7 cuadrado, 128\u20132048px",
    "Save Soul and avatar package": "Guardar paquete de Soul y avatar",
    "Full package": "Paquete completo",
    "Choose a full ZIP for bots with skills, MCP, plugins or voice.": "Elige un ZIP completo para bots con habilidades, MCP, complementos o voz.",
    "Choose package": "Elegir paquete",
    "This Hermes version has no plugin file picker. Upload through the CMS.": "Esta versi\xF3n de Hermes no permite elegir archivos. S\xFAbelos mediante el CMS.",
    "ZIP details differ from the draft. Apply the ZIP details before uploading.": "Los datos del ZIP difieren. Apl\xEDcalos antes de subirlo.",
    "Apply ZIP details and upload": "Aplicar datos del ZIP y subir",
    Cancel: "Cancelar",
    "Validate package": "Validar paquete",
    "Validated \xB7 awaiting CMS review and publication.": "Validado \xB7 pendiente de revisi\xF3n y publicaci\xF3n en CMS.",
    "Published \xB7 available in the gallery.": "Publicado \xB7 disponible en la galer\xEDa.",
    "MCP \xB7 runs local Python": "MCP \xB7 ejecuta Python local",
    "Plugin \xB7 runs local Python": "Complemento \xB7 ejecuta Python local",
    "Recommended GPT Live voice": "Voz GPT Live recomendada",
    "Could not review the installation. Check connection and publication status.": "No se pudo revisar la instalaci\xF3n. Comprueba la conexi\xF3n y publicaci\xF3n.",
    "Could not install. Review the configuration and retry.": "No se pudo instalar. Revisa la configuraci\xF3n y reintenta.",
    "Meet {0}": "Conocer a {0}",
    "Soul and avatar required": "Soul y avatar obligatorios",
    "Include these features": "Incluir estas funciones",
    "Start with a Soul and avatar.": "Empieza con Soul y avatar.",
    "Reviewing installation": "Revisando instalaci\xF3n",
    "New profile:": "Nuevo perfil:",
    "Author:": "Autor:",
    "Selected MCP and plugins execute Python on this device.": "Los MCP y complementos elegidos ejecutan Python en este dispositivo.",
    "Recommended voice:": "Voz recomendada:",
    "Configure voice authentication in Hermes.": "Configura la autenticaci\xF3n de voz en Hermes.",
    "Soul and file verification": "Soul y verificaci\xF3n de archivos",
    "Install {0}": "Instalar {0}",
    "Review again": "Revisar de nuevo",
    "Already installed": "Ya est\xE1 instalado",
    "Installation complete": "Instalaci\xF3n completada",
    "Configure a model and authentication in Hermes.": "Configura el modelo y la autenticaci\xF3n en Hermes.",
    "Your profile is ready.": "Tu perfil est\xE1 listo.",
    "First prompt:": "Primera pregunta:",
    "Setup guide": "Gu\xEDa de configuraci\xF3n",
    "Open bot chat": "Abrir chat del bot",
    "Please check": "Comprueba los datos",
    "Install and submit from Local \u2192 default on this device.": "Instala y env\xEDa desde Local \u2192 default en este dispositivo.",
    "Could not open the local connection. Please retry.": "No se pudo abrir la conexi\xF3n local. Int\xE9ntalo de nuevo.",
    "Connect to this device\u2019s default": "Conectar al default de este dispositivo",
    Idle: "En espera",
    Thinking: "Pensando",
    "Recently working": "Actividad reciente",
    "Status unavailable": "Estado no disponible",
    "{0} avatar": "Avatar de {0}",
    "Confirm installation of {0}": "Confirmar instalaci\xF3n de {0}",
    "Not auditioned": "Sin prueba de escucha",
    "Existing voice settings were preserved. Check the profile\u2019s Voice settings.": "Se conservaron los ajustes de voz existentes. Comprueba los del perfil.",
    "Recommended voice {0} included. Check voice authentication.": "Se incluy\xF3 la voz {0}. Comprueba la autenticaci\xF3n de voz.",
    "Voice settings were not included.": "No se incluyeron ajustes de voz.",
    "Validation issue at {0}. Check the package format and required fields.": "Problema de validaci\xF3n en {0}. Revisa el formato y campos obligatorios.",
    Avatar: "Avatar",
    "Revision {0}": "Revisi\xF3n {0}",
    "{0} bytes": "{0} bytes"
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

// packages/contracts/src/index.ts
var BOT_ID = /^[a-z][a-z0-9-]{0,39}$/;
var VERSION = /^\d+\.\d+\.\d+$/;
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
  install(token) {
    return this.ctx.rest("/install", { method: "POST", body: { token }, timeoutMs: 9e4 });
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
    /* @__PURE__ */ jsx("p", { children: t("Install and submit from Local \u2192 default on this device.") }),
    /* @__PURE__ */ jsx(Button, { variant: "secondary", onClick: async () => {
      try {
        await host.ensureAgent("local", "default");
      } catch {
        setError("Could not open the local connection. Please retry.");
      }
    }, children: t("Connect to this device\u2019s default") }),
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
        " \xB7 ",
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
            " \xB7 ",
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
              /* @__PURE__ */ jsx2("span", { className: "mb-muted", children: avatar ? t("Avatar selected") : t("PNG/JPEG \xB7 square, 128\u20132048px") })
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
        draft?.state === "validated" && /* @__PURE__ */ jsx2("p", { role: "status", children: t("Validated \xB7 awaiting CMS review and publication.") }),
        draft?.state === "published" && /* @__PURE__ */ jsx2("p", { role: "status", children: t("Published \xB7 available in the gallery.") })
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
          state.reason && " \xB7 " + t("Could not connect. Check key expiry, permissions and storage.")
        ] }),
        /* @__PURE__ */ jsx3("dt", { children: t("Environment \xB7 provider") }),
        /* @__PURE__ */ jsxs3("dd", { children: [
          state.environment || "\u2014",
          " \xB7 ",
          state.provider || "\u2014"
        ] }),
        /* @__PURE__ */ jsx3("dt", { children: t("Permissions") }),
        /* @__PURE__ */ jsx3("dd", { children: state.scopes.join(", ") || "\u2014" }),
        /* @__PURE__ */ jsx3("dt", { children: t("Expires") }),
        /* @__PURE__ */ jsx3("dd", { children: state.expiresAt ? new Date(state.expiresAt).toLocaleString(locale === "zh-hant" ? "zh-TW" : locale) : "\u2014" })
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
import { useCallback, useEffect as useEffect7, useRef as useRef5, useState as useState6 } from "react";
import { host as host4 } from "@hermes/plugin-sdk";

// packages/hermes-plugin/desktop/install-confirmation.tsx
import { useEffect as useEffect5, useRef as useRef4, useState as useState4 } from "react";
import { host as host2 } from "@hermes/plugin-sdk";

// packages/hermes-plugin/desktop/install-state.ts
var initialSelection = (bot) => [...bot.optional];
var normalizeSelection = (bot, selected) => bot.optional.filter((c) => selected.includes(c));
function voiceResultMessage(result, t = (key, ...args) => key.replace(/\{(\d+)\}/g, (_, n) => String(args[Number(n)] ?? ""))) {
  if (result.voiceStatus === "existing-settings-preserved") return t("Existing voice settings were preserved. Check the profile\u2019s Voice settings.");
  return result.voiceConfigured ? t("Recommended voice {0} included. Check voice authentication.", result.voice?.voice ?? "") : t("Voice settings were not included.");
}
function profileDestination(profile) {
  if (!BOT_ID.test(profile)) throw Error("Invalid profile");
  return { route: { connectionId: "local", mode: "local", profile, targetProfile: profile }, options: { workspaceMode: "bots", workspaceOwnerKey: `bot:local::${profile}` } };
}

// packages/hermes-plugin/desktop/bot-avatar.tsx
import { useEffect as useEffect4, useRef as useRef3 } from "react";
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
  svg.setAttribute("aria-label", `${calibration.name || "\uBD07"} \uC544\uBC14\uD0C0`);
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
import { jsx as jsx4 } from "react/jsx-runtime";
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
  const ref = useRef3(null), scene = useRef3(null);
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
  return animate ? /* @__PURE__ */ jsx4("svg", { ref, width: size, height: size, className: "mb-avatar" }) : /* @__PURE__ */ jsx4("img", { src, alt: accessibleLabel, width: size, height: size, className: "mb-avatar" });
}

// packages/hermes-plugin/desktop/install-confirmation.tsx
import { Fragment as Fragment3, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var labels = { skills: "Skills", mcp: "MCP \xB7 runs local Python", plugin: "Plugin \xB7 runs local Python", voice: "Recommended GPT Live voice" };
function InstallConfirmation({ ctx, bot, onClose, onInstalled, mood = "idle" }) {
  const { t, locale, dir } = useMyBots();
  const [selection, setSelection] = useState4(() => initialSelection(bot)), [review, setReview] = useState4(null), [result, setResult] = useState4(null), [busy, setBusy] = useState4(false), [error, setError] = useState4(""), [retry, setRetry] = useState4(0);
  const opener = useRef4(document.activeElement);
  const fence = useRef4(new ReviewFence()), posting = useRef4(false), local = useLocal();
  const identity = bot.id + "@" + bot.version;
  const owner = useRef4(identity);
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
    if (!local) {
      setBusy(false);
      return;
    }
    setBusy(true);
    new MarketApi(ctx).review(bot.id, bot.version, normalizeSelection(bot, selection)).then((value) => {
      if (fence.current.isCurrent(ticket) && isLocal()) setReview(value);
    }, () => {
      if (fence.current.isCurrent(ticket)) setError("Could not review the installation. Check connection and publication status.");
    }).finally(() => {
      if (fence.current.isCurrent(ticket)) setBusy(false);
    });
    return () => fence.current.invalidate();
  }, [ctx, identity, selection, local, retry]);
  async function install() {
    if (posting.current || !review || !isLocal()) return;
    posting.current = true;
    const ticket = fence.current.begin();
    const expected = owner.current;
    setBusy(true);
    setError("");
    try {
      const value = await new MarketApi(ctx).install(review.token);
      if (fence.current.isCurrent(ticket) && isLocal() && owner.current === expected) {
        setResult(value);
        setReview(null);
        onInstalled(value);
      }
    } catch {
      if (fence.current.isCurrent(ticket)) {
        setError("Could not install. Review the configuration and retry.");
        setReview(null);
      }
    } finally {
      posting.current = false;
      if (fence.current.isCurrent(ticket)) setBusy(false);
    }
  }
  return /* @__PURE__ */ jsx5(Dialog, { open: true, onOpenChange: (open) => {
    if (!open) onClose();
  }, children: /* @__PURE__ */ jsxs4(DialogContent, { "aria-label": t("Confirm installation of {0}", bot.name), "aria-busy": busy, lang: locale, dir, className: "mb-install", onCloseAutoFocus: (event) => {
    if (opener.current?.isConnected) {
      event.preventDefault();
      opener.current.focus();
    }
  }, children: [
    /* @__PURE__ */ jsxs4(DialogHeader, { children: [
      /* @__PURE__ */ jsx5(DialogTitle, { children: t("Meet {0}", bot.name) }),
      /* @__PURE__ */ jsxs4(DialogDescription, { children: [
        bot.role,
        " \xB7 ",
        bot.personality
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "mb-install-hero", children: [
      review && /* @__PURE__ */ jsx5(BotAvatar, { bot: bot.id, name: bot.name, src: review.avatar, sha256: review.manifest.files.find((f) => f.component === "avatar")?.sha256, mood, size: 96 }),
      /* @__PURE__ */ jsxs4("div", { children: [
        /* @__PURE__ */ jsx5("p", { children: bot.description }),
        /* @__PURE__ */ jsxs4("div", { className: "mb-badges", children: [
          /* @__PURE__ */ jsxs4(Badge, { variant: "muted", children: [
            "v",
            bot.version
          ] }),
          /* @__PURE__ */ jsx5(Badge, { variant: "muted", children: t("Soul and avatar required") })
        ] })
      ] })
    ] }),
    !local && /* @__PURE__ */ jsx5(LocalNotice, {}),
    error && /* @__PURE__ */ jsx5(Failure, { message: t(error) }),
    !result && /* @__PURE__ */ jsxs4("fieldset", { disabled: busy && posting.current, className: "mb-options", children: [
      /* @__PURE__ */ jsx5("legend", { children: t("Include these features") }),
      bot.optional.length === 0 && /* @__PURE__ */ jsx5("p", { className: "mb-muted", children: t("Start with a Soul and avatar.") }),
      bot.optional.map((c) => /* @__PURE__ */ jsxs4("label", { className: "mb-option", children: [
        /* @__PURE__ */ jsx5(Checkbox, { "aria-label": t(labels[c]), checked: selection.includes(c), onCheckedChange: (checked) => {
          fence.current.invalidate();
          setReview(null);
          setSelection((s) => normalizeSelection(bot, checked === true ? [...s, c] : s.filter((x) => x !== c)));
        } }),
        /* @__PURE__ */ jsxs4("span", { children: [
          t(labels[c]),
          c === "voice" && bot.voice && ` \xB7 ${bot.voice.id} (${t("Not auditioned")})`
        ] })
      ] }, c))
    ] }),
    busy && !posting.current && /* @__PURE__ */ jsx5(Loader, { label: t("Reviewing installation") }),
    review && /* @__PURE__ */ jsxs4(Fragment3, { children: [
      /* @__PURE__ */ jsxs4("p", { className: "mb-muted", children: [
        t("New profile:"),
        /* @__PURE__ */ jsx5("b", { children: review.manifest.id }),
        " ",
        t("Author:"),
        review.manifest.author
      ] }),
      review.components.some((c) => c === "mcp" || c === "plugin") && /* @__PURE__ */ jsx5("p", { children: t("Selected MCP and plugins execute Python on this device.") }),
      review.voice && /* @__PURE__ */ jsxs4("p", { children: [
        t("Recommended voice:"),
        review.voice.voice,
        " \xB7 ",
        review.voice.instructions,
        /* @__PURE__ */ jsx5("br", {}),
        t("Configure voice authentication in Hermes.")
      ] }),
      /* @__PURE__ */ jsxs4("details", { children: [
        /* @__PURE__ */ jsx5("summary", { children: t("Soul and file verification") }),
        /* @__PURE__ */ jsx5("pre", { className: "mb-source", children: review.soul }),
        /* @__PURE__ */ jsxs4("small", { children: [
          "SHA-256: ",
          review.digest
        ] }),
        /* @__PURE__ */ jsx5("ul", { children: review.manifest.files.filter((f) => ["soul", "avatar", ...review.components].includes(f.component)).map((f) => /* @__PURE__ */ jsxs4("li", { children: [
          f.path,
          " \xB7 ",
          t("{0} bytes", f.size)
        ] }, f.path)) })
      ] }),
      /* @__PURE__ */ jsx5(DialogFooter, { children: /* @__PURE__ */ jsx5(Button2, { disabled: busy || !local, loading: posting.current && busy, onClick: install, children: t("Install {0}", bot.name) }) })
    ] }),
    !review && !result && !busy && local && /* @__PURE__ */ jsx5(Button2, { variant: "secondary", onClick: () => setRetry((n) => n + 1), children: t("Review again") }),
    result && /* @__PURE__ */ jsxs4("section", { role: "status", className: "mb-section", children: [
      /* @__PURE__ */ jsx5("h3", { children: result.status === "already-installed" ? t("Already installed") : t("Installation complete") }),
      /* @__PURE__ */ jsx5("p", { children: result.modelSetupRequired ? t("Configure a model and authentication in Hermes.") : t("Your profile is ready.") }),
      /* @__PURE__ */ jsx5("p", { children: voiceResultMessage(result, t) }),
      /* @__PURE__ */ jsxs4("p", { children: [
        t("First prompt:"),
        bot.firstPrompt
      ] }),
      bot.external.map((e) => /* @__PURE__ */ jsxs4("p", { children: [
        /* @__PURE__ */ jsxs4("a", { href: e.guide, target: "_blank", rel: "noopener noreferrer", children: [
          e.label,
          " \xB7 ",
          t("Setup guide")
        ] }),
        " \xB7 ",
        e.requirement
      ] }, e.service)),
      /* @__PURE__ */ jsx5(DialogFooter, { children: /* @__PURE__ */ jsx5(Button2, { onClick: () => {
        const d = profileDestination(result.profile);
        onClose();
        host2.newChat(d.route, d.options);
        location.hash = "#/";
      }, children: t("Open bot chat") }) })
    ] })
  ] }) });
}

// packages/hermes-plugin/desktop/bot-status.ts
import { useEffect as useEffect6, useState as useState5 } from "react";
import { host as host3 } from "@hermes/plugin-sdk";
var isLocalSource = () => host3.state.connectionId.get() === "local";
function useBotStatuses(enabled) {
  const [moods, setMoods] = useState5({});
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

// packages/hermes-plugin/desktop/market-page.tsx
import { Fragment as Fragment4, jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function MarketPage({ ctx, renderTab }) {
  const { t, locale, dir, contentLocale } = useMyBots();
  const [display, setDisplay] = useState6(null);
  const [tab, setTab] = useState6("browse"), [view, setView] = useState6(null), [installed, setInstalled] = useState6([]), [query, setQuery] = useState6(""), [category, setCategory] = useState6("all"), [selected, setSelected] = useState6(null), [error, setError] = useState6(""), [busy, setBusy] = useState6(false), [reload, setReload] = useState6(0), [hash, setHash] = useState6(location.hash), [linkSequence, setLinkSequence] = useState6(0);
  const fence = useRef5(new ReviewFence()), local = useLocal();
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
    setBusy(true);
    setError("");
    const api = new MarketApi(ctx);
    api.installed().then((x) => {
      if (fence.current.isCurrent(ticket)) setInstalled(x);
    }).catch(() => {
      if (fence.current.isCurrent(ticket)) setError("Could not load installed bots. Please retry.");
    });
    api.load().then((x) => {
      if (fence.current.isCurrent(ticket)) setView(x);
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
    if (!view || view.cached) return;
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
  }, [hash, view, linkSequence]);
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
    new MarketApi(ctx).installed().then(setInstalled).catch(() => setError("Refresh to check installation status."));
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
    new MarketApi(ctx).presentations(contentLocale).then((catalog) => {
      if (active && catalog?.locale === contentLocale && Array.isArray(catalog.bots)) setDisplay({ origin: view.origin, catalog });
    }, () => {
    });
    return () => {
      active = false;
    };
  }, [ctx, view, contentLocale]);
  const presentation = display?.origin === view?.origin && display?.catalog.locale === contentLocale ? display.catalog : null;
  const shown = (bot) => presentBot(bot, presentation ?? { locale: contentLocale, bots: [] });
  const installedLabel = (x) => {
    const original = view?.catalog.trusted.find((b) => b.metadata.id === x.bot && b.metadata.version === x.version)?.metadata;
    if (!original || x.name && x.name !== original.name && x.name !== original.englishName) return x.name || x.bot;
    return presentBot(original, presentation ?? { locale: contentLocale, bots: [] }).name;
  };
  const visible = filterBots((view?.catalog.bots || []).map(shown), query, category);
  const portrait = (id, version) => {
    const b = view?.catalog.trusted.find((b2) => b2.metadata.id === id && b2.metadata.version === version);
    const f = b?.files.find((f2) => f2.component === "avatar");
    return f ? { sha256: f.sha256, src: new URL(`/api/bots/${id}/${version}/files/${f.path.split("/").map(encodeURIComponent).join("/")}`, view.origin).href } : null;
  };
  return /* @__PURE__ */ jsxs5("main", { lang: locale, dir, className: "mybots px-[clamp(1.25rem,4vw,4rem)]", children: [
    /* @__PURE__ */ jsx6("style", { children: marketStyles }),
    /* @__PURE__ */ jsxs5("header", { className: "mb-header", children: [
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx6("h1", { children: "MyBots" }),
        /* @__PURE__ */ jsx6("p", { children: t("Find your next AI colleague.") })
      ] }),
      (tab === "browse" || tab === "installed") && /* @__PURE__ */ jsx6(Button2, { variant: "ghost", disabled: busy, loading: busy, onClick: () => setReload((n) => n + 1), children: t("Refresh") })
    ] }),
    /* @__PURE__ */ jsx6(Tabs, { dir, value: tab, onValueChange: (v) => setTab(v), children: /* @__PURE__ */ jsx6(TabsList, { className: "self-start", "aria-label": t("MyBots menu"), children: [["browse", t("Browse bots")], ["installed", t("Installed bots")], ["submissions", t("My submissions")], ["connection", t("Connection settings")]].map(([value, label]) => /* @__PURE__ */ jsx6(TabsTrigger, { value, children: label }, value)) }) }),
    error && /* @__PURE__ */ jsx6(Failure, { message: t(error) }),
    /* @__PURE__ */ jsxs5("div", { className: "mb-content", children: [
      tab === "browse" && /* @__PURE__ */ jsxs5(Fragment4, { children: [
        !local && /* @__PURE__ */ jsx6(LocalNotice, {}),
        view?.cached && /* @__PURE__ */ jsxs5("section", { className: "mb-notice", role: "status", children: [
          /* @__PURE__ */ jsx6("p", { children: t("Showing the saved catalog while offline. Reconnect to install.") }),
          /* @__PURE__ */ jsxs5("small", { children: [
            t("Last checked:"),
            new Date(view.checkedAt).toLocaleString(locale === "zh-hant" ? "zh-TW" : locale)
          ] })
        ] }),
        !!view?.catalog.bots.length && /* @__PURE__ */ jsxs5("div", { className: "mb-toolbar", children: [
          /* @__PURE__ */ jsx6(SearchField, { "aria-label": t("Search bots"), placeholder: t("Search by name or role"), value: query, onChange: setQuery }),
          /* @__PURE__ */ jsx6("div", { className: "mb-filter", children: /* @__PURE__ */ jsx6(Choice, { label: t("Bot category"), value: category, onChange: (v) => setCategory(v), options: [["all", t("All categories")], ["business", t("Business")], ["learning", t("Learning")], ["daily", t("Daily life")]] }) })
        ] }),
        busy && !view && /* @__PURE__ */ jsx6(Loader, { label: t("Loading colleagues") }),
        view && /* @__PURE__ */ jsx6("p", { className: "mb-count", children: t("{0} colleagues", visible.length) }),
        /* @__PURE__ */ jsx6("div", { className: "mb-grid", children: visible.map((bot) => {
          const asset = portrait(bot.id, bot.version), owned = !!installedProfile(bot);
          const mood = botMood(bot);
          return /* @__PURE__ */ jsxs5("article", { className: "mb-bot", children: [
            /* @__PURE__ */ jsx6(BotAvatar, { bot: bot.id, name: bot.name, src: new URL(bot.avatarUrl, view.origin).href, sha256: asset?.sha256, mood, size: 112 }),
            /* @__PURE__ */ jsx6("h2", { children: bot.name }),
            /* @__PURE__ */ jsx6("p", { children: bot.role }),
            /* @__PURE__ */ jsx6("p", { className: "mb-description", children: bot.description }),
            /* @__PURE__ */ jsxs5("div", { className: "mb-badges", children: [
              /* @__PURE__ */ jsx6(Badge, { variant: "muted", children: t("Soul") }),
              bot.optional.map((c) => /* @__PURE__ */ jsx6(Badge, { variant: "muted", children: { skills: t("Skills"), mcp: "MCP", plugin: t("Plugins"), voice: t("Voice") }[c] }, c))
            ] }),
            /* @__PURE__ */ jsxs5("div", { className: "mb-actions", children: [
              /* @__PURE__ */ jsx6(Button2, { variant: "secondary", disabled: view.cached || !local, onClick: () => setSelected(view.catalog.bots.find((b) => b.id === bot.id && b.version === bot.version) ?? bot), children: t("Meet") }),
              /* @__PURE__ */ jsx6("small", { className: "mb-muted", children: owned ? t(moodLabels[mood]) : t("Motion preview") })
            ] })
          ] }, bot.id);
        }) }),
        view && visible.length === 0 && /* @__PURE__ */ jsx6(EmptyState, { title: t("No matching bots"), description: t("Try another search or category.") })
      ] }),
      tab === "installed" && /* @__PURE__ */ jsxs5("section", { className: "mb-section", children: [
        /* @__PURE__ */ jsx6("h2", { children: t("Installed bots") }),
        installed.filter((x) => x.state !== "available").length === 0 && /* @__PURE__ */ jsx6(EmptyState, { title: t("No bots installed yet"), description: t("Find your first colleague in Browse bots.") }),
        installed.filter((x) => x.state !== "available").map((x) => {
          const asset = portrait(x.bot, x.version);
          const mood = moods[x.profile] || "unavailable", label = installedLabel(x);
          return /* @__PURE__ */ jsxs5("article", { className: "mb-row", children: [
            asset && /* @__PURE__ */ jsx6(BotAvatar, { bot: x.bot, name: label, src: asset.src, sha256: asset.sha256, mood, size: 56 }),
            /* @__PURE__ */ jsxs5("div", { children: [
              /* @__PURE__ */ jsx6("h3", { children: label }),
              /* @__PURE__ */ jsxs5("p", { children: [
                x.profile,
                " \xB7 ",
                x.version || t("Check version")
              ] }),
              /* @__PURE__ */ jsx6("small", { className: "mb-muted", children: t(moodLabels[mood]) })
            ] }),
            /* @__PURE__ */ jsx6(Badge, { variant: x.state === "name-conflict" ? "warn" : "muted", children: x.state === "installed" ? t("Installed") : x.state === "other-version" ? t("Other version") : t("Check files") }),
            (x.state === "installed" || x.state === "other-version") && /* @__PURE__ */ jsx6(Button2, { variant: "secondary", onClick: () => {
              const d = profileDestination(x.profile);
              host4.newChat(d.route, d.options);
              location.hash = "#/";
            }, children: t("Open chat") })
          ] }, x.profile);
        })
      ] }),
      (tab === "connection" || tab === "submissions") && (renderTab ? renderTab(tab) : /* @__PURE__ */ jsx6(Loader, { label: t("Loading submissions") }))
    ] }),
    selected && /* @__PURE__ */ jsx6(InstallConfirmation, { ctx, bot: shown(selected), mood: botMood(selected), onClose: close, onInstalled: done }, selected.id + "@" + selected.version)
  ] });
}

// packages/hermes-plugin/desktop/plugin.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var plugin_default = {
  id: "mybots",
  name: "MyBots",
  version: "0.4.1",
  description: "Browse and install MyBots profiles",
  defaultEnabled: true,
  register(ctx) {
    registerMyBotsI18n(ctx);
    const disposeIcon = registerLumiIcon();
    ctx.onDispose?.(disposeIcon);
    ctx.registerMany([
      { id: "market", area: ROUTES_AREA, data: { path: "/mybots" }, render: () => /* @__PURE__ */ jsx7(MarketPage, { ctx, renderTab: (tab) => tab === "connection" ? /* @__PURE__ */ jsx7(ConnectionPage, { ctx }) : /* @__PURE__ */ jsx7(SubmissionsPage, { ctx }) }) },
      { id: "install", area: ROUTES_AREA, data: { path: "/mybots/install" }, render: () => /* @__PURE__ */ jsx7(MarketPage, { ctx, renderTab: (tab) => tab === "connection" ? /* @__PURE__ */ jsx7(ConnectionPage, { ctx }) : /* @__PURE__ */ jsx7(SubmissionsPage, { ctx }) }) },
      { id: "nav", area: SIDEBAR_NAV_AREA, data: { path: "/mybots", label: "MyBots", codicon: "mybots-lumi" } }
    ]);
  }
};
export {
  plugin_default as default
};
