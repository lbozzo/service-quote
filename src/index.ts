import { Hono } from 'hono/tiny';

const app = new Hono();

app.get('/random', (c) => {
  return c.text('Hello Hono!');
});

export default app;
