import { NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Example placeholder; replace with your real latest model lookup.
    // const latest = await prisma.yourModelTable.findFirst({ orderBy: { createdAt: 'desc' } });
    const latest = null;
    return NextResponse.json({ ok: true, latest });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? 'error' }, { status: 500 });
  }
}
