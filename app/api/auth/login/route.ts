import { NextResponse } from "next/server";
import { COOKIE_NAME, DEMO_PASSWORD, SESSION_TOKEN } from "@/lib/auth";

export async function POST(req: Request) {
  const { password } = await req.json();
  if (password !== DEMO_PASSWORD) {
    return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, SESSION_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return res;
}
