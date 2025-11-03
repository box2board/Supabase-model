// components/HomePreviewCards.tsx
import Link from "next/link";
import React from "react";

/** --- Placeholder data (static) --- */
const confidenceTop5 = [
  { game: "BAL @ CIN", pick: "BAL -3", conf: 62 },
  { game: "KC @ LAC", pick: "KC -2.5", conf: 60 },
  { game: "PHI @ DAL", pick: "Over 46.5", conf: 58 },
  { game: "BUF @ NYJ", pick: "BUF ML", conf: 57 },
  { game: "SF @ SEA", pick: "SF -6.5", conf: 55 },
];

const liveNow = [
  { label: "BAL 17 — CIN 10", detail: "Q3 07:42" },
  { label: "PHI 3 — DAL 0", detail: "Q1 10:55" },
];

const upcoming = [
  { label: "KC @ LAC", detail: "Sun 4:25 ET" },
  { label: "BUF @ NYJ", detail: "Mon 8:15 ET" },
];

const topPropSignals = [
  { prop: "CMC Anytime TD", edge: "+7%" },
  { prop: "Lamar Rush O 54.5", edge: "+6%" },
  { prop: "Kelce Rec O 6.5", edge: "+5%" },
];

/** --- Small utility UI bits --- */
function Card({
  title,
  children,
  footerLink,
}: {
  title: string;
  children: React.ReactNode;
  footerLink?: { href: string; text: string };
}) {
  return (
    <div className="card">
      <div className="card-h">
        <h3>{title}</h3>
      </div>
      <div className="card-b">{children}</div>
      {footerLink ? (
        <div className="card-f">
          <Link href={footerLink.href}>{footerLink.text} →</Link>
        </div>
      ) : null}
    </div>
  );
}

export default function HomePreviewCards() {
  return (
    <div className="home-grid">
      {/* Confidence Top 5 (NFL focus first) */}
      <Card
        title="Confidence Top 5 — NFL"
        footerLink={{ href: "/nfl", text: "See full NFL board" }}
      >
        <ul className="list">
          {confidenceTop5.map((r, i) => (
            <li key={i} className="row">
              <span className="muted">{String(i + 1).padStart(2, "0")}</span>
              <span className="game">{r.game}</span>
              <span className="pick">{r.pick}</span>
              <span className="pill">{r.conf}%</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Live & Upcoming */}
      <Card
        title="Live Now (NFL/NBA)"
        footerLink={{ href: "/nfl", text: "Open live board" }}
      >
        <ul className="list">
          {liveNow.map((g, i) => (
            <li key={i} className="row">
              <span className="game">{g.label}</span>
              <span className="muted">{g.detail}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card
        title="Upcoming (NFL/NBA)"
        footerLink={{ href: "/nba", text: "See tonight’s slate" }}
      >
        <ul className="list">
          {upcoming.map((g, i) => (
            <li key={i} className="row">
              <span className="game">{g.label}</span>
              <span className="muted">{g.detail}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Top Prop Signals */}
      <Card
        title="Top Prop Signals"
        footerLink={{ href: "/nfl", text: "Explore all props" }}
      >
        <ul className="list">
          {topPropSignals.map((p, i) => (
            <li key={i} className="row">
              <span className="game">{p.prop}</span>
              <span className="pill pill-edge">{p.edge}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
