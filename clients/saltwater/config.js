/*
  Saltwater Building Co: licensed general contractor in Ucluelet, BC (Chris). Custom homes, renovations,
  residential development and commercial builds in Ucluelet, Tofino, Whistler and the remote coast.
  Options A to C use the wording from Keen Falcon's Saltwater sample site; D is their CURRENT live site.
    A  Wild Coast        bold and dramatic: built for the rain, wind and salt
    B  Built Right       building science and process: stage by stage, how we build
    C  Straight Talk     simple and direct: four kinds of work, first call to keys, request a quote
    D  Current Site      saltwaterbuildingco.ca as it is today (layout "sw", styled by original.css).
                         Badge "Current site". Its colours and fonts couldn't be read from the live site,
                         so the "Current site" colours/fonts are a close approximation (white, black and
                         sea grey, uppercase headings). Some longer sentences were cut off when reading the
                         live site and were completed from its own summary: check wording with Chris.
  No job photos are in the repo yet: every image is a labelled drawn placeholder (their live photos are not hotlinked).
  Phone and PO box come from the sample site; email is not set up yet, so it shows as coming soon.
  Reviews are placeholders: never replace them with made-up names.
*/
(function () {
  var LEGAL = "© Saltwater Building Co Ltd. Licensed home builder, Ucluelet, BC. Licence #52492.";
  var PH_WHERE = "Replace with a real review";

  window.KF_CLIENT = {
    businessName: "Saltwater Building Co",
    css: "/clients/saltwater/original.css",
    industry: "trades",
    contact: {
      phone: "604-848-4040",
      email: "",
      area: "Ucluelet, BC",
      address: "PO Box 221, Ucluelet, BC"
    },
    navLabels: { services: "What we do", gallery: "Our work" },
    sectionLabels: { services: "What we do", gallery: "Our work", about: "How we build", reviews: "Reviews", contact: "Start a project" },
    sectionHints: {
      services: "Custom homes, renovations, development, commercial",
      gallery: "Recent projects",
      about: "Building science and project management",
      reviews: "Placeholders until real reviews come in",
      contact: "Request a quote"
    },
    radius: 8,
    addonsHide: ["online-store", "virtual-tour", "newsletter", "social-feed"],

    palettes: [
      { id: "tide", name: "Deep tide",
        bg: "#f4f7f6", surface: "#e6eeed", text: "#0f2226", muted: "#3e5658",
        primary: "#1c3337", onPrimary: "#ffffff", accent: "#d99a66", onAccent: "#1d1206",
        dark: "#0f2226", onDark: "#e6eeed" },
      { id: "driftwood", name: "Driftwood",
        bg: "#faf7f2", surface: "#efe7dc", text: "#2a241d", muted: "#5e5347",
        primary: "#7a5233", onPrimary: "#ffffff", accent: "#5fb3c1", onAccent: "#0f2226",
        dark: "#2a241d", onDark: "#f4efe7" },
      { id: "storm", name: "Storm grey",
        bg: "#ffffff", surface: "#eef1f2", text: "#161b1e", muted: "#4b555b",
        primary: "#284549", onPrimary: "#ffffff", accent: "#f6e3a6", onAccent: "#3a2f10",
        dark: "#161b1e", onDark: "#eef1f2" },
      { id: "current", name: "Current site",
        bg: "#ffffff", surface: "#f3f3f1", text: "#1b1b1b", muted: "#555555",
        primary: "#1b1b1b", onPrimary: "#ffffff", accent: "#4b6566", onAccent: "#ffffff",
        dark: "#1b1b1b", onDark: "#f3f3f1",
        hot: "#4b6566", cool: "#e9eeee", soft: "#dddddb" }
    ],
    fonts: ["sturdy", "modern", "classic", "friendly",
      { id: "current", name: "Current site",
        head: "'Montserrat', 'Helvetica Neue', Arial, sans-serif", body: "'Lato', 'Helvetica Neue', Arial, sans-serif",
        weight: 600, upper: true, google: ["Montserrat:wght@500;600;700", "Lato:wght@400;700"] }],

    /* Base wording (used by Wild Coast, and as a fallback for the others). */
    content: {
      hero: {
        eyebrow: "Ucluelet · Tofino · Remote coastal BC",
        headline: "Built for the wild side of the coast.",
        sub: "Custom homes, renovations and commercial builds on Vancouver Island's west coast. Built to handle the rain, the wind and the salt, and managed so you always know where your project stands.",
        cta: "Start your project",
        cta2: "See our work",
        image: "ph:scene:Finished home, exterior at dusk",
        images: ["ph:scene:Finished home at dusk", "ph:room:Living room and windows", "ph:scene:Framing up"],
        badges: ["Licensed builder, BC licence #52492", "Based in Ucluelet", "Tofino · Ucluelet · Whistler · remote coast"],
        stats: [{ num: "#52492", label: "BC builder licence" }, { num: "3,000+", label: "mm of rain a year here" }, { num: "4", label: "Kinds of work, one standard" }]
      },
      services: {
        eyebrow: "What we do",
        title: "Four kinds of work. One standard.",
        intro: "From a bare lot to move-in day, built for the site, the view and the weather.",
        cta: "Start your project",
        items: [
          { name: "Custom homes", icon: "home", image: "ph:scene:Custom home", desc: "From a bare lot to move-in day. Built for the site, the view and the weather." },
          { name: "Renovations", icon: "hammer", image: "ph:room:Renovation", desc: "Additions, rebuilds and upgrades that stand up to life on the coast." },
          { name: "Residential development", icon: "ruler", image: "ph:scene:Multi-home project", desc: "Multi-home projects planned, priced and managed start to finish." },
          { name: "Commercial", icon: "shield", desc: "Larger builds with architects and engineers, like Rising Tide Boat Works at Ucluelet's former seaplane base." },
          { name: "We know the coast", icon: "pin", desc: "Based in Ucluelet. We know the weather, the sites and the local trades." },
          { name: "No surprises", icon: "check", desc: "Clear schedule, clear budget, and regular updates on how the job is going." }
        ]
      },
      gallery: {
        eyebrow: "Our work",
        title: "Recent projects",
        intro: "Custom homes and renovations around Ucluelet and Tofino.",
        cta: "See all projects",
        items: [
          { caption: "1406 Imperial · Ucluelet · Custom home", image: "ph:scene:1406 Imperial" },
          { caption: "1769 Rainforest Lane · Ucluelet", image: "ph:scene:Rainforest Lane" },
          { caption: "Ucluelet Modern House · Custom home", image: "ph:room:Ucluelet Modern House" },
          { caption: "Gibsons Landing · Sunshine Coast", image: "ph:scene:Gibsons Landing" },
          { caption: "Rising Tide Boat Works · Now building", image: "ph:scene:Rising Tide site" },
          { caption: "Bozman Cabin · Exteriors", image: "ph:scene:Bozman Cabin" }
        ]
      },
      about: {
        eyebrow: "How we build",
        title: "Built for three metres of rain a year.",
        body: "The west coast is hard on buildings. Rain comes sideways, salt gets into everything, and a small mistake in the wall becomes rot in five years. We build using building science and modern methods so your home stays dry, warm and solid for decades.",
        body2: "And we manage every job properly: a clear schedule, a clear budget, and regular updates so you're never guessing.",
        image: "ph:scene:Wall section on site",
        points: ["Cladding chosen for salt air and driving rain", "A rainscreen gap so the wall can drain and dry", "Weather barrier taped and sealed", "Insulation and air sealing for warm, healthy homes"],
        stats: [
          { num: "3,000+", label: "mm of rain a year" },
          { num: "#52492", label: "BC builder licence" },
          { num: "4", label: "Stages, lot to keys" },
          { num: "1", label: "Clear schedule and budget" }
        ],
        quote: "",
        owner: { name: "Chris", role: "Saltwater Building Co, Ucluelet", image: "ph:portrait:Photo of Chris" }
      },
      reviews: {
        eyebrow: "What clients say",
        title: "Built with us?",
        rating: "New",
        count: "Placeholder: your Google rating shows here",
        items: [
          { quote: "Placeholder: a short review from a past client about how the build went and what it was like working with Saltwater.", name: "Client review (placeholder)", where: PH_WHERE },
          { quote: "Placeholder: a review from a renovation client.", name: "Client review (placeholder)", where: PH_WHERE },
          { quote: "Placeholder: a review from an out-of-town owner about the photo updates.", name: "Client review (placeholder)", where: PH_WHERE }
        ]
      },
      contact: {
        eyebrow: "Start your project",
        title: "Tell us what you're building.",
        body: "A few details now means a real answer on the first call: what you're planning, where the site is, and when you'd like to start.",
        cta: "Send my project details",
        formTitle: "Tell us about your project",
        hours: [{ days: "Call or text", time: "604-848-4040" }, { days: "Mail", time: "PO Box 221, Ucluelet" }]
      },
      footer: {
        blurb: "Licensed home builder in Ucluelet, BC. Custom homes, renovations, residential development and commercial builds on the west coast.",
        links: ["Our work", "What we do", "How we build", "Where we build", "Request a quote"],
        social: ["Instagram", "Facebook"],
        legal: LEGAL,
        ctaLine: "Built for the wild side of the coast."
      }
    },

    designs: [
      /* ---------- A: Wild Coast (uses the base wording above) ---------- */
      { name: "Wild Coast", blurb: "Bold and dramatic, built for the weather" },

      /* ---------- B: Built Right ---------- */
      { name: "Built Right", blurb: "Building science and the process, stage by stage",
        content: {
          hero: {
            eyebrow: "Licensed builder · Ucluelet, BC",
            headline: "A west coast home, stage by stage.",
            sub: "From a cleared lot to keys in your hand, built with building science and managed so you always know where things stand, even from out of town.",
            cta: "Start your project",
            cta2: "How we build",
            image: "ph:scene:Wrapped, windows in"
          },
          services: {
            eyebrow: "Start to finish",
            title: "Four stages, done properly",
            intro: "One of our builds, from bare lot to finished home.",
            cta: "Talk to us",
            items: [
              { name: "Foundation", icon: "ruler", desc: "Lot cleared, drainage in, foundation poured for a wet site." },
              { name: "Framing", icon: "hammer", desc: "Walls and roof framed and braced for coastal wind." },
              { name: "Weather-tight", icon: "shield", desc: "Wrapped, windows in, rainscreen and siding on before the rain arrives." },
              { name: "Finished", icon: "home", desc: "Keys handed over. Built to last on the wild side of the coast." }
            ]
          },
          gallery: {
            eyebrow: "Now building",
            title: "Rising Tide Boat Works and recent homes",
            intro: "An electric boat building hub on the site of Ucluelet's Second World War seaplane base. Designed by Michael Green Architecture. Built by Saltwater.",
            cta: "Talk to us about a commercial build",
            items: [
              { caption: "Rising Tide Boat Works · Under construction", image: "ph:scene:Rising Tide site" },
              { caption: "1406 Imperial", image: "ph:scene:1406 Imperial" },
              { caption: "1769 Rainforest Lane", image: "ph:scene:Rainforest Lane" },
              { caption: "Ucluelet Modern House", image: "ph:room:Ucluelet Modern House" },
              { caption: "Gibsons Landing", image: "ph:scene:Gibsons Landing" }
            ]
          },
          about: {
            eyebrow: "Why Saltwater",
            title: "Why clients build with us.",
            body: "We line up the trades and suppliers that fit your project, so you don't have to. Then we build with building science and modern methods, so it stays dry and solid for decades.",
            body2: "Clear schedule, clear budget, and regular photo updates and site walks along the way."
          },
          reviews: {
            eyebrow: "What clients say",
            title: "In their words",
            items: [
              { quote: "Placeholder: a past client on how the build went and working with Saltwater.", name: "Client review (placeholder)", where: PH_WHERE },
              { quote: "Placeholder: a client who built from out of town.", name: "Client review (placeholder)", where: PH_WHERE },
              { quote: "Placeholder: a commercial or development client.", name: "Client review (placeholder)", where: PH_WHERE }
            ]
          },
          contact: {
            title: "Planning a build on the coast?",
            body: "Tell us about your site, your plans and your budget. We'll be straight with you about what's realistic.",
            cta: "Call or text Saltwater"
          },
          footer: {
            blurb: "Custom homes, renovations and commercial builds in Ucluelet, Tofino, Whistler and the remote coast.",
            links: ["Start to finish", "Now building", "Why Saltwater", "Request a quote"]
          }
        } },

      /* ---------- C: Straight Talk ---------- */
      { name: "Straight Talk", blurb: "Simple and direct, first call to keys",
        content: {
          hero: {
            eyebrow: "Home builder · Ucluelet, Tofino & the remote coast",
            headline: "From first call to keys.",
            sub: "Custom homes, renovations, residential development and commercial builds. Tell us about your site and we'll give you a clear price and a clear schedule.",
            cta: "Request a quote",
            images: ["ph:scene:Finished home", "ph:room:Renovation", "ph:scene:Framing"],
            stats: [{ num: "Ucluelet", label: "Home base" }, { num: "Tofino", label: "Oceanfront and forest lots" }, { num: "Whistler", label: "Mountain homes" }]
          },
          services: {
            eyebrow: "What we do",
            title: "Four kinds of work",
            intro: "One standard, whatever the size of the job.",
            items: [
              { name: "Custom homes", icon: "home", image: "ph:scene:Custom home", desc: "From a bare lot to move-in day. Built for the site, the view and the weather." },
              { name: "Renovations", icon: "hammer", image: "ph:room:Renovation", desc: "Additions, rebuilds and upgrades that stand up to life on the coast." },
              { name: "Development & commercial", icon: "ruler", image: "ph:scene:Commercial build", desc: "Multi-home projects and larger builds with architects and engineers, planned, priced and managed start to finish." },
              { name: "Ucluelet" }, { name: "Tofino" }, { name: "Whistler" }, { name: "Remote coast: boat, float plane or logging road" }
            ]
          },
          gallery: {
            eyebrow: "Our work",
            title: "Recent projects",
            items: [
              { caption: "1406 Imperial", image: "ph:scene:1406 Imperial" },
              { caption: "1769 Rainforest Lane", image: "ph:scene:Rainforest Lane" },
              { caption: "Ucluelet Modern House", image: "ph:room:Ucluelet Modern House" },
              { caption: "Gibsons Landing", image: "ph:scene:Gibsons Landing" },
              { caption: "Bozman Cabin", image: "ph:scene:Bozman Cabin" },
              { caption: "Your project next?", image: "ph:scene:Your lot" }
            ]
          },
          about: {
            eyebrow: "How it works",
            title: "From first call to keys.",
            body: "No guessing, no surprises. You know the price, the schedule and where things stand at every step.",
            points: [
              "Talk: tell us about your site, your plans and your budget",
              "Plan & price: we work with your designer or ours and give you a clear price and schedule",
              "Build: regular photo updates and site walks, even from out of town",
              "Handover: a full walkthrough, a finished punch list, and warranty coverage"
            ]
          },
          reviews: {
            eyebrow: "Reviews",
            title: "What clients say",
            items: [
              { quote: "Placeholder: a real review from a custom home client.", name: "Client review (placeholder)", where: "Add: name, project, town" },
              { quote: "Placeholder: a real review from a renovation client.", name: "Client review (placeholder)", where: "Add: name, project, town" },
              { quote: "Placeholder: a real review from a development client.", name: "Client review (placeholder)", where: "Add: name, project, town" }
            ]
          },
          contact: {
            eyebrow: "Request a quote",
            title: "Tell us what you're building.",
            body: "What you're planning, where the site is, when you'd like to start and where you're at. Site photos or plans help us give you a real answer.",
            cta: "Send my project details"
          },
          footer: {
            blurb: "Licensed home builder in Ucluelet, BC, building across the west coast.",
            links: ["What we do", "Our work", "How it works", "Request a quote"],
            ctaLine: "Planning a build? Call or text."
          }
        } },

      /* ---------- D: Current Site (saltwaterbuildingco.ca today) ---------- */
      { name: "Current Site", blurb: "Your current site", badge: "Current site",
        layout: "sw", palette: "current", font: "current",
        content: {
          hero: {
            logo: "SALTWATER", logoSub: "BUILDING CO",
            nav: ["Home", "Contact Us", "ADUs", "Projects", "About Us"],
            eyebrow: "General Contractor",
            headline: "A West Coast General Contractor",
            sub: "Servicing, Tofino, Ucluelet, and Whistler",
            image: "ph:scene:Cabins new build"
          },
          services: {
            title: "Our Specialties and Expertise",
            intro: "Based in Ucluelet, and Tofino BC, Saltwater Building Co is a licensed home builder specializing in custom builds, renovations, residential developments and commercial construction.",
            items: [
              { name: "Custom Homes", image: "ph:scene:1769 Rainforest Lane" },
              { name: "Residential Developments", image: "ph:scene:302 Reef",
                desc: "With an experienced and cohesive team Saltwater combines industry experience with innovative thinking to complete projects efficiently and to a high standard." },
              { name: "Renovations", image: "ph:room:Centerpoint renovation" },
              { name: "Commercial Developments", image: "ph:scene:Commercial development" }
            ],
            cta: "Reach Out"
          },
          gallery: {
            title: "Projects",
            items: [
              { caption: "Bozman Cabin", image: "ph:scene:Bozman Cabin" },
              { caption: "1406 Imperial, Ucluelet", image: "ph:scene:1406 Imperial" }
            ],
            cta: "All Projects"
          },
          about: {
            title: "About Us",
            body: "Saltwater Building Co is a full service building company helping our clients design, build and renovate their homes and workspaces. We build to a high standard, using modern construction methods, building science and professional project management.",
            body2: "We focus on our clients needs from project conception through to completion. Once we understand what you need, we bring together the right trades and suppliers and keep you fully informed as the project moves along. Whether you're planning a build or already have a design, we can help.",
            image: "ph:portrait:About Us photo"
          },
          reviews: {
            title: "What Our Clients Say",
            intro: "Your current site doesn't have reviews yet. Here's where two or three would go.",
            items: [
              { quote: "Placeholder: a real client review would go here.", name: "Client name (placeholder)" },
              { quote: "Placeholder: a second real client review.", name: "Client name (placeholder)" }
            ]
          },
          contact: {
            title: "Contact Us",
            line1: "Based in Ucluelet British Columbia, Canada",
            line2: "We look forward to speaking with you!",
            formTitle: "Get in Touch",
            fields: ["First Name", "Last Name", "Email", "Write a message"],
            cta: "Submit"
          },
          footer: {
            logo: "SALTWATER", logoSub: "BUILDING CO",
            links: ["Home", "About Us", "Projects", "Contact"],
            legal: "© Saltwater Building Co"
          }
        } }
    ]
  };

  /* ---------- Layout "sw": the current saltwaterbuildingco.ca look (styles in original.css) ---------- */
  var R = window.KF_RENDER, U = window.KF_UTIL;
  if (!R || !U || !U.T) return;
  var T = U.T, media = U.media, list = U.list, esc = U.esc;
  function brand(c) { return '<span class="sw-logo">' + T("span", "logo", c.logo, "sw-logo-main") + T("span", "logoSub", c.logoSub, "sw-logo-sub") + "</span>"; }
  R.hero.sw = function (c) {
    return '<header class="sw-header"><div class="wrap">' + brand(c) +
      '<span class="sw-nav" aria-hidden="true">' + list(c.nav).map(function (n) { return "<span>" + esc(n) + "</span>"; }).join("") + "</span>" +
      '<span class="sw-burger" aria-hidden="true"><i></i><i></i><i></i></span></div></header>' +
      '<div class="sw-hero">' + media(c.image, "A Saltwater build on the west coast", "sw-hero-img") + '<div class="sw-hero-text">' +
        T("p", "eyebrow", c.eyebrow, "sw-kicker") + T("h1", "headline", c.headline) + T("p", "sub", c.sub, "sw-sub") + "</div></div>";
  };
  R.services.sw = function (c) {
    return '<div class="sw-sec"><div class="wrap sw-narrow">' + T("h2", "title", c.title) + '<span class="sw-rule" aria-hidden="true"></span>' + T("p", "intro", c.intro, "sw-intro") + "</div>" +
      '<div class="wrap sw-services">' + list(c.items).map(function (it, i) {
        var k = "items." + i + ".";
        return '<div class="sw-service' + (i % 2 ? " rev" : "") + '"><div class="sw-img">' + media(it.image, it.name) + "</div>" +
          "<div>" + T("h3", k + "name", it.name) + T("p", k + "desc", it.desc) + "</div></div>";
      }).join("") + '<div class="sw-center">' + T("span", "cta", c.cta, "sw-btn") + "</div></div></div>";
  };
  R.gallery.sw = function (c) {
    return '<div class="sw-sec sw-grey"><div class="wrap">' + T("h2", "title", c.title, "sw-center-h") + '<span class="sw-rule center" aria-hidden="true"></span>' +
      '<div class="sw-projects">' + list(c.items).map(function (it, i) {
        return "<figure>" + media(it.image, it.caption) + T("figcaption", "items." + i + ".caption", it.caption) + "</figure>";
      }).join("") + '</div><div class="sw-center">' + T("span", "cta", c.cta, "sw-btn") + "</div></div></div>";
  };
  R.about.sw = function (c) {
    return '<div class="sw-sec"><div class="wrap sw-about"><div class="sw-img tall">' + media(c.image, "About Saltwater Building Co") + "</div><div>" +
      T("h2", "title", c.title) + '<span class="sw-rule" aria-hidden="true"></span>' + T("p", "body", c.body) + T("p", "body2", c.body2) + "</div></div></div>";
  };
  R.reviews.sw = function (c) {
    return '<div class="sw-sec sw-grey"><div class="wrap sw-narrow">' + T("h2", "title", c.title, "sw-center-h") + '<span class="sw-rule center" aria-hidden="true"></span>' +
      T("p", "intro", c.intro, "sw-intro sw-note") + '<div class="sw-quotes">' + list(c.items).map(function (it, i) {
        return '<figure><span class="sw-ph">Placeholder</span><blockquote>' + T("p", "items." + i + ".quote", it.quote) + "</blockquote>" + T("figcaption", "items." + i + ".name", it.name) + "</figure>";
      }).join("") + "</div></div></div>";
  };
  R.contact.sw = function (c) {
    return '<div class="sw-sec sw-dark"><div class="wrap sw-contact"><div>' + T("h2", "title", c.title) + '<span class="sw-rule" aria-hidden="true"></span>' +
      T("p", "line1", c.line1, "sw-line") + T("p", "line2", c.line2, "sw-line") + "</div>" +
      '<div class="sw-form">' + T("h3", "formTitle", c.formTitle) + '<div class="sw-fields">' + list(c.fields).map(function (f, i) {
        return '<span class="sw-field' + (i === 3 ? " wide tall" : "") + '">' + T("span", "fields." + i, f) + "</span>";
      }).join("") + "</div>" + T("span", "cta", c.cta, "sw-btn sw-btn-light") + "</div></div></div>";
  };
  R.footer.sw = function (c) {
    return '<div class="sw-footer"><div class="wrap"><span class="sw-ig" aria-label="Instagram" role="img"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></span>' +
      '<ul class="sw-flinks">' + list(c.links).map(function (l, i) { return T("li", "links." + i, l); }).join("") + "</ul>" + brand(c) + T("p", "legal", c.legal, "sw-legal") + "</div></div>";
  };
})();
