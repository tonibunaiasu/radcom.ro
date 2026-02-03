import type { CollectionConfig } from 'payload'

export const Jobs: CollectionConfig = {
  slug: 'jobs',
  labels: { singular: 'Job', plural: 'Jobs' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'location', 'type'] },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'department',
      type: 'text',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'type',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
  ],
}
