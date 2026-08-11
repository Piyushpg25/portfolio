import { Hono } from "hono";

const health = new Hono();

health.get("/", (c) => {
  return c.json({
    success: true,
    status: "ok",
  });
});

export default health;