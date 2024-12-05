// This is an example of how to configure cors middleware

import { cors } from "hono/cors"

export const corsMiddleware = cors({
  origin: ["http://localhost:3000", "http://localhost:2222"],
  allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
})
