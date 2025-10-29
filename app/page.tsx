import Link from "next/link";
import HomePreviewCards from "@/components/HomePreviewCards";

export default async function HomePage() {
  // You can fetch minimal NFL headline data here later
  return (
    <div className="space-y-8">
      <section className="cozy-card p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              NFL is live on Box2Board
            </h1>
            <p className="text-[var(--muted)]">
              Quick preview of what’s inside. Dive into the full NFL page for
              the complete dashboards.
            </p>
          </div>
          <Link
            href="/nfl"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-cozy bg-primary-500 text-white hover:bg-primary-600 transition"
          >
            Open NFL Dashboard →
          </Link>
        </div>

        {/* Quick NFL preview rows */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="cozy-card p-4">
            <h3 className="font-semibold">Line Moves</h3>
            <ul className="mt-2 text-sm text-[var(--muted)] space-y-1">
              <li>PHI @ DAL: -3.5 → -4.0 (steam)</li>
              <li>SEA @ SF: 43.5 → 43.0 (under)</li>
              <li>KC @ CIN: +2.5 → +2.0 (dog buy)</li>
            </ul>
          </div>
          <div className="cozy-card p-4">
            <h3 className="font-semibold">Injury Watch</h3>
            <ul className="mt-2 text-sm text-[var(--muted)] space-y-1">
              <li>PHI WR: Q (hamstring) → GTD</li>
              <li>DAL LT: Q (ankle) trending up</li>
              <li>SF DB: O (shoulder)</li>
            </ul>
          </div>
          <div className="cozy-card p-4">
            <h3 className="font-semibold">Model Signals</h3>
            <ul className="mt-2 text-sm text-[var(--muted)] space-y-1">
              <li>Edge: SF-SEA Under 43 (tempo)</li>
              <li>Edge: DAL ML (matchup tiers)</li>
              <li>Lean: CIN +2 (market drift)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* League previews */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Explore the dashboards</h2>
        <HomePreviewCards />
      </section>
    </div>
  );
}
