import Link from "next/link";

export default function Nav() {
  return (
    <nav className="topbar">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <div className="brand-mark">H</div>
          <div className="brand-text">
            <strong>Maison Médicale Houba</strong>
            <span>De Wand · Laeken</span>
          </div>
        </Link>
        <ul className="nav-links">
          <li><Link href="/#services">Soins</Link></li>
          <li><Link href="/#equipe">Équipe</Link></li>
          <li><Link href="/#mission">Mission</Link></li>
          <li><Link href="/jobs">Carrières</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
        <Link href="/#contact" className="btn btn-primary">Rendez-vous →</Link>
      </div>
    </nav>
  );
}
