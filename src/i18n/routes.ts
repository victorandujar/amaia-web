import type { Locale } from "./locales";

export type PageKey = "home" | "studio" | "rituals" | "manifesto" | "about";

const pagePaths: Record<PageKey, Record<Locale, string>> = {
  home: { es: "/", en: "/en/" },
  studio: { es: "/studio/", en: "/en/studio/" },
  rituals: { es: "/rituals/", en: "/en/rituals/" },
  manifesto: { es: "/manifiesto/", en: "/en/manifesto/" },
  about: { es: "/sobre-mi/", en: "/en/about/" },
};

/** Every page, in the site's reading order. */
export const pageKeys: readonly PageKey[] = [
  "home",
  "studio",
  "rituals",
  "manifesto",
  "about",
];

export function pagePath(page: PageKey, locale: Locale): string {
  return pagePaths[page][locale];
}
