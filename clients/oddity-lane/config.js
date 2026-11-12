/*
  Oddity Lane Market / The House of Oddities: themed maker market, Nanaimo BC (Denise).
  Wording, themes and art come from Dan's sample site (the eye, gift bags, pendants, tarot, market flyers).
  Three designs to mix:
    A  Spooky Curiosity Shop   dark and mystical: the eye, candles, the oracle, oddities
    B  Bright Weird Fun        loud family fun: free entry, kids and pets, gift bags, draws, photo props
    C  Maker Market            clean and crafty: vendors, workshops and applying to vend
  Sections: services = what's on, gallery = the markets / makers, reviews = "Why people linger" perks (B)
  or clearly labelled placeholders (A, C). No real reviews yet: never replace them with made-up names.
  No phone, email, street address or market dates are confirmed yet, so none are shown.
*/
(function () {
  var IMG = "/clients/oddity-lane/";
  var HOURS = [
    { days: "Market weekends", time: "Times on each flyer" },
    { days: "Shop", time: "Open during market weekends" },
    { days: "Next market", time: "Date coming soon" }
  ];
  var LEGAL = "© The House of Oddities & Oddity Lane Market. Nanaimo, BC.";
  var PH_WHERE = "Replace with a real review";

  window.KF_CLIENT = {
    businessName: "Oddity Lane Market",
    logo: IMG + "logo.svg",
    industry: "retail",
    contact: {
      phone: "",
      email: "",
      area: "Nanaimo, BC",
      address: "Oddity Lane, Nanaimo, BC (street address coming soon)"
    },
    navLabels: { services: "What's on", gallery: "Markets" },
    sectionLabels: { services: "What's on", gallery: "Markets & makers", about: "The story", reviews: "Why people come", contact: "Visit & vend" },
    sectionHints: {
      services: "Markets, workshops and the shop",
      gallery: "Themed markets and the makers",
      about: "The House of Oddities story",
      reviews: "Perks now, real reviews later",
      contact: "Visiting, hours and applying to vend"
    },
    radius: 16,
    addonsHide: ["quote-calculator", "referral-form", "before-after", "service-map"],

    palettes: [
      { id: "midnight", name: "Midnight & candle gold",
        bg: "#1a1326", surface: "#251a38", text: "#f3ecdf", muted: "#c9bcd9",
        primary: "#e8c35a", onPrimary: "#1a1326", accent: "#9a6be0", onAccent: "#ffffff",
        dark: "#0e0a17", onDark: "#f3ecdf" },
      { id: "candy", name: "Candy pop",
        bg: "#fffaf3", surface: "#ffe3ef", text: "#1f1a3a", muted: "#4a4170",
        primary: "#e0307a", onPrimary: "#ffffff", accent: "#ffd23f", onAccent: "#1f1a3a",
        dark: "#127f7b", onDark: "#ffffff" },
      { id: "kraft", name: "Kraft & forest",
        bg: "#fbf6ec", surface: "#efe3cc", text: "#1f2a1f", muted: "#55604f",
        primary: "#2f5d3a", onPrimary: "#ffffff", accent: "#c8894a", onAccent: "#1d1206",
        dark: "#1e3324", onDark: "#f6f0e2" }
    ],
    fonts: ["friendly", "classic", "sturdy", "modern"],

    /* Base wording (used by Spooky Curiosity Shop, and as a fallback for the others). */
    content: {
      hero: {
        eyebrow: "The House of Oddities · Nanaimo, BC",
        headline: "Where the Island comes to get weird.",
        sub: "Themed weekend markets packed with local makers, hands-on workshops, and a shop full of oddities on Oddity Lane. Free entry. Curiosity required.",
        cta: "See what's on",
        cta2: "Pull a card",
        image: IMG + "eye-night.svg",
        images: [IMG + "curiosity-shelf.svg", IMG + "tarot.svg", IMG + "pendants.svg"],
        badges: ["Free entry, always", "Kids and pets welcome", "Gift bags for the first 33"],
        stats: [{ num: "Free", label: "Entry, always" }, { num: "33", label: "Gift bags each market day" }, { num: "Daily", label: "Draws at every market" }]
      },
      services: {
        eyebrow: "What's brewing",
        title: "Three ways to get weird",
        intro: "Every market has a theme, a flyer to match, and something odd around every corner.",
        cta: "See what's on",
        items: [
          { name: "Themed weekend markets", icon: "spark", image: IMG + "flyer-merry-mystics.svg",
            desc: "Makers, artists, readers and oddity dealers under one roof. Hallo-Weird, Winter Weirdos, Merry Mystics: every market wears its own costume." },
          { name: "Hands-on workshops", icon: "drop", image: IMG + "perfume-lab.svg",
            desc: "Blend your own custom perfume with Perfume Lab, then take your creation home. Small groups, and you leave with something you made." },
          { name: "The shop of oddities", icon: "bag", image: IMG + "pendants.svg",
            desc: "The market stays open between market weekends. Hold anything online, then pay when you pick it up. No card needed." },
          { name: "Pull a card", icon: "star",
            desc: "The Oddity Lane oracle knows which market you need. Pick one card. No peeking." },
          { name: "Gemstone pendants", icon: "gift",
            desc: "Gemstone drops on fine chains. Each one is one of a kind, and you can hold it online for pickup." },
          { name: "Become a vendor", icon: "heart",
            desc: "Bring your handmade, vintage, mystical and wonderfully odd things to Nanaimo's weirdest little market." }
        ]
      },
      gallery: {
        eyebrow: "Every market wears a costume",
        title: "The markets",
        intro: "Each market has its own theme, its own flyer and its own reason to visit. Tap a flyer for the details.",
        cta: "See what's on",
        items: [
          { caption: "Merry Mystics Market & Solstice Celebration", image: IMG + "flyer-merry-mystics.svg" },
          { caption: "Hallo-Weird Weekend Market", image: IMG + "flyer-hallo-weird.svg" },
          { caption: "Winter Weirdos: a Candyland weekend", image: IMG + "flyer-winter-weirdos.svg" },
          { caption: "The Micro Market: tiny things, big fun", image: IMG + "flyer-micro-market.svg" },
          { caption: "Boxing Day Sale", image: IMG + "flyer-boxing-day.svg" },
          { caption: "Pull a card from the oracle", image: IMG + "tarot.svg" }
        ]
      },
      about: {
        eyebrow: "The story",
        title: "A little shop that got curiouser.",
        body: "The House of Oddities is a creative retail experience on Oddity Lane: themed weekend markets, hands-on workshops, and a shop full of handmade, vintage, mystical and wonderfully odd things.",
        body2: "Makers, artists, readers and oddity dealers bring their tables to a crowd that came to play. It's a real indoor space, so there are no tents, no wind and no rain drama.",
        image: IMG + "curiosity-shelf.svg",
        points: ["Indoor space on Oddity Lane", "Every market has its own theme", "Kids and pets welcome", "First-time makers welcome"],
        stats: [
          { num: "Free", label: "Entry to every market" },
          { num: "33", label: "Gift bags each market day" },
          { num: "Themed", label: "Every single market" },
          { num: "Indoor", label: "No rain drama" }
        ],
        quote: "",
        owner: { name: "Denise", role: "Runs The House of Oddities", image: "ph:portrait:Photo of Denise" }
      },
      reviews: {
        eyebrow: "Whispers from the lane",
        title: "What visitors say",
        rating: "New",
        count: "Placeholder: your Google rating shows here",
        items: [
          { quote: "Placeholder: a real visitor's words about their first market and what they found.", name: "Visitor review (placeholder)", where: PH_WHERE },
          { quote: "Placeholder: a real review from someone who did a workshop, like Perfume Lab.", name: "Workshop review (placeholder)", where: PH_WHERE },
          { quote: "Placeholder: a real review from a maker who sells at the market.", name: "Vendor review (placeholder)", where: PH_WHERE }
        ]
      },
      contact: {
        eyebrow: "Visit",
        title: "Follow the eye to Oddity Lane.",
        body: "The shop opens during market weekends, and every market's times are on its flyer. The next market date is coming soon. Questions? Ask the House.",
        cta: "Send",
        formTitle: "Ask the House a question",
        hours: HOURS
      },
      footer: {
        blurb: "The House of Oddities & Oddity Lane Market. Themed weekend markets, hands-on workshops and a shop full of oddities in Nanaimo, BC.",
        links: ["What's on", "Shop", "Workshops", "Vendors", "Visit"],
        social: ["Instagram", "TikTok", "Facebook"],
        legal: LEGAL,
        ctaLine: "Stay weird."
      }
    },

    designs: [
      /* ---------- A: Spooky Curiosity Shop (uses the base wording above) ---------- */
      { name: "Spooky Curiosity Shop", blurb: "Dark, moody, mystical oddities" },

      /* ---------- B: Bright Weird Fun ---------- */
      { name: "Bright Weird Fun", blurb: "Loud, colourful, family-friendly",
        content: {
          hero: {
            eyebrow: "Free entry · Kids & pets welcome",
            headline: "Come get weird!",
            sub: "Themed weekend markets with local makers, gift bags for the first 33 through the door, daily draws and giant photo props. Bring the kids. Bring the dog.",
            cta: "I'm coming!",
            cta2: "See what's on",
            image: IMG + "hero-bright.svg"
          },
          services: {
            eyebrow: "The fun stuff",
            title: "Something odd around every corner",
            intro: "Details change by market, so check each flyer.",
            cta: "See what's on",
            items: [
              { name: "Gift bags for the first 33 weirdos", icon: "gift",
                desc: "Each market day, the first 33 people through the door walk out with a gift bag." },
              { name: "Daily draws", icon: "star",
                desc: "Spend ten dollars or more with any vendor and you're in the draw." },
              { name: "Giant photo props", icon: "spark",
                desc: "Oversized, slightly ridiculous, and made for your camera roll. Pets encouraged." },
              { name: "Candy wonderland", icon: "heart",
                desc: "For kids of all ages at Winter Weirdos. Free entry, always." },
              { name: "Make-your-own workshops", icon: "drop",
                desc: "Blend a custom perfume at Perfume Lab and take it home the same day." },
              { name: "Hold it now, pay at pickup", icon: "bag",
                desc: "Shop the Market online between market weekends. Tap \"Hold for me\" and pay when you pick it up." }
            ]
          },
          gallery: {
            eyebrow: "Photo-op central",
            title: "Every market has a theme",
            intro: "Candyland, Mystics, Micro: each one has its own look, its own flyer and its own reason to visit.",
            cta: "See all the markets",
            items: [
              { caption: "Winter Weirdos", image: IMG + "flyer-winter-weirdos.svg" },
              { caption: "Hallo-Weird", image: IMG + "flyer-hallo-weird.svg" },
              { caption: "The Micro Market", image: IMG + "flyer-micro-market.svg" },
              { caption: "Giant photo props", image: IMG + "photo-props.svg" },
              { caption: "Gift bags for the first 33", image: IMG + "gift-bags.svg" }
            ]
          },
          about: {
            eyebrow: "Hi, we're the House of Oddities",
            title: "A market that came to play.",
            body: "We throw themed weekend markets packed with local makers, then fill the room with giant props, gift bags and daily draws, so you'll want to stay all afternoon.",
            body2: "Free markets, kids and pets welcome, and something odd around every corner."
          },
          reviews: {
            eyebrow: "The fun stuff",
            title: "Why people linger",
            items: [
              { quote: "Each market day, the first 33 people through the door walk out with a gift bag. Arrive early, bring a friend, wear something odd.", name: "Gift bags for the first 33 weirdos", where: "Every market day" },
              { quote: "Spend ten dollars or more with any vendor and you're in the daily draw.", name: "Daily draws", where: "At the market" },
              { quote: "Oversized, slightly ridiculous, and made for your camera roll. Pets encouraged.", name: "Giant photo props", where: "Bring your phone" }
            ]
          },
          contact: {
            title: "Come get weird with us!",
            body: "Free entry, kids and pets welcome. The next market date is coming soon, so follow along and we'll see you at the door.",
            cta: "Message the market",
            hours: [{ days: "Free entry", time: "at every market" }, { days: "Next market:", time: "date coming soon" }]
          },
          footer: {
            blurb: "Free themed markets, gift bags, daily draws and giant photo props in Nanaimo, BC.",
            links: ["What's on", "The fun stuff", "Shop", "Workshops", "Visit"]
          }
        } },

      /* ---------- C: Maker Market ---------- */
      { name: "Maker Market", blurb: "Clean, crafty, vendors and workshops first",
        content: {
          hero: {
            eyebrow: "Local makers · Nanaimo, BC",
            headline: "A maker market on Oddity Lane.",
            sub: "Handmade, vintage, mystical and wonderfully odd things from Island makers, plus hands-on workshops and a shop that stays open between market weekends.",
            cta: "Become a vendor",
            images: [IMG + "vendor-table.svg", IMG + "perfume-lab.svg", IMG + "pendants.svg"],
            stats: [{ num: "Indoor", label: "A real retail space" }, { num: "Themed", label: "Every market" }, { num: "3 min", label: "To apply to vend" }]
          },
          services: {
            eyebrow: "What's on",
            title: "Markets, workshops and a shop",
            intro: "Come to shop, come to make something, or bring your own table.",
            items: [
              { name: "Themed weekend markets", icon: "spark", image: IMG + "vendor-table.svg",
                desc: "The lineup changes every market. Makers, artists, readers and oddity dealers, all indoors on Oddity Lane." },
              { name: "Hands-on workshops", icon: "drop", image: IMG + "perfume-lab.svg",
                desc: "Small groups, hands-on, and you leave with something you made. Blend a custom perfume with Perfume Lab, who can reproduce your recipe later." },
              { name: "Shop the Market", icon: "bag", image: IMG + "pendants.svg",
                desc: "Hold anything online, then pick it up at the next market or at the shop by arrangement. Pay at pickup. No card needed." },
              { name: "Jewellery & crystals" }, { name: "Art & prints" }, { name: "Candles & scents" },
              { name: "Clothing & vintage" }, { name: "Baked treats" }, { name: "Readings & wellness" }
            ]
          },
          gallery: {
            eyebrow: "Makers you'll meet",
            title: "The lineup changes every market",
            items: [
              { caption: "Crystal pendant jewellery", image: IMG + "pendants.svg" },
              { caption: "Candles, scents & Perfume Lab", image: IMG + "perfume-lab.svg" },
              { caption: "Oddities & curiosities", image: IMG + "curiosity-shelf.svg" },
              { caption: "Readings & wellness", image: IMG + "tarot.svg" },
              { caption: "Local makers' tables", image: IMG + "vendor-table.svg" },
              { caption: "Your table here?", image: IMG + "your-table.svg" }
            ]
          },
          about: {
            eyebrow: "Sell your weird",
            title: "Bring your table to a crowd that came to play.",
            body: "Themed markets people come out for, shoppers who stay a while, and a real indoor space on Oddity Lane. Small and friendly: makers, artists, readers and oddity dealers all welcome, first-timers too.",
            points: [
              "Apply in about three minutes",
              "Pick the markets you'd like to join",
              "Spots are confirmed by email",
              "Set up your table and meet the crowd"
            ]
          },
          reviews: {
            eyebrow: "Makers & shoppers",
            title: "What makers and shoppers say",
            items: [
              { quote: "Placeholder: a real vendor on what it's like to sell at Oddity Lane Market.", name: "Vendor review (placeholder)", where: "Add: name, shop, town" },
              { quote: "Placeholder: a real shopper's review of a market weekend.", name: "Shopper review (placeholder)", where: "Add: name, town" },
              { quote: "Placeholder: a real review from a workshop guest.", name: "Workshop review (placeholder)", where: "Add: name, town" }
            ]
          },
          contact: {
            eyebrow: "Visit & vend",
            title: "Come shop, or bring your table.",
            body: "Makers, artists, readers and oddity dealers: apply to vend in about three minutes. Want to host a workshop or co-host a market? Tell us your idea.",
            cta: "Apply to vend"
          },
          footer: {
            blurb: "A themed maker market, hands-on workshops and a shop of oddities on Oddity Lane in Nanaimo, BC.",
            links: ["What's on", "Workshops", "Makers", "Apply to vend", "Visit"],
            ctaLine: "Sell your weird."
          }
        } }
    ]
  };
})();
