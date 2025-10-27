import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { fetchScoreboard, extractGamesFromScoreboard } from '@/lib/espn';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await fetchScoreboard();
    const games = extractGamesFromScoreboard(data);
    for (const game of games) {
      // Upsert into games table
      await prisma.game.upsert({
        where: { id: game.id },
        create: {
          id: game.id,
          season: game.season ?? 0,
          week: game.week ?? 0,
          kickoffUtc: new Date(game.kickoff),
          homeId: game.homeId,
          awayId: game.awayId,
          status: game.status ?? 'STATUS_SCHEDULED',
          homeScore: game.homeScore ?? null,
          awayScore: game.awayScore ?? null,
        },
        update: {
          season: game.season ?? 0,
          week: game.week ?? 0,
          kickoffUtc: new Date(game.kickoff),
          homeId: game.homeId,
          awayId: game.awayId,
          status: game.status ?? 'STATUS_SCHEDULED',
          homeScore: game.homeScore ?? null,
          awayScore: game.awayScore ?? null,
        },
      });
      // Upsert into gamesData table
      await prisma.gamesData.upsert({
        where: { gameId: game.id },
        create: {
          gameId: game.id,
          season: game.season ?? 0,
          week: game.week ?? 0,
          kickoffUtc: new Date(game.kickoff),
          homeId: game.homeId,
          awayId: game.awayId,
        },
        update: {
          season: game.season ?? 0,
          week: game.week ?? 0,
          kickoffUtc: new Date(game.kickoff),
          homeId: game.homeId,
          awayId: game.awayId,
        },
      });
    }
    return NextResponse.json({ ok: true, count: games.length });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
