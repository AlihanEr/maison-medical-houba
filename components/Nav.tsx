import Link from "next/link";
import Logo from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";
import { getDict, getLocale } from "@/lib/i18n-server";

export default async function Nav() {
  const locale = await getLocale();
  const d = await getDict();
  return (
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
          <LocaleSwitcher current={locale} />
        </div>
      </div>
    </nav>
  );
}
