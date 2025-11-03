"use client";

import MicroSparkline from "@/components/micro-sparkline";

type ConfidenceRow = {
  game: string;
  kickoff: string; // display string
  spreadConf: number; // 0-100
  totalConf: number;  // 0-100
  propConf: number;   // 0-100
  spark: number[];    // recent trend (0-100)
};

// Mock data for now
const MOCK: ConfidenceRow[] = [
  { game: "Ravens @ Dolphins", kickoff: "Sun 1:00 ET", spreadConf: 78, totalConf: 61, propConf: 72, spark: [35,48,52,60,66,73,78] },
  { game: "Chiefs @ Bengals",  kickoff: "Sun 4:25 ET", spreadConf: 74, totalConf: 69, propConf: 64, spark: [40,44,50,55,59,66,74] },
  { game: "Eagles @ Cowboys",  kickoff: "Sun 8:20 ET", spreadConf: 71, totalConf: 63, propConf: 70, spark: [28,42,47,51,58,65,71] },
  { game: "Bills @ Jets",      kickoff: "Mon 8:15 ET", spreadConf: 68, totalConf: 72, propConf: 60, spark: [30,38,49,54,60,64,68] },
  { game: "Lions @ Packers",   kickoff: "Sun 1:00 ET", spreadConf: 66, totalConf: 58, propConf: 62, spark: [25,33,44,50,57,60,66] },
];

function Pill({ value, label }: { value: number; label: string }) {
  return (
    <div className="pill">
      <span className="pill-value">{value}%</span>
      <span className="pill-label">{label}</span>
      <style jsx>{`
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(172, 101, 255, 0.15);
          border: 1px solid rgba(172, 101, 255, 0.35);
        }
        .pill-value { font-weight: 700; }
        .pill-label { opacity: 0.85; font-size: 0.9rem; }
      `}</style>
    </div>
  );
}

export default function ConfidenceTop5() {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Confidence Top 5 (NFL)</h3>
        <p className="muted">Quick read: Spread • Total • Top Prop</p>
      </div>

      <div className="list">
        {MOCK.map((row, idx) => (
          <div key={idx} className="list-row">
            <div className="row-main">
              <div className="row-title">{row.game}</div>
              <div className="row-sub">{row.kickoff}</div>
            </div>

            <div className="row-meter">
              <Pill value={row.spreadConf} label="Spread" />
              <Pill value={row.totalConf} label="Total" />
              <Pill value={row.propConf} label="Top Prop" />
            </div>

            <div className="row-spark">
              <MicroSparkline points={row.spark} />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .card { background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius-2); padding: var(--space-3); }
        .card-header { display: flex; align-items: baseline; gap: 12px; margin-bottom: var(--space-3); }
        .muted { opacity: 0.75; }
        .list { display: flex; flex-direction: column; gap: 12px; }
        .list-row {
          display: grid;
          grid-template-columns: 1.2fr 1.5fr 0.8fr;
          gap: 12px;
          align-items: center;
          padding: 12px;
          border: 1px solid var(--border);
          border-radius: var(--radius-2);
          background: rgba(255,255,255,0.02);
        }
        .row-main .row-title { font-weight: 700; }
        .row-main .row-sub { opacity: 0.7; font-size: 0.9rem; }
        .row-meter { display: flex; gap: 10px; flex-wrap: wrap; }
        .row-spark { display: flex; justify-content: flex-end; }
        @media (max-width: 900px) {
          .list-row { grid-template-columns: 1fr; gap: 10px; }
          .row-spark { justify-content: flex-start; }
        }
      `}</style>
    </div>
  );
}
