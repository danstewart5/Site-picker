/* Shared defaults. A client config can override palettes, fonts and section labels. */

/* The standard sections every sample design is built in (order = page order). */
window.KF_SECTIONS = [
  { id: "hero",     label: "Header & intro",   hint: "The first thing visitors see" },
  { id: "services", label: "Services",         hint: "What you offer" },
  { id: "gallery",  label: "Gallery",          hint: "Photos of your work" },
  { id: "about",    label: "About",            hint: "Who you are" },
  { id: "reviews",  label: "Reviews",          hint: "What customers say" },
  { id: "contact",  label: "Contact",          hint: "How people reach you" },
  { id: "footer",   label: "Footer",           hint: "Bottom of every page" }
];

/* Font pairings. "google" lists Google Fonts families; system fonts are the fallback. */
window.KF_FONTS = [
  {
    id: "modern", name: "Clean & modern",
    head: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
    body: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
    weight: 800, google: ["Inter:wght@400;600;800"]
  },
  {
    id: "classic", name: "Classic & trusted",
    head: "'Playfair Display', Georgia, 'Times New Roman', serif",
    body: "'Source Sans 3', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
    weight: 700, google: ["Playfair+Display:wght@600;700", "Source+Sans+3:wght@400;600;700"]
  },
  {
    id: "sturdy", name: "Bold & sturdy",
    head: "'Oswald', 'Arial Narrow', Impact, sans-serif",
    body: "'Roboto', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
    weight: 600, upper: true, google: ["Oswald:wght@500;600", "Roboto:wght@400;500;700"]
  },
  {
    id: "friendly", name: "Warm & friendly",
    head: "'Fraunces', Georgia, serif",
    body: "'Nunito', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
    weight: 700, google: ["Fraunces:opsz,wght@9..144,400..900", "Nunito:wght@400;600;700"]
  }
];

/* Fallback palettes if a client config doesn't define its own. */
window.KF_PALETTES = [
  { id: "ocean", name: "Ocean",
    bg: "#ffffff", surface: "#eef3f7", text: "#16202b", muted: "#4a5868",
    primary: "#1d4e74", onPrimary: "#ffffff", accent: "#e3a33b", onAccent: "#1a1307",
    dark: "#0f2233", onDark: "#f2f6fa" },
  { id: "forest", name: "Forest",
    bg: "#fbfaf6", surface: "#eef0e6", text: "#1f2a1f", muted: "#4d5a4c",
    primary: "#2f5d3a", onPrimary: "#ffffff", accent: "#c98a3c", onAccent: "#1d1206",
    dark: "#1b2a1e", onDark: "#f3f5ee" },
  { id: "charcoal", name: "Charcoal",
    bg: "#ffffff", surface: "#f1f1f0", text: "#1b1c1e", muted: "#55585d",
    primary: "#24272b", onPrimary: "#ffffff", accent: "#e8692a", onAccent: "#1a0c03",
    dark: "#141517", onDark: "#f4f4f4" }
];
