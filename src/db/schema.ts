import { sql } from "drizzle-orm"
import { boolean, pgTable, timestamp, varchar } from "drizzle-orm/pg-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"

export const tasks = pgTable("tasks", {
  id: varchar("id", { length: 255 })
    .$defaultFn(() => crypto.randomUUID())
    .primaryKey(),
  title: varchar("title", { length: 256 }),
  done: boolean("done"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`current_timestamp`)
    .$onUpdate(() => new Date()),
})

export const selectTasksSchema = createSelectSchema(tasks)

export const insertTasksSchema = createInsertSchema(tasks, {
  title: (schema) => schema.title.min(1).max(500),
})
  .required({
    done: true,
  })
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  })

export const patchTasksSchema = insertTasksSchema.partial()
