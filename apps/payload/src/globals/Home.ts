import type { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Homepage',
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'subtitle', type: 'textarea', localized: true },
        { name: 'ctaPrimary', type: 'text', localized: true },
        { name: 'ctaSecondary', type: 'text', localized: true },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      fields: [
        { name: 'value', type: 'text' },
        { name: 'label', type: 'text', localized: true },
      ],
    },
    {
      name: 'industries',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'desc', type: 'textarea', localized: true },
      ],
    },
    {
      name: 'infrastructure',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'desc', type: 'textarea', localized: true },
      ],
    },
    {
      name: 'advantages',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'desc', type: 'textarea', localized: true },
      ],
    },
    {
      name: 'partners',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'subtitle', type: 'textarea', localized: true },
      ],
    },
  ],
}
