import payload from 'payload'
import config from '../src/payload.config'
import {
  homeContent,
  servicesContent,
  solutionsContent,
  partnersContent,
  articlesContent,
} from '../../web/app/lib/content'
import { getPageFallback } from '../../web/app/lib/page-fallbacks'

const locales = ['en', 'ro'] as const

async function upsertBySlug(collection: string, slug: string, data: any, locale = 'en') {
  const existing = await payload.find({
    collection,
    where: { slug: { equals: slug } },
    limit: 1,
  })
  const doc = existing?.docs?.[0]
  if (doc) {
    return payload.update({ collection, id: doc.id, data, locale })
  }
  return payload.create({ collection, data, locale })
}

async function run() {
  await payload.init({ config })

  for (const locale of locales) {
    await payload.updateGlobal({
      slug: 'home',
      locale,
      data: {
        hero: {
          title: homeContent.hero.title,
          subtitle: homeContent.hero.subtitle,
          ctaPrimary: homeContent.hero.ctaPrimary,
          ctaSecondary: homeContent.hero.ctaSecondary,
        },
        stats: homeContent.stats.map((s) => ({ value: s.value, label: s.label })),
        industries: homeContent.industries.map((i) => ({ title: i.title, desc: i.desc })),
        infrastructure: homeContent.infrastructure.map((i) => ({ title: i.title, desc: i.desc })),
        advantages: homeContent.advantages.map((a) => ({ title: a.title, desc: a.desc })),
        partners: {
          title: homeContent.partners.title,
          subtitle: homeContent.partners.subtitle,
        },
      },
    })
  }

  await payload.updateGlobal({
    slug: 'settings',
    data: {
      companyName: 'RADCOM',
      email: 'office@radcom.ro',
      phone: '021 232 1039',
      address: 'Str. George Constantinescu nr. 2C, Etaj 5 & 6, București',
    },
  })

  const pageSlugs = [
    'compania',
    'compania-despre',
    'compania-echipa',
    'compania-certificari',
    'cariere',
    'articole',
    'contact',
    'politica-cookie',
    'politica-confidentialitate',
    'premii',
    'recomandari',
  ]

  for (const slug of pageSlugs) {
    const ro = getPageFallback(slug, 'ro')
    const en = getPageFallback(slug, 'en')
    const doc = await upsertBySlug(
      'pages',
      slug,
      {
        slug,
        title: en.title,
        summary: en.summary,
        body: en.body,
      },
      'en'
    )
    await payload.update({
      collection: 'pages',
      id: doc.id,
      locale: 'ro',
      data: {
        title: ro.title,
        summary: ro.summary,
        body: ro.body,
      },
    })
  }

  for (const service of servicesContent) {
    const doc = await upsertBySlug(
      'services',
      service.id,
      {
        slug: service.id,
        title: service.title,
        subtitle: service.subtitle,
        description: service.description,
        features: service.features.map((feature) => ({ feature })),
      },
      'en'
    )
    await payload.update({
      collection: 'services',
      id: doc.id,
      locale: 'ro',
      data: {
        title: service.title,
        subtitle: service.subtitle,
        description: service.description,
        features: service.features.map((feature) => ({ feature })),
      },
    })
  }

  for (const industry of solutionsContent) {
    const doc = await upsertBySlug(
      'industries',
      industry.slug,
      {
        slug: industry.slug,
        title: industry.title,
        description: industry.description,
        benefits: (industry.benefits || []).map((benefit) => ({ benefit })),
      },
      'en'
    )
    await payload.update({
      collection: 'industries',
      id: doc.id,
      locale: 'ro',
      data: {
        title: industry.title,
        description: industry.description,
        benefits: (industry.benefits || []).map((benefit) => ({ benefit })),
      },
    })
  }

  for (const [index, partner] of partnersContent.entries()) {
    const existing = await payload.find({
      collection: 'partners',
      where: { name: { equals: partner.name } },
      limit: 1,
    })
    if (existing?.docs?.[0]) {
      await payload.update({
        collection: 'partners',
        id: existing.docs[0].id,
        data: { order: index + 1 },
      })
      continue
    }
    await payload.create({
      collection: 'partners',
      data: {
        name: partner.name,
        order: index + 1,
      },
    })
  }

  for (const article of articlesContent) {
    const doc = await upsertBySlug(
      'articles',
      article.slug,
      {
        slug: article.slug,
        title: article.title,
        excerpt: article.excerpt,
        content: article.content,
        author: article.author || 'RADCOM Team',
        categories: (article.tags || []).map((tag) => ({ category: tag })),
        publishedAt: article.publishedAt,
      },
      'en'
    )
    await payload.update({
      collection: 'articles',
      id: doc.id,
      locale: 'ro',
      data: {
        title: article.title,
        excerpt: article.excerpt,
        content: article.content,
      },
    })
  }

  const jobsExisting = await payload.find({
    collection: 'jobs',
    where: { title: { equals: 'Systems Engineer' } },
    limit: 1,
  })
  if (!jobsExisting?.docs?.[0]) {
    const job = await payload.create({
      collection: 'jobs',
      locale: 'en',
      data: {
        title: 'Systems Engineer',
        department: 'IT',
        location: 'București',
        type: 'Full-time',
        description: 'Role in public transport projects and systems integration.',
      },
    })
    await payload.update({
      collection: 'jobs',
      id: job.id,
      locale: 'ro',
      data: {
        title: 'Inginer sisteme',
        description: 'Rol în proiecte de transport public și integrare sisteme.',
      },
    })
  }

  console.log('Payload seed complete')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
