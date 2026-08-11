import { Hono } from "hono";

import { db } from "../db";
import { contacts } from "../db/schema";
import { errorResponse, successResponse } from "../lib/api-response";
import { contactSchema } from "../validators/contact";

const contactsRoute = new Hono();

contactsRoute.post("/", async (c) => {
  const body = await c.req.json();

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return c.json(
      errorResponse(
        "Invalid request data.",
        result.error.flatten().fieldErrors,
      ),
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
    successResponse(
      contact,
      "Message sent successfully.",
    ),
    201,
  );
});

export default contactsRoute;