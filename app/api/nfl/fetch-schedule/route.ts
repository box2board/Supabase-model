import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/db';
import { fetchScoreboard, extractGamesFromScoreboard } from '../../../lib/espn';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Optionally use prisma here later.
    const data = await fetchScoreboard();
    const games = extractGamesFromScoreboard(data);
    return NextResponse.json({ ok: true, count: games.length, games });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? 'error' }, { status: 500 });
  }
}
