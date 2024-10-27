import { createRoute } from "@hono/zod-openapi"
import z from "zod"

import createApp, { createRouter } from "@/lib/create-app"
import * as HttpStatusCodes from "@/lib/http-status-codes"

import { jsonContent } from "./openapi/helpers"

const app = createApp()


export const hello = createRoute({
  path: "/",
  method: "get",
  tags: ["hello"],
  responses: {
    [HttpStatusCodes.OK]: jsonContent(z.string(), "Hello Endpoint"),
  },
})

 const _app = app.route(
  "/",
  createRouter().openapi(hello, (c) => {
    return c.text("hello")
  })
)

export type AppType = typeof _app

export default app
