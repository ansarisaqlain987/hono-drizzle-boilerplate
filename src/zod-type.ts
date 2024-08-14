import {z} from 'zod'

export const AppResponseSchema = z.object({
    data: z.record(z.string(), z.unknown()),
    error: z.array(z.record(z.string(), z.unknown()))
})