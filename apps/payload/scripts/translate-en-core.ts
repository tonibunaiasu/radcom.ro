import payload from 'payload'
import config from '../src/payload.config'

type PageData = { title: string; summary: string; body: string }

const homeEN = {
  hero: {
    title: 'Integrated hardware + software solutions',
    subtitle:
      'We deliver end‑to‑end IT&C services for Romanian industries, with fully integrated solutions tailored to business needs.',
    ctaPrimary: 'Explore services',
    ctaSecondary: 'Talk to us',
  },
  stats: [
    { value: 'Top 3', label: 'Romania’s top technology companies' },
    { value: 'IT&C', label: 'End‑to‑end services for local industries' },
    { value: '100%', label: 'Fully integrated client solutions' },
  ],
  industries: [
    {
      title: 'Transport',
      desc: 'End‑to‑end software and hardware for public transport operators.',
    },
    {
      title: 'Medical',
      desc: 'Electronic health record, patient portals, and lab/imaging integrations.',
    },
    {
      title: 'Telecom',
      desc: 'Voice, VoIP, SMS/MMS, USSD, SS7, contact center, IVR platforms.',
    },
    {
      title: 'Media & Mobile',
      desc: 'Mobile apps and multimedia content delivery platforms.',
    },
    {
      title: 'Internet',
      desc: 'E‑commerce, customer accounts, and identity management.',
    },
    {
      title: 'EU Programs',
      desc: 'EU funding consulting, opportunity mapping, and partnership support.',
    },
  ],
  infrastructure: [
    {
      title: 'Telecom networks',
      desc: 'Design, build, installation, and maintenance.',
    },
    {
      title: 'Electrical works',
      desc: 'Connections and electrical installations.',
    },
    {
      title: 'Fiber optic networks',
      desc: 'Design, deployment, preventive and corrective maintenance.',
    },
    {
      title: 'Civil construction',
      desc: 'Technological and residential construction.',
    },
    {
      title: 'Automation / SCADA',
      desc: 'Solutions for wastewater and potable water systems.',
    },
    {
      title: 'EU‑funded projects',
      desc: 'Delivered by the RADCOM Telecom Networks Division.',
    },
  ],
  advantages: [
    {
      title: 'Responsiveness',
      desc: 'Digital and physical products that adapt across all device types.',
    },
    {
      title: 'Customization',
      desc: 'Communication solutions tailored to each client’s operational flow.',
    },
    {
      title: 'UI essentials',
      desc: 'Focus on critical UI elements: input, output, and guidance.',
    },
    {
      title: 'Clean code',
      desc: 'Optimized readability of code and documentation for maximum efficiency.',
    },
  ],
  partners: {
    title: 'Partners',
    subtitle:
      'We partner with public and private organizations to deliver scalable technology solutions in Romania.',
  },
}

const servicesEN = {
  ifleet: {
    title: 'iFleet',
    subtitle: 'Extended Fleet Management',
    description:
      'Complete fleet management system for public transport. Includes automated passenger counting, CCTV monitoring, GPS tracking, and advanced reporting.',
    features: [
      'Full fleet management',
      'Automated passenger counting',
      'Real‑time video monitoring',
      'GPS tracking & vehicle monitoring',
      'Data reporting & analytics',
      'Integrated on‑board computer',
    ],
  },
  optifare: {
    title: 'OptiFare',
    subtitle: 'E‑Ticketing System',
    description:
      'Advanced public transport e‑ticketing. Mifare validation, contactless payments, NFC support, and a passenger‑friendly interface.',
    features: [
      'Mifare smart card validation',
      'Visa & Mastercard payments',
      'Apple Pay / Google Pay support',
      'Payment confirmation receipts',
      'Passenger interactive interface',
      'Rugged anti‑vandal validators',
    ],
  },
  exact: {
    title: 'eXact',
    subtitle: 'Real‑time Route Planning',
    description:
      'Intelligent passenger information system with real‑time journey planning, LED displays, and audio announcements.',
    features: [
      'Real‑time route planning',
      'Visual and audio information',
      'Indoor / outdoor LED displays',
      'Estimated arrival times',
      'Automated voice announcements',
      'Line connections and transfers',
    ],
  },
}

const industriesEN = {
  transport: {
    title: 'Transport',
    description:
      'Complete public transport stack: ticketing, fleet management, and passenger information.',
    benefits: [
      'Real‑time monitoring',
      'Cost and route optimization',
      'Improved passenger experience',
    ],
  },
  medical: {
    title: 'Medical',
    description:
      'Electronic health record, patient portal, and medical analytics integrations.',
    benefits: ['Secure digital workflows', 'Imaging integrations', 'Fast data access'],
  },
  telecom: {
    title: 'Telecom',
    description:
      'Platforms for voice, VoIP, SMS/MMS, USSD, SS7 and contact centers.',
    benefits: ['Scalable infrastructure', 'Integrations with existing services', 'High availability'],
  },
  'media-mobile': {
    title: 'Media & Mobile',
    description: 'Mobile apps and multimedia content delivery platforms.',
    benefits: ['Modern digital experiences', 'Efficient content distribution', 'Analytics & monitoring'],
  },
  internet: {
    title: 'Internet',
    description:
      'Integrated solutions for e‑commerce, customer accounts, and identity management.',
    benefits: ['Optimized sales flows', 'Security and SSO', 'Omnichannel experience'],
  },
}

