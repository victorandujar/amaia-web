import type { Localized } from "../../i18n/locales";
import type { RichText } from "../../lib/rich-text";

interface Service {
  label: string;
  title: string;
  tagline: string;
  paragraphs: readonly string[];
  forYouLabel: string;
  forYou: string;
  cta: string;
}

interface StudioContent {
  meta: { title: string; description: string };
  hero: { title: string; startWord: string; endWord: string; imageAlt: string };
  welcome: {
    title: string;
    lead: string;
    body: string;
    accompaniesLabel: string;
    accompanies: readonly string[];
  };
  craft: {
    title: string;
    body: string;
    steps: readonly { title: string; body: string }[];
  };
  services: {
    label: string;
    title: string;
    body: string;
    mysteryOfForm: Service;
    creativeCorrespondences: Service;
    testimonial: { quote: string; author: string };
  };
  closing: { title: RichText; body: string; cta: string; next: string };
}

export const studioContent: Localized<StudioContent> = {
  es: {
    meta: {
      title: "Amaïa Studio · Investigación y gestación creativa",
      description:
        "Amaïa Studio es un espacio de investigación y gestación creativa donde exploro los misterios de la creación y las formas que puede adquirir lo sensible.",
    },
    hero: {
      title: "Amaïa Studio",
      startWord: "Amaïa",
      endWord: "Studio",
      imageAlt:
        "Un portátil abierto sobre una roca, en un jardín frondoso lleno de plantas y piedras",
    },
    welcome: {
      title: "Donde lo abstracto adquiere cuerpo.",
      lead: "Amaïa Studio es un espacio de investigación y gestación creativa donde exploro los misterios de la creación y las formas que puede adquirir lo sensible.",
      body: "Aquí acompaño a personas que tienen algo entre manos y quieren llevarlo a la materia.",
      accompaniesLabel: "lo que acompaño",
      accompanies: [
        "Marcas y proyectos",
        "Piezas editoriales",
        "Proyectos artísticos y creativos",
        "Servicios y experiencias",
      ],
    },
    craft: {
      title: "Sobre el oficio de dar forma.",
      body: "Tu obra trae sus propias preguntas, y el recorrido lo vamos ajustando juntas: a veces pide más investigación, a veces más estrategia, a veces probar con las manos.",
      steps: [
        {
          title: "Investigar",
          body: "Entender de dónde viene tu obra, qué la mueve y qué la hace única.",
        },
        {
          title: "Traducir",
          body: "Lo que encontramos se convierte en decisiones: cómo se nombra, cómo habla, cómo se ve.",
        },
        {
          title: "Materializar",
          body: "Convertir esas decisiones en las primeras piezas con las que tu obra sale al mundo.",
        },
      ],
    },
    services: {
      label: "formas de trabajar juntas",
      title: "Cada obra pide su propio camino.",
      body: "Por eso hay dos maneras de trabajar juntas, según el momento en que esté tu proceso.",
      mysteryOfForm: {
        label: "recorrido de investigación y creación",
        title: "The Mystery of Form",
        tagline: "La identidad de tu obra.",
        paragraphs: [
          "Un recorrido de principio a fin. Investigo contigo el universo que hay detrás de lo que estás creando, encontramos su identidad y la llevamos a una dirección clara y a una primera expresión concreta.",
        ],
        forYouLabel: "para ti si ",
        forYou:
          "tu obra está empezando, o ya existe pero todavía no ha encontrado su identidad.",
        cta: "Explorar el recorrido",
      },
      creativeCorrespondences: {
        label: "colaboraciones a medida",
        title: "Creative Correspondences",
        tagline: "Una obra pensada en compañía.",
        paragraphs: [
          "Pongo mi oficio de investigadora, estratega y diseñadora al servicio de tu obra. Trabajamos sobre aquello que necesita ser investigado, articulado o desarrollado, construyendo una colaboración alrededor de las preguntas particulares de tu proyecto.",
        ],
        forYouLabel: "para ti si ",
        forYou:
          "tu proyecto, tu marca o tu equipo ya están en marcha y necesitan investigación, estrategia o dirección creativa.",
        cta: "Cuéntame qué estás creando",
      },
      testimonial: {
        quote:
          "«Tienes un don con las palabras y con hacerme sentir más segura sobre mi proyecto y capacidades.»",
        author: "Daniela",
      },
    },
    closing: {
      title: ["Empecemos por escuchar."],
      body: "Podemos empezar por una sola pregunta: la que te trae hasta aquí.",
      cta: "Agendar una primera escucha",
      next: "Rituals",
    },
  },
  en: {
    meta: {
      title: "Amaïa Studio · Research and creative gestation",
      description:
        "Amaïa Studio is a space for research and creative gestation where I explore the mysteries of creation and the forms the sensible can take.",
    },
    hero: {
      title: "Amaïa Studio",
      startWord: "Amaïa",
      endWord: "Studio",
      imageAlt:
        "An open laptop on a rock, in a lush garden full of plants and stones",
    },
    welcome: {
      title: "Where the abstract takes on a body.",
      lead: "Amaïa Studio is a space for research and creative gestation where I explore the mysteries of creation and the forms the sensible can take.",
      body: "Here I accompany people who have something in their hands and want to bring it into matter.",
      accompaniesLabel: "what I accompany",
      accompanies: [
        "Brands and projects",
        "Editorial pieces",
        "Artistic and creative projects",
        "Services and experiences",
      ],
    },
    craft: {
      title: "On the craft of giving form.",
      body: "Your work brings its own questions, and we shape the journey together as we go: sometimes it asks for more research, sometimes more strategy, sometimes for trying things with our hands.",
      steps: [
        {
          title: "Research",
          body: "Understanding where your work comes from, what moves it and what makes it unique.",
        },
        {
          title: "Translate",
          body: "What we find becomes decisions: how it is named, how it speaks, how it looks.",
        },
        {
          title: "Materialise",
          body: "Turning those decisions into the first pieces with which your work goes out into the world.",
        },
      ],
    },
    services: {
      label: "ways of working together",
      title: "Every work asks for its own path.",
      body: "That is why there are two ways of working together, depending on where your process is.",
      mysteryOfForm: {
        label: "research and creation journey",
        title: "The Mystery of Form",
        tagline: "The identity of your work.",
        paragraphs: [
          "A journey from beginning to end. Together we research the universe behind what you are creating, find its identity and take it to a clear direction and a first concrete expression.",
        ],
        forYouLabel: "for you if ",
        forYou:
          "your work is just beginning, or already exists but has not yet found its identity.",
        cta: "Explore the journey",
      },
      creativeCorrespondences: {
        label: "tailored collaborations",
        title: "Creative Correspondences",
        tagline: "A work conceived in company.",
        paragraphs: [
          "I put my craft as a researcher, strategist and designer at the service of your work. We work on whatever needs to be researched, articulated or developed, building a collaboration around the particular questions of your project.",
        ],
        forYouLabel: "for you if ",
        forYou:
          "your project, your brand or your team are already under way and need research, strategy or creative direction.",
        cta: "Tell me what you are creating",
      },
      testimonial: {
        quote:
          "“You have a gift with words and with making me feel more confident about my project and my abilities.”",
        author: "Daniela",
      },
    },
    closing: {
      title: ["Let’s begin by listening."],
      body: "We can begin with a single question: the one that brings you here.",
      cta: "Book a first listening",
      next: "Rituals",
    },
  },
};
