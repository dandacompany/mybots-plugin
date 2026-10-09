# mybots-plugin

**Recruit ready-to-use AI colleagues into Hermes Desktop.**

한국어 문서: [README.ko.md](./README.ko.md)

MyBots connects Hermes Desktop to the [MyBots gallery](https://mybots.work).
Browse AI colleagues, review their packaged soul and avatar, and choose the
optional skills, MCP servers, plugins and voice preset supplied with each bot.
Installed profiles can be personalized in Hermes.

## Requirements

- Hermes Desktop v0.21.5 or later with its local backend ready.
- A connection to **This device / default** for installing profiles.
- Python dependencies declared in `plugin.yaml`; Hermes offers a dependency
  review during installation.

MyBots supports Hermes Agent only. Browsing and installing bots do not require
a MyBots creator API key. Configure your conversation model, voice provider and
any external services separately in Hermes.

## Install

1. Open **Hermes → Settings → Plugins → Manage plugins**.
2. Select **Install from Git**.
3. Enter `https://github.com/dandacompany/mybots-plugin` and select **Review repository**.
4. Include both **Agent** and **Desktop** components. Choose **This device / default**
   as the Agent destination, review dependencies and install.
5. Enable both components in the plugin list. If Hermes requests a restart,
   restart it, then open **MyBots** in the sidebar.

For a local development checkout, enter its Git repository URL in the same
dialog. Installing only the Agent half through the CLI does not complete the
Desktop setup described here.

## Use

Open MyBots, select a colleague and review the proposed components before
installing. You can also start from a bot's recruit button on the website.
Existing profiles are preserved. Modify the installed soul to personalize
personality, tone, background and working preferences.

Creator submissions require an issued MyBots creator API key. Connect it in the
plugin's connection settings; it is not bundled with this repository.

## Languages

MyBots follows the Hermes Desktop language setting automatically. Its interface supports English, Korean, Simplified Chinese, Traditional Chinese, Japanese, Arabic, Russian, French, German and Spanish, with right-to-left layout for Arabic. Other language packs use English. Switching languages preserves open forms, selected files and installation options.

Bot introductions are available in English and Korean; other interface languages show English introductions. Display translations do not change the signed installation package, Soul or voice instructions. Hermes core changes are not required. If localized bot text is unavailable, the authored description remains visible.

## Security and permissions

- The initial catalog is `https://mybots.work`. Catalog snapshots are verified
  against the production Ed25519 public key pinned in this package. File hashes
  are checked before a reviewed package is installed.
- Profile installation requires the local default profile. It writes selected
  bot components into your local Hermes profiles and keeps existing profiles.
- Optional MCP servers and plugins can run code. Review the offered components
  and requested permissions before installing them.
- The package contains no service credentials or machine-specific settings.
  Existing local MyBots settings are preserved. Catalog verification establishes
  the publisher and package integrity; it is not a sandbox for installed code.

## Package

`plugin.yaml` and `__init__.py` identify the Agent package. `dashboard/` provides
APIs behind Hermes' authenticated transport. `desktop/plugin.js` provides the
sidebar gallery and installation interface through the Hermes plugin SDK.

Code comments and commit messages must be written in English. Keep the English
and Korean READMEs aligned when installation behavior changes.

## License

[MIT](./LICENSE) © 2026 Dante Labs.

---
Built by [Dante Labs](https://dante-labs.com) · [YouTube @dante-labs](https://youtube.com/@dante-labs) · [Email](mailto:dante@dante-labs.com) · [Community](https://discord.com/invite/rXyy5e9ujs) · [Support](https://buymeacoffee.com/dante.labs)
