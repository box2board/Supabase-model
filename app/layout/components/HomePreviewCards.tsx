import Link from "next/link";
import MicroSparkline from "./MicroSparkline";

const mock = [12, 14, 13, 16, 15, 18, 19];

const Card = ({
  title,
  href,
  blurb,
}: {
  title: string;
  href: string;
  blurb: string;
}) => (
  <Link href={href} className="cozy-card p-4 hover:shadow-lg hover:shadow-primary-500/20 transition">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">{title}</h3>
      <MicroSparkline data={mock} />
    </div>
    <p className="mt-2 text-sm text-[var(--muted)]">{blurb}</p>
  </Link>
);

export default function HomePreviewCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card
        title="NFL Dashboard"
        href="/nfl"
        blurb="Live lines, injuries, matchup tiers, and model signals."
      />
      <Card
        title="NBA (Soon)"
        href="/nba"
        blurb="Coming after NFL launch—pace, usage, shot charts."
      />
      <Card
        title="MLB"
        href="/mlb"
        blurb="Crush Candidates, HR heat, bullpen pulse (kept intact)."
      />
      <Card
        title="NHL (Soon)"
        href="/nhl"
        blurb="Shot props, goalie form, power-play signals."
      />
    </div>
  );
}
