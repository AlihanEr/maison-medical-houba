import fs from "node:fs/promises";
import path from "node:path";

export type ClinicSettings = {
  addressLine1: string;
  addressLine2: string;
  hoursMain: string;
  hoursNote: string;
  phonePrimary: string;
  phoneSecondary: string;
};

export const DEFAULT_SETTINGS: ClinicSettings = {
  addressLine1: "48 Avenue de la Brise",
  addressLine2: "1020 Laeken · Quartier Mutsaard – De Wand",
  hoursMain: "Lundi → Vendredi · 9h – 18h",
  hoursNote: "Accueil fermé de 13h à 14h",
  phonePrimary: "02 270 37 44",
  phoneSecondary: "0488 866 405",
};

const DATA_FILE = path.join(process.cwd(), "data", "settings.json");

async function ensureFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(DEFAULT_SETTINGS, null, 2), "utf8");
  }
}

export async function getSettings(): Promise<ClinicSettings> {
  await ensureFile();
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as Partial<ClinicSettings>;
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export async function updateSettings(patch: Partial<ClinicSettings>): Promise<ClinicSettings> {
  const current = await getSettings();
  const next: ClinicSettings = {
    addressLine1: typeof patch.addressLine1 === "string" ? patch.addressLine1 : current.addressLine1,
    addressLine2: typeof patch.addressLine2 === "string" ? patch.addressLine2 : current.addressLine2,
    hoursMain: typeof patch.hoursMain === "string" ? patch.hoursMain : current.hoursMain,
    hoursNote: typeof patch.hoursNote === "string" ? patch.hoursNote : current.hoursNote,
    phonePrimary: typeof patch.phonePrimary === "string" ? patch.phonePrimary : current.phonePrimary,
    phoneSecondary: typeof patch.phoneSecondary === "string" ? patch.phoneSecondary : current.phoneSecondary,
  };
  await fs.writeFile(DATA_FILE, JSON.stringify(next, null, 2), "utf8");
  return next;
}
