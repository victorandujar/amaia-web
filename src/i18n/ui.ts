import type { Localized } from "./locales";

interface UiStrings {
  homeLinkLabel: string;
  logoAlt: string;
  primaryNavLabel: string;
  footerNavLabel: string;
  nav: { studio: string; rituals: string; manifesto: string; about: string };
  writeToMe: string;
  languageSwitch: { text: string; label: string };
  scrollHint: string;
  next: string;
  tagline: string;
  footerLinks: {
    email: string;
    instagram: string;
    substack: string;
    legal: string;
    privacy: string;
  };
}

export const ui: Localized<UiStrings> = {
  es: {
    homeLinkLabel: "amaïa, inicio",
    logoAlt: "Amaïa",
    primaryNavLabel: "Principal",
    footerNavLabel: "Pie",
    nav: {
      studio: "studio",
      rituals: "rituals",
      manifesto: "manifiesto",
      about: "sobre mí",
    },
    writeToMe: "Escríbeme",
    languageSwitch: { text: "en", label: "English version" },
    scrollHint: "desliza ↓",
    next: "siguiente",
    tagline: "La vida con rituales es más sabrosa.",
    footerLinks: {
      email: "email",
      instagram: "instagram",
      substack: "substack",
      legal: "aviso legal",
      privacy: "privacidad",
    },
  },
  en: {
    homeLinkLabel: "amaïa, home",
    logoAlt: "Amaïa",
    primaryNavLabel: "Main",
    footerNavLabel: "Footer",
    nav: {
      studio: "studio",
      rituals: "rituals",
      manifesto: "manifesto",
      about: "about",
    },
    writeToMe: "Write to me",
    languageSwitch: { text: "es", label: "Versión en español" },
    scrollHint: "scroll ↓",
    next: "next",
    tagline: "Life tastes better with rituals.",
    footerLinks: {
      email: "email",
      instagram: "instagram",
      substack: "substack",
      legal: "legal notice",
      privacy: "privacy",
    },
  },
};
