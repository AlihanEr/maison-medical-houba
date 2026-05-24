import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maison Médicale Houba — De Wand · Laeken",
  description:
    "Maison médicale agréée à Laeken — médecine générale, kinésithérapie, soins infirmiers et accompagnement social. Une prise en charge globale de votre santé.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a2660",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
