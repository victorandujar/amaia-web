import type { Localized } from "./locales";
import type { PageKey } from "./routes";

interface SeoStrings {
  /** Open Graph locale code. */
  ogLocale: string;
  /** Breadcrumb names of each page. */
  breadcrumb: Record<PageKey, string>;
  /** Built from the copy: "Soy diseñadora e investigadora cultural." */
  personJobTitle: string;
  /** Built from the copy: "colombiana, viviendo en Catalunya". */
  personHome: string;
  /** The home hero's sentence, describing the brand. */
  organizationDescription: string;
}

export const seo: Localized<SeoStrings> = {
  es: {
    ogLocale: "es_ES",
    breadcrumb: {
      home: "Inicio",
      studio: "Amaïa Studio",
      rituals: "Amaïa Rituals",
      manifesto: "Manifiesto",
      about: "Sobre mí",
    },
    personJobTitle: "Diseñadora e investigadora cultural",
    personHome: "Catalunya",
    organizationDescription:
      "Amaïa acompaña la gestación creativa: el tiempo en que algo que intuyes se convierte en algo que existe.",
  },
  en: {
    ogLocale: "en_US",
    breadcrumb: {
      home: "Home",
      studio: "Amaïa Studio",
      rituals: "Amaïa Rituals",
      manifesto: "Manifesto",
      about: "About me",
    },
    personJobTitle: "Designer and cultural researcher",
    personHome: "Catalonia",
    organizationDescription:
      "Amaïa accompanies creative gestation: the time in which something you sense becomes something that exists.",
  },
};
