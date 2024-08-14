import { csrf } from 'hono/csrf'

export const csrfMiddleware = csrf({
    origin: ['myapp.example.com', 'development.myapp.example.com'],
})