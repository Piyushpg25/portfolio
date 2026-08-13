import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(
      2,
      "Name must be at least 2 characters",
    )
    .max(
      100,
      "Name must be less than 100 characters",
    ),

  email: z
    .string()
    .trim()
    .email(
      "Please provide a valid email address",
    )
    .max(
      255,
      "Email is too long",
    ),

  subject: z
    .string()
    .trim()
    .max(
      200,
      "Subject is too long",
    )
    .optional()
    .or(z.literal("")),

  message: z
    .string()
    .trim()
    .min(
      10,
      "Message must be at least 10 characters",
    )
    .max(
      5000,
      "Message is too long",
    ),
});

export type ContactInput =
  z.infer<typeof contactSchema>;