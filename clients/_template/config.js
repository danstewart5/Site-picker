/*
  TEMPLATE: copy this folder to clients/<slug>/ (lowercase letters, numbers, dashes only),
  fill in the text, and send the client:  https://YOUR-SITE/p/<slug>
  (or https://YOUR-SITE/picker.html?client=<slug>)

  Images: use a real image URL (e.g. "/clients/<slug>/kitchen.jpg") or a drawn placeholder
  written as "ph:<kind>:<label>". Kinds: scene, room, product, portrait, foot, map.
  Icons: home, hammer, ruler, drop, leaf, shield, check, star, phone, mail, pin, clock,
         heart, bag, gift, foot, sock, doc, spark, chat.
*/
window.KF_CLIENT = {
  businessName: "Business Name",
  industry: "trades",                 // "trades", "medical" or "retail" (highlights matching extras)
  contact: {
    phone: "250-555-0100",
    email: "hello@example.com",
    area: "Town & area served",
    address: "Street, Town, BC"
  },
  navLabels: { gallery: "Projects" },  // optional: words used in the sample menu
  sectionLabels: {},                  // optional: rename sections in the picker, e.g. { services: "Menu" }
  // addonsHide: ["multi-language"],  // optional: hide extras that don't fit
  // radius: 10,                      // optional: button/card roundness in px

  palettes: [
    { id: "one", name: "Palette one",
      bg: "#ffffff", surface: "#eef3f7", text: "#16202b", muted: "#475569",
      primary: "#1d3f63", onPrimary: "#ffffff", accent: "#e2a23b", onAccent: "#1a1307",
      dark: "#0f2133", onDark: "#f1f5f9" },
    { id: "two", name: "Palette two",
      bg: "#fbf8f3", surface: "#f1eadf", text: "#2a211b", muted: "#5b4e44",
      primary: "#7a3e1d", onPrimary: "#ffffff", accent: "#4f7a5a", onAccent: "#ffffff",
      dark: "#2a211b", onDark: "#f8f3ec" },
    { id: "three", name: "Palette three",
      bg: "#ffffff", surface: "#f1f2f3", text: "#1b1d20", muted: "#52575e",
      primary: "#2b3036", onPrimary: "#ffffff", accent: "#ee6a1f", onAccent: "#1a0b02",
      dark: "#16181b", onDark: "#f4f4f5" }
  ],
  fonts: ["modern", "classic", "sturdy", "friendly"],   // ids from js/defaults.js

  content: {
    hero: { eyebrow: "", headline: "", sub: "", cta: "", cta2: "", image: "ph:scene:Main photo",
            images: ["ph:scene:Photo 1", "ph:room:Photo 2", "ph:product:Photo 3"],
            badges: ["", "", ""], stats: [{ num: "", label: "" }, { num: "", label: "" }, { num: "", label: "" }] },
    services: { eyebrow: "", title: "", intro: "", cta: "",
                items: [{ name: "", desc: "", icon: "home", image: "ph:room:Service", price: "" }] },
    gallery: { eyebrow: "", title: "", intro: "", cta: "", items: [{ caption: "", image: "ph:room:Photo" }] },
    about: { eyebrow: "", title: "", body: "", body2: "", image: "ph:portrait:Team", points: [""],
             stats: [{ num: "", label: "" }], quote: "", owner: { name: "", role: "", image: "ph:portrait:Owner" } },
    reviews: { eyebrow: "", title: "", rating: "5.0", count: "", items: [{ quote: "", name: "", where: "" }] },
    contact: { eyebrow: "", title: "", body: "", cta: "", formTitle: "", hours: [{ days: "", time: "" }] },
    footer: { blurb: "", links: [""], social: ["Facebook", "Instagram"], legal: "", ctaLine: "" }
  },

  /* 2 or 3 designs. Design 1 = layout A, 2 = B, 3 = C. Override any content per design.
     To mix layouts, add e.g.  layouts: { gallery: "A" }  to a design. */
  designs: [
    { name: "Design one" },
    { name: "Design two", content: { hero: { headline: "" } } },
    { name: "Design three", content: { hero: { headline: "" } } }
  ]
};
