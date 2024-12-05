import { db } from "@/db"

import { tasks, type NewTask } from "../schema"

const tasksToSeed: NewTask[] = [
  {
    code: "TASK-001",
    title: "Fix login issue",
    status: "todo",
    label: "bug",
    priority: "high",
    archived: false,
  },
  {
    code: "TASK-002",
    title: "Add new feature to dashboard",
    status: "in-progress",
    label: "feature",
    priority: "medium",
    archived: false,
  },
  {
    code: "TASK-003",
    title: "Update documentation for API",
    status: "todo",
    label: "documentation",
    priority: "low",
    archived: false,
  },
  {
    code: "TASK-004",
    title: "Enhance performance of data queries",
    status: "todo",
    label: "enhancement",
    priority: "high",
    archived: false,
  },
  {
    code: "TASK-005",
    title: "Resolve UI bug on mobile devices",
    status: "in-progress",
    label: "bug",
    priority: "high",
    archived: false,
  },
  {
    code: "TASK-006",
    title: "Conduct user feedback sessions",
    status: "done",
    label: "feature",
    priority: "medium",
    archived: false,
  },
  {
    code: "TASK-007",
    title: "Prepare release notes for next version",
    status: "done",
    label: "documentation",
    priority: "low",
    archived: false,
  },
  {
    code: "TASK-008",
    title: "Improve logging mechanism",
    status: "canceled",
    label: "enhancement",
    priority: "low",
    archived: false,
  },
]

export async function seedTasks() {
  try {
    console.log("📝 Seeding tasks:", tasksToSeed.length)

    await db.insert(tasks).values(tasksToSeed)

    console.log("✅ Tasks seeded successfully!")
  } catch (err) {
    console.error("❌ Error seeding tasks:", err)
  }
}
