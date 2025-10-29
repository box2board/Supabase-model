// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import SiteTicker from "@/components/SiteTicker";

export const metadata: Metadata = {
  title: "Box2Board",
  description: "Sports analytics, simplified.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Always-on, site-wide ticker */}
        <SiteTicker />

        {/* Page content */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
