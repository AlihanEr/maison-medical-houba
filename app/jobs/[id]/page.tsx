import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getJob } from "@/lib/jobs";
import { getDict } from "@/lib/i18n-server";

export const dynamic = "force-dynamic";

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = await getJob(id);
  if (!job) notFound();
  const d = await getDict();

  return (
    <>
      <Nav />
      <section className="job-detail">
        <div className="container">
          <Link href="/jobs" className="job-back">{d.jobDetail.back}</Link>

          <div className="job-header">
            <div className="job-meta">
              <span className="tag tag-type">{job.type}</span>
              <span className="tag tag-location">📍 {job.location}</span>
            </div>
            <h1>
              {d.jobDetail.titlePrefix}
              <em style={{ color: "#1554c4", fontStyle: "italic" }}>{job.title}</em>
            </h1>
            <p style={{ fontSize: 17, color: "rgba(10,26,53,0.7)" }}>{job.summary}</p>
          </div>

          {job.advantages.length > 0 && (
            <div className="job-section">
              <h2>{d.jobDetail.advantages}</h2>
              <ul>
                {job.advantages.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}

          {job.conditions.length > 0 && (
            <div className="job-section">
              <h2>{d.jobDetail.conditions}</h2>
              <ul>
                {job.conditions.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          )}

          {job.profile.length > 0 && (
            <div className="job-section">
              <h2>{d.jobDetail.profile}</h2>
              <ul>
                {job.profile.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          )}

          <div className="job-apply">
            <h3>{d.jobDetail.applyTitle}</h3>
            <p>{d.jobDetail.contactPerson} <strong>{job.contactName}</strong></p>
            <a href={`mailto:${job.contactEmail}?subject=Candidature — ${encodeURIComponent(job.title)}`}>
              ✉ {job.contactEmail}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
