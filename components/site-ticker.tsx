// components/site-ticker.tsx
"use client";

import React from "react";

type TickerItem = { label: string; detail: string };

const mockItems: TickerItem[] = [
  { label: "NFL — Top Edges:", detail: "DEN -3.5 (58%) • PHI ML (56%) • DAL/NYG o44.5 (54%)" },
  { label: "Market Moves:", detail: "BUF -2.5 → -3 • KC total 46.0 → 47.5" },
  { label: "Signals:", detail: "CLE PassRush+ vs SEA OL- • MIA Pace+ vs NE Slow" },
];

export default function SiteTicker() {
  return (
    <div className="b2b-ticker" role="region" aria-label="live ticker">
      <div className="b2b-ticker__track">
        {[...mockItems, ...mockItems].map((item, i) => (
          <div className="b2b-ticker__item" key={i}>
            <span className="b2b-ticker__label">{item.label}</span>
            <span className="b2b-ticker__dot" aria-hidden>•</span>
            <span className="b2b-ticker__detail">{item.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
