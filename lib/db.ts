import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
if (!url) {
  throw new Error("DATABASE_URL (or POSTGRES_URL) is not set");
}

export const sql = neon(url);

let schemaReady: Promise<void> | null = null;

export function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS jobs (
          id            text PRIMARY KEY,
          title         text NOT NULL,
          type          text NOT NULL,
          location      text NOT NULL,
          summary       text NOT NULL,
          advantages    jsonb NOT NULL DEFAULT '[]'::jsonb,
          conditions    jsonb NOT NULL DEFAULT '[]'::jsonb,
          profile       jsonb NOT NULL DEFAULT '[]'::jsonb,
          contact_email text NOT NULL,
          contact_name  text NOT NULL,
          created_at    timestamptz NOT NULL DEFAULT now()
        )
      `;
      await sql`
        CREATE TABLE IF NOT EXISTS clinic_settings (
          id                integer PRIMARY KEY DEFAULT 1,
          address_line1     text NOT NULL,
          address_line2     text NOT NULL,
          hours_main        text NOT NULL,
          hours_note        text NOT NULL,
          phone_primary     text NOT NULL,
          phone_secondary   text NOT NULL,
          CONSTRAINT one_row CHECK (id = 1)
        )
      `;
    })();
  }
  return schemaReady;
}
