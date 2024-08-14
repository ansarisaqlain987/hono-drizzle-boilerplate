import { cors } from 'hono/cors'
import { OriginConfig } from '../config/cors.config'

export const corsMiddleware = cors(OriginConfig)