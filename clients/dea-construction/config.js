/*
  DeaConstruction Ltd: high-end residential framing crew (Bret D), Victoria, BC. Specializes in framing custom
  homes on Vancouver Island. Found through a MeetACarpenter.com job post (Nov 2026): hiring framers, offering
  benefits, a signing bonus, long-term full-time work and apprenticeships.
  Built from the Saltwater Building Co templates (same four layouts):
    A  Raised Right     bold and dramatic: high-end framing for custom homes
    B  Square & Plumb   the process, stage by stage, plus a "join the crew" story
    C  Straight Talk    simple and direct: for builders and owners, request a framing quote
    D  Clean & Classic  the clean white "sw" layout (Saltwater's current-site style, styled by
                        /clients/saltwater/original.css). Not Bret's site: he has no site we could find.
  Phone, email and licence details aren't known yet, so they're left off (the layouts hide empty fields).
  No photos yet: every image is a labelled drawn placeholder.
  Reviews are placeholders: never replace them with made-up names.
*/
(function () {
  var LEGAL = "© DeaConstruction Ltd. Residential framing, Victoria, BC.";
  var PH_WHERE = "Replace with a real review";

  window.KF_CLIENT = {
    businessName: "DeaConstruction Ltd",
    css: "/clients/saltwater/original.css",
    industry: "trades",
    contact: {
      phone: "",
      email: "",
      area: "Victoria, BC · Vancouver Island",
      address: ""
    },
    navLabels: { services: "What we frame", gallery: "Our work" },
    sectionLabels: { services: "What we frame", gallery: "Our work", about: "The crew", reviews: "Reviews", contact: "Get a quote" },
    sectionHints: {
      services: "Custom homes, additions, high-end framing",
      gallery: "Recent frames",
      about: "How we work, and we're hiring",
      reviews: "Placeholders until real reviews come in",
      contact: "Framing quote or job application"
    },
    radius: 6,
    addonsHide: ["online-store", "virtual-tour", "newsletter", "social-feed"],

    palettes: [
      { id: "fir", name: "Douglas fir",
        bg: "#faf7f2", surface: "#efe6d8", text: "#24201b", muted: "#5c5246",
        primary: "#2e3b2f", onPrimary: "#ffffff", accent: "#d08a3c", onAccent: "#1e1206",
        dark: "#1d231e", onDark: "#efe6d8" },
      { id: "steel", name: "Steel & lumber",
        bg: "#f5f6f7", surface: "#e5e8eb", text: "#15191d", muted: "#4a535b",
        primary: "#1f2a33", onPrimary: "#ffffff", accent: "#e0b45a", onAccent: "#2b2008",
        dark: "#15191d", onDark: "#e5e8eb" },
      { id: "cedar", name: "Cedar",
        bg: "#ffffff", surface: "#f3ebe4", text: "#2a1d16", muted: "#64514a",
        primary: "#8a4b2a", onPrimary: "#ffffff", accent: "#3f6b63", onAccent: "#ffffff",
        dark: "#2a1d16", onDark: "#f3ebe4" },
      { id: "clean", name: "Clean white",
        bg: "#ffffff", surface: "#f3f3f1", text: "#1b1b1b", muted: "#555555",
        primary: "#1b1b1b", onPrimary: "#ffffff", accent: "#b5793d", onAccent: "#ffffff",
        dark: "#1b1b1b", onDark: "#f3f3f1",
        hot: "#b5793d", cool: "#f1ebe4", soft: "#dddddb" }
    ],
    fonts: ["sturdy", "modern", "classic", "friendly",
      { id: "clean", name: "Clean caps",
        head: "'Montserrat', 'Helvetica Neue', Arial, sans-serif", body: "'Lato', 'Helvetica Neue', Arial, sans-serif",
        weight: 600, upper: true, google: ["Montserrat:wght@500;600;700", "Lato:wght@400;700"] }],

    /* Base wording (used by Raised Right, and as a fallback for the others). */
    content: {
      hero: {
        eyebrow: "Victoria · Vancouver Island · Custom home framing",
        headline: "The frame is where a great home starts.",
        sub: "High-end residential framing for custom homes on Vancouver Island. Square, plumb and on schedule, so every trade after us has an easier job.",
        cta: "Get a framing quote",
        cta2: "See our work",
        image: "ph:scene:Custom home framed up, roof on",
        images: ["ph:scene:Custom home framed up", "ph:scene:Roof trusses going on", "ph:scene:Crew on the deck"],
        badges: ["High-end custom homes", "Based in Victoria", "Now hiring framers and apprentices"],
        stats: [{ num: "Custom", label: "Homes are all we frame" }, { num: "Island", label: "Victoria and up-Island" }, { num: "Hiring", label: "Framers and apprentices" }]
      },
      services: {
        eyebrow: "What we frame",
        title: "Framing done right the first time.",
        intro: "We work with builders, designers and owners on high-end custom homes across Vancouver Island.",
        cta: "Get a framing quote",
        items: [
          { name: "Custom homes", icon: "home", image: "ph:scene:Custom home frame", desc: "Complex rooflines, big openings and tight tolerances. The jobs other crews pass on." },
          { name: "Floors, walls & roofs", icon: "hammer", image: "ph:scene:Wall panels going up", desc: "Full structural framing from the first floor system to the last rafter." },
          { name: "Additions & large renos", icon: "ruler", image: "ph:room:Addition framed", desc: "Tie-ins to existing homes framed clean, level and ready for the next trade." },
          { name: "Builder partners", icon: "shield", desc: "General contractors trust us to show up, hold the schedule and pass inspection." },
          { name: "Island-wide", icon: "pin", desc: "Based in Victoria, framing custom homes up and down Vancouver Island." },
          { name: "Clean sites", icon: "check", desc: "Organized, safe and tidy. Your site looks professional the whole way through." }
        ]
      },
      gallery: {
        eyebrow: "Our work",
        title: "Recent frames",
        intro: "Custom homes on Vancouver Island, from first wall to roof on.",
        cta: "See all projects",
        items: [
          { caption: "Oceanview custom home · Victoria", image: "ph:scene:Oceanview custom home" },
          { caption: "Vaulted great room · Saanich", image: "ph:room:Vaulted great room framing" },
          { caption: "Timber accents · Custom home", image: "ph:scene:Timber accents" },
          { caption: "Two-storey custom · Langford", image: "ph:scene:Two-storey custom" },
          { caption: "Roof framing · Complex hips and valleys", image: "ph:scene:Complex roof framing" },
          { caption: "Addition tie-in · Oak Bay", image: "ph:scene:Addition tie-in" }
        ]
      },
      about: {
        eyebrow: "The crew",
        title: "A crew that frames like it's their own house.",
        body: "On a high-end custom home the frame sets the tone for everything after it. When walls are straight and openings are dead on, the windows fit, the drywall goes up clean, and the finish looks the way the designer drew it.",
        body2: "That's the standard we hold on every job, and it's why builders call us back.",
        image: "ph:scene:Crew on site",
        points: ["Square, level and plumb, checked as we go", "Plans read carefully before the first cut", "Clear communication with the builder every day", "Safe, organized and clean sites"],
        stats: [
          { num: "Custom", label: "High-end homes" },
          { num: "Island", label: "Victoria and up-Island" },
          { num: "Full-time", label: "Long-term crew" },
          { num: "Hiring", label: "Framers and apprentices" }
        ],
        quote: "",
        owner: { name: "Bret", role: "DeaConstruction Ltd, Victoria", image: "ph:portrait:Photo of Bret" }
      },
      reviews: {
        eyebrow: "What builders say",
        title: "Framed with us?",
        rating: "New",
        count: "Placeholder: your Google rating shows here",
        items: [
          { quote: "Placeholder: a short review from a builder about the quality of the frame and staying on schedule.", name: "Builder review (placeholder)", where: PH_WHERE },
          { quote: "Placeholder: a review from a homeowner about their custom home.", name: "Client review (placeholder)", where: PH_WHERE },
          { quote: "Placeholder: a review from a designer or architect.", name: "Review (placeholder)", where: PH_WHERE }
        ]
      },
      contact: {
        eyebrow: "Get a quote",
        title: "Got a custom home to frame?",
        body: "Send us the plans, the location and your start date and we'll get back to you with a real answer. Looking for work? We're hiring framers and apprentices too.",
        cta: "Send my project details",
        formTitle: "Tell us about your project",
        hours: [{ days: "Framing quotes", time: "Builders and owners" }, { days: "Now hiring", time: "Framers and apprentices" }]
      },
      footer: {
        blurb: "High-end residential framing for custom homes on Vancouver Island. Based in Victoria, BC.",
        links: ["Our work", "What we frame", "The crew", "Join the crew", "Get a quote"],
        social: ["Instagram", "Facebook"],
        legal: LEGAL,
        ctaLine: "The frame is where a great home starts."
      }
    },

    designs: [
      /* ---------- A: Raised Right (uses the base wording above) ---------- */
      { name: "Raised Right", blurb: "Bold and dramatic, high-end framing" },

      /* ---------- B: Square & Plumb ---------- */
      { name: "Square & Plumb", blurb: "The process, stage by stage, and the crew",
        content: {
          hero: {
            eyebrow: "Residential framing · Victoria, BC",
            headline: "Square, plumb and on schedule.",
            sub: "From the first floor system to the roof sheathing, we frame high-end custom homes so the rest of the build goes smoothly.",
            cta: "Get a framing quote",
            cta2: "How we frame",
            image: "ph:scene:Walls up, sheathing on"
          },
          services: {
            eyebrow: "Start to finish",
            title: "Four stages, done properly",
            intro: "How a custom home frame comes together with our crew.",
            cta: "Talk to us",
            items: [
              { name: "Layout & floors", icon: "ruler", desc: "Plans checked, layout snapped and the floor system built dead level." },
              { name: "Walls", icon: "hammer", desc: "Walls built, stood, plumbed and braced. Openings right where the plans say." },
              { name: "Roof", icon: "home", desc: "Rafters or trusses, hips and valleys, framed clean and tied down for island wind." },
              { name: "Ready for trades", icon: "shield", desc: "Sheathed, inspected and handed over ready for windows, roofing and mechanical." }
            ]
          },
          gallery: {
            eyebrow: "On the tools",
            title: "Custom homes we've framed",
            intro: "Big spans, vaulted ceilings and complex rooflines on Vancouver Island.",
            cta: "Talk to us about your build",
            items: [
              { caption: "Oceanview custom home · Roof on", image: "ph:scene:Oceanview custom home" },
              { caption: "Vaulted great room", image: "ph:room:Vaulted great room framing" },
              { caption: "Complex hips and valleys", image: "ph:scene:Complex roof framing" },
              { caption: "Two-storey custom", image: "ph:scene:Two-storey custom" },
              { caption: "Addition tie-in", image: "ph:scene:Addition tie-in" }
            ]
          },
          about: {
            eyebrow: "Join the crew",
            title: "Build a career, not just a paycheque.",
            body: "We're growing and looking for framers who take pride in their work, and people ready to learn the trade. Steady, full-time work on high-end custom homes across the Island.",
            body2: "Benefits, a signing bonus, long-term employment and apprenticeships for the right people.",
            points: ["Benefits", "Signing bonus", "Long-term, full-time work", "Apprenticeships"]
          },
          reviews: {
            eyebrow: "What builders say",
            title: "In their words",
            items: [
              { quote: "Placeholder: a builder on the quality of the frame and working with Bret's crew.", name: "Builder review (placeholder)", where: PH_WHERE },
              { quote: "Placeholder: a homeowner on their custom home.", name: "Client review (placeholder)", where: PH_WHERE },
              { quote: "Placeholder: a crew member on what it's like to work here.", name: "Crew review (placeholder)", where: PH_WHERE }
            ]
          },
          contact: {
            title: "Framing a custom home on the Island?",
            body: "Tell us about the plans, the site and your timeline. Or if you want to join the crew, send us a bit about yourself.",
            cta: "Get in touch"
          },
          footer: {
            blurb: "High-end residential framing in Victoria and across Vancouver Island.",
            links: ["Start to finish", "On the tools", "Join the crew", "Get a quote"]
          }
        } },

      /* ---------- C: Straight Talk ---------- */
      { name: "Straight Talk", blurb: "Simple and direct, quote or apply",
        content: {
          hero: {
            eyebrow: "Framing contractor · Victoria & Vancouver Island",
            headline: "Custom home framing. Done right.",
            sub: "We frame high-end custom homes for builders and owners. Send us your plans and we'll give you a clear price and a start date.",
            cta: "Request a quote",
            images: ["ph:scene:Framed custom home", "ph:scene:Roof framing", "ph:scene:Crew at work"],
            stats: [{ num: "Victoria", label: "Home base" }, { num: "Up-Island", label: "Custom home sites" }, { num: "Hiring", label: "Framers and apprentices" }]
          },
          services: {
            eyebrow: "What we frame",
            title: "Three kinds of work",
            intro: "One standard, whatever the size of the house.",
            items: [
              { name: "Custom homes", icon: "home", image: "ph:scene:Custom home frame", desc: "Full structural framing for high-end custom homes, floors to roof." },
              { name: "Additions & renos", icon: "hammer", image: "ph:room:Addition framed", desc: "Additions and large renovations, tied in clean to the existing house." },
              { name: "Builder subcontract", icon: "ruler", image: "ph:scene:Builder's site", desc: "Your framing crew on call: we hold the schedule and pass inspection." },
              { name: "Victoria" }, { name: "Saanich & Oak Bay" }, { name: "Langford & the Westshore" }, { name: "Up-Island custom home sites" }
            ]
          },
          gallery: {
            eyebrow: "Our work",
            title: "Recent frames",
            items: [
              { caption: "Oceanview custom home", image: "ph:scene:Oceanview custom home" },
              { caption: "Vaulted great room", image: "ph:room:Vaulted great room framing" },
              { caption: "Two-storey custom", image: "ph:scene:Two-storey custom" },
              { caption: "Complex roof", image: "ph:scene:Complex roof framing" },
              { caption: "Addition tie-in", image: "ph:scene:Addition tie-in" },
              { caption: "Your project next?", image: "ph:scene:Your lot" }
            ]
          },
          about: {
            eyebrow: "How it works",
            title: "From plans to roof on.",
            body: "No guessing. You know the price, the start date and where the frame is at every step.",
            points: [
              "Send plans: drawings, location and the start date you need",
              "Price & schedule: a clear framing price and crew dates",
              "Frame: daily updates for the builder, a clean and safe site",
              "Handover: inspected and ready for the next trades"
            ]
          },
          reviews: {
            eyebrow: "Reviews",
            title: "What builders say",
            items: [
              { quote: "Placeholder: a real review from a builder.", name: "Builder review (placeholder)", where: "Add: name, company, town" },
              { quote: "Placeholder: a real review from a homeowner.", name: "Client review (placeholder)", where: "Add: name, project, town" },
              { quote: "Placeholder: a real review from a designer.", name: "Review (placeholder)", where: "Add: name, company, town" }
            ]
          },
          contact: {
            eyebrow: "Request a quote",
            title: "Send us your plans.",
            body: "What you're building, where it is and when you need a crew. Plans or drawings help us give you a real number. Want to work with us? Tell us about your experience.",
            cta: "Send my project details"
          },
          footer: {
            blurb: "Residential framing contractor in Victoria, BC, framing custom homes across Vancouver Island.",
            links: ["What we frame", "Our work", "How it works", "Join the crew", "Request a quote"],
            ctaLine: "Need a framing crew? Get in touch."
          }
        } },

      /* ---------- D: Clean & Classic (Saltwater's clean white "sw" layout) ---------- */
      { name: "Clean & Classic", blurb: "Clean white pages, big photos",
        layout: "sw", palette: "clean", font: "clean",
        content: {
          hero: {
            logo: "DEA", logoSub: "CONSTRUCTION LTD",
            nav: ["Home", "Our Work", "Services", "Careers", "Contact"],
            eyebrow: "Residential Framing",
            headline: "High-End Custom Home Framing",
            sub: "Victoria and Vancouver Island",
            image: "ph:scene:Custom home framed, golden hour"
          },
          services: {
            title: "What We Do",
            intro: "Based in Victoria, DeaConstruction Ltd is a residential framing crew specializing in high-end custom homes on Vancouver Island.",
            items: [
              { name: "Custom Homes", image: "ph:scene:Custom home frame",
                desc: "Full structural framing, from floor systems to complex rooflines, built square, plumb and to the plans." },
              { name: "Additions & Renovations", image: "ph:room:Addition framed",
                desc: "Additions and large renovations tied in cleanly to the existing home." },
              { name: "Builder Partnerships", image: "ph:scene:Builder's site",
                desc: "A reliable framing crew for general contractors who need the schedule held and the inspection passed." }
            ],
            cta: "Request a Quote"
          },
          gallery: {
            title: "Our Work",
            items: [
              { caption: "Oceanview Custom Home", image: "ph:scene:Oceanview custom home" },
              { caption: "Vaulted Great Room", image: "ph:room:Vaulted great room framing" }
            ],
            cta: "All Projects"
          },
          about: {
            title: "Careers",
            body: "We're a high-end residential framing crew specializing in custom home building on Vancouver Island, and we're growing.",
            body2: "We offer benefits, a signing bonus, long-term full-time employment and apprenticeships. If you take pride in your work, we'd like to hear from you.",
            image: "ph:portrait:Crew photo"
          },
          reviews: {
            title: "What Our Clients Say",
            intro: "Here's where two or three reviews from builders and homeowners would go.",
            items: [
              { quote: "Placeholder: a real builder review would go here.", name: "Client name (placeholder)" },
              { quote: "Placeholder: a second real review.", name: "Client name (placeholder)" }
            ]
          },
          contact: {
            title: "Contact Us",
            line1: "Based in Victoria, British Columbia",
            line2: "Framing quotes and job applications welcome.",
            formTitle: "Get in Touch",
            fields: ["First Name", "Last Name", "Email", "Tell us about your project or experience"],
            cta: "Submit"
          },
          footer: {
            logo: "DEA", logoSub: "CONSTRUCTION LTD",
            links: ["Home", "Our Work", "Careers", "Contact"],
            legal: "© DeaConstruction Ltd"
          }
        } }
    ]
  };

  /* ---------- Layout "sw": clean white layout from the Saltwater templates (styles in /clients/saltwater/original.css) ---------- */
  var R = window.KF_RENDER, U = window.KF_UTIL;
  if (!R || !U || !U.T) return;
  var T = U.T, media = U.media, list = U.list, esc = U.esc;
  function brand(c) { return '<span class="sw-logo">' + T("span", "logo", c.logo, "sw-logo-main") + T("span", "logoSub", c.logoSub, "sw-logo-sub") + "</span>"; }
  R.hero.sw = function (c) {
    return '<header class="sw-header"><div class="wrap">' + brand(c) +
      '<span class="sw-nav" aria-hidden="true">' + list(c.nav).map(function (n) { return "<span>" + esc(n) + "</span>"; }).join("") + "</span>" +
      '<span class="sw-burger" aria-hidden="true"><i></i><i></i><i></i></span></div></header>' +
      '<div class="sw-hero">' + media(c.image, "A custom home framed by DeaConstruction", "sw-hero-img") + '<div class="sw-hero-text">' +
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
    return '<div class="sw-sec"><div class="wrap sw-about"><div class="sw-img tall">' + media(c.image, "The DeaConstruction crew") + "</div><div>" +
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
