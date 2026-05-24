import { cookies } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_COOKIE, dictFor, type Locale } from "./i18n";

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const v = store.get(LOCALE_COOKIE)?.value;
  if (v === "fr" || v === "nl" || v === "en") return v;
  return DEFAULT_LOCALE;
}

export async function getDict() {
  return dictFor(await getLocale());
}
