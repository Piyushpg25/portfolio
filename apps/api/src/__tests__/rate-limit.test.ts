import { describe, expect, it } from "vitest";
import { Hono } from "hono";

import { contactRateLimit } from "../middleware/rate-limit";

describe("Contact API Rate Limit", () => {
  it("should block excessive requests", async () => {
    const testApp = new Hono();

    testApp.use("*", contactRateLimit);

    testApp.get("/", (c) => {
      return c.json({
        success: true,
      });
    });

    const responses: Response[] = [];

    for (let i = 0; i < 6; i++) {
      const response = await testApp.request("/");

      responses.push(response);
    }

    const lastResponse = responses.at(-1);

    expect(lastResponse).toBeDefined();
    expect(lastResponse!.status).toBe(429);
  });
});