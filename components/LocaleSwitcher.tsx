"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LOCALES, LOCALE_LABELS, LOCALE_FLAGS, type Locale } from "@/lib/i18n";

export default function LocaleSwitcher({ current }: { current: Locale }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState<Locale | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  async function pick(locale: Locale) {
    if (locale === current) {
      setOpen(false);
      return;
    }
    setPending(locale);
    await fetch("/api/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale }),
    });
    setOpen(false);
    router.refresh();
    setTimeout(() => setPending(null), 600);
  }

  return (
    <div className="locale-switcher" ref={ref}>
      <button
        type="button"
        className="locale-btn"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="locale-flag">{LOCALE_FLAGS[current]}</span>
        <span className="locale-code">{current.toUpperCase()}</span>
        <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul className="locale-menu" role="listbox">
          {LOCALES.map((l) => (
            <li key={l}>
              <button
                type="button"
                className={`locale-option ${l === current ? "active" : ""}`}
                onClick={() => pick(l)}
                role="option"
                aria-selected={l === current}
                disabled={pending !== null}
              >
                <span className="locale-flag">{LOCALE_FLAGS[l]}</span>
                <span>{LOCALE_LABELS[l]}</span>
                {l === current && (
                  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" style={{ marginLeft: "auto" }}>
                    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
