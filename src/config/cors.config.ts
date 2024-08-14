const getArrayFromString = (value: string | undefined) => {
    return  value?.split(',') ?? ['*'];
}

const OriginConfig = {
    origin: getArrayFromString(Bun.env.ALLOWED_ORIGINS),
    allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
}