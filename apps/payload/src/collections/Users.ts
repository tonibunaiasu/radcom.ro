import type { Access, CollectionConfig } from 'payload'

const isAdmin: Access = ({ req }) => req.user?.role === 'admin'
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
    create: async ({ req }) => {
      if (req.user?.role === 'admin') return true
      if (allowPublicSignup && !req.user) return true
      const total = await req.payload.count({
        collection: 'users',
        where: {
          role: {
            equals: 'admin',
          },
        },
      })
      return total.totalDocs === 0
    },
    update: (args) => (isAdmin(args) ? true : selfOnly(args)),
    delete: isAdmin,
  },
  fields: [
    // Email added by default
  ],
}
