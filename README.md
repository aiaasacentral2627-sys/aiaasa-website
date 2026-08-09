# AIAASA Website

Pages: `index.html` (home + registration), `gallery.html`, `testimonials.html`.

## Connect the Google Sheet
1. Create a Google Sheet (any name).
2. Extensions → Apps Script → paste in the contents of `apps-script.gs`.
3. Deploy → New deployment → Web app → Execute as *you*, Access: *Anyone* → Deploy.
4. Copy the URL ending in `/exec`.
5. Paste it into `config.js`, replacing `PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE`.

Two tabs — "Members" and "Testimonials" — are created automatically the first time each form is submitted.

## Add gallery photos
Drop image files into `assets/gallery/` and list them in `assets/gallery/manifest.json`:
```json
[
  { "file": "conference-2026.jpg", "caption": "Central Conference 2026" },
  { "file": "zonal-camp-a.jpg", "caption": "Zonal Camp — Zone A" }
]
```

## Publish on GitHub Pages
1. Create a new GitHub repo and upload everything in this folder.
2. Repo → Settings → Pages → Source: `Deploy from a branch` → Branch: `main`, folder `/ (root)` → Save.
3. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.
