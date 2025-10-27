import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { fetchOdds, extractOddsSnapshots } from '@/lib/odds';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Fetch odds data from The Odds API
    const oddsData = await fetchOdds();
    // Extract snapshots (array of objects)
    const snapshots = extractOddsSnapshots(oddsData);
    // Insert snapshots into database
    await prisma.$transaction(
      snapshots.map((snap: any) =>
        prisma.oddsSnapshot.create({
          data: {
            gameId: snap.gameId,
            bookKey: snap.bookKey,
            takenUtc: snap.takenUtc,
            homeML: snap.homeML ?? null,
            awayML: snap.awayML ?? null,
            spreadHome: snap.spreadHome ?? null,
            total: snap.total ?? null,
            source: snap.source ?? null,
          },
        })
      )
    );
    return NextResponse.json({ ok: true, inserted: snapshots.length });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }
}
