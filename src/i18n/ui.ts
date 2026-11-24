import type { Localized } from "./locales";

interface UiStrings {
  homeLinkLabel: string;
  logoAlt: string;
  primaryNavLabel: string;
  footerNavLabel: string;
  nav: { studio: string; rituals: string; manifesto: string; about: string };
  writeToMe: string;
  languageSwitch: { text: string; label: string; group: string };
  /** Mobile menu button labels. */
  menu: { open: string; close: string };
  scrollHint: string;
  next: string;
  tagline: string;
  /** Messages prefilled in WhatsApp by each contact button. */
  whatsapp: { contact: string; firstListening: string };
  footerLinks: {
    whatsapp: string;
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
    languageSwitch: { text: "en", label: "English version", group: "Idioma" },
    menu: { open: "Abrir menú", close: "Cerrar menú" },
    scrollHint: "desliza ↓",
    next: "siguiente",
    tagline: "La vida con rituales es más sabrosa.",
    whatsapp: {
      contact: "Hola Male, te escribo desde la web de Amaïa.",
      firstListening: "Hola Male, me gustaría agendar una primera escucha.",
    },
    footerLinks: {
      whatsapp: "whatsapp",
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
    languageSwitch: {
      text: "es",
      label: "Versión en español",
      group: "Language",
    },
    menu: { open: "Open menu", close: "Close menu" },
    scrollHint: "scroll ↓",
    next: "next",
    tagline: "Life tastes better with rituals.",
    whatsapp: {
      contact: "Hi Male, I’m writing to you from the Amaïa website.",
      firstListening: "Hi Male, I’d like to book a first listening.",
    },
    footerLinks: {
      whatsapp: "whatsapp",
      instagram: "instagram",
      substack: "substack",
      legal: "legal notice",
      privacy: "privacy",
    },
  },
};
