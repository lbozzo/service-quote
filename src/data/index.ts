import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/web';
import * as schema from './schema';
import { Env } from '..';

const turso = ({ TURSO_AUTH_TOKEN, TURSO_DATABASE_URL }: Env) =>
  createClient({
    url: TURSO_DATABASE_URL,
    authToken: TURSO_AUTH_TOKEN,
  });

export const createDbConnection = (env: Env) => drizzle(turso(env), { schema });
