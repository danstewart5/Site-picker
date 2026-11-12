/* Talk instead of type: uses the browser's built-in speech recognition where it exists.
   Mic buttons stay hidden on browsers without it, and hide themselves if the browser blocks it. */
(function () {
  "use strict";

  var R = window.SpeechRecognition || window.webkitSpeechRecognition;
  var ua = navigator.userAgent || "";
  var ios = /iP(hone|ad|od)/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  var cur = null;

  var API = { supported: !!R, ios: ios };

  function setBtn(btn, on) {
    if (!btn) return;
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.classList.toggle("listening", on);
    var lbl = btn.querySelector(".k-mic-lbl");
    if (lbl) lbl.textContent = on ? (btn.getAttribute("data-on") || "Listening… tap to stop") : (btn.getAttribute("data-off") || "Talk");
    btn.setAttribute("aria-label", on ? "Listening. Tap to stop" : (btn.getAttribute("data-label") || "Talk instead of typing"));
  }

  function disable() {
    API.supported = false;
    Array.prototype.forEach.call(document.querySelectorAll(".k-mic"), function (b) { b.hidden = true; });
  }

  function stop() { if (cur) { try { cur.rec.stop(); } catch (e) { /* ignore */ } } }

  /* Toggle listening for a mic button. onText(finalText) is called with what was heard. */
  API.toggle = function (btn, onText) {
    if (!API.supported) return;
    if (cur && cur.btn === btn) { stop(); return; }
    stop();
    var rec;
    try { rec = new R(); } catch (e) { disable(); return; }
    rec.lang = "en-CA";
    rec.interimResults = false;
    rec.continuous = false;
    rec.maxAlternatives = 1;
    var me = { rec: rec, btn: btn };
    cur = me;
    rec.onresult = function (e) {
      var t = "";
      for (var i = e.resultIndex; i < e.results.length; i++) { if (e.results[i].isFinal) t += e.results[i][0].transcript; }
      t = t.replace(/\s+/g, " ").trim();
      if (t && onText) onText(t);
    };
    rec.onerror = function (e) {
      if (e && (e.error === "not-allowed" || e.error === "service-not-allowed" || e.error === "language-not-supported")) disable();
    };
    rec.onend = function () { if (cur === me) cur = null; setBtn(btn, false); };
    try { rec.start(); setBtn(btn, true); } catch (e) { cur = null; setBtn(btn, false); }
  };
  API.stop = stop;

  /* Button markup; hidden unless supported. */
  API.button = function (attrs, label) {
    return '<button type="button" class="k-mic"' + (attrs ? " " + attrs : "") + ' aria-pressed="false" aria-label="' + (label || "Talk instead of typing") + '"' +
      (label ? ' data-label="' + label + '"' : "") + (API.supported ? "" : " hidden") + ">" +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>' +
      '<span class="k-mic-lbl">Talk</span></button>';
  };

  window.KF_SPEECH = API;
})();
