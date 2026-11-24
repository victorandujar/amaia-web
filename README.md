# amaia-web

Website for Amaïa, built with Astro, TypeScript and Tailwind CSS from the "Amaïa · home" design canvas.

```sh
npm install
npm run dev
```

Engineering standards, commands and the Git workflow are in [`AGENTS.md`](./AGENTS.md). They are mandatory.

## Pages

| Page       | Spanish        | English          |
| ---------- | -------------- | ---------------- |
| Home       | `/`            | `/en/`           |
| Studio     | `/studio/`     | `/en/studio/`    |
| Rituals    | `/rituals/`    | `/en/rituals/`   |
| Manifiesto | `/manifiesto/` | `/en/manifesto/` |
| Sobre mí   | `/sobre-mi/`   | `/en/about/`     |

## SEO

- Canonical origin: `site` in `astro.config.mjs` (`https://www.amaiastudio.com`).
- Every page: canonical URL, `hreflang` (es, en, x-default), Open Graph and Twitter cards with a 1200×630 image,
  and a JSON-LD graph (organization, founder, website, page, breadcrumb; services on Studio and Rituals),
  built by `src/components/seo/SeoHead.astro` and `src/lib/structured-data.ts`.
- `/sitemap.xml` (with language alternates) and `/robots.txt` are generated at build time.
- Titles and descriptions live in each page's `<page>.content.ts` (`meta`) and are composed from the existing copy.

## Pending content

- Destinations for the legal notice and privacy pages: `src/lib/links.ts` still holds the design's placeholder anchors.
