import type { Localized } from "../../i18n/locales";
import type { RichText } from "../../lib/rich-text";

interface Chapter {
  label: string;
  title: string;
  paragraphs: readonly string[];
  highlight: string;
  link: string;
  imageAlt: string;
}

interface AboutContent {
  meta: { title: string; description: string };
  hero: {
    title: string;
    startWord: string;
    endWord: string;
    portraitAlt: string;
    caption: string;
  };
  selfPortrait: {
    statement: RichText;
    intro: string;
    paragraphs: readonly string[];
  };
  craft: Chapter;
  symbolicLife: Chapter;
  multiplicity: {
    label: string;
    title: string;
    paragraphs: readonly string[];
    studioLink: string;
    ritualsLink: string;
  };
  encounter: RichText;
  closing: { quote: RichText; title: string; cta: string; next: string };
}

export const aboutContent: Localized<AboutContent> = {
  es: {
    meta: {
      title: "Sobre mí · María Alejandra Amaya, mística creativa · Amaïa",
      description:
        "Soy María Alejandra Amaya, colombiana, viviendo en Catalunya. Diseñadora de formación, investigadora de oficio y curiosa por naturaleza.",
    },
    hero: {
      title: "Mística creativa.",
      startWord: "Mística",
      endWord: "creativa.",
      portraitAlt:
        "Retrato en blanco y negro de María Alejandra Amaya con la mano extendida hacia la cámara, cubriéndole un ojo",
      caption: "María Alejandra Amaya",
    },
    selfPortrait: {
      statement: [
        "Diseñadora de formación, investigadora de oficio y ",
        { br: true },
        "curiosa por naturaleza.",
      ],
      intro: "Soy María Alejandra Amaya, colombiana, viviendo en Catalunya.",
      paragraphs: [
        "Me apasiona el misterio de la existencia, la vida simbólica y las formas que puede adquirir lo sensible. Desde hace años investigo las relaciones entre lo que percibimos y lo que creamos, entre aquello que todavía no podemos nombrar y las expresiones que encontramos para compartirlo.",
        "Me reconozco como una mística creativa porque mi manera de relacionarme con lo divino está profundamente entrelazada con mi manera de crear.",
      ],
    },
    craft: {
      label: "el oficio",
      title: "Sobre mi fascinación por lo intangible.",
      highlight:
        "Mucho antes de llamarme así, ya entendía el diseño como un viaje entre lo etéreo y lo concreto.",
      paragraphs: [
        "Durante mi trayectoria como diseñadora, investigadora cultural y estratega creativa, me he dedicado a comprender cómo las personas experimentan el mundo, qué patrones aparecen en sus comportamientos y qué significados construimos colectivamente.",
        "Me entusiasma dar estructura y orden, reconocer qué conecta ideas que parecen dispersas y buscar el lenguaje que permite articularlas.",
        "En ese movimiento entre la investigación y la creación he encontrado mi oficio. Hoy lo pongo al servicio de personas que desean traer sus propias visiones a la materia.",
      ],
      link: "Explorar mi trayectoria profesional ↗",
      imageAlt:
        "María Alejandra en una mesa al aire libre, con su cuaderno abierto, dos piedras apiladas, libros y una tableta",
    },
    symbolicLife: {
      label: "la vida simbólica",
      title: "Conversar con el misterio.",
      paragraphs: [
        "Mi relación con la divinidad ha encontrado distintos lenguajes a lo largo de mi vida: la naturaleza, la escritura, los símbolos, el cuerpo, la voz, las plantas y la creación.",
        "Me interesa la escucha como una práctica de descubrimiento: atender a lo que acontece y dejarme sorprender por la vida.",
        "Hoy esa relación pasa por el cacao, el loto azul, la canalización y la exploración vocal, y sigue cambiando conmigo.",
      ],
      highlight:
        "Estar viva es, para mí, algo sagrado, y el ritual es mi forma de devoción.",
      link: "Una conversación sobre mi camino como mujer-canal — The Field ↗",
      imageAlt:
        "María Alejandra descalza sobre una roca en el bosque, tocando la piedra con la mano",
    },
    multiplicity: {
      label: "una investigación viva",
      title: "Un lugar para todas mis pasiones.",
      paragraphs: [
        "Amaïa nace del deseo de que mis inquietudes profesionales, artísticas y espirituales puedan conversar.",
        "Es el espacio donde acompaño otras obras y comparto las preguntas que atraviesan mi propio proceso.",
        "Studio recoge mi oficio de investigar, traducir y materializar. Rituals expresa mi vínculo con la dimensión sensible, energética y sagrada de la vida.",
        "Amaïa es una investigación viva. También es un modo de vivir creativamente, de seguir descubriéndome y de hacer espacio para lo que aún desconozco.",
      ],
      studioLink: "Explorar Studio ↗",
      ritualsLink: "Explorar Rituals ↗",
    },
    encounter: [
      "La riqueza de mi ser está en la nutrición de mi ",
      { em: "multiplicidad." },
    ],
    closing: {
      quote: ["Every creative act is a ", { em: "source of energy." }],
      title: "Me encantará conocer tu universo.",
      cta: "Escríbeme",
      next: "Studio",
    },
  },
  en: {
    meta: {
      title: "About me · María Alejandra Amaya, creative mystic · Amaïa",
      description:
        "I am María Alejandra Amaya, Colombian, living in Catalonia. A designer by training, a researcher by craft and curious by nature.",
    },
    hero: {
      title: "Creative mystic.",
      startWord: "Creative",
      endWord: "mystic.",
      portraitAlt:
        "Black-and-white portrait of María Alejandra Amaya reaching her hand towards the camera, covering one eye",
      caption: "María Alejandra Amaya",
    },
    selfPortrait: {
      statement: [
        "A designer by training, a researcher by craft and ",
        { br: true },
        "curious by nature.",
      ],
      intro: "I am María Alejandra Amaya, Colombian, living in Catalonia.",
      paragraphs: [
        "I am passionate about the mystery of existence, symbolic life and the forms the sensible can take. For years I have researched the relationships between what we perceive and what we create, between what we cannot yet name and the expressions we find to share it.",
        "I see myself as a creative mystic because my way of relating to the divine is deeply intertwined with my way of creating.",
      ],
    },
    craft: {
      label: "the craft",
      title: "On my fascination with the intangible.",
      highlight:
        "Long before I called it that, I already understood design as a journey between the ethereal and the concrete.",
      paragraphs: [
        "Throughout my career as a designer, cultural researcher and creative strategist, I have devoted myself to understanding how people experience the world, what patterns appear in their behaviour and what meanings we build collectively.",
        "I love giving structure and order, recognising what connects ideas that seem scattered and searching for the language that lets us articulate them.",
        "In that movement between research and creation I have found my craft. Today I put it at the service of people who wish to bring their own visions into matter.",
      ],
      link: "Explore my professional path ↗",
      imageAlt:
        "María Alejandra at an outdoor table, with her notebook open, two stacked stones, books and a tablet",
    },
    symbolicLife: {
      label: "symbolic life",
      title: "Conversing with mystery.",
      paragraphs: [
        "My relationship with the divine has found different languages throughout my life: nature, writing, symbols, the body, the voice, plants and creation.",
        "I am drawn to listening as a practice of discovery: attending to what happens and letting life surprise me.",
        "Today that relationship moves through cacao, blue lotus, channelling and vocal exploration, and it keeps changing with me.",
      ],
      highlight:
        "Being alive is, to me, something sacred, and ritual is my form of devotion.",
      link: "A conversation about my path as a channel — The Field ↗",
      imageAlt:
        "María Alejandra barefoot on a rock in the forest, touching the stone with her hand",
    },
    multiplicity: {
      label: "a living inquiry",
      title: "A place for all my passions.",
      paragraphs: [
        "Amaïa is born from the wish that my professional, artistic and spiritual concerns could be in conversation.",
        "It is the space where I accompany other works and share the questions that run through my own process.",
        "Studio gathers my craft of researching, translating and materialising. Rituals expresses my bond with the sensitive, energetic and sacred dimension of life.",
        "Amaïa is a living inquiry. It is also a way of living creatively, of continuing to discover myself and of making room for what I do not yet know.",
      ],
      studioLink: "Explore Studio ↗",
      ritualsLink: "Explore Rituals ↗",
    },
    encounter: [
      "The richness of my being lies in nourishing my ",
      { em: "multiplicity." },
    ],
    closing: {
      quote: ["Every creative act is a ", { em: "source of energy." }],
      title: "I would love to get to know your universe.",
      cta: "Write to me",
      next: "Studio",
    },
  },
};
