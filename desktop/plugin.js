// packages/hermes-plugin/desktop/plugin.tsx
import { ROUTES_AREA, SIDEBAR_NAV_AREA } from "@hermes/plugin-sdk";

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
  return /* @__PURE__ */ jsxs(Select, { value, onValueChange: onChange, disabled, children: [
    /* @__PURE__ */ jsx(SelectTrigger, { "aria-label": label, children: /* @__PURE__ */ jsx(SelectValue, {}) }),
    /* @__PURE__ */ jsx(SelectContent, { children: options.map(([v, text2]) => /* @__PURE__ */ jsx(SelectItem, { value: v, children: text2 }, v)) })
  ] });
}
function Failure({ message }) {
  return /* @__PURE__ */ jsx("div", { role: "alert", className: "mb-error", children: /* @__PURE__ */ jsx(ErrorState, { title: "\uD655\uC778\uC774 \uD544\uC694\uD574\uC694", description: message }) });
}
function LocalNotice() {
  const [error, setError] = useState("");
  return /* @__PURE__ */ jsxs("section", { role: "status", className: "mb-notice", children: [
    /* @__PURE__ */ jsx("p", { children: "\uC124\uCE58\uC640 \uB4F1\uB85D\uC740 \uC774 \uAE30\uAE30\uC758 Local \u2192 default\uC5D0\uC11C \uC9C4\uD589\uD569\uB2C8\uB2E4." }),
    /* @__PURE__ */ jsx(Button, { variant: "secondary", onClick: async () => {
      try {
        await host.ensureAgent("local", "default");
      } catch {
        setError("\uB85C\uCEEC \uC5F0\uACB0\uC744 \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.");
      }
    }, children: "\uC774 \uAE30\uAE30\uC758 default\uB85C \uC5F0\uACB0" }),
    error && /* @__PURE__ */ jsx(Failure, { message: error })
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
var states = { draft: "\uCD08\uC548", validated: "\uAC80\uC99D \uC644\uB8CC", published: "\uACF5\uAC1C\uB428", unpublished: "\uBE44\uACF5\uAC1C" };
var empty = () => ({ id: "", version: "0.1.0", name: "", englishName: "", role: "", personality: "", description: "", category: "daily", firstPrompt: "", optional: [], skillId: "", mcp: null, pluginId: null, external: [], voice: null });
var fields = [["id", "\uBD07 ID"], ["version", "\uBC84\uC804"], ["name", "\uC774\uB984"], ["englishName", "\uC601\uBB38 \uC774\uB984"], ["role", "\uC5ED\uD560"], ["personality", "\uC131\uACA9"], ["description", "\uC18C\uAC1C"], ["firstPrompt", "\uCCAB \uC9C8\uBB38"]];
function SubmissionsPage({ ctx }) {
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
      if (fence.current.isCurrent(ticket)) setError("\uC5F0\uACB0 \uC815\uBCF4\uB97C \uD655\uC778\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");
    }).catch(() => {
      if (fence.current.isCurrent(ticket)) setError("\uB4F1\uB85D \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uD0A4 \uC5F0\uACB0\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
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
          if (!fence.current.isCurrent(ticket) || !isLocal()) throw Error("\uD654\uBA74\uC774\uB098 \uC5F0\uACB0\uC774 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
          const result = await value.apply(target, args);
          if (!fence.current.isCurrent(ticket) || !isLocal()) throw Error("\uD654\uBA74\uC774\uB098 \uC5F0\uACB0\uC774 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
          return result;
        } : value;
      } });
      const next = await action(guarded);
      if (fence.current.isCurrent(ticket) && isLocal() && next) accept(next);
    } catch {
      if (fence.current.isCurrent(ticket)) setError("\uC800\uC7A5\xB7\uAC80\uC99D\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC785\uB825, \uD0A4 \uC5F0\uACB0\uACFC \uC11C\uBC84 \uC0C1\uD0DC\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694. \uC751\uB2F5\uC744 \uBABB \uBC1B\uC558\uB2E4\uBA74 \uAC19\uC740 \uB0B4\uC6A9\uC73C\uB85C \uB2E4\uC2DC \uC800\uC7A5\uD558\uAC70\uB098 \uBAA9\uB85D\uC744 \uC0C8\uB85C\uACE0\uCE68\uD558\uC138\uC694.");
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
      const path = await ctx.os.pickOpenPath({ title: "MyBots \uD328\uD0A4\uC9C0 \uC120\uD0DD", filters: [{ name: "MyBots ZIP", extensions: ["zip"] }] });
      if (!path) return;
      const m = await api.packageMetadata(path);
      if (m.id !== draft.metadata.id || m.version !== draft.metadata.version) {
        setError("ZIP\uC758 ID \uB610\uB294 \uBC84\uC804\uC774 \uB2E4\uB985\uB2C8\uB2E4. \uC0C8 \uCD08\uC548\uC744 \uB9CC\uB4E4\uC5B4 \uC8FC\uC138\uC694.");
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
      /* @__PURE__ */ jsx2("h2", { children: "\uB0B4 \uB4F1\uB85D" }),
      /* @__PURE__ */ jsx2("p", { className: "mb-muted", children: "\uB0B4 \uBD07\uC744 \uC800\uC7A5\uD558\uACE0 \uD328\uD0A4\uC9C0\uB97C \uAC80\uC99D\uD574\uC694. \uACF5\uAC1C \uBC1C\uD589\uC740 \uC6B4\uC601\uC790\uAC00 CMS\uC5D0\uC11C \uAC80\uD1A0\uD569\uB2C8\uB2E4." })
    ] }),
    !local && /* @__PURE__ */ jsx2(LocalNotice, {}),
    error && /* @__PURE__ */ jsx2(Failure, { message: error }),
    connection && !connection.connected && /* @__PURE__ */ jsxs2("p", { role: "status", children: [
      "\uC5F0\uACB0 \uC124\uC815\uC5D0\uC11C \uC81C\uC791\uC790 API \uD0A4\uB97C \uBA3C\uC800 \uC5F0\uACB0\uD574 \uC8FC\uC138\uC694. ",
      connection.reason
    ] }),
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
        }, children: "\uC0C8 \uBD07 \uB4F1\uB85D" }),
        /* @__PURE__ */ jsx2(Button2, { variant: "ghost", disabled: busy, onClick: () => setReload((n) => n + 1), children: "\uB4F1\uB85D \uBAA9\uB85D \uC0C8\uB85C\uACE0\uCE68" })
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
        states[d.state]
      ] }, d.id)) }),
      !drafts.length && !editing && /* @__PURE__ */ jsx2(EmptyState, { title: "\uC544\uC9C1 \uB4F1\uB85D\uD55C \uBD07\uC774 \uC5C6\uC5B4\uC694", description: "\uC18C\uC6B8\uACFC \uC544\uBC14\uD0C0\uB85C \uCCAB \uCD08\uC548\uC744 \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694." }),
      editing && /* @__PURE__ */ jsxs2("form", { className: "mb-form", onSubmit: (e) => {
        e.preventDefault();
        void run(save);
      }, children: [
        /* @__PURE__ */ jsxs2("div", { className: "mb-actions", children: [
          /* @__PURE__ */ jsx2("h3", { children: draft ? "\uB4F1\uB85D \uC815\uBCF4" : "\uC0C8 \uCD08\uC548" }),
          draft && /* @__PURE__ */ jsxs2(Badge, { variant: "muted", children: [
            states[draft.state],
            " \xB7 revision ",
            draft.revision
          ] })
        ] }),
        /* @__PURE__ */ jsxs2("fieldset", { disabled: busy || !local || !connection.scopes.includes("submissions:write") || draft?.state === "published", children: [
          /* @__PURE__ */ jsxs2("div", { className: "mb-fields", children: [
            fields.map(([key, label]) => /* @__PURE__ */ jsxs2("label", { className: "mb-field" + (["description", "firstPrompt"].includes(key) ? " mb-field-wide" : ""), children: [
              label,
              /* @__PURE__ */ jsx2(Input, { "aria-label": label, value: form[key], disabled: !!draft && (key === "id" || key === "version"), required: key !== "englishName", maxLength: key === "name" || key === "englishName" ? 80 : 1e3, onChange: (e) => setForm((f) => ({ ...f, [key]: e.target.value, ...key === "id" && !draft ? { skillId: e.target.value } : {} })) })
            ] }, key)),
            /* @__PURE__ */ jsxs2("label", { className: "mb-field", children: [
              "\uBD84\uB958",
              /* @__PURE__ */ jsx2(Choice, { label: "\uBD84\uB958", value: form.category, onChange: (v) => setForm((f) => ({ ...f, category: v })), options: [["daily", "\uC77C\uC0C1"], ["business", "\uC5C5\uBB34"], ["learning", "\uD559\uC2B5"]] })
            ] })
          ] }),
          /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(Button2, { type: "submit", loading: busy, children: draft ? "\uC815\uBCF4 \uC800\uC7A5" : "\uCD08\uC548 \uC800\uC7A5" }) }),
          draft && /* @__PURE__ */ jsxs2(Fragment, { children: [
            /* @__PURE__ */ jsx2("hr", { className: "mb-divider" }),
            /* @__PURE__ */ jsx2("h3", { children: "\uC18C\uC6B8\uACFC \uC544\uBC14\uD0C0" }),
            /* @__PURE__ */ jsxs2("label", { className: "mb-field", children: [
              "\uC18C\uC6B8",
              /* @__PURE__ */ jsx2(Textarea, { "aria-label": "\uC18C\uC6B8", rows: 8, value: soul, onChange: (e) => setSoul(e.target.value) })
            ] }),
            /* @__PURE__ */ jsxs2("div", { className: "mb-actions", children: [
              /* @__PURE__ */ jsx2(Button2, { variant: "secondary", type: "button", disabled: !ctx.os?.pickOpenPath, onClick: () => void run(async (api) => {
                const p = await ctx.os.pickOpenPath({ title: "\uBD07 \uC544\uBC14\uD0C0 \uC120\uD0DD", filters: [{ name: "Avatar", extensions: ["png", "jpg", "jpeg"] }] });
                if (p) {
                  await api.connection();
                  setAvatar(p);
                }
              }), children: "\uC544\uBC14\uD0C0 \uC120\uD0DD" }),
              /* @__PURE__ */ jsx2("span", { className: "mb-muted", children: avatar ? "\uC544\uBC14\uD0C0 \uC120\uD0DD\uB428" : "PNG/JPEG \xB7 \uC815\uC0AC\uAC01\uD615 128\u20132048px" })
            ] }),
            /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(Button2, { variant: "secondary", type: "button", disabled: !avatar || !soul.trim(), onClick: () => void run((api) => api.minimal(draft.id, draft.revision, soul, avatar)), children: "\uC18C\uC6B8\xB7\uC544\uBC14\uD0C0 \uD328\uD0A4\uC9C0 \uC800\uC7A5" }) }),
            /* @__PURE__ */ jsx2("hr", { className: "mb-divider" }),
            /* @__PURE__ */ jsx2("h3", { children: "\uC804\uCCB4 \uD328\uD0A4\uC9C0" }),
            /* @__PURE__ */ jsx2("p", { className: "mb-muted", children: "\uC2A4\uD0AC\xB7MCP\xB7\uD50C\uB7EC\uADF8\uC778\xB7\uBCF4\uC774\uC2A4\uAC00 \uC788\uB294 \uBD07\uC740 \uC804\uCCB4 ZIP \uD328\uD0A4\uC9C0\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694." }),
            /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(Button2, { variant: "secondary", type: "button", disabled: !ctx.os?.pickOpenPath, onClick: () => void pickZip(), children: "\uD328\uD0A4\uC9C0 \uC120\uD0DD" }) }),
            !ctx.os?.pickOpenPath && /* @__PURE__ */ jsx2("p", { children: "\uC774 Hermes \uBC84\uC804\uC740 \uD50C\uB7EC\uADF8\uC778 \uD30C\uC77C \uC120\uD0DD\uC744 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. CMS\uC5D0\uC11C \uD328\uD0A4\uC9C0\uB97C \uC62C\uB824 \uC8FC\uC138\uC694." }),
            zip && /* @__PURE__ */ jsxs2("section", { role: "alert", className: "mb-section", children: [
              /* @__PURE__ */ jsx2("p", { children: "ZIP \uC815\uBCF4\uAC00 \uC800\uC7A5\uB41C \uCD08\uC548\uACFC \uB2E4\uB985\uB2C8\uB2E4. ZIP\uC758 \uC18C\uAC1C\xB7\uAD6C\uC131\uC744 \uC801\uC6A9\uD55C \uB4A4 \uC5C5\uB85C\uB4DC\uD560 \uC218 \uC788\uC5B4\uC694." }),
              /* @__PURE__ */ jsx2("pre", { className: "mb-source", children: JSON.stringify(zip.metadata, null, 2) }),
              /* @__PURE__ */ jsxs2("div", { className: "mb-actions", children: [
                /* @__PURE__ */ jsx2(Button2, { variant: "secondary", type: "button", onClick: () => void run(async (api) => {
                  const next = await api.patch(draft.id, draft.revision, zip.metadata);
                  accept(next);
                  const uploaded = await api.upload(next.id, next.revision, zip.path);
                  setZip(null);
                  return uploaded;
                }), children: "ZIP \uC815\uBCF4 \uC801\uC6A9 \uD6C4 \uC5C5\uB85C\uB4DC" }),
                /* @__PURE__ */ jsx2(Button2, { variant: "text", type: "button", onClick: () => setZip(null), children: "\uCDE8\uC18C" })
              ] })
            ] }),
            /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(Button2, { type: "button", disabled: !draft.packageHash, onClick: () => void run((api) => api.validate(draft.id, draft.revision)), children: "\uD328\uD0A4\uC9C0 \uAC80\uC99D" }) })
          ] })
        ] }),
        draft?.issues.map((issue, i) => /* @__PURE__ */ jsxs2("p", { role: "alert", children: [
          issue.path,
          ": ",
          issue.message
        ] }, i)),
        draft?.state === "validated" && /* @__PURE__ */ jsx2("p", { role: "status", children: "\uAC80\uC99D \uC644\uB8CC \xB7 \uC6B4\uC601\uC790\uC758 CMS \uAC80\uD1A0\uC640 \uBC1C\uD589\uC744 \uAE30\uB2E4\uB9BD\uB2C8\uB2E4." }),
        draft?.state === "published" && /* @__PURE__ */ jsx2("p", { role: "status", children: "\uACF5\uAC1C\uB428 \xB7 \uAC24\uB7EC\uB9AC\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC5B4\uC694." })
      ] })
    ] })
  ] });
}

