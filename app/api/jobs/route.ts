import { NextResponse } from "next/server";
import { listJobs, createJob } from "@/lib/jobs";
import { isAuthed } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  const jobs = await listJobs();
  return NextResponse.json(jobs);
}

export async function POST(req: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  if (!body.title || !body.summary) {
    return NextResponse.json({ error: "title and summary required" }, { status: 400 });
  }
  const job = await createJob({
    title: String(body.title),
    type: String(body.type ?? "Temps plein"),
    location: String(body.location ?? "Laeken (1020)"),
    summary: String(body.summary),
    advantages: arrify(body.advantages),
    conditions: arrify(body.conditions),
    profile: arrify(body.profile),
    contactEmail: String(body.contactEmail ?? "jobmmhouba@gmail.com"),
    contactName: String(body.contactName ?? "HOUBA Ismaïl"),
  });
  return NextResponse.json(job, { status: 201 });
}

function arrify(v: unknown): string[] {
  if (Array.isArray(v)) return v.map(String).filter(Boolean);
  if (typeof v === "string") return v.split("\n").map((s) => s.trim()).filter(Boolean);
  return [];
}
