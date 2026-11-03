# SouvikOS — Souvik Ghosh

[Public website](https://souvikrs.github.io/) · [Author and bookshelf](https://souvikrs.github.io/author/)

This static Astro website brings together Souvik’s work in research, invention, writing, business and spiritual mentorship. The homepage links to seven shareable profiles and one external destination: the AI developer card goes straight to [VV Automate](https://vvautomate.in/).

## Run locally

Use Node.js 22.12 or later and npm. From the project root:

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. To check the production build, run `npm run build`, then `npm run preview`.

## Publish

Push changes to the `main` branch of `souvikrs/souvikrs.github.io`. The workflow in `.github/workflows/pages.yml` builds the site and deploys only `dist/` to GitHub Pages. In repository Settings → Pages, the source is **GitHub Actions**. Check the workflow’s deploy job before treating an update as live.

For Netlify, Vercel or Cloudflare Pages, import the repo as a static Astro project. Use `npm run build` and publish `dist` at the domain root. Set the public URL in `astro.config.mjs` when changing domains. No database, server adapter, environment variables or API keys are needed.

## Edit the site

- **Shareable profiles:** `/quantum-physicist/`, `/inventor/`, `/author/`, `/business/`, `/wellness-rd/`, `/spiritual-mentor/`, `/speaker/`. Edit their pages under `src/pages/` and their index cards in `src/data/profiles.ts`. Old Science, Writing, Work and Apps links redirect automatically.
- **Published books:** edit `src/data/published-books.json`. Use the Kindle ASIN for the Amazon India purchase link. Put the corresponding 720px-high cover in `public/images/books/<ASIN>.webp` and record its pixel width. The author page displays originals first and translations second; the credit line distinguishes authors, editors and translators. The six launch records and covers come from the corresponding Amazon Kindle listings.
- **Manuscripts and research:** update `src/data/books.json` for works in progress, `src/data/papers.json` for papers, and `public/Souvik-Ghosh-CV.pdf` for the downloadable CV.
- **Reader destinations:** the Author page routes poems to Facebook and articles to the personal Substack. SouvikOS Letters is a separate newsletter and has not opened for signup.
- **Visuals:** palette and typography tokens live in `src/global.css`; self-hosted Google Fonts and their licenses are in `public/fonts/`. Portraits and field photographs are in `public/images/` with descriptions and dimensions in `src/photos.json`. Sources include Souvik’s supplied portrait, his selected photo folder and [his Vishwa Vigyan profile](https://vishwavigyan.com/souvik.html).

[Editorial items to revisit](CONTENT.md)
