import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroAnimation from "@/components/HeroAnimation";

const services = [
  {
    title: "Médecine générale",
    desc: "Consultations, suivi des maladies chroniques, prévention et orientation vers les spécialistes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
  },
  {
    title: "Kinésithérapie",
    desc: "Rééducation, douleurs musculaires et articulaires, séances respiratoires sur prescription médicale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
        <path d="M14 21v-3.5l2-2.5L18 12l-2-4" />
        <path d="M10 21l-1-5-3-2 4-5 3 2" />
      </svg>
    ),
  },
  {
    title: "Soins infirmiers",
    desc: "Pansements, injections, prises de sang, suivi diabète — à la maison médicale ou à domicile.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="10" rx="2" />
        <path d="M12 7v10M7 12h10" />
      </svg>
    ),
  },
  {
    title: "Conseil social",
    desc: "Accompagnement administratif, mutuelle, CPAS, aide aux démarches avec notre conseillère sociale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Prévention & santé",
    desc: "Vaccinations, dépistages, conseils nutritionnels, soutien au sevrage tabagique et santé mentale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.5a5.5 5.5 0 0 1 9.5-3.8A5.5 5.5 0 0 1 20 10.5C20 17.5 12 22 12 22z" />
      </svg>
    ),
  },
  {
    title: "Activités communautaires",
    desc: "Natation, futsal, tennis de table — la santé passe aussi par le mouvement et le lien social.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2c2.5 3 3.5 6.5 3.5 10s-1 7-3.5 10c-2.5-3-3.5-6.5-3.5-10s1-7 3.5-10z" />
      </svg>
    ),
  },
];

const testimonials = [
  { name: "Ana Bel", initial: "A", role: "Patiente", quote: "Accueillant, médecin, kiné et infirmier sont tous d'une grande gentillesse." },
  { name: "Jean-Pierre", initial: "J", role: "Patient", quote: "La meilleure maison médicale à Bruxelles. Gentillesse et professionnalisme au top." },
  { name: "Zaid", initial: "Z", role: "Patient", quote: "Équipe médicale au top, le service est parfait. Je recommande sans hésiter." },
];

export default function Home() {
  return (
    <>
      <div className="banner">
        Nouveauté — <strong>Une nouvelle antenne ouvre prochainement à Wemmel</strong>, Avenue de Limburgstirum 116
      </div>
      <Nav />

      <header className="hero">
        <div className="hero-bg" />
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">Maison Médicale agréée · ASBL</span>
            <h1>
              Une santé <em>globale</em>,<br />
              humaine et de proximité.
            </h1>
            <p className="hero-lead">
              Médecins généralistes, kinésithérapeutes, infirmières et conseillère sociale — réunis sous un même toit pour vous offrir une prise en charge complète, dans un esprit d'équité et de solidarité.
            </p>
            <div className="hero-actions">
              <Link href="/#contact" className="btn btn-primary">S'inscrire à la maison médicale</Link>
              <Link href="/#services" className="btn btn-ghost">Découvrir nos soins</Link>
            </div>
          </div>
          <HeroAnimation />
        </div>
      </header>

      <section className="stats" style={{ padding: "0 0 80px" }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat"><div className="stat-num">14<em>+</em></div><div className="stat-label">Langues parlées</div></div>
            <div className="stat"><div className="stat-num">5</div><div className="stat-label">Métiers du soin</div></div>
            <div className="stat"><div className="stat-num">2</div><div className="stat-label">Antennes en 2026</div></div>
            <div className="stat"><div className="stat-num">100<em>%</em></div><div className="stat-label">Forfait conventionné</div></div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Nos soins</span>
            <h2>Une équipe <em>pluridisciplinaire</em> sous un même toit.</h2>
            <p>Médecine générale, kinésithérapie, soins infirmiers et accompagnement social — coordonnés pour suivre l'ensemble de votre santé.</p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <article key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mission" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="mission">
            <div>
              <span className="eyebrow">Notre engagement</span>
              <h2>Vous offrir une <em>prise en charge globale</em> de votre santé.</h2>
              <p>
                Depuis sa fondation, la Maison Médicale Houba défend une médecine accessible, ancrée dans le quartier Mutsaard – De Wand. Notre approche repose sur l'écoute, la coordination des soins, et le respect de l'autonomie de chaque patient.
              </p>
              <p>
                Une bonne santé ne se résume pas à l'absence de maladie : elle se construit avec le temps, en lien avec son cadre de vie.
              </p>
              <ul className="values-list">
                <li>Justice sociale</li>
                <li>Équité</li>
                <li>Solidarité</li>
                <li>Citoyenneté</li>
                <li>Respect de l'autonomie</li>
                <li>Soins coordonnés</li>
              </ul>
            </div>
            <div className="quote-block">
              <p>
                La santé est un droit, pas un privilège — et chaque patient mérite d'être écouté, accompagné, respecté.
              </p>
              <div className="author">Ismaïl Houba · Directeur</div>
            </div>
          </div>
        </div>
      </section>

      <section id="equipe" style={{ paddingTop: 60 }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">L'équipe</span>
            <h2>Des soignants <em>engagés</em>, à vos côtés.</h2>
            <p>Une équipe stable et accessible, qui apprend à vous connaître au fil des consultations.</p>
          </div>
          <div className="services-grid">
            <article className="service-card"><div className="service-icon">👨‍⚕️</div><h3>Médecins généralistes</h3><p>Consultations & suivi long terme</p></article>
            <article className="service-card"><div className="service-icon">🤸</div><h3>Kinésithérapeutes</h3><p>Rééducation et thérapies manuelles</p></article>
            <article className="service-card"><div className="service-icon">👩‍⚕️</div><h3>Infirmières</h3><p>Soins à la maison médicale et à domicile</p></article>
            <article className="service-card"><div className="service-icon">🤝</div><h3>Conseillère sociale</h3><p>Accompagnement administratif et social</p></article>
            <article className="service-card"><div className="service-icon">🪪</div><h3>Accueil</h3><p>Premier contact, prise de rendez-vous</p></article>
            <article className="service-card"><div className="service-icon">⚙️</div><h3>Coordination</h3><p>Direction Ismaïl Houba · adjoint·e de coordination</p></article>
          </div>
        </div>
      </section>

      <section id="temoignages" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="testimonials">
            <div className="section-header" style={{ marginBottom: 40 }}>
              <span className="eyebrow">Témoignages</span>
              <h2>Ce que disent <em>nos patients</em>.</h2>
            </div>
            <div className="quotes-grid">
              {testimonials.map((t) => (
                <article key={t.name} className="quote">
                  <div className="stars">★★★★★</div>
                  <p>{t.quote}</p>
                  <div className="quote-author">
                    <div className="quote-avatar">{t.initial}</div>
                    <div>
                      <div className="quote-name">{t.name}</div>
                      <div className="quote-role">{t.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="cta-section">
            <span className="eyebrow">Inscription</span>
            <h2>Rejoignez la <em>Maison Médicale</em>.</h2>
            <p>Pour vous inscrire, prévoyez votre <strong>carte d'identité</strong> et <strong>deux vignettes de mutuelle</strong>. L'inscription est gratuite et sans engagement.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+3222703744" className="btn btn-primary">Appeler maintenant →</a>
              <Link href="/jobs" className="btn btn-ghost">Voir nos offres d'emploi</Link>
            </div>
            <div className="phone-display">
              <small>Prise de rendez-vous</small>
              02 270 37 44 · 0488 866 405
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
