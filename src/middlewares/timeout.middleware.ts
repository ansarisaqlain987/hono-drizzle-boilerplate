import { HTTPException } from "hono/http-exception";
import { timeout } from "hono/timeout";

const timeout_limit = 60000;

const customTimeoutException = () =>
  new HTTPException(408, {
    message: `Request timeout after waiting ${
      timeout_limit % 1000
    } seconds. Please try again later.`,
  });

export const timeoutMiddleware = timeout(timeout_limit, customTimeoutException);
