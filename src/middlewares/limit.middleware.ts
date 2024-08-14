import { bodyLimit } from 'hono/body-limit'
import { parseNumberFromEnvironment } from '../lib/env.util';

export const bodyLimitMiddleware = bodyLimit({
    maxSize: parseNumberFromEnvironment(Bun.env.BODY_LIMIT, 50*1024),
    onError: (c) => {
        return c.json({
            error: ['Request body limit exceeded']
        }, 400);
    }
})