import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/db';
import { fetchOdds, extractOddsSnapshots } from '../../../lib/odds';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Optionally use prisma here later.
    const raw = await fetchOdds();
    const snapshots = extractOddsSnapshots(raw);
    return NextResponse.json({ ok: true, count: snapshots.length, snapshots });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? 'error' }, { status: 500 });
  }
}
