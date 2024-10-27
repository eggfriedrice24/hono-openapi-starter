import { serve } from "@hono/node-server"

import app from "./lib/create-app"

const port = 2222
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})
