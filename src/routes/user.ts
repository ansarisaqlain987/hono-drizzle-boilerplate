import { startTime, endTime } from 'hono/timing'
import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi'
import { AppResponseSchema } from '../zod-type'
import { RESPONSE_TYPE_JSON } from '../constants/app.constant'

const app = new OpenAPIHono()

app.openapi(
    createRoute({
      method: 'get',
      path: '/hello',
      responses: {
        200: {
          description: 'Success',
          content: RESPONSE_TYPE_JSON
        }
      }
    }),
    (c) => {
      return c.json({
        data: {},
        error: []
      })
    }
  )

export default app