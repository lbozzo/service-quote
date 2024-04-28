import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

export const quote = sqliteTable('quote', {
  id: integer('id').primaryKey({ autoIncrement: true }).unique(),
  quote: text('quote').notNull(),
  authorId: text('author_id'),
});

export const author = sqliteTable('author', {
  id: integer('id').primaryKey({ autoIncrement: true }).unique(),
  name: text('name').notNull(),
});

export const quoteRelations = relations(quote, ({ one }) => ({
  author: one(author, {
    fields: [quote.authorId],
    references: [author.id],
  }),
}));

export const authorRelations = relations(author, ({ many }) => ({
  quotes: many(quote),
}));
