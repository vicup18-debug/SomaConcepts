# Soma Concepts website

The company website for Soma Concepts, built with [Astro](https://astro.build) as a static site. It follows the Soma Concepts brand system: Saira for headings, Inter for body text, the navy/blue/silver palette, the 45° cut and the cyan node.

## Pages

| Page | File |
| --- | --- |
| Home | `src/pages/index.astro` |
| Services | `src/pages/services.astro` |
| Work (Airgo case study) | `src/pages/work.astro` |
| About (team, products, Tech Talk) | `src/pages/about.astro` |
| Contact | `src/pages/contact.astro` |
| 404 | `src/pages/404.astro` |

## Where to change things

- **Phone, email, socials, client count, services, process and testimonials:** `src/data/site.ts`. Every page reads from this file, so change a fact once there.
- **Live domain:** `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt`.
- **Colours, fonts and spacing:** `src/styles/global.css`.
- **Logo files:** `public/brand/`. Use the official files only; don't redraw or retype the logo.
- **Team photos and product logos:** `src/assets/`. Astro resizes and compresses them at build time, so full-size originals are fine.

## Run it locally

Needs Node 18.20 or later.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the static site to dist/
npm run preview  # serves dist/ locally
```

## Deploy on Vercel

1. In Vercel, choose **Add New → Project** and import this repository.
2. Vercel detects Astro automatically. Keep the defaults: build command `npm run build`, output directory `dist`.
3. Deploy, then add the domain under **Settings → Domains**.

## Contact form

The contact form has no server. It opens WhatsApp, or the visitor's email app, with their brief filled in and ready to send.
