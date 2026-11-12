/* Site picker app: loads a client config, renders the live preview, tracks picks, sends them. */
(function () {
  "use strict";

  var U = window.KF_UTIL, esc = U.esc;
  var SET = window.KF_SETTINGS || {};
  var LETTERS = ["A", "B", "C", "D"]; /* most clients have three designs; a fourth (D) is optional */
  var MOBILE = window.matchMedia("(max-width: 959px)");
  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)");

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  var C, slug, designs, palettes, fonts, sections, steps, storeKey;
  var S = { picks: {}, palette: null, font: null, edits: {}, requests: {}, reactions: {}, autoStyled: {}, addons: [], form: {}, view: "design", step: 0, size: "desktop", sent: false, helperUsed: false };
  var SPEECH = window.KF_SPEECH || { supported: false, ios: false, button: function () { return ""; } };

  /* Quick reactions under each section's options. "feel" ones are one-of-three; the rest can be combined. */
  var REACTIONS = [
    { id: "love", label: "Love it", emoji: "\u2764\uFE0F", feel: true },
    { id: "good", label: "Good", emoji: "\uD83D\uDC4D", feel: true },
    { id: "no", label: "Not for me", emoji: "\uD83D\uDC4E", feel: true },
    { id: "photos", label: "The photos" },
    { id: "layout", label: "The layout" },
    { id: "wording", label: "The wording" },
    { id: "simple", label: "Clean & simple" },
    { id: "busy", label: "Too busy" },
    { id: "us", label: "Feels like us" }
  ];
  function reactionLabel(id) { var r = REACTIONS.filter(function (x) { return x.id === id; })[0]; return r ? r.label : id; }
  var editing = false, suppressScrollSync = 0, saveTimer = null;

  /* ---------- storage (never throws) ---------- */
  function flush() {
    clearTimeout(saveTimer);
    try { localStorage.setItem(storeKey, JSON.stringify(S)); } catch (e) { /* ignore */ }
  }
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      try { localStorage.setItem(storeKey, JSON.stringify(S)); } catch (e) { /* private mode or full: ignore */ }
    }, 200);
  }
  function load() {
    try {
      var raw = localStorage.getItem(storeKey);
      if (!raw) return;
      var d = JSON.parse(raw);
      if (!d || typeof d !== "object") return;
      ["picks", "edits", "requests", "reactions", "form", "autoStyled"].forEach(function (k) { if (d[k] && typeof d[k] === "object") S[k] = d[k]; });
      if (Array.isArray(d.addons)) S.addons = d.addons.filter(function (x) { return typeof x === "string"; });
      ["palette", "font", "view", "size"].forEach(function (k) { if (typeof d[k] === "string") S[k] = d[k]; });
      if (typeof d.step === "number") S.step = d.step;
      S.sent = !!d.sent;
      S.helperUsed = !!d.helperUsed;
    } catch (e) { /* bad data: start fresh */ }
  }

  /* ---------- boot ---------- */
  function getSlug() {
    var q = null;
    try { q = new URLSearchParams(location.search).get("client"); } catch (e) {}
    if (!q) { var m = location.pathname.match(/^\/p\/([^\/?#]+)/); if (m) q = decodeURIComponent(m[1]); }
    q = (q || "").toLowerCase().trim();
    return /^[a-z0-9][a-z0-9-]{0,60}$/.test(q) ? q : null;
  }

  function contactLine() {
    var bits = [];
    if (SET.phone) bits.push('call or text <a href="tel:' + esc(SET.phone.replace(/[^\d+]/g, "")) + '">' + esc(SET.phone) + "</a>");
    if (SET.email) bits.push('email <a href="mailto:' + esc(SET.email) + '">' + esc(SET.email) + "</a>");
    return bits.length ? "Please " + bits.join(" or ") + "." : "";
  }

  function fail(msg) {
    $("#k-loading").hidden = true;
    var e = $("#k-error");
    e.innerHTML = "<h1 style=\"font-size:1.3rem;margin:0 0 8px\">Hmm, we couldn't open this page</h1><p>" + msg + "</p><p>" + contactLine() + "</p>";
    e.hidden = false;
  }

  function boot() {
    slug = getSlug();
    if (!slug) { fail("This link is missing the name of the designs to show."); return; }
    var s = document.createElement("script");
    s.src = "/clients/" + slug + "/config.js";
    s.onload = function () {
      if (!window.KF_CLIENT || !Array.isArray(window.KF_CLIENT.designs)) { fail("The designs for this link aren't set up yet."); return; }
      var go = function () { try { start(window.KF_CLIENT); } catch (err) { fail("Something went wrong loading the designs."); if (window.console) console.warn(err); } };
      /* Optional client stylesheet (config "css"), loaded before the first render. */
      var css = window.KF_CLIENT.css;
      if (typeof css === "string" && /^\/clients\/[a-z0-9-]+\/[\w.-]+\.css$/.test(css)) {
        var l = document.createElement("link"), done = false;
        var once = function () { if (!done) { done = true; go(); } };
        l.rel = "stylesheet"; l.href = css; l.onload = once; l.onerror = once;
        setTimeout(once, 4000);
        document.head.appendChild(l);
      } else go();
    };
    s.onerror = function () { fail("We couldn't find designs for this link. It may have a typo."); };
    document.head.appendChild(s);
  }

  /* ---------- config helpers ---------- */
  function labelOf(id) {
    var o = C.sectionLabels && C.sectionLabels[id];
    var base = window.KF_SECTIONS.filter(function (s) { return s.id === id; })[0] || {};
    return o || base.label || id;
  }
  function design(letter) { return designs.filter(function (d) { return d.id === letter; })[0] || designs[0]; }
  function contentFor(id, letter) {
    var d = design(letter);
    return Object.assign({}, (C.content && C.content[id]) || {}, (d.content && d.content[id]) || {});
  }
  function layoutFor(id, letter) {
    var d = design(letter);
    var l = (d.layouts && d.layouts[id]) || d.layout;
    /* A design can use another letter's layout, or a client's own layout (registered in its config,
       e.g. layout: "smith" uses KF_RENDER.hero.smith and styles scoped to .v-smith). */
    if (LETTERS.indexOf(l) > -1) return l;
    if (typeof l === "string" && /^[a-z][a-z0-9-]{0,30}$/.test(l) && window.KF_RENDER[id] && typeof window.KF_RENDER[id][l] === "function") return l;
    return letter;
  }
  function shown(id) { return S.picks[id] || designs[0].id; }
  function palette() { return palettes.filter(function (p) { return p.id === S.palette; })[0] || palettes[0]; }
  function font() { return fonts.filter(function (f) { return f.id === S.font; })[0] || fonts[0]; }
  function ctx() {
    return {
      biz: C.businessName, contact: C.contact || {}, logo: C.logo || "",
      labels: { services: C.navLabels && C.navLabels.services || labelOf("services"),
                gallery: C.navLabels && C.navLabels.gallery || labelOf("gallery"),
                about: labelOf("about"), contact: labelOf("contact") }
    };
  }

  function start(cfg) {
    C = cfg;
    storeKey = "kf-picker:" + slug;
    sections = window.KF_SECTIONS.map(function (s) { return { id: s.id, label: labelOf(s.id), hint: (C.sectionHints && C.sectionHints[s.id]) || s.hint }; });
    designs = C.designs.slice(0, LETTERS.length).map(function (d, i) { return Object.assign({}, d, { id: LETTERS[i] }); });
    palettes = Array.isArray(C.palettes) && C.palettes.length ? C.palettes : window.KF_PALETTES;
    fonts = Array.isArray(C.fonts) && C.fonts.length
      ? C.fonts.map(function (f) { return typeof f === "string" ? window.KF_FONTS.filter(function (x) { return x.id === f; })[0] : f; }).filter(Boolean)
      : window.KF_FONTS;
    steps = sections.map(function (s) { return { type: "section", id: s.id, label: s.label, hint: s.hint }; })
      .concat([{ type: "palette", id: "palette", label: "Colours", hint: "Pick a colour theme" },
               { type: "font", id: "font", label: "Fonts", hint: "Pick a lettering style" }]);

    load();
    if (!palettes.some(function (p) { return p.id === S.palette; })) S.palette = C.defaultPalette || palettes[0].id;
    if (!fonts.some(function (f) { return f.id === S.font; })) S.font = C.defaultFont || fonts[0].id;
    if (S.step < 0 || S.step >= steps.length) S.step = 0;
    Object.keys(S.picks).forEach(function (k) { if (!designs.some(function (d) { return d.id === S.picks[k]; })) delete S.picks[k]; });

    document.title = "Design your website | " + C.businessName;
    $("#k-biz").textContent = C.businessName;
    $("#f-business").placeholder = C.businessName;
    if (SET.studio) {
      $("#k-credit").innerHTML = "Design picker by " + (SET.site ? '<a href="' + esc(SET.site) + '" target="_blank" rel="noopener">' + esc(SET.studio) + "</a>" : esc(SET.studio));
    }

    loadFonts();
    buildPanel();
    renderSite();
    applyStyle();
    buildAddons();
    bind();
    setSize(S.size);

    /* "Starting point" note: hide for good once dismissed. */
    var note = $("#k-start-note");
    if (note) {
      try { if (localStorage.getItem("kf-start-note-hidden") === "1") note.hidden = true; } catch (e) {}
      $("#k-start-x").addEventListener("click", function () { note.hidden = true; try { localStorage.setItem("kf-start-note-hidden", "1"); } catch (e) {} measurePanel(); });
    }

    $("#k-loading").hidden = true;
    show(S.sent && S.view === "done" ? "done" : (["design", "addons", "review"].indexOf(S.view) > -1 ? S.view : "design"), true);
    API.ready = true;
    emit("kf:ready");
  }

  /* ---------- fonts ---------- */
  function loadFonts() {
    var fams = [];
    fonts.forEach(function (f) { (f.google || []).forEach(function (g) { if (fams.indexOf(g) < 0) fams.push(g); }); });
    if (!fams.length) return;
    var l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?" + fams.map(function (f) { return "family=" + f; }).join("&") + "&display=swap";
    document.head.appendChild(l);
  }

  /* A design can opt in to its own colours/fonts (config: designs[i].palette / .font).
     They switch on the first tap of that design only, so the client can still change them afterward. */
  function autoStyle(letter) {
    var d = design(letter);
    if (!d || d.id !== letter || (!d.palette && !d.font) || S.autoStyled[letter]) return;
    S.autoStyled[letter] = true;
    if (d.palette && palettes.some(function (p) { return p.id === d.palette; })) S.palette = d.palette;
    if (d.font && fonts.some(function (f) { return f.id === d.font; })) S.font = d.font;
    applyStyle();
  }

  function applyStyle() {
    var p = palette(), f = font(), st = $("#site").style;
    var map = { bg: "--c-bg", surface: "--c-surface", text: "--c-text", muted: "--c-muted", primary: "--c-primary", onPrimary: "--c-on-primary",
      accent: "--c-accent", onAccent: "--c-on-accent", dark: "--c-dark", onDark: "--c-on-dark",
      hot: "--c-hot", cool: "--c-cool", soft: "--c-soft" }; /* last three are optional extras some themes add */
    Object.keys(map).forEach(function (k) { if (p[k]) st.setProperty(map[k], p[k]); else st.removeProperty(map[k]); });
    st.setProperty("--f-head", f.head);
    st.setProperty("--f-body", f.body);
    st.setProperty("--head-w", String(f.weight || 700));
    st.setProperty("--head-tt", f.upper ? "uppercase" : "none");
    st.setProperty("--head-ls", f.upper ? "0.01em" : "-0.015em");
    if (C.radius != null) st.setProperty("--radius", C.radius + "px");
  }

  /* ---------- preview ---------- */
  function renderSite() {
    $("#site").innerHTML = sections.map(function (s) { return '<section id="sec-' + s.id + '" data-sec="' + s.id + '"></section>'; }).join("");
    sections.forEach(function (s) { renderSection(s.id); });
  }

  function renderSection(id) {
    var letter = shown(id), layout = layoutFor(id, letter), idx = 0;
    sections.forEach(function (s, i) { if (s.id === id) idx = i; });
    var fn = window.KF_RENDER[id] && window.KF_RENDER[id][layout];
    var el = $("#sec-" + id);
    U.resetPh(idx * 3);
    el.className = "s s-" + id + " v-" + layout;
    el.setAttribute("aria-label", labelOf(id) + ", option " + letter);
    el.innerHTML = (fn ? fn(contentFor(id, letter), ctx()) : "") +
      '<span class="k-sec-tag" aria-hidden="true">' + esc(labelOf(id)) + " · " + letter + (S.picks[id] ? " ✓" : "") + "</span>";
    $$("[data-edit]", el).forEach(function (n) { n.setAttribute("data-orig", n.textContent); });
    applyEdits(el, id, letter);
    if (editing) setEditable(el, true);
  }

  function editsFor(id, letter) { return (S.edits[id] && S.edits[id][letter]) || {}; }
  function applyEdits(el, id, letter) {
    var e = editsFor(id, letter);
    $$("[data-edit]", el).forEach(function (n) {
      var rec = e[n.getAttribute("data-edit")];
      if (rec && typeof rec.text === "string") { n.textContent = rec.text; n.classList.add("edited"); }
    });
  }
  function setEditable(root, on) {
    $$("[data-edit]", root).forEach(function (n) {
      if (on) { n.setAttribute("contenteditable", "true"); n.setAttribute("spellcheck", "true"); }
      else { n.removeAttribute("contenteditable"); n.removeAttribute("spellcheck"); }
    });
  }
  function setEditing(on) {
    editing = on;
    var site = $("#site");
    site.classList.toggle("editing", on);
    setEditable(site, on);
    $("#k-edit-banner").hidden = !on;
    $$("#k-edit, #k-edit-mobile").forEach(function (b) { b.setAttribute("aria-pressed", on ? "true" : "false"); });
    if (!on) { document.body.classList.remove("typing"); if (document.activeElement && document.activeElement.closest && document.activeElement.closest("#site")) document.activeElement.blur(); }
  }

  function recordEdit(n) {
    var sec = n.closest("section[data-sec]");
    if (!sec) return;
    var id = sec.getAttribute("data-sec"), letter = shown(id), key = n.getAttribute("data-edit");
    /* textContent when it's plain text: innerText would bake in CSS uppercase from some fonts. */
    var text = (n.children.length ? n.innerText : n.textContent).replace(/\s+/g, " ").trim(), orig = n.getAttribute("data-orig") || "";
    S.edits[id] = S.edits[id] || {};
    S.edits[id][letter] = S.edits[id][letter] || {};
    if (text === orig.replace(/\s+/g, " ").trim()) { delete S.edits[id][letter][key]; n.classList.remove("edited"); }
    else { S.edits[id][letter][key] = { text: text, was: orig }; n.classList.add("edited"); }
    $$('[data-edit="' + key + '"]', sec).forEach(function (o) { if (o !== n) { o.textContent = text || orig; o.classList.toggle("edited", n.classList.contains("edited")); } });
    updatePanel();
    save();
  }

  /* ---------- panel ---------- */
  function buildPanel() {
    var html = steps.map(function (st, i) {
      var opts = "";
      if (st.type === "section") {
        opts = designs.map(function (d) {
          return '<button type="button" class="k-opt" data-sec="' + st.id + '" data-v="' + d.id + '" aria-pressed="false" aria-label="' +
            esc(st.label) + ": option " + d.id + (d.badge ? ", " + esc(d.badge) : "") + '"' + (d.blurb ? ' title="' + esc(d.blurb) + '"' : "") + '><span class="l">' + d.id + '</span><span class="d">Option ' + d.id + "</span>" +
            (d.badge ? '<span class="k-opt-badge">' + esc(d.badge) + "</span>" : "") + "</button>";
        }).join("");
      } else if (st.type === "palette") {
        opts = palettes.map(function (p) {
          return '<button type="button" class="k-opt" data-palette="' + esc(p.id) + '" aria-pressed="false" aria-label="Colours: ' + esc(p.name) + '">' +
            '<span class="k-swatch" aria-hidden="true"><i style="background:' + esc(p.primary) + '"></i><i style="background:' + esc(p.accent) + '"></i><i style="background:' + esc(p.surface) + '"></i></span>' +
            '<span class="d">' + esc(p.name) + "</span></button>";
        }).join("");
      } else {
        opts = fonts.map(function (f) {
          return '<button type="button" class="k-opt" data-font="' + esc(f.id) + '" aria-pressed="false" aria-label="Fonts: ' + esc(f.name) + '">' +
            '<span class="k-aa" aria-hidden="true" style="font-family:' + esc(f.head) + ";font-weight:" + (f.weight || 700) + '">Aa</span><span class="d">' + esc(f.name) + "</span></button>";
        }).join("");
      }
      var n = st.type === "section" ? designs.length : (st.type === "palette" ? palettes.length : fonts.length);
      return '<div class="k-row" id="row-' + st.id + '" data-step="' + i + '">' +
        '<div class="k-row-head"><h2>' + (i + 1) + ". " + esc(st.label) + "<small>" + esc(st.hint || "") + '</small></h2><span class="k-status" id="status-' + st.id + '"></span></div>' +
        '<p class="k-how">' + esc(howTo(st)) + "</p>" +
        '<div class="k-opts" role="group" aria-label="' + esc(st.label) + '" style="--n:' + Math.min(n, 4) + '">' + opts + "</div>" +
        (st.type === "section" ? reactRow(st) : "") +
        '<div class="k-edits-note" id="edits-' + st.id + '" hidden></div>' +
        (st.type === "section" ?
          '<details class="k-req"' + (S.requests[st.id] ? " open" : "") + '><summary>✎ Change the wording or ask for something different <span class="k-req-flag" id="reqflag-' + st.id + '"></span></summary>' +
          '<p class="k-req-tip">Tap <strong>Edit text</strong> to type your own words right on the page. For anything you can\'t change there (a different photo, another service, a new section), write it here.</p>' +
          '<textarea class="k-req-box" data-req="' + st.id + '" rows="3" placeholder="e.g. Use a photo of our shop here, add a service, say it in my own words…' + (SPEECH.ios ? " (Or tap the mic on your keyboard to talk.)" : "") + '">' + esc(S.requests[st.id] || "") + '</textarea>' +
          (SPEECH.supported ? '<div class="k-req-mic">' + SPEECH.button('data-mic-for="' + st.id + '"', "Talk instead of typing: " + esc(st.label)) + "</div>" : "") + "</details>" : "") +
        "</div>";
    }).join("");
    $("#k-rows").innerHTML = html;
    updatePanel();
  }

  /* One plain line of directions per step. */
  function howTo(st) {
    if (st.type === "palette") return "Pick the colours you like best.";
    if (st.type === "font") return "Pick a lettering style.";
    var ids = designs.map(function (d) { return d.id; });
    return "Pick your favourite version of this section. Tap " + (ids.length > 1 ? ids.slice(0, -1).join(", ") + " or " + ids[ids.length - 1] : ids[0]) + ".";
  }
  function reactRow(st) {
    return '<div class="k-react" id="react-' + st.id + '" role="group" aria-label="What do you think of this design?">' +
      '<span class="k-react-lbl" aria-hidden="true"></span>' +
      REACTIONS.map(function (r) {
        return '<button type="button" class="k-chip' + (r.feel ? " feel" : "") + '" data-react="' + r.id + '" data-rsec="' + st.id + '" aria-pressed="false">' +
          (r.emoji ? '<span aria-hidden="true">' + r.emoji + "</span> " : "") + esc(r.label) + "</button>";
      }).join("") + "</div>";
  }
  function reactionsFor(id, letter) { return (S.reactions[id] && Array.isArray(S.reactions[id][letter])) ? S.reactions[id][letter] : []; }
  function toggleReaction(id, letter, tag, forceOn) {
    if (!REACTIONS.some(function (r) { return r.id === tag; }) || !sections.some(function (s) { return s.id === id; })) return false;
    if (LETTERS.indexOf(letter) < 0) letter = shown(id);
    var list = reactionsFor(id, letter).slice(), i = list.indexOf(tag), isFeel = REACTIONS.filter(function (r) { return r.id === tag; })[0].feel;
    if (i > -1 && !forceOn) list.splice(i, 1);
    else if (i < 0) {
      if (isFeel) list = list.filter(function (x) { return !REACTIONS.some(function (r) { return r.feel && r.id === x; }); });
      list.push(tag);
    }
    S.reactions[id] = S.reactions[id] || {};
    if (list.length) S.reactions[id][letter] = list; else delete S.reactions[id][letter];
    if (!Object.keys(S.reactions[id]).length) delete S.reactions[id];
    updatePanel(); save();
    return true;
  }
  function reactionList() {
    var out = [];
    sections.forEach(function (s) {
      LETTERS.forEach(function (l) {
        var r = reactionsFor(s.id, l).slice().sort(function (x, y) { return REACTIONS.map(function (q) { return q.id; }).indexOf(x) - REACTIONS.map(function (q) { return q.id; }).indexOf(y); });
        if (r.length) out.push({ section: s.label, id: s.id, option: l, tags: r, text: r.map(reactionLabel).join(", ") });
      });
    });
    return out;
  }

  function countEdits(id) { return Object.keys(editsFor(id, shown(id))).length; }
  function pickedCount() { return sections.filter(function (s) { return S.picks[s.id]; }).length; }

  function updatePanel() {
    $$(".k-opt[data-sec]").forEach(function (b) {
      var id = b.getAttribute("data-sec"), v = b.getAttribute("data-v");
      b.setAttribute("aria-pressed", S.picks[id] === v ? "true" : "false");
      b.classList.toggle("showing", !S.picks[id] && shown(id) === v);
    });
    $$(".k-opt[data-palette]").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-palette") === S.palette ? "true" : "false"); });
    $$(".k-opt[data-font]").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-font") === S.font ? "true" : "false"); });
    sections.forEach(function (s) {
      var st = $("#status-" + s.id), n = countEdits(s.id), note = $("#edits-" + s.id);
      st.textContent = S.picks[s.id] ? "Picked: " + S.picks[s.id] : "Not picked yet";
      st.classList.toggle("done", !!S.picks[s.id]);
      note.hidden = !n;
      note.textContent = n ? "✎ " + n + " text change" + (n > 1 ? "s" : "") : "";
      var flag = $("#reqflag-" + s.id);
      if (flag) flag.textContent = (S.requests[s.id] || "").trim() ? "✓ Note saved" : "";
      var letter = shown(s.id), mine = reactionsFor(s.id, letter), row = $("#react-" + s.id);
      if (row) {
        row.setAttribute("aria-label", "What do you think of option " + letter + "?");
        $(".k-react-lbl", row).textContent = letter + ":";
        $$(".k-chip", row).forEach(function (c) { c.setAttribute("aria-pressed", mine.indexOf(c.getAttribute("data-react")) > -1 ? "true" : "false"); });
      }
    });
    $("#status-palette").textContent = palette().name;
    $("#status-font").textContent = font().name;
    var c = pickedCount();
    $("#k-progress-text").textContent = c + " of " + sections.length + " sections picked";
    $("#k-progress-fill").style.width = (c / sections.length * 100) + "%";
    $$(".k-row").forEach(function (r) { r.classList.toggle("active", +r.getAttribute("data-step") === S.step); });
    $("#k-step-count").textContent = (S.step + 1) + " / " + steps.length;
    $("#k-prev").disabled = S.step === 0;
    $("#k-next").setAttribute("aria-label", S.step === steps.length - 1 ? "Next: choose extras" : "Next section");
    emit("kf:change");
  }

  function setStep(i, scroll) {
    S.step = Math.max(0, Math.min(steps.length - 1, i));
    updatePanel();
    var st = steps[S.step];
    if (scroll && st.type === "section") scrollToSection(st.id);
    if (!MOBILE.matches) { var row = $("#row-" + st.id); if (row) row.scrollIntoView({ block: "nearest" }); }
    save();
  }

  function scrollToSection(id) {
    var el = $("#sec-" + id);
    if (!el) return;
    suppressScrollSync = Date.now() + 900;
    var offset = MOBILE.matches ? 56 : 56 + 68;
    var y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: REDUCED.matches ? "auto" : "smooth" });
    el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
  }

  function syncStepToScroll() {
    if (Date.now() < suppressScrollSync || S.view !== "design" || editing) return;
    if ($("#k-panel").classList.contains("expanded")) return;
    var line = window.innerHeight * 0.35, found = null;
    sections.forEach(function (s, i) {
      var r = $("#sec-" + s.id).getBoundingClientRect();
      if (r.top <= line && r.bottom > line) found = i;
    });
    if (found !== null && found !== S.step && steps[S.step].type === "section") { S.step = found; updatePanel(); save(); }
  }

  function measurePanel() {
    var h = MOBILE.matches && S.view === "design" ? $("#k-panel").offsetHeight : 0;
    document.documentElement.style.setProperty("--k-panel-h", h + "px");
  }

  function setSize(size) {
    S.size = size === "phone" ? "phone" : "desktop";
    $("#k-frame").classList.toggle("phone", S.size === "phone");
    $$(".k-seg button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-size") === S.size ? "true" : "false"); });
  }

  /* ---------- extras ---------- */
  function addonList() {
    var hide = C.addonsHide || [];
    return (window.KF_ADDONS || []).filter(function (a) { return hide.indexOf(a.id) < 0; });
  }
  function priceOf(id) { return window.KF_SHOW_PRICES === false ? null : ((window.KF_ADDON_PRICES || {})[id] || null); }
  function money(n) { return "$" + Number(n).toLocaleString("en-CA"); }
  function priceText(id) {
    var p = priceOf(id); if (!p) return "";
    var parts = [];
    if (p.setup) parts.push(money(p.setup));
    if (p.monthly) parts.push(money(p.monthly) + "/mo");
    return parts.join(" + ") + (p.unit ? " " + p.unit : "");
  }
  function totals() {
    var b = window.KF_SHOW_PRICES === false ? null : window.KF_BASE;
    var t = { setup: b ? b.setup || 0 : 0, monthly: b ? b.monthly || 0 : 0, priced: !!b };
    S.addons.forEach(function (id) { var p = priceOf(id); if (p) { t.priced = true; t.setup += p.setup || 0; t.monthly += p.monthly || 0; } });
    return t;
  }
  function totalText() {
    var t = totals(); if (!t.priced) return "";
    return money(t.setup) + " to start" + (t.monthly ? ", then " + money(t.monthly) + "/mo" : "");
  }
  function dueTodayText() {
    var t = totals(); if (!t.priced) return "";
    return money(t.setup + t.monthly) + " today (start + first month)";
  }
  function fits(a) { return C.industry && Array.isArray(a.for) && a.for.indexOf(C.industry) > -1; }

  function buildAddons() {
    var list = addonList(), groups = (window.KF_ADDON_GROUPS || []).slice();
    list.forEach(function (a) { if (groups.indexOf(a.group) < 0) groups.push(a.group); });
    var fitLabel = (window.KF_INDUSTRY_BADGE || {})[C.industry];
    $("#k-addon-groups").innerHTML = groups.map(function (g) {
      var items = list.filter(function (a) { return a.group === g; });
      if (!items.length) return "";
      items = items.filter(fits).concat(items.filter(function (a) { return !fits(a); }));
      return '<fieldset class="k-group"><legend>' + esc(g) + '</legend><div class="k-addons">' + items.map(function (a) {
        var badges = (a.popular ? '<span class="k-badge pop">Popular</span>' : "") + (fits(a) && fitLabel ? '<span class="k-badge fit">' + esc(fitLabel) + "</span>" : "");
        return '<label class="k-addon"><input type="checkbox" value="' + esc(a.id) + '"' + (S.addons.indexOf(a.id) > -1 ? " checked" : "") + ">" +
          '<span><span class="k-addon-name">' + esc(a.name) + '</span><span class="k-addon-desc">' + esc(a.desc) + "</span>" +
          (priceText(a.id) ? '<span class="k-addon-price">' + esc(priceText(a.id)) + "</span>" : "") +
          (badges ? '<span class="k-badges">' + badges + "</span>" : "") + "</span></label>";
      }).join("") + "</div></fieldset>";
    }).join("");
    updateAddonCount();
  }
  function updateAddonCount() {
    var valid = addonList().map(function (a) { return a.id; });
    S.addons = S.addons.filter(function (id) { return valid.indexOf(id) > -1; });
    var n = S.addons.length;
    var tt = totalText();
    $("#k-addon-count").textContent = n + (n === 1 ? " extra" : " extras") + " picked" + (tt ? " · " + tt : "");
  }

  /* ---------- review ---------- */
  function addonName(id) { var a = addonList().filter(function (x) { return x.id === id; })[0]; return a ? a.name : id; }

  function requestList() {
    return sections.filter(function (s) { return (S.requests[s.id] || "").trim(); })
      .map(function (s) { return { section: s.label, text: S.requests[s.id].trim() }; });
  }

  function textChanges() {
    var out = [];
    sections.forEach(function (s) {
      var e = editsFor(s.id, shown(s.id));
      Object.keys(e).forEach(function (k) { out.push({ section: s.label, key: k, was: e[k].was, text: e[k].text }); });
    });
    return out;
  }

  function sectionsText() {
    return sections.map(function (s) {
      var d = design(shown(s.id));
      return s.label + ": " + (S.picks[s.id] ? "Option " + S.picks[s.id] : "Not picked (saw Option " + shown(s.id) + ")") + (d.name ? " - " + d.name : "");
    }).join("\n");
  }

  function renderSummary() {
    var tc = textChanges();
    var sec = sections.map(function (s) {
      return "<dt>" + esc(s.label) + "</dt><dd>" + (S.picks[s.id] ? "Option " + esc(S.picks[s.id]) + (design(S.picks[s.id]).badge ? " (" + esc(design(S.picks[s.id]).badge) + ")" : "") : '<span class="warn">Not picked (showing ' + esc(shown(s.id)) + ")</span>") + "</dd>";
    }).join("");
    var missing = sections.length - pickedCount();
    $("#k-summary").innerHTML =
      '<section class="k-summary"><h2>Sections <button type="button" class="k-btn small" data-go="design">Change</button></h2>' +
        (missing ? '<p class="none">' + missing + " section" + (missing > 1 ? "s" : "") + " not picked. That's fine, we'll use what you saw, or you can go back.</p>" : "") +
        "<dl>" + sec + "</dl></section>" +
      '<section class="k-summary"><h2>Style <button type="button" class="k-btn small" data-go="design" data-step-to="palette">Change</button></h2>' +
        "<dl><dt>Colours</dt><dd>" + esc(palette().name) + "</dd><dt>Fonts</dt><dd>" + esc(font().name) + "</dd></dl></section>" +
      '<section class="k-summary"><h2>Wording changes <button type="button" class="k-btn small" data-go="design">Change</button></h2>' +
        (tc.length ? "<ul>" + tc.map(function (t) { return "<li><strong>" + esc(t.section) + ":</strong> “" + esc(t.text) + "”</li>"; }).join("") + "</ul>"
                   : '<p class="none">No changes. Use “Edit text” on the design step to change any wording.</p>') + "</section>" +
      '<section class="k-summary"><h2>What you liked <button type="button" class="k-btn small" data-go="design">Change</button></h2>' +
        (reactionList().length ? "<ul>" + reactionList().map(function (r) { return "<li><strong>" + esc(r.section) + " (Option " + esc(r.option) + "):</strong> " + esc(r.text) + "</li>"; }).join("") + "</ul>"
                   : '<p class="none">Nothing yet. Tap the little reactions under each section (like “Love it” or “The photos”) to tell us what you like.</p>') + "</section>" +
      '<section class="k-summary"><h2>Other changes you asked for <button type="button" class="k-btn small" data-go="design">Change</button></h2>' +
        (requestList().length ? "<ul>" + requestList().map(function (r) { return "<li><strong>" + esc(r.section) + ":</strong> " + esc(r.text) + "</li>"; }).join("") + "</ul>"
                   : '<p class="none">None. Each section has a box where you can describe anything else you\'d like changed.</p>') + "</section>" +
      '<section class="k-summary"><h2>Extras <button type="button" class="k-btn small" data-go="addons">Change</button></h2>' +
        (S.addons.length ? "<ul>" + S.addons.map(function (id) { return "<li>" + esc(addonName(id)) + (priceText(id) ? ' <span class="k-addon-price inline">' + esc(priceText(id)) + "</span>" : "") + "</li>"; }).join("") + "</ul>" +
          ""
          : '<p class="none">None picked.</p>') + "</section>" +
      (totalText() ? '<section class="k-summary"><h2>Your price</h2><p class="k-total">' +
        (window.KF_BASE ? esc(window.KF_BASE.name) + ": " + money(window.KF_BASE.setup) + " + " + money(window.KF_BASE.monthly) + "/mo<br>" : "") +
        "<strong>" + esc(totalText()) + "</strong><br>" + esc(dueTodayText()) + '<br><span class="k-note">' + esc(window.KF_PRICE_NOTE || "") + "</span></p></section>" : "") +
      '<p style="margin:0 0 16px"><button type="button" class="k-btn small" id="k-reset">Start over</button></p>';
    if (typeof S.form.business !== "string") S.form.business = C.businessName;
    ["name", "business", "email", "phone", "notes"].forEach(function (k) { var f = $("#f-" + k); if (f && typeof S.form[k] === "string") f.value = S.form[k]; });
  }

  function payload() {
    var tc = textChanges();
    var picks = {};
    sections.forEach(function (s) { picks[s.id] = { option: shown(s.id), picked: !!S.picks[s.id] }; });
    var edits = {};
    sections.forEach(function (s) { var e = editsFor(s.id, shown(s.id)); if (Object.keys(e).length) edits[s.id] = e; });
    var f = function (k) { return ($("#f-" + k).value || "").trim(); };
    return {
      "form-name": "site-picks",
      "bot-field": ($('#k-send [name="bot-field"]').value || ""),
      client: slug + " (" + C.businessName + ")",
      name: f("name"), business: f("business"), email: f("email"), phone: f("phone"), notes: f("notes"),
      sections: sectionsText(),
      style: "Colours: " + palette().name + "\nFonts: " + font().name,
      text_changes: tc.length ? tc.map(function (t) { return "[" + t.section + " / " + t.key + "]\nWas: " + t.was + "\nNow: " + t.text; }).join("\n\n") : "None",
      reactions: reactionList().length ? reactionList().map(function (r) { return "[" + r.section + " / Option " + r.option + "] " + r.text; }).join("\n") : "None",
      helper_used: S.helperUsed ? "yes" : "no",
      change_requests: requestList().length ? requestList().map(function (r) { return "[" + r.section + "] " + r.text; }).join("\n\n") : "None",
      addons: S.addons.length ? S.addons.map(function (id) { return addonName(id) + (priceText(id) ? " (" + priceText(id) + ")" : ""); }).join("\n") + "" : "None",
      price_estimate: totalText() ? totalText() + " | " + dueTodayText() : "",
      picks_json: JSON.stringify({ client: slug, business: C.businessName, picks: picks, palette: S.palette, font: S.font, edits: edits, requests: S.requests, reactions: S.reactions, helperUsed: !!S.helperUsed, addons: S.addons, page: location.href, sentAt: new Date().toISOString() })
    };
  }

  function invalid(id, msg) {
    var box = $("#k-send-error"), el = $("#" + id);
    box.textContent = msg; box.hidden = false;
    el.setAttribute("aria-invalid", "true"); el.focus();
  }

  function submit(ev) {
    ev.preventDefault();
    var box = $("#k-send-error");
    box.hidden = true;
    $$("#k-send [aria-invalid]").forEach(function (n) { n.removeAttribute("aria-invalid"); });
    if (!$("#f-name").value.trim()) return invalid("f-name", "Please add your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($("#f-email").value.trim())) return invalid("f-email", "Please add a valid email so we can reply.");
    var data = payload(), btn = $("#k-submit");
    btn.disabled = true; btn.textContent = "Sending…";
    fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(data).toString() })
      .then(function (r) { if (!r.ok) throw new Error("status " + r.status); })
      .then(function () {
        S.sent = true;
        var first = data.name.split(" ")[0];
        $("#k-done-title").textContent = "Thanks, " + first + "! Your picks are in.";
        $("#k-done-text").innerHTML = esc(SET.owner || "We") + " will take your picks and notes, customize the site for your business, and send you back a polished version. " + (contactLine() ? "Questions in the meantime? " + contactLine() : "");
        show("done");
      })
      .catch(function () {
        var body = "Picks for " + C.businessName + "\n\n" + data.sections + "\n\n" + data.style + "\n\nExtras:\n" + data.addons + "\n\nText changes:\n" + data.text_changes + "\n\nOther changes:\n" + data.change_requests + "\n\nWhat I liked:\n" + data.reactions +
          "\n\nName: " + data.name + "\nEmail: " + data.email + "\nPhone: " + data.phone + "\nNotes: " + data.notes;
        var mail = SET.email ? ' or <a href="mailto:' + esc(SET.email) + "?subject=" + encodeURIComponent("Website picks - " + C.businessName) + "&body=" + encodeURIComponent(body.slice(0, 1800)) + '">email your picks instead</a>' : "";
        box.innerHTML = "Sorry, that didn't send. Please check your connection and try again" + mail + ".";
        box.hidden = false;
      })
      .then(function () { btn.disabled = false; btn.textContent = "Send my picks"; save(); });
  }

  /* ---------- views ---------- */
  function show(view, initial) {
    ["design", "addons", "review", "done"].forEach(function (v) { $("#view-" + v).hidden = v !== view; });
    S.view = view;
    $$(".k-steps button").forEach(function (b) {
      var v = b.getAttribute("data-view");
      if (v === view || (view === "done" && v === "review")) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
    });
    if (view !== "design" && editing) setEditing(false);
    document.body.setAttribute("data-view", view);
    if (view === "review") renderSummary();
    if (view === "addons") updateAddonCount();
    measurePanel();
    if (!initial) {
      window.scrollTo(0, 0);
      var h = $("#view-" + view + " h1");
      if (h) h.focus({ preventScroll: true });
    }
    if (view === "design" && initial && steps[S.step].type === "section" && S.step > 0) setTimeout(function () { scrollToSection(steps[S.step].id); }, 50);
    save();
    emit("kf:change");
  }

  /* ---------- events ---------- */
  function bind() {
    document.addEventListener("click", function (e) {
      var t = e.target.closest("button");
      if (!t) {
        var sec = !editing && e.target.closest("#site section[data-sec]");
        if (sec) { var id = sec.getAttribute("data-sec"); steps.forEach(function (s, i) { if (s.id === id && i !== S.step) setStep(i, false); }); }
        return;
      }
      if (t.hasAttribute("data-react")) {
        toggleReaction(t.getAttribute("data-rsec"), shown(t.getAttribute("data-rsec")), t.getAttribute("data-react"));
      } else if (t.hasAttribute("data-mic-for")) {
        var mid = t.getAttribute("data-mic-for");
        SPEECH.toggle(t, function (txt) { addNote(mid, txt, true); });
      } else if (t.hasAttribute("data-sec")) {
        var sid = t.getAttribute("data-sec");
        S.picks[sid] = t.getAttribute("data-v");
        autoStyle(S.picks[sid]);
        renderSection(sid);
        steps.forEach(function (s, i) { if (s.id === sid) S.step = i; });
        updatePanel(); scrollToSection(sid); save();
        emit("kf:pick", { section: sid, option: S.picks[sid] });
      } else if (t.hasAttribute("data-palette")) {
        S.palette = t.getAttribute("data-palette");
        steps.forEach(function (s, i) { if (s.id === "palette") S.step = i; });
        applyStyle(); updatePanel(); save();
      } else if (t.hasAttribute("data-font")) {
        S.font = t.getAttribute("data-font");
        steps.forEach(function (s, i) { if (s.id === "font") S.step = i; });
        applyStyle(); updatePanel(); save();
      } else if (t.hasAttribute("data-go")) {
        show(t.getAttribute("data-go"));
        var to = t.getAttribute("data-step-to");
        if (to) steps.forEach(function (s, i) { if (s.id === to) setStep(i, false); });
      } else if (t.hasAttribute("data-view")) {
        show(t.getAttribute("data-view"));
      } else if (t.hasAttribute("data-size")) {
        setSize(t.getAttribute("data-size")); save();
      } else if (t.id === "k-prev") {
        setStep(S.step - 1, true);
      } else if (t.id === "k-next") {
        if (S.step === steps.length - 1) show("addons"); else setStep(S.step + 1, true);
      } else if (t.id === "k-expand") {
        var p = $("#k-panel"), on = !p.classList.contains("expanded");
        p.classList.toggle("expanded", on);
        t.setAttribute("aria-expanded", on ? "true" : "false");
        t.textContent = on ? "Show less" : "All sections";
        if (!on) { var r = $("#row-" + steps[S.step].id); if (r) r.scrollIntoView({ block: "nearest" }); }
        measurePanel();
      } else if (t.id === "k-edit" || t.id === "k-edit-mobile") {
        setEditing(!editing);
      } else if (t.id === "k-edit-done") {
        setEditing(false);
      } else if (t.id === "k-reset") {
        if (window.confirm("Clear all your picks and start again?")) {
          S = { picks: {}, palette: C.defaultPalette || palettes[0].id, font: C.defaultFont || fonts[0].id, edits: {}, requests: {}, reactions: {}, addons: [], form: S.form, view: "design", step: 0, size: S.size, sent: false, helperUsed: S.helperUsed };
          renderSite(); applyStyle(); buildPanel(); buildAddons(); updatePanel(); show("design");
        }
      }
    });

    var site = $("#site");
    $("#k-rows").addEventListener("input", function (e) {
      var t = e.target; if (!t.matches || !t.matches(".k-req-box")) return;
      var id = t.getAttribute("data-req"), v = t.value;
      if (v.trim()) S.requests[id] = v; else delete S.requests[id];
      var fl = $("#reqflag-" + id); if (fl) fl.textContent = v.trim() ? "✓ Note saved" : "";
      save();
    });
    site.addEventListener("input", function (e) { var n = e.target.closest && e.target.closest("[data-edit]"); if (n) recordEdit(n); });
    site.addEventListener("paste", function (e) {
      if (!editing) return;
      e.preventDefault();
      var txt = (e.clipboardData || window.clipboardData).getData("text").replace(/\s+/g, " ");
      document.execCommand("insertText", false, txt);
    });
    site.addEventListener("keydown", function (e) {
      if (editing && e.key === "Enter" && e.target.closest("[data-edit]")) { e.preventDefault(); e.target.blur(); }
    });
    site.addEventListener("focusin", function (e) { if (editing && e.target.closest("[data-edit]") && MOBILE.matches) document.body.classList.add("typing"); });
    site.addEventListener("focusout", function () { setTimeout(function () { if (!site.contains(document.activeElement)) document.body.classList.remove("typing"); }, 50); });

    $("#k-addon-groups").addEventListener("change", function (e) {
      var cb = e.target;
      if (cb.type !== "checkbox") return;
      var i = S.addons.indexOf(cb.value);
      if (cb.checked && i < 0) S.addons.push(cb.value);
      if (!cb.checked && i > -1) S.addons.splice(i, 1);
      updateAddonCount(); save();
    });

    var form = $("#k-send");
    form.addEventListener("submit", submit);
    form.addEventListener("input", function (e) {
      var k = e.target.name;
      if (["name", "business", "email", "phone", "notes"].indexOf(k) > -1) { S.form[k] = e.target.value; e.target.removeAttribute("aria-invalid"); save(); }
    });

    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { ticking = false; syncStepToScroll(); });
    }, { passive: true });

    window.addEventListener("pagehide", flush);
    document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden") flush(); });

    if (window.ResizeObserver) new ResizeObserver(measurePanel).observe($("#k-panel"));
    window.addEventListener("resize", measurePanel);
    if (MOBILE.addEventListener) MOBILE.addEventListener("change", measurePanel);
  }

  /* ---------- small API for the design helper ---------- */
  function emit(name, detail) {
    try { document.dispatchEvent(new CustomEvent(name, { detail: detail || {} })); } catch (e) { /* old browser: ignore */ }
  }
  function stepIndex(id) { var n = -1; steps.forEach(function (s, i) { if (s.id === id) n = i; }); return n; }
  function sectionText(id) {
    var el = $("#sec-" + id), out = {}, n = 0;
    if (!el) return out;
    $$("[data-edit]", el).forEach(function (node) {
      var k = node.getAttribute("data-edit");
      if (out.hasOwnProperty(k) || n >= 30) return;
      out[k] = node.textContent.replace(/\s+/g, " ").trim().slice(0, 300); n++;
    });
    return out;
  }
  /* Append text to a section's change-request box (opens it). */
  function addNote(id, text, focus) {
    var box = $('.k-req-box[data-req="' + id + '"]');
    text = String(text || "").trim();
    if (!box || !text) return false;
    var cur = (S.requests[id] || "").replace(/\s+$/, "");
    S.requests[id] = cur ? cur + (/[.!?]$/.test(cur) ? " " : ". ") + text : text;
    box.value = S.requests[id];
    if (focus) { var d = box.closest("details"); if (d) d.open = true; box.focus(); }
    updatePanel();
    save();
    return true;
  }
  /* Put new wording into an editable field, through the same path as typing it. */
  function applyText(id, key, text) {
    var sec = $("#sec-" + id);
    text = String(text || "").replace(/\s+/g, " ").trim();
    if (!sec || !text || !/^[\w.\-]{1,60}$/.test(key)) return false;
    var n = $('[data-edit="' + key + '"]', sec);
    if (!n) return false;
    n.textContent = text;
    recordEdit(n);
    return true;
  }
  function gotoStep(id) {
    if (id === "addons" || id === "review") { show(id); return true; }
    var i = stepIndex(id);
    if (i < 0) return false;
    if (S.view !== "design") show("design");
    setStep(i, true);
    return true;
  }
  var API = {
    ready: false,
    reactions: REACTIONS,
    state: function () {
      var st = steps[S.step] || {};
      return { view: S.view, step: { type: st.type, id: st.id, label: st.label, hint: st.hint, index: S.step, total: steps.length },
        shown: st.type === "section" ? shown(st.id) : null, picked: st.type === "section" ? (S.picks[st.id] || null) : null,
        designName: st.type === "section" ? (design(shown(st.id)).name || "") : "",
        options: designs.map(function (d) { return d.id; }) };
    },
    slug: function () { return slug; },
    context: function () {
      var st = steps[S.step] || {}, cur = S.view === "design" && st.type === "section" ? st.id : null;
      var rx = {};
      reactionList().forEach(function (r) { rx[r.id] = rx[r.id] || {}; rx[r.id][r.option] = r.tags.map(reactionLabel); });
      return {
        business: C.businessName, industry: C.industry || "",
        view: S.view, step: { type: st.type || "", id: st.id || "", label: st.label || "", index: S.step + 1, total: steps.length },
        sections: sections.map(function (s) { return { id: s.id, label: s.label, picked: S.picks[s.id] || "", showing: shown(s.id), edits: countEdits(s.id), note: (S.requests[s.id] || "").slice(0, 200) }; }),
        designs: designs.map(function (d) { return { id: d.id, name: d.name || "" }; }),
        palette: { current: palette().name, options: palettes.map(function (p) { return p.name; }) },
        font: { current: font().name, options: fonts.map(function (f) { return f.name; }) },
        extras: S.addons.map(addonName),
        reactions: rx,
        current: cur ? { id: cur, label: labelOf(cur), option: shown(cur), text: sectionText(cur) } : null
      };
    },
    sectionText: sectionText,
    sectionLabel: labelOf,
    hasSection: function (id) { return sections.some(function (s) { return s.id === id; }); },
    goto: gotoStep,
    next: function () {
      if (S.view === "design") { if (S.step >= steps.length - 1) show("addons"); else setStep(S.step + 1, true); }
      else if (S.view === "addons") show("review");
    },
    applyText: applyText,
    addNote: function (id, text) { return addNote(id, text, false); },
    react: function (id, letter, tag) { return toggleReaction(id, letter, tag, true); },
    reactionsFor: reactionsFor,
    markHelperUsed: function () { if (!S.helperUsed) { S.helperUsed = true; save(); } },
    settings: SET
  };
  window.KF_PICKER = API;

  boot();
})();
