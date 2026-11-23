/**
 * Every destination outside the page structure. Those still open in the design (email,
 * booking tool, legal pages) keep its placeholder anchors until the real addresses are decided.
 * Update them here only: every page reads from this module.
 */
export const links = {
  contact: "#contacto",
  firstListening: "#primera-escucha",
  instagram: "https://www.instagram.com/amaiarituals/",
  substack: "https://mariamayangel.substack.com/",
  legal: "#legal",
  privacy: "#privacidad",
  manifesto: "#manifiesto",
  professionalPath: "https://www.mariamayangel.com/en/about",
  theFieldConversation: "https://substack.com/@mariamayangel/p-208656939",
} as const;
