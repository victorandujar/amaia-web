import type { Locale, Localized } from "../../i18n/locales";
import type { RichText } from "../../lib/rich-text";

interface Placeholder {
  label: string;
  tag: string;
  description: string;
}

export interface HouseContent {
  mobileIntro: RichText;
  title: string;
  lead: string;
  subtitle: string;
  body: string;
  forYouLabel: string;
  forYou: string;
  journeyLabel: string;
  journeyName: string;
  journeyTagline: string;
  cta: string;
}

interface HomeContent {
  meta: { title: string; description: string };
  hero: {
    imageAlt: string;
    titleItalic: string;
    titleRest: string;
    lead: string;
    meta: readonly { text: string; lang?: Locale }[];
  };
  gestation: {
    label: string;
    title: string;
    paragraphs: readonly string[];
    voicesIntro: string;
    voices: readonly { tag: string; quote: string }[];
    closing: string;
  };
  bridge: { create: RichText; exist: RichText };
  studio: HouseContent & { imageAlt: string };
  rituals: HouseContent & { imageAlt: string };
  philosophy: {
    label: string;
    title: RichText;
    imageAlts: {
      flowers: string;
      sprouts: string;
      shadow: string;
      moth: string;
    };
    body: string;
    cta: string;
  };
  guide: {
    label: string;
    title: string;
    body: string;
    cta: string;
    portraitAlt: string;
  };
  fieldNotes: {
    title: string;
    intro: string;
    notes: readonly (Placeholder & { number: string; title: string })[];
    cta: string;
  };
  closing: { title: string; body: string; cta: string };
}

