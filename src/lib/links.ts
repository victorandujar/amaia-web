import type { Locale } from "../i18n/locales";
import { ui } from "../i18n/ui";

/**
 * Every destination outside the page structure. Those still open in the design (legal pages)
 * keep its placeholder anchors until the real addresses are decided.
 * Update them here only: every page reads from this module.
 */
export const links = {
  instagram: "https://www.instagram.com/amaiarituals/",
  substack: "https://mariamayangel.substack.com/",
  legal: "#legal",
  privacy: "#privacidad",
  professionalPath: "https://www.mariamayangel.com/en/about",
  theFieldConversation: "https://substack.com/@mariamayangel/p-208656939",
} as const;

/** WhatsApp number, also published as the contact point in structured data. */
export const contactPhone = "+34644197363";
const whatsappNumber = contactPhone.slice(1);

/** Contact goes through WhatsApp, with a message prefilled in the page's language. */
export function whatsappLink(
  locale: Locale,
  intent: "contact" | "firstListening",
): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(ui[locale].whatsapp[intent])}`;
}
