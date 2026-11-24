// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Canonical origin: absolute URLs for canonical links, hreflang, the sitemap and social previews.
  site: "https://www.amaiastudio.com",
  trailingSlash: "always",
  build: {
    // The stylesheet is small: inlining it removes a render-blocking request before the first paint.
    inlineStylesheets: "always",
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
