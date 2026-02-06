import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE IF NOT EXISTS \`users_roles\` (
    \`_order\` integer NOT NULL,
    \`_parent_id\` integer NOT NULL,
    \`id\` text PRIMARY KEY NOT NULL,
    \`value\` text NOT NULL,
    FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );`)

  await db.run(sql`CREATE INDEX IF NOT EXISTS \`users_roles_order_idx\` ON \`users_roles\` (\`_order\`);`)
  await db.run(
    sql`CREATE INDEX IF NOT EXISTS \`users_roles_parent_id_idx\` ON \`users_roles\` (\`_parent_id\`);`
  )
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE IF EXISTS \`users_roles\`;`)
}
