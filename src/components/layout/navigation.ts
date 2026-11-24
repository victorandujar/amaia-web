import type { Locale } from "../../i18n/locales";
import { manifestoPath, pagePath, type PageKey } from "../../i18n/routes";
import { ui } from "../../i18n/ui";

export interface NavItem {
  key: PageKey | "manifesto";
  label: string;
  href: string;
}

/** Main navigation, shared by the desktop header and the mobile menu. */
export function primaryNavItems(locale: Locale): NavItem[] {
  const { nav } = ui[locale];
  return [
    { key: "studio", label: nav.studio, href: pagePath("studio", locale) },
    { key: "rituals", label: nav.rituals, href: pagePath("rituals", locale) },
    { key: "manifesto", label: nav.manifesto, href: manifestoPath(locale) },
    { key: "about", label: nav.about, href: pagePath("about", locale) },
  ];
}

export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}
