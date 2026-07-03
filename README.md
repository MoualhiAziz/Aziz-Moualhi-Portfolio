# Aziz Moualhi — Portfolio

A single-page portfolio site (plain HTML/CSS/JS, no build step) styled after the
[Simplefolio](https://github.com/cobiwave/simplefolio) template, with two sections
added beyond the original template: **Internships** and **Certificates**.

Because there's no build step (no npm, no Parcel), you can edit and deploy this
entirely in the browser — nothing to install locally.

## File structure

```
index.html      → all page content (edit text here)
style.css       → colors, spacing, layout
script.js       → scroll animations, mobile menu
assets/         → your images + resume PDF go here
```

## 1. Put this on GitHub

1. Create a new repository on GitHub, e.g. `aziz-portfolio`.
2. Upload these files (drag-and-drop works on github.com, or use the
   "Add file → Upload files" button) — or open the repo in
   **GitHub Codespaces** (Code → Codespaces → Create codespace) if you want a
   full browser-based VS Code editor with zero local install.

## 2. Add your assets

Inside `assets/`, add:

- `profile.jpg` — your photo
- `resume.pdf` — your CV (linked from the nav bar and About section)
- `favicon.png` — small site icon (optional, or remove that `<link>` tag)
- `project-solarguard.jpg`, `project-defect.jpg`, `project-rul.jpg`, `project-hawt.jpg`
  — screenshots/renders for each project (recommended size ~1366×767)
- Certificate images or PDFs, once you have them — see step 4.

Then update the placeholder `href="#!"` links in `index.html` to point to your
actual demo links, GitHub repos, and Google Drive folder.

## 3. Turn on GitHub Pages (this gives you the "always open" link)

1. In your repo: **Settings → Pages**.
2. Under "Build and deployment", set **Source: Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)` → **Save**.
4. After ~1 minute, your site is live at:
   `https://YOUR-GITHUB-USERNAME.github.io/aziz-portfolio/`
5. Put that URL on your resume/CV and LinkedIn.

Every time you push a change, the live site updates automatically within a
minute or two — no redeploy step needed.

## 4. Add certificates

The Certificates section currently has 3 placeholder cards. For each real
certificate:

1. Add the certificate file (PDF or image) to `assets/certificates/`.
2. In `index.html`, find `<section id="certificates">` and duplicate one
   `.certificate-card` block per certificate, updating the title, issuer,
   year, and the `href` to point to your file (or an external credential
   URL, e.g. Coursera/LinkedIn Learning verification link).

## 5. Fill in the placeholders

Search `index.html` for these and replace them:

- `YOUR-LINKEDIN-HANDLE` (appears twice: About + Footer)
- `YOUR-GITHUB-USERNAME` (Footer)
- All `href="#!"` links (project demos, source code, internship report)

## 6. Make it your own style

Once the content is right, restyle it by editing the two variables at the
top of `style.css`:

```css
--main-color: #02aab0;
--secondary-color: #00cdac;
```

Everything else (fonts, spacing, card style, dark background) can be tweaked
from there — same idea as Simplefolio's `_variables.scss`, just without a
Sass build step.

## Editing without installing anything

- **Quick text edits:** click the pencil icon on any file directly on
  github.com.
- **Bigger changes / live preview:** open the repo in **GitHub Codespaces**
  (free tier included with GitHub accounts) — it gives you a full VS Code in
  the browser. Right-click `index.html` → "Open with Live Server" (or just
  use the Codespaces port preview) to see changes instantly, all in the
  browser, nothing installed on your computer.
