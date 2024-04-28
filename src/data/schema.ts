import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { v4 } from 'uuid';

export const quote = sqliteTable('quote', {
  id: text('id').primaryKey().unique().$defaultFn(v4),
  quote: text('quote').notNull(),
  authorId: text('author_id'),
});

export const author = sqliteTable('author', {
  id: text('id').primaryKey().unique().$defaultFn(v4),
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
