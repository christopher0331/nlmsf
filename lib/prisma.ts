import path from "path";
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | null; prismaPromise: Promise<PrismaClient> | null };

function normalizeUrl(rawUrl: string) {
  return rawUrl.trim().replace(/^['"]+|['"]+$/g, "");
}

async function createPrismaAsync(): Promise<PrismaClient> {
  let rawUrl = process.env.DATABASE_URL ?? process.env.TURSO_DATABASE_URL;
  if (!rawUrl) {
    const absPath = path.join(process.cwd(), "prisma", "dev.db");
    rawUrl = "file:" + absPath.replace(/\\/g, "/");
  }
  const url = normalizeUrl(rawUrl);
  const adapter = url.startsWith("libsql://")
    ? new (await import("@prisma/adapter-libsql")).PrismaLibSql({
        url,
        authToken: process.env.TURSO_AUTH_TOKEN,
      })
    : new PrismaBetterSqlite3({ url });
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

export async function getPrisma(): Promise<PrismaClient> {
  if (globalForPrisma.prisma) return globalForPrisma.prisma;
  if (!globalForPrisma.prismaPromise) globalForPrisma.prismaPromise = createPrismaAsync();
  globalForPrisma.prisma = await globalForPrisma.prismaPromise;
  return globalForPrisma.prisma;
}
