import {
  defaultLocale,
  homeContent,
  homeContentByLocale,
  servicesContent,
  servicesContentByLocale,
  solutionsContent,
  partnersContent,
  articlesContent
} from "./content";

const baseURL =
  process.env.NEXT_PUBLIC_PAYLOAD_URL ||
  process.env.PAYLOAD_URL ||
  "http://localhost:3001";

const fetchJSON = async (path: string, init?: RequestInit) => {
  try {
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
  } catch {
    return null;
  }
};

const pick = (
  value: { ro?: string; en?: string } | string | undefined | null,
  locale: string
) => {
  if (typeof value === "string") return value;
  if (!value) return "";
  return value?.[locale as "ro" | "en"] || value?.ro || value?.en || "";
};

const pickLocaleOnly = (
  value: { ro?: string; en?: string } | string | undefined | null,
  locale: string
) => {
  if (typeof value === "string") return value;
  if (!value) return "";
  return value?.[locale as "ro" | "en"] || "";
};

const allowCrossLocaleFallback = ["1", "true", "yes"].includes(
  String(process.env.CROSS_LOCALE_FALLBACK || "").toLowerCase()
);

const pickLocalized = (
  value: { ro?: string; en?: string } | string | undefined | null,
  locale: string
) => (allowCrossLocaleFallback ? pick(value, locale) : pickLocaleOnly(value, locale));

const hasOtherLocaleValue = (
  value: { ro?: string; en?: string } | string | undefined | null,
  locale: string
) => {
  if (!value || typeof value === "string") return false;
  return locale === "en" ? Boolean(value.ro) : Boolean(value.en);
};

export async function getHomeContent(locale = defaultLocale) {
  const data = await fetchJSON(`/api/globals/home?locale=${locale}`);
  const fallbackByLocale =
    homeContentByLocale[locale as "ro" | "en"] || homeContent;
  if (!data) return fallbackByLocale;
  const fallback = fallbackByLocale;
  const missingCounts: Record<string, number> = {
    hero: 0,
    stats: 0,
    industries: 0,
    infrastructure: 0,
    advantages: 0,
    partners: 0
  };

  const result = {
    hero: {
      title: pickLocalized(data.hero?.title, locale) || fallback.hero.title,
      subtitle: pickLocalized(data.hero?.subtitle, locale) || fallback.hero.subtitle,
      ctaPrimary:
        pickLocalized(data.hero?.ctaPrimary, locale) || fallback.hero.ctaPrimary,
      ctaSecondary:
        pickLocalized(data.hero?.ctaSecondary, locale) || fallback.hero.ctaSecondary
    },
    stats: (data.stats && data.stats.length
      ? data.stats
      : fallback.stats
    ).map((item: any, index: number) => {
      const fallbackItem = fallback.stats[index];
      const label = pickLocalized(item.label, locale);
      if (!label && hasOtherLocaleValue(item.label, locale)) missingCounts.stats += 1;
      return {
        value: item.value ?? fallbackItem?.value,
        label: label || fallbackItem?.label || ""
      };
    }),
    industries: (data.industries && data.industries.length
      ? data.industries
      : fallback.industries
    ).map((item: any, index: number) => {
      const fallbackItem = fallback.industries[index];
      const title = pickLocalized(item.title, locale);
      const desc = pickLocalized(item.desc, locale);
      if ((!title && hasOtherLocaleValue(item.title, locale)) || (!desc && hasOtherLocaleValue(item.desc, locale))) {
        missingCounts.industries += 1;
      }
      return {
        title: title || fallbackItem?.title || "",
        desc: desc || fallbackItem?.desc || ""
      };
    }),
    infrastructure: (data.infrastructure && data.infrastructure.length
      ? data.infrastructure
      : fallback.infrastructure
    ).map((item: any, index: number) => {
      const fallbackItem = fallback.infrastructure[index];
      const title = pickLocalized(item.title, locale);
      const desc = pickLocalized(item.desc, locale);
      if ((!title && hasOtherLocaleValue(item.title, locale)) || (!desc && hasOtherLocaleValue(item.desc, locale))) {
        missingCounts.infrastructure += 1;
      }
      return {
        title: title || fallbackItem?.title || "",
        desc: desc || fallbackItem?.desc || ""
      };
    }),
    advantages: (data.advantages && data.advantages.length
      ? data.advantages
      : fallback.advantages
    ).map((item: any, index: number) => {
      const fallbackItem = fallback.advantages[index];
      const title = pickLocalized(item.title, locale);
      const desc = pickLocalized(item.desc, locale);
      if ((!title && hasOtherLocaleValue(item.title, locale)) || (!desc && hasOtherLocaleValue(item.desc, locale))) {
        missingCounts.advantages += 1;
      }
      return {
        title: title || fallbackItem?.title || "",
        desc: desc || fallbackItem?.desc || ""
      };
    }),
    partners: {
      title: pickLocalized(data.partners?.title, locale) || fallback.partners.title,
      subtitle:
        pickLocalized(data.partners?.subtitle, locale) || fallback.partners.subtitle
    }
  };

  if (!allowCrossLocaleFallback) {
    if (!pickLocaleOnly(data.hero?.title, locale) && hasOtherLocaleValue(data.hero?.title, locale)) missingCounts.hero += 1;
    if (!pickLocaleOnly(data.hero?.subtitle, locale) && hasOtherLocaleValue(data.hero?.subtitle, locale)) missingCounts.hero += 1;
    if (!pickLocaleOnly(data.hero?.ctaPrimary, locale) && hasOtherLocaleValue(data.hero?.ctaPrimary, locale)) missingCounts.hero += 1;
    if (!pickLocaleOnly(data.hero?.ctaSecondary, locale) && hasOtherLocaleValue(data.hero?.ctaSecondary, locale)) missingCounts.hero += 1;
    if (!pickLocaleOnly(data.partners?.title, locale) && hasOtherLocaleValue(data.partners?.title, locale)) missingCounts.partners += 1;
    if (!pickLocaleOnly(data.partners?.subtitle, locale) && hasOtherLocaleValue(data.partners?.subtitle, locale)) missingCounts.partners += 1;

    const totalMissing = Object.values(missingCounts).reduce((sum, value) => sum + value, 0);
    if (totalMissing > 0) {
      console.warn(
        `[content] Missing locale "${locale}" in CMS home content:`,
        JSON.stringify(missingCounts)
      );
    }
  }

  return result;
}

export async function getServices(locale = defaultLocale) {
  const data = await fetchJSON(`/api/services?limit=100&locale=${locale}`);
  const items = data?.docs || [];
  const fallbackByLocale =
    servicesContentByLocale[locale as "ro" | "en"] || servicesContent;
  if (!items.length) return fallbackByLocale;

  const fallbackById = new Map(
    fallbackByLocale.map((service) => [service.id, service])
  );

  const missingCounts: Record<string, number> = {
    title: 0,
    subtitle: 0,
    description: 0,
    features: 0
  };

  const services = items.map((item: any) => {
    const id = item.slug || item.id;
    const title = pickLocalized(item.title, locale);
    const subtitle = pickLocalized(item.subtitle, locale);
    const description = pickLocalized(item.description, locale);
    const featuresFromCms = (item.features || [])
      .map((feature: any) => pickLocalized(feature.feature, locale))
      .filter(Boolean);

    if (!allowCrossLocaleFallback) {
      if (!title && hasOtherLocaleValue(item.title, locale)) missingCounts.title += 1;
      if (!subtitle && hasOtherLocaleValue(item.subtitle, locale)) missingCounts.subtitle += 1;
      if (!description && hasOtherLocaleValue(item.description, locale)) missingCounts.description += 1;
      const hasOtherLocaleFeatures = (item.features || []).some((feature: any) =>
        hasOtherLocaleValue(feature.feature, locale)
      );
      if (!featuresFromCms.length && hasOtherLocaleFeatures) missingCounts.features += 1;
    }

    return {
      id,
      title: title || fallbackById.get(id)?.title || "",
      subtitle: subtitle || fallbackById.get(id)?.subtitle || "",
      description: description || fallbackById.get(id)?.description || "",
      features: featuresFromCms.length
        ? featuresFromCms
        : fallbackById.get(id)?.features || [],
      link: `/servicii/${id}`,
      tone:
        item.slug === "ifleet"
          ? "accent"
          : item.slug === "optifare"
          ? "success"
          : "primary"
    };
  });

  if (!allowCrossLocaleFallback) {
    const totalMissing = Object.values(missingCounts).reduce((sum, value) => sum + value, 0);
    if (totalMissing > 0) {
      console.warn(
        `[content] Missing locale "${locale}" in CMS services content:`,
        JSON.stringify(missingCounts)
      );
    }
  }

  return services;
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
