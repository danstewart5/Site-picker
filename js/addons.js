/*
  Optional extras the client can tick on the "Extras" step.
  Edit freely:
    id        unique, no spaces (used in the submission)
    name      short name
    desc      one plain-English line
    group     heading it shows under
    popular   true = shows a "Popular" badge
    for       industries it suits: "trades", "medical", "retail" (shows a "Great for ..." badge
              when the client's config has a matching industry)
  A client config can hide add-ons with:  addonsHide: ["blog", "multi-language"]
*/
window.KF_ADDON_GROUPS = [
  "Get more leads",
  "Show off your work",
  "Run your business",
  "Look after your site"
];

window.KF_INDUSTRY_BADGE = {
  trades: "Great for trades",
  medical: "Great for clinics",
  retail: "Great for shops"
};

window.KF_ADDONS = [
  /* Get more leads */
  { id: "lead-form", group: "Get more leads", popular: true, for: ["trades", "medical", "retail"],
    name: "Lead / contact form with email + text alerts",
    desc: "Get an email and a text the moment someone fills in your form." },
  { id: "click-to-call", group: "Get more leads", popular: true, for: ["trades", "medical"],
    name: "Click-to-call sticky button",
    desc: "A call button that stays on screen so phone visitors can ring you in one tap." },
  { id: "text-back", group: "Get more leads", popular: true, for: ["trades", "medical", "retail"],
    name: "Text-back / click-to-text button (SMS)",
    desc: "Visitors can text you from the site, and missed calls get an automatic text back." },
  { id: "chat-assistant", group: "Get more leads", for: ["trades", "medical", "retail"],
    name: "AI chat assistant",
    desc: "Answers common questions 24/7 and collects contact details from new leads." },
  { id: "quote-calculator", group: "Get more leads", for: ["trades"],
    name: "Instant quote / estimate calculator",
    desc: "Visitors answer a few questions and get a ballpark price, and you get the lead." },
  { id: "referral-form", group: "Get more leads", for: ["medical"],
    name: "Doctor / referral form",
    desc: "A secure form doctors and patients can use to send referrals straight to you." },
  { id: "local-seo", group: "Get more leads", popular: true, for: ["trades", "medical", "retail"],
    name: "Google Business Profile + local SEO setup",
    desc: "Set up your Google listing and tune the site so locals find you on Google and Maps." },
  { id: "service-map", group: "Get more leads", for: ["trades", "medical"],
    name: "Google Maps service-area map",
    desc: "A map showing where you work or how to find you." },
  { id: "newsletter", group: "Get more leads", for: ["retail"],
    name: "Email newsletter signup",
    desc: "Collect emails so you can send news, offers and reminders." },

  /* Show off your work */
  { id: "hero-video", group: "Show off your work",
    name: "Background hero video",
    desc: "A short, silent video playing behind your main headline." },
  { id: "before-after", group: "Show off your work", popular: true, for: ["trades"],
    name: "Project gallery with before-and-after slider",
    desc: "Drag a slider to compare before and after photos of a job." },
  { id: "google-reviews", group: "Show off your work", popular: true, for: ["trades", "medical", "retail"],
    name: "Google reviews feed",
    desc: "Your latest Google reviews show on the site automatically." },
  { id: "video-testimonials", group: "Show off your work",
    name: "Video testimonials",
    desc: "Short customer videos that build trust fast." },
  { id: "virtual-tour", group: "Show off your work", for: ["retail", "medical"],
    name: "360° / virtual tour",
    desc: "Let people look around your shop, clinic or finished project online." },
  { id: "social-feed", group: "Show off your work", for: ["retail"],
    name: "Social media feed (Instagram / Facebook)",
    desc: "Your latest posts show on the site without any extra work." },
  { id: "blog", group: "Show off your work",
    name: "Blog / news",
    desc: "Post updates, tips and news that also help you show up on Google." },
  { id: "faq", group: "Show off your work", for: ["medical", "trades"],
    name: "FAQ section",
    desc: "Answer the questions you get asked every day, before people call." },

  /* Run your business */
  { id: "booking", group: "Run your business", popular: true, for: ["medical", "trades"],
    name: "Online booking / scheduling",
    desc: "Customers pick a time that suits them and it lands in your calendar." },
  { id: "online-store", group: "Run your business", popular: true, for: ["retail"],
    name: "Online store (e-commerce)",
    desc: "Sell products online with a cart, checkout, and pickup or shipping options." },
  { id: "payments", group: "Run your business", for: ["retail", "trades", "medical"],
    name: "Online payments / deposits",
    desc: "Take deposits or full payments by card right on your site." },
  { id: "analytics", group: "Run your business",
    name: "Analytics dashboard",
    desc: "See how many people visit, where they come from and how many become leads." },

  /* Look after your site */
  { id: "accessibility", group: "Look after your site", for: ["medical"],
    name: "Accessibility tools (text size / contrast)",
    desc: "Buttons that let visitors make text bigger or easier to read." },
  { id: "multi-language", group: "Look after your site",
    name: "Multi-language",
    desc: "Offer your site in more than one language." },
  { id: "care-plan", group: "Look after your site", popular: true,
    name: "Monthly care plan",
    desc: "Updates, backups and small edits handled for you every month." }
];

/*
  Prices for each extra, in CAD before GST. Shown to the client with a running estimate.
    setup     one-time price
    monthly   ongoing price per month (0 or leave out if none)
    unit      optional note, e.g. "per language"
  Set KF_SHOW_PRICES = false to hide all prices.
  Benchmarks (Nov 2026, Canadian small-business web design): booking $300-1,500,
  chat assistant $500-2,000 setup + ~$150/mo, online store $1,000-5,000,
  Google profile setup $300+, care plans $75-300/mo. These sit at the
  competitive end of those ranges.
*/
window.KF_SHOW_PRICES = true;
window.KF_PRICE_NOTE = "Estimates in CAD, before GST. Your final price is confirmed in your quote.";
window.KF_ADDON_PRICES = {
  "lead-form":          { setup: 150 },
  "click-to-call":      { setup: 50 },
  "text-back":          { setup: 200, monthly: 25 },
  "chat-assistant":     { setup: 750, monthly: 75 },
  "quote-calculator":   { setup: 600 },
  "referral-form":      { setup: 350 },
  "local-seo":          { setup: 350 },
  "service-map":        { setup: 75 },
  "newsletter":         { setup: 150 },
  "hero-video":         { setup: 250 },
  "before-after":       { setup: 200 },
  "google-reviews":     { setup: 150, monthly: 10 },
  "video-testimonials": { setup: 300 },
  "virtual-tour":       { setup: 400 },
  "social-feed":        { setup: 100 },
  "blog":               { setup: 350 },
  "faq":                { setup: 100 },
  "booking":            { setup: 400, monthly: 30 },
  "online-store":       { setup: 1500, monthly: 40 },
  "payments":           { setup: 300 },
  "analytics":          { setup: 200, monthly: 15 },
  "accessibility":      { setup: 150 },
  "multi-language":     { setup: 500, unit: "per language" },
  "care-plan":          { setup: 0, monthly: 99 }
};
