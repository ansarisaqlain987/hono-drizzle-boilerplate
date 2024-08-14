import { logger } from 'hono/logger'
import { requestId } from 'hono/request-id'
import { timing } from 'hono/timing'
import { OpenAPIHono } from '@hono/zod-openapi'
import { swaggerUI } from '@hono/swagger-ui'

import users from './routes/user'

// const app = new Hono()
const app = new OpenAPIHono()

app.use(timing())
app.use(requestId())
app.use(logger())

app.route('/user', users)

app.notFound((c) => {
  return c.json({
    data: null,
    error: 'NOT FOUND'
  }, 200)
})

app.get(
  '/ui',
  swaggerUI({
    url: '/doc'
  })
)

app.doc('/doc', {
  info: {
    title: 'API Boilerplate',
    version: 'v1'
  },
  openapi: '3.1.0'
})

export default app
