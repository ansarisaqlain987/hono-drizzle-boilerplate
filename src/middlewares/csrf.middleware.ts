import { csrf } from "hono/csrf";
import { CsrfConfig } from "../config/csrf.config";

export const csrfMiddleware = csrf(CsrfConfig);
