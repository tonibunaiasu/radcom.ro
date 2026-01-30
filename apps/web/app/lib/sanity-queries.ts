import { sanityClient } from "./sanity";
import {
  defaultLocale,
  homeContent,
  servicesContent,
  solutionsContent,
  partnersContent
} from "./content";

const hasSanityEnv =
  !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  !!process.env.NEXT_PUBLIC_SANITY_DATASET;

const pick = (value: { ro?: string; en?: string } | undefined, locale: string) =>
  value?.[locale as "ro" | "en"] || value?.ro || value?.en || "";

export async function getHomeContent(locale = defaultLocale) {
  if (!hasSanityEnv) return homeContent;

  const query = `*[_type=="home"][0]{
    hero{title,subtitle,ctaPrimary,ctaSecondary},
    stats[]{value,label},
    industries[]{title,desc},
    infrastructure[]{title,desc},
    advantages[]{title,desc},
    partners{title,subtitle}
  }`;

  const data = await sanityClient.fetch(query);
  if (!data) return homeContent;

  return {
    hero: {
      title: pick(data.hero?.title, locale),
      subtitle: pick(data.hero?.subtitle, locale),
      ctaPrimary: pick(data.hero?.ctaPrimary, locale),
      ctaSecondary: pick(data.hero?.ctaSecondary, locale)
    },
    stats: (data.stats || []).map((item: any) => ({
      value: item.value,
      label: pick(item.label, locale)
    })),
    industries: (data.industries || []).map((item: any) => ({
      title: pick(item.title, locale),
      desc: pick(item.desc, locale)
    })),
    infrastructure: (data.infrastructure || []).map((item: any) => ({
      title: pick(item.title, locale),
      desc: pick(item.desc, locale)
    })),
    advantages: (data.advantages || []).map((item: any) => ({
      title: pick(item.title, locale),
      desc: pick(item.desc, locale)
    })),
    partners: {
      title: pick(data.partners?.title, locale),
      subtitle: pick(data.partners?.subtitle, locale)
    }
  };
}

export async function getServices(locale = defaultLocale) {
  if (!hasSanityEnv) return servicesContent;

  const query = `*[_type=="service"]|order(title.ro asc){
    _id,
    slug,
    title,
    subtitle,
    description,
    features
  }`;

  const items = await sanityClient.fetch(query);
  if (!items?.length) return servicesContent;

  return items.map((item: any, idx: number) => ({
    id: item.slug?.current || item._id,
    title: pick(item.title, locale),
    subtitle: pick(item.subtitle, locale),
    description: pick(item.description, locale),
    features: (item.features || []).map((feature: any) =>
      pick(feature, locale)
    ),
    link: `/servicii/${item.slug?.current || item._id}`,
    tone: idx === 0 ? "primary" : idx === 1 ? "accent" : "success"
  }));
}

export async function getPage(slug: string, locale = defaultLocale) {
  if (!hasSanityEnv) return null;

  const query = `*[_type=="page" && slug.current==$slug][0]{title,summary,body}`;
  const data = await sanityClient.fetch(query, { slug });
  if (!data) return null;

  return {
    title: pick(data.title, locale),
    summary: pick(data.summary, locale),
    body: pick(data.body, locale)
  };
}

export async function getSolutions(locale = defaultLocale) {
  if (!hasSanityEnv) return solutionsContent;

  const query = `*[_type=="solution"]|order(title.ro asc){
    _id,
    slug,
    title,
    description,
    benefits
  }`;

  const items = await sanityClient.fetch(query);
  if (!items?.length) return solutionsContent;

  return items.map((item: any) => ({
    id: item.slug?.current || item._id,
    slug: item.slug?.current || item._id,
    title: pick(item.title, locale),
    description: pick(item.description, locale),
    benefits: (item.benefits || []).map((benefit: any) => pick(benefit, locale))
  }));
}

export async function getSolutionBySlug(slug: string, locale = defaultLocale) {
  if (!hasSanityEnv) {
    return solutionsContent.find((item) => item.slug === slug) || null;
  }

  const query = `*[_type=="solution" && slug.current==$slug][0]{
    _id,
    slug,
    title,
    description,
    benefits
  }`;
  const data = await sanityClient.fetch(query, { slug });
  if (!data) return null;

  return {
    id: data.slug?.current || data._id,
    slug: data.slug?.current || data._id,
    title: pick(data.title, locale),
    description: pick(data.description, locale),
    benefits: (data.benefits || []).map((benefit: any) => pick(benefit, locale))
  };
}

export async function getArticles(locale = defaultLocale) {
  if (!hasSanityEnv) return [];

  const query = `*[_type=="article"]|order(publishedAt desc){
    _id,
    title,
    excerpt,
    publishedAt,
    slug
  }`;

  const items = await sanityClient.fetch(query);
  return (items || []).map((item: any) => ({
    id: item._id,
    title: pick(item.title, locale),
    excerpt: pick(item.excerpt, locale),
    publishedAt: item.publishedAt,
    slug: item.slug?.current
  }));
}

export async function getJobs(locale = defaultLocale) {
  if (!hasSanityEnv) return [];

  const query = `*[_type=="job"]|order(title.ro asc){
    _id,
    title,
    department,
    location,
    type,
    description
  }`;

  const items = await sanityClient.fetch(query);
  return (items || []).map((item: any) => ({
    id: item._id,
    title: pick(item.title, locale),
    department: item.department,
    location: item.location,
    type: item.type,
    description: pick(item.description, locale)
  }));
}

export async function getPartners() {
  if (!hasSanityEnv) return partnersContent;

  const query = `*[_type=="partner"]|order(order asc){
    _id,
    name,
    website,
    logo
  }`;

  const items = await sanityClient.fetch(query);
  if (!items?.length) return partnersContent;

  return items.map((item: any) => ({
    id: item._id,
    name: item.name,
    website: item.website,
    logo: item.logo
  }));
}

export async function getSettings() {
  if (!hasSanityEnv) return null;

  const query = `*[_type=="settings"][0]{companyName,email,phone,address}`;
  return sanityClient.fetch(query);
}
