import "./globals.css";
import SiteTicker from "@/components/site-ticker";

export const metadata = {
  title: "Box2Board",
  description: "Sports analytics, simplified.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <header className="site-header">
            <div className="container">
              <div className="brand">
                <a href="/">Box2Board</a>
              </div>
              <nav className="main-nav">
                <a href="/nfl">NFL</a>
                <a href="/nba">NBA</a>
                <a href="/mlb">MLB</a>
                <a href="/nhl">NHL</a>
              </nav>
            </div>
          </header>

          {/* Always-on ticker */}
          <SiteTicker />

          <main className="container" style={{ marginTop: "var(--space-4)" }}>
            {children}
          </main>

          <footer className="site-footer">
            <div className="container">
              <small>© {new Date().getFullYear()} Box2Board</small>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
