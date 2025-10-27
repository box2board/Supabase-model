import axios from 'axios';

// Fetch odds data from The Odds API
export async function fetchOdds(sport: string = 'americanfootball_nfl', regions: string = 'us', markets: string = 'spreads,totals', oddsFormat: string = 'american') {
  const base = process.env.THE_ODDS_API_BASE || 'https://api.the-odds-api.com/v4/sports';
  const apiKey = process.env.THE_ODDS_API_KEY;
  const url = `${base}/${sport}/odds`;
  const params = {
    apiKey,
    regions,
    markets,
    oddsFormat,
  };
  const { data } = await axios.get(url, { params });
  return data;
}

// Convert The Odds API response into a flat list of snapshots for database storage
export function extractOddsSnapshots(data: any[]) {
  const snapshots: any[] = [];
  data.forEach((game) => {
    const gameId = game.id;
    const commenceTime = game.commence_time;
    game.bookmakers?.forEach((book: any) => {
      const bookKey = book.key;
      const spreads = book.markets?.find((m: any) => m.key === 'spreads');
      const totals = book.markets?.find((m: any) => m.key === 'totals');
      let spreadHome: number | null = null;
      let total: number | null = null;
      if (spreads) {
        // outcomes array has two items: one for home and one for away
        const homeOutcome = spreads.outcomes?.find((o: any) => o.name === game.home_team);
        if (homeOutcome) spreadHome = homeOutcome.point;
      }
      if (totals) {
        // totals market has a single outcome (over/under) but point represents the total
        const overOutcome = totals.outcomes?.find((o: any) => o.name.toLowerCase().includes('over'));
        if (overOutcome) total = overOutcome.point;
      }
      snapshots.push({
        gameId,
        bookKey,
        takenUtc: new Date().toISOString(),
        spreadHome,
        total,
        source: 'the-odds-api',
      });
    });
  });
  return snapshots;
}
