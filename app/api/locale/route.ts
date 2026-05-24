import { NextResponse } from "next/server";
import { LOCALE_COOKIE, LOCALES, type Locale } from "@/lib/i18n";

export async function POST(req: Request) {
  const { locale } = await req.json();
  if (!LOCALES.includes(locale as Locale)) {
    return NextResponse.json({ error: "invalid locale" }, { status: 400 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return res;
}
