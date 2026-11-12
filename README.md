# Site picker (Keen Falcon)

Send a prospect one link. They see sample designs for their website split into sections, mix and match (A / B / C per section), pick colours and fonts, change wording, tick extras, and send their picks to you.

Plain HTML, CSS and JavaScript. No build step.

## Files

```
index.html              Internal list of clients (not linked anywhere public)
picker.html             The picker page clients use
_redirects              Short links: /p/<client> opens the picker
netlify.toml            Netlify settings (no build, publish the root folder)
css/picker.css          Picker look (panel, buttons, screens)
css/sections.css        Sample website look (all section layouts)
js/settings.js          Your name, email, phone, website (shown to clients)
js/defaults.js          Section list, font pairings, fallback colour themes
js/addons.js            The "Extras" checklist: edit this to add/remove extras
js/sections.js          The three layouts (A, B, C) for each section
js/picker.js            How the picker works
clients/<name>/config.js  One folder per client
clients/_template/      Copy this to start a new client
```

## Add a new client

1. Copy `clients/_template` to `clients/<name>`. Use lowercase letters, numbers and dashes only, e.g. `clients/smith-plumbing`.
2. Open `clients/<name>/config.js` and fill in the business name, industry (`trades`, `medical` or `retail`), contact details, colour themes and wording for each section.
3. Images: put photos in the client's folder and use `"/clients/<name>/photo.jpg"`, or leave the drawn placeholders (`"ph:room:Kitchen"`).
4. Commit and push to GitHub. Netlify updates the site in about a minute.
5. Send the client: `https://YOUR-SITE/p/<name>`
   (the long form `https://YOUR-SITE/picker.html?client=<name>` also works).

Each design uses its own layout: design 1 = layout A, design 2 = B, design 3 = C. Any section's wording can be changed per design inside `designs: [...]`. The three demo clients (`tidewater`, `northshore`, `harbour-pine`) are good examples to copy from.

To hide extras that don't fit a client, add `addonsHide: ["online-store", "blog"]` to their config. Extras that suit the client's industry get a "Great for ..." badge automatically.

## Deploy on Netlify

1. Netlify → Add new site → Import an existing project → GitHub → pick this repo.
2. Build command: leave empty. Publish directory: `.` (the root). Netlify reads this from `netlify.toml` anyway.
3. Deploy. Optionally add a custom domain under Domain management.

## Where submissions go

Netlify → your site → **Forms** → **site-picks**. Each submission has the client's name, business, email, phone, notes, and readable fields for sections, style, text changes and extras, plus `picks_json` with everything in one block.

To get an email for every submission: Netlify → Site configuration → Notifications → Emails and webhooks → Form submission notifications → Add notification → Email, form `site-picks`.

Note: form detection needs to be on (Netlify → Forms → Enable form detection) the first time, then redeploy once.

## Good to know

- Progress saves in the client's browser, so they can close the page and come back on the same phone.
- The whole site sends a `noindex` header so client pages don't show up in Google.
- Change your contact details in `js/settings.js`.
