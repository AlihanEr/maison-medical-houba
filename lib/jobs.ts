import { sql, ensureSchema } from "./db";

export type Job = {
  id: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  advantages: string[];
  conditions: string[];
  profile: string[];
  contactEmail: string;
  contactName: string;
  createdAt: string;
};

type JobRow = {
  id: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  advantages: string[];
  conditions: string[];
  profile: string[];
  contact_email: string;
  contact_name: string;
  created_at: string | Date;
};

function rowToJob(r: JobRow): Job {
  return {
    id: r.id,
    title: r.title,
    type: r.type,
    location: r.location,
    summary: r.summary,
    advantages: r.advantages ?? [],
    conditions: r.conditions ?? [],
    profile: r.profile ?? [],
    contactEmail: r.contact_email,
    contactName: r.contact_name,
    createdAt: new Date(r.created_at).toISOString(),
  };
}

const SEED_JOB = {
  id: "infirmier-forfait-2026",
  title: "Infirmier / infirmière au forfait",
  type: "Temps partiel",
  location: "Laeken (1020)",
  summary:
    "Rejoignez notre équipe pluridisciplinaire pour un travail au forfait dans une atmosphère agréable, motivante et solidaire. Soins curatifs et préventifs en environnement multiculturel.",
  advantages: [
    "Salaire fixe, chèques-repas et intervention dans les frais de transport",
    "Autonomie et créativité soutenues",
    "Collaboration multidisciplinaire dans une atmosphère agréable avec une équipe motivante et motivée cherchant à soigner le patient dans sa globalité",
    "Cadre de travail lumineux et à taille humaine",
    "Horaires réguliers principalement",
    "Lieu de travail facilement accessible et proche des commerces",
    "Travail varié (curatif et préventif) dans un environnement à mixité sociale, multiculturel et multigénérationnel",
    "Contribution aux activités de santé communautaire",
  ],
  conditions: [
    "Travailler au forfait signifie ne pas exercer son activité professionnelle à l'acte",
    "Contrat à temps partiel",
    "Déplacements occasionnels pour certains soins à domicile",
  ],
  profile: [
    "Flexible et consciencieux·euse, vous collaborez avec l'équipe en vue d'assurer une permanence médicale nécessaire au bon fonctionnement de la maison médicale et des patients ; vous participez aux réunions d'équipe",
    "Minutieux·euse, vous effectuez les prises de sang sur les différentes tranches d'âges de la population ; vous réalisez les actes paramédicaux confiés par un médecin",
    "Polyvalent·e, vous assurez les tâches de l'accueil quand absence de soins infirmiers. Vous appliquez les procédures administratives propres aux maisons médicales",
    "Assertif·ve et diplomate, vous communiquez aisément avec les patients et l'équipe",
    "Organisé·e, vous gérez correctement votre timing tant au niveau des consultations qu'au niveau administratif. Vous aménagez le lieu de travail, veillez à la bonne logistique et l'entretien des équipements y afférents",
    "Atouts : vous bénéficiez d'une spécialisation en santé communautaire et/ou de compétences supplémentaires utiles aux activités d'une maison médicale",
  ],
  contactEmail: "jobmmhouba@gmail.com",
  contactName: "HOUBA Ismaïl",
};

async function seedIfEmpty() {
  const rows = (await sql`SELECT COUNT(*)::int AS n FROM jobs`) as { n: number }[];
  if (rows[0]?.n === 0) {
    await sql`
      INSERT INTO jobs (id, title, type, location, summary, advantages, conditions, profile, contact_email, contact_name)
      VALUES (
        ${SEED_JOB.id}, ${SEED_JOB.title}, ${SEED_JOB.type}, ${SEED_JOB.location},
        ${SEED_JOB.summary},
        ${JSON.stringify(SEED_JOB.advantages)}::jsonb,
        ${JSON.stringify(SEED_JOB.conditions)}::jsonb,
        ${JSON.stringify(SEED_JOB.profile)}::jsonb,
        ${SEED_JOB.contactEmail}, ${SEED_JOB.contactName}
      )
      ON CONFLICT (id) DO NOTHING
    `;
  }
}

export async function listJobs(): Promise<Job[]> {
  await ensureSchema();
  await seedIfEmpty();
  const rows = (await sql`
    SELECT id, title, type, location, summary, advantages, conditions, profile,
           contact_email, contact_name, created_at
    FROM jobs
    ORDER BY created_at DESC
  `) as JobRow[];
  return rows.map(rowToJob);
}

export async function getJob(id: string): Promise<Job | null> {
  await ensureSchema();
  const rows = (await sql`
    SELECT id, title, type, location, summary, advantages, conditions, profile,
           contact_email, contact_name, created_at
    FROM jobs WHERE id = ${id}
  `) as JobRow[];
  return rows.length ? rowToJob(rows[0]) : null;
}

function genId() {
  return (
    Math.random().toString(36).slice(2, 10) +
    Math.random().toString(36).slice(2, 10)
  );
}

export async function createJob(input: Omit<Job, "id" | "createdAt">): Promise<Job> {
  await ensureSchema();
  const id = genId();
  const rows = (await sql`
    INSERT INTO jobs (id, title, type, location, summary, advantages, conditions, profile, contact_email, contact_name)
    VALUES (
      ${id}, ${input.title}, ${input.type}, ${input.location}, ${input.summary},
      ${JSON.stringify(input.advantages)}::jsonb,
      ${JSON.stringify(input.conditions)}::jsonb,
      ${JSON.stringify(input.profile)}::jsonb,
      ${input.contactEmail}, ${input.contactName}
    )
    RETURNING id, title, type, location, summary, advantages, conditions, profile,
              contact_email, contact_name, created_at
  `) as JobRow[];
  return rowToJob(rows[0]);
}

export async function updateJob(
  id: string,
  patch: Partial<Omit<Job, "id" | "createdAt">>
): Promise<Job | null> {
  await ensureSchema();
  const existing = await getJob(id);
  if (!existing) return null;
  const merged = { ...existing, ...patch };
  const rows = (await sql`
    UPDATE jobs SET
      title = ${merged.title},
      type = ${merged.type},
      location = ${merged.location},
      summary = ${merged.summary},
      advantages = ${JSON.stringify(merged.advantages)}::jsonb,
      conditions = ${JSON.stringify(merged.conditions)}::jsonb,
      profile = ${JSON.stringify(merged.profile)}::jsonb,
      contact_email = ${merged.contactEmail},
      contact_name = ${merged.contactName}
    WHERE id = ${id}
    RETURNING id, title, type, location, summary, advantages, conditions, profile,
              contact_email, contact_name, created_at
  `) as JobRow[];
  return rows.length ? rowToJob(rows[0]) : null;
}

export async function deleteJob(id: string): Promise<boolean> {
  await ensureSchema();
  const rows = (await sql`DELETE FROM jobs WHERE id = ${id} RETURNING id`) as { id: string }[];
  return rows.length > 0;
}
