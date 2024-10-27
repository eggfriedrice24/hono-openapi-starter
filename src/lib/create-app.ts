import { notFound, onError, serveEmojiFavicon } from "@/middlewares"
import { defaultHook } from "@/openapi"
import { OpenAPIHono } from "@hono/zod-openapi"

import { pinoLogger } from "@/middlewares/pino-logger"

import type { AppBindings, AppOpenAPI } from "./types"

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  })
}

export default function createApp() {
  const app = createRouter()
  app.use(serveEmojiFavicon("📝"))
  app.use(pinoLogger())

  app.notFound(notFound)
  app.onError(onError)
  return app
}

export function createTestApp<R extends AppOpenAPI>(router: R) {
  return createApp().route("/", router)
}
