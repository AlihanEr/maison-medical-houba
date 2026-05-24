"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

type Item = { href: string; label: string };

export default function MobileMenu({
  items,
  careersLabel,
  careersBadge,
  ctaLabel,
}: {
  items: Item[];
  careersLabel: string;
  careersBadge: string;
  ctaLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const panel = (
    <div
      className={`mobile-panel ${open ? "is-open" : ""}`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
    >
      <div className="mobile-panel-backdrop" onClick={() => setOpen(false)} />
      <nav className="mobile-panel-inner" aria-label="Menu mobile">
        <button
          type="button"
          className="mobile-panel-close"
          aria-label="Fermer le menu"
          onClick={() => setOpen(false)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <ul className="mobile-nav-list">
          {items.map((it) => (
            <li key={it.label}>
              <Link href={it.href} onClick={() => setOpen(false)}>
                {it.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/jobs" onClick={() => setOpen(false)} className="mobile-careers">
              {careersLabel}
              <span className="nav-badge">{careersBadge}</span>
            </Link>
          </li>
        </ul>
        <Link
          href="/#contact"
          onClick={() => setOpen(false)}
          className="btn btn-primary mobile-cta"
        >
          {ctaLabel}
        </Link>
      </nav>
    </div>
  );

  return (
    <>
      <button
        type="button"
        className="hamburger"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="mobile-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`hamburger-bars ${open ? "is-open" : ""}`}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {mounted && createPortal(panel, document.body)}
    </>
  );
}
