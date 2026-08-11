import { describe, expect, it } from "vitest";

import { contactSchema } from "../validators/contact";

describe("Contact validation", () => {
  it("should accept valid contact data", () => {
    const result = contactSchema.safeParse({
      name: "Piyush",
      email: "piyush@example.com",
      subject: "Portfolio",
      message: "I want to discuss a project.",
    });

    expect(result.success).toBe(true);
  });

  it("should reject invalid email", () => {
    const result = contactSchema.safeParse({
      name: "Piyush",
      email: "invalid-email",
      subject: "Portfolio",
      message: "I want to discuss a project.",
    });

    expect(result.success).toBe(false);
  });

  it("should reject a short message", () => {
    const result = contactSchema.safeParse({
      name: "Piyush",
      email: "piyush@example.com",
      subject: "Portfolio",
      message: "Hi",
    });

    expect(result.success).toBe(false);
  });

  it("should reject a short name", () => {
    const result = contactSchema.safeParse({
      name: "P",
      email: "piyush@example.com",
      message: "I want to discuss a project.",
    });

    expect(result.success).toBe(false);
  });
});