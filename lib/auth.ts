import { cookies } from "next/headers";

export const COOKIE_NAME = "mmh-admin";
export const DEMO_PASSWORD = process.env.ADMIN_PASSWORD || "houba2026";
export const SESSION_TOKEN = "demo-session-ok";

export async function isAuthed(): Promise<boolean> {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value === SESSION_TOKEN;
}
