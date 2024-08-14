import { zValidator } from '@hono/zod-validator'
import { ZodSchema } from 'zod';

export const zodValidator = (schema: ZodSchema) => zValidator('json', schema, (result, c) => {
    if (!result.success) {
        return c.json({
            data: null,
            error: result?.error
        }, 400);
    }
})