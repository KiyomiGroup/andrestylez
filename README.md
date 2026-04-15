# ANDRESTYLEZ — Website

## Project Structure

```
andrestylez/
├── index.html              ← Main page
├── assets/
│   ├── css/
│   │   └── style.css       ← All styles
│   ├── js/
│   │   └── main.js         ← All scripts (cursor, animations, nav)
│   └── images/
│       └── IMG_0084.jpeg   ← Artist photo (add this file!)
└── README.md
```

## ⚠️ Before Deploying

**Add your image:** Copy your artist photo into `assets/images/` and name it `IMG_0084.jpeg`.  
It is referenced in 3 places in `index.html` (hero, about section ×2).

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `andrestylez`)
2. Push all these files to the `main` branch
3. Go to **Settings → Pages**
4. Under **Source**, select `Deploy from a branch` → `main` → `/ (root)`
5. Click **Save** — your site will be live at:
   `https://YOUR-USERNAME.github.io/andrestylez/`

## Updating Content

| What to change | Where |
|---|---|
| Colors, fonts, layout | `assets/css/style.css` |
| Cursor, menu, scroll effects | `assets/js/main.js` |
| Text, sections, links | `index.html` |
| Artist photo | `assets/images/` |
