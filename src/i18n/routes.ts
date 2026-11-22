import type { Locale } from "./locales";

export type PageKey = "home" | "studio" | "rituals" | "about";

const pagePaths: Record<PageKey, Record<Locale, string>> = {
  home: { es: "/", en: "/en/" },
  studio: { es: "/studio/", en: "/en/studio/" },
  rituals: { es: "/rituals/", en: "/en/rituals/" },
  about: { es: "/sobre-mi/", en: "/en/about/" },
};

export function pagePath(page: PageKey, locale: Locale): string {
  return pagePaths[page][locale];
}

/** The manifesto has no page yet: the navigation points to its section on the home page. */
export function manifestoPath(locale: Locale): string {
  return `${pagePath("home", locale)}#filosofia`;
}
