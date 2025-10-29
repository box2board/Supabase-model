import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/db';
import { scoreGame } from '../../../../lib/algos/nfl';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { homeTeam, awayTeam } = body ?? {};
    const result = scoreGame({ homeTeam, awayTeam });
    return NextResponse.json({ ok: true, result });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? 'error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, message: 'run-model endpoint ready' });
}
