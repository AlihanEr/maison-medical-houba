"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") || "/admin/dashboard";
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Erreur de connexion");
        setLoading(false);
        return;
      }
      router.push(next);
      router.refresh();
    } catch {
      setError("Erreur réseau");
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-mark">H</div>
        <h1>Espace admin</h1>
        <p className="sub">Maison Médicale Houba — accès réservé.</p>

        <form onSubmit={submit}>
          <div className="form-field">
            <label htmlFor="pw">Mot de passe</label>
            <input
              id="pw"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
            />
            <p className="form-help">Démo : <code>houba2026</code></p>
          </div>

          {error && <div className="form-error">{error}</div>}

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: "100%" }}>
              {loading ? "Connexion…" : "Se connecter →"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
