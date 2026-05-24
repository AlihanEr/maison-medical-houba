import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroAnimation from "@/components/HeroAnimation";
import { getDict } from "@/lib/i18n-server";

const teamEmojis = ["👨‍⚕️", "🤸", "👩‍⚕️", "🤝", "🪪", "⚙️"];
const testimonialInitials = ["A", "J", "Z"];

function ServiceIcon({ idx }: { idx: number }) {
  const set = [
    // medicine
    <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>,
    // physio
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
      <path d="M14 21v-3.5l2-2.5L18 12l-2-4" />
      <path d="M10 21l-1-5-3-2 4-5 3 2" />
    </svg>,
    // nursing
    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="10" rx="2" />
      <path d="M12 7v10M7 12h10" />
    </svg>,
    // social
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>,
    // prevention
    <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s-8-4.5-8-11.5a5.5 5.5 0 0 1 9.5-3.8A5.5 5.5 0 0 1 20 10.5C20 17.5 12 22 12 22z" />
    </svg>,
    // community
    <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2c2.5 3 3.5 6.5 3.5 10s-1 7-3.5 10c-2.5-3-3.5-6.5-3.5-10s1-7 3.5-10z" />
    </svg>,
  ];
  return set[idx % set.length];
}

export default async function Home() {
  const d = await getDict();

  return (
    <>
      <div className="banner">
        {d.banner} <strong>{d.bannerStrong}</strong>
      </div>
      <Nav />

      <header className="hero">
        <div className="hero-bg" />
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">{d.hero.eyebrow}</span>
            <h1>
              {d.hero.titleA}
              <em>{d.hero.titleAccent}</em>
              {d.hero.titleB}
            </h1>
            <p className="hero-lead">{d.hero.lead}</p>
            <div className="hero-actions">
              <Link href="/#contact" className="btn btn-primary">{d.hero.ctaPrimary}</Link>
              <Link href="/#services" className="btn btn-ghost">{d.hero.ctaGhost}</Link>
            </div>
          </div>
          <HeroAnimation />
        </div>

        <div className="container">
          <div className="practical-bar">
            <div className="pb-title">{d.practical.title}</div>
            <div className="pb-cell">
              <div className="pb-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="pb-label">{d.practical.addressLabel}</div>
                <div className="pb-value">{d.practical.addressValue}</div>
                <div className="pb-sub">{d.practical.addressSub}</div>
              </div>
            </div>
            <div className="pb-cell">
              <div className="pb-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <div className="pb-label">{d.practical.hoursLabel}</div>
                <div className="pb-value">{d.practical.hoursValue}</div>
                <div className="pb-sub">{d.practical.hoursSub}</div>
              </div>
            </div>
            <div className="pb-cell">
              <div className="pb-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="pb-label">{d.practical.phoneLabel}</div>
                <div className="pb-value">{d.practical.phoneValue}</div>
                <div className="pb-sub">· {d.practical.phoneAlt}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="stats" style={{ padding: "0 0 80px" }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat"><div className="stat-num">14<em>+</em></div><div className="stat-label">{d.stats.langs}</div></div>
            <div className="stat"><div className="stat-num">5</div><div className="stat-label">{d.stats.jobs}</div></div>
            <div className="stat"><div className="stat-num">2</div><div className="stat-label">{d.stats.branches}</div></div>
            <div className="stat"><div className="stat-num">100<em>%</em></div><div className="stat-label">{d.stats.conventioned}</div></div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{d.services.eyebrow}</span>
            <h2>{d.services.titleA}<em>{d.services.titleAccent}</em>{d.services.titleB}</h2>
            <p>{d.services.lead}</p>
          </div>
          <div className="services-grid">
            {d.services.items.map((s, i) => (
              <article key={s.title} className="service-card">
                <div className="service-icon"><ServiceIcon idx={i} /></div>
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
              <span className="eyebrow">{d.mission.eyebrow}</span>
              <h2>{d.mission.titleA}<em>{d.mission.titleAccent}</em>{d.mission.titleB}</h2>
              <p>{d.mission.p1}</p>
              <p>{d.mission.p2}</p>
              <ul className="values-list">
                {d.mission.values.map((v) => <li key={v}>{v}</li>)}
              </ul>
            </div>
            <div className="quote-block">
              <p>{d.mission.quote}</p>
              <div className="author">{d.mission.quoteAuthor}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="equipe-section" style={{ paddingTop: 60 }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{d.team.eyebrow}</span>
            <h2>{d.team.titleA}<em>{d.team.titleAccent}</em>{d.team.titleB}</h2>
            <p>{d.team.lead}</p>
          </div>
          <div className="services-grid">
            {d.team.items.map((t, i) => (
              <article key={t.title} className="service-card">
                <div className="service-icon" style={{ fontSize: 24, display: "grid", placeItems: "center" }}>{teamEmojis[i]}</div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="temoignages" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="testimonials">
            <div className="section-header" style={{ marginBottom: 40 }}>
              <span className="eyebrow">{d.testimonials.eyebrow}</span>
              <h2>{d.testimonials.titleA}<em>{d.testimonials.titleAccent}</em>.</h2>
            </div>
            <div className="quotes-grid">
              {d.testimonials.items.map((t, i) => (
                <article key={t.name} className="quote">
                  <div className="stars">★★★★★</div>
                  <p>{t.quote}</p>
                  <div className="quote-author">
                    <div className="quote-avatar">{testimonialInitials[i]}</div>
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
            <span className="eyebrow">{d.cta.eyebrow}</span>
            <h2>{d.cta.titleA}<em>{d.cta.titleAccent}</em>.</h2>
            <p>
              {d.cta.lead}<strong>{d.cta.leadStrong1}</strong> · <strong>{d.cta.leadStrong2}</strong>.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+3222703744" className="btn btn-primary">{d.cta.primary}</a>
              <Link href="/jobs" className="btn btn-ghost">{d.cta.ghost}</Link>
            </div>
            <div className="phone-display">
              <small>{d.cta.phoneCaption}</small>
              {d.practical.phoneValue} · {d.practical.phoneAlt}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
