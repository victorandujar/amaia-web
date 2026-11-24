import type { Localized } from "../../i18n/locales";
import type { RichText } from "../../lib/rich-text";

interface CaptionedImage {
  alt: string;
  caption: string;
}

interface ManifestoContent {
  meta: { title: string; description: string };
  title: string;
  opening: {
    imageAlt: string;
    label: string;
    statement: string;
    paragraphs: readonly string[];
    discoveriesLabel: string;
    discoveries: readonly string[];
  };
  index: {
    paragraphs: readonly string[];
    words: readonly string[];
    altar: CaptionedImage;
  };
  figures: { drawing: CaptionedImage; pondAlt: string };
  reenchant: {
    label: string;
    title: RichText;
    paragraphs: readonly string[];
    lotus: CaptionedImage;
  };
  closing: { statement: RichText; body: string; cta: string; next: string };
}

export const manifestoContent: Localized<ManifestoContent> = {
  es: {
    meta: {
      title: "Amaïa · Manifiesto",
      description:
        "Somos un misterio a descubrir. Y la creación es una de las maneras de entrar en ese misterio.",
    },
    title: "Manifiesto",
    opening: {
      imageAlt:
        "Una mano abierta a contraluz, atravesada por reflejos de luz, en blanco y negro",
      label: "manifiesto",
      statement:
        "Somos un misterio a descubrir. Y la creación es una de las maneras de entrar en ese misterio.",
      paragraphs: [
        "La vida es un acto creativo. Crear es parte de nuestra naturaleza y una manera de participar en ella.",
        "No busco resolverlo, sino crear las condiciones para entrar en relación con él.",
        "Siento que lo divino es demasiado vasto para caber en un solo lenguaje.",
      ],
      discoveriesLabel: "(lo que he descubierto)",
      discoveries: [
        "«Lo sagrado no está separado de la vida cotidiana; puede manifestarse en nuestra manera de relacionarnos con ella.»",
        "«La vida me atraviesa primero como silencio. Mi tarea es permanecer el tiempo suficiente para escucharla, hasta que encuentre una voz.»",
        "«La creación no es únicamente aquello que resulta de un proceso. También es aquello que el proceso transforma en quien crea.»",
      ],
    },
    index: {
      paragraphs: [
        "Somos humanas: convertimos información celeste en materia, todo el tiempo, aunque no lo llamemos así.",
        "Mi oficio es acompañar el viaje de lo invisible hasta que se vuelve materia.",
      ],
      words: ["Misterio", "Materia", "Sensibilidad", "Presencia", "Belleza"],
      altar: {
        alt: "Una mano escribe en un cuaderno junto a una vela, una taza de té, una tetera y una flor de loto seca sobre un mantel de encaje",
        caption:
          "Crear un altar es darle una estructura visible a algo que tiene un significado invisible.",
      },
    },
    figures: {
      drawing: {
        alt: "Un dibujo en pastel en tonos rosa, violeta y verde sobre una mesa de madera, junto a dos piedras y una rama seca",
        caption:
          "Hay algo muy vivo y juguetón en mi manera de crear. No todo tiene que ser solemne.",
      },
      pondAlt: "Un estanque con hojas de nenúfar y flores de loto azul",
    },
    reenchant: {
      label: "(reencantar la vida)",
      title: [
        "Encontrar profundidad, significado y belleza en lo que ",
        { em: "ya está aquí." },
      ],
      paragraphs: [
        "Preparar una comida, disponer una mesa, cuidar una planta, ofrecer una taza de té. Los gestos más cotidianos pueden volverse profundamente significativos, no por su sofisticación, sino por la intención, la atención y la relación que cultivamos a través de ellos.",
        "Las personas sensibles nunca tenemos archivada la conversación con la vida. La sensibilidad no es algo que haya que esconder o justificar: se cultiva, y es un don profundamente valioso.",
        "Creo en explorar sin tener todas las respuestas y en tomarnos en serio nuestras propias inquietudes creativas. Acompañar no significa decidir por otra persona, sino ayudarle a afinarse hasta dar su propia nota. Materializar no significa tenerlo todo resuelto, sino comprometernos con aquello que consideramos valioso.",
      ],
      lotus: {
        alt: "Una flor de loto azul seca junto a trozos de cacao sobre una tabla de madera",
        caption:
          "Separar un espacio para crear o simplemente estar conmigo es decirle a la vida: mi vida es importante. Lo que siento importa.",
      },
    },
    closing: {
      statement: [
        "Haciendo vamos dando forma y haciéndonos vamos ",
        { em: "descubriendo." },
      ],
      body: "Me encantará escucharte.",
      cta: "Escríbeme",
      next: "Sobre mí",
    },
  },
  en: {
    meta: {
      title: "Amaïa · Manifesto",
      description:
        "We are a mystery to be discovered. And creation is one of the ways into that mystery.",
    },
    title: "Manifesto",
    opening: {
      imageAlt:
        "An open hand against the light, crossed by reflections of light, in black and white",
      label: "manifesto",
      statement:
        "We are a mystery to be discovered. And creation is one of the ways into that mystery.",
      paragraphs: [
        "Life is a creative act. Creating is part of our nature and a way of taking part in it.",
        "I don’t seek to solve it, but to create the conditions to enter into relationship with it.",
        "I feel the divine is too vast to fit into a single language.",
      ],
      discoveriesLabel: "(what I have discovered)",
      discoveries: [
        "“The sacred is not separate from everyday life; it can show itself in the way we relate to it.”",
        "“Life first moves through me as silence. My task is to stay long enough to listen to it, until it finds a voice.”",
        "“Creation is not only what results from a process. It is also what the process transforms in the one who creates.”",
      ],
    },
    index: {
      paragraphs: [
        "We are human: we turn celestial information into matter, all the time, even if we don’t call it that.",
        "My craft is to accompany the journey of the invisible until it becomes matter.",
      ],
      words: ["Mystery", "Matter", "Sensitivity", "Presence", "Beauty"],
      altar: {
        alt: "A hand writes in a notebook next to a candle, a cup of tea, a teapot and a dried lotus flower on a lace tablecloth",
        caption:
          "Creating an altar is giving a visible structure to something with an invisible meaning.",
      },
    },
    figures: {
      drawing: {
        alt: "A pastel drawing in pink, violet and green on a wooden table, next to two stones and a dry branch",
        caption:
          "There is something very alive and playful in the way I create. Not everything has to be solemn.",
      },
      pondAlt: "A pond with water-lily leaves and blue lotus flowers",
    },
    reenchant: {
      label: "(re-enchanting life)",
      title: [
        "Finding depth, meaning and beauty in what ",
        { em: "is already here." },
      ],
      paragraphs: [
        "Preparing a meal, laying a table, tending a plant, offering a cup of tea. The most everyday gestures can become deeply meaningful, not because of their sophistication, but because of the intention, the attention and the relationship we cultivate through them.",
        "Sensitive people never put our conversation with life away in a file. Sensitivity is not something to hide or justify: it is cultivated, and it is a deeply valuable gift.",
        "I believe in exploring without having all the answers and in taking our own creative restlessness seriously. Accompanying doesn’t mean deciding for someone else, but helping them tune themselves until they sound their own note. Materialising doesn’t mean having everything resolved, but committing to what we hold valuable.",
      ],
      lotus: {
        alt: "A dried blue lotus flower next to pieces of cacao on a wooden board",
        caption:
          "Setting aside a space to create, or simply to be with myself, is telling life: my life matters. What I feel matters.",
      },
    },
    closing: {
      statement: [
        "By making we give shape, and by making ourselves we keep ",
        { em: "discovering." },
      ],
      body: "I would love to hear from you.",
      cta: "Write to me",
      next: "About me",
    },
  },
};
