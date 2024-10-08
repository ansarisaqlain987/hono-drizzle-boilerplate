import { parseArrayFromEnvironment } from "../lib/env.util";

export const CsrfConfig = {
  origin: parseArrayFromEnvironment(Bun.env.CSRF_DOMAINS, ["*"]),
};
