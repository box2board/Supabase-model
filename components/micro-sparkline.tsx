"use client";

export default function MicroSparkline({ points }: { points: number[] }) {
  // Normalize to 0..1 then map to 0..24 height
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = Math.max(1, max - min);
  const w = 120;
  const h = 28;
  const step = points.length > 1 ? w / (points.length - 1) : w;

  const d = points
    .map((p, i) => {
      const x = i * step;
      const y = h - ((p - min) / span) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  const last = points[points.length - 1] ?? 0;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
        <path d={d} fill="none" stroke="rgba(172,101,255,0.9)" strokeWidth="2" />
      </svg>
      <span style={{ fontWeight: 700 }}>{last}%</span>
    </div>
  );
}
