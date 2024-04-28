import { sql } from 'drizzle-orm';
import { text, sqliteTable } from 'drizzle-orm/sqlite-core';

export const foo = sqliteTable('foo', {
  bar: text('bar').notNull().default('Hey!'),
  baz: text('baz').notNull().default('Hello World!'),
});
