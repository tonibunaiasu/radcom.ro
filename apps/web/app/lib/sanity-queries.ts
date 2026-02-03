import {
  defaultLocale,
  homeContent,
  servicesContent,
  solutionsContent,
  partnersContent,
  articlesContent
} from "./content";

const baseURL =
  process.env.NEXT_PUBLIC_PAYLOAD_URL ||
  process.env.PAYLOAD_URL ||
  "http://localhost:3006";

const fetchJSON = async (path: string, init?: RequestInit) => {
  const res = await fetch(`${baseURL}${path}`, {
    ...init,
    next: { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {})
    }
  });
  if (!res.ok) return null;
  return res.json();
};

const pick = (
  value: { ro?: string; en?: string } | string | undefined | null,
  locale: string
) => {
  if (typeof value === "string") return value;
  if (!value) return "";
  return value?.[locale as "ro" | "en"] || value?.ro || value?.en || "";
};

export async function getHomeContent(locale = defaultLocale) {
  const data = await fetchJSON(`/api/globals/home?locale=${locale}`);
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
  const data = await fetchJSON(`/api/services?limit=100&locale=${locale}`);
  const items = data?.docs || [];
  if (!items.length) return servicesContent;

  return items.map((item: any) => ({
    id: item.slug || item.id,
    title: pick(item.title, locale),
    subtitle: pick(item.subtitle, locale),
    description: pick(item.description, locale),
    features: (item.features || []).map((feature: any) =>
      pick(feature.feature, locale)
    ),
    link: `/servicii/${item.slug || item.id}`,
    tone:
      item.slug === "optifare"
        ? "accent"
        : item.slug === "ifleet"
        ? "primary"
        : "success"
  }));
}

export async function getPage(slug: string, locale = defaultLocale) {
  const data = await fetchJSON(
    `/api/pages?where[slug][equals]=${slug}&limit=1&locale=${locale}`
  );
  const item = data?.docs?.[0];
  if (!item) return null;

  return {
    title: pick(item.title, locale),
    summary: pick(item.summary, locale),
    body: pick(item.body, locale)
  };
}

export async function getSolutions(locale = defaultLocale) {
  const data = await fetchJSON(`/api/industries?limit=100&locale=${locale}`);
  const items = data?.docs || [];
  if (!items.length) return solutionsContent;

  return items.map((item: any) => ({
    id: item.slug || item.id,
    slug: item.slug || item.id,
    title: pick(item.title, locale),
    description: pick(item.description, locale),
    benefits: (item.benefits || []).map((benefit: any) => pick(benefit.benefit, locale))
  }));
}

export async function getSolutionBySlug(slug: string, locale = defaultLocale) {
  const data = await fetchJSON(
    `/api/industries?where[slug][equals]=${slug}&limit=1&locale=${locale}`
  );
  const item = data?.docs?.[0];
  if (!item) {
    return solutionsContent.find((entry) => entry.slug === slug) || null;
  }

  return {
    id: item.slug || item.id,
    slug: item.slug || item.id,
    title: pick(item.title, locale),
    description: pick(item.description, locale),
    benefits: (item.benefits || []).map((benefit: any) => pick(benefit.benefit, locale))
  };
}

export async function getArticles(locale = defaultLocale) {
  const data = await fetchJSON(`/api/articles?limit=100&sort=-publishedAt&locale=${locale}`);
  const items = data?.docs || [];
  if (!items.length) return articlesContent;

  return items.map((item: any) => ({
    id: item.id,
    title: pick(item.title, locale),
    excerpt: pick(item.excerpt, locale),
    publishedAt: item.publishedAt,
    slug: item.slug,
    content: item.content || [],
    author: item.author || "RADCOM Team",
    tags: (item.categories || []).map((c: any) => c.category || c),
    image: item.coverImage
  }));
}

export async function getArticleBySlug(slug: string, locale = defaultLocale) {
  const data = await fetchJSON(
    `/api/articles?where[slug][equals]=${slug}&limit=1&locale=${locale}`
  );
  const item = data?.docs?.[0];
  if (!item) return articlesContent.find((entry) => entry.slug === slug) || null;

  return {
    id: item.id,
    title: pick(item.title, locale),
    excerpt: pick(item.excerpt, locale),
    publishedAt: item.publishedAt,
    slug: item.slug,
    content: item.content || [],
    author: item.author || "RADCOM Team",
    tags: (item.categories || []).map((c: any) => c.category || c),
    image: item.coverImage
  };
}

export async function getJobs(locale = defaultLocale) {
  const data = await fetchJSON(`/api/jobs?limit=100&locale=${locale}`);
  const items = data?.docs || [];
  if (!items.length) return [];

  return items.map((item: any) => ({
    id: item.id,
    title: pick(item.title, locale),
    department: item.department,
    location: item.location,
    type: item.type,
    description: pick(item.description, locale)
  }));
}

export async function getPartners() {
  const data = await fetchJSON(`/api/partners?limit=100&sort=order`);
  const items = data?.docs || [];
  if (!items.length) return partnersContent;

  const fallbackByName = new Map(
    partnersContent.map((partner) => [partner.name.toLowerCase(), partner])
  );

  return items.map((item: any, index: number) => {
    const fallback =
      fallbackByName.get(String(item.name || "").toLowerCase()) ||
      partnersContent[index % partnersContent.length];
    return {
      id: item.id,
      name: item.name || fallback?.name,
      logo: item.logo || fallback?.logo,
      order: item.order ?? index + 1
    };
  });
}

export async function getSettings() {
  const data = await fetchJSON(`/api/globals/settings`);
  if (!data) return null;
  return {
    companyName: data.companyName,
    email: data.email,
    phone: data.phone,
    address: data.address
  };
}
