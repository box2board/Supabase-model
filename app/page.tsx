import Link from "next/link";
import ConfidenceTop5 from "@/components/confidence-top5";
import HomePreviewCards from "@/components/home-preview-cards";

export const metadata = {
  title: "Box2Board — Signals & Confidence",
  description: "Fast, clear betting signals across NFL & NBA.",
};

export default function HomePage() {
  return (
    <main className="page">
      <section className="section">
        <div className="section-header">
          <h1>Today’s Signals</h1>
          <p style={{ opacity: 0.8 }}>
            Quick, consumable confidence scores and trend snapshots. NFL featured now; NBA coming online next.
          </p>
        </div>

        {/* Confidence Top 5 */}
        <ConfidenceTop5 />

        {/* League previews */}
        <div className="section-header" style={{ marginTop: "var(--space-4)" }}>
          <h2>League Previews</h2>
          <p style={{ opacity: 0.8 }}>Jump into the boards:</p>
        </div>
        <HomePreviewCards
          items={[
            {
              league: "NFL",
              headline: "Top matchups & lines today",
              href: "/nfl",
              mini: [
                { label: "Spread", value: 74 },
                { label: "Total", value: 62 },
                { label: "Top Prop", value: 68 },
              ],
            },
            {
              league: "NBA",
              headline: "Live form & pace signals",
              href: "/nba",
              mini: [
                { label: "Spread", value: 59 },
                { label: "Total", value: 65 },
                { label: "Top Prop", value: 57 },
              ],
            },
          ]}
        />
      </section>
    </main>
  );
}
