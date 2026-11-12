/*
  Keen Falcon Business Systems: Dan's own business (websites and simple tools for local
  businesses and trades on Vancouver Island). Three designs to mix:
    A  Tech Systems         sharp and technical: leads, quotes, jobs and invoices in one place
    B  Boots on the Ground  plain talk from someone who's worked the job site: whiteboard chaos to a clean system
    C  Simple & Local       friendly and clear: the three steps, free check-up front and centre
    D  The Original         the live keenfalcon.ca home page (navy and amber, Barlow + Inter), its own layout
                            ("kf", drawn at the bottom of this file, styled by original.css). First tap switches
                            to its colours and fonts. "AI" wording from the live site is reworded here.
  The "gallery" slot is used for "What we build" / "How it works", never a client portfolio.
  Reviews are placeholders until real ones come in. Do not replace them with made-up names.
  No prices anywhere in the copy (KF_SHOW_PRICES is false).
  Images: story-before/after.jpg are from keenfalcon.ca; the *-sq / *-p / *-w images are stills
  from Dan's workflow video (story-before-dark.jpg is a darkened copy for the photo header); dashboard.svg, jobsite.svg and checkup-phone.svg are drawn illustrations.
*/
(function () {
  var IMG = "/clients/keen-falcon/";
  var LEGAL = "© Keen Falcon Business Systems. Victoria, BC. Serving Vancouver Island.";
  var PH_WHERE = "Replace with a real review";

  window.KF_CLIENT = {
    businessName: "Keen Falcon Business Systems",
    css: IMG + "original.css",
    logo: IMG + "logo.png",
    industry: "trades",
    contact: {
      phone: "778-562-5988",
      email: "dan@keenfalcon.ca",
      area: "Victoria & Vancouver Island",
      address: "Victoria, BC · keenfalcon.ca"
    },
    navLabels: { services: "Packages", gallery: "How it works" },
    sectionLabels: { services: "Packages", gallery: "What we build" },
    sectionHints: { services: "The three steps, then custom tools", gallery: "How it works and what we build", reviews: "Placeholders until real reviews come in" },
    radius: 10,
    addonsHide: ["online-store", "virtual-tour", "referral-form", "social-feed", "quote-calculator", "newsletter"],

    palettes: [
      { id: "night", name: "Night shift (dark tech)",
        bg: "#0b1220", surface: "#121d31", text: "#e6edf6", muted: "#a3b3c8",
        primary: "#38bdf8", onPrimary: "#04121f", accent: "#f5a524", onAccent: "#1a1004",
        dark: "#060b14", onDark: "#e6edf6" },
      { id: "workshop", name: "Workshop (warm & rugged)",
        bg: "#f6f1e8", surface: "#ebe1d1", text: "#24201b", muted: "#5b5045",
        primary: "#3a2e24", onPrimary: "#ffffff", accent: "#d9822b", onAccent: "#1d1006",
        dark: "#221c16", onDark: "#f4ece0" },
      { id: "island", name: "Island morning (light & clean)",
        bg: "#ffffff", surface: "#eef4f7", text: "#15202b", muted: "#4a5866",
        primary: "#1b2a41", onPrimary: "#ffffff", accent: "#e09f3e", onAccent: "#1a1206",
        dark: "#1b2a41", onDark: "#eef2f6" },
      { id: "original", name: "Falcon navy & amber",
        bg: "#faf8f5", surface: "#ffffff", text: "#2e3440", muted: "#5b6270",
        primary: "#e09f3e", onPrimary: "#1b2a41", accent: "#1b2a41", onAccent: "#ffffff",
        dark: "#1b2a41", onDark: "#dce2ea",
        hot: "#1b2a41", cool: "#fcf1df", soft: "#e5e1da" }
    ],
    fonts: ["modern", "sturdy", "friendly", "classic",
      { id: "original", name: "Keen Falcon",
        head: "'Barlow Semi Condensed', 'Arial Narrow', Arial, sans-serif", body: "'Inter', system-ui, sans-serif",
        weight: 700, google: ["Barlow+Semi+Condensed:wght@600;700"] }],

    /* Base wording (used by Tech Systems, and as a fallback for the others). */
    content: {
      hero: {
        eyebrow: "Websites + business systems · Vancouver Island",
        headline: "Leads, quotes, jobs and invoices. One system.",
        sub: "Keen Falcon builds websites and simple tools for local businesses and trades on Vancouver Island. We map how work actually comes in and where it gets stuck, then build what fits.",
        cta: "Book a free check-up",
        cta2: "See the three steps",
        image: IMG + "dashboard.svg",
        images: [IMG + "dashboard.svg", IMG + "get-found-sq.jpg", IMG + "textback-sq.jpg"],
        badges: ["Missed-call text-back included", "Built around your workflow", "Local, on Vancouver Island"],
        stats: [{ num: "3", label: "Steps, each building on the last" }, { num: "1", label: "Place for every job" }, { num: "Free", label: "Check-up to start" }]
      },
      services: {
        eyebrow: "Packages",
        title: "Three steps. Each one builds on the last.",
        intro: "Start where you are. Every step includes the one before it, and custom tools come after Step 3.",
        cta: "Book a free check-up",
        items: [
          { name: "Step 1 · Get Found", icon: "spark",
            desc: "A website that brings in calls and bookings, a Google Business Profile that's set up properly, and missed-call text-back so no caller is left hanging." },
          { name: "Step 2 · Get Organized", icon: "doc",
            desc: "Online booking with reminders, and one tracker that follows every job from new lead to quoted, booked, invoiced and paid." },
          { name: "Step 3 · Run Without You", icon: "clock",
            desc: "A smart assistant answers the usual questions and takes a name and number after hours, while follow-ups and review requests go out on their own." },
          { name: "After Step 3 · Custom apps", icon: "hammer",
            desc: "Tools built for the part of your job that still eats your time: inventory, estimating, site walk-arounds, bookkeeping and more." },
          { name: "Free check-up", icon: "check",
            desc: "Five plain questions about how customers find you and how the work is organized. Dan reads every answer and gets back to you." },
          { name: "Care after launch", icon: "shield",
            desc: "Updates, backups and small fixes every month, plus someone to call when something needs to change." }
        ]
      },
      gallery: {
        eyebrow: "What we build",
        title: "The pieces, from first call to paid invoice.",
        intro: "Each one solves a real hold-up: a missed call, a lost quote, a job that only lives in someone's head.",
        cta: "Book a free check-up",
        items: [
          { caption: "A website people can call or book from", image: IMG + "get-found-sq.jpg" },
          { caption: "Booking, quotes and a job tracker", image: IMG + "get-organized-sq.jpg" },
          { caption: "Missed-call text-back", image: IMG + "textback-sq.jpg" },
          { caption: "Every job on one dashboard", image: IMG + "story-after.jpg" },
          { caption: "Fixing what slows the week down", image: IMG + "sound-familiar-sq.jpg" },
          { caption: "Less chasing, more doing", image: IMG + "saves-you-sq.jpg" }
        ]
      },
      about: {
        eyebrow: "Who builds it",
        title: "Built by someone who's done the work.",
        body: "Dan Stewart has spent 25+ years in sales and operations, has run businesses, and put in years as a labourer on job sites. He's seen where work gets stuck from the truck, the counter and the office.",
        body2: "So every system starts with the job, not the software. If a simple tool can't help, he'll say so.",
        image: IMG + "jobsite.svg",
        points: ["25+ years in sales and operations", "Has run businesses", "Years on job sites as a labourer", "Real-world experience first, technology second"],
        stats: [{ num: "25+", label: "Years in sales & operations" }, { num: "Years", label: "On job sites" }],
        quote: "",
        owner: { name: "Dan Stewart", role: "Founder, Keen Falcon", image: "ph:portrait:Photo of Dan" }
      },
      reviews: {
        eyebrow: "Client reviews",
        title: "What clients say",
        rating: "New",
        count: "Placeholder: your Google rating shows here",
        items: [
          { quote: "Placeholder: a real client's words about how the website brought in calls.", name: "Client review (placeholder)", where: PH_WHERE },
          { quote: "Placeholder: a real client's words about keeping jobs and invoices in one place.", name: "Client review (placeholder)", where: PH_WHERE },
          { quote: "Placeholder: a real client's words about working with Dan.", name: "Client review (placeholder)", where: PH_WHERE }
        ]
      },
      contact: {
        eyebrow: "Start here",
        title: "Book a free check-up.",
        body: "Tell us how work comes in today and where it gets stuck. We'll show you what's worth fixing first. No pressure, no jargon.",
        cta: "Book my free check-up",
        formTitle: "Free check-up",
        hours: [{ days: "Free call", time: "pick a time that suits you" }]
      },
      footer: {
        blurb: "Keen Falcon builds websites and simple tools for local businesses and trades on Vancouver Island: a website that brings in the work, plus straightforward systems to track leads, quotes, jobs and invoices.",
        links: ["Free check-up", "Packages", "How it works", "About Dan", "Contact"],
        social: ["Facebook", "LinkedIn"],
        legal: LEGAL,
        ctaLine: "Websites that bring in work. Tools that keep it moving."
      }
    },

    designs: [
      /* ---------- A: Tech Systems (uses the base wording above) ---------- */
      { name: "Tech Systems", blurb: "Sharp and technical, systems first" },

      /* ---------- B: Boots on the Ground ---------- */
      { name: "Boots on the Ground", blurb: "Plain talk from the job site",
        content: {
          hero: {
            eyebrow: "From the job site to a clean system",
            headline: "I've been where you are.",
            sub: "Jobs on a whiteboard. Quotes in your head. Calls you missed while your hands were full. I've worked job sites and run businesses, and I build simple systems that get that stuff off your plate.",
            cta: "Book a free call",
            cta2: "See how it works",
            image: IMG + "story-before-dark.jpg"
          },
          services: {
            eyebrow: "Three steps",
            title: "Start where you are. Move up when you're ready.",
            intro: "Each step includes the one before it. Nothing gets bolted on that you don't need.",
            cta: "Book a free call",
            items: [
              { name: "Get Found",
                desc: "People search, find you, and call or book. A proper website, your Google listing sorted, and a text goes back to anyone you couldn't pick up for." },
              { name: "Get Organized",
                desc: "The whiteboard comes off the wall. Bookings land on their own, and every job sits in one tracker until it's paid." },
              { name: "Run Without You",
                desc: "Common questions get answered while you're on the tools, and the follow-ups you'd forget at the end of the day go out anyway." },
              { name: "Then, custom apps",
                desc: "If you still do something by hand every week, like estimating, inventory or site walk-arounds, we can build a tool for it." }
            ]
          },
          gallery: {
            eyebrow: "Whiteboard to system",
            title: "From sticky notes to work that keeps moving.",
            intro: "The work itself is the easy part. Keeping track of it is where it falls apart.",
            cta: "Get your free check-up",
            items: [
              { caption: "Before: the whiteboard", image: IMG + "story-before.jpg" },
              { caption: "Sound familiar?", image: IMG + "sound-familiar-sq.jpg" },
              { caption: "On the job site", image: IMG + "jobsite.svg" },
              { caption: "One place for every job", image: IMG + "get-organized-sq.jpg" },
              { caption: "After: the work keeps moving", image: IMG + "story-after.jpg" }
            ]
          },
          about: {
            eyebrow: "About Dan",
            title: "Real-world first. Technology second.",
            body: "I've spent 25+ years in sales and operations, run businesses of my own, and put in years as a labourer on job sites. That's where I learned how work really gets done, and where it gets stuck.",
            body2: "I'll learn how your jobs actually run before building anything, and I stick around after the build to make sure it fits.",
            stats: [
              { num: "25+", label: "Years in sales & operations" },
              { num: "Owner", label: "Has run businesses" },
              { num: "Labourer", label: "Years on job sites" },
              { num: "Island", label: "Local to Vancouver Island" }
            ]
          },
          reviews: {
            eyebrow: "Word of mouth",
            title: "What clients say",
            items: [
              { quote: "Placeholder: a real tradesperson's words about getting the whiteboard off the wall.", name: "Client review (placeholder)", where: "Add: name, trade, town" },
              { quote: "Placeholder: a real client on missed calls and text-back.", name: "Client review (placeholder)", where: "Add: name, town" },
              { quote: "Placeholder: a real client on working with Dan.", name: "Client review (placeholder)", where: "Add: name, town" }
            ]
          },
          contact: {
            title: "Let's talk about your week.",
            body: "Call or text Dan. Tell me how work comes in and what's eating your evenings. I'll be straight about what's worth fixing.",
            cta: "Call Dan",
            hours: [{ days: "Free call.", time: "No pressure, no jargon." }]
          },
          footer: {
            blurb: "Simple systems for local businesses and trades, built by someone who's worked the job site. Victoria and all of Vancouver Island.",
            links: ["Free call", "Three steps", "Whiteboard to system", "About Dan", "Contact"]
          }
        } },

      /* ---------- C: Simple & Local ---------- */
      { name: "Simple & Local", blurb: "Friendly and clear, free check-up first",
        content: {
          hero: {
            eyebrow: "For local businesses on Vancouver Island",
            headline: "Websites that bring in work. Tools that keep it moving.",
            sub: "Start with a free check-up: five plain questions about how customers find you. Dan reads every answer and gets back to you.",
            cta: "Take the free check-up",
            images: [IMG + "story-after.jpg", IMG + "checkup-phone.svg", IMG + "textback-p.jpg"],
            stats: [{ num: "Free", label: "Business check-up" }, { num: "3", label: "Simple steps" }, { num: "Local", label: "Victoria & the Island" }]
          },
          services: {
            eyebrow: "Three simple steps",
            title: "Pick the step that fits.",
            intro: "Each step includes the one before it. Move up whenever you're ready.",
            items: [
              { name: "Step 1: Get Found", icon: "spark", image: IMG + "get-found-w.jpg",
                desc: "A website that works on a phone, a Google listing that's set up, and missed-call text-back. Customers find you, call or book." },
              { name: "Step 2: Get Organized", icon: "doc", image: IMG + "get-organized-w.jpg",
                desc: "Online booking with a reminder, quotes and invoices together, and a tracker for each job. No more phone tag." },
              { name: "Step 3: Run Without You", icon: "clock", image: IMG + "textback-w.jpg",
                desc: "Common questions get an answer and follow-ups go out, even when you're on a job. You still do the work." },
              { name: "Inventory" }, { name: "Estimating" }, { name: "Site walk-arounds" }, { name: "Bookkeeping" }
            ]
          },
          gallery: {
            eyebrow: "How it works",
            title: "Simple, start to finish.",
            items: [
              { caption: "1 · Free check-up", image: IMG + "checkup-phone.svg" },
              { caption: "2 · We look at how work comes in", image: IMG + "sound-familiar-p.jpg" },
              { caption: "3 · We build the site", image: IMG + "get-found-p.jpg" },
              { caption: "4 · We add the tools", image: IMG + "get-organized-p.jpg" },
              { caption: "5 · We keep it running", image: IMG + "saves-you-p.jpg" }
            ]
          },
          about: {
            eyebrow: "Your local guy",
            title: "Hi, I'm Dan.",
            quote: "Plain talk, step by step, and here after launch.",
            body: "I help local businesses and trades on Vancouver Island get found and get organized. No jargon: I explain what we're building and why, in normal words.",
            points: [
              "25+ years in sales and operations",
              "Run businesses, worked job sites",
              "Based in Victoria, serving the Island",
              "Here after launch when something needs to change"
            ]
          },
          reviews: {
            eyebrow: "Reviews",
            title: "Real reviews go here",
            items: [
              { quote: "Placeholder: a real review from a local business owner.", name: "Client review (placeholder)", where: "Add: name, business, town" },
              { quote: "Placeholder: a second real review.", name: "Client review (placeholder)", where: "Add: name, town" },
              { quote: "Placeholder: a third real review.", name: "Client review (placeholder)", where: "Add: name, town" }
            ]
          },
          contact: {
            eyebrow: "Say hello",
            title: "Start with a free check-up.",
            body: "Five quick questions, one at a time. Or just call or text Dan at 778-562-5988.",
            cta: "Take the free check-up",
            hours: [
              { days: "Check-up", time: "online, any time" },
              { days: "Calls & texts", time: "778-562-5988" },
              { days: "Email", time: "dan@keenfalcon.ca" }
            ]
          },
          footer: {
            blurb: "Websites and simple tools for local businesses and trades in Victoria and across Vancouver Island.",
            links: ["Free check-up", "Three steps", "How it works", "About Dan", "Contact"],
            ctaLine: "Questions? Call or text Dan."
          }
        } },

      /* ---------- D: The Original (the live keenfalcon.ca home page) ---------- */
      { name: "The Original", blurb: "Your current Keen Falcon site", badge: "Original",
        layout: "kf", palette: "original", font: "original",
        content: {
          hero: {
            nav: ["Home", "Packages", "Our Work", "Demos", "About"], navCta: "Book a Free Call",
            eyebrow: "Vancouver Island",
            headline: "Websites that bring in work.", headline2: "Tools that keep it moving.",
            sub: "For local businesses and trades on Vancouver Island. We start with how work actually comes in and where it gets stuck, then build what fits.",
            cta: "Book a Free Check-up", cta2: "See the three steps",
            offer: "We start with how your work comes in and where it gets stuck. Answer a few plain questions about how customers find you and how the work is organized.",
            offerCta: "Take the free business check-up"
          },
          services: {
            eyebrow: "Three steps",
            title: "Start where you are. Move up when you're ready.",
            intro: "Each step includes the one before it. A care plan can keep the site running after it's built.",
            items: [
              { badge: "Launch special", step: "Step 1", name: "Get Found", desc: "A website that brings in calls and bookings.",
                points: ["A website that works on a phone", "Tap-to-call, and a form that reaches you", "Google listing set up"], cta: "See the launch special" },
              { badge: "Most Popular", featured: true, step: "Step 2", name: "Get Organized", desc: "Booking, plus one place to track leads, quotes, jobs and invoices.",
                points: ["Online booking, with a reminder", "Quotes and invoices together", "One tracker for each job"], cta: "See what's included" },
              { step: "Step 3", name: "Run Without You", desc: "Common questions get an answer, and follow-ups go out, even when you're on a job.",
                points: ["A helper for the questions you hear all the time", "A name and number saved after hours", "Follow-ups that go out on their own"], cta: "See what's included" }
            ],
            cta2: "Book a free call",
            note: "Care plans keep your site running after it's built. Optional extras, like a Google or Facebook page, are on the packages page."
          },
          gallery: {
            eyebrow: "Before and after",
            title: "From the whiteboard to work that keeps moving.",
            items: [
              { tag: "Before", caption: "Sound familiar? Jobs on a whiteboard, quotes in your head, calls you missed.", image: IMG + "story-before.jpg" },
              { tag: "After", caption: "Leads, quotes, jobs and invoices in one place.", image: IMG + "story-after.jpg" }
            ],
            cta: "Get your free check-up",
            buildEyebrow: "Then we build what fits",
            buildTitle: "A website that brings in the work. Plus a simple way to track it.",
            buildIntro: "First, a website that brings in calls and bookings. Then straightforward systems to track leads, quotes, jobs and invoices, so nothing lives only in your head or on a whiteboard.",
            build: [
              { name: "People can find you", desc: "A clear website that works on a phone, with tap-to-call and a form that lands in your email. Customers look you up before they call." },
              { name: "People can reach you", desc: "Customers book a time themselves and get a reminder, so you're not playing phone tag. Miss a call, and they can get a text back." },
              { name: "Leads, quotes, jobs and invoices, tracked", desc: "One tracker from first call to paid. You can see what's a new lead, quoted, booked, underway, invoiced and paid, instead of keeping it in your head." }
            ],
            toolsEyebrow: "Custom tools",
            toolsTitle: "After Step 3: custom apps for your workflow.",
            tools: [
              { name: "Inventory", desc: "Know what's on the shelf or in the truck, and what needs ordering." },
              { name: "Estimating", desc: "Detailed estimates and material lists from your plans, prices and measurements." },
              { name: "Site walk-arounds", desc: "Walk the job, talk and take photos, and the notes land in a list you can send." },
              { name: "Bookkeeping", desc: "Receipts and expenses kept sorted and ready for your bookkeeper." },
              { name: "And more", desc: "If it's something you do by hand every week, ask. If a simple tool can't help, I'll say so." }
            ]
          },
          about: {
            eyebrow: "Who you'd be working with",
            title: "We start with the work.", title2: "Then we build around it.",
            body: "I've spent 30+ years in sales and operations, worked inside big businesses and small ones, run businesses of my own, and put in years as a labourer on job sites. We start with how work actually comes in and where it gets stuck. Then we build what fits: the website first, and simple tools around it.",
            link: "More about me",
            stepsEyebrow: "How it works",
            stepsTitle: "From a first website to tools that keep the work moving.",
            points: [
              { name: "Free check-up or call", desc: "We look at how work actually comes in, and where it gets stuck." },
              { name: "Pick a step", desc: "Get Found, Get Organized, or Run Without You. Custom tools when you need them." },
              { name: "We build it", desc: "While you keep running the business." },
              { name: "Handover and training", desc: "You and your team learn how to use it." },
              { name: "A care plan keeps it running", desc: "Updates, backups and small fixes, every month." }
            ]
          },
          reviews: {
            eyebrow: "Where it gets stuck",
            title: "Sound familiar?",
            intro: "The work itself is the easy part. Customers finding you, getting in touch, and keeping leads, quotes, jobs and invoices straight is where it gets stuck.",
            items: [
              { name: "Jobs tracked on sticky notes and whiteboards", quote: "It works until one falls off the fridge, and a customer falls through the cracks." },
              { name: "Invoicing at 11 at night", quote: "You did a full day of real work. The paperwork is still waiting when you get home." },
              { name: "Chasing customers who owe you money", quote: "Awkward calls, forgotten invoices, and money that should already be in the bank." },
              { name: "A website that's missing, or nobody calls from it", quote: "Customers look you up before they call. If they can't find you, they call someone else." }
            ],
            helperEyebrow: "A simple helper",
            helperTitle: "Someone to catch the easy stuff when you can't pick up.",
            helperIntro: "A missed call can text the person back. After hours, a simple helper can answer the questions you hear all the time and take a name and number. It only says what we set it up to say. If it isn't sure, it takes a message. You still do the work.",
            helper: [
              { name: "Missed-call text-back", desc: "When you can't pick up, the caller gets a short text right away, so the message doesn't sit there." },
              { name: "After-hours questions", desc: "Hours, service area, what to send. The helper answers the usual ones and asks for a name and number." },
              { name: "Follow-ups that go out", desc: "A check-in after a quote, or a note asking for a review, can go out without you remembering at the end of the day." }
            ]
          },
          contact: {
            eyebrow: "Your time",
            title: "See where the week goes",
            body: "Type the hours you lose to quotes, scheduling, and paperwork. You get a rough year total. That money line is your number. It is not a price for our work.",
            fields: ["Hours a week writing quotes", "Hours a week on scheduling and phone tag", "Hours a week on paperwork"],
            cta: "See the estimate",
            result: "Add a few hours and the estimate shows up here.",
            bandTitle: "Not sure which step fits?",
            bandCta: "Book a Free Check-up"
          },
          footer: {
            blurb: "Websites that bring in work. Tools that keep it moving.",
            links: ["Home", "Packages", "Our Work", "Demos", "About", "Book a Call"],
            where: "Remote, with meet and greets on Vancouver Island",
            legal: "© Keen Falcon Business Systems. All rights reserved."
          }
        } }
    ]
  };

  /* ---------- Layout "kf": the live keenfalcon.ca look (styles in original.css) ---------- */
  var R = window.KF_RENDER, U = window.KF_UTIL;
  if (!R || !U || !U.T) return;
  var T = U.T, media = U.media, list = U.list, esc = U.esc, icon = U.icon;
  var LOGO = '<svg class="kf-logo" viewBox="0 0 236 48" role="img" aria-label="Keen Falcon Business Systems"><path fill="#E09F3E" d="M4 44 L17 16 L29 7 L40 8 L46 15 L44 19 L41 14 L37 15 L36 20 L27 23 Z"/><path fill="#1B2A41" d="M30.5 12 L34 11.5 L33 17 Z"/><path fill="#E09F3E" d="M10 46 L27 26 L34 25 L15 46 Z"/>' +
    '<text x="58" y="25" font-size="26" fill="currentColor" textLength="176" lengthAdjust="spacingAndGlyphs" style="font-family:var(--f-head);font-weight:700">KEEN FALCON</text>' +
    '<text x="58" y="42" font-size="10.5" fill="currentColor" textLength="176" lengthAdjust="spacing" style="font-family:var(--f-body);font-weight:600">BUSINESS SYSTEMS</text></svg>';
  function eb(key, val) { return T("p", key, val, "kf-eyebrow"); }
  function cards(key, arr, cls, icons) {
    return '<div class="kf-grid ' + cls + '">' + list(arr).map(function (it, i) {
      return '<article class="kf-card">' + (icons ? '<span class="kf-badge-ico">' + icon(icons[i % icons.length]) + "</span>" : "") +
        T("h3", key + "." + i + ".name", it.name) + T("p", key + "." + i + "." + (it.quote ? "quote" : "desc"), it.quote || it.desc) + "</article>";
    }).join("") + "</div>";
  }
  R.hero.kf = function (c, ctx) {
    var k = ctx.contact || {};
    return '<header class="kf-header"><div class="wrap">' + LOGO +
      '<span class="kf-hicons" aria-hidden="true">' + (k.phone ? "<span>" + icon("phone") + "<small>Call</small></span>" : "") + (k.email ? "<span>" + icon("mail") + "<small>Email</small></span>" : "") + "</span>" +
      '<span class="kf-burger" aria-hidden="true">' + icon("menu") + "</span>" +
      '<span class="kf-nav" aria-hidden="true">' + list(c.nav).map(function (n) { return "<span>" + esc(n) + "</span>"; }).join("") + T("span", "navCta", c.navCta, "kf-btn kf-sm") + "</span></div></header>" +
      '<div class="kf-hero"><svg class="kf-wing" viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden="true"><path d="M80 400 L600 70 L600 400 Z" fill="#E09F3E" fill-opacity=".06"/><path d="M40 400 L600 40" stroke="#E09F3E" stroke-width="3" fill="none" vector-effect="non-scaling-stroke"/><path d="M200 400 L600 150" stroke="#E09F3E" stroke-opacity=".35" stroke-width="1.5" fill="none" vector-effect="non-scaling-stroke"/></svg>' +
        '<div class="wrap">' + eb("eyebrow", c.eyebrow) + "<h1>" + T("span", "headline", c.headline) + "<br>" + T("span", "headline2", c.headline2) + "</h1>" +
        T("p", "sub", c.sub, "kf-lead") + '<div class="kf-btns">' + T("span", "cta", c.cta, "kf-btn") + T("span", "cta2", c.cta2, "kf-btn kf-outline-light") + "</div></div></div>" +
      (c.offer ? '<div class="kf-callout"><div class="wrap"><div class="kf-offer">' + icon("check") + T("p", "offer", c.offer) + T("span", "offerCta", c.offerCta, "kf-btn") + "</div></div></div>" : "");
  };
  R.services.kf = function (c) {
    return '<div class="kf-sec kf-white"><div class="wrap"><div class="kf-head center">' + eb("eyebrow", c.eyebrow) + T("h2", "title", c.title) + T("p", "intro", c.intro, "kf-lead") + "</div>" +
      '<div class="kf-plans">' + list(c.items).map(function (it, i) {
        var k = "items." + i + ".";
        return '<article class="kf-card kf-plan' + (it.featured ? " featured" : (i === 0 ? " special" : "")) + '">' + T("p", k + "badge", it.badge, "kf-pbadge") +
          T("p", k + "step", it.step, "kf-eyebrow") + T("h3", k + "name", it.name, "kf-plan-name") + T("p", k + "desc", it.desc) +
          '<ul class="kf-check">' + list(it.points).map(function (pt, j) { return "<li>" + icon("check") + T("span", k + "points." + j, pt) + "</li>"; }).join("") + "</ul>" +
          '<div class="kf-btns col">' + T("span", k + "cta", it.cta, "kf-btn") + T("span", "cta2", c.cta2, "kf-btn kf-secondary") + "</div></article>";
      }).join("") + "</div>" + T("p", "note", c.note, "kf-note") + "</div></div>";
  };
  R.gallery.kf = function (c) {
    return '<div class="kf-sec"><div class="wrap">' + eb("eyebrow", c.eyebrow) + T("h2", "title", c.title) +
      '<div class="kf-ba">' + list(c.items).map(function (it, i) {
        return '<figure><div class="kf-frame">' + media(it.image, it.caption) + T("span", "items." + i + ".tag", it.tag, "kf-tag") + "</div>" + T("figcaption", "items." + i + ".caption", it.caption) + "</figure>";
      }).join("") + "</div>" + '<div class="kf-btns">' + T("span", "cta", c.cta, "kf-btn") + "</div></div></div>" +
      '<div class="kf-sec kf-white"><div class="wrap"><div class="kf-head">' + eb("buildEyebrow", c.buildEyebrow) + T("h2", "buildTitle", c.buildTitle) + T("p", "buildIntro", c.buildIntro, "kf-lead") + "</div>" +
      cards("build", c.build, "g3", ["social", "phone", "check"]) + "</div></div>" +
      '<div class="kf-sec"><div class="wrap"><div class="kf-head">' + eb("toolsEyebrow", c.toolsEyebrow) + T("h2", "toolsTitle", c.toolsTitle) + "</div>" + cards("tools", c.tools, "g3") + "</div></div>";
  };
  R.about.kf = function (c) {
    return '<div class="kf-sec kf-dark"><div class="wrap kf-split"><div>' + eb("eyebrow", c.eyebrow) + '<h2 class="kf-pull">' + T("span", "title", c.title) + " " + T("span", "title2", c.title2, "amber") + "</h2></div>" +
      '<div class="kf-story">' + T("p", "body", c.body) + T("p", "link", c.link, "kf-link") + "</div></div></div>" +
      '<div class="kf-sec"><div class="wrap"><div class="kf-head">' + eb("stepsEyebrow", c.stepsEyebrow) + T("h2", "stepsTitle", c.stepsTitle) + "</div>" +
      '<ol class="kf-steps">' + list(c.points).map(function (p, i) {
        return '<li><span class="kf-n" aria-hidden="true">' + (i + 1) + "</span>" + T("h3", "points." + i + ".name", p.name) + T("p", "points." + i + ".desc", p.desc) + "</li>";
      }).join("") + "</ol></div></div>";
  };
  R.reviews.kf = function (c) {
    return '<div class="kf-sec"><div class="wrap"><div class="kf-head">' + eb("eyebrow", c.eyebrow) + T("h2", "title", c.title) + T("p", "intro", c.intro, "kf-lead") + "</div>" +
      cards("items", c.items, "g4", ["doc", "clock", "chat", "social"]) + "</div></div>" +
      '<div class="kf-sec kf-dark"><div class="wrap"><div class="kf-head">' + eb("helperEyebrow", c.helperEyebrow) + T("h2", "helperTitle", c.helperTitle) + T("p", "helperIntro", c.helperIntro, "kf-lead") + "</div>" +
      '<div class="kf-grid g3">' + list(c.helper).map(function (h, i) { return "<article>" + T("h3", "helper." + i + ".name", h.name) + T("p", "helper." + i + ".desc", h.desc) + "</article>"; }).join("") + "</div></div></div>";
  };
  R.contact.kf = function (c) {
    return '<div class="kf-sec kf-white"><div class="wrap"><div class="kf-head">' + eb("eyebrow", c.eyebrow) + T("h2", "title", c.title) + T("p", "body", c.body, "kf-lead") + "</div>" +
      '<div class="kf-leak"><div class="kf-leak-grid">' + list(c.fields).map(function (f, i) { return '<div class="kf-field">' + T("span", "fields." + i, f, "kf-flabel") + '<span class="kf-input">0</span></div>'; }).join("") + "</div>" +
      T("span", "cta", c.cta, "kf-btn") + '<div class="kf-result">' + T("p", "result", c.result) + "</div></div></div></div>" +
      '<div class="kf-band"><div class="wrap">' + T("h2", "bandTitle", c.bandTitle) + T("span", "bandCta", c.bandCta, "kf-btn kf-navy") + "</div></div>";
  };
  R.footer.kf = function (c, ctx) {
    var k = ctx.contact || {};
    return '<div class="kf-footer"><div class="wrap"><div class="kf-fgrid"><div>' + LOGO + T("p", "blurb", c.blurb, "kf-ftag") + "</div>" +
      "<div><h4>Pages</h4><ul>" + list(c.links).map(function (l, i) { return T("li", "links." + i, l); }).join("") + "</ul></div>" +
      '<div><h4>Get in touch</h4><ul class="kf-fcontact"><li>' + icon("mail") + esc(k.email || "Email coming soon") + "</li><li>" + icon("phone") + esc(k.phone || "Phone coming soon") + "</li><li>" + icon("pin") + T("span", "where", c.where) + "</li></ul></div></div>" +
      T("p", "legal", c.legal, "kf-fbottom") + "</div></div>";
  };
})();
