import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Box2Board',
  description: 'Live sports insights, data, and matchup analytics powered by Supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <header className="p-4 border-b border-gray-800 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide text-cyan-400">Box2Board</h1>
          <nav className="space-x-4 text-sm">
            <a href="/">Home</a>
            <a href="/mlb">MLB</a>
            <a href="/nfl">NFL</a>
            <a href="/nba">NBA</a>
            <a href="/nhl">NHL</a>
          </nav>
        </header>
        <main className="flex-1 p-6">{children}</main>
        <footer className="text-center text-gray-500 p-4 border-t border-gray-800">
          © {new Date().getFullYear()} Box2Board — Powered by Supabase
        </footer>
      </body>
    </html>
  )
}
