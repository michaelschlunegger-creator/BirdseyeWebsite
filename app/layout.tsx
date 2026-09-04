import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { assetPath } from "@/lib/asset-path";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Asset Solutions for Industrial Assets | Birdseye",
  description:
    "Birdseye combines inspection, reality capture, digital engineering and assessment to turn physical industrial assets into useful digital intelligence.",
  icons: {
    icon: assetPath("/birdseye-logo.png"),
    shortcut: assetPath("/birdseye-logo.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
