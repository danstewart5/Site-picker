/* Studio activity pings for the public "Try it yourself" demo (/try and picker.html?demo=1).
   Posts to the Netlify form "studio-activity" in the background, so Netlify can email Dan.
   - "started": the visitor's first real tap or pick, once per browser session. No personal info:
     only template, page, referrer/UTM, mobile or desktop, and the time.
   - "sent": when they send their picks (template + a short summary of the picks).
   The static copy of the form (for Netlify's build-time detection) is in try.html and picker.html. */
(function () {
  "use strict";

  var FORM = "studio-activity";
  var KEY_SRC = "kf-studio-src";      /* where they came from, remembered for the session */
  var KEY_STARTED = "kf-studio-started";
  var TEMPLATES = { "tidewater": "Trades & contractors", "northshore": "Health & wellness", "harbour-pine": "Retail & shops" };
  var startedHere = false;           /* fallback when sessionStorage is blocked */

  function get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }

  /* Referrer (origin + path only, no query string) and UTM tags, from the first page of the visit. */
  function source() {
    var saved = get(KEY_SRC);
    if (saved) return saved;
    var parts = [];
    try {
      var q = new URLSearchParams(location.search);
      ["utm_source", "utm_medium", "utm_campaign"].forEach(function (k) {
        var v = (q.get(k) || "").slice(0, 80);
        if (v) parts.push(k.replace("utm_", "") + "=" + v);
      });
      if (document.referrer) {
        var r = new URL(document.referrer);
        if (r.origin !== location.origin) parts.unshift(r.origin + r.pathname);
      }
    } catch (e) {}
    var src = parts.join(" | ") || "direct";
    set(KEY_SRC, src);
    return src;
  }
  source(); /* remember it now: /try links to the picker drop the UTM tags */

  function device() {
    try { return window.matchMedia("(max-width: 767px), (pointer: coarse)").matches ? "mobile" : "desktop"; }
    catch (e) { return "unknown"; }
  }

  function template(slug, name) {
    if (!slug) return "";
    return (TEMPLATES[slug] || name || slug) + " (" + slug + ")";
  }

  function send(event, tpl, picks) {
    var body = new URLSearchParams({
      "form-name": FORM, "bot-field": "",
      event: event, template: tpl || "", picks: (picks || "").slice(0, 600),
      page: location.pathname, referrer: source(), device: device(), time: new Date().toISOString()
    }).toString();
    try {
      /* keepalive lets the ping finish even if the tap also opens the next page */
      fetch("/", { method: "POST", keepalive: true, headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body })
        .catch(function () {});
    } catch (e) {}
  }

  function started(tpl) {
    if (startedHere || get(KEY_STARTED) === "1") return;
    startedHere = true;
    set(KEY_STARTED, "1");
    send("started", tpl, "");
  }

  /* First real (user-made, not scripted) tap on anything interactive. getTpl() returns the template name. */
  function watch(getTpl) {
    function onTap(e) {
      if (!e.isTrusted) return;
      var el = e.target && e.target.closest && e.target.closest("a, button, input, select, textarea, label, [role=button], [data-palette], [data-font]");
      if (!el) return;
      document.removeEventListener("click", onTap, true);
      started(getTpl(el));
    }
    document.addEventListener("click", onTap, true);
  }

  window.KF_ACTIVITY = { watch: watch, started: started, send: send, template: template };
})();
