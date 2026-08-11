import type { ErrorHandler } from "hono";

import { errorResponse } from "../lib/api-response";

export const errorHandler: ErrorHandler = (error, c) => {
  console.log("API Error:", error);

  return c.json(errorResponse("Internal server error"), 500);
};
