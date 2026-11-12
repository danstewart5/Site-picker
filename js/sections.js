/*
  Section layouts. Each section has genuinely different layouts: A, B and C, plus an optional D
  ("The Original": a playful hand-drawn style, built from the Oddity Lane sample site).
  Every renderer receives (c, ctx):
    c   = the merged content for that section (client defaults + design overrides)
    ctx = { biz, contact, labels }
  Any element with data-edit="key" becomes editable in "Edit text" mode.
*/
(function () {
  "use strict";

  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  };

  /* Editable text element; skipped when there's no text. */
  function T(tag, key, val, cls) {
    if (val == null || val === "") return "";
    return "<" + tag + (cls ? ' class="' + cls + '"' : "") + ' data-edit="' + esc(key) + '">' + esc(val) + "</" + tag + ">";
  }

  var ICONS = {
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
    hammer: '<path d="M14 4l6 6-3 3-6-6z"/><path d="M12 8l-9 9 3 3 9-9"/>',
    ruler: '<path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/>',
    drop: '<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>',
    leaf: '<path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15z"/><path d="M5 19l8-8"/>',
    shield: '<path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/>',
    check: '<path d="M5 12l5 5L20 7"/>',
    star: '<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.3L12 17.4 6.5 20.4l1-6.3L3 9.7l6.2-.9z"/>',
    phone: '<path d="M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    pin: '<path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    heart: '<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>',
    bag: '<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    gift: '<rect x="3" y="8" width="18" height="5"/><path d="M5 13v8h14v-8M12 8v13"/><path d="M12 8S10 3 7.5 4.5 9 8 12 8zm0 0s2-5 4.5-3.5S15 8 12 8z"/>',
    foot: '<path d="M9 21c-2.5 0-3.5-2.5-3.5-5.5S7 9 8.5 8.5s3 1 2.8 4-.3 3.5.2 5S11 21 9 21z"/><circle cx="10" cy="4.5" r="1.3"/><circle cx="13.3" cy="5.6" r="1.1"/><circle cx="15.6" cy="7.6" r="1"/>',
    sock: '<path d="M8 3h7v9l3.5 3.5a3 3 0 0 1-4.2 4.2L8 13.5z"/><path d="M8 6h7"/>',
    doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
    spark: '<path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/>',
    social: '<circle cx="12" cy="12" r="9"/><path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18M3 12h18"/>'
  };
  function icon(name, cls) {
    var p = ICONS[name] || ICONS.spark;
    return '<svg class="' + (cls || "i") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + p + "</svg>";
  }

  /* Image or drawn placeholder.  "ph:kind:Label"  or a normal image URL. */
  var phCount = 0;
  function media(src, alt, cls) {
    src = src || "ph:scene:Photo";
    if (/^ph:/.test(src)) {
      var parts = src.split(":");
      var kind = parts[1] || "scene";
      var label = parts.slice(2).join(":") || alt || "Photo";
      var tone = phCount++ % 4;
      return '<div class="ph ph-' + esc(kind) + (cls ? " " + cls : "") + '" data-tone="' + tone + '" role="img" aria-label="' + esc(label) + ' (sample image)"><span class="ph-label">' + esc(label) + "</span></div>";
    }
    return '<img class="' + (cls || "") + '" src="' + esc(src) + '" alt="' + esc(alt || "") + '" loading="lazy" decoding="async">';
  }

  function stars(n) {
    var s = "";
    for (var i = 0; i < 5; i++) s += icon("star", "i star" + (i < Math.round(n || 5) ? " on" : ""));
    return '<span class="stars" role="img" aria-label="' + (n || 5) + ' out of 5 stars">' + s + "</span>";
  }

  function list(arr) { return Array.isArray(arr) ? arr : []; }

  function navLinks(ctx) {
    return '<span class="nav-links" aria-hidden="true"><span>' + esc(ctx.labels.services) + "</span><span>" + esc(ctx.labels.gallery) + "</span><span>" + esc(ctx.labels.about) + "</span><span>" + esc(ctx.labels.contact) + "</span></span>";
  }
  function logo(ctx) {
    if (ctx.logo) return '<span class="logo logo-has-img"><img class="logo-img" src="' + esc(ctx.logo) + '" alt="' + esc(ctx.biz) + '"></span>';
    return '<span class="logo"><span class="logo-mark" aria-hidden="true"></span><span>' + esc(ctx.biz) + "</span></span>";
  }

  var R = {};

  /* ---------------- HERO ---------------- */
  R.hero = {
    A: function (c, ctx) {
      return '<header class="nav">' + logo(ctx) + navLinks(ctx) + T("span", "cta", c.cta, "btn btn-sm") +
        '<span class="burger" aria-hidden="true">' + icon("menu") + "</span></header>" +
        '<div class="hero-a">' +
          '<div class="hero-a-text">' + T("p", "eyebrow", c.eyebrow, "eyebrow") + T("h1", "headline", c.headline) +
            T("p", "sub", c.sub, "lead muted") +
            '<div class="btns">' + T("span", "cta", c.cta, "btn") + T("span", "cta2", c.cta2, "btn ghost") + "</div>" +
            (list(c.badges).length ? '<ul class="trust">' + list(c.badges).map(function (b, i) {
              return "<li>" + icon("check") + T("span", "badges." + i, b) + "</li>";
            }).join("") + "</ul>" : "") +
          "</div>" +
          '<div class="hero-a-media">' + media(c.image, c.headline) + "</div>" +
        "</div>";
    },
    B: function (c, ctx) {
      return '<div class="hero-b">' +
          '<div class="hero-b-bg">' + media(c.image, c.headline) + "</div>" +
          '<header class="nav nav-light">' + logo(ctx) + navLinks(ctx) + T("span", "cta", c.cta, "btn btn-sm accent") +
            '<span class="burger" aria-hidden="true">' + icon("menu") + "</span></header>" +
          '<div class="hero-b-body">' + T("p", "eyebrow", c.eyebrow, "eyebrow eyebrow-light") +
            T("h1", "headline", c.headline) + T("p", "sub", c.sub, "lead") +
            '<div class="btns center">' + T("span", "cta", c.cta, "btn accent") + T("span", "cta2", c.cta2, "btn ghost") + "</div>" +
          "</div>" +
        "</div>";
    },
    C: function (c, ctx) {
      var ims = list(c.images).length ? c.images : [c.image, c.image, c.image];
      var k = ctx.contact || {};
      return '<div class="topbar">' + (k.phone ? icon("phone") + "<span>" + esc(k.phone) + "</span>" + (k.area ? '<span class="topbar-sep" aria-hidden="true">•</span>' : "") : icon("pin")) +
        "<span>" + esc(k.area || "") + "</span></div>" +
        '<header class="nav nav-c">' + navLinks(ctx) + logo(ctx) + '<span class="burger" aria-hidden="true">' + icon("menu") + "</span></header>" +
        '<div class="wrap hero-c">' +
          T("p", "eyebrow", c.eyebrow, "eyebrow") + T("h1", "headline", c.headline) +
          '<div class="hero-c-row">' + T("p", "sub", c.sub, "lead muted") +
            '<div class="btns">' + T("span", "cta", c.cta, "btn") + '<span class="btn-arrow" aria-hidden="true">' + icon("arrow") + "</span></div></div>" +
          '<div class="hero-c-strip">' + ims.slice(0, 3).map(function (im, i) { return media(im, "Photo " + (i + 1)); }).join("") + "</div>" +
          (list(c.stats).length ? '<dl class="hero-c-stats">' + list(c.stats).map(function (s, i) {
            return "<div>" + T("dt", "stats." + i + ".num", s.num) + T("dd", "stats." + i + ".label", s.label) + "</div>";
          }).join("") + "</dl>" : "") +
        "</div>";
    }
  };

  /* ---------------- SERVICES ---------------- */
  function price(it, i) { return it.price ? T("span", "items." + i + ".price", it.price, "price") : ""; }
  R.services = {
    A: function (c) {
      return '<div class="wrap"><div class="sec-head center">' + T("p", "eyebrow", c.eyebrow, "eyebrow") + T("h2", "title", c.title) + T("p", "intro", c.intro, "muted") + "</div>" +
        '<div class="cards">' + list(c.items).map(function (it, i) {
          return '<article class="card"><span class="ico">' + icon(it.icon) + "</span>" + T("h3", "items." + i + ".name", it.name) +
            T("p", "items." + i + ".desc", it.desc, "muted") + price(it, i) + "</article>";
        }).join("") + "</div></div>";
    },
    B: function (c) {
      return '<div class="wrap svc-b"><div class="sec-head">' + T("p", "eyebrow", c.eyebrow, "eyebrow eyebrow-accent") + T("h2", "title", c.title) + T("p", "intro", c.intro, "muted") +
        T("span", "cta", c.cta, "btn accent") + "</div>" +
        '<ol class="rows">' + list(c.items).map(function (it, i) {
          return '<li><span class="num" aria-hidden="true">' + (i < 9 ? "0" : "") + (i + 1) + "</span>" +
            '<div class="row-main">' + T("h3", "items." + i + ".name", it.name) + price(it, i) + "</div>" + T("p", "items." + i + ".desc", it.desc, "muted") + "</li>";
        }).join("") + "</ol></div>";
    },
    C: function (c) {
      var items = list(c.items), main = items.slice(0, 3), rest = items.slice(3);
      return '<div class="wrap"><div class="sec-head">' + T("p", "eyebrow", c.eyebrow, "eyebrow") + T("h2", "title", c.title) + T("p", "intro", c.intro, "muted") + "</div>" +
        main.map(function (it, i) {
          return '<div class="zz' + (i % 2 ? " flip" : "") + '"><div class="zz-media">' + media(it.image, it.name) + "</div>" +
            '<div class="zz-text"><span class="zz-num" aria-hidden="true">' + icon(it.icon) + "</span>" + T("h3", "items." + i + ".name", it.name) +
            T("p", "items." + i + ".desc", it.desc, "muted") + price(it, i) + "</div></div>";
        }).join("") +
        (rest.length ? '<div class="also"><span class="also-label">Also:</span>' + rest.map(function (it, j) {
          return T("span", "items." + (j + 3) + ".name", it.name, "chip");
        }).join("") + "</div>" : "") + "</div>";
    }
  };

  /* ---------------- GALLERY ---------------- */
  R.gallery = {
    A: function (c) {
      return '<div class="wrap"><div class="sec-head">' + T("p", "eyebrow", c.eyebrow, "eyebrow") + T("h2", "title", c.title) + T("p", "intro", c.intro, "muted") + "</div>" +
        '<div class="gal-a">' + list(c.items).slice(0, 6).map(function (it, i) {
          return "<figure>" + media(it.image, it.caption) + T("figcaption", "items." + i + ".caption", it.caption) + "</figure>";
        }).join("") + "</div></div>";
    },
    B: function (c) {
      return '<div class="wrap"><div class="sec-head center">' + T("p", "eyebrow", c.eyebrow, "eyebrow") + T("h2", "title", c.title) + T("p", "intro", c.intro, "muted") + "</div>" +
        '<div class="gal-b">' + list(c.items).slice(0, 5).map(function (it, i) {
          return '<figure class="g' + i + '">' + media(it.image, it.caption) + T("figcaption", "items." + i + ".caption", it.caption) + "</figure>";
        }).join("") + "</div>" + (c.cta ? '<div class="center-row">' + T("span", "cta", c.cta, "btn ghost") + "</div>" : "") + "</div>";
    },
    C: function (c) {
      return '<div class="wrap gal-c-head"><div>' + T("p", "eyebrow", c.eyebrow, "eyebrow") + T("h2", "title", c.title) + "</div>" +
        '<span class="swipe" aria-hidden="true">Swipe ' + icon("arrow") + "</span></div>" +
        '<div class="gal-c" tabindex="0" aria-label="Photo gallery, scrolls sideways">' + list(c.items).map(function (it, i) {
          return "<figure>" + media(it.image, it.caption) + T("figcaption", "items." + i + ".caption", it.caption) + "</figure>";
        }).join("") + "</div>";
    }
  };

  /* ---------------- ABOUT ---------------- */
  R.about = {
    A: function (c) {
      return '<div class="wrap about-a"><div class="about-a-media">' + media(c.image, c.title) + "</div>" +
        '<div class="about-a-text">' + T("p", "eyebrow", c.eyebrow, "eyebrow") + T("h2", "title", c.title) + T("p", "body", c.body, "muted") +
        T("p", "body2", c.body2, "muted") +
        '<ul class="checks">' + list(c.points).map(function (p, i) { return "<li>" + icon("check") + T("span", "points." + i, p) + "</li>"; }).join("") + "</ul></div></div>";
    },
    B: function (c) {
      return '<div class="wrap about-b">' + T("p", "eyebrow", c.eyebrow, "eyebrow") + T("h2", "title", c.title) +
        T("p", "body", c.body, "big") + T("p", "body2", c.body2, "muted") +
        '<dl class="stat-boxes">' + list(c.stats).map(function (s, i) {
          return "<div>" + T("dt", "stats." + i + ".num", s.num) + T("dd", "stats." + i + ".label", s.label) + "</div>";
        }).join("") + "</dl></div>";
    },
    C: function (c) {
      var o = c.owner || {};
      return '<div class="wrap about-c"><div class="owner">' + media(o.image || "ph:portrait:Owner photo", o.name, "portrait") +
        T("p", "owner.name", o.name, "owner-name") + T("p", "owner.role", o.role, "owner-role") + "</div>" +
        '<div class="about-c-text">' + T("p", "eyebrow", c.eyebrow, "eyebrow eyebrow-accent") + T("h2", "title", c.title) +
        (c.quote ? '<blockquote>' + T("p", "quote", c.quote) + "</blockquote>" : "") + T("p", "body", c.body) +
        '<ol class="timeline">' + list(c.points).map(function (p, i) { return "<li>" + T("span", "points." + i, p) + "</li>"; }).join("") + "</ol></div></div>";
    }
  };

  /* ---------------- REVIEWS ---------------- */
  function who(it, i) {
    return '<p class="who">' + T("span", "items." + i + ".name", it.name, "who-name") + T("span", "items." + i + ".where", it.where, "who-where") + "</p>";
  }
  R.reviews = {
    A: function (c) {
      return '<div class="wrap"><div class="sec-head center">' + T("p", "eyebrow", c.eyebrow, "eyebrow") + T("h2", "title", c.title) + "</div>" +
        '<div class="rev-a">' + list(c.items).slice(0, 3).map(function (it, i) {
          return '<figure class="card">' + stars(5) + '<blockquote>' + T("p", "items." + i + ".quote", it.quote) + "</blockquote>" +
            "<figcaption>" + who(it, i) + "</figcaption></figure>";
        }).join("") + "</div></div>";
    },
    B: function (c) {
      var items = list(c.items), f = items[0] || {};
      return '<div class="wrap rev-b">' + T("p", "eyebrow", c.eyebrow, "eyebrow") +
        '<figure class="feature"><span class="qmark" aria-hidden="true">&ldquo;</span><blockquote>' + T("p", "items.0.quote", f.quote) + "</blockquote>" +
        "<figcaption>" + stars(5) + who(f, 0) + "</figcaption></figure>" +
        '<div class="rev-b-more">' + items.slice(1, 3).map(function (it, j) {
          var i = j + 1;
          return "<figure><blockquote>" + T("p", "items." + i + ".quote", it.quote) + "</blockquote><figcaption>" + who(it, i) + "</figcaption></figure>";
        }).join("") + "</div></div>";
    },
    C: function (c) {
      return '<div class="wrap rev-c"><div class="score">' + T("p", "rating", c.rating || "4.9", "score-num") + stars(5) +
        T("p", "count", c.count, "score-count") + T("h2", "title", c.title) + "</div>" +
        '<ul class="rev-list">' + list(c.items).map(function (it, i) {
          return "<li>" + T("p", "items." + i + ".quote", it.quote) + who(it, i) + "</li>";
        }).join("") + "</ul></div>";
    }
  };

  /* ---------------- CONTACT ---------------- */
  function hours(c) {
    return list(c.hours).map(function (h, i) {
      return "<tr>" + T("th", "hours." + i + ".days", h.days) + T("td", "hours." + i + ".time", h.time) + "</tr>";
    }).join("");
  }
  R.contact = {
    A: function (c, ctx) {
      var k = ctx.contact;
      return '<div class="wrap contact-a"><div>' + T("p", "eyebrow", c.eyebrow, "eyebrow") + T("h2", "title", c.title) + T("p", "body", c.body, "muted") +
        '<ul class="info">' +
          (k.phone ? "<li>" + icon("phone") + "<span>" + esc(k.phone) + "</span></li>" : "") +
          (k.email ? "<li>" + icon("mail") + "<span>" + esc(k.email) + "</span></li>" : "") +
          (k.address ? "<li>" + icon("pin") + "<span>" + esc(k.address) + "</span></li>" : "") +
          (list(c.hours).length ? "<li>" + icon("clock") + "<span>" + esc(c.hours[0].days + ": " + c.hours[0].time) + "</span></li>" : "") +
        "</ul></div>" +
        '<div class="mock-form" aria-hidden="true">' + T("p", "formTitle", c.formTitle || "Send us a message", "mock-title") +
          '<span class="fake-label">Name</span><span class="fake-input"></span>' +
          '<span class="fake-label">Phone or email</span><span class="fake-input"></span>' +
          '<span class="fake-label">How can we help?</span><span class="fake-input tall"></span>' +
          T("span", "cta", c.cta, "btn block") + "</div></div>";
    },
    B: function (c, ctx) {
      var k = ctx.contact;
      return '<div class="wrap contact-b">' + T("h2", "title", c.title) + T("p", "body", c.body, "lead") +
        '<div class="btns center">' + '<span class="btn accent">' + icon("phone") + "<span>" + esc(c.cta || "Call") + "</span></span>" +
        (k.phone ? '<span class="btn ghost">' + icon("chat") + "<span>Text " + esc(k.phone) + "</span></span>" : "") + "</div>" +
        (list(c.hours).length ? '<p class="fine">' + list(c.hours).map(function (h) { return esc(h.days + " " + h.time); }).join(" · ") + "</p>" : "") + "</div>";
    },
    C: function (c, ctx) {
      var k = ctx.contact;
      return '<div class="contact-c">' + media("ph:map:" + (k.area || "Map"), "Map", "map") +
        '<div class="wrap"><div class="visit card">' + T("p", "eyebrow", c.eyebrow, "eyebrow") + T("h2", "title", c.title) + T("p", "body", c.body, "muted") +
        (k.address ? '<p class="addr">' + icon("pin") + "<span>" + esc(k.address) + "</span></p>" : "") +
        (list(c.hours).length ? '<table class="hours"><caption class="sr">Hours</caption><tbody>' + hours(c) + "</tbody></table>" : "") +
        T("span", "cta", c.cta, "btn block") + "</div></div></div>";
    }
  };

  /* ---------------- FOOTER ---------------- */
  R.footer = {
    A: function (c, ctx) {
      var k = ctx.contact;
      return '<div class="wrap foot-a"><div class="foot-brand">' + logo(ctx) + T("p", "blurb", c.blurb) + "</div>" +
        '<div><p class="foot-h">Explore</p><ul>' + list(c.links).map(function (l, i) { return "<li>" + T("span", "links." + i, l) + "</li>"; }).join("") + "</ul></div>" +
        '<div><p class="foot-h">Contact</p><ul>' + [k.phone, k.email, k.area].filter(Boolean).map(function (v) { return "<li>" + esc(v) + "</li>"; }).join("") + "</ul></div>" +
        "</div>" + '<div class="wrap foot-legal">' + T("p", "legal", c.legal) + "</div>";
    },
    B: function (c, ctx) {
      return '<div class="wrap foot-b">' + logo(ctx) +
        '<ul class="inline">' + list(c.links).map(function (l, i) { return "<li>" + T("span", "links." + i, l) + "</li>"; }).join("") + "</ul>" +
        '<ul class="socials" aria-label="Social links">' + list(c.social).map(function (s) { return '<li><span class="soc" title="' + esc(s) + '">' + icon("social") + '<span class="sr">' + esc(s) + "</span></span></li>"; }).join("") + "</ul>" +
        T("p", "legal", c.legal, "fine") + "</div>";
    },
    C: function (c, ctx) {
      var k = ctx.contact;
      return '<div class="foot-c-cta"><div class="wrap">' + T("p", "ctaLine", c.ctaLine || "Ready when you are.", "cta-line") +
        (k.phone ? '<span class="btn">' + icon("phone") + "<span>" + esc(k.phone) + "</span></span>" : "") + "</div></div>" +
        '<div class="foot-c"><div class="wrap"><p class="wordmark" aria-hidden="true">' + esc(ctx.biz) + "</p>" +
        '<div class="foot-c-row">' + T("p", "blurb", c.blurb) + '<ul class="inline">' + list(c.links).map(function (l, i) { return "<li>" + T("span", "links." + i, l) + "</li>"; }).join("") + "</ul></div>" +
        T("p", "legal", c.legal, "fine") + "</div></div>";
    }
  };

  /* ================= D: The Original (playful, hand-drawn, chunky outlines) =================
     Each D renderer reads its own wording from the design's content, so it can be reused. */
  function googlies() {
    return '<span class="d-googlies" aria-hidden="true"><span class="d-googly"><span></span></span><span class="d-googly"><span></span></span></span>';
  }
  function dHead(c, keyT, keyI, title, intro) {
    return '<div class="d-head">' + T("h2", keyT, title) + T("p", keyI, intro) + "</div>";
  }

  R.hero.D = function (c, ctx) {
    var nav = list(c.nav).length ? c.nav : [ctx.labels.services, ctx.labels.gallery, ctx.labels.about, ctx.labels.contact];
    var nx = c.next || {}, mini = c.mini || {};
    return '<header class="d-bar"><div class="wrap">' +
        '<span class="d-brand">' + (c.mark ? '<img class="d-mark" src="' + esc(c.mark) + '" alt="">' : "") +
          "<span>" + T("span", "brand", c.brand || ctx.biz) + T("small", "brandSub", c.brandSub) + "</span></span>" +
        '<span class="d-nav" aria-hidden="true">' + nav.map(function (n) { return "<span>" + esc(n) + "</span>"; }).join("") +
          T("span", "navCta", c.navCta, "d-btn d-btn-sm") + "</span>" +
        '<span class="d-btn d-btn-sm d-ghost d-menu" aria-hidden="true">Menu</span>' +
      "</div></header>" +
      '<div class="d-hero"><div class="wrap">' +
        '<div class="d-eye">' + media(c.image, "The all-seeing eye of The House of Oddities") + T("p", "hint", c.hint, "d-eye-hint") + "</div>" +
        '<div class="d-hero-text">' + T("p", "eyebrow", c.eyebrow, "d-pre") + T("h1", "headline", c.headline) + T("p", "sub", c.sub, "d-lede") +
          '<div class="d-btns">' + T("span", "cta", c.cta, "d-btn") + T("span", "cta2", c.cta2, "d-btn d-ghost") + "</div>" +
          T("p", "address", c.address, "d-address") + "</div>" +
      "</div></div>" +
      (list(c.paths).length ? '<div class="d-paths"><div class="wrap"><div class="d-path-grid">' + list(c.paths).map(function (p, i) {
        var k = "paths." + i + ".";
        return '<article class="d-path d-path-' + (i % 2 ? "vend" : "shop") + '">' + googlies() + T("h2", k + "title", p.title) + T("p", k + "body", p.body) +
          "<ul>" + list(p.points).map(function (pt, j) { return T("li", k + "points." + j, pt); }).join("") + "</ul>" +
          '<div class="d-btns">' + T("span", k + "cta", p.cta, "d-btn") + T("span", k + "cta2", p.cta2, "d-btn d-ghost") + "</div></article>";
      }).join("") + "</div>" +
      (mini.title ? '<div class="d-mini">' + (mini.image ? '<img src="' + esc(mini.image) + '" alt="">' : "") +
        "<span>" + T("b", "mini.title", mini.title) + T("small", "mini.sub", mini.sub) + '</span><span class="d-arr" aria-hidden="true">&rarr;</span></div>' : "") +
      "</div></div>" : "") +
      (nx.title ? '<div class="d-next"><div class="wrap"><div>' + T("span", "next.kicker", nx.kicker, "d-next-k") + T("p", "next.title", nx.title, "d-next-t") +
        T("p", "next.body", nx.body, "d-next-b") + "</div>" + T("span", "next.cta", nx.cta, "d-btn d-btn-sm d-butter") + "</div></div>" : "");
  };

  R.services.D = function (c) {
    var w = c.workshop || {};
    return '<div class="wrap">' + dHead(c, "title", "intro", c.title, c.intro) +
      '<div class="d-flyers">' + list(c.items).map(function (it, i) {
        var k = "items." + i + ".";
        return '<article class="d-flyer d-t-' + esc(it.theme || "plain") + '">' +
          (it.theme === "mystic" ? '<span class="d-stars" aria-hidden="true"><i style="left:12%;top:10%">&#10022;</i><i style="right:14%;top:16%">&#9790;</i><i style="left:16%;bottom:16%">&#10023;</i><i style="right:12%;bottom:12%">&#10022;</i></span>' : "") +
          T("p", k + "presents", it.presents, "d-presents") +
          (it.theme === "micro" ? '<span class="d-lens" aria-hidden="true"><span>tiny things</span></span>' : "") +
          '<p class="d-ftitle">' + T("span", k + "kicker", it.kicker, "d-fk") + T("span", k + "name", it.name, "d-fn") + T("span", k + "suffix", it.suffix, "d-fs") + "</p>" +
          T("p", k + "stamp", it.stamp, "d-stamp") + T("p", k + "date", it.date, "d-fdate") + T("p", k + "tag", it.tag, "d-ftag") +
          T("span", k + "flip", it.flip || "Flip for details", "d-btn d-btn-sm") + "</article>";
      }).join("") + "</div>" +
      (list(c.past).length ? '<p class="d-past">' + T("span", "pastLabel", c.pastLabel || "Past markets:") + list(c.past).map(function (p, i) { return T("span", "past." + i, p, "d-badge"); }).join("") + "</p>" : "") +
      (w.name ? '<div class="d-workshop"><div>' + T("p", "workshop.note", w.note, "d-note") + T("h3", "workshop.name", w.name) + T("p", "workshop.desc", w.desc) +
        '<ul class="d-perks">' + list(w.includes).map(function (x, i) { return T("li", "workshop.includes." + i, x); }).join("") + "</ul>" +
        T("p", "workshop.fine", w.fine, "d-fine") + "</div>" +
        "<div>" + T("p", "workshop.pick", w.pick || "1. Pick a time", "d-steps-label") +
        '<div class="d-slots">' + list(w.slots).map(function (sl, i) {
          return '<span class="d-slot' + (i === 1 ? " on" : "") + '">' + T("b", "workshop.slots." + i, sl) + '<span class="d-seats" aria-hidden="true">' +
            [0, 1, 2, 3, 4, 5].map(function (n) { return "<i" + (n < (i * 2 + 1) % 6 ? ' class="taken"' : "") + "></i>"; }).join("") + "</span></span>";
        }).join("") + "</div>" + T("span", "workshop.cta", w.cta, "d-btn") + "</div></div>" : "") +
      "</div>";
  };

  R.gallery.D = function (c) {
    var h = c.house || {};
    return '<div class="wrap">' + dHead(c, "title", "intro", c.title, c.intro) +
      (list(c.steps).length ? '<ol class="d-how">' + list(c.steps).map(function (st, i) { return '<li><span class="d-how-n" aria-hidden="true">' + (i + 1) + "</span>" + T("span", "steps." + i, st) + "</li>"; }).join("") + "</ol>" : "") +
      '<div class="d-house"><div class="d-house-head"><div>' + T("p", "house.note", h.note, "d-note") + T("h3", "house.name", h.name) + "</div>" +
        T("p", "house.blurb", h.blurb) + T("span", "house.badge", h.badge, "d-sample") + "</div>" +
        '<div class="d-items">' + list(c.items).map(function (it, i) {
          return '<figure class="d-item' + (it.sold ? " sold" : "") + '"><div class="d-item-art">' + media(it.image, it.caption) +
            (it.sold ? '<span class="d-found" aria-hidden="true"><span class="d-found-eyes"><span class="d-googly"><span></span></span><span class="d-googly"><span></span></span></span>Found a home</span>' : "") + "</div>" +
            '<figcaption>' + T("span", "items." + i + ".caption", it.caption, "d-item-name") + T("span", "items." + i + ".kind", it.kind, "d-item-kind") +
            '<span class="d-btn d-btn-sm d-hold' + (it.sold ? " off" : "") + '">' + esc(it.sold ? "Found a home" : (c.holdLabel || "Hold for me")) + "</span></figcaption></figure>";
        }).join("") + "</div></div>" +
      (c.cta ? '<div class="d-center">' + T("span", "cta", c.cta, "d-btn d-butter") + "</div>" : "") +
      "</div>";
  };

  R.about.D = function (c) {
    return '<div class="wrap">' + dHead(c, "title", "body", c.title, c.body) +
      '<div class="d-why">' + list(c.why).map(function (x, i) { return "<div>" + T("b", "why." + i + ".name", x.name) + T("p", "why." + i + ".desc", x.desc) + "</div>"; }).join("") + "</div>" +
      (list(c.points).length ? '<div class="d-panel"><h3>' + esc(c.stepsTitle || "How to vend") + '</h3><ol class="d-how d-how-v">' + list(c.points).map(function (p, i) {
        return '<li><span class="d-how-n" aria-hidden="true">' + (i + 1) + "</span>" + T("span", "points." + i, p) + "</li>";
      }).join("") + "</ol>" + T("span", "cta", c.cta, "d-btn") + "</div>" : "") +
      (list(c.partners).length ? '<div class="d-partners">' + list(c.partners).map(function (p, i) {
        return "<div>" + T("h3", "partners." + i + ".name", p.name) + T("p", "partners." + i + ".desc", p.desc) + T("span", "partners." + i + ".cta", p.cta, "d-btn d-btn-sm") + "</div>";
      }).join("") + "</div>" : "") + "</div>";
  };

  R.reviews.D = function (c) {
    var t = c.tarot || {}, cards = list(t.cards), r = t.reading || {};
    var bags = "";
    for (var b = 1; b <= 33; b++) bags += '<i class="d-bag' + (b === 7 ? " lit" : "") + '"></i>';
    return '<div class="wrap">' + dHead(c, "title", "intro", c.title, c.intro) +
      '<div class="d-fun">' + list(c.items).map(function (it, i) {
        var k = "items." + i + ".";
        if (i === 0) return '<div class="d-tile d-bags">' + T("h3", k + "name", it.name) + T("p", k + "quote", it.quote) +
          '<div class="d-bag-grid" aria-hidden="true">' + bags + "</div>" + T("span", "bagsCta", c.bagsCta, "d-btn d-butter") +
          T("p", "bagsAnswer", c.bagsAnswer, "d-bag-answer") + T("p", "bagsFine", c.bagsFine, "d-fine") + "</div>";
        return '<div class="d-tile">' + T("h3", k + "name", it.name) + T("p", k + "quote", it.quote) + "</div>";
      }).join("") + "</div></div>" +
      (t.title ? '<div class="d-tarot"><div class="wrap">' + dHead(c, "tarot.title", "tarot.intro", t.title, t.intro) +
        '<div class="d-deck">' + cards.slice(0, 3).map(function (cd, i) {
          var open = i === (t.open == null ? 1 : t.open);
          return '<span class="d-card' + (open ? " open" : " dim") + '">' + (open
            ? T("span", "tarot.cards." + i + ".num", cd.num, "d-cnum") + '<span class="d-glyph" aria-hidden="true">' + esc(cd.glyph || "✦") + "</span>" + T("span", "tarot.cards." + i + ".name", cd.name, "d-cname")
            : (t.back ? '<img src="' + esc(t.back) + '" alt="">' : "")) + "</span>";
        }).join("") + "</div>" +
        (r.fortune ? '<div class="d-reading">' + T("h3", "tarot.reading.name", r.name) + T("p", "tarot.reading.fortune", r.fortune, "d-fortune") +
          "<dl><dt>Go to</dt>" + T("dd", "tarot.reading.go", r.go) + "<dt>Look for</dt>" + T("dd", "tarot.reading.look", r.look) + "</dl>" +
          '<div class="d-btns">' + T("span", "tarot.reading.cta", r.cta, "d-btn d-btn-sm") + '<span class="d-btn d-btn-sm d-ghost">Shuffle again</span></div></div>' : "") +
        T("p", "tarot.hint", t.hint, "d-tarot-hint") + "</div></div>" : "");
  };

  R.contact.D = function (c, ctx) {
    var k = ctx.contact || {};
    return '<div class="wrap d-visit"><div class="d-map">' + media(c.map, "Hand-drawn map, not to scale, showing the shop on Oddity Lane") + "</div>" +
      "<div>" + T("h2", "title", c.title) + T("p", "body", c.body, "d-lede") +
      "<dl>" +
        "<dt>Address</dt><dd>" + esc(k.address || "Coming soon") + "</dd>" +
        list(c.hours).map(function (h, i) { return "<dt>" + (i ? "" : "Hours") + "</dt>" + T("dd", "hours." + i + ".time", h.days + ": " + h.time); }).join("") +
        "<dt>Email</dt><dd>" + esc(k.email || "Coming soon") + "</dd>" +
        "<dt>Phone</dt><dd>" + esc(k.phone || "Coming soon") + "</dd>" +
      "</dl>" +
      '<div class="d-btns">' + T("span", "cta", c.cta, "d-btn") + T("span", "cta2", c.cta2, "d-btn d-ghost") + "</div></div></div>";
  };

  R.footer.D = function (c, ctx) {
    var k = ctx.contact || {};
    return '<div class="wrap d-foot"><div>' + T("b", "name", c.name || ctx.biz) + T("p", "blurb", c.blurb) + "</div>" +
      "<div><b>Visit</b><ul>" + [k.area, k.address ? "Street address coming soon" : "", k.email || "Email coming soon"].filter(Boolean).map(function (v) { return "<li>" + esc(v) + "</li>"; }).join("") + "</ul></div>" +
      "<div><b>Follow along</b><ul>" + list(c.social).map(function (s) { return "<li>" + esc(s) + ' <span class="d-dim">coming soon</span></li>'; }).join("") + "</ul></div>" +
      '<div class="d-credit">' + T("span", "legal", c.legal) + T("span", "ctaLine", c.ctaLine) + "</div></div>";
  };

  window.KF_RENDER = R;
  window.KF_UTIL = { esc: esc, icon: icon, resetPh: function (n) { phCount = n || 0; } };
})();
