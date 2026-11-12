/* Design helper: a small chat that walks the client through the picker.
   Talks to /.netlify/functions/guide when it's set up; otherwise uses the built-in tips below. */
(function () {
  "use strict";

  var ENDPOINT = "/.netlify/functions/guide";
  var MAX_LOG = 40, MAX_SEND = 12, MAX_LEN = 600;
  var P, SET, SP, storeKey, G, offline = false, busy = false;
  var root, bubble, panel, log, input, sendBtn, micBtn, closeBtn, typingEl;
  var MOBILE = window.matchMedia("(max-width: 959px)");

  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }

  /* ---------- storage ---------- */
  function save() { try { localStorage.setItem(storeKey, JSON.stringify(G)); } catch (e) { /* ignore */ } }
  function load() {
    G = { msgs: [], greeted: false, walk: false, asked: {} };
    try {
      var d = JSON.parse(localStorage.getItem(storeKey) || "null");
      if (d && typeof d === "object") {
        if (Array.isArray(d.msgs)) G.msgs = d.msgs.filter(function (m) { return m && (m.r === "me" || m.r === "bot") && typeof m.t === "string"; }).slice(-MAX_LOG);
        G.greeted = !!d.greeted; G.walk = !!d.walk;
        if (d.asked && typeof d.asked === "object") G.asked = d.asked;
      }
    } catch (e) { /* start fresh */ }
  }

  /* ---------- quick replies ---------- */
  var CHIPS = {
    walk: { l: "Walk me through it", intent: "walk" },
    what: { l: "What do I do here?", intent: "what", say: "What do I do here?" },
    wording: { l: "Help me with wording", intent: "wording", say: "Can you help me with the wording for this part?" },
    done: { l: "I'm done, what's next?", intent: "done", say: "I'm done, what's next?" },
    next: { l: "Next step", intent: "next" },
    extras: { l: "Take me to extras", intent: "goto", to: "addons" },
    review: { l: "Take me to Send", intent: "goto", to: "review" }
  };
  function baseChips() { return [CHIPS.what, CHIPS.wording, CHIPS.done]; }
  function reactChips(sec, v) {
    return P.reactions.map(function (r) { return { l: (r.emoji ? r.emoji + " " : "") + r.label, react: r.id, sec: sec, v: v }; });
  }

  /* ---------- built-in tips (used when the live helper isn't available) ---------- */
  function owner() { return (SET.owner || "Dan") + (SET.studio ? " at " + SET.studio : ""); }
  function tipFor(st) {
    var s = st || P.state();
    if (s.view === "addons") return { t: "These are optional extras. Tick anything that sounds useful, or leave it and " + owner() + " can talk it through with you. When you're ready, tap Review & send.", q: [CHIPS.next, CHIPS.what] };
    if (s.view === "review") return { t: "Last step: check your picks, add your name and email, then tap Send my picks. Your picks are a starting point: " + owner() + " will customize the site for your business from your choices and notes, and send you back a polished version.", q: [CHIPS.what] };
    if (s.view === "done") return { t: "You're all set, your picks are in! " + owner() + " will customize the site for your business and send you back a polished version.", q: [] };
    var step = s.step;
    var where = "Step " + (step.index + 1) + " of " + step.total + ": ";
    if (step.type === "palette") return { t: where + "pick a colour theme. Tap each one and watch the preview change.", q: [CHIPS.next, CHIPS.what] };
    if (step.type === "font") return { t: where + "pick a lettering style. Tap each one to see it on your headings.", q: [CHIPS.next, CHIPS.what] };
    return {
      t: MOBILE.matches ? where + step.label + ". Tap " + orList(s.options || ["A", "B", "C"]) + " at the bottom to try a look. Like it? Tap \u2713 Pick."
                        : where + step.label + ". Tap " + orList(s.options || ["A", "B", "C"]) + " in the panel to pick the one you like.",
      q: [CHIPS.next].concat(baseChips().slice(1, 2)),
      ask: step.id
    };
  }
  function optName(v) { return P.optionName ? P.optionName(v) : "Option " + v; }
  function origLine() { var o = P.originalLetter && P.originalLetter(); return o ? " " + o + " is your current site (Original)." : ""; }
  /* Where the notes box and Edit text live: behind the "More" button on phones, in the side panel on computers. */
  function boxWhere() { return MOBILE.matches ? "tap the \u22ef More button on the bottom bar and write it in the box there" : "write it in the box under that section's options"; }
  function editWhere() { return MOBILE.matches ? "tap \u22ef More, then Edit text" : "tap Edit text"; }
  function orList(a) { return a.length > 1 ? a.slice(0, -1).join(", ") + " or " + a[a.length - 1] : (a[0] || ""); }
  function askLine(sec, v) {
    return { t: "What do you think of " + (/^Option/.test(optName(v)) ? optName(v) : "your current site (Original)") + " for " + P.sectionLabel(sec) + "? Tap any that fit.", q: reactChips(sec, v).concat([CHIPS.next, CHIPS.what]) };
  }

  function localAnswer(text, intent) {
    var s = P.state(), low = (text || "").toLowerCase();
    if (intent === "wording" || (!intent && /\b(word|wording|text|say|write|headline|title|change the)\b/.test(low))) {
      return { t: "To use your own words, " + editWhere() + ", then tap any heading or paragraph and type. Want something else changed, like a photo? " + boxWhere().charAt(0).toUpperCase() + boxWhere().slice(1) + ".", q: [CHIPS.next, CHIPS.done] };
    }
    if (intent === "done" || (!intent && /\b(done|finished|what'?s next|next|send)\b/.test(low))) {
      if (s.view === "design") return { t: "Nice! Next you can tick any extras you'd like, then review and send your picks to " + owner() + ".", q: [CHIPS.extras, CHIPS.review] };
      if (s.view === "addons") return { t: "Great. Tap Review & send to check everything, add your name and email, and send it over.", q: [CHIPS.review] };
      return tipFor(s);
    }
    if (intent === "what") return tipFor(s);
    if (/(price|cost|how much|\$|charge|pay|fee|budget)/.test(low)) return { t: "Good question for " + owner() + ". He'll go over pricing with you after you send your picks, and there's no commitment here.", q: baseChips() };
    if (/(how long|when|timeline|ready|launch|deadline)/.test(low)) return { t: owner() + " will talk timing with you once he's seen your picks. You can mention any deadline in the notes on the Send screen.", q: baseChips() };
    if (/(photo|picture|image|logo|pic)/.test(low)) return { t: "The photos here are just placeholders. To ask for your own, " + boxWhere() + " (for example, \"use our shop photo\") and " + owner() + " will sort it out.", q: baseChips() };
    if (/(colou?r|font|letter)/.test(low)) return { t: "Colours and fonts come after the sections. You can jump there any time.", q: [{ l: "Show me colours", intent: "goto", to: "palette" }, CHIPS.what] };
    if (/(who are you|are you (a )?(bot|robot|real|human|person)|what are you)/.test(low)) return { t: "I'm the design helper for this page, an assistant that walks you through it. " + owner() + " is the real person who'll follow up with you.", q: baseChips() };
    if (/(extra|add-?on|booking|store|blog)/.test(low)) return { t: "Extras are the next screen after the design. Tick anything you're curious about, and " + owner() + " can explain more.", q: [CHIPS.extras, CHIPS.what] };
    var tip = tipFor(s);
    return { t: "I can't answer that one here, but you can write it in the notes on the Send screen and " + owner() + " will get back to you. " + tip.t, q: tip.q };
  }

  /* ---------- actions from the live helper ---------- */
  function cleanActions(list) {
    var out = [];
    if (!Array.isArray(list)) return out;
    list.slice(0, 5).forEach(function (a) {
      if (!a || typeof a !== "object" || typeof a.type !== "string") return;
      var sec = typeof a.section === "string" ? a.section : "";
      if (a.type === "goto" && (P.hasSection(sec) || ["palette", "font", "addons", "review"].indexOf(sec) > -1)) out.push({ type: "goto", section: sec });
      else if (a.type === "suggest_text" && P.hasSection(sec) && typeof a.key === "string" && /^[\w.\-]{1,60}$/.test(a.key) &&
               typeof a.text === "string" && a.text.trim() && a.text.length <= 400 && P.sectionText(sec).hasOwnProperty(a.key)) out.push({ type: "suggest_text", section: sec, key: a.key, text: a.text.trim() });
      else if (a.type === "note" && P.hasSection(sec) && typeof a.text === "string" && a.text.trim() && a.text.length <= 400) out.push({ type: "note", section: sec, text: a.text.trim() });
    });
    return out.slice(0, 3);
  }

  function runAction(m, i) {
    var a = m.a && m.a[i];
    if (!a) return;
    var ok = false;
    if (a.type === "goto") ok = P.goto(a.section);
    else if (a.type === "suggest_text") { P.goto(a.section); ok = P.applyText(a.section, a.key, a.text); }
    else if (a.type === "note") { P.goto(a.section); ok = P.addNote(a.section, a.text); }
    if (ok && a.type !== "goto") { a.done = true; P.markHelperUsed(); }
    save(); render();
    if (ok && a.type !== "goto") announce(a.type === "note" ? "Added to your notes." : "Wording updated on the page.");
  }

  /* ---------- messages ---------- */
  function push(m) { G.msgs.push(m); if (G.msgs.length > MAX_LOG) G.msgs = G.msgs.slice(-MAX_LOG); save(); render(); }
  function bot(r) { push({ r: "bot", t: r.t, q: r.q || [], a: r.a || [] }); if (r.ask) maybeAsk(r.ask); }
  function maybeAsk(sec) {
    var v = P.state().shown;
    if (!v || !P.hasSection(sec)) return;
    var k = sec + ":" + v;
    if (G.asked[k]) return;
    G.asked[k] = 1;
    push({ r: "bot", t: askLine(sec, v).t, q: askLine(sec, v).q, a: [] });
  }

  function announce(t) { var el = $("#kg-sr"); el.textContent = ""; setTimeout(function () { el.textContent = t; }, 30); }

  function chipHtml(c, i) {
    var pressed = "";
    if (c.react) pressed = ' aria-pressed="' + (P.reactionsFor(c.sec, c.v).indexOf(c.react) > -1 ? "true" : "false") + '"';
    return '<button type="button" class="kg-chip" data-chip="' + i + '"' + pressed + ">" + esc(c.l) + "</button>";
  }

  function render() {
    if (!log) return;
    var last = -1;
    G.msgs.forEach(function (m, i) { if (m.r === "bot") last = i; });
    log.innerHTML = G.msgs.map(function (m, i) {
      var acts = (m.a || []).map(function (a, j) {
        if (a.type === "goto") return '<button type="button" class="kg-act" data-msg="' + i + '" data-act="' + j + '">Show me</button>';
        var lbl = a.type === "note" ? "Add to my notes" : "Use this wording";
        return '<div class="kg-sugg"><q>' + esc(a.text) + "</q>" +
          (a.done ? '<span class="kg-done">✓ ' + (a.type === "note" ? "Added" : "Used") + "</span>"
                  : '<button type="button" class="kg-act primary" data-msg="' + i + '" data-act="' + j + '">' + lbl + "</button>") + "</div>";
      }).join("");
      var chips = i === last && m.q && m.q.length && !busy ? '<div class="kg-chips">' + m.q.map(chipHtml).join("") + "</div>" : "";
      return '<div class="kg-msg ' + (m.r === "me" ? "me" : "bot") + '"><p>' + esc(m.t) + "</p>" + acts + "</div>" + chips;
    }).join("") + (busy ? '<div class="kg-msg bot kg-typing"><span class="k-sr">Design helper is typing</span><i></i><i></i><i></i></div>' : "");
    log.scrollTop = log.scrollHeight;
  }

  /* ---------- talking to the server ---------- */
  function history() {
    return G.msgs.slice(-MAX_SEND).map(function (m) { return { role: m.r === "me" ? "user" : "assistant", content: m.t.slice(0, 1200) }; });
  }

  function ask(text, intent) {
    if (busy) return;
    if (offline) { bot(localAnswer(text, intent)); return; }
    busy = true; render();
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 20000);
    fetch(ENDPOINT, {
      method: "POST", headers: { "Content-Type": "application/json" }, signal: ctrl ? ctrl.signal : undefined,
      body: JSON.stringify({ messages: history(), context: P.context() })
    })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error("status " + r.status)); })
      .then(function (d) {
        busy = false;
        if (d && d.fallback) { offline = true; bot(localAnswer(text, intent)); return; }
        if (!d || typeof d.reply !== "string" || !d.reply.trim()) throw new Error("bad reply");
        var acts = cleanActions(d.actions);
        acts.forEach(function (a) { if (a.type === "goto") P.goto(a.section); });
        bot({ t: d.reply.trim().slice(0, 900), a: acts, q: baseChips() });
      })
      .catch(function () { busy = false; bot(localAnswer(text, intent)); })
      .then(function () { clearTimeout(timer); });
  }

  function userSays(text, intent) {
    text = String(text || "").replace(/\s+/g, " ").trim().slice(0, MAX_LEN);
    if (!text) return;
    P.markHelperUsed();
    push({ r: "me", t: text });
    ask(text, intent);
  }

  function onChip(c) {
    P.markHelperUsed();
    if (c.react) {
      P.react(c.sec, c.v, c.react);
      render();
      announce("Saved: " + c.l.replace(/^\S+\s/, ""));
      return;
    }
    if (c.intent === "walk") { G.walk = true; push({ r: "me", t: c.l }); bot(tipFor()); return; }
    if (c.intent === "next") {
      G.walk = true; push({ r: "me", t: c.l });
      P.next();
      setTimeout(function () { bot(tipFor()); }, 60);
      return;
    }
    if (c.intent === "goto") { push({ r: "me", t: c.l }); P.goto(c.to); setTimeout(function () { bot(tipFor()); }, 60); return; }
    userSays(c.say || c.l, c.intent);
  }

  /* ---------- open / close ---------- */
  function isOpen() { return !panel.hidden; }
  function open(focus) {
    panel.hidden = false;
    bubble.setAttribute("aria-expanded", "true");
    root.classList.add("open");
    render();
    /* On phones, focus the conversation so the keyboard doesn't jump up straight away. */
    if (focus) setTimeout(function () { (MOBILE.matches ? log : input).focus({ preventScroll: true }); }, 30);
  }
  function close() {
    panel.hidden = true;
    bubble.setAttribute("aria-expanded", "false");
    root.classList.remove("open");
    document.body.classList.remove("kg-typing");
    if (window.KF_SPEECH) window.KF_SPEECH.stop();
    bubble.focus({ preventScroll: true });
  }

  function build() {
    root = document.createElement("div");
    root.className = "kg";
    var mic = SP.supported ? SP.button('id="kg-mic" data-off="" data-on=""', "Talk instead of typing") : "";
    root.innerHTML =
      '<button type="button" class="kg-bubble" id="kg-bubble" aria-expanded="false" aria-controls="kg-panel">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/><path d="M9 10h.01M12 10h.01M15 10h.01"/></svg>' +
        '<span class="k-sr">Design helper</span></button>' +
      '<section class="kg-panel" id="kg-panel" role="dialog" aria-modal="false" aria-labelledby="kg-title" hidden>' +
        '<header class="kg-head"><div><h2 id="kg-title">Design helper</h2><p>Here to help you pick</p></div>' +
          '<button type="button" class="kg-x" id="kg-close" aria-label="Close helper"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></header>' +
        '<div class="kg-log" id="kg-log" role="log" aria-live="polite" aria-relevant="additions" tabindex="0" aria-label="Conversation"></div>' +
        '<form class="kg-form" id="kg-form">' +
          '<label for="kg-input" class="k-sr">Ask the design helper</label>' +
          '<input id="kg-input" type="text" autocomplete="off" maxlength="' + MAX_LEN + '" enterkeyhint="send" placeholder="' + (SP.ios ? "Ask anything (or use your keyboard mic)" : "Ask a question…") + '">' +
          mic +
          '<button type="submit" class="kg-send" id="kg-send" aria-label="Send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>' +
        "</form>" +
        '<p class="k-sr" id="kg-sr" aria-live="polite"></p>' +
      "</section>";
    document.body.appendChild(root);
    bubble = $("#kg-bubble"); panel = $("#kg-panel"); log = $("#kg-log"); input = $("#kg-input"); sendBtn = $("#kg-send"); micBtn = $("#kg-mic"); closeBtn = $("#kg-close");

    bubble.addEventListener("click", function () { if (isOpen()) close(); else open(true); });
    closeBtn.addEventListener("click", close);
    $("#kg-form").addEventListener("submit", function (e) { e.preventDefault(); var v = input.value; input.value = ""; userSays(v); });
    if (micBtn) micBtn.addEventListener("click", function () {
      SP.toggle(micBtn, function (t) { input.value = (input.value ? input.value.replace(/\s+$/, "") + " " : "") + t; input.focus(); });
    });
    log.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      if (b.hasAttribute("data-chip")) {
        var last = null;
        G.msgs.forEach(function (m) { if (m.r === "bot") last = m; });
        var c = last && last.q && last.q[+b.getAttribute("data-chip")];
        if (c) onChip(c);
      } else if (b.hasAttribute("data-act")) {
        runAction(G.msgs[+b.getAttribute("data-msg")], +b.getAttribute("data-act"));
      }
    });
    document.addEventListener("keydown", function (e) {
      if ((e.key === "Escape" || e.key === "Esc") && isOpen()) { e.preventDefault(); close(); }
    });
    input.addEventListener("focus", function () { if (MOBILE.matches) document.body.classList.add("kg-typing"); });
    input.addEventListener("blur", function () { setTimeout(function () { if (!panel.contains(document.activeElement)) document.body.classList.remove("kg-typing"); }, 80); });

    /* If the picker panel leaves too little room above it on a phone, sit over it as a bottom sheet instead. */
    var roomy = function () {
      var ph = parseFloat(getComputedStyle(document.body).getPropertyValue("--kg-bottom")) || 0;
      var panelH = document.body.getAttribute("data-view") === "design" ? parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--k-panel-h")) || 0 : ph;
      document.body.classList.toggle("kg-cover", MOBILE.matches && window.innerHeight - 56 - panelH < 300);
    };
    document.addEventListener("kf:change", roomy);
    window.addEventListener("resize", roomy);
    if (window.ResizeObserver && document.getElementById("k-bar")) new ResizeObserver(roomy).observe(document.getElementById("k-bar"));
    roomy();

    /* Keep the panel above the on-screen keyboard where the browser reports it. */
    if (window.visualViewport) {
      var vv = window.visualViewport, fit = function () {
        var kb = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
        document.documentElement.style.setProperty("--kg-kb", kb + "px");
      };
      vv.addEventListener("resize", fit); vv.addEventListener("scroll", fit);
    }

    /* While walking through, ask about each design after the client picks one. */
    document.addEventListener("kf:pick", function (e) {
      if (!G.walk || !isOpen() || busy) return;
      var d = e.detail || {};
      var k = d.section + ":" + d.option;
      if (G.asked[k]) return;
      G.asked[k] = 1;
      var a = askLine(d.section, d.option);
      push({ r: "bot", t: a.t, q: a.q, a: [] });
    });
    document.addEventListener("kf:change", function () { if (isOpen()) { var c = log.querySelectorAll("[aria-pressed]"); if (c.length) render(); } });
  }

  function init() {
    if (init.done || !window.KF_PICKER || window.KF_DEMO) return; /* no helper on the public demo */
    init.done = true;
    P = window.KF_PICKER; SET = P.settings || {}; SP = window.KF_SPEECH || { supported: false, ios: false };
    storeKey = "kf-guide:" + P.slug();
    load();
    build();
    if (!G.greeted) {
      G.greeted = true;
      G.msgs.push({ r: "bot", t: "Hi! I'm your design helper. I can walk you through picking your new website, one step at a time.", q: [CHIPS.walk, CHIPS.what, CHIPS.wording, CHIPS.done], a: [] });
      save(); /* the helper starts closed: only the small button shows until the client taps it */
    }
    render();
  }

  if (window.KF_PICKER && window.KF_PICKER.ready) init();
  else document.addEventListener("kf:ready", init);
})();