// packages/hermes-plugin/desktop/connection-page.tsx
import { useEffect as useEffect3, useRef as useRef2, useState as useState3 } from "react";
import { Fragment as Fragment2, jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function ConnectionPage({ ctx }) {
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
      if (fence.current.isCurrent(ticket)) setError("\uC5F0\uACB0 \uC815\uBCF4\uB97C \uD655\uC778\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC11C\uBC84 \uCD9C\uCC98 \uC124\uC815\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
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
      if (fence.current.isCurrent(ticket)) setError("\uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uD0A4 \uB9CC\uB8CC\xB7\uD3D0\uAE30\xB7\uAD8C\uD55C\uACFC \uC120\uD0DD\uD55C \uC800\uC7A5\uC18C\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
    } finally {
      if (posting.current === ticket) posting.current = null;
      if (fence.current.isCurrent(ticket)) setBusy(false);
    }
  }
  return /* @__PURE__ */ jsxs3("section", { className: "mb-stack", children: [
    /* @__PURE__ */ jsxs3("div", { className: "mb-section", children: [
      /* @__PURE__ */ jsx3("h2", { children: "\uC5F0\uACB0 \uC124\uC815" }),
      /* @__PURE__ */ jsx3("p", { className: "mb-muted", children: "\uBD07 \uD0D0\uC0C9\uACFC \uC124\uCE58\uB294 \uD0A4 \uC5C6\uC774 \uC774\uC6A9\uD574\uC694. \uB0B4 \uBD07 \uB4F1\uB85D\uC5D0\uB294 \uC81C\uC791\uC790 API \uD0A4\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4." })
    ] }),
    !local && /* @__PURE__ */ jsx3(LocalNotice, {}),
    error && /* @__PURE__ */ jsx3(Failure, { message: error }),
    state && /* @__PURE__ */ jsxs3(Fragment2, { children: [
      /* @__PURE__ */ jsxs3("dl", { className: "mb-summary", children: [
        /* @__PURE__ */ jsx3("dt", { children: "\uC11C\uBC84" }),
        /* @__PURE__ */ jsx3("dd", { children: state.origin }),
        /* @__PURE__ */ jsx3("dt", { children: "\uC5F0\uACB0" }),
        /* @__PURE__ */ jsxs3("dd", { children: [
          /* @__PURE__ */ jsx3(Badge, { variant: state.connected ? "default" : "muted", children: state.connected ? "\uC5F0\uACB0\uB428" : "\uC5F0\uACB0 \uC548 \uB428" }),
          state.reason && " \xB7 " + state.reason
        ] }),
        /* @__PURE__ */ jsx3("dt", { children: "\uD658\uACBD \xB7 \uACF5\uAE09\uC790" }),
        /* @__PURE__ */ jsxs3("dd", { children: [
          state.environment || "\u2014",
          " \xB7 ",
          state.provider || "\u2014"
        ] }),
        /* @__PURE__ */ jsx3("dt", { children: "\uAD8C\uD55C" }),
        /* @__PURE__ */ jsx3("dd", { children: state.scopes.join(", ") || "\u2014" }),
        /* @__PURE__ */ jsx3("dt", { children: "\uB9CC\uB8CC" }),
        /* @__PURE__ */ jsx3("dd", { children: state.expiresAt ? new Date(state.expiresAt).toLocaleString() : "\u2014" })
      ] }),
      /* @__PURE__ */ jsxs3("form", { className: "mb-form", onSubmit: (e) => {
        e.preventDefault();
        void change();
      }, children: [
        /* @__PURE__ */ jsxs3("label", { className: "mb-field", children: [
          "\uD0A4 \uACF5\uAE09\uC790",
          /* @__PURE__ */ jsx3(Choice, { label: "\uD0A4 \uACF5\uAE09\uC790", value: mode, disabled: busy || !local, onChange: (v) => {
            setMode(v);
            setValue("");
          }, options: [["bws", "bws \uD56D\uBAA9 ID (\uB2E8\uD14C \uAD8C\uC7A5)"], ...state.providers.includes("keyring") ? [["keyring", "OS \uBCF4\uC548 \uC800\uC7A5\uC18C"]] : [], ["session", "\uC774\uBC88 \uC138\uC158\uB9CC"]] })
        ] }),
        /* @__PURE__ */ jsxs3("label", { className: "mb-field", children: [
          mode === "bws" ? "bws \uD56D\uBAA9 ID" : "MyBots API \uD0A4",
          /* @__PURE__ */ jsx3(Input, { "aria-label": mode === "bws" ? "bws \uD56D\uBAA9 ID" : "MyBots API \uD0A4", type: mode === "bws" ? "text" : "password", autoComplete: "off", spellCheck: false, value, disabled: busy || !local, onChange: (e) => setValue(e.target.value) })
        ] }),
        mode === "session" && /* @__PURE__ */ jsx3("p", { className: "mb-muted", children: "\uD0A4\uB294 \uC774\uBC88 \uBC31\uC5D4\uB4DC \uC138\uC158\uC758 \uBA54\uBAA8\uB9AC\uC5D0\uB9CC \uBCF4\uAD00\uD558\uBA70 \uC7AC\uC2DC\uC791\uD558\uBA74 \uD574\uC81C\uB429\uB2C8\uB2E4." }),
        !state.providers.includes("keyring") && /* @__PURE__ */ jsx3("p", { className: "mb-muted", children: "\uC774 Hermes \uD658\uACBD\uC5D0\uB294 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 OS \uBCF4\uC548 \uC800\uC7A5\uC18C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. bws \uB610\uB294 \uC774\uBC88 \uC138\uC158\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694." }),
        /* @__PURE__ */ jsxs3("div", { className: "mb-actions", children: [
          /* @__PURE__ */ jsx3(Button2, { type: "submit", disabled: busy || !local || !value.trim(), loading: busy, children: "\uC5F0\uACB0\uD558\uAE30" }),
          state.provider && /* @__PURE__ */ jsx3(Button2, { variant: "text", type: "button", disabled: busy || !local, onClick: () => void change(true), children: "\uC5F0\uACB0 \uD574\uC81C" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(Button2, { variant: "ghost", disabled: busy, onClick: () => setReload((n) => n + 1), children: "\uC5F0\uACB0 \uC0C1\uD0DC \uC0C8\uB85C\uACE0\uCE68" }) })
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
function voiceResultMessage(result) {
  if (result.voiceStatus === "existing-settings-preserved") return "\uAE30\uC874 \uBCF4\uC774\uC2A4 \uC124\uC815\uC744 \uBCF4\uC874\uD588\uC5B4\uC694. \uCD94\uCC9C \uBCF4\uC774\uC2A4 \uC801\uC6A9 \uC5EC\uBD80\uB294 \uD574\uB2F9 \uD504\uB85C\uD544\uC758 Voice \uC124\uC815\uC5D0\uC11C \uD655\uC778\uD574 \uC8FC\uC138\uC694.";
  return result.voiceConfigured ? `\uCD94\uCC9C \uBCF4\uC774\uC2A4 ${result.voice?.voice} \uC124\uC815 \uD3EC\uD568 \xB7 \uC74C\uC131 \uC778\uC99D \uD655\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.` : "\uBCF4\uC774\uC2A4 \uC124\uC815\uC740 \uD3EC\uD568\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694.";
}
function profileDestination(profile) {
  if (!BOT_ID.test(profile)) throw Error("Invalid profile");
  return { route: { connectionId: "local", mode: "local", profile, targetProfile: profile }, options: { workspaceMode: "bots", workspaceOwnerKey: `bot:local::${profile}` } };
}

// packages/hermes-plugin/desktop/bot-avatar.tsx
import { useEffect as useEffect4, useRef as useRef3 } from "react";
import * as sdk from "@hermes/plugin-sdk";

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
  if (!clock) clock = sdk.createBudgetedLoop?.((now) => {
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
  const ref = useRef3(null), scene = useRef3(null);
  const calibration = sha256 ? avatarPreset(bot, sha256) : null;
  const animate = !!calibration && mood !== "unavailable";
  useEffect4(() => {
    if (!ref.current || !calibration || !animate) return;
    const controller = mountAvatarScene(ref.current, src, { ...calibration, name }, typeof sdk.createBudgetedLoop === "function" ? sharedLoop : void 0);
    scene.current = controller;
    return () => {
      controller.dispose();
      scene.current = null;
    };
  }, [src, calibration, name, animate]);
  useEffect4(() => {
    if (mood !== "unavailable") scene.current?.setMood(mood);
  }, [mood, src, animate]);
  return animate ? /* @__PURE__ */ jsx4("svg", { ref, width: size, height: size, className: "mb-avatar" }) : /* @__PURE__ */ jsx4("img", { src, alt: `${name} \uC544\uBC14\uD0C0`, width: size, height: size, className: "mb-avatar" });
}

// packages/hermes-plugin/desktop/install-confirmation.tsx
import { Fragment as Fragment3, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var labels = { skills: "\uC2A4\uD0AC", mcp: "MCP \xB7 \uB85C\uCEEC Python \uC2E4\uD589", plugin: "\uD50C\uB7EC\uADF8\uC778 \xB7 \uB85C\uCEEC Python \uC2E4\uD589", voice: "GPT Live \uCD94\uCC9C \uBCF4\uC774\uC2A4" };
function InstallConfirmation({ ctx, bot, onClose, onInstalled, mood = "idle" }) {
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
      if (fence.current.isCurrent(ticket)) setError("\uC124\uCE58 \uAD6C\uC131\uC744 \uD655\uC778\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC11C\uBC84 \uC5F0\uACB0\uACFC \uACF5\uAC1C \uC0C1\uD0DC\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
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
        setError("\uC124\uCE58\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uAD6C\uC131\uC744 \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
        setReview(null);
      }
    } finally {
      posting.current = false;
      if (fence.current.isCurrent(ticket)) setBusy(false);
    }
  }
  return /* @__PURE__ */ jsx5(Dialog, { open: true, onOpenChange: (open) => {
    if (!open) onClose();
  }, children: /* @__PURE__ */ jsxs4(DialogContent, { "aria-label": `${bot.name} \uC124\uCE58 \uD655\uC778`, "aria-busy": busy, className: "mb-install", onCloseAutoFocus: (event) => {
    if (opener.current?.isConnected) {
      event.preventDefault();
      opener.current.focus();
    }
  }, children: [
    /* @__PURE__ */ jsxs4(DialogHeader, { children: [
      /* @__PURE__ */ jsxs4(DialogTitle, { children: [
        bot.name,
        " \uB9CC\uB098\uAE30"
      ] }),
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
          /* @__PURE__ */ jsx5(Badge, { variant: "muted", children: "\uC18C\uC6B8 \xB7 \uC544\uBC14\uD0C0 \uD544\uC218" })
        ] })
      ] })
    ] }),
    !local && /* @__PURE__ */ jsx5(LocalNotice, {}),
    error && /* @__PURE__ */ jsx5(Failure, { message: error }),
    !result && /* @__PURE__ */ jsxs4("fieldset", { disabled: busy && posting.current, className: "mb-options", children: [
      /* @__PURE__ */ jsx5("legend", { children: "\uD568\uAED8 \uC124\uCE58\uD560 \uAE30\uB2A5" }),
      bot.optional.length === 0 && /* @__PURE__ */ jsx5("p", { className: "mb-muted", children: "\uC18C\uC6B8\uACFC \uC544\uBC14\uD0C0\uB85C \uC2DC\uC791\uD574\uC694." }),
      bot.optional.map((c) => /* @__PURE__ */ jsxs4("label", { className: "mb-option", children: [
        /* @__PURE__ */ jsx5(Checkbox, { "aria-label": labels[c], checked: selection.includes(c), onCheckedChange: (checked) => {
          fence.current.invalidate();
          setReview(null);
          setSelection((s) => normalizeSelection(bot, checked === true ? [...s, c] : s.filter((x) => x !== c)));
        } }),
        /* @__PURE__ */ jsxs4("span", { children: [
          labels[c],
          c === "voice" && bot.voice && ` \xB7 ${bot.voice.id} (\uCCAD\uCDE8 \uAC80\uC99D \uC804)`
        ] })
      ] }, c))
    ] }),
    busy && !posting.current && /* @__PURE__ */ jsx5(Loader, { label: "\uC124\uCE58 \uAD6C\uC131\uC744 \uD655\uC778\uD558\uACE0 \uC788\uC5B4\uC694" }),
    review && /* @__PURE__ */ jsxs4(Fragment3, { children: [
      /* @__PURE__ */ jsxs4("p", { className: "mb-muted", children: [
        "\uC0C8 \uD504\uB85C\uD544: ",
        /* @__PURE__ */ jsx5("b", { children: review.manifest.id }),
        " \xB7 \uC81C\uC791\uC790: ",
        review.manifest.author
      ] }),
      review.components.some((c) => c === "mcp" || c === "plugin") && /* @__PURE__ */ jsx5("p", { children: "\uC120\uD0DD\uD55C MCP\xB7\uD50C\uB7EC\uADF8\uC778\uC740 \uC774 \uAE30\uAE30\uC5D0\uC11C Python \uCF54\uB4DC\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4." }),
      review.voice && /* @__PURE__ */ jsxs4("p", { children: [
        "\uCD94\uCC9C \uBCF4\uC774\uC2A4: ",
        review.voice.voice,
        " \xB7 ",
        review.voice.instructions,
        /* @__PURE__ */ jsx5("br", {}),
        "\uC74C\uC131 \uC778\uC99D\uC740 Hermes\uC5D0\uC11C \uC124\uC815\uD574 \uC8FC\uC138\uC694."
      ] }),
      /* @__PURE__ */ jsxs4("details", { children: [
        /* @__PURE__ */ jsx5("summary", { children: "\uC18C\uC6B8\uACFC \uD30C\uC77C \uAC80\uC99D \uC815\uBCF4" }),
        /* @__PURE__ */ jsx5("pre", { className: "mb-source", children: review.soul }),
        /* @__PURE__ */ jsxs4("small", { children: [
          "SHA-256: ",
          review.digest
        ] }),
        /* @__PURE__ */ jsx5("ul", { children: review.manifest.files.filter((f) => ["soul", "avatar", ...review.components].includes(f.component)).map((f) => /* @__PURE__ */ jsxs4("li", { children: [
          f.path,
          " \xB7 ",
          f.size,
          " bytes"
        ] }, f.path)) })
      ] }),
      /* @__PURE__ */ jsx5(DialogFooter, { children: /* @__PURE__ */ jsxs4(Button2, { disabled: busy || !local, loading: posting.current && busy, onClick: install, children: [
        bot.name,
        " \uC124\uCE58\uD558\uAE30"
      ] }) })
    ] }),
    !review && !result && !busy && local && /* @__PURE__ */ jsx5(Button2, { variant: "secondary", onClick: () => setRetry((n) => n + 1), children: "\uAD6C\uC131 \uB2E4\uC2DC \uD655\uC778" }),
    result && /* @__PURE__ */ jsxs4("section", { role: "status", className: "mb-section", children: [
      /* @__PURE__ */ jsx5("h3", { children: result.status === "already-installed" ? "\uC774\uBBF8 \uC124\uCE58\uB41C \uBD07\uC774\uC5D0\uC694" : "\uC124\uCE58 \uC644\uB8CC" }),
      /* @__PURE__ */ jsx5("p", { children: result.modelSetupRequired ? "\uBAA8\uB378\uACFC \uC778\uC99D\uC744 Hermes\uC5D0\uC11C \uC124\uC815\uD574 \uC8FC\uC138\uC694." : "\uD504\uB85C\uD544\uC774 \uC900\uBE44\uB410\uC5B4\uC694." }),
      /* @__PURE__ */ jsx5("p", { children: voiceResultMessage(result) }),
      /* @__PURE__ */ jsxs4("p", { children: [
        "\uCCAB \uC9C8\uBB38: ",
        bot.firstPrompt
      ] }),
      bot.external.map((e) => /* @__PURE__ */ jsxs4("p", { children: [
        /* @__PURE__ */ jsxs4("a", { href: e.guide, target: "_blank", rel: "noopener noreferrer", children: [
          e.label,
          " \uC124\uC815 \uC548\uB0B4"
        ] }),
        " \xB7 ",
        e.requirement
      ] }, e.service)),
      /* @__PURE__ */ jsx5(DialogFooter, { children: /* @__PURE__ */ jsx5(Button2, { onClick: () => {
        const d = profileDestination(result.profile);
        onClose();
        host2.newChat(d.route, d.options);
        location.hash = "#/";
      }, children: "\uBD07 \uB300\uD654 \uC5F4\uAE30" }) })
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
var moodLabels = { idle: "\uB300\uAE30 \uC911", think: "\uC0DD\uAC01 \uC911", work: "\uCD5C\uADFC \uC791\uC5C5 \uC911", unavailable: "\uC0C1\uD0DC \uD655\uC778 \uBD88\uAC00" };

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

// packages/hermes-plugin/desktop/market-page.tsx
import { Fragment as Fragment4, jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function MarketPage({ ctx, renderTab }) {
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
      if (fence.current.isCurrent(ticket)) setError("\uC124\uCE58\uB41C \uBD07\uC744 \uD655\uC778\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.");
    });
    api.load().then((x) => {
      if (fence.current.isCurrent(ticket)) setView(x);
    }, () => {
      if (fence.current.isCurrent(ticket)) {
        setView(null);
        setError("\uCE74\uD0C8\uB85C\uADF8\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC124\uCE58\uB41C \uBD07\uC740 \uACC4\uC18D \uC5F4 \uC218 \uC788\uC5B4\uC694.");
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
      else setError("\uC774 \uB9C1\uD06C\uC758 \uBD07 \uBC84\uC804\uC740 \uD604\uC7AC \uACF5\uAC1C\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
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
    new MarketApi(ctx).installed().then(setInstalled).catch(() => setError("\uC124\uCE58 \uC0C1\uD0DC\uB97C \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694."));
  }, [ctx]);
  const moods = useBotStatuses(tab === "browse" || tab === "installed" || !!selected);
  const installedProfile = (bot) => installed.find((x) => x.bot === bot.id && x.version === bot.version && x.state === "installed");
  const botMood = (bot) => {
    const own = installedProfile(bot);
    return own ? moods[own.profile] || "unavailable" : "idle";
  };
  const visible = filterBots(view?.catalog.bots || [], query, category);
  const portrait = (id, version) => {
    const b = view?.catalog.trusted.find((b2) => b2.metadata.id === id && b2.metadata.version === version);
    const f = b?.files.find((f2) => f2.component === "avatar");
    return f ? { sha256: f.sha256, src: new URL(`/api/bots/${id}/${version}/files/${f.path.split("/").map(encodeURIComponent).join("/")}`, view.origin).href } : null;
  };
  return /* @__PURE__ */ jsxs5("main", { className: "mybots px-[clamp(1.25rem,4vw,4rem)]", children: [
    /* @__PURE__ */ jsx6("style", { children: marketStyles }),
    /* @__PURE__ */ jsxs5("header", { className: "mb-header", children: [
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx6("h1", { children: "MyBots" }),
        /* @__PURE__ */ jsx6("p", { children: "\uB098\uC640 \uB9DE\uB294 AI \uB3D9\uB8CC\uB97C \uCC3E\uC544\uBCF4\uC138\uC694." })
      ] }),
      (tab === "browse" || tab === "installed") && /* @__PURE__ */ jsx6(Button2, { variant: "ghost", disabled: busy, loading: busy, onClick: () => setReload((n) => n + 1), children: "\uC0C8\uB85C\uACE0\uCE68" })
    ] }),
    /* @__PURE__ */ jsx6(Tabs, { value: tab, onValueChange: (v) => setTab(v), children: /* @__PURE__ */ jsx6(TabsList, { className: "self-start", "aria-label": "MyBots \uBA54\uB274", children: [["browse", "\uBD07 \uD0D0\uC0C9"], ["installed", "\uC124\uCE58\uB41C \uBD07"], ["submissions", "\uB0B4 \uB4F1\uB85D"], ["connection", "\uC5F0\uACB0 \uC124\uC815"]].map(([value, label]) => /* @__PURE__ */ jsx6(TabsTrigger, { value, children: label }, value)) }) }),
    error && /* @__PURE__ */ jsx6(Failure, { message: error }),
    /* @__PURE__ */ jsxs5("div", { className: "mb-content", children: [
      tab === "browse" && /* @__PURE__ */ jsxs5(Fragment4, { children: [
        !local && /* @__PURE__ */ jsx6(LocalNotice, {}),
        view?.cached && /* @__PURE__ */ jsxs5("section", { className: "mb-notice", role: "status", children: [
          /* @__PURE__ */ jsx6("p", { children: "\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD574 \uC800\uC7A5\uB41C \uBAA9\uB85D\uC744 \uBCF4\uC5EC\uB4DC\uB824\uC694. \uC124\uCE58\uD558\uB824\uBA74 \uB2E4\uC2DC \uC5F0\uACB0\uD574 \uC8FC\uC138\uC694." }),
          /* @__PURE__ */ jsxs5("small", { children: [
            "\uB9C8\uC9C0\uB9C9 \uD655\uC778: ",
            new Date(view.checkedAt).toLocaleString()
          ] })
        ] }),
        !!view?.catalog.bots.length && /* @__PURE__ */ jsxs5("div", { className: "mb-toolbar", children: [
          /* @__PURE__ */ jsx6(SearchField, { "aria-label": "\uBD07 \uAC80\uC0C9", placeholder: "\uC774\uB984\uC774\uB098 \uC5ED\uD560\uB85C \uAC80\uC0C9", value: query, onChange: setQuery }),
          /* @__PURE__ */ jsx6("div", { className: "mb-filter", children: /* @__PURE__ */ jsx6(Choice, { label: "\uBD07 \uBD84\uB958", value: category, onChange: (v) => setCategory(v), options: [["all", "\uBAA8\uB4E0 \uBD84\uB958"], ["business", "\uC5C5\uBB34"], ["learning", "\uD559\uC2B5"], ["daily", "\uC77C\uC0C1"]] }) })
        ] }),
        busy && !view && /* @__PURE__ */ jsx6(Loader, { label: "\uB3D9\uB8CC\uB97C \uBD88\uB7EC\uC624\uACE0 \uC788\uC5B4\uC694" }),
        view && /* @__PURE__ */ jsxs5("p", { className: "mb-count", children: [
          visible.length,
          "\uBA85\uC758 \uB3D9\uB8CC"
        ] }),
        /* @__PURE__ */ jsx6("div", { className: "mb-grid", children: visible.map((bot) => {
          const asset = portrait(bot.id, bot.version), owned = !!installedProfile(bot);
          const mood = botMood(bot);
          return /* @__PURE__ */ jsxs5("article", { className: "mb-bot", children: [
            /* @__PURE__ */ jsx6(BotAvatar, { bot: bot.id, name: bot.name, src: new URL(bot.avatarUrl, view.origin).href, sha256: asset?.sha256, mood, size: 112 }),
            /* @__PURE__ */ jsx6("h2", { children: bot.name }),
            /* @__PURE__ */ jsx6("p", { children: bot.role }),
            /* @__PURE__ */ jsx6("p", { className: "mb-description", children: bot.description }),
            /* @__PURE__ */ jsxs5("div", { className: "mb-badges", children: [
              /* @__PURE__ */ jsx6(Badge, { variant: "muted", children: "\uC18C\uC6B8" }),
              bot.optional.map((c) => /* @__PURE__ */ jsx6(Badge, { variant: "muted", children: { skills: "\uC2A4\uD0AC", mcp: "MCP", plugin: "\uD50C\uB7EC\uADF8\uC778", voice: "\uBCF4\uC774\uC2A4" }[c] }, c))
            ] }),
            /* @__PURE__ */ jsxs5("div", { className: "mb-actions", children: [
              /* @__PURE__ */ jsx6(Button2, { variant: "secondary", disabled: view.cached || !local, onClick: () => setSelected(bot), children: "\uB9CC\uB098\uBCF4\uAE30" }),
              /* @__PURE__ */ jsx6("small", { className: "mb-muted", children: owned ? moodLabels[mood] : "\uBAA8\uC158 \uBBF8\uB9AC\uBCF4\uAE30" })
            ] })
          ] }, bot.id);
        }) }),
        view && visible.length === 0 && /* @__PURE__ */ jsx6(EmptyState, { title: "\uC870\uAC74\uC5D0 \uB9DE\uB294 \uBD07\uC774 \uC5C6\uC5B4\uC694", description: "\uAC80\uC0C9\uC5B4\uB098 \uBD84\uB958\uB97C \uBC14\uAFD4\uBCF4\uC138\uC694." })
      ] }),
      tab === "installed" && /* @__PURE__ */ jsxs5("section", { className: "mb-section", children: [
        /* @__PURE__ */ jsx6("h2", { children: "\uC124\uCE58\uB41C \uBD07" }),
        installed.filter((x) => x.state !== "available").length === 0 && /* @__PURE__ */ jsx6(EmptyState, { title: "\uC544\uC9C1 \uC124\uCE58\uB41C \uBD07\uC774 \uC5C6\uC5B4\uC694", description: "\uBD07 \uD0D0\uC0C9\uC5D0\uC11C \uCCAB \uB3D9\uB8CC\uB97C \uB9CC\uB098\uBCF4\uC138\uC694." }),
        installed.filter((x) => x.state !== "available").map((x) => {
          const asset = portrait(x.bot, x.version);
          const mood = moods[x.profile] || "unavailable";
          return /* @__PURE__ */ jsxs5("article", { className: "mb-row", children: [
            asset && /* @__PURE__ */ jsx6(BotAvatar, { bot: x.bot, name: x.name || x.bot, src: asset.src, sha256: asset.sha256, mood, size: 56 }),
            /* @__PURE__ */ jsxs5("div", { children: [
              /* @__PURE__ */ jsx6("h3", { children: x.name || x.bot }),
              /* @__PURE__ */ jsxs5("p", { children: [
                x.profile,
                " \xB7 ",
                x.version || "\uBC84\uC804 \uD655\uC778 \uD544\uC694"
              ] }),
              /* @__PURE__ */ jsx6("small", { className: "mb-muted", children: moodLabels[mood] })
            ] }),
            /* @__PURE__ */ jsx6(Badge, { variant: x.state === "name-conflict" ? "warn" : "muted", children: x.state === "installed" ? "\uC124\uCE58\uB428" : x.state === "other-version" ? "\uB2E4\uB978 \uBC84\uC804" : "\uD30C\uC77C \uD655\uC778 \uD544\uC694" }),
            (x.state === "installed" || x.state === "other-version") && /* @__PURE__ */ jsx6(Button2, { variant: "secondary", onClick: () => {
              const d = profileDestination(x.profile);
              host4.newChat(d.route, d.options);
              location.hash = "#/";
            }, children: "\uB300\uD654 \uC5F4\uAE30" })
          ] }, x.profile);
        })
      ] }),
      (tab === "connection" || tab === "submissions") && (renderTab ? renderTab(tab) : /* @__PURE__ */ jsx6(Loader, { label: "\uB4F1\uB85D \uAE30\uB2A5\uC744 \uC5F0\uACB0\uD558\uACE0 \uC788\uC5B4\uC694" }))
    ] }),
    selected && /* @__PURE__ */ jsx6(InstallConfirmation, { ctx, bot: selected, mood: botMood(selected), onClose: close, onInstalled: done }, selected.id + "@" + selected.version)
  ] });
}

// packages/hermes-plugin/desktop/plugin.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var plugin_default = {
  id: "mybots",
  name: "MyBots",
  version: "0.4.0",
  description: "Browse and install MyBots profiles",
  defaultEnabled: true,
  register(ctx) {
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
