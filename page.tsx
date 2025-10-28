export default function HomePage() {
  return (
    <section className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-cyan-400">Welcome to Box2Board</h2>
      <p className="text-gray-400 mb-10">
        Your one-stop hub for live data, advanced metrics, and matchup analysis across all major sports.
      </p>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          { league: 'MLB', desc: 'Home run insights and hitting streaks' },
          { league: 'NFL', desc: 'Player prop metrics and trends' },
          { league: 'NBA', desc: 'Scoring breakdowns and matchup edges' },
          { league: 'NHL', desc: 'Goal streaks and team trends' },
        ].map((item) => (
          <div
            key={item.league}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-500 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">{item.league}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
