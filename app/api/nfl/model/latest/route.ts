import { NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Placeholder until you wire to a real table:
    const latest = null;
    return NextResponse.json({ ok: true, latest });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? 'error' }, { status: 500 });
  }
}
