import type { Localized } from "../../i18n/locales";
import type { RichText } from "../../lib/rich-text";

interface Offering {
  label: string;
  title: string;
  tagline: string;
  paragraphs: readonly string[];
  forYouLabel: string;
  forYou: string;
  cta: string;
}

interface RitualsContent {
  meta: { title: string; description: string };
  hero: {
    title: string;
    startWord: string;
    endWord: string;
    imageAlt: string;
  };
  intro: { title: string; lead: string };
  gaze: {
    title: string;
    imageAlt: string;
    paragraphs: readonly string[];
    motto: RichText;
  };
  languages: {
    title: string;
    body: string;
    items: readonly { title: string; body: string }[];
  };
  offerings: {
    title: string;
    ritualOfBeing: Offering;
    inDivineCompany: Offering;
    testimonial: { quote: string; author: string };
  };
  closing: { title: RichText; body: string; cta: string; next: string };
}

export const ritualsContent: Localized<RitualsContent> = {
  es: {
    meta: {
      title: "Amaïa Rituals",
      description:
        "Amaïa Rituals es un espacio de exploración sensible, energética y espiritual. Nace de mi fascinación por el misterio de estar vivos.",
    },
    hero: {
      title: "Amaïa Rituals",
      startWord: "Amaïa",
      endWord: "Rituals",
      imageAlt:
        "Un servicio de té sobre un tronco y una roca, en un rincón en sombra de un jardín frondoso",
    },
    intro: {
      title: "En ceremonia con la vida.",
      lead: "Amaïa Rituals es un espacio de exploración sensible, energética y espiritual. Nace de mi fascinación por el misterio de estar vivos y por las distintas maneras en que podemos establecer un diálogo con lo sagrado.",
    },
    gaze: {
      title: "Una profunda reverencia por la vida.",
      imageAlt:
        "Una mano sostiene una taza de cacao junto a una vela encendida y flores secas, sobre un mantel de encaje",
      paragraphs: [
        "Creo en la dimensión sagrada de nuestra existencia. Me interesa reconocer lo divino en la naturaleza, en el cuerpo, en la belleza de un gesto y en el encuentro con otros.",
        "El ritual es mi manera de dedicar atención a ese misterio y de crear belleza en el tiempo.",
      ],
      motto: [
        "Espacio dentro del Espacio, ",
        { br: true },
        "Tiempo dentro del tiempo.",
      ],
    },
    languages: {
      title: "Los lenguajes que me acompañan.",
      body: "Mi práctica está en constante exploración. Hoy camino con distintos lenguajes que despiertan mi sensibilidad y forman parte de mi relación con lo invisible.",
      items: [
        {
          title: "Las plantas",
          body: "El cacao y el loto azul en mi práctica ritual.",
        },
        {
          title: "El cuerpo y la voz",
          body: "El sonido, el canto, el gesto y el silencio.",
        },
        {
          title: "Lo sutil",
          body: "La intuición, la canalización y la exploración energética.",
        },
      ],
    },
    offerings: {
      title: "El misterio también se comparte.",
      ritualOfBeing: {
        label: "acompañamiento de escucha y autodescubrimiento",
        title: "The Ritual of Being",
        tagline: "El misterio de ser.",
        paragraphs: [
          "Un acompañamiento de escucha y autodescubrimiento para explorar tu sensibilidad y reconocer tu propia voz. Una invitación a descubrir tu manera singular de percibir, sentir, elegir y expresarte.",
        ],
        forYouLabel: "para ti si ",
        forYou:
          "quieres darte un tiempo para escucharte y descubrir quién eres más allá de lo que se espera de ti.",
        cta: "Explorar el acompañamiento",
      },
      inDivineCompany: {
        label: "experiencias sensibles y ceremoniales",
        title: "In Divine Company",
        tagline: "Encuentros en celebración de la vida.",
        paragraphs: [
          "Experiencias donde las plantas, el cuerpo, la voz, el ritual y la conversación nos ofrecen distintas maneras de entrar en relación con lo sagrado y celebrar nuestra humanidad.",
          "Una invitación a descubrir lo que acontece cuando nos encontramos.",
        ],
        forYouLabel: "para ti si ",
        forYou:
          "buscas vivir lo sagrado en compañía y compartir experiencias que no siempre caben en las palabras.",
        cta: "Descubrir los encuentros",
      },
      testimonial: {
        quote:
          "«Al final termina siendo un proceso de ver quién fuiste, eres y lo que quieres proyectar de ti.»",
        author: "Estefanía",
      },
    },
    closing: {
      title: ["Que nunca nos abandone ", { em: "el asombro." }],
      body: "Hay tanto por descubrir de nuestra existencia. Me encantará explorar una parte contigo.",
      cta: "Escríbeme",
      next: "Sobre mí",
    },
  },
  en: {
    meta: {
      title: "Amaïa Rituals",
      description:
        "Amaïa Rituals is a space for sensitive, energetic and spiritual exploration. It is born from my fascination with the mystery of being alive.",
    },
    hero: {
      title: "Amaïa Rituals",
      startWord: "Amaïa",
      endWord: "Rituals",
      imageAlt:
        "A tea set on a log and a rock, in a shaded corner of a lush garden",
    },
    intro: {
      title: "In ceremony with life.",
      lead: "Amaïa Rituals is a space for sensitive, energetic and spiritual exploration. It is born from my fascination with the mystery of being alive and with the different ways in which we can enter into dialogue with the sacred.",
    },
    gaze: {
      title: "A deep reverence for life.",
      imageAlt:
        "A hand holds a cup of cacao next to a lit candle and dried flowers, on a lace tablecloth",
      paragraphs: [
        "I believe in the sacred dimension of our existence. I am drawn to recognising the divine in nature, in the body, in the beauty of a gesture and in the encounter with others.",
        "Ritual is my way of devoting attention to that mystery and of creating beauty in time.",
      ],
      motto: ["Space within Space, ", { br: true }, "Time within time."],
    },
    languages: {
      title: "The languages that accompany me.",
      body: "My practice is in constant exploration. Today I walk with different languages that awaken my sensitivity and are part of my relationship with the invisible.",
      items: [
        {
          title: "Plants",
          body: "Cacao and blue lotus in my ritual practice.",
        },
        { title: "Body and voice", body: "Sound, song, gesture and silence." },
        {
          title: "The subtle",
          body: "Intuition, channelling and energetic exploration.",
        },
      ],
    },
    offerings: {
      title: "Mystery is also shared.",
      ritualOfBeing: {
        label: "accompaniment in listening and self-discovery",
        title: "The Ritual of Being",
        tagline: "The mystery of being.",
        paragraphs: [
          "An accompaniment in listening and self-discovery to explore your sensitivity and recognise your own voice. An invitation to discover your singular way of perceiving, feeling, choosing and expressing yourself.",
        ],
        forYouLabel: "for you if ",
        forYou:
          "you want to give yourself time to listen to yourself and discover who you are beyond what is expected of you.",
        cta: "Explore the accompaniment",
      },
      inDivineCompany: {
        label: "sensitive and ceremonial experiences",
        title: "In Divine Company",
        tagline: "Gatherings in celebration of life.",
        paragraphs: [
          "Experiences where plants, body, voice, ritual and conversation offer us different ways of entering into relationship with the sacred and celebrating our humanity.",
          "An invitation to discover what happens when we meet.",
        ],
        forYouLabel: "for you if ",
        forYou:
          "you wish to live the sacred in company and share experiences that do not always fit into words.",
        cta: "Discover the gatherings",
      },
      testimonial: {
        quote:
          "“In the end it becomes a process of seeing who you were, who you are and what you want to project of yourself.”",
        author: "Estefanía",
      },
    },
    closing: {
      title: ["May ", { em: "wonder" }, " never leave us."],
      body: "There is so much to discover about our existence. I would love to explore a part of it with you.",
      cta: "Write to me",
      next: "About me",
    },
  },
};
