// app/page.tsx
import Link from "next/link";
import HomePreviewCards from "@/components/HomePreviewCards";

export default function HomePage() {
  return (
    <main className="container">
      <header className="hero">
        <h1>Box2Board</h1>
        <p>Signals, odds & trends — fast and simple.</p>
        <div className="cta-row">
          <Link className="btn" href="/nfl">Go to NFL</Link>
          <Link className="btn btn-secondary" href="/nba">Go to NBA</Link>
        </div>
      </header>

      <HomePreviewCards />
    </main>
  );
}
