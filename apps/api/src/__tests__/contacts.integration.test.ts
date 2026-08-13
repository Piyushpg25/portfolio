import { describe, expect, it } from "vitest";

import app from "../app";
import { db } from "../db";
import { contacts } from "../db/schema";
import { eq } from "drizzle-orm";

interface SuccessResponse {
  success: boolean;
  data: {
    email: string;
  };
}

describe("Contacts API - Database Integration", () => {
  it("should create a contact in the database", async () => {
    const email = `test-${Date.now()}@example.com`;

    const response = await app.request("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Integration Test",
        email,
        subject: "Automated Test",
        message:
          "Testing database integration successfully.",
      }),
    });

    expect(response.status).toBe(201);

    const body =
      (await response.json()) as SuccessResponse;

    expect(body.success).toBe(true);
    expect(body.data.email).toBe(email);

    const rows = await db
      .select()
      .from(contacts);

    const createdContact = rows.find(
      (contact) => contact.email === email,
    );

    expect(createdContact).toBeDefined();
    expect(createdContact?.name).toBe(
      "Integration Test",
    );

    await db
      .delete(contacts)
      .where(eq(contacts.email, email));
  });
});