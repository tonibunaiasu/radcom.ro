import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { payloadBetterAuth } from '@payload-auth/better-auth-plugin'
import { admin, twoFactor } from 'better-auth/plugins'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Services } from './collections/Services'
import { Industries } from './collections/Industries'
import { Articles } from './collections/Articles'
import { Partners } from './collections/Partners'
import { Jobs } from './collections/Jobs'
import { Settings } from './globals/Settings'
import { Home } from './globals/Home'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const isProduction = process.env.NODE_ENV === 'production'
const payloadServerURL = process.env.PAYLOAD_PUBLIC_SERVER_URL
const frontendURL = process.env.FRONTEND_URL || 'https://dezign.institute'
const baseURL =
  process.env.BETTER_AUTH_URL || payloadServerURL || (isProduction ? '' : 'http://localhost:3001')
const betterAuthSecret = process.env.BETTER_AUTH_SECRET
const googleClientId = process.env.GOOGLE_CLIENT_ID
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET
const socialProviders =
  googleClientId && googleClientSecret
    ? {
        google: {
          clientId: googleClientId,
          clientSecret: googleClientSecret,
        },
      }
    : undefined

const enableBetterAuth = process.env.ENABLE_BETTER_AUTH === 'true'

const requireEnv = (name: string) => {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

requireEnv('PAYLOAD_SECRET')
requireEnv('DATABASE_URL')

if (isProduction && !payloadServerURL) {
  throw new Error('PAYLOAD_PUBLIC_SERVER_URL is required in production')
}

if (enableBetterAuth) {
  requireEnv('BETTER_AUTH_SECRET')
}

const allowedOrigins = [
  payloadServerURL || 'https://cms.dezign.institute',
  frontendURL,
  'https://www.dezign.institute',
]

const betterAuthPlugin = enableBetterAuth && betterAuthSecret
  ? payloadBetterAuth({
      users: {
        adminRoles: ['admin'],
        roles: ['admin', 'editor'],
      },
      betterAuthOptions: {
        appName: 'RADCOM',
        baseURL,
        secret: betterAuthSecret,
        emailAndPassword: {
          enabled: true,
        },
        socialProviders,
        plugins: [admin(), twoFactor({ issuer: 'RADCOM' })],
      },
    })
  : null

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages, Services, Industries, Articles, Partners, Jobs],
  globals: [Settings, Home],
  localization: {
    locales: ['en', 'ro'],
    defaultLocale: 'en',
    fallback: true,
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL,
    },
  }),
  sharp,
  plugins: betterAuthPlugin ? [betterAuthPlugin] : [],
  serverURL: payloadServerURL || 'https://cms.dezign.institute',
  cors: allowedOrigins,
  csrf: allowedOrigins,
})
