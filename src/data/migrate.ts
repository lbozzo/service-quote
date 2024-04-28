import { config } from 'dotenv';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { createDbConnection } from './index';
import { Env } from '..';

config({ path: '.dev.vars' });

const main = async () => {
  try {
    console.log('Running migrations');
    await migrate(createDbConnection(process.env as Env), {
      migrationsFolder: 'migrations',
    });
    console.log('Migration complete!');
  } catch (error) {
    console.error('Migration failed');
    console.error(error);
  }
  process.exit(1);
};

main();
