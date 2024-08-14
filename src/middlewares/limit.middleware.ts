import { bodyLimit } from 'hono/body-limit'

export const bodyLimitMiddleware = bodyLimit({
    maxSize: 1024 * 1024,
    onError: (c) => {
        return c.json({
            error: ['Request body limit exceeded']
        }, 400);
    }
})