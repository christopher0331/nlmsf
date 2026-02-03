import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

function normalizeUrl(rawUrl: string) {
  return rawUrl.trim().replace(/^['"]+|['"]+$/g, "");
}

function createPrisma() {
  const rawUrl =
    process.env.DATABASE_URL ??
    process.env.TURSO_DATABASE_URL ??
    "file:./prisma/dev.db";
  const url = normalizeUrl(rawUrl);
  const adapter = url.startsWith("libsql://")
    ? new PrismaLibSql({
        url,
        authToken: process.env.TURSO_AUTH_TOKEN,
      })
    : new PrismaBetterSqlite3({ url });
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrisma();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
