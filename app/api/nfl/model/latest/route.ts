import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  // Find the latest completed model run
  const latestRun = await prisma.modelRun.findFirst({
    where: { finishedAt: { not: null } },
    orderBy: { finishedAt: 'desc' },
  });

  if (!latestRun) {
    return NextResponse.json({ ok: true, results: [] });
  }

  const outputs = await prisma.modelOutput.findMany({
    where: { runId: latestRun.id },
    orderBy: { confidence0100: 'desc' },
  });

  return NextResponse.json({
    ok: true,
    season: latestRun.season,
    week: latestRun.week,
    finishedAt: latestRun.finishedAt,
    results: outputs.map((o) => ({
      gameId: o.gameId,
      projSpreadHome: o.projSpreadHome,
      projTotal: o.projTotal,
      mktSpreadHome: o.mktSpreadHome,
      mktTotal: o.mktTotal,
      confidence0100: o.confidence0100,
      tier: o.tier,
    })),
  });
}
