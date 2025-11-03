// components/HomePreviewCards.tsx
"use client";

import Link from "next/link";

type PreviewCard = {
  title: string;
  subtitle: string;
  bullets: string[];
  href: string;
  badge?: string;
};

const cards: PreviewCard[] = [
  {
    title: "NFL — Confidence Top 5",
    subtitle: "Model lean previews",
    bullets: [
      "DEN -3.5 • 58%",
      "PHI ML • 56%",
      "DAL/NYG Over 44.5 • 54%",
      "BUF -3 • 53%",
      "KC Over 47.5 • 52%",
    ],
    href: "/nfl",
    badge: "In-season focus",
  },
  {
    title: "NBA — Early Signals",
    subtitle: "Pace & props watchlist",
    bullets: [
      "Hornets Pace+ trend",
      "Giannis AST ladder watch",
      "Heat under trend (away)",
      "SGP+ combos stabilizing",
      "Market move scan nightly",
    ],
    href: "/nba",
  },
  {
    title: "MLB — Home Run Intel",
    subtitle: "Offseason archive & tools",
    bullets: [
      "Crush Candidates method",
      "HR Leaderboard Intel",
      "Ballpark factors",
      "Bullpen Pulse",
      "Live Score Grid",
    ],
    href: "/mlb",
  },
];

export default function HomePreviewCards() {
  return (
    <section aria-label="homepage previews" style={{ marginTop: 16 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        {cards.map((c, idx) => (
          <Link key={idx} href={c.href} className="card" style={{ textDecoration: "none" }}>
            <div style={{ padding: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "var(--text)" }}>{c.title}</h3>
                {c.badge && (
                  <span
                    style={{
                      fontSize: 12,
                      color: "var(--text)",
                      background: "linear-gradient(90deg, var(--accent-2), var(--accent))",
                      padding: "4px 8px",
                      borderRadius: 999,
                      border: "1px solid var(--border)",
                    }}
                  >
                    {c.badge}
                  </span>
                )}
              </div>
              <p style={{ margin: "6px 0 12px", color: "var(--muted)", fontSize: 14 }}>{c.subtitle}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 6 }}>
                {c.bullets.map((b, i) => (
                  <li key={i} style={{ color: "var(--text)", fontSize: 14 }}>
                    • {b}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
