import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`users_roles\` ADD COLUMN \`parent_id\` integer;`)
  await db.run(sql`ALTER TABLE \`users_roles\` ADD COLUMN \`order\` integer;`)

  await db.run(
    sql`UPDATE \`users_roles\` SET \`parent_id\` = \`_parent_id\` WHERE \`parent_id\` IS NULL;`
  )
  await db.run(sql`UPDATE \`users_roles\` SET \`order\` = \`_order\` WHERE \`order\` IS NULL;`)

  await db.run(sql`CREATE INDEX IF NOT EXISTS \`users_roles_parent_id_idx\` ON \`users_roles\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX IF NOT EXISTS \`users_roles_order_idx\` ON \`users_roles\` (\`order\`);`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP INDEX IF EXISTS \`users_roles_parent_id_idx\`;`)
  await db.run(sql`DROP INDEX IF EXISTS \`users_roles_order_idx\`;`)
  // SQLite does not support dropping columns easily; leave columns in place.
}
