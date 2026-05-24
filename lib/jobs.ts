import fs from "node:fs/promises";
import path from "node:path";

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

const DATA_FILE = path.join(process.cwd(), "data", "jobs.json");

async function ensureFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, "[]", "utf8");
  }
}

export async function listJobs(): Promise<Job[]> {
  await ensureFile();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  try {
    const data = JSON.parse(raw) as Job[];
    return data.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  } catch {
    return [];
  }
}

export async function getJob(id: string): Promise<Job | null> {
  const all = await listJobs();
  return all.find((j) => j.id === id) ?? null;
}

export async function createJob(input: Omit<Job, "id" | "createdAt">): Promise<Job> {
  const all = await listJobs();
  const job: Job = {
    ...input,
    id: cryptoRandom(),
    createdAt: new Date().toISOString(),
  };
  all.unshift(job);
  await fs.writeFile(DATA_FILE, JSON.stringify(all, null, 2), "utf8");
  return job;
}

export async function updateJob(id: string, patch: Partial<Omit<Job, "id" | "createdAt">>): Promise<Job | null> {
  const all = await listJobs();
  const idx = all.findIndex((j) => j.id === id);
  if (idx === -1) return null;
  all[idx] = { ...all[idx], ...patch };
  await fs.writeFile(DATA_FILE, JSON.stringify(all, null, 2), "utf8");
  return all[idx];
}

export async function deleteJob(id: string): Promise<boolean> {
  const all = await listJobs();
  const next = all.filter((j) => j.id !== id);
  if (next.length === all.length) return false;
  await fs.writeFile(DATA_FILE, JSON.stringify(next, null, 2), "utf8");
  return true;
}

function cryptoRandom() {
  return (
    Math.random().toString(36).slice(2, 10) +
    Math.random().toString(36).slice(2, 10)
  );
}
