/* Demo client: fictional gift and home goods shop. Copy clients/_template to start a real one. */
window.KF_CLIENT = {
  businessName: "Harbour & Pine Goods",
  industry: "retail",
  contact: {
    phone: "250-555-0119",
    email: "shop@harbourandpine.example",
    area: "Downtown Parksville",
    address: "88 Beachside Ave, Parksville, BC"
  },
  navLabels: { services: "Shop", gallery: "In store" },
  sectionLabels: { services: "Shop / featured products", gallery: "In the shop" },
  sectionHints: { services: "What you sell", gallery: "Photos of the shop" },
  radius: 6,
  addonsHide: ["quote-calculator", "referral-form", "service-map"],

  palettes: [
    { id: "pine", name: "Pine & Sand",
      bg: "#fbf8f2", surface: "#f0e9dc", text: "#1f2a22", muted: "#53594f",
      primary: "#2e4a3a", onPrimary: "#ffffff", accent: "#d9a35b", onAccent: "#2a1a05",
      dark: "#1c2b22", onDark: "#f6f1e7" },
    { id: "driftwood", name: "Driftwood",
      bg: "#ffffff", surface: "#f3efea", text: "#2a2522", muted: "#5d5550",
      primary: "#6b5546", onPrimary: "#ffffff", accent: "#5e8c96", onAccent: "#ffffff",
      dark: "#2a2522", onDark: "#f7f3ef" },
    { id: "coral", name: "Coral Coast",
      bg: "#fffaf7", surface: "#fbebe4", text: "#2b1c18", muted: "#62504a",
      primary: "#b4483a", onPrimary: "#ffffff", accent: "#245c6b", onAccent: "#ffffff",
      dark: "#2b1c18", onDark: "#fff3ee" },
    { id: "night", name: "Evening Harbour",
      bg: "#151a1f", surface: "#20272e", text: "#f1ede6", muted: "#c3bcb2",
      primary: "#e3b778", onPrimary: "#1a1206", accent: "#8fc0b5", onAccent: "#0b1f1a",
      dark: "#0d1114", onDark: "#f1ede6" }
  ],
  fonts: ["classic", "friendly", "modern"],

  content: {
    hero: {
      eyebrow: "Gifts · Home · Local makers",
      headline: "Thoughtful gifts, made on the Island.",
      sub: "Candles, ceramics, prints and home goods from over 60 Vancouver Island makers, in the heart of Parksville.",
      cta: "Shop new arrivals",
      cta2: "Visit the shop",
      image: "ph:product:Shop display",
      images: ["ph:product:Ceramics", "ph:product:Candles", "ph:room:Shop interior"],
      badges: ["60+ local makers", "Gift wrapping", "Local pickup"],
      stats: [{ num: "60+", label: "Island makers" }, { num: "Since 2016", label: "Downtown Parksville" }, { num: "Free", label: "Gift wrapping" }]
    },
    services: {
      eyebrow: "Shop",
      title: "Featured this month",
      intro: "A few favourites from the shelves. New pieces arrive every week.",
      cta: "Browse the shop",
      items: [
        { name: "Hand-thrown mugs", desc: "Stoneware mugs from a Qualicum Beach potter.", price: "$38", icon: "home", image: "ph:product:Mugs" },
        { name: "Cedar & sea salt candles", desc: "Soy candles poured in small batches in Errington.", price: "$26", icon: "spark", image: "ph:product:Candles" },
        { name: "Island art prints", desc: "Coastal prints by local artists, framed or unframed.", price: "From $45", icon: "leaf", image: "ph:scene:Art print" },
        { name: "Gift boxes", desc: "Curated boxes for birthdays, thank-yous and new homes.", price: "From $60", icon: "gift" },
        { name: "Linens & throws", desc: "Soft wool throws and linen tea towels.", price: "From $24", icon: "heart" },
        { name: "Gift cards", desc: "Any amount, in store or by email.", price: "Any amount", icon: "bag" }
      ]
    },
    gallery: {
      eyebrow: "In the shop",
      title: "Come browse",
      intro: "Big windows, local scents and a shop dog named Juniper.",
      cta: "Follow us on Instagram",
      items: [
        { caption: "Front window", image: "ph:room:Front window" },
        { caption: "Ceramics wall", image: "ph:product:Ceramics" },
        { caption: "Candle bar", image: "ph:product:Candles" },
        { caption: "Kids' corner", image: "ph:product:Toys" },
        { caption: "Gift wrap station", image: "ph:product:Gift wrap" },
        { caption: "Maker market days", image: "ph:scene:Market day" }
      ]
    },
    about: {
      eyebrow: "Our story",
      title: "A shop full of neighbours",
      body: "Harbour & Pine opened in 2016 to give Island makers a home on Parksville's main street. Every piece on our shelves is chosen by hand, and most were made within an hour of the shop.",
      body2: "When you shop here, your money stays on the Island.",
      image: "ph:room:Shop interior",
      points: ["60+ Island makers", "Free gift wrapping", "Local pickup & delivery", "New arrivals every week"],
      stats: [{ num: "60+", label: "Local makers" }, { num: "2016", label: "Opened" }, { num: "2,000+", label: "Products" }, { num: "4.8", label: "Google stars" }],
      quote: "I wanted a shop where every gift has a story and a face behind it.",
      owner: { name: "Ellie Marchand", role: "Owner & buyer", image: "ph:portrait:Ellie Marchand" }
    },
    reviews: {
      eyebrow: "Kind words",
      title: "Loved by locals and visitors",
      rating: "4.8",
      count: "from 340 Google reviews",
      items: [
        { quote: "My favourite gift shop on the Island. I never leave empty-handed.", name: "Megan W.", where: "Qualicum Beach" },
        { quote: "Beautiful local pieces and the gift wrapping is a work of art.", name: "Alan C.", where: "Visiting from Calgary" },
        { quote: "They put together a gift box for my sister in ten minutes. She loved it.", name: "Rita J.", where: "Parksville" },
        { quote: "Friendly staff, great smells, and the shop dog is a bonus.", name: "Sam O.", where: "Nanaimo" }
      ]
    },
    contact: {
      eyebrow: "Visit",
      title: "Come say hello",
      body: "Find us on Beachside Avenue, steps from the beach. Street parking out front.",
      cta: "Get directions",
      formTitle: "Ask about a product",
      hours: [{ days: "Mon to Sat", time: "10am to 5:30pm" }, { days: "Sunday", time: "11am to 4pm" }]
    },
    footer: {
      blurb: "Gifts, home goods and local makers in downtown Parksville.",
      links: ["Shop", "Gift boxes", "Makers", "Visit", "Gift cards"],
      social: ["Instagram", "Facebook", "Pinterest"],
      legal: "© Harbour & Pine Goods, Parksville BC.",
      ctaLine: "Looking for the perfect gift?"
    }
  },

  designs: [
    { name: "Boutique", blurb: "Bright and welcoming" },
    { name: "Lookbook", blurb: "Big photos, magazine feel",
      content: {
        hero: { eyebrow: "Parksville, BC", headline: "Made here. Loved everywhere.", cta: "Shop now", cta2: "Plan a visit", image: "ph:room:Shop interior" },
        services: { eyebrow: "Featured", title: "This month's favourites" },
        contact: { title: "Drop by the shop.", body: "Open seven days on Beachside Avenue.", cta: "Call the shop" }
      } },
    { name: "Market", blurb: "Editorial, maker-focused",
      content: {
        hero: { headline: "Island-made goods for home & gifting.", sub: "Small-batch pieces from the makers next door." },
        services: { title: "Shop the shelves" },
        gallery: { title: "A look around the shop" },
        about: { title: "Meet Ellie" },
        contact: { eyebrow: "Find us", title: "Visit the shop" }
      } }
  ]
};
