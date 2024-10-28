import { z } from "@hono/zod-openapi"

const IdParamsSchema = z.object({
  id: z.string().openapi({
    param: {
      name: "id",
      in: "path",
    },
    required: ["id"],
    example: "62d46756-93f4-4e85-b6c6-81ce5a461acb",
  }),
})

export default IdParamsSchema
