import type { Access, CollectionConfig } from 'payload'

const isAdmin: Access = ({ req }) => Boolean(req.user?.roles?.includes('admin'))
const allowPublicSignup = process.env.ALLOW_PUBLIC_SIGNUP === 'true'

const selfOnlyRead: Access = ({ req }) =>
  req.user
    ? {
        id: {
          equals: req.user.id,
        },
      }
    : false

const selfOnly: Access = ({ req, id }) => {
  if (!req.user || !id) {
    return false
  }
  return String(req.user.id) === String(id)
}

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    read: (args) => (isAdmin(args) ? true : selfOnlyRead(args)),
    create: ({ req }) => Boolean(req.user?.roles?.includes('admin')) || (allowPublicSignup && !req.user),
    update: (args) => (isAdmin(args) ? true : selfOnly(args)),
    delete: isAdmin,
  },
  fields: [
    // Email added by default
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      options: ['admin', 'editor', 'user'],
      defaultValue: ['user'],
      required: true,
      saveToJWT: true,
      access: {
        create: isAdmin,
        update: isAdmin,
      },
    },
  ],
}
