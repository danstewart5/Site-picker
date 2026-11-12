/* Demo client: fictional orthotics clinic. Copy clients/_template to start a real one. */
window.KF_CLIENT = {
  businessName: "Northshore Orthotics & Foot Care",
  industry: "medical",
  contact: {
    phone: "250-555-0187",
    email: "care@northshorefoot.example",
    area: "Nanaimo & central Vancouver Island",
    address: "210 Harbourview Rd, Nanaimo, BC"
  },
  navLabels: { gallery: "Clinic" },
  sectionLabels: { services: "Treatments", gallery: "Our clinic" },
  sectionHints: { services: "What you treat", gallery: "Photos of your clinic" },
  radius: 14,
  addonsHide: ["quote-calculator", "online-store", "before-after"],

  palettes: [
    { id: "clinic-teal", name: "Calm Teal",
      bg: "#ffffff", surface: "#ecf5f4", text: "#132a2a", muted: "#456060",
      primary: "#0f6b68", onPrimary: "#ffffff", accent: "#f2a65a", onAccent: "#2a1606",
      dark: "#0d2a2c", onDark: "#eef7f6" },
    { id: "clinic-blue", name: "Trusted Blue",
      bg: "#ffffff", surface: "#eef2fb", text: "#141c2e", muted: "#47536b",
      primary: "#244f9e", onPrimary: "#ffffff", accent: "#4fb39a", onAccent: "#06231b",
      dark: "#101a33", onDark: "#eef2fb" },
    { id: "clinic-sage", name: "Soft Sage",
      bg: "#fbfbf8", surface: "#eef1ea", text: "#1f2620", muted: "#4f5a50",
      primary: "#3f6b4f", onPrimary: "#ffffff", accent: "#c97c5d", onAccent: "#ffffff",
      dark: "#1e2a22", onDark: "#f2f5ef" }
  ],
  fonts: ["modern", "friendly", "classic"],

  content: {
    hero: {
      eyebrow: "Custom orthotics · Nanaimo",
      headline: "Walk, work and play without foot pain.",
      sub: "Custom orthotics, foot assessments and compression therapy, made for your feet and billed directly to most extended health plans.",
      cta: "Book an assessment",
      cta2: "Do I need a referral?",
      image: "ph:foot:Custom orthotic",
      images: ["ph:foot:Orthotic insoles", "ph:room:Assessment room", "ph:product:Compression socks"],
      badges: ["Direct billing", "Certified clinicians", "No referral needed"],
      stats: [{ num: "15 yrs", label: "Helping Island feet" }, { num: "8,000+", label: "Patients fitted" }, { num: "1 week", label: "Typical turnaround" }]
    },
    services: {
      eyebrow: "Treatments",
      title: "Care for every step",
      intro: "Every plan starts with a full assessment so we treat the cause, not just the symptom.",
      cta: "Book an assessment",
      items: [
        { name: "Custom orthotics", desc: "Made from a 3D scan of your feet and adjusted until they feel right.", icon: "foot", image: "ph:foot:Orthotics" },
        { name: "Foot & gait assessments", desc: "A head-to-toe look at how you stand, walk and run.", icon: "ruler", image: "ph:room:Gait analysis" },
        { name: "Compression socks", desc: "Medical-grade compression, fitted and measured in clinic.", icon: "sock", image: "ph:product:Compression socks" },
        { name: "Doctor referrals", desc: "We work with your doctor, physio or chiro and send reports back.", icon: "doc" },
        { name: "Extended-health billing", desc: "We bill most plans directly, so you pay less up front.", icon: "shield" },
        { name: "Diabetic foot care", desc: "Footwear and orthotics that protect sensitive feet.", icon: "heart" }
      ]
    },
    gallery: {
      eyebrow: "Our clinic",
      title: "Bright, accessible and easy to find",
      intro: "Free parking, step-free entry and a comfortable space for every visit.",
      cta: "Plan your visit",
      items: [
        { caption: "Reception", image: "ph:room:Reception" },
        { caption: "Assessment room", image: "ph:room:Assessment room" },
        { caption: "3D foot scanner", image: "ph:foot:Foot scan" },
        { caption: "Orthotic lab", image: "ph:product:Lab" },
        { caption: "Compression fitting", image: "ph:product:Fitting area" },
        { caption: "Free parking", image: "ph:scene:Parking" }
      ]
    },
    about: {
      eyebrow: "About the clinic",
      title: "Island care, made in-house",
      body: "Northshore is a locally owned clinic. Our clinicians assess, cast and fit every pair, and our lab builds them right here in Nanaimo.",
      body2: "That means faster turnaround and free adjustments for the life of your orthotics.",
      image: "ph:portrait:Our clinician",
      points: ["Certified orthotic clinicians", "Made in our Nanaimo lab", "Free adjustments", "Direct billing to most plans"],
      stats: [{ num: "15", label: "Years in Nanaimo" }, { num: "8k+", label: "Patients" }, { num: "1 wk", label: "Turnaround" }, { num: "4.9", label: "Google stars" }],
      quote: "Most foot pain can be fixed. You shouldn't have to put up with it.",
      owner: { name: "Dana Whitfield, C.Ped", role: "Clinic owner & pedorthist", image: "ph:portrait:Dana Whitfield" }
    },
    reviews: {
      eyebrow: "Patient stories",
      title: "Back on their feet",
      rating: "4.9",
      count: "from 210 Google reviews",
      items: [
        { quote: "After years of heel pain I can finally walk the dog again. The fitting was thorough and friendly.", name: "Karen L.", where: "Nanaimo" },
        { quote: "They billed my plan directly and the orthotics were ready in a week. So easy.", name: "Brian T.", where: "Lantzville" },
        { quote: "As a nurse on 12-hour shifts, my compression socks and orthotics changed everything.", name: "Priya S.", where: "Ladysmith" },
        { quote: "My doctor referred me and the clinic sent her a full report. Great communication.", name: "Gord H.", where: "Parksville" }
      ]
    },
    contact: {
      eyebrow: "Book a visit",
      title: "Book your foot assessment",
      body: "No referral needed. Bring your shoes and your benefits card, and we'll take care of the rest.",
      cta: "Book online",
      formTitle: "Request an appointment",
      hours: [{ days: "Mon to Thu", time: "8am to 6pm" }, { days: "Friday", time: "8am to 4pm" }, { days: "Saturday", time: "9am to 1pm" }]
    },
    footer: {
      blurb: "Custom orthotics, assessments and compression therapy in Nanaimo, BC.",
      links: ["Treatments", "Our clinic", "Referrals", "Billing", "Contact"],
      social: ["Facebook", "Instagram"],
      legal: "© Northshore Orthotics & Foot Care. Information on this site is not a substitute for medical advice.",
      ctaLine: "Ready to feel better on your feet?"
    }
  },

  designs: [
    { name: "Reassuring", blurb: "Warm, clear and simple" },
    { name: "Modern clinic", blurb: "Big imagery, confident",
      content: {
        hero: { eyebrow: "Nanaimo foot clinic", headline: "Feel the difference in every step.", cta: "Book now", cta2: "Call the clinic", image: "ph:scene:Island walking trail" },
        services: { eyebrow: "How we help", title: "Treatments" },
        contact: { title: "Your feet will thank you.", body: "Book an assessment online or give us a call.", cta: "Call to book" }
      } },
    { name: "Expert", blurb: "Detailed and editorial",
      content: {
        hero: { headline: "Foot pain, properly fixed.", sub: "Certified clinicians, an in-house lab, and orthotics made for how you actually move." },
        gallery: { title: "Inside the clinic" },
        about: { title: "Meet Dana" },
        contact: { eyebrow: "Visit us", title: "Find the clinic" }
      } }
  ]
};
