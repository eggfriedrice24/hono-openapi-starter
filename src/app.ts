import { createRoute } from "@hono/zod-openapi"
import z from "zod"

import configureOpenAPI from "@/lib/configure-open-api"
import createApp from "@/lib/create-app"
import * as HttpStatusCodes from "@/lib/http-status-codes"
import index from "@/routes/index.route"
import tasks from "@/routes/tasks/tasks.index"

import { jsonContent } from "./openapi/helpers"

const app = createApp()

configureOpenAPI(app)

export const hello = createRoute({
  path: "/",
  method: "get",
  tags: ["hello"],
  responses: {
    [HttpStatusCodes.OK]: jsonContent(z.string(), "Hello Endpoint"),
  },
})

const _app = app.route("/", index).route("/", tasks)

export type AppType = typeof _app

export default app
