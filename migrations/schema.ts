import { sqliteTable, AnySQLiteColumn, numeric, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const drizzleMigrations = sqliteTable("__drizzle_migrations", {
	id: numeric("id").primaryKey(),
	hash: text("hash").notNull(),
	createdAt: numeric("created_at"),
});

export const foo = sqliteTable("foo", {
	bar: text("bar").default("Hey!").notNull(),
	baz: text("baz").default("Hello World!").notNull(),
});