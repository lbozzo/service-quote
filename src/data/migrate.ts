// migrate.ts

import { config } from 'dotenv';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { data } from './index';

config({ path: '.dev.vars' });

const main = async () => {
  try {
    console.log('Running migrations');
    await migrate(data, { migrationsFolder: 'migrations' });
    console.log('Migration complete!');
  } catch (error) {
    console.error('Migration failed');
    console.error(error);
    process.exit(1);
  }
  process.exit(0);
};

main();
