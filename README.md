# amaia-web

Website for Amaïa, built with Astro, TypeScript and Tailwind CSS from the "Amaïa · home" design canvas.

```sh
npm install
npm run dev
```

Engineering standards, commands and the Git workflow are in [`AGENTS.md`](./AGENTS.md). They are mandatory.

## Pages

| Page     | Spanish      | English        |
| -------- | ------------ | -------------- |
| Home     | `/`          | `/en/`         |
| Studio   | `/studio/`   | `/en/studio/`  |
| Rituals  | `/rituals/`  | `/en/rituals/` |
| Sobre mí | `/sobre-mi/` | `/en/about/`   |

The manifesto has no page yet: the navigation points to the philosophy section of the home page.

## Pending content

- Destinations for contact, first listening, legal notice and privacy:
  `src/lib/links.ts` still holds the design's placeholder anchors.
- Final domain, to add canonical URLs, `hreflang` alternates and a sitemap.
