import { Hono } from 'hono/tiny';
import { count } from 'drizzle-orm';
import { quote } from './data/schema';
import { createDbConnection } from './data';

export type Env = {
  TURSO_DATABASE_URL: string;
  TURSO_AUTH_TOKEN?: string;
};

const app = new Hono<{ Bindings: Env }>();

app.get('/random', async (c) => {
  const data = createDbConnection(c.env);

  const result = data.query.quote.findFirst({
    offset: Math.floor(
      Math.random() *
        (await data.select({ count: count() }).from(quote))[0].count
    ),
    with: { author: true },
  });
  if (!result) {
    return c.notFound();
  }
  return c.json(result);
});

export default app;
