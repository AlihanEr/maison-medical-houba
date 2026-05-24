import { NextResponse } from "next/server";
import { getSettings, updateSettings } from "@/lib/settings";
import { isAuthed } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  const s = await getSettings();
  return NextResponse.json(s);
}

export async function PUT(req: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const updated = await updateSettings(body);
  return NextResponse.json(updated);
}
