import { StatusCode } from "hono/utils/http-status";

export type AppResponse<T=any, E=any[]> = {
    data: T;
    error: E;
}