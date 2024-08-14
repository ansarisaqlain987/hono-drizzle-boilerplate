import { zValidator } from '@hono/zod-validator'

export const zodValidator = (schema: any) => zValidator('json', schema, (result, c) => {
    if (!result.success) {
        return c.json({
            data: null,
            error: result?.error
        }, 400);
    }
})