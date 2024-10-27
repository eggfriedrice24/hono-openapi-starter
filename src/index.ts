import { serve } from "@hono/node-server"

import app from "./lib/create-app"
import env from '@/env'

const port = env?.PORT ?? 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})
