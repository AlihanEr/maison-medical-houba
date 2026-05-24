import Link from "next/link";
import Logo from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";
import { getDict, getLocale } from "@/lib/i18n-server";

export default async function Nav() {
  const locale = await getLocale();
  const d = await getDict();
  return (
    <>
      <div className="util-bar">
        <div className="util-bar-inner">
          <div className="util-bar-left">
            <span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              02 270 37 44
            </span>
            <span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              Lun – Ven · 9h – 18h
            </span>
          </div>
          <LocaleSwitcher current={locale} />
        </div>
      </div>

      <nav className="topbar">
        <div className="nav-inner">
          <Link href="/" className="brand">
            <Logo size={44} />
            <div className="brand-text">
              <strong>Maison Médicale Houba</strong>
              <span>De Wand · Laeken</span>
            </div>
          </Link>
          <ul className="nav-links">
            <li><Link href="/#services">{d.nav.care}</Link></li>
            <li><Link href="/#mission">{d.nav.mission}</Link></li>
            <li><Link href="/#contact">{d.nav.registration}</Link></li>
            <li><Link href="/#contact">{d.nav.contact}</Link></li>
          </ul>
          <div className="nav-actions">
            <Link href="/jobs" className="btn btn-careers">
              {d.nav.careers}
              <span className="nav-badge">{d.nav.careersBadge}</span>
            </Link>
            <Link href="/#contact" className="btn btn-primary">{d.nav.cta}</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
