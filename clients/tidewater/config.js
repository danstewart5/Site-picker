/* Demo client: fictional renovation contractor. Copy clients/_template to start a real one. */
window.KF_CLIENT = {
  businessName: "Tidewater Renovations",
  industry: "trades",
  contact: {
    phone: "250-555-0142",
    email: "hello@tidewaterreno.example",
    area: "Victoria & the West Shore",
    address: "Serving Greater Victoria, BC"
  },
  navLabels: { gallery: "Projects" },
  sectionLabels: { gallery: "Projects" },
  addonsHide: ["referral-form", "online-store"],

  palettes: [
    { id: "harbour", name: "Harbour Navy",
      bg: "#ffffff", surface: "#eef3f7", text: "#16202b", muted: "#475569",
      primary: "#1d3f63", onPrimary: "#ffffff", accent: "#e2a23b", onAccent: "#1a1307",
      dark: "#0f2133", onDark: "#f1f5f9" },
    { id: "cedar", name: "Cedar & Moss",
      bg: "#fbf8f3", surface: "#f1eadf", text: "#2a211b", muted: "#5b4e44",
      primary: "#7a3e1d", onPrimary: "#ffffff", accent: "#4f7a5a", onAccent: "#ffffff",
      dark: "#2a211b", onDark: "#f8f3ec" },
    { id: "slate", name: "Slate & Safety Orange",
      bg: "#ffffff", surface: "#f1f2f3", text: "#1b1d20", muted: "#52575e",
      primary: "#2b3036", onPrimary: "#ffffff", accent: "#ee6a1f", onAccent: "#1a0b02",
      dark: "#16181b", onDark: "#f4f4f5" }
  ],
  fonts: ["sturdy", "modern", "classic"],

  /* Shared content. Each design below can override any section's fields. */
  content: {
    hero: {
      eyebrow: "Victoria renovation contractor",
      headline: "Renovations done right, on time and on budget.",
      sub: "Kitchens, bathrooms, basements and decks across Greater Victoria. One crew, one clear quote, no surprises.",
      cta: "Get a free quote",
      cta2: "See our work",
      image: "ph:room:Finished kitchen",
      images: ["ph:room:Kitchen remodel", "ph:scene:Cedar deck", "ph:room:Bathroom"],
      badges: ["Licensed & insured", "WorkSafeBC covered", "2-year warranty"],
      stats: [{ num: "18 yrs", label: "Building in Victoria" }, { num: "400+", label: "Projects finished" }, { num: "4.9★", label: "Google rating" }]
    },
    services: {
      eyebrow: "What we do",
      title: "Renovations for every room",
      intro: "From a bathroom refresh to a full basement suite, we handle permits, trades and clean-up.",
      cta: "Book a site visit",
      items: [
        { name: "Kitchen renovations", desc: "Layouts, cabinets, counters and lighting that work for how you cook.", icon: "home", image: "ph:room:Kitchen" },
        { name: "Bathroom remodels", desc: "Tile, showers, vanities and heated floors, done watertight.", icon: "drop", image: "ph:room:Bathroom" },
        { name: "Basement suites", desc: "Legal suites built to code, from framing to final inspection.", icon: "ruler", image: "ph:room:Basement suite" },
        { name: "Decks & outdoor", desc: "Cedar and composite decks, railings and covered patios.", icon: "leaf", image: "ph:scene:Deck" },
        { name: "Additions", desc: "More space without moving: bump-outs and second storeys.", icon: "hammer" },
        { name: "Repairs & upgrades", desc: "Windows, doors, drywall and the jobs on your list.", icon: "shield" }
      ]
    },
    gallery: {
      eyebrow: "Recent projects",
      title: "Our work around Victoria",
      intro: "A few recent jobs from Oak Bay to Langford.",
      cta: "View all projects",
      items: [
        { caption: "Oak Bay kitchen", image: "ph:room:Kitchen" },
        { caption: "Langford basement suite", image: "ph:room:Suite" },
        { caption: "Saanich cedar deck", image: "ph:scene:Deck" },
        { caption: "James Bay ensuite", image: "ph:room:Ensuite" },
        { caption: "Colwood addition", image: "ph:scene:Addition" },
        { caption: "Esquimalt mudroom", image: "ph:room:Mudroom" }
      ]
    },
    about: {
      eyebrow: "About us",
      title: "A local crew that shows up",
      body: "Tidewater started with one truck and a promise: return every call, keep the site clean, and finish when we said we would. Eighteen years later, that's still how we work.",
      body2: "You'll deal with the same project lead from first visit to final walk-through.",
      image: "ph:portrait:Our crew",
      points: ["Written, fixed-price quotes", "Daily site clean-up", "Permits handled for you", "2-year workmanship warranty"],
      stats: [{ num: "18", label: "Years in business" }, { num: "400+", label: "Projects" }, { num: "12", label: "Crew members" }, { num: "4.9", label: "Google stars" }],
      quote: "We treat every house like it's our own mother's.",
      owner: { name: "Mark", role: "Owner & project lead", image: "ph:portrait:Mark" }
    },
    reviews: {
      eyebrow: "Reviews",
      title: "Homeowners say it best",
      rating: "4.9",
      count: "from 126 Google reviews",
      items: [
        { quote: "They finished our kitchen a week early and the site was spotless every single day.", name: "Sarah K.", where: "Oak Bay" },
        { quote: "Clear quote, no surprise extras, and the basement suite passed inspection first try.", name: "Dev P.", where: "Langford" },
        { quote: "Mark answered every text, even on weekends. Our new deck is the best room in the house.", name: "Linda & Tom R.", where: "Saanich" },
        { quote: "Professional from start to finish. We've already booked them for the bathroom.", name: "Jason M.", where: "Esquimalt" }
      ]
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Let's talk about your project",
      body: "Tell us what you're planning. We'll visit, measure, and send a written quote within a week.",
      cta: "Request a quote",
      formTitle: "Request a free quote",
      hours: [{ days: "Mon to Fri", time: "7:30am to 5pm" }, { days: "Saturday", time: "By appointment" }, { days: "Sunday", time: "Closed" }]
    },
    footer: {
      blurb: "Kitchens, bathrooms, suites and decks across Greater Victoria since 2008.",
      links: ["Services", "Projects", "About", "Reviews", "Contact"],
      social: ["Facebook", "Instagram", "Houzz"],
      legal: "© Tidewater Renovations. Licensed & insured in British Columbia.",
      ctaLine: "Ready to start your renovation?"
    }
  },

  /* The 2-3 sample designs. Design A uses layout A for every section, B uses B, C uses C. */
  designs: [
    { name: "Straightforward", blurb: "Clean and trustworthy" },
    { name: "Bold", blurb: "Big photos, big statements",
      content: {
        hero: { eyebrow: "Greater Victoria · Since 2008", headline: "Build the home you actually want.", cta: "Start your project", cta2: "Call 250-555-0142", image: "ph:scene:Finished home" },
        services: { eyebrow: "Services", title: "One crew. Every trade." },
        reviews: { eyebrow: "What clients say" },
        contact: { title: "Ready when you are.", body: "Call or text for a free, no-pressure site visit.", cta: "Call now" }
      } },
    { name: "Craftsman", blurb: "Editorial and detailed",
      content: {
        hero: { eyebrow: "Renovations · Victoria BC", headline: "Careful work. Honest quotes.", sub: "A small, experienced crew for homeowners who care about the details." },
        services: { title: "How we can help" },
        gallery: { title: "Swipe through recent jobs" },
        about: { title: "Meet Mark" },
        contact: { eyebrow: "Visit or call", title: "Where to find us" }
      } }
  ]
};
