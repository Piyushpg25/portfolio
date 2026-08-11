import { Hono } from "hono";
import { db } from "../db";
import { contacts } from "../db/schema";

const contactsRoute = new Hono();

contactsRoute.post("/", async (c) => {
  try {
    const body = await c.req.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return c.json(
        {
          success: false,
          message: "Name, email and message are required.",
        },
        400,
      );
    }

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
        message: "Message sent successfully",
        data: contact,
      },
      201,
    );
  } catch (error) {
    console.error("contact submission failed: ", error);

    return c.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      500,
    );
  }
});

export default contactsRoute;
