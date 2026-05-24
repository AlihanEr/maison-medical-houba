# Maison Médicale Houba — Next.js site

Site vitrine pour la Maison Médicale Houba (Laeken / De Wand) avec section carrières et tableau de bord admin pour gérer les offres d'emploi.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Auth démo par mot de passe (cookie httpOnly)
- Stockage offres : fichier JSON (`data/jobs.json`)
- Police : Fraunces (serif) + Manrope (sans-serif)
- Thème bleu inspiré du logo HOUBA

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000

## Accès admin (démo)

- URL : http://localhost:3000/admin/login
- Mot de passe : `houba2026` (modifiable via `ADMIN_PASSWORD` env var)

Une fois connecté, le tableau de bord (`/admin/dashboard`) permet de :
- Lister les offres
- Créer une nouvelle offre
- Éditer une offre
- Supprimer une offre

Les offres sont persistées dans `data/jobs.json` et apparaissent immédiatement sur la page publique `/jobs`.

## Structure

```
app/
  page.tsx                   # Homepage (hero animé, services, mission, etc.)
  jobs/page.tsx              # Liste des offres
  jobs/[id]/page.tsx         # Détail d'une offre
  admin/login/page.tsx       # Connexion
  admin/dashboard/           # Dashboard CRUD
  api/jobs/                  # API REST offres
  api/auth/                  # Login / logout
components/
  Nav.tsx, Footer.tsx, HeroAnimation.tsx
lib/
  jobs.ts                    # Store JSON
  auth.ts                    # Helpers cookie session
middleware.ts                # Protection /admin/*
data/
  jobs.json                  # Données seed
```

## Sécurité

Démo seulement. Pour la prod :
- Remplacer le mot de passe en dur par un vrai système d'auth (NextAuth, Clerk, etc.)
- Persister en base (Postgres, etc.) au lieu d'un fichier JSON (incompatible serverless)
- Hash + sel + brute-force protection sur le login

## Personnalisation

- Couleurs : variables CSS au début de `app/globals.css` (palette `--blue-*`)
- Animation hero : `components/HeroAnimation.tsx` (SVG inline)
- Contenu : `app/page.tsx`
