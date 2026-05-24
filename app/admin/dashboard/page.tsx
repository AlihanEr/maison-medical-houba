import { listJobs } from "@/lib/jobs";
import { getSettings } from "@/lib/settings";
import Dashboard from "./Dashboard";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [jobs, settings] = await Promise.all([listJobs(), getSettings()]);
  return <Dashboard initialJobs={jobs} initialSettings={settings} />;
}
