import Link from "next/link";
import Logo from "./Logo";
import { getDict } from "@/lib/i18n-server";
import { getSettings } from "@/lib/settings";

export default async function Footer() {
  const d = await getDict();
  const s = await getSettings();
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <Logo size={44} background="linear-gradient(180deg, #4d8df6, #1554c4)" />
              <div className="brand-text">
                <strong style={{ color: "#fff" }}>Maison Médicale Houba</strong>
                <span style={{ color: "#84b6ff" }}>De Wand · Laeken</span>
              </div>
            </Link>
            <p style={{ marginTop: 18, maxWidth: 320, fontSize: 14, lineHeight: 1.6 }}>
              {d.footer.tagline}
            </p>
          </div>
          <div>
            <h4>{d.footer.h1}</h4>
            <ul>
              <li>{s.addressLine1}</li>
              <li>{s.addressLine2}</li>
              <li style={{ marginTop: 14, color: "#b6d4ff" }}>{d.footer.soonWemmel}</li>
            </ul>
          </div>
          <div>
            <h4>{d.footer.h2}</h4>
            <ul>
              <li><Link href="/jobs">{d.footer.pages.careers}</Link></li>
              <li><Link href="/#services">{d.footer.pages.care}</Link></li>
              <li><Link href="/#mission">{d.footer.pages.mission}</Link></li>
              <li><Link href="/admin/login">{d.footer.pages.admin}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{d.footer.h3}</h4>
            <ul>
              <li>{s.phonePrimary}</li>
              <li>{s.phoneSecondary}</li>
              <li>{s.hoursMain}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{d.footer.bottomLeft}</span>
          <span>{d.footer.bottomRight}</span>
        </div>
      </div>
    </footer>
  );
}