const pagesEN: Record<string, PageData> = {
  compania: {
    title: 'RADCOM Company',
    summary: 'One of Romania’s top technology companies.',
    body: [
      'RADCOM is one of Romania’s leading technology companies, delivering integrated hardware and software solutions for critical industries.',
      'With deep IT&C expertise, we design and implement platforms for fleet management, e‑ticketing, passenger information, telecom and infrastructure.',
      'Our mission is to deliver fully integrated solutions that meet business needs with quality, reliability, and continuous innovation.',
    ].join('\n\n'),
  },
  'compania-despre': {
    title: 'About RADCOM',
    summary: 'Integrated technology solutions for public transport and beyond.',
    body: [
      'We build scalable systems that connect hardware, software, and operations into a single reliable ecosystem.',
      'From public transport ITS to telecom and infrastructure, RADCOM delivers end‑to‑end platforms built for real‑world reliability.',
      'We partner with operators and institutions to modernize services through data‑driven decision‑making.',
    ].join('\n\n'),
  },
  'compania-echipa': {
    title: 'RADCOM Team',
    summary: 'Experienced professionals across software, hardware, and operations.',
    body: [
      'Our team combines software engineers, systems architects, hardware specialists, and field technicians.',
      'We work alongside public transport operators to design, deploy, and maintain mission‑critical systems.',
      'A multidisciplinary approach keeps our solutions reliable, secure, and future‑ready.',
    ].join('\n\n'),
  },
  'compania-certificari': {
    title: 'Certifications & Awards',
    summary: 'Standards and partnerships that validate quality.',
    body: [
      'ISO 9001:2015 — Quality Management System certification.',
      'ISO 27001:2013 — Information Security Management certification.',
      'Top 3 IT Companies in Romania — Recognition for excellence.',
      'Microsoft Gold Partner — Top‑tier partnership.',
    ].join('\n\n'),
  },
  cariere: {
    title: 'Careers at RADCOM',
    summary: 'Build the future of public transport technology with us.',
    body: [
      'We offer a collaborative environment, complex projects, and room to grow.',
      'Join a multidisciplinary team shaping mobility services across Romania.',
    ].join('\n\n'),
  },
  articole: {
    title: 'Articles & Insights',
    summary: 'Updates, analysis, and case studies from transport technology.',
    body: 'Editorial content will be published continuously as new projects launch.',
  },
  contact: {
    title: 'Contact us',
    summary: 'Let’s discuss your project and objectives.',
    body: 'Send us a message and we’ll get back quickly with a tailored proposal.',
  },
  premii: {
    title: 'Awards & Certifications',
    summary: 'Recognition for quality and partnerships.',
    body: [
      'ISO 9001:2015 — Quality Management System certification.',
      'ISO 27001:2013 — Information Security Management certification.',
      'Top 3 IT Companies in Romania — Recognition for excellence.',
      'Microsoft Gold Partner — Top‑tier partnership.',
    ].join('\n\n'),
  },
  recomandari: {
    title: 'Testimonials',
    summary: 'Feedback from clients and partners.',
    body: 'Client testimonials will be published soon.',
  },
}

async function run() {
  await payload.init({ config })

  await payload.updateGlobal({ slug: 'home', locale: 'en', data: homeEN })

  for (const [slug, data] of Object.entries(pagesEN)) {
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    const doc = existing?.docs?.[0]
    if (!doc) continue
    await payload.update({
      collection: 'pages',
      id: doc.id,
      locale: 'en',
      data,
    })
  }

  for (const [slug, data] of Object.entries(servicesEN)) {
    const existing = await payload.find({
      collection: 'services',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    const doc = existing?.docs?.[0]
    if (!doc) continue
    await payload.update({
      collection: 'services',
      id: doc.id,
      locale: 'en',
      data: {
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        features: data.features.map((feature) => ({ feature })),
      },
    })
  }

  for (const [slug, data] of Object.entries(industriesEN)) {
    const existing = await payload.find({
      collection: 'industries',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    const doc = existing?.docs?.[0]
    if (!doc) continue
    await payload.update({
      collection: 'industries',
      id: doc.id,
      locale: 'en',
      data: {
        title: data.title,
        description: data.description,
        benefits: data.benefits.map((benefit) => ({ benefit })),
      },
    })
  }

  const jobs = await payload.find({ collection: 'jobs', limit: 20 })
  for (const job of jobs.docs) {
    await payload.update({
      collection: 'jobs',
      id: job.id,
      locale: 'en',
      data: {
        title: 'Systems Engineer',
        description: 'Work on public transport projects and systems integration.',
      },
    })
  }

  console.log('Updated EN marketing copy for core pages.')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
