import { z } from "@hono/zod-openapi"

import type { ZodSchema } from "../helpers/types.ts"

const createErrorSchema = <T extends ZodSchema>(schema: T) => {
  // eslint-disable-next-line
  const { error } = schema.safeParse(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    schema._def.typeName === z.ZodFirstPartyTypeKind.ZodArray ? [] : {}
  )
  return z.object({
    success: z.boolean().openapi({
      example: false,
    }),
    error: z
      .object({
        issues: z.array(
          z.object({
            code: z.string(),
            path: z.array(z.union([z.string(), z.number()])),
            message: z.string().optional(),
          })
        ),
        name: z.string(),
      })
      .openapi({
        // eslint-disable-next-line  @typescript-eslint/no-unsafe-assignment
        example: error,
      }),
  })
}

export default createErrorSchema
