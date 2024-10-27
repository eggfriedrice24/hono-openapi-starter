import type { z } from "@hono/zod-openapi"

// @ts-expect-error asda
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export type ZodSchema = z.ZodUnion | z.AnyZodObject | z.ZodArray<z.AnyZodObject>
