/*
  Keen Falcon Business Systems: Dan's own business (websites and simple tools for local
  businesses and trades on Vancouver Island). Three designs to mix:
    A  Tech Systems         sharp and technical: leads, quotes, jobs and invoices in one place
    B  Boots on the Ground  plain talk from someone who's worked the job site: whiteboard chaos to a clean system
    C  Simple & Local       friendly and clear: the three steps, free check-up front and centre
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
        dark: "#1b2a41", onDark: "#eef2f6" }
    ],
    fonts: ["modern", "sturdy", "friendly", "classic"],

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
        } }
    ]
  };
})();
