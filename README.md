# Aziz Moualhi — Portfolio

A single-page portfolio site (plain HTML/CSS/JS, no build step) with a custom
green cutting-mat background, gold accents, and a hand-drawn illustrated
avatar. Sections: Hero, About, Projects, Internships, Certificates, Contact.

Because there's no build step (no npm, no Parcel), you can edit and deploy this
entirely in the browser — nothing to install locally.

## File structure

```
index.html      → all page content (edit text here)
style.css       → colors, fonts, spacing, layout
script.js       → scroll animations, mobile menu, avatar hover-wink, typewriter effect
assets/
  ├─ cutting-mat-bg.avif       → site background
  ├─ about-hero.png            → logo / hero illustration (default face)
  ├─ avatar-wink.png           → hero illustration, winking frame (on hover)
  ├─ resume.pdf                → CV, linked from nav bar
  ├─ project-*.jpg             → project screenshots (2 per project where applicable)
  ├─ internship-lrt.jpg        → internship photo
  ├─ reports/                  → academic report PDFs, linked from each project
  └─ certificates/             → certificate PDFs (CSWA, recommendation letters, etc.)
```

## Live site

Deployed on **Vercel**, auto-redeploying on every push to `main`:
`https://YOUR-VERCEL-URL.vercel.app`

## Editing workflow

1. Open the repo in **GitHub Codespaces** (Code → Codespaces → Create/open
   codespace) for a full browser-based VS Code, zero local install.
2. Edit `index.html` / `style.css` directly.
3. **To preview changes live:** the built-in Live Preview extension doesn't
   work reliably in Codespaces (gets blocked by the port-forwarding proxy).
   Instead, open a terminal and run:
   ```
   python3 -m http.server 8080
   ```
   Then open port `8080` from the **Ports** tab in a full browser tab (not
   the embedded panel). Refresh that tab after each save.
4. When happy with a change: **Source Control** icon → write a commit
   message → **Commit** → **Sync Changes** (pushes to GitHub). Vercel picks
   it up and redeploys automatically within about a minute.

## Theme

Colors and fonts are controlled from the top of `style.css`:

```css
:root {
  --main-color: #f0dd5f;
  --secondary-color: #ffc700;
  --title-color: #f0dd5f;
  --bg-color: #2c5b58;
  --text-muted: #f3f2ef;
  ...
}
```

Fonts: **Playfair Display** (italic serif — headings, hero title) and
**Baloo 2** (bold rounded — role lines, subtitles), loaded via Google Fonts
in `index.html`. Body text uses **Inter**.

The hero avatar swaps to `avatar-wink.png` and tilts slightly on hover
(`.hero__avatar:hover`), and the "Hey, I'm Aziz!" title types itself out on
page load via `script.js`.

## Adding a new certificate

1. Add the PDF/image to `assets/certificates/`.
2. In `index.html`, find `<section id="certificates">` and duplicate a
   `.certificate-card` block, updating the title, issuer/year, and the
   `href`.

## Adding a new project

Each project is a `.row` block inside `<section id="projects">` with a text
column (`.project-wrapper__text`) and an image column
(`.project-wrapper__image`, supports 1 or 2 stacked images). Duplicate an
existing project block as a starting point, then update the text, image
`src` paths, and the GitHub repo / academic report links.

## Remaining placeholders to fill in

Search `index.html` for:

- `YOUR-LINKEDIN-HANDLE` (About section + Contact + Footer)
- Any remaining `href="#!"` (a couple of project reports/demos not yet linked)

## Related

The LaTeX source for the matching resume (kept intentionally brief, since
full project detail lives on this site) is in a separate file, `main.tex` —
compiled via [Overleaf](https://overleaf.com).