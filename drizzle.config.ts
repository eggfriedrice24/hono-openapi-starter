import env from "@/env"
import { type Config } from "drizzle-kit"

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env?.DATABASE_URL ?? "",
  },
  tablesFilter: ["hono-openapi_*"],
} satisfies Config
