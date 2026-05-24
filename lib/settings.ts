import { sql, ensureSchema } from "./db";

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

type Row = {
  address_line1: string;
  address_line2: string;
  hours_main: string;
  hours_note: string;
  phone_primary: string;
  phone_secondary: string;
};

function rowToSettings(r: Row): ClinicSettings {
  return {
    addressLine1: r.address_line1,
    addressLine2: r.address_line2,
    hoursMain: r.hours_main,
    hoursNote: r.hours_note,
    phonePrimary: r.phone_primary,
    phoneSecondary: r.phone_secondary,
  };
}

async function seedIfEmpty() {
  const rows = (await sql`SELECT COUNT(*)::int AS n FROM clinic_settings`) as { n: number }[];
  if (rows[0]?.n === 0) {
    await sql`
      INSERT INTO clinic_settings (id, address_line1, address_line2, hours_main, hours_note, phone_primary, phone_secondary)
      VALUES (
        1,
        ${DEFAULT_SETTINGS.addressLine1},
        ${DEFAULT_SETTINGS.addressLine2},
        ${DEFAULT_SETTINGS.hoursMain},
        ${DEFAULT_SETTINGS.hoursNote},
        ${DEFAULT_SETTINGS.phonePrimary},
        ${DEFAULT_SETTINGS.phoneSecondary}
      )
      ON CONFLICT (id) DO NOTHING
    `;
  }
}

export async function getSettings(): Promise<ClinicSettings> {
  await ensureSchema();
  await seedIfEmpty();
  const rows = (await sql`
    SELECT address_line1, address_line2, hours_main, hours_note, phone_primary, phone_secondary
    FROM clinic_settings WHERE id = 1
  `) as Row[];
  return rows.length ? rowToSettings(rows[0]) : DEFAULT_SETTINGS;
}

export async function updateSettings(patch: Partial<ClinicSettings>): Promise<ClinicSettings> {
  const current = await getSettings();
  const next: ClinicSettings = {
    addressLine1: typeof patch.addressLine1 === "string" ? patch.addressLine1 : current.addressLine1,
    addressLine2: typeof patch.addressLine2 === "string" ? patch.addressLine2 : current.addressLine2,
    hoursMain:    typeof patch.hoursMain    === "string" ? patch.hoursMain    : current.hoursMain,
    hoursNote:    typeof patch.hoursNote    === "string" ? patch.hoursNote    : current.hoursNote,
    phonePrimary: typeof patch.phonePrimary === "string" ? patch.phonePrimary : current.phonePrimary,
    phoneSecondary: typeof patch.phoneSecondary === "string" ? patch.phoneSecondary : current.phoneSecondary,
  };
  await sql`
    UPDATE clinic_settings SET
      address_line1   = ${next.addressLine1},
      address_line2   = ${next.addressLine2},
      hours_main      = ${next.hoursMain},
      hours_note      = ${next.hoursNote},
      phone_primary   = ${next.phonePrimary},
      phone_secondary = ${next.phoneSecondary}
    WHERE id = 1
  `;
  return next;
}
