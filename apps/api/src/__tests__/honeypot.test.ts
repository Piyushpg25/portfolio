import { describe, expect, it } from "vitest";

import app from "../app";

describe("Contact API - Honeypot", () => {
  it("should reject requests when the honeypot field is filled", async () => {
    const response = await app.request("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Spam Bot",
        email: "bot@example.com",
        message: "This is a spam request from a bot.",
        website: "https://spam.example.com",
      }),
    });

    expect(response.status).toBe(400);

    const body = (await response.json()) as {
      success: boolean;
      message: string;
    };

    expect(body.success).toBe(false);
    expect(body.message).toBe("Invalid request.");
  });

  it("should allow requests when the honeypot field is empty", async () => {
    const response = await app.request("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Real User",
        email: "user@example.com",
        message: "I would like to discuss a project.",
        website: "",
      }),
    });

    expect(response.status).toBe(201);
  });
});