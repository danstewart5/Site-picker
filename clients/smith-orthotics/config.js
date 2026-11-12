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
        dark: "#111111", onDark: "#f5f5f3" }
    ],
    fonts: ["classic", "modern", "sturdy", "friendly"],

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
        } }
    ]
  };
})();
