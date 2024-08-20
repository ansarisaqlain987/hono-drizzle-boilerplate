export type AppResponse<T = unknown, E = unknown[]> = {
  data: T;
  error: E;
};
