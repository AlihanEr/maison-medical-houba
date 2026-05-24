import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <div className="brand-mark" style={{ background: "linear-gradient(135deg,#84b6ff,#2266e0)" }}>H</div>
              <div className="brand-text">
                <strong style={{ color: "#fff" }}>Maison Médicale Houba</strong>
                <span style={{ color: "#84b6ff" }}>De Wand · Laeken</span>
              </div>
            </Link>
            <p style={{ marginTop: 18, maxWidth: 320, fontSize: 14, lineHeight: 1.6 }}>
              Une asbl ancrée dans le quartier Mutsaard – De Wand, au service d'une médecine globale, équitable et solidaire.
            </p>
          </div>
          <div>
            <h4>Nous trouver</h4>
            <ul>
              <li>48 Avenue de la Brise</li>
              <li>1020 Laeken, Bruxelles</li>
              <li style={{ marginTop: 14, color: "#b6d4ff" }}>Bientôt à Wemmel</li>
            </ul>
          </div>
          <div>
            <h4>Pages</h4>
            <ul>
              <li><Link href="/jobs">Carrières</Link></li>
              <li><Link href="/#services">Soins</Link></li>
              <li><Link href="/#mission">Mission</Link></li>
              <li><Link href="/admin/login">Espace admin</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>02 270 37 44</li>
              <li>0488 866 405</li>
              <li>Lun – Ven · 9h – 18h</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Maison Médicale Houba De Wand asbl</span>
          <span>Conçu avec ♥ à Laeken</span>
        </div>
      </div>
    </footer>
  );
}
