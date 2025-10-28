// lib/odds.ts

export async function fetchOdds(sport = "americanfootball_nfl") {
  const apiKey = process.env.THE_ODDS_API_KEY;
  if (!apiKey) {
    console.error("Missing THE_ODDS_API_KEY in environment variables.");
    return [];
  }

  try {
    const response = await fetch(
      `https://api.the-odds-api.com/v4/sports/${sport}/odds/?regions=us&markets=h2h,spreads,totals&apiKey=${apiKey}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      console.error("Failed to fetch odds:", response.statusText);
      return [];
    }

    const data = await response.json();
    return data; // full odds array
  } catch (error) {
    console.error("Error fetching odds:", error);
    return [];
  }
}

/**
 * Extract key metrics or snapshots from raw odds data.
 * You can customize this for your Box2Board visualizations later.
 */
export function extractOddsSnapshots(oddsData: any[]) {
  if (!Array.isArray(oddsData)) return [];

  return oddsData.map((game) => ({
    id: game.id,
    sport_key: game.sport_key,
    commence_time: game.commence_time,
    home_team: game.home_team,
    away_team: game.away_team,
    bookmakers: game.bookmakers?.map((b: any) => ({
      name: b.title,
      h2h: b.markets?.find((m: any) => m.key === "h2h")?.outcomes || [],
      spreads: b.markets?.find((m: any) => m.key === "spreads")?.outcomes || [],
      totals: b.markets?.find((m: any) => m.key === "totals")?.outcomes || [],
    })),
  }));
}
