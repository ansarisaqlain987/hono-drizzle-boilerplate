import { parseArrayFromEnvironment, parseNumberFromEnvironment } from "../lib/env.util";

export const OriginConfig = {
    origin: parseArrayFromEnvironment(Bun.env.ALLOWED_ORIGINS, ['*']),
    allowHeaders: parseArrayFromEnvironment(Bun.env.ALLOWED_HEADERS, ['*']),
    allowMethods: parseArrayFromEnvironment(Bun.env.ALLOWED_METHODS, ['*']),
    exposeHeaders: parseArrayFromEnvironment(Bun.env.EXPOSED_HEADERS),
    maxAge: parseNumberFromEnvironment(Bun.env.EXPOSED_HEADERS, 600),
    credentials: true,
}