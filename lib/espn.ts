import axios from 'axios';

export async function fetchScoreboard(date?: string) {
  const base = process.env.ESPN_API_BASE || 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard';
  const url = date ? `${base}?dates=${date}` : base;
  const { data } = await axios.get(url);
  return data;
}

// Extract simplified game objects from the ESPN scoreboard response
export function extractGamesFromScoreboard(data: any) {
  const events = data?.events ?? [];
  return events.map((evt: any) => {
    const competition = evt.competitions?.[0] ?? {};
    const home = competition.competitors?.find((c: any) => c.homeAway === 'home');
    const away = competition.competitors?.find((c: any) => c.homeAway === 'away');
    return {
      id: evt.id,
      season: evt.season?.year,
      week: evt.week?.number,
      kickoff: evt.date,
      homeId: home?.team?.abbreviation,
      homeName: home?.team?.shortDisplayName,
      awayId: away?.team?.abbreviation,
      awayName: away?.team?.shortDisplayName,
      homeScore: parseInt(home?.score ?? '0'),
      awayScore: parseInt(away?.score ?? '0'),
      status: evt.status?.type?.name,
    };
  });
}