export const homeContent: Localized<HomeContent> = {
  es: {
    meta: {
      title: "Amaïa · Inicio",
      description:
        "Amaïa acompaña la gestación creativa: el tiempo en que algo que intuyes se convierte en algo que existe.",
    },
    hero: {
      imageAlt: "Bodegón de tulipanes morados y muguet sobre fondo verde musgo",
      titleItalic: "Del misterio",
      titleRest: "a la materia.",
      lead: "Amaïa acompaña la gestación creativa: el tiempo en que algo que intuyes se convierte en algo que existe.",
      meta: [
        { text: "Applied Mysticism · Creative Listening", lang: "en" },
        { text: "Est. 2025", lang: "en" },
        { text: "desliza ↓" },
      ],
    },
    gestation: {
      label: "gestación creativa",
      title: "Toda obra empieza antes de tener forma.",
      paragraphs: [
        "Primero puede ser una intuición, una imagen, una pregunta que insiste o un deseo que todavía no sabemos nombrar.",
        "Me interesa ese territorio sutil de lo que aún no tiene forma. Ahí trabajo: te acompaño a mirarlo de cerca hasta que encuentra su propia expresión.",
      ],
      voicesIntro: "Tal vez te reconoces en alguna de estas voces.",
      voices: [
        {
          tag: "inquietud",
          quote:
            "«Llevo tiempo sintiendo ganas de hacer algo propio, pero no termino de saber qué es ni por dónde empezar.»",
        },
        {
          tag: "multiplicidad",
          quote:
            "«Me apasionan tantas cosas que me cuesta elegir un solo camino. Siento que ninguna, por sí sola, representa todo lo que soy.»",
        },
        {
          tag: "proyecto en transformación",
          quote:
            "«Mi proyecto está atravesando una transformación y siento que su forma actual ya no lo representa.»",
        },
      ],
      closing: "A veces todo comienza con una pregunta que no nos abandona.",
    },
    bridge: {
      create: ["El misterio de ", { em: "crear." }],
      exist: ["El misterio de ", { em: "existir." }],
    },
    studio: {
      mobileIntro: ["El misterio de ", { em: "crear." }],
      title: "Amaïa Studio",
      lead: "Un espacio de investigación y gestación creativa donde exploro los misterios de la creación y las formas que puede adquirir lo sensible.",
      imageAlt:
        "Un portátil abierto sobre una roca, entre piedras y hojas grandes en un jardín frondoso",
      subtitle: "Para darle forma a tu obra.",
      body: "Te acompaño a investigar qué hace única a tu obra y a convertirlo en decisiones concretas: cómo se nombra, cómo se ve, cómo habla. Puede ser una marca, un libro, un proyecto, un servicio o una práctica.",
      forYouLabel: "para ti si ",
      forYou:
        "tienes una idea, una inquietud o una obra en marcha y quieres saber hacia dónde llevarla.",
      journeyLabel: "el recorrido ",
      journeyName: "The Mystery of Form",
      journeyTagline: "la identidad de tu obra.",
      cta: "Entrar a Studio",
    },
    rituals: {
      mobileIntro: ["El misterio de ", { em: "existir." }],
      title: "Amaïa Rituals",
      lead: "Un espacio de exploración sensible, energética y espiritual donde investigo el misterio de estar vivos y nuestra relación con lo sagrado.",
      imageAlt:
        "Un servicio de té sobre un tronco y una roca, en un rincón en sombra de un jardín frondoso",
      subtitle: "En ceremonia con la vida.",
      body: "A través del ritual, la voz, el cuerpo y el encuentro, exploro distintas maneras de cultivar nuestra sensibilidad, descubrirnos y profundizar nuestra relación con la vida.",
      forYouLabel: "para ti si ",
      forYou:
        "sientes curiosidad por lo invisible, por tu propia naturaleza y por las distintas maneras de experimentar lo sagrado en la vida.",
      journeyLabel: "el acompañamiento ",
      journeyName: "The Ritual of Being",
      journeyTagline: "el descubrimiento de tu voz.",
      cta: "Entrar a Rituals",
    },
    philosophy: {
      label: "filosofía",
      title: ["La ", { em: "vida" }, " es un acto ", { em: "creativo." }],
      imageAlts: {
        flowers: "Flores borrosas tras una transparencia",
        sprouts: "Brotes verdes dispuestos en espiral",
        shadow: "Sombra de hojas sobre una pared",
        moth: "Una polilla sobre la palma de una mano",
      },
      body: "Crear es parte de nuestra naturaleza humana. Una manera de participar en la vida, de relacionarnos con el mundo y de dar forma a nuestra experiencia de estar aquí.",
      cta: "Leer el manifiesto →",
    },
    guide: {
      label: "quién acompaña",
      title: "Soy diseñadora e investigadora cultural.",
      body: "Nueve años investigando cultura y personas para marcas, en agencias y consultoras. Hoy pongo ese oficio al servicio de quien crea.",
      cta: "Sobre mí →",
      portraitAlt: "Retrato de la fundadora de Amaïa con un ramo de flores",
    },
    fieldNotes: {
      title: "Field Notes",
      intro:
        "Notas de campo de mi práctica: lo que voy aprendiendo mientras creo.",
      notes: [
        {
          label: "Espacio para imagen: manos trabajando un material",
          tag: "[imagen · manos]",
          description: "Manos trabajando barro, papel o hilo, muy de cerca.",
          number: "field notes · [nº]",
          title: "Las manos siempre saben",
        },
        {
          label: "Espacio para imagen: archivo, capas de papel",
          tag: "[imagen · archivo]",
          description:
            "Capas de papel, cuadernos o fotos viejas superpuestas: la huella de algo vivido.",
          number: "field notes · [nº]",
          title: "La intuición tiene memoria",
        },
        {
          label: "Espacio para imagen: textura con luz rasante",
          tag: "[imagen · textura]",
          description:
            "Una superficie muy de cerca con luz rasante: tela, cerámica o papel.",
          number: "field notes · 006",
          title: "La sensibilidad se educa",
        },
      ],
      cta: "Leer más → [Instagram o Substack]",
    },
    closing: {
      title: "Hablemos de lo que está tomando forma.",
      body: "Podemos empezar por una sola pregunta: la que te trae hasta aquí.",
      cta: "Agendar una primera escucha",
    },
  },
  en: {
    meta: {
      title: "Amaïa · Home",
      description:
        "Amaïa accompanies creative gestation: the time in which something you sense becomes something that exists.",
    },
    hero: {
      imageAlt:
        "Still life of purple tulips and lily of the valley on a moss-green background",
      titleItalic: "From mystery",
      titleRest: "to matter.",
      lead: "Amaïa accompanies creative gestation: the time in which something you sense becomes something that exists.",
      meta: [
        { text: "Applied Mysticism · Creative Listening" },
        { text: "Est. 2025" },
        { text: "scroll ↓" },
      ],
    },
    gestation: {
      label: "creative gestation",
      title: "Every work begins before it has a form.",
      paragraphs: [
        "At first it may be an intuition, an image, a question that insists or a desire we still cannot name.",
        "I am drawn to that subtle territory of what has no form yet. That is where I work: I accompany you to look at it closely until it finds its own expression.",
      ],
      voicesIntro: "Perhaps you recognise yourself in one of these voices.",
      voices: [
        {
          tag: "restlessness",
          quote:
            "“I have wanted to make something of my own for a while, but I still don’t know what it is or where to begin.”",
        },
        {
          tag: "multiplicity",
          quote:
            "“So many things fascinate me that choosing a single path is hard. None of them, on its own, feels like everything I am.”",
        },
        {
          tag: "project in transformation",
          quote:
            "“My project is going through a transformation and its current form no longer represents it.”",
        },
      ],
      closing:
        "Sometimes everything begins with a question that won’t leave us.",
    },
    bridge: {
      create: ["The mystery of ", { em: "creating." }],
      exist: ["The mystery of ", { em: "existing." }],
    },
    studio: {
      mobileIntro: ["The mystery of ", { em: "creating." }],
      title: "Amaïa Studio",
      lead: "A space for research and creative gestation where I explore the mysteries of creation and the forms the sensible can take.",
      imageAlt:
        "An open laptop on a rock, among stones and large leaves in a lush garden",
      subtitle: "To give shape to your work.",
      body: "I accompany you to research what makes your work unique and to turn it into concrete decisions: how it is named, how it looks, how it speaks. It can be a brand, a book, a project, a service or a practice.",
      forYouLabel: "for you if ",
      forYou:
        "you have an idea, a restlessness or a work in progress and want to know where to take it.",
      journeyLabel: "the journey ",
      journeyName: "The Mystery of Form",
      journeyTagline: "the identity of your work.",
      cta: "Enter Studio",
    },
    rituals: {
      mobileIntro: ["The mystery of ", { em: "existing." }],
      title: "Amaïa Rituals",
      lead: "A space for sensitive, energetic and spiritual exploration where I research the mystery of being alive and our relationship with the sacred.",
      imageAlt:
        "A tea set on a log and a rock, in a shaded corner of a lush garden",
      subtitle: "In ceremony with life.",
      body: "Through ritual, voice, body and encounter, I explore different ways of cultivating our sensitivity, discovering ourselves and deepening our relationship with life.",
      forYouLabel: "for you if ",
      forYou:
        "you are curious about the invisible, about your own nature and about the different ways of experiencing the sacred in life.",
      journeyLabel: "the accompaniment ",
      journeyName: "The Ritual of Being",
      journeyTagline: "the discovery of your voice.",
      cta: "Enter Rituals",
    },
    philosophy: {
      label: "philosophy",
      title: [{ em: "Life" }, " is a ", { em: "creative" }, " act."],
      imageAlts: {
        flowers: "Blurred flowers behind a transparency",
        sprouts: "Green sprouts arranged in a spiral",
        shadow: "Shadow of leaves on a wall",
        moth: "A moth on the palm of a hand",
      },
      body: "Creating is part of our human nature. A way of taking part in life, of relating to the world and of giving form to our experience of being here.",
      cta: "Read the manifesto →",
    },
    guide: {
      label: "who accompanies",
      title: "I am a designer and cultural researcher.",
      body: "Nine years researching culture and people for brands, in agencies and consultancies. Today I put that craft at the service of those who create.",
      cta: "About me →",
      portraitAlt: "Portrait of Amaïa’s founder holding a bouquet of flowers",
    },
    fieldNotes: {
      title: "Field Notes",
      intro: "Field notes from my practice: what I learn while I create.",
      notes: [
        {
          label: "Image space: hands working a material",
          tag: "[image · hands]",
          description: "Hands working clay, paper or thread, very close up.",
          number: "field notes · [no.]",
          title: "Hands always know",
        },
        {
          label: "Image space: archive, layers of paper",
          tag: "[image · archive]",
          description:
            "Layers of paper, notebooks or old photos on top of each other: the trace of something lived.",
          number: "field notes · [no.]",
          title: "Intuition has memory",
        },
        {
          label: "Image space: texture in raking light",
          tag: "[image · texture]",
          description:
            "A surface very close up in raking light: fabric, ceramics or paper.",
          number: "field notes · 006",
          title: "Sensitivity can be educated",
        },
      ],
      cta: "Read more → [Instagram or Substack]",
    },
    closing: {
      title: "Let’s talk about what is taking shape.",
      body: "We can begin with a single question: the one that brings you here.",
      cta: "Book a first listening",
    },
  },
};
