import { AppResponseSchema } from "../zod-type";

export const RESPONSE_TYPE_JSON = {
  "application/json": {
    schema: AppResponseSchema,
  },
};
