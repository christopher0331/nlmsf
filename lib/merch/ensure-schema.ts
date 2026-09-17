import type { PrismaClient } from "@prisma/client";

const CREATE_STATEMENTS = [
  `CREATE TABLE IF NOT EXISTS "MerchDesign" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "themeId" TEXT NOT NULL,
    "imageMime" TEXT NOT NULL DEFAULT 'image/png',
    "imageData" BLOB NOT NULL,
    "source" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "reviewNote" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS "MerchListing" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "designId" TEXT NOT NULL,
    "mediumId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "priceCents" INTEGER NOT NULL,
    "colorsJson" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "printifyProductId" TEXT,
    "printifyVariantsJson" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MerchListing_designId_fkey" FOREIGN KEY ("designId") REFERENCES "MerchDesign" ("id") ON DELETE CASCADE ON UPDATE CASCADE
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "MerchListing_slug_key" ON "MerchListing"("slug")`,
  `CREATE TABLE IF NOT EXISTS "MerchOrder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "itemsJson" TEXT NOT NULL,
    "amountCents" INTEGER NOT NULL,
    "shippingCents" INTEGER NOT NULL DEFAULT 0,
    "totalCents" INTEGER NOT NULL,
    "stripeSessionId" TEXT,
    "stripePaymentIntent" TEXT,
    "shippingJson" TEXT,
    "printifyOrderId" TEXT,
    "printifyStatus" TEXT,
    "fulfillError" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "MerchOrder_stripeSessionId_key" ON "MerchOrder"("stripeSessionId")`,
];

const globalForMerch = globalThis as unknown as { merchSchemaPromise: Promise<void> | null };

async function listingColumnNames(prisma: PrismaClient): Promise<Set<string>> {
  try {
    const rows = await prisma.$queryRawUnsafe(`PRAGMA table_info("MerchListing")`) as Array<{ name?: string }>;
    return new Set(rows.map((row) => String(row.name ?? "")).filter(Boolean));
  } catch {
    return new Set();
  }
}

export async function ensureMerchSchema(prisma: PrismaClient): Promise<void> {
  if (!globalForMerch.merchSchemaPromise) {
    globalForMerch.merchSchemaPromise = (async () => {
      for (const sql of CREATE_STATEMENTS) {
        await prisma.$executeRawUnsafe(sql);
      }
      const columns = await listingColumnNames(prisma);
      if (!columns.has("printifyProductId")) {
        await prisma.$executeRawUnsafe(`ALTER TABLE "MerchListing" ADD COLUMN "printifyProductId" TEXT`);
      }
      if (!columns.has("printifyVariantsJson")) {
        await prisma.$executeRawUnsafe(`ALTER TABLE "MerchListing" ADD COLUMN "printifyVariantsJson" TEXT`);
      }
      await prisma.$executeRawUnsafe(
        `CREATE UNIQUE INDEX IF NOT EXISTS "MerchListing_printifyProductId_key" ON "MerchListing"("printifyProductId")`,
      );
    })().catch((err) => {
      globalForMerch.merchSchemaPromise = null;
      throw err;
    });
  }
  await globalForMerch.merchSchemaPromise;
}

export async function getMerchPrisma(): Promise<PrismaClient> {
  const { getPrisma } = await import("@/lib/prisma");
  const prisma = await getPrisma();
  await ensureMerchSchema(prisma);
  return prisma;
}
