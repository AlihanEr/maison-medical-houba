import { listJobs } from "@/lib/jobs";
import Dashboard from "./Dashboard";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const jobs = await listJobs();
  return <Dashboard initialJobs={jobs} />;
}
