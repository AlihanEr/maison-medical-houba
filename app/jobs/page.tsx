import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { listJobs } from "@/lib/jobs";

export const dynamic = "force-dynamic";

export default async function JobsPage() {
  const jobs = await listJobs();
  return (
    <>
      <Nav />
      <header className="jobs-hero">
        <div className="container">
          <span className="eyebrow">Carrières</span>
          <h1>Travaillez avec <em>nous</em>.</h1>
          <p>
            Rejoignez une équipe pluridisciplinaire qui place l'humain au cœur des soins. Cadre lumineux, atmosphère solidaire, autonomie soutenue.
          </p>
        </div>
      </header>

      <section style={{ padding: "20px 0 80px" }}>
        <div className="container">
          {jobs.length === 0 ? (
            <div className="empty-state">
              <h3>Aucune offre actuellement</h3>
              <p>Revenez bientôt — ou contactez-nous spontanément à jobmmhouba@gmail.com</p>
              <a href="mailto:jobmmhouba@gmail.com" className="btn btn-primary">Candidature spontanée</a>
            </div>
          ) : (
            <div className="jobs-grid">
              {jobs.map((j) => (
                <Link key={j.id} href={`/jobs/${j.id}`} className="job-card">
                  <div className="job-meta">
                    <span className="tag tag-type">{j.type}</span>
                    <span className="tag tag-location">📍 {j.location}</span>
                  </div>
                  <h3>{j.title}</h3>
                  <p>{j.summary}</p>
                  <span className="more">Voir l'offre →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
