import { jwt } from "hono/jwt";
import { JwtConfig } from "../config/jwt.config";

export const jwtMiddleware = jwt(JwtConfig);
