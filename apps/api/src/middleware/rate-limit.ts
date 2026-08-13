import { rateLimiter } from "hono-rate-limiter";

export const contactRateLimit = rateLimiter({
  windowMs: 60 * 1000,
  limit: 5,

  standardHeaders: "draft-6",

  keyGenerator: (c) => {
    return c.req.header("x-forwarded-for")?.split(",")[0]?.trim()
      ?? "unknown";
  },
});