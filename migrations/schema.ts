import { sqliteTable, AnySQLiteColumn, uniqueIndex, text, numeric } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const author = sqliteTable("author", {
	id: text("id").primaryKey().notNull(),
	name: text("name").notNull(),
},
(table) => {
	return {
		idUnique: uniqueIndex("author_id_unique").on(table.id),
	}
});

export const quote = sqliteTable("quote", {
	id: text("id").primaryKey().notNull(),
	quote: text("quote").notNull(),
	authorId: text("author_id"),
},
(table) => {
	return {
		idUnique: uniqueIndex("quote_id_unique").on(table.id),
	}
});

export const drizzleMigrations = sqliteTable("__drizzle_migrations", {
	id: numeric("id").primaryKey(),
	hash: text("hash").notNull(),
	createdAt: numeric("created_at"),
});