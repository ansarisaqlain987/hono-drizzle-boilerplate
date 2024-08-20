import { checkSecretOrThrowError } from "../lib/env.util";

export const JwtConfig = {
  secret: checkSecretOrThrowError("JWT_SECRET"),
};
