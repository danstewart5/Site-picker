/*
  Jess-Thetics Beauty Spa: a private, one-on-one home spa in Nanaimo, BC (Jess). Nails, waxing,
  Happy Feet foot care and seniors' foot care. Wording comes from Jess's own site (jess-thetics.ca, pre-launch).
  Four designs to mix:
    A  Quiet Retreat      calm and unhurried: the private home studio, one guest at a time
    B  Happy Feet         warm and caring: foot care, foot massage and seniors' foot care, in the studio or at home
    C  Fresh & Polished   bright and simple: the nails and waxing menu, packages and gift cards
    D  The Original       Jess's current site (ivory, linen and champagne gold, Cormorant Garamond + Inter).
                          Its own layout ("jess", drawn at the bottom of this file, styled by original.css).
                          First tap switches to its colours and fonts.
  Jess's phone is in her site's settings but she chose never to show it as text, so it isn't shown here.
  The street address is only sent with a booking. Reviews are placeholders: never replace them with made-up names.
  hero-coast, candles, stones and pedicure are mood images from her site (placeholders until her own photos);
  the studio, diploma and disinfectant photos are Jess's own.
*/
(function () {
  var IMG = "/clients/jess-thetics/";
  var HOURS = [
    { days: "Tue to Fri", time: "10am to 6pm" },
    { days: "Saturday", time: "10am to 4pm" },
    { days: "Sun and Mon", time: "Closed" }
  ];
  var LEGAL = "© Jess-Thetics Beauty Spa · Nanaimo, BC";
  var PH_WHERE = "Replace with a real review";

  window.KF_CLIENT = {
    businessName: "Jess-Thetics Beauty Spa",
    css: IMG + "original.css",
    logo: IMG + "logo.png",
    industry: "retail",
    contact: {
      phone: "",
      email: "hello@jess-thetics.ca",
      area: "Nanaimo, BC",
      address: "Private home studio, Nanaimo (address sent with your booking)"
    },
    navLabels: { services: "Services", gallery: "The studio" },
    sectionLabels: { services: "Services", gallery: "The studio", about: "Meet Jess", reviews: "Reviews", contact: "Book & hours" },
    sectionHints: {
      services: "Nails, waxing, foot care and packages",
      gallery: "The private home studio",
      about: "The person behind the quiet room",
      reviews: "Placeholders until real reviews come in",
      contact: "Booking, hours and getting in touch"
    },
    radius: 14,
    addonsHide: ["quote-calculator", "service-map", "before-after", "online-store", "referral-form"],

    palettes: [
      { id: "champagne", name: "Champagne & ivory",
        bg: "#fbf8f4", surface: "#f3eee7", text: "#4a4440", muted: "#6f645b",
        primary: "#8a6d3b", onPrimary: "#ffffff", accent: "#d9c6b3", onAccent: "#4a4440",
        dark: "#4a4440", onDark: "#fbf8f4" },
      { id: "sage", name: "Sage spa",
        bg: "#fafbf8", surface: "#e9eee8", text: "#2f3a30", muted: "#56634f",
        primary: "#5f6e58", onPrimary: "#ffffff", accent: "#b39257", onAccent: "#1f1a10",
        dark: "#2f3a30", onDark: "#f3f5f1" },
      { id: "blush", name: "Soft blush",
        bg: "#fffaf8", surface: "#f7e9e4", text: "#3d2f2c", muted: "#6e5b56",
        primary: "#9c5550", onPrimary: "#ffffff", accent: "#e3c2ae", onAccent: "#3d2f2c",
        dark: "#3d2f2c", onDark: "#fbf3f0" },
      { id: "original", name: "Ivory & linen",
        bg: "#fbf8f4", surface: "#f3eee7", text: "#4a4440", muted: "#7b6f66",
        primary: "#d9c6b3", onPrimary: "#4a4440", accent: "#b39257", onAccent: "#ffffff",
        dark: "#4a4440", onDark: "#fbf8f4",
        hot: "#b39257", cool: "#e9eee8", soft: "#e3d9cd" }
    ],
    fonts: ["classic", "friendly", "modern", "sturdy",
      { id: "original", name: "Soft serif",
        head: "'Cormorant Garamond', 'Times New Roman', serif", body: "'Inter', system-ui, sans-serif",
        weight: 500, google: ["Cormorant+Garamond:ital,wght@0,500;1,500", "Caveat:wght@500;700"] }],

    /* Base wording (used by Quiet Retreat, and as a fallback for the others). */
    content: {
      hero: {
        eyebrow: "Private home spa · Nanaimo, BC",
        headline: "Unhurried care, one guest at a time.",
        sub: "Nails, waxing and foot care in a quiet home studio. No busy salon, no rush. Just you, Jess, and an hour that is entirely yours.",
        cta: "Book your visit",
        cta2: "Explore services",
        image: IMG + "studio-room.webp",
        images: [IMG + "studio-room.webp", IMG + "studio-nail-bar.webp", IMG + "studio-seating.webp"],
        badges: ["One guest at a time", "Easy parking right outside", "Tools disinfected between every client"],
        stats: [{ num: "1", label: "Guest at a time" }, { num: "2005", label: "Doing esthetics since" }, { num: "Free", label: "Parking right outside" }]
      },
      services: {
        eyebrow: "Services",
        title: "Nails, waxing and happy feet",
        intro: "Choose your services, pick a day that suits you, and Jess will confirm by text or email.",
        cta: "See all services",
        items: [
          { name: "Manicures", icon: "heart", image: IMG + "studio-nail-bar.webp",
            desc: "Classic or gel. Shape, cuticle care, a gentle hand massage and polish, or careful prep and a glossy gel finish that lasts." },
          { name: "Pedicures", icon: "foot", image: IMG + "pedicure.webp",
            desc: "Warm soak, nail and cuticle care, smoothing and polish. The spa pedicure adds a scrub, mask and a longer massage." },
          { name: "Waxing", icon: "leaf", image: IMG + "candles.webp",
            desc: "Brows to Brazilian, done privately and discreetly. Shaped to suit you, quick and gentle." },
          { name: "Happy Feet", icon: "drop",
            desc: "Foot massage, a hot stone foot ritual, and heel and callus care for tired, dry or hard-working feet." },
          { name: "Seniors' foot care", icon: "home",
            desc: "Toenails trimmed, heels smoothed and feet cared for, at an easy pace. In the studio, or Jess can come to you." },
          { name: "Packages", icon: "gift",
            desc: "Favourite treatments, paired, at a gentler price. Island Escape, Smooth & Polished and Mom's Morning Off." }
        ]
      },
      gallery: {
        eyebrow: "Inside the studio",
        title: "Have a look around",
        intro: "Jess works from a private studio in her Nanaimo home. It's calm, spotless and never crowded.",
        cta: "Book your visit",
        items: [
          { caption: "A quiet room, just for you", image: IMG + "studio-room.webp" },
          { caption: "Plenty of polish colours to choose from", image: IMG + "studio-nail-bar.webp" },
          { caption: "A cosy corner to sit and settle in", image: IMG + "studio-seating.webp" },
          { caption: "A fresh, clean washroom for guests", image: IMG + "studio-washroom.webp" },
          { caption: "Hospital-grade disinfectants for every tool", image: IMG + "disinfectants.webp" },
          { caption: "Esthetics diploma, with honours", image: IMG + "diploma.webp" }
        ]
      },
      about: {
        eyebrow: "Meet Jess",
        title: "The person behind the quiet room.",
        body: "I started Jess-Thetics because I wanted to offer the kind of visit I'd love myself: quiet, personal and never rushed. There's no busy front desk and no one waiting in the next chair.",
        body2: "Whether you come in for a fresh set of nails, a tidy wax or a foot massage after a long week, my goal is the same: that you leave feeling a little lighter than when you arrived.",
        image: IMG + "diploma.webp",
        points: ["One guest at a time", "Clean, always: tools disinfected between every client", "Honest and simple: clear prices, no upselling", "Esthetics diploma with Honours, Marvel Beauty Schools, 2005"],
        stats: [
          { num: "2005", label: "Doing esthetics since" },
          { num: "1", label: "Guest at a time" },
          { num: "Honours", label: "Esthetics diploma" },
          { num: "Local", label: "Proudly Nanaimo" }
        ],
        quote: "That you leave feeling a little lighter than when you arrived.",
        owner: { name: "Jess", role: "Esthetician, Jess-Thetics Beauty Spa", image: "ph:portrait:Photo of Jess coming soon" }
      },
      reviews: {
        eyebrow: "Kind words",
        title: "From the chair",
        rating: "New",
        count: "Placeholder: your Google rating shows here",
        items: [
          { quote: "Placeholder: a real client review will go here, in their own words.", name: "Client review (placeholder)", where: PH_WHERE },
          { quote: "Placeholder: a second real review, for example about a pedicure or foot massage.", name: "Client review (placeholder)", where: PH_WHERE },
          { quote: "Placeholder: a third real review, for example from a seniors' foot care visit.", name: "Client review (placeholder)", where: PH_WHERE }
        ]
      },
      contact: {
        eyebrow: "Book your visit",
        title: "Ready for a little quiet?",
        body: "Choose your services, pick a day that suits you, and Jess will confirm by text or email. The exact address is shared once your booking is confirmed.",
        cta: "Book your visit",
        formTitle: "Send Jess a message",
        hours: HOURS
      },
      footer: {
        blurb: "A private, one-on-one home spa in Nanaimo, BC. Nails, waxing and happy feet, at an unhurried pace.",
        links: ["Services & prices", "Book your visit", "Gift cards", "Happy Feet", "Seniors' foot care", "Meet Jess"],
        social: ["Facebook", "Instagram"],
        legal: LEGAL,
        ctaLine: "Proudly local, one guest at a time."
      }
    },

    designs: [
      /* ---------- A: Quiet Retreat (uses the base wording above) ---------- */
      { name: "Quiet Retreat", blurb: "Calm and unhurried, the private studio first" },

      /* ---------- B: Happy Feet ---------- */
      { name: "Happy Feet", blurb: "Warm and caring, foot care and seniors first",
        content: {
          hero: {
            eyebrow: "Happy Feet · Nanaimo, BC",
            headline: "Care for the feet that carry you.",
            sub: "Foot massage and gentle foot care for tired, dry or hard-working feet. Comfort first, always. In Jess's quiet studio, or Jess can come to you.",
            cta: "Book your visit",
            cta2: "Seniors' foot care",
            image: IMG + "stones.webp"
          },
          services: {
            eyebrow: "Foot care & massage",
            title: "Warm water, slow hands",
            intro: "Every foot service begins with warm towels or a soak, to soften and settle.",
            cta: "See prices",
            items: [
              { name: "Foot Massage", icon: "drop", desc: "Warm towels and a slow, deep massage for tired feet." },
              { name: "Hot Stone Foot Ritual", icon: "spark", desc: "Smooth warm stones and massage to melt away the week." },
              { name: "Heel & Callus Care", icon: "foot", desc: "Softening and smoothing for dry heels and rough patches." },
              { name: "Spa Pedicure", icon: "heart", desc: "The classic pedicure with a scrub, mask and a longer massage." },
              { name: "Seniors' foot care", icon: "home", desc: "Nails trimmed and filed, heels smoothed, and a rich cream and slow massage to finish. About 45 minutes to an hour." },
              { name: "Home visits", icon: "pin", desc: "Jess brings everything: clean, disinfected tools, towels and a footbath. Nanaimo and Lantzville; travel area to be confirmed." }
            ]
          },
          gallery: {
            eyebrow: "Two ways to visit",
            title: "Wherever is easier",
            intro: "Come to Jess's quiet studio in Nanaimo, or Jess can come to you.",
            cta: "Ask for a home visit",
            items: [
              { caption: "In the studio: one guest at a time", image: IMG + "studio-room.webp" },
              { caption: "A comfortable chair to settle into", image: IMG + "studio-seating.webp" },
              { caption: "Warm water, slow hands", image: IMG + "pedicure.webp" },
              { caption: "Hospital-grade clean tools", image: IMG + "disinfectants.webp" },
              { caption: "A private washroom for guests", image: IMG + "studio-washroom.webp" }
            ]
          },
          about: {
            eyebrow: "Peace of mind",
            title: "Safe, clean, and gentle.",
            body: "Metal tools are cleaned, then disinfected between every client in a hospital-grade disinfectant made for medical instruments. Files and buffers are new for each person.",
            body2: "Jess takes her time, explains what she's doing, and checks that you're comfortable. Booking for a parent? Jess can confirm the visit with you and let you know how it went."
          },
          reviews: {
            eyebrow: "Kind words",
            title: "Happy feet, in their words",
            items: [
              { quote: "Placeholder: a real review from someone who came in for a foot massage.", name: "Client review (placeholder)", where: PH_WHERE },
              { quote: "Placeholder: a real review from a family who booked seniors' foot care.", name: "Family review (placeholder)", where: PH_WHERE },
              { quote: "Placeholder: a real review about a home visit.", name: "Client review (placeholder)", where: PH_WHERE }
            ]
          },
          contact: {
            title: "Happy, comfortable feet.",
            body: "In the studio, or in the comfort of home. Book online, or send Jess a message to ask for a home visit.",
            cta: "Message Jess"
          },
          footer: {
            blurb: "Gentle foot care, foot massage and seniors' foot care in Nanaimo, in the studio or at home.",
            links: ["Happy Feet", "Seniors' foot care", "Home visits", "Book your visit", "Meet Jess"]
          }
        } },

      /* ---------- C: Fresh & Polished ---------- */
      { name: "Fresh & Polished", blurb: "Bright and simple, the menu and packages first",
        content: {
          hero: {
            eyebrow: "Nails · Waxing · Happy Feet",
            headline: "Fresh nails. Smooth skin. Happy feet.",
            sub: "Manicures, pedicures, waxing and foot care in a private Nanaimo studio. Book online and Jess confirms by text or email.",
            cta: "Book your visit",
            images: [IMG + "studio-nail-bar.webp", IMG + "pedicure.webp", IMG + "candles.webp"],
            stats: [{ num: "1", label: "Guest at a time" }, { num: "3", label: "Packages to pick from" }, { num: "Gift", label: "Cards, designed in a minute" }]
          },
          services: {
            eyebrow: "Packages",
            title: "Make a morning of it",
            intro: "Favourite treatments, paired, at a gentler price.",
            items: [
              { name: "Island Escape", icon: "gift", image: IMG + "pedicure.webp", desc: "Spa Pedicure and Gel Manicure. A slow, complete morning of care. About 2 hr 15 min." },
              { name: "Smooth & Polished", icon: "spark", image: IMG + "candles.webp", desc: "Brazilian and Gel Manicure, done privately in one visit. About 1 hr 40 min." },
              { name: "Mom's Morning Off", icon: "heart", image: IMG + "stones.webp", desc: "Foot Massage and Classic Manicure. An hour and a bit that's all yours." },
              { name: "Classic Manicure" }, { name: "Gel Manicure" }, { name: "Spa Pedicure" },
              { name: "Brow" }, { name: "Brazilian" }, { name: "Foot Massage" }
            ]
          },
          gallery: {
            eyebrow: "The studio",
            title: "Small, calm and spotless",
            items: [
              { caption: "Plenty of polish colours", image: IMG + "studio-nail-bar.webp" },
              { caption: "The treatment room", image: IMG + "studio-room.webp" },
              { caption: "A cosy corner", image: IMG + "studio-seating.webp" },
              { caption: "Clean, always", image: IMG + "disinfectants.webp" },
              { caption: "A fresh washroom for guests", image: IMG + "studio-washroom.webp" },
              { caption: "Trained, with honours", image: IMG + "diploma.webp" }
            ]
          },
          about: {
            eyebrow: "Trained, with honours",
            title: "Doing esthetics since 2005.",
            body: "Jess earned her Esthetics diploma with Honours from Marvel Beauty Schools in Toronto. Her training covered manicures and pedicures, waxing, lash and brow tinting, make-up and body treatments, along with bacteriology, sanitation and sterilization.",
            points: ["Pick your services online", "Choose a day that suits you", "Jess confirms by text or email", "Come in and relax: the address comes with your booking"]
          },
          reviews: {
            eyebrow: "Reviews",
            title: "What clients say",
            items: [
              { quote: "Placeholder: a real review about a gel manicure.", name: "Client review (placeholder)", where: "Add: name, town" },
              { quote: "Placeholder: a real review about waxing.", name: "Client review (placeholder)", where: "Add: name, town" },
              { quote: "Placeholder: a real review about a package or gift card.", name: "Client review (placeholder)", where: "Add: name, town" }
            ]
          },
          contact: {
            eyebrow: "Book & hours",
            title: "Pick a day that suits you.",
            body: "Book online and Jess confirms by text or email. Gift cards too: choose an amount, pick a design and add a personal note.",
            cta: "Book your visit"
          },
          footer: {
            blurb: "Manicures, pedicures, waxing and foot care in a private studio in Nanaimo, BC.",
            links: ["Services & prices", "Packages", "Gift cards", "Book your visit", "Contact"],
            ctaLine: "Give someone an hour of quiet."
          }
        } },

      /* ---------- D: The Original (Jess's current site) ---------- */
      { name: "The Original", blurb: "Your current Jess-Thetics site", badge: "Original",
        layout: "jess", palette: "original", font: "original",
        content: {
          hero: {
            promo: "Seniors’ Foot Care", promoSub: "Gentle care in the studio or at home", promoCta: "Learn more →",
            nav: ["Services", "Happy Feet", "Seniors", "Gift Cards", "Meet Jess", "Contact"], navCta: "Book your visit",
            eyebrow: "Private home spa · Nanaimo, BC",
            headline: "Unhurried care,", em: "one guest", headline2: "at a time.",
            sub: "Nails, waxing and foot care in a quiet home studio. No busy salon, no rush. Just you, Jess, and an hour that is entirely yours.",
            cta: "Book your visit", cta2: "Explore services", quiet: "Take a breath first",
            image: IMG + "hero-coast.webp"
          },
          services: {
            finderEyebrow: "Treatment finder", finderTitle: "Not sure what to book?",
            finderIntro: "Four quick taps and we’ll suggest something that suits your day.",
            finderQ: "Question 1 of 4", finderAsk: "What would make today feel better?",
            finderOpts: ["Fresh nails", "Smooth skin", "Happy feet", "Just some quiet"],
            eyebrow: "Packages", title: "Make a morning of it", intro: "Favourite treatments, paired, at a gentler price.",
            items: [
              { label: "The full treat", name: "Island Escape", desc: "Spa Pedicure and Gel Manicure. A slow, complete morning of care.", price: "$115", meta: "About 2 hr 15 min" },
              { label: "Smooth & finished", name: "Smooth & Polished", desc: "Brazilian and Gel Manicure, done privately in one visit.", price: "$105", meta: "About 1 hr 40 min" },
              { label: "Time for you", name: "Mom’s Morning Off", desc: "Foot Massage and Classic Manicure. An hour and a bit that’s all yours.", price: "$75", meta: "About 1 hr 15 min" }
            ],
            add: "Add to my visit",
            giftEyebrow: "Gift cards", giftTitle: "Give someone", giftEm: "an hour of quiet",
            giftBody: "Design a gift card in a minute: choose an amount, pick a design and add a personal note.",
            giftCta: "Design a gift card", giftImage: IMG + "candles.webp"
          },
          gallery: {
            eyebrow: "The private home studio", title: "A quiet room,", em: "just for you",
            intro: "Jess works from a private studio in her Nanaimo home. It’s calm, spotless and never crowded.",
            image: IMG + "studio-room.webp",
            points: [
              { name: "One client at a time", desc: "No waiting room and no one in the next chair. Your visit has Jess’s full attention." },
              { name: "Easy parking", desc: "Park right outside, with no meters and no hunting for a spot." },
              { name: "Address sent with your booking", desc: "For privacy, the exact address is shared once your appointment is confirmed." }
            ],
            galleryEyebrow: "Inside the studio", galleryTitle: "Have a look around",
            items: [
              { caption: "Plenty of polish colours to choose from", image: IMG + "studio-nail-bar.webp" },
              { caption: "A cosy corner to sit and settle in", image: IMG + "studio-seating.webp" },
              { caption: "A fresh, clean washroom for guests", image: IMG + "studio-washroom.webp" }
            ]
          },
          about: {
            eyebrow: "Meet Jess", title: "Welcome in",
            letter: ["Hello, and welcome.",
              "I started Jess-Thetics because I wanted to offer the kind of visit I’d love myself: quiet, personal and never rushed. There’s no busy front desk and no one waiting in the next chair. It’s just you, a warm room, and an hour set aside for you.",
              "Whether you come in for a fresh set of nails, a tidy wax or a foot massage after a long week, my goal is the same: that you leave feeling a little lighter than when you arrived.",
              "I can’t wait to meet you."],
            signature: "Jess",
            image: "ph:portrait:Photo of Jess coming soon",
            trainEyebrow: "Training", trainTitle: "Trained, with honours",
            train: "Jess earned her Esthetics diploma with Honours from Marvel Beauty Schools in Toronto, and has been doing esthetics since 2005.",
            trainImage: IMG + "diploma.webp"
          },
          reviews: {
            eyebrow: "Kind words", title: "From the chair", intro: "Real reviews from Jess’s clients will appear here.",
            items: [
              { quote: "A real client review will go here, in their own words.", name: "Client name · Nanaimo" },
              { quote: "A real client review will go here, in their own words.", name: "Client name · Nanaimo" },
              { quote: "A real client review will go here, in their own words.", name: "Client name · Nanaimo" }
            ]
          },
          contact: {
            title: "Ready for a little quiet?",
            body: "Choose your services, pick a day that suits you, and Jess will confirm by text or email.",
            cta: "Book your visit", cta2: "See services",
            hoursTitle: "Hours"
          },
          footer: {
            name: "Jess-Thetics Beauty Spa",
            blurb: "A private, one-on-one home spa in Nanaimo, BC. Nails, waxing and happy feet, at an unhurried pace.",
            small: "The exact address is shared once your booking is confirmed.",
            links: ["Services & prices", "Book your visit", "Gift cards", "Happy Feet", "Seniors’ foot care", "Meet Jess"],
            touch: ["Call or text Jess: number coming soon", "Facebook: coming soon", "Send a message", "Hours & FAQ"],
            legal: "© Jess-Thetics Beauty Spa · Nanaimo, BC", tag: "Proudly local, one guest at a time."
          }
        } }
    ]
  };

  /* ---------- Layout "jess": Jess's current site (styles in original.css) ---------- */
  var R = window.KF_RENDER, U = window.KF_UTIL;
  if (!R || !U || !U.T) return;
  var T = U.T, media = U.media, list = U.list, esc = U.esc;
  var LOTUS = '<svg class="js-lotus" viewBox="0 0 92 58" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.4"><path d="M46 52C38 40 38 22 46 6c8 16 8 34 0 46z"/><path d="M46 52C34 46 24 34 22 18c12 4 20 16 24 34z"/><path d="M46 52c12-6 22-18 24-34-12 4-20 16-24 34z"/><path d="M46 52C30 52 14 44 6 32c14-2 28 6 40 20z"/><path d="M46 52c16 0 32-8 40-20-14-2-28 6-40 20z"/></g></svg>';
  function eb(key, val, center) { return T("p", key, val, "js-eyebrow" + (center ? " center" : "")); }
  function h2em(c, a, em, b) { return "<h2>" + T("span", a, c[a]) + " " + T("em", em, c[em]) + (b ? " " + T("span", b, c[b]) : "") + "</h2>"; }
  R.hero.jess = function (c, ctx) {
    return '<div class="js-promo">' + T("strong", "promo", c.promo) + T("span", "promoSub", c.promoSub) + T("span", "promoCta", c.promoCta, "js-promo-cta") + "</div>" +
      '<header class="js-header"><div class="wrap"><span class="js-brand"><img src="' + esc(ctx.logo) + '" alt=""><span>' + esc("Jess-Thetics") + "<small>Beauty Spa</small></span></span>" +
        '<span class="js-nav" aria-hidden="true">' + list(c.nav).map(function (n) { return "<span>" + esc(n) + "</span>"; }).join("") + "</span>" +
        T("span", "navCta", c.navCta, "js-btn js-sm js-hcta") + '<span class="js-menu" aria-hidden="true"><span></span></span></div></header>' +
      '<div class="js-hero"><div class="wrap js-split"><div>' + '<img class="js-mark" src="' + esc(ctx.logo) + '" alt="Jess-Thetics Beauty Spa logo">' + eb("eyebrow", c.eyebrow) +
        "<h1>" + T("span", "headline", c.headline) + " " + T("em", "em", c.em) + " " + T("span", "headline2", c.headline2) + "</h1>" +
        T("p", "sub", c.sub, "js-lede") + '<div class="js-btns">' + T("span", "cta", c.cta, "js-btn") + T("span", "cta2", c.cta2, "js-btn js-outline") + "</div>" +
        T("p", "quiet", c.quiet, "js-quiet") + "</div>" +
        '<div class="js-hero-media">' + media(c.image, "Soft morning light over calm West Coast water") + LOTUS + "</div></div></div>";
  };
  R.services.jess = function (c) {
    return '<div class="js-sec js-alt"><div class="wrap"><div class="js-head center">' + eb("finderEyebrow", c.finderEyebrow, true) + T("h2", "finderTitle", c.finderTitle) + T("p", "finderIntro", c.finderIntro, "js-lede") + "</div>" +
      '<div class="js-quiz"><p class="js-quiz-top">' + T("span", "finderQ", c.finderQ) + '</p><div class="js-progress"><i></i></div>' + T("h3", "finderAsk", c.finderAsk) +
      '<div class="js-quiz-opts">' + list(c.finderOpts).map(function (o, i) { return T("span", "finderOpts." + i, o, "js-opt"); }).join("") + "</div></div></div></div>" +
      '<div class="js-sec js-alt js-tight-top"><div class="wrap"><div class="js-head center">' + eb("eyebrow", c.eyebrow, true) + T("h2", "title", c.title) + T("p", "intro", c.intro, "js-lede") + "</div>" +
      '<div class="js-grid3">' + list(c.items).map(function (it, i) {
        var k = "items." + i + ".";
        return '<article class="js-card js-pkg">' + T("p", k + "label", it.label, "js-pkg-label") + T("h3", k + "name", it.name) + T("p", k + "desc", it.desc) +
          T("p", k + "price", it.price, "js-price") + T("p", k + "meta", it.meta, "js-meta") + T("span", "add", c.add, "js-btn js-outline") + "</article>";
      }).join("") + "</div></div></div>" +
      '<div class="js-sec"><div class="wrap js-split rev"><div class="js-figure">' + media(c.giftImage, "Candles glowing softly in a dark, calm room") + "</div><div>" + eb("giftEyebrow", c.giftEyebrow) +
      h2em(c, "giftTitle", "giftEm") + T("p", "giftBody", c.giftBody, "js-lede") + '<div class="js-btns">' + T("span", "giftCta", c.giftCta, "js-btn") + "</div></div></div></div>";
  };
  R.gallery.jess = function (c) {
    var nums = ["i", "ii", "iii", "iv"];
    return '<div class="js-sec"><div class="wrap js-split"><div class="js-figure tall">' + media(c.image, "Jess’s treatment room") + "</div><div>" + eb("eyebrow", c.eyebrow) +
      h2em(c, "title", "em") + T("p", "intro", c.intro, "js-lede") +
      '<ul class="js-features">' + list(c.points).map(function (p, i) {
        return '<li><span class="js-num">' + nums[i % 4] + "</span><div>" + T("h3", "points." + i + ".name", p.name) + T("p", "points." + i + ".desc", p.desc) + "</div></li>";
      }).join("") + "</ul></div></div>" +
      '<div class="wrap"><div class="js-gallery-head">' + eb("galleryEyebrow", c.galleryEyebrow) + T("h3", "galleryTitle", c.galleryTitle) + "</div>" +
      '<div class="js-gallery">' + list(c.items).map(function (it, i) { return "<figure>" + media(it.image, it.caption) + T("figcaption", "items." + i + ".caption", it.caption) + "</figure>"; }).join("") + "</div></div></div>";
  };
  R.about.jess = function (c) {
    return '<div class="js-sec js-alt"><div class="wrap js-split"><div class="js-figure tall">' + media(c.image, "Photo of Jess") + "</div><div>" + eb("eyebrow", c.eyebrow) + T("h2", "title", c.title) +
      '<div class="js-letter">' + list(c.letter).map(function (p, i) { return T("p", "letter." + i, p); }).join("") + T("p", "signature", c.signature, "js-signature") + "</div></div></div>" +
      '<div class="wrap js-split rev js-train"><div class="js-figure">' + media(c.trainImage, "Esthetics Honours Award, Marvel Beauty Schools, Toronto, 2005") + "</div><div>" + eb("trainEyebrow", c.trainEyebrow) +
      T("h2", "trainTitle", c.trainTitle) + T("p", "train", c.train, "js-lede") + "</div></div></div>";
  };
  R.reviews.jess = function (c) {
    return '<div class="js-sec js-alt"><div class="wrap"><div class="js-head center">' + eb("eyebrow", c.eyebrow, true) + T("h2", "title", c.title) + T("p", "intro", c.intro, "js-lede") + "</div>" +
      '<div class="js-grid3">' + list(c.items).map(function (it, i) {
        return '<article class="js-card js-review"><span class="js-ph">Placeholder</span><div class="js-stars" aria-hidden="true">★★★★★</div><blockquote>' +
          T("p", "items." + i + ".quote", it.quote) + "</blockquote>" + T("cite", "items." + i + ".name", it.name) + "</article>";
      }).join("") + "</div></div></div>";
  };
  R.contact.jess = function (c) {
    return '<div class="js-sec js-mist js-cta"><div class="wrap js-narrow">' + LOTUS + T("h2", "title", c.title) + T("p", "body", c.body, "js-lede") +
      '<div class="js-btns center">' + T("span", "cta", c.cta, "js-btn") + T("span", "cta2", c.cta2, "js-btn js-outline") + "</div>" +
      (list(c.hours).length ? '<div class="js-hours">' + T("h3", "hoursTitle", c.hoursTitle) + "<table><tbody>" + list(c.hours).map(function (h, i) {
        return "<tr>" + T("th", "hours." + i + ".days", h.days) + T("td", "hours." + i + ".time", h.time) + "</tr>";
      }).join("") + "</tbody></table></div>" : "") + "</div></div>";
  };
  R.footer.jess = function (c, ctx) {
    var k = ctx.contact || {};
    var ul = function (key, arr) { return "<ul>" + list(arr).map(function (x, i) { return T("li", key + "." + i, x); }).join("") + "</ul>"; };
    return '<div class="js-footer"><div class="wrap"><div class="js-fgrid"><div><div class="js-fbrand"><img src="' + esc(ctx.logo) + '" alt="">' + T("span", "name", c.name) + "</div>" +
      T("p", "blurb", c.blurb) + T("p", "small", c.small, "js-small") + "</div>" +
      "<div><h4>Visit</h4>" + ul("links", c.links) + "</div>" +
      "<div><h4>Get in touch</h4><ul>" + (k.email ? "<li>Email: " + esc(k.email) + "</li>" : "") + list(c.touch).map(function (x, i) { return T("li", "touch." + i, x); }).join("") + "</ul></div></div>" +
      '<div class="js-fbase">' + T("span", "legal", c.legal) + T("span", "tag", c.tag) + "</div></div></div>";
  };
})();
