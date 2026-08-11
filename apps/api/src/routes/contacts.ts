import { Hono } from "hono";

import { db } from "../db";
import { contacts } from "../db/schema";
import { contactSchema } from "../validators/contact";

const contactsRoute = new Hono();

contactsRoute.post("/", async (c) => {
  try {
    const body = await c.req.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return c.json(
        {
          success: false,
          message: "Invalid request data.",
          errors: result.error.flatten().fieldErrors,
        },
        400,
      );
    }

    const { name, email, subject, message } = result.data;

    const [contact] = await db
      .insert(contacts)
      .values({
        name,
        email,
        subject: subject || null,
        message,
      })
      .returning();

    return c.json(
      {
        success: true,
        message: "Message sent successfully.",
        data: contact,
      },
      201,
    );
  } catch (error) {
    console.error("Contact submission failed:", error);

    return c.json(
      {
        success: false,
        message: "Internal server error.",
      },
      500,
    );
  }
});

export default contactsRoute;