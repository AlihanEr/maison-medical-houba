import Link from "next/link";
import Logo from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";
import MobileMenu from "./MobileMenu";
import { getDict, getLocale } from "@/lib/i18n-server";

export default async function Nav() {
  const locale = await getLocale();
  const d = await getDict();

  const items = [
    { href: "/#services", label: d.nav.care },
    { href: "/#mission",  label: d.nav.mission },
    { href: "/#contact",  label: d.nav.registration },
    { href: "/#contact",  label: d.nav.contact },
  ];

  return (
    <nav className="topbar">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <Logo size={42} />
          <div className="brand-text">
            <strong>Maison Médicale Houba</strong>
            <span>De Wand · Laeken</span>
          </div>
        </Link>

        <ul className="nav-links">
          {items.map((it) => (
            <li key={it.label}><Link href={it.href}>{it.label}</Link></li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link href="/jobs" className="btn btn-careers nav-only-desktop">
            {d.nav.careers}
            <span className="nav-badge">{d.nav.careersBadge}</span>
          </Link>
          <Link href="/#contact" className="btn btn-primary nav-only-desktop">{d.nav.cta}</Link>
          <LocaleSwitcher current={locale} />
          <MobileMenu
            items={items}
            careersLabel={d.nav.careers}
            careersBadge={d.nav.careersBadge}
            ctaLabel={d.nav.cta}
          />
        </div>
      </div>
    </nav>
  );
}
