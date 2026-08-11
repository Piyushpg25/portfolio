import { describe, expect, it } from "vitest";

import app from "../app";

describe("Contacts API", () => {
  it("should reject request when name is missing", async () => {
    const response = await app.request("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "piyush@example.com",
        message: "I want to discuss a project.",
      }),
    });

    expect(response.status).toBe(400);

    const body = await response.json();

    expect(body.success).toBe(false);
    expect(body.message).toBe("Invalid request data.");
  });

  it("should reject invalid email", async () => {
    const response = await app.request("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Piyush",
        email: "wrong-email",
        message: "I want to discuss a project.",
      }),
    });

    expect(response.status).toBe(400);

    const body = await response.json();

    expect(body.success).toBe(false);
  });

  it("should reject short message", async () => {
    const response = await app.request("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Piyush",
        email: "piyush@example.com",
        message: "Hi",
      }),
    });

    expect(response.status).toBe(400);

    const body = await response.json();

    expect(body.success).toBe(false);
  });
});