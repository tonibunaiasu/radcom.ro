import en from "./locales/en.json";
import ro from "./locales/ro.json";
import { Locale } from "./locale";

const copy = { en, ro } as const;

export function getCopy(locale: Locale) {
  return copy[locale] || copy.en;
}

export function buildCookieBody(locale: Locale) {
  const data = getCopy(locale).cookiePolicy;
  return [
    `## ${data.intro.title}`,
    data.intro.content,
    `## ${data.whatAreCookies.title}`,
    data.whatAreCookies.content,
    `## ${data.typesOfCookies.title}`,
    `### ${data.typesOfCookies.essential.title}`,
    data.typesOfCookies.essential.description,
    `### ${data.typesOfCookies.analytics.title}`,
    data.typesOfCookies.analytics.description,
    `### ${data.typesOfCookies.functional.title}`,
    data.typesOfCookies.functional.description,
    `## ${data.managingCookies.title}`,
    data.managingCookies.content,
    `## ${data.thirdParty.title}`,
    data.thirdParty.content,
    `## ${data.contact.title}`,
    data.contact.content
  ].join("\n\n");
}

export function buildPrivacyBody(locale: Locale) {
  const data = getCopy(locale).privacyPolicy;
  return [
    `## ${data.intro.title}`,
    data.intro.content,
    `## ${data.dataController.title}`,
    `## ${data.dataCollection.title}`,
    data.dataCollection.content,
    `### ${data.dataCollection.personal.title}`,
    data.dataCollection.personal.description,
    `### ${data.dataCollection.technical.title}`,
    data.dataCollection.technical.description,
    `### ${data.dataCollection.usage.title}`,
    data.dataCollection.usage.description,
    `## ${data.howWeUse.title}`,
    data.howWeUse.content,
    `### ${data.howWeUse.purposes.service}`,
    `### ${data.howWeUse.purposes.communication}`,
    `### ${data.howWeUse.purposes.improvement}`,
    `### ${data.howWeUse.purposes.legal}`,
    `### ${data.howWeUse.purposes.marketing}`,
    `## ${data.legalBasis.title}`,
    data.legalBasis.content,
    `## ${data.dataSharing.title}`,
    data.dataSharing.content,
    `## ${data.dataRetention.title}`,
    data.dataRetention.content,
    `## ${data.yourRights.title}`,
    data.yourRights.content,
    `### ${data.yourRights.rights.access}`,
    `### ${data.yourRights.rights.rectification}`,
    `### ${data.yourRights.rights.erasure}`,
    `### ${data.yourRights.rights.restriction}`,
    `### ${data.yourRights.rights.portability}`,
    `### ${data.yourRights.rights.objection}`,
    `### ${data.yourRights.rights.complaint}`,
    `## ${data.security.title}`,
    data.security.content,
    `## ${data.children.title}`,
    data.children.content,
    `## ${data.changes.title}`,
    data.changes.content,
    `## ${data.contact.title}`,
    data.contact.content
  ].join("\n\n");
}

export function getHomeLabels(locale: Locale) {
  const data = getCopy(locale);
  return {
    keyMetrics: locale === "ro" ? "Indicatori cheie" : "Key metrics",
    servicesTitle: locale === "ro" ? "Tehnologie pentru transport public" : "Public transport technology",
    servicesLead: locale === "ro"
      ? "Soluții moderne pentru flotă, taxare și informare pasageri, integrate într-un singur stack."
      : "Modern solutions for fleet, ticketing, and passenger information in one integrated stack.",
    serviceCta: locale === "ro" ? "Descoperă" : "Discover",
    developmentTitle: locale === "ro" ? "Domenii de utilizare" : "Use cases",
    infrastructureTitle: locale === "ro" ? "Componente platformă" : "Platform components",
    advantagesTitle:
      locale === "ro" ? "De ce RADCOM" : "Why RADCOM",
    partnersTitle: data.partners?.title || (locale === "ro" ? "Parteneri" : "Partners"),
    partnersSubtitle:
      data.partners?.subtitle ||
      (locale === "ro"
        ? "Colaborăm cu organizații publice și private pentru soluții tehnologice scalabile în România."
        : "We partner with public and private organizations for scalable technology solutions."),
    ctaTitle:
      locale === "ro" ? "Hai să discutăm despre proiectul tău" : "Let’s discuss your project",
    ctaLead:
      locale === "ro"
        ? "Contactează-ne pentru o discuție sau pentru a construi o soluție personalizată."
        : "Contact us for a discussion or to build a tailored solution.",
    ctaPrimary:
      data.cta?.requestDemo || (locale === "ro" ? "Solicită o discuție" : "Request a discussion"),
    ctaSecondary: locale === "ro" ? "Vezi toate serviciile" : "View all services"
  };
}

export function getServicesLabels(locale: Locale) {
  const data = getCopy(locale).services;
  return {
    heroTitle: data.title,
    heroSubtitle: data.subtitle,
    heroDescription: locale === "ro"
      ? "Oferim cele mai avansate sisteme pentru managementul flotei, e-ticketing și informare pasageri, integrate într-o platformă unică pentru operatorii de transport public din România."
      : "We deliver advanced fleet management, e-ticketing, and passenger information systems integrated into a single platform for public transport operators in Romania.",
    solutionsTitle: data.ourSolutions,
    solutionsDescription: data.solutionsDescription,
    stats: [
      { value: "3", label: locale === "ro" ? "Produse integrate" : "Integrated products" },
      { value: "1", label: locale === "ro" ? "Platformă unificată" : "Unified platform" },
      { value: "100%", label: locale === "ro" ? "Soluție completă" : "Complete solution" }
    ],
    integrationTitle: locale === "ro" ? "Sistem complet integrat" : "Fully integrated system",
    integrationLead:
      locale === "ro"
        ? "Sistemul integrat RADCOM combină cele trei produse principale într-o platformă unică, oferind operatorilor o soluție completă pentru management, taxare și informare pasageri."
        : "RADCOM’s integrated system combines the three core products into a single platform, providing a complete solution for management, fare collection, and passenger information.",
    ctaTitle: getCopy(locale).cta.modernize,
    ctaLead: getCopy(locale).cta.description,
    ctaButton: locale === "ro" ? "Solicită o discuție" : "Request a discussion"
  };
}

export function getContactLabels(locale: Locale) {
  return {
    formTitle: locale === "ro" ? "Trimite-ne un mesaj" : "Send us a message",
    formLead: locale === "ro" ? "Trimite-ne un mesaj și revenim rapid." : "Send us a message and we’ll respond quickly.",
    infoTitle: locale === "ro" ? "Informații de contact" : "Contact information",
    fields: {
      name: locale === "ro" ? "Nume" : "Name",
      email: locale === "ro" ? "Email" : "Email",
      phone: locale === "ro" ? "Telefon" : "Phone",
      message: locale === "ro" ? "Mesaj" : "Message",
      submit: locale === "ro" ? "Trimite mesajul" : "Send message"
    }
  };
}

export function getPolicySummary(locale: Locale, type: "cookie" | "privacy") {
  const data = getCopy(locale)[type === "cookie" ? "cookiePolicy" : "privacyPolicy"];
  return `${data.lastUpdated}: ${locale === "ro" ? "29 ianuarie 2026" : "January 29, 2026"}`;
}
