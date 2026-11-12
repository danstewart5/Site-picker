/*
  Smith Orthotics: custom orthotic lab, Nanaimo BC (Del Smith).
  Three designs to mix:
    A  Craftsman        warm and heritage: the Italian shoemaker family, Del's hands-on craft
    B  Clinical         clean and calm: benefits, referrals and the partner clinic route
    C  Direct & Active  bold and retail: the at-home foam kit for trades, runners and long shifts
  The "gallery" slot is used as the For Practitioners section, so it shows in the menu on every design.
  Reviews are placeholders until real ones are collected. Do not replace them with made-up names.
*/
(function () {
  var IMG = "/clients/smith-orthotics/";
  var HOURS = [{ days: "Lab visits", time: "by appointment" }];
  var LEGAL = "© Smith Orthotics. Nanaimo, BC, Vancouver Island. Information on this site is general and isn't medical advice.";
  var PH_WHERE = "Replace with a real review";

  window.KF_CLIENT = {
    businessName: "Smith Orthotics",
    css: IMG + "original.css",
    logo: IMG + "logo.png",
    industry: "medical",
    contact: {
      phone: "(250) 361-6616",
      email: "",
      area: "Vancouver Island",
      address: "2132 Lark Crescent, Nanaimo, BC V9S 5J8"
    },
    navLabels: { services: "Orthotics", gallery: "For practitioners" },
    sectionLabels: { services: "Ways to get orthotics", gallery: "For practitioners" },
    sectionHints: { services: "Clinic route and at-home kit", gallery: "For doctors, chiros and physios" },
    radius: 12,
    addonsHide: ["quote-calculator", "virtual-tour", "before-after", "online-store", "social-feed", "newsletter"],

    palettes: [
      { id: "heritage", name: "Heritage red",
        bg: "#fbf7f1", surface: "#f2e9dd", text: "#1d1814", muted: "#5a4c41",
        primary: "#b0161d", onPrimary: "#ffffff", accent: "#8a5a2b", onAccent: "#ffffff",
        dark: "#1d1814", onDark: "#f6efe6" },
      { id: "clinical", name: "Clean clinical",
        bg: "#ffffff", surface: "#f1f4f6", text: "#141b21", muted: "#4a5661",
        primary: "#26333d", onPrimary: "#ffffff", accent: "#c8102e", onAccent: "#ffffff",
        dark: "#18212a", onDark: "#eef2f5" },
      { id: "bold", name: "Work-boot bold",
        bg: "#ffffff", surface: "#f2f2f0", text: "#0e0e0e", muted: "#4a4a48",
        primary: "#c8141c", onPrimary: "#ffffff", accent: "#f5b800", onAccent: "#141006",
        dark: "#111111", onDark: "#f5f5f3" },
      { id: "original", name: "Island workshop",
        bg: "#fbf8f3", surface: "#f3ece2", text: "#3f342c", muted: "#5c4e44",
        primary: "#8d3a3f", onPrimary: "#ffffff", accent: "#6e4b2a", onAccent: "#ffffff",
        dark: "#4a3b32", onDark: "#fbf8f3",
        hot: "#4a3b32", cool: "#c49a6c", soft: "#e7efec" }
    ],
    fonts: ["classic", "modern", "sturdy", "friendly",
      { id: "original", name: "Island workshop",
        head: "'Fraunces', Georgia, serif", body: "'Geist', 'Inter', system-ui, sans-serif",
        weight: 500, google: ["Geist:wght@400;500", "Geist+Mono:wght@500"] }],

    /* Base wording (used by Craftsman, and as a fallback for the others). */
    content: {
      hero: {
        eyebrow: "Custom orthotic lab · Nanaimo, BC",
        headline: "Custom orthotics, built by hand in Nanaimo.",
        sub: "Del Smith comes from generations of Italian shoemakers. Today he builds every pair himself, at his own bench, from a foam impression of your feet.",
        cta: "Free foot check-up",
        cta2: "For practitioners",
        image: IMG + "hero-orthotics.svg",
        images: [IMG + "hero-orthotics.svg", IMG + "bench.svg", IMG + "materials.svg"],
        badges: ["20+ years at the bench", "Made in our Nanaimo lab", "Serving all of Vancouver Island"],
        stats: [{ num: "20+", label: "Years building orthotics" }, { num: "1", label: "Lab, in Nanaimo" }, { num: "Island", label: "Wide service" }]
      },
      services: {
        eyebrow: "Two ways to get your orthotics",
        title: "One maker. Two ways in.",
        intro: "Pick the route that fits you. Either way, Del builds your pair by hand from a foam impression of your feet.",
        cta: "Find your route",
        items: [
          { name: "Through a partner clinic", icon: "doc", image: IMG + "assessment.svg",
            desc: "Have benefits or a referral? Start with a free foot check-up. A partner practitioner assesses you independently, and if they prescribe orthotics, Del builds them." },
          { name: "At-home foam kit", icon: "foot", image: IMG + "materials.svg", price: "$249 a pair",
            desc: "Paying yourself? We mail you a foam box, you take the impression at your kitchen table, send us a photo to check, then mail it back." },
          { name: "Built by hand, start to finish", icon: "hammer", image: IMG + "bench.svg",
            desc: "No library shells and no outsourcing. Every pair is shaped at Del's bench, for the shoes you actually wear." }
        ]
      },
      gallery: {
        eyebrow: "For doctors, chiropractors & physiotherapists",
        title: "You assess. Del builds.",
        intro: "A local lab where the person who builds the orthotics answers the phone. Tricky case? Talk it through with Del.",
        cta: "Partner with the lab",
        items: [
          { caption: "You assess, independently", image: IMG + "assessment.svg" },
          { caption: "You take a foam impression", image: IMG + "materials.svg" },
          { caption: "Del builds it by hand", image: IMG + "bench.svg" },
          { caption: "Shipped back to your clinic", image: IMG + "finished-pair.svg" },
          { caption: "You fit and dispense", image: IMG + "fitting.svg" },
          { caption: "No library shells, ever", image: IMG + "hero-orthotics.svg" }
        ]
      },
      about: {
        eyebrow: "The maker",
        title: "The craft is in his blood.",
        body: "Del comes from a long line of shoemakers in Italy, where generations of his family made footwear by hand, one pair at a time, for the people in their town.",
        body2: "That tradition carried across the ocean. For more than 20 years Del has built custom orthotics at his own bench in Nanaimo. No shortcuts, no outsourcing.",
        image: IMG + "del-smith-lab.jpg",
        points: ["Generations of Italian shoemakers", "20+ years building orthotics", "Every pair shaped by hand", "The maker answers the phone"],
        stats: [{ num: "20+", label: "Years building orthotics" }, { num: "1", label: "In-house lab" }],
        quote: "",
        owner: { name: "Del Smith", role: "Builds every pair in the Nanaimo lab", image: IMG + "del-smith-lab.jpg" }
      },
      reviews: {
        eyebrow: "Word of mouth",
        title: "What people say about Del's work",
        rating: "New",
        count: "Placeholder: your Google rating shows here",
        items: [
          { quote: "Placeholder: a real customer's words about how their pair fits and the care Del put into it.", name: "Customer review (placeholder)", where: PH_WHERE },
          { quote: "Placeholder: a second real review, ideally from someone who wears their orthotics at work.", name: "Customer review (placeholder)", where: PH_WHERE },
          { quote: "Placeholder: a third real review, for example from a practitioner who sends impressions to the lab.", name: "Customer review (placeholder)", where: PH_WHERE }
        ]
      },
      contact: {
        eyebrow: "Visit the lab",
        title: "Talk to the man who makes them.",
        body: "Questions about orthotics, your feet or a referral you already have? Call the lab. Visits are by appointment.",
        cta: "Send message",
        formTitle: "Send Del a message",
        hours: HOURS
      },
      footer: {
        blurb: "Custom orthotics, handcrafted in our Nanaimo lab from a foam impression of your feet. Serving Nanaimo, the West Shore and all of Vancouver Island.",
        links: ["Free foot check-up", "At-home kit", "For practitioners", "The maker", "Contact"],
        social: ["Facebook", "Instagram"],
        legal: LEGAL,
        ctaLine: "Built by hand in Nanaimo."
      }
    },

    designs: [
      /* ---------- A: Craftsman (uses the base wording above) ---------- */
      { name: "Craftsman", blurb: "Warm, heritage, Del's hands-on craft" },

      /* ---------- B: Clinical ---------- */
      { name: "Clinical", blurb: "Clean, calm, practitioner-friendly",
        content: {
          hero: {
            eyebrow: "Custom orthotic lab for Vancouver Island",
            headline: "Prescribed by your practitioner. Built in Nanaimo.",
            sub: "Have extended health benefits or a referral? Start with a free foot check-up. A partner practitioner assesses you independently, and if they prescribe orthotics, our lab builds them.",
            cta: "Start your free check-up",
            cta2: "For practitioners",
            image: IMG + "del-smith-lab.jpg"
          },
          services: {
            eyebrow: "How it works",
            title: "From check-up to fitting",
            intro: "You start with us, and we stay with you the whole way. An independent practitioner assesses your feet and fits your orthotics. Del builds them.",
            cta: "Start your free check-up",
            items: [
              { name: "Free foot check-up", icon: "check",
                desc: "Answer a few quick questions online about your feet, your pain and your day. It takes about two minutes." },
              { name: "We follow up", icon: "phone",
                desc: "Our team contacts you about an assessment at a partner clinic, such as Colwood Corners in Victoria. The clinic discusses its own fees before care." },
              { name: "Independent assessment", icon: "doc",
                desc: "The practitioner may recommend orthotics, no orthotics, or another supplier. If they prescribe, they take a foam impression." },
              { name: "Built in our Nanaimo lab", icon: "hammer",
                desc: "Del builds your pair by hand from the impression your practitioner sends." },
              { name: "Fitted by your practitioner", icon: "foot",
                desc: "Your practitioner fits your finished orthotics and makes sure they feel right." },
              { name: "No benefits? Use the home kit", icon: "mail", price: "$249 a pair",
                desc: "Paying yourself? Our at-home foam kit skips the clinic visit." }
            ]
          },
          gallery: {
            eyebrow: "For practitioners",
            title: "A lab that works the way your clinic does.",
            intro: "No rented space, no exclusivity, no volume commitment. You assess and prescribe; we fabricate from your foam impression and ship it back for you to fit.",
            cta: "Partnership enquiry",
            items: [
              { caption: "Del Smith, in the Nanaimo lab", image: IMG + "del-smith-lab.jpg" },
              { caption: "Your independent assessment", image: IMG + "assessment.svg" },
              { caption: "Foam impression supplies", image: IMG + "materials.svg" },
              { caption: "Fabricated in-house", image: IMG + "bench.svg" },
              { caption: "Shipped to your clinic to fit", image: IMG + "finished-pair.svg" }
            ]
          },
          about: {
            eyebrow: "About the lab",
            title: "One lab, start to finish.",
            body: "Smith Orthotics is a custom orthotic lab in Nanaimo. Every device is built from a foam impression of the patient's own feet and corrected by hand. No library shells, no pre-corrected blanks.",
            body2: "Del doesn't assess feet or write prescriptions. An independent practitioner does that, and patients are not required to use a particular clinic.",
            stats: [
              { num: "20+", label: "Years building orthotics" },
              { num: "In-house", label: "Nothing outsourced" },
              { num: "Foam", label: "Impression for every pair" },
              { num: "Island", label: "Nanaimo to the West Shore" }
            ]
          },
          reviews: {
            eyebrow: "Patients & practitioners",
            title: "What patients and clinics say",
            items: [
              { quote: "Placeholder: a real patient's words about the check-up, the assessment and how their orthotics fit.", name: "Patient review (placeholder)", where: PH_WHERE },
              { quote: "Placeholder: a practitioner on working with the lab.", name: "Practitioner review (placeholder)", where: PH_WHERE },
              { quote: "Placeholder: a second patient review.", name: "Patient review (placeholder)", where: PH_WHERE }
            ]
          },
          contact: {
            title: "Questions about coverage or a referral?",
            body: "Most extended health plans need a prescription from an in-person assessment. Start with the free check-up, or call the lab and we'll point you the right way. Already have a referral? We'll take it.",
            cta: "Call the lab"
          },
          footer: {
            blurb: "Custom orthotic lab in Nanaimo, working with practitioners across Vancouver Island.",
            links: ["Free foot check-up", "How it works", "For practitioners", "Benefits & coverage", "Contact"]
          }
        } },

      /* ---------- C: Direct & Active ---------- */
      { name: "Direct & Active", blurb: "Bold, the at-home kit up front",
        content: {
          hero: {
            eyebrow: "At-home custom orthotics kit",
            headline: "Custom orthotics. No clinic visit.",
            sub: "Step into a foam box at your kitchen table, mail it back, and Del builds your pair by hand in Nanaimo. Made for long shifts, hard floors and big miles.",
            cta: "Order your kit",
            images: [IMG + "finished-pair.svg", IMG + "materials.svg", IMG + "checkup-phone.svg"],
            stats: [{ num: "$249", label: "Custom pair" }, { num: "0", label: "Clinic visits" }, { num: "20+ yrs", label: "Building orthotics" }]
          },
          services: {
            eyebrow: "How the kit works",
            title: "Three steps. Done from home.",
            intro: "Same lab, same hands as our clinic orthotics. You take the impression, and we check it before you mail it.",
            items: [
              { name: "Order. We mail your kit.", icon: "bag", image: IMG + "checkup-phone.svg", price: "$249 a pair",
                desc: "Tell us your shoe size, your job, your hours on your feet and what you wear. We mail a foam impression box with a prepaid Canada Post return label." },
              { name: "Step in. Snap a photo. Mail it.", icon: "foot", image: IMG + "materials.svg",
                desc: "It takes a few minutes. Send us a photo of both prints to check, then drop the box at Canada Post. Messed it up? We send a fresh box." },
              { name: "Built by hand. Shipped to you.", icon: "hammer", image: IMG + "bench.svg",
                desc: "Del builds your pair in Nanaimo for the footwear you wear most, then mails it to your door." },
              { name: "Work boots" }, { name: "Runners" }, { name: "Rubber boots" },
              { name: "Have benefits? Free foot check-up" }
            ]
          },
          gallery: {
            eyebrow: "Practitioners",
            title: "Send us your foam impressions.",
            items: [
              { caption: "1 · You assess", image: IMG + "assessment.svg" },
              { caption: "2 · Foam impression", image: IMG + "materials.svg" },
              { caption: "3 · Del builds", image: IMG + "bench.svg" },
              { caption: "4 · Shipped to you", image: IMG + "finished-pair.svg" },
              { caption: "5 · You fit it", image: IMG + "fitting.svg" }
            ]
          },
          about: {
            eyebrow: "",
            title: "Long shifts. Hard floors. Big miles.",
            body: "Del Smith has built custom orthotics for over 20 years, and his family made shoes by hand in Italy for generations. He builds for the boots you actually work in.",
            points: [
              "Trades and construction: framers, concrete, roofers, electricians",
              "Warehouse, ferries and shipping: steel decks, concrete floors",
              "Retail, kitchens and hospitality: standing in one spot for hours",
              "Runners: a pair shaped for your running shoes",
              "No insurance or thin benefits: you're paying yourself"
            ]
          },
          reviews: {
            eyebrow: "Reviews",
            title: "Real reviews go here",
            items: [
              { quote: "Placeholder: a real review from someone in the trades about wearing their pair all shift.", name: "Customer review (placeholder)", where: "Add: name, job, town" },
              { quote: "Placeholder: a real review from a runner.", name: "Customer review (placeholder)", where: "Add: name, town" },
              { quote: "Placeholder: a real review about how easy the kit was.", name: "Customer review (placeholder)", where: "Add: name, town" }
            ]
          },
          contact: {
            eyebrow: "Questions?",
            title: "Call the lab.",
            body: "Diabetes, numbness, open sores, poor circulation or a recent foot injury? Those feet need a hands-on assessment first. Call and we'll point you the right way.",
            cta: "Call (250) 361-6616"
          },
          footer: {
            blurb: "Custom orthotics from an at-home foam kit, built by hand in Nanaimo and shipped across Vancouver Island.",
            links: ["Order a kit", "How it works", "Who it's for", "Practitioners", "Contact"],
            ctaLine: "Your feet. Your boots. Your pair."
          }
        } },

      /* ---------- D: The Original (the current smithorthotics.com home page) ---------- */
      { name: "The Original", blurb: "Your current Smith Orthotics site", badge: "Original",
        layout: "smith", palette: "original", font: "original",
        content: {
          hero: {
            promo: "Free foot check-up", promoCta: "Start now",
            logo: IMG + "smith-logo-transparent.png", place: "Custom Orthotic Lab · Nanaimo, BC",
            eyebrow: "Custom orthotic lab · Nanaimo, Vancouver Island",
            headline: "Custom orthotics,", em: "crafted", headline2: "in Nanaimo.",
            sub: "Start with a free online foot check-up. Del Smith builds orthotics by hand in our Nanaimo lab when a practitioner prescribes them.",
            cta: "Start Your Free Foot Check-Up", cta2: "How It Works",
            referral: "Already have a referral? We’ll take it. Call (250) 361-6616.",
            image: IMG + "hero-orthotics.svg",
            note: "It is a set of questions, not a diagnosis. A partner practitioner assesses you independently and may recommend orthotics, no orthotics, or another supplier.",
            badges: ["Made in our Nanaimo lab", "Built in-house from a foam impression", "Serving Vancouver Island"]
          },
          services: {
            eyebrow: "Two ways to get custom orthotics",
            title: "Pick the route that fits you.",
            intro: "Either way, Del builds your orthotics by hand in our Nanaimo lab from a foam impression of your feet.",
            paths: [
              { q: "Have insurance or a doctor?", name: "Free Foot Check-Up",
                desc: "Answer a few questions and we follow up about an assessment at a partner clinic. The practitioner decides independently and may recommend no orthotics or another supplier. If they prescribe, they fit the pair. The clinic discusses its fees before care.",
                cta: "Start Your Free Check-Up" },
              { q: "No insurance? Paying yourself?", name: "At-home foam kit", image: IMG + "casting.svg",
                desc: "No clinic visit. We mail you a foam box, you take the impression at home and send us a photo to check, then mail it back. Built for trades and anyone on their feet all day.",
                cta: "See the At-Home Kit" }
            ],
            stepsEyebrow: "How it works",
            stepsTitle: "Five steps, start to finish.",
            stepsIntro: "You start with us, and we stay with you the whole way. An independent practitioner assesses your feet and fits your orthotics. Del builds them by hand in our Nanaimo lab.",
            items: [
              { who: "Smith Orthotics", us: true, name: "Free foot check-up", image: IMG + "checkup-phone.svg", desc: "Answer a few quick questions online about your feet, your pain and your day. It takes about two minutes." },
              { who: "Smith Orthotics", us: true, name: "We follow up", image: IMG + "booking-call.svg", desc: "Our team contacts you about an assessment at a partner clinic. The clinic discusses its own fees with you before care." },
              { who: "Partner clinic", name: "Independent assessment", image: IMG + "assessment.svg", desc: "A practitioner at the partner clinic assesses you independently. If they prescribe orthotics, they write the prescription and take a foam impression." },
              { who: "Smith Orthotics", us: true, name: "Built by hand in our lab", image: IMG + "bench.svg", desc: "Del builds your orthotics by hand in our Nanaimo lab, from the impression your practitioner sends." },
              { who: "Partner clinic", name: "Fitted by your practitioner", image: IMG + "fitting.svg", desc: "Your practitioner fits your finished orthotics and makes sure they feel right." }
            ]
          },
          gallery: {
            eyebrow: "For doctors, chiropractors & physiotherapists",
            title: "Become a partner clinic.",
            intro: "The free online check-up is an enquiry, not a diagnosis. You assess independently and may recommend no orthotics or another supplier. If you prescribe, you take the impression and fit the pair. Del fabricates it.",
            cta: "For Practitioners",
            whyEyebrow: "Why start with us",
            whyTitle: "Start with the lab that makes them.",
            items: [
              { name: "The clinic decides", desc: "A partner practitioner assesses you independently and may recommend no orthotics, or another supplier." },
              { name: "Fees before care", desc: "The clinic discusses its own fees with you before the assessment. This website does not take assessment payments." },
              { name: "Handcrafted locally", desc: "Built by hand in our Nanaimo lab from a foam impression of your feet, not an off-the-shelf insert." }
            ]
          },
          about: {
            eyebrow: "Made in-house",
            title: "Your exact foot shape. Built by hand in Nanaimo.",
            quote: "Store-bought inserts are made for an average foot. Yours isn’t average.",
            body: "We work from a foam impression of your feet that captures the exact shape of your arch, heel and the ball of your foot, then Del builds every pair by hand. No generic shell, no off-the-shelf insert.",
            blocks: [
              { tag: "The starting point", name: "Foam impression", image: IMG + "plaster-cast.svg",
                desc: "A simple, proven method. A foam impression records every contour of your foot, giving us a true model to correct and build from in our lab." },
              { tag: "Handcrafted", name: "Built by Del, by hand", image: IMG + "del-smith-lab.jpg",
                desc: "When a practitioner prescribes them, Del Smith builds that pair in our own lab. Nothing is outsourced. The practitioner fits them.", link: "Meet Del" }
            ],
            image: IMG + "materials.svg"
          },
          reviews: {
            eyebrow: "Why custom orthotics",
            title: "Support that starts at the foundation.",
            intro: "Your feet carry everything above them. Whether a device shaped to your foot is useful is a decision for the assessing practitioner.",
            image: IMG + "finished-pair.svg",
            items: [
              { name: "Heel and arch discomfort", quote: "Some people ask about orthotics for heel or arch discomfort. Suitability is decided at an assessment." },
              { name: "Foot position", quote: "A practitioner looks at how the foot moves. Orthotics are made only if that practitioner decides support is appropriate." },
              { name: "Long days on your feet", quote: "Some people who stand all day ask about support. That is not a promise of less fatigue." },
              { name: "Day-to-day strain", quote: "Orthotics are not offered here as injury prevention. A practitioner decides whether they are suitable." }
            ],
            reasonsTitle: "Common reasons people start a check-up.",
            reasons: ["Plantar fasciitis", "Flat feet", "High arches", "Knee pain from your feet", "Orthotics for runners", "On your feet all day", "Orthotics for seniors"]
          },
          contact: {
            bandEyebrow: "Free foot check-up",
            bandTitle: "Not sure if orthotics are right for you?",
            bandBody: "Start with a free foot check-up. Answer a few questions and our team will follow up about an assessment at a partner clinic. The practitioner decides what to recommend.",
            bandCta: "Start Your Free Check-Up",
            eyebrow: "Contact",
            title: "Talk to the lab.",
            body: "Questions about orthotics, your feet or a referral you already have? Call and talk to the people who make them.",
            map: IMG + "lab-map.svg",
            hoursText: "By appointment",
            cta: "Free Foot Check-Up", cta2: "Contact the Lab"
          },
          footer: {
            logo: IMG + "smith-logo-transparent.png", place: "Custom Orthotic Lab · Nanaimo, BC",
            blurb: "Custom orthotics, handcrafted in our in-house lab in Nanaimo from a foam impression of your foot. Serving Nanaimo, the West Shore and all of Vancouver Island.",
            cta: "Free Foot Check-Up",
            questions: ["Plantar fasciitis", "Flat feet", "High arches", "Knee pain from your feet", "Orthotics for runners", "On your feet all day", "Orthotics for seniors"],
            links: ["Home", "Free foot check-up", "At-home kit", "Benefits", "Process", "For practitioners", "FAQ", "Contact"],
            legal: "© Smith Orthotics. Nanaimo, BC, Vancouver Island.",
            fine: "Information on this site is general and isn’t medical advice."
          }
        } }
    ]
  };

  /* ---------- Layout "smith": the current smithorthotics.com look (styles in original.css) ---------- */
  var R = window.KF_RENDER, U = window.KF_UTIL;
  if (!R || !U || !U.T) return;
  var T = U.T, media = U.media, list = U.list, esc = U.esc;
  function eh(key, val) { return T("p", key, val, "so-eyebrow"); }
  R.hero.smith = function (c, ctx) {
    var k = ctx.contact || {};
    return '<div class="so-promo">' + T("span", "promo", c.promo) + T("span", "promoCta", c.promoCta ? c.promoCta + " →" : "", "so-promo-cta") + "</div>" +
      '<header class="so-header"><div class="wrap"><span class="so-brand">' + (c.logo ? '<img src="' + esc(c.logo) + '" alt="' + esc(ctx.biz) + '">' : esc(ctx.biz)) +
        T("span", "place", c.place, "so-place") + '</span><span class="so-menu" aria-hidden="true"><span class="so-bars"></span>Menu</span>' +
        '<span class="so-nav" aria-hidden="true"><span>Home</span><span>Benefits</span><span>Process</span><span>FAQ</span><span>Contact</span><span>At-Home Kit</span><span class="so-btn so-outline so-sm">For Practitioners</span><span class="so-btn so-sm">Free Foot Check-Up</span></span></div></header>' +
      '<div class="so-hero"><div class="wrap so-hero-grid"><div>' + eh("eyebrow", c.eyebrow) +
        "<h1>" + T("span", "headline", c.headline) + " " + T("em", "em", c.em) + " " + T("span", "headline2", c.headline2) + "</h1>" +
        T("p", "sub", c.sub, "so-lede") + '<div class="so-btns">' + T("span", "cta", c.cta, "so-btn") + T("span", "cta2", c.cta2, "so-btn so-outline") + "</div>" +
        T("p", "referral", c.referral, "so-referral") + "</div>" +
        '<div class="so-photo tall">' + media(c.image, "Illustration of a pair of custom orthotic insoles") + "</div></div></div>" +
      (c.note ? '<div class="so-indep"><div class="wrap">' + T("p", "note", c.note) + "</div></div>" : "") +
      '<div class="so-trust"><div class="wrap"><ul>' + list(c.badges).map(function (b, i) { return "<li>" + U.icon(["hammer", "doc", "pin"][i % 3]) + T("span", "badges." + i, b) + "</li>"; }).join("") + "</ul></div></div>";
  };
  R.services.smith = function (c) {
    return '<div class="so-sec"><div class="wrap"><div class="so-head">' + eh("eyebrow", c.eyebrow) + T("h2", "title", c.title) + T("p", "intro", c.intro) + "</div>" +
      '<div class="so-paths">' + list(c.paths).map(function (p, i) {
        var k = "paths." + i + ".";
        return '<article class="' + (i ? "so-path-side" : "so-path-lead") + '">' + (p.image ? '<div class="so-photo">' + media(p.image, p.name) + "</div>" : "") +
          "<div>" + T("p", k + "q", p.q, "so-q") + T("h3", k + "name", p.name) + T("p", k + "desc", p.desc) + "</div>" +
          T("span", k + "cta", p.cta, "so-btn" + (i ? " so-outline" : "")) + "</article>";
      }).join("") + "</div></div></div>" +
      '<div class="so-sec so-soft"><div class="wrap"><div class="so-head">' + eh("stepsEyebrow", c.stepsEyebrow) + T("h2", "stepsTitle", c.stepsTitle) + T("p", "stepsIntro", c.stepsIntro) + "</div>" +
      '<ol class="so-steps">' + list(c.items).map(function (it, i) {
        var k = "items." + i + ".";
        return '<li><span class="so-num" aria-hidden="true">0' + (i + 1) + "</span>" + (it.image ? '<div class="so-photo so-step-photo">' + media(it.image, it.name) + "</div>" : "") +
          "<div>" + T("span", k + "who", it.who, "so-who" + (it.us ? " us" : "")) + T("h3", k + "name", it.name) + T("p", k + "desc", it.desc) + "</div></li>";
      }).join("") + "</ol></div></div>";
  };
  R.gallery.smith = function (c) {
    return '<div class="so-sec"><div class="wrap so-band-grid"><div>' + eh("eyebrow", c.eyebrow) + T("h2", "title", c.title) + T("p", "intro", c.intro, "so-muted") + "</div>" +
      '<div class="so-btns">' + T("span", "cta", c.cta, "so-btn so-outline") + "</div></div>" +
      '<div class="wrap so-why"><div class="so-head">' + eh("whyEyebrow", c.whyEyebrow) + T("h2", "whyTitle", c.whyTitle) + "</div>" +
      '<ol class="so-reasons">' + list(c.items).map(function (it, i) {
        return '<li><span class="so-icon">' + U.icon(["pin", "spark", "hammer"][i % 3]) + "</span><div>" + T("h3", "items." + i + ".name", it.name) + T("p", "items." + i + ".desc", it.desc) + "</div></li>";
      }).join("") + "</ol></div></div>";
  };
  R.about.smith = function (c) {
    return '<div class="so-sec so-soft"><div class="wrap"><div class="so-head">' + eh("eyebrow", c.eyebrow) + T("h2", "title", c.title) +
      (c.quote ? '<blockquote class="so-pull">' + T("p", "quote", c.quote) + "</blockquote>" : "") + T("p", "body", c.body) + "</div>" +
      list(c.blocks).map(function (b, i) {
        var k = "blocks." + i + ".";
        return '<div class="so-split' + (i % 2 ? " rev" : "") + '"><div class="so-photo' + (i % 2 ? " tall so-del" : "") + '">' + media(b.image, b.name) + "</div>" +
          '<div class="so-prose">' + T("span", k + "tag", b.tag, "so-tag") + T("h3", k + "name", b.name) + T("p", k + "desc", b.desc) + T("p", k + "link", b.link, "so-link") + "</div></div>";
      }).join("") +
      (c.image ? '<div class="so-photo wide so-materials">' + media(c.image, "Orthotic materials on the workbench") + "</div>" : "") + "</div></div>";
  };
  R.reviews.smith = function (c) {
    return '<div class="so-sec so-soft"><div class="wrap"><div class="so-head">' + eh("eyebrow", c.eyebrow) + T("h2", "title", c.title) + T("p", "intro", c.intro) + "</div>" +
      '<div class="so-benefits"><div class="so-photo tall">' + media(c.image, "A finished pair of custom orthotics") + "</div>" +
      '<ul class="so-reasons">' + list(c.items).map(function (it, i) {
        return '<li><span class="so-icon">' + U.icon(["heart", "ruler", "clock", "shield"][i % 4]) + "</span><div>" + T("h3", "items." + i + ".name", it.name) + T("p", "items." + i + ".quote", it.quote) + "</div></li>";
      }).join("") + "</ul></div></div></div>" +
      (list(c.reasons).length ? '<div class="so-sec"><div class="wrap"><div class="so-head"><p class="so-eyebrow">Common questions</p>' + T("h2", "reasonsTitle", c.reasonsTitle) + "</div>" +
        '<ul class="so-index">' + list(c.reasons).map(function (r, i) { return "<li>" + T("h3", "reasons." + i, r) + '<span class="so-link">Learn more</span></li>'; }).join("") + "</ul></div></div>" : "");
  };
  R.contact.smith = function (c, ctx) {
    var k = ctx.contact || {};
    return '<div class="so-band"><div class="wrap so-band-grid"><div>' + eh("bandEyebrow", c.bandEyebrow) + T("h2", "bandTitle", c.bandTitle) + T("p", "bandBody", c.bandBody) + "</div>" +
      '<div class="so-btns">' + T("span", "bandCta", c.bandCta, "so-btn") + (k.phone ? '<span class="so-btn so-outline">Call ' + esc(k.phone) + "</span>" : "") + "</div></div></div>" +
      '<div class="so-sec so-soft"><div class="wrap so-lab"><div class="so-photo tall">' + media(c.map, "Illustration of the Smith Orthotics lab in Nanaimo") + "</div><div>" +
      '<div class="so-head">' + eh("eyebrow", c.eyebrow) + T("h2", "title", c.title) + T("p", "body", c.body) + "</div>" +
      '<div class="so-strip"><div><p class="so-label">Call</p><p class="so-value">' + esc(k.phone || "Coming soon") + "</p></div>" +
      '<div><p class="so-label">Hours</p>' + T("p", "hoursText", c.hoursText, "so-value") + "</div>" +
      '<div><p class="so-label">Lab</p><p class="so-value">' + esc(k.address || "Coming soon") + "</p></div></div>" +
      '<div class="so-btns">' + T("span", "cta", c.cta, "so-btn") + T("span", "cta2", c.cta2, "so-btn so-outline") + "</div></div></div></div>";
  };
  R.footer.smith = function (c, ctx) {
    var k = ctx.contact || {};
    var ul = function (key, arr) { return "<ul>" + list(arr).map(function (x, i) { return T("li", key + "." + i, x); }).join("") + "</ul>"; };
    return '<div class="so-footer"><div class="wrap"><div class="so-fgrid"><div><span class="so-brand">' + (c.logo ? '<span class="so-tile"><img src="' + esc(c.logo) + '" alt="' + esc(ctx.biz) + '"></span>' : "") +
      T("span", "place", c.place, "so-place") + "</span>" + T("p", "blurb", c.blurb) + T("span", "cta", c.cta, "so-btn so-sm") + "</div>" +
      "<div><h4>Visit &amp; call</h4><ul>" + [k.phone || "Phone coming soon", k.address || "Address coming soon", "By appointment"].map(function (v) { return "<li>" + esc(v) + "</li>"; }).join("") + "</ul></div>" +
      "<div><h4>Common questions</h4>" + ul("questions", c.questions) + "</div><div><h4>Explore</h4>" + ul("links", c.links) + "</div></div>" +
      '<div class="so-base">' + T("span", "legal", c.legal) + T("span", "fine", c.fine) + "</div></div></div>";
  };
})();
