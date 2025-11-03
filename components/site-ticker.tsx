// components/site-ticker.tsx
"use client";

import React from "react";

type TickerItem = {
  label: string;
  value: string;
};

const demo: TickerItem[] = [
  { label: "NFL Power Signal", value: "BAL 62%" },
  { label: "Top Prop", value: "CMC Anytime TD (Sim Edge +7%)" },
  { label: "Line Move", value: "KC -2.5 → -3.5" },
  { label: "Weather", value: "BUF @ 12 mph wind" },
];

export default function SiteTicker({
  items = demo,
  speed = 35, // lower is faster
}: {
  items?: TickerItem[];
  speed?: number;
}) {
  // very simple CSS-driven marquee effect
  return (
    <div className="ticker-wrap">
      <div
        className="ticker"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {[...items, ...items].map((it, i) => (
          <div className="tick" key={`${it.label}-${i}`}>
            <strong>{it.label}:</strong>&nbsp;{it.value}
          </div>
        ))}
      </div>
    </div>
  );
}
