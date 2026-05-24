"use client";

import { useState } from "react";
import type { ClinicSettings } from "@/lib/settings";

export default function SettingsPanel({ initial }: { initial: ClinicSettings }) {
  const [form, setForm] = useState<ClinicSettings>(initial);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [error, setError] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);

  function set<K extends keyof ClinicSettings>(key: K, value: ClinicSettings[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setDirty(true);
    setStatus("idle");
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setStatus("idle");
    setError(null);
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Échec de la mise à jour");
        setStatus("err");
        return;
      }
      const updated = (await res.json()) as ClinicSettings;
      setForm(updated);
      setStatus("ok");
      setDirty(false);
    } catch {
      setError("Erreur réseau");
      setStatus("err");
    } finally {
      setSaving(false);
    }
  }

  function reset() {
    setForm(initial);
    setDirty(false);
    setStatus("idle");
    setError(null);
  }

  return (
    <form onSubmit={save} className="job-section settings-panel">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <div>
          <h2 style={{ marginBottom: 4 }}>Informations cliniques</h2>
          <p style={{ color: "rgba(10,26,53,0.6)", fontSize: 14 }}>
            Ces informations apparaissent dans l'en-tête, le hero, le pied de page et les pages publiques.
          </p>
        </div>
        {status === "ok" && (
          <span className="status-pill ok">✓ Mis à jour</span>
        )}
      </div>

      <fieldset className="fset">
        <legend>📍 Adresse</legend>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div className="form-field">
            <label>Ligne 1 (rue)</label>
            <input value={form.addressLine1} onChange={(e) => set("addressLine1", e.target.value)} placeholder="48 Avenue de la Brise" />
          </div>
          <div className="form-field">
            <label>Ligne 2 (ville / quartier)</label>
            <input value={form.addressLine2} onChange={(e) => set("addressLine2", e.target.value)} placeholder="1020 Laeken · Quartier Mutsaard – De Wand" />
          </div>
        </div>
      </fieldset>

      <fieldset className="fset">
        <legend>🕐 Horaires d'ouverture</legend>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div className="form-field">
            <label>Horaires principaux</label>
            <input value={form.hoursMain} onChange={(e) => set("hoursMain", e.target.value)} placeholder="Lundi → Vendredi · 9h – 18h" />
          </div>
          <div className="form-field">
            <label>Note (pause / fermeture)</label>
            <input value={form.hoursNote} onChange={(e) => set("hoursNote", e.target.value)} placeholder="Accueil fermé de 13h à 14h" />
          </div>
        </div>
      </fieldset>

      <fieldset className="fset">
        <legend>☎ Téléphones</legend>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div className="form-field">
            <label>Téléphone principal</label>
            <input value={form.phonePrimary} onChange={(e) => set("phonePrimary", e.target.value)} placeholder="02 270 37 44" />
          </div>
          <div className="form-field">
            <label>Téléphone secondaire</label>
            <input value={form.phoneSecondary} onChange={(e) => set("phoneSecondary", e.target.value)} placeholder="0488 866 405" />
          </div>
        </div>
      </fieldset>

      {error && <div className="form-error">{error}</div>}

      <div className="form-actions" style={{ marginTop: 24 }}>
        <button type="submit" className="btn btn-primary" disabled={!dirty || saving}>
          {saving ? "Enregistrement…" : "Enregistrer les modifications"}
        </button>
        <button type="button" className="btn btn-ghost" onClick={reset} disabled={!dirty || saving}>
          Annuler
        </button>
      </div>
    </form>
  );
}
