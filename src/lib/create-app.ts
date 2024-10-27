import { pinoLogger } from "@/middlewares/pino-logger"
import { Hono } from "hono"

const app = new Hono()

app.use(pinoLogger())

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

export default app
