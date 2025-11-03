// app/nba/page.tsx
export const metadata = {
  title: "NBA | Box2Board",
  description: "NBA insights, trends, and signals.",
};

export default function NBAPage() {
  return (
    <main style={{ padding: "1.25rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>NBA</h1>
      <p style={{ marginTop: "0.5rem" }}>
        NBA page scaffolded. We’ll wire live signals, confidence tiles, and trends here.
      </p>
    </main>
  );
}
