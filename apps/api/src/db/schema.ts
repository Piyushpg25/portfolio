import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const projects = sqliteTable("projects", {
  id: integer("id").primaryKey({ autoIncrement: true }),

  title: text("title").notNull(),

  description: text("description").notNull(),

  url: text("url"),

  githubUrl: text("github_url"),

  createdAt: integer("created_at", {
    mode: "timestamp",
  }).notNull(),
});
