import { getPayloadWithAuth } from '@payload-auth/better-auth-plugin'
import { toNextJsHandler } from 'better-auth/next-js'

import config from '../../../../../payload.config'

const getHandlers = async () => {
  const payload = await getPayloadWithAuth(config)
  return toNextJsHandler(payload.betterAuth)
}

export const GET = async (request: Request) => {
  const { GET } = await getHandlers()
  return GET(request)
}

export const POST = async (request: Request) => {
  const { POST } = await getHandlers()
  return POST(request)
}
