import { startTime, endTime } from 'hono/timing'
import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi'
import { AppResponseSchema } from '../zod-type'
import { RESPONSE_TYPE_JSON } from '../constants/app.constant'
import { db } from '../db'
import { user } from '../db/schema'

const app = new OpenAPIHono()

app.openapi(
    createRoute({
      method: 'get',
      path: '/',
      responses: {
        200: {
          description: 'Success',
          content: RESPONSE_TYPE_JSON
        }
      }
    }),
    async (c) => {
      const userData = await db.select().from(user);
      return c.json({
        data: {
          "data": userData
        },
        error: []
      })
    }
  )

export default app