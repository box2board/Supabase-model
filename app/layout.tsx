// app/layout.tsx
export const metadata = {
  title: "Box2Board",
  description: "Sports analytics, simplified.",
};

import "./globals.css";
import SiteTicker from "@/components/site-ticker";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="b2b-body">
        {/* Always-on global ticker */}
        <SiteTicker />

        {/* Page chrome */}
        <div className="b2b-shell">
          <header className="b2b-header">
            <a href="/" className="b2b-logo">Box2Board</a>
            <nav className="b2b-nav">
              <a href="/nfl">NFL</a>
              <a href="/nba">NBA</a>
              <a href="/mlb">MLB</a>
              <a href="/nhl">NHL</a>
            </nav>
          </header>

          <main className="b2b-main">{children}</main>

          <footer className="b2b-footer">
            <span>© {new Date().getFullYear()} Box2Board</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
