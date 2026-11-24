import type { APIRoute } from "astro";
import { locales } from "../i18n/locales";
import { pageKeys, pagePath } from "../i18n/routes";

/**
 * Every page in every language, each one listing its language versions (hreflang),
 * so search engines index the right page for each language.
 */
export const GET: APIRoute = ({ site }) => {
  if (!site)
    throw new Error(
      "`site` must be set in astro.config.mjs to build the sitemap.",
    );
  const absolute = (path: string): string => new URL(path, site).href;
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = pageKeys.flatMap((page) =>
    locales.map((locale) => {
      const alternates = [
        ...locales.map(
          (code) =>
            `<xhtml:link rel="alternate" hreflang="${code}" href="${absolute(pagePath(page, code))}"/>`,
        ),
        `<xhtml:link rel="alternate" hreflang="x-default" href="${absolute(pagePath(page, "es"))}"/>`,
      ].join("");
      return `<url><loc>${absolute(pagePath(page, locale))}</loc><lastmod>${lastmod}</lastmod>${alternates}</url>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
