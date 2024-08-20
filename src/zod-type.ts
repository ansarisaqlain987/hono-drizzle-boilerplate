import { z } from "zod";

export const AppResponseSchema = z.object({
  data: z.object({}).or(z.array(z.object({}))),
  error: z.array(z.object({})).nullable(),
});
