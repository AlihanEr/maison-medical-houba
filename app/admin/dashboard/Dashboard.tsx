"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Job } from "@/lib/jobs";

type FormState = {
  title: string;
  type: string;
  location: string;
  summary: string;
  advantages: string;
  conditions: string;
  profile: string;
  contactEmail: string;
  contactName: string;
};

const EMPTY_FORM: FormState = {
  title: "",
  type: "Temps plein",
  location: "Laeken (1020)",
  summary: "",
  advantages: "",
  conditions: "",
  profile: "",
  contactEmail: "jobmmhouba@gmail.com",
  contactName: "HOUBA Ismaïl",
};

export default function Dashboard({ initialJobs }: { initialJobs: Job[] }) {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  function toForm(job: Job): FormState {
    return {
      title: job.title,
      type: job.type,
      location: job.location,
      summary: job.summary,
      advantages: job.advantages.join("\n"),
      conditions: job.conditions.join("\n"),
      profile: job.profile.join("\n"),
      contactEmail: job.contactEmail,
      contactName: job.contactName,
    };
  }

  function startNew() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setError(null);
    setShowForm(true);
  }

  function startEdit(job: Job) {
    setEditingId(job.id);
    setForm(toForm(job));
    setError(null);
    setShowForm(true);
  }

  function cancel() {
    setShowForm(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
    setError(null);
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    const payload = {
      title: form.title,
      type: form.type,
      location: form.location,
      summary: form.summary,
      advantages: form.advantages,
      conditions: form.conditions,
      profile: form.profile,
      contactEmail: form.contactEmail,
      contactName: form.contactName,
    };

    try {
      const res = await fetch(editingId ? `/api/jobs/${editingId}` : "/api/jobs", {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Erreur lors de la sauvegarde");
        setSaving(false);
        return;
      }
      const fresh = await fetch("/api/jobs").then((r) => r.json());
      setJobs(fresh);
      cancel();
    } catch {
      setError("Erreur réseau");
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: string) {
    if (!confirm("Supprimer cette offre ?")) return;
    const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
    if (res.ok) {
      setJobs((all) => all.filter((j) => j.id !== id));
    }
  }

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <div className="brand">
          <div className="brand-mark">H</div>
          <div className="brand-text">
            <strong>Admin · Houba</strong>
            <span>Tableau de bord</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Link href="/" className="btn btn-ghost" style={{ padding: "8px 16px", fontSize: 13 }}>
            ← Voir le site
          </Link>
          <button onClick={logout} className="btn btn-ghost" style={{ padding: "8px 16px", fontSize: 13 }}>
            Déconnexion
          </button>
        </div>
      </header>

      <div className="admin-container">
        <div className="admin-header-row">
          <div>
            <h2>Offres d'emploi</h2>
            <p style={{ color: "rgba(10,26,53,0.6)", marginTop: 4 }}>
              {jobs.length} offre{jobs.length > 1 ? "s" : ""} publiée{jobs.length > 1 ? "s" : ""}
            </p>
          </div>
          {!showForm && (
            <button onClick={startNew} className="btn btn-primary">
              + Nouvelle offre
            </button>
          )}
        </div>

        {showForm && (
          <form onSubmit={save} className="job-section" style={{ marginBottom: 28 }}>
            <h2 style={{ marginBottom: 24 }}>{editingId ? "Modifier l'offre" : "Nouvelle offre"}</h2>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 16 }}>
              <div className="form-field">
                <label>Intitulé</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                  placeholder="Ex: Médecin généraliste"
                />
              </div>
              <div className="form-field">
                <label>Type</label>
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                  <option>Temps plein</option>
                  <option>Temps partiel</option>
                  <option>Stage</option>
                  <option>Indépendant</option>
                </select>
              </div>
              <div className="form-field">
                <label>Lieu</label>
                <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
              </div>
            </div>

            <div className="form-field">
              <label>Résumé court</label>
              <textarea
                value={form.summary}
                onChange={(e) => setForm({ ...form, summary: e.target.value })}
                required
                placeholder="Quelques lignes qui décrivent le poste"
              />
            </div>

            <div className="form-field">
              <label>Avantages (une par ligne)</label>
              <textarea
                rows={6}
                value={form.advantages}
                onChange={(e) => setForm({ ...form, advantages: e.target.value })}
                placeholder={"Salaire fixe et chèques-repas\nÉquipe motivante\n..."}
              />
            </div>

            <div className="form-field">
              <label>Conditions (une par ligne)</label>
              <textarea
                rows={4}
                value={form.conditions}
                onChange={(e) => setForm({ ...form, conditions: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label>Profil recherché (une par ligne)</label>
              <textarea
                rows={6}
                value={form.profile}
                onChange={(e) => setForm({ ...form, profile: e.target.value })}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div className="form-field">
                <label>Email de contact</label>
                <input
                  type="email"
                  value={form.contactEmail}
                  onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
                />
              </div>
              <div className="form-field">
                <label>Personne de contact</label>
                <input
                  value={form.contactName}
                  onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                />
              </div>
            </div>

            {error && <div className="form-error">{error}</div>}

            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={saving}>
                {saving ? "Enregistrement…" : editingId ? "Mettre à jour" : "Publier l'offre"}
              </button>
              <button type="button" onClick={cancel} className="btn btn-ghost">
                Annuler
              </button>
            </div>
          </form>
        )}

        {jobs.length === 0 ? (
          <div className="empty-state">
            <h3>Aucune offre publiée</h3>
            <p>Créez votre première offre pour qu'elle s'affiche sur le site.</p>
            <button onClick={startNew} className="btn btn-primary">+ Nouvelle offre</button>
          </div>
        ) : (
          <div className="admin-jobs-table">
            <div className="row head">
              <div>Titre</div>
              <div>Type</div>
              <div>Lieu</div>
              <div style={{ textAlign: "right" }}>Actions</div>
            </div>
            {jobs.map((j) => (
              <div key={j.id} className="row">
                <div>
                  <div className="title">{j.title}</div>
                  <div style={{ fontSize: 12, color: "rgba(10,26,53,0.5)", marginTop: 2 }}>
                    Publié le {new Date(j.createdAt).toLocaleDateString("fr-BE")}
                  </div>
                </div>
                <div>
                  <span className="tag tag-type">{j.type}</span>
                </div>
                <div style={{ fontSize: 13, color: "rgba(10,26,53,0.7)" }}>{j.location}</div>
                <div className="actions">
                  <Link href={`/jobs/${j.id}`} target="_blank" className="btn-edit" style={{ display: "inline-block", textDecoration: "none" }}>
                    Voir
                  </Link>
                  <button onClick={() => startEdit(j)} className="btn-edit">Éditer</button>
                  <button onClick={() => remove(j.id)} className="btn-del">Supprimer</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
