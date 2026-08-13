import type { MiddlewareHandler } from "hono";

const MAX_BODY_SIZE = 10_000;

export const requestLimit: MiddlewareHandler = async (c, next) => {
  const contentLength = c.req.header("Content-Length");

  if (contentLength && Number(contentLength) > MAX_BODY_SIZE) {
    return c.json(
      {
        success: false,
        message: "Request body is too large",
      },
      413,
    );
  }
  await next();
};
