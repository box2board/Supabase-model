"use client";
import { useEffect, useRef, useState } from "react";

type Item = { label: string; value: string; delta?: number };

export default function SiteTicker() {
  const [items, setItems] = useState<Item[]>([
    // Placeholder items; replace with live scoreboard as you wire data
    { label: "NFL", value: "Week Preview Live", delta: undefined },
    { label: "Injuries", value: "Updated 30m ago", delta: undefined },
    { label: "Lines", value: "PHI -3.5 @ DAL", delta: +0.5 },
    { label: "Totals", value: "SF/SEA 43.5", delta: -1 },
  ]);
  const laneRef = useRef<HTMLDivElement>(null);

  // Simple auto-scroll loop
  useEffect(() => {
    const el = laneRef.current;
    if (!el) return;
    let offset = 0;
    let raf: number;
    const step = () => {
      offset -= 0.6; // speed
      el.style.transform = `translateX(${offset}px)`;
      if (Math.abs(offset) > el.scrollWidth / 2) offset = 0;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Duplicate content for seamless loop
  const row = (
    <div className="flex gap-8 px-8">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-2 text-sm">
          <span className="px-2 py-0.5 rounded bg-primary-500/15 text-primary-200 border border-primary-500/30">
            {it.label}
          </span>
          <span className="text-ink-200">{it.value}</span>
          {typeof it.delta === "number" && (
            <span className={it.delta >= 0 ? "text-green-400" : "text-red-400"}>
              {it.delta >= 0 ? `▲ ${it.delta}` : `▼ ${Math.abs(it.delta)}`}
            </span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="ticker-lane sticky top-0 z-50 w-full">
      <div className="overflow-hidden">
        <div className="whitespace-nowrap flex">
          <div ref={laneRef} className="flex">
            {row}
            {row}
            {row}
          </div>
        </div>
      </div>
    </div>
  );
}
