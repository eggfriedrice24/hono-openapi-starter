import { type Config } from "drizzle-kit"

import env from "@/env"

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env?.DATABASE_URL ?? "",
  },
  tablesFilter: ["hono-openapi_*"],
} satisfies Config
