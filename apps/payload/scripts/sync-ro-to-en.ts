import payload from 'payload'
import config from '../src/payload.config'

const collections = ['pages', 'services', 'industries', 'articles', 'jobs'] as const
const globals = ['home', 'settings'] as const

async function run() {
  await payload.init({ config })

  for (const slug of globals) {
    const ro = await payload.findGlobal({ slug, locale: 'ro' })
    await payload.updateGlobal({
      slug,
      locale: 'en',
      data: ro,
    })
  }

  for (const collection of collections) {
    const docs = await payload.find({ collection, limit: 200, locale: 'ro' })
    for (const doc of docs.docs) {
      await payload.update({
        collection,
        id: doc.id,
        locale: 'en',
        data: doc,
      })
    }
  }

  console.log('Synced RO content to EN')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
