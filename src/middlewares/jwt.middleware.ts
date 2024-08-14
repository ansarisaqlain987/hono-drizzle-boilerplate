import { jwt } from 'hono/jwt'

export const jwtMiddleware = jwt({
    secret: 'some-secret'
})