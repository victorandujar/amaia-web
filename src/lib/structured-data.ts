import type { Locale } from "../i18n/locales";
import { pagePath, type PageKey } from "../i18n/routes";
import { seo } from "../i18n/seo";
import { contactPhone, links, whatsappLink } from "./links";

/** One schema.org entity of a JSON-LD graph. */
export type JsonLdNode = { "@type": string | readonly string[] } & Record<
  string,
  unknown
>;

export interface PageGraphInput {
  site: URL;
  locale: Locale;
  page: PageKey;
  title: string;
  description: string;
  imageUrl: string;
  logoUrl: string;
  portraitUrl: string;
  /** Page-specific entities, such as the services offered. */
  extra?: readonly JsonLdNode[];
}

const BRAND = "Amaïa";
const FOUNDER = "María Alejandra Amaya";

function absolute(path: string, site: URL): string {
  return new URL(path, site).href;
}

/** Stable ids shared by every page, so search engines merge the entities into one knowledge graph. */
function entityIds(site: URL): {
  organization: string;
  person: string;
  website: string;
} {
  return {
    organization: absolute("/#organization", site),
    person: absolute("/#maria-alejandra-amaya", site),
    website: absolute("/#website", site),
  };
}

export function pageUrl(site: URL, page: PageKey, locale: Locale): string {
  return absolute(pagePath(page, locale), site);
}

/** A service a page presents, offered by Amaïa. */
export function serviceNode(
  site: URL,
  locale: Locale,
  page: PageKey,
  service: {
    id: string;
    name: string;
    serviceType: string;
    description: string;
  },
): JsonLdNode {
  const url = `${pageUrl(site, page, locale)}#${service.id}`;
  return {
    "@type": "Service",
    "@id": url,
    url,
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    inLanguage: locale,
    provider: { "@id": entityIds(site).organization },
  };
}

/** The JSON-LD graph of a page: brand, founder, website, the page itself and its breadcrumb. */
export function pageGraph(input: PageGraphInput): {
  "@context": string;
  "@graph": JsonLdNode[];
} {
  const {
    site,
    locale,
    page,
    title,
    description,
    imageUrl,
    logoUrl,
    portraitUrl,
    extra = [],
  } = input;
  const ids = entityIds(site);
  const strings = seo[locale];
  const url = pageUrl(site, page, locale);
  const isAbout = page === "about";

  const organization: JsonLdNode = {
    "@type": "Organization",
    "@id": ids.organization,
    name: BRAND,
    alternateName: ["Amaïa Studio", "Amaïa Rituals"],
    url: pageUrl(site, "home", locale),
    logo: { "@type": "ImageObject", url: logoUrl },
    description: strings.organizationDescription,
    founder: { "@id": ids.person },
    sameAs: [links.instagram, links.substack],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: contactPhone,
      url: whatsappLink(locale, "contact"),
      availableLanguage: ["es", "en"],
    },
  };

  const person: JsonLdNode = {
    "@type": "Person",
    "@id": ids.person,
    name: FOUNDER,
    url: pageUrl(site, "about", locale),
    image: portraitUrl,
    jobTitle: strings.personJobTitle,
    nationality: { "@type": "Country", name: "Colombia" },
    homeLocation: { "@type": "Place", name: strings.personHome },
    worksFor: { "@id": ids.organization },
    sameAs: [links.professionalPath, links.substack],
  };

  const website: JsonLdNode = {
    "@type": "WebSite",
    "@id": ids.website,
    url: absolute("/", site),
    name: BRAND,
    inLanguage: ["es", "en"],
    publisher: { "@id": ids.organization },
  };

  const webPage: JsonLdNode = {
    "@type": isAbout ? ["AboutPage", "ProfilePage"] : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: locale,
    isPartOf: { "@id": ids.website },
    about: { "@id": isAbout ? ids.person : ids.organization },
    ...(isAbout ? { mainEntity: { "@id": ids.person } } : {}),
    primaryImageOfPage: { "@type": "ImageObject", url: imageUrl },
    ...(page === "home" ? {} : { breadcrumb: { "@id": `${url}#breadcrumb` } }),
  };

  const breadcrumb: JsonLdNode[] =
    page === "home"
      ? []
      : [
          {
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: strings.breadcrumb.home,
                item: pageUrl(site, "home", locale),
              },
              {
                "@type": "ListItem",
                position: 2,
                name: strings.breadcrumb[page],
                item: url,
              },
            ],
          },
        ];

  return {
    "@context": "https://schema.org",
    "@graph": [organization, person, website, webPage, ...breadcrumb, ...extra],
  };
}
