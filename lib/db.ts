import { PrismaClient } from '@prisma/client';

// Create a single Prisma client instance across the Next.js app.
// In development, avoid creating multiple instances due to hot reloads.
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma: PrismaClient = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
