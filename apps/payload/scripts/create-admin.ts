import payload from 'payload'
import config from '../src/payload.config'

const email = process.env.ADMIN_EMAIL
const password = process.env.ADMIN_PASSWORD
const roles = process.env.ADMIN_ROLES?.split(',').map((role) => role.trim()).filter(Boolean) || [
  'admin',
]

async function run() {
  if (!email || !password) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD are required')
  }

  await payload.init({ config })

  const existing = await payload.find({
    collection: 'users',
    where: { email: { equals: email } },
    limit: 1,
  })

  if (existing?.docs?.[0]) {
    console.log(`Admin user already exists: ${email}`)
    process.exit(0)
  }

  await payload.create({
    collection: 'users',
    data: { email, password, roles },
  })

  console.log(`Admin user created: ${email}`)
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
