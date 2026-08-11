import {pgTable, uuid, varchar, text, timestamp} from 'drizzle-orm/pg-core';

export const contacts = pgTable("contacts", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: varchar("name", {
    length: 100,
  }).notNull(),

  email: varchar("email", {
    length: 255,

  }).notNull(),

  subject: varchar("subject", {
    length: 200,
  }),

  message: text("message").notNull(),

  createdAt: timestamp("created_at", {
    withTimezone: true,
  })

  .defaultNow()
  .notNull(),
})