import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { listJobs } from "@/lib/jobs";
import { getDict } from "@/lib/i18n-server";

export const dynamic = "force-dynamic";

export default async function JobsPage() {
  const jobs = await listJobs();
  const d = await getDict();
  return (
    <>
      <Nav />
      <header className="jobs-hero">
        <div className="container">
          <span className="eyebrow">{d.jobs.eyebrow}</span>
          <h1>{d.jobs.titleA}<em>{d.jobs.titleAccent}</em>.</h1>
          <p>{d.jobs.lead}</p>
        </div>
      </header>

      <section style={{ padding: "20px 0 80px" }}>
        <div className="container">
          {jobs.length === 0 ? (
            <div className="empty-state">
              <h3>{d.jobs.empty.title}</h3>
              <p>{d.jobs.empty.desc}</p>
              <a href="mailto:jobmmhouba@gmail.com" className="btn btn-primary">{d.jobs.empty.cta}</a>
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
                  <span className="more">{d.jobs.more}</span>
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
