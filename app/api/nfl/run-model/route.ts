import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { scoreGame } from '@/lib/algos/nfl';

export const dynamic = 'force-dynamic';

export async function GET() {
  // Determine current season and week from the latest gamesData entry
  const latestGame = await prisma.gamesData.findFirst({
    orderBy: [{ season: 'desc' }, { week: 'desc' }],
  });
  const season = latestGame?.season ?? new Date().getUTCFullYear();
  const week = latestGame?.week ?? 1;

  const run = await prisma.modelRun.create({
    data: { season, week },
  });

  try {
    const games = await prisma.gamesData.findMany({
      where: { season, week },
    });
    const outputs = [];
    for (const g of games) {
      const metrics = {
        homeEpa: g.homeEpa ?? 0,
        awayEpa: g.awayEpa ?? 0,
        homeDvoa: g.homeDvoa ?? 0,
        awayDvoa: g.awayDvoa ?? 0,
        homeRestDays: g.homeRestDays ?? 0,
        awayRestDays: g.awayRestDays ?? 0,
        temperature: g.weatherTemp ?? 65,
        windMph: g.weatherWind ?? 0,
        precipitation: g.weatherPrecipProb ?? 0,
      };
      const { projSpreadHome, projTotal, confidence, tier } = scoreGame(metrics);
      outputs.push({
        runId: run.id,
        gameId: g.gameId,
        projSpreadHome,
        projTotal,
        mktSpreadHome: g.spreadClose ?? null,
        mktTotal: g.totalClose ?? null,
        confidence0100: confidence,
        tier,
      });
    }

    if (outputs.length > 0) {
      await prisma.modelOutput.createMany({ data: outputs });
    }

    await prisma.modelRun.update({
      where: { id: run.id },
      data: { finishedAt: new Date() },
    });

    return NextResponse.json({ ok: true, runId: run.id, count: outputs.length });
  } catch (err) {
    await prisma.modelRun.update({
      where: { id: run.id },
      data: { notes: `ERROR: ${err instanceof Error ? err.message : String(err)}` },
    });
    return NextResponse.json({ ok: false, error: err instanceof Error ? err.message : String(err) }, { status: 500 });
  }
}
