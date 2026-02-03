import payload from 'payload'
import config from '../src/payload.config'

const email = 'admin@radcom.ro'
const password = 'Radcom!2026'

async function run() {
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
    data: { email, password },
  })

  console.log(`Admin user created: ${email}`)
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
