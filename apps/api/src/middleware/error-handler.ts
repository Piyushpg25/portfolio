import { Context } from "hono";

export function errorHandler(error: Error, c: Context) {
  console.error("[API Error]", error);

  return c.json(
    {
      success: false,
      error: {
        message: "Internal server error",
      },
    },
    500,
  );
}
