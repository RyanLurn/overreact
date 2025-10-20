import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const task = sqliteTable("task", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text().notNull(),
  completed: integer({ mode: "boolean" }).notNull().default(false),
});

export { task };
