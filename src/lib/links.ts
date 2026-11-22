/**
 * Destinations the design leaves open. They keep the design's placeholder anchors
 * until the real addresses (email, booking tool, profiles, legal pages) are decided.
 * Update them here only: every page reads from this module.
 */
export const links = {
  contact: "#contacto",
  firstListening: "#primera-escucha",
  instagram: "#instagram",
  substack: "#substack",
  legal: "#legal",
  privacy: "#privacidad",
  fieldNotes: "#field-notes",
  manifesto: "#manifiesto",
  professionalPath: "https://www.mariamayangel.com/en/about",
  theFieldConversation: "https://substack.com/@mariamayangel/p-208656939",
} as const;
