/**
 * Import WordPress tribute data from CSV files (e.g. exported from phpMyAdmin).
 * Usage:
 *   node scripts/import-wordpress-tributes-from-csv.js
 *   node scripts/import-wordpress-tributes-from-csv.js /path/to/tributes.csv /path/to/donors.csv
 *
 * Default paths: ~/Downloads/qlr_nlmsf_tributes.csv and ~/Downloads/qlr_nlmsf_tribute_donors.csv
 */
const path = require("path");
const fs = require("fs");
const { parse } = require("csv-parse/sync");
require("dotenv").config({ path: path.join(process.cwd(), ".env") });
const { PrismaClient } = require("@prisma/client");
const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");

const projectRoot = process.cwd();
const dbPath = process.env.DATABASE_URL || "file:" + path.join(projectRoot, "prisma", "dev.db");
const defaultTributesCsv = path.join(process.env.HOME || process.env.USERPROFILE || "", "Downloads", "qlr_nlmsf_tributes.csv");
const defaultDonorsCsv = path.join(process.env.HOME || process.env.USERPROFILE || "", "Downloads", "qlr_nlmsf_tribute_donors.csv");

const adapter = new PrismaBetterSqlite3({ url: dbPath });
const prisma = new PrismaClient({ adapter });

function parseDate(s) {
  if (!s) return new Date();
  const d = new Date(s);
  return isNaN(d.getTime()) ? new Date() : d;
}

function parseCsv(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return parse(raw, {
    columns: true,
    relax_column_count: true,
    skip_empty_lines: true,
    trim: true,
  });
}

async function main() {
  const tributesPath = process.argv[2] || defaultTributesCsv;
  const donorsPath = process.argv[3] || defaultDonorsCsv;

  if (!fs.existsSync(tributesPath)) {
    console.error("Tributes CSV not found:", tributesPath);
    console.error("Usage: node scripts/import-wordpress-tributes-from-csv.js [tributes.csv] [donors.csv]");
    process.exit(1);
  }
  if (!fs.existsSync(donorsPath)) {
    console.error("Donors CSV not found:", donorsPath);
    process.exit(1);
  }

  console.log("Parsing", tributesPath, "...");
  const tributes = parseCsv(tributesPath);
  console.log("Parsing", donorsPath, "...");
  const donors = parseCsv(donorsPath);

  console.log("Clearing existing tribute data...");
  await prisma.tributeComment.deleteMany({});
  await prisma.tributeDonor.deleteMany({});
  await prisma.tribute.deleteMany({});

  const wpIdToPrismaId = {};

  console.log("Importing", tributes.length, "tributes...");
  for (const t of tributes) {
    const created = await prisma.tribute.create({
      data: {
        name: String(t.name ?? ""),
        slug: String(t.slug ?? "").trim() || "tribute-" + t.id,
        biography: String(t.biography ?? ""),
        imageUrl: t.image_url != null && t.image_url !== "" ? String(t.image_url) : null,
        displayOrder: Number(t.display_order) || 0,
        isPublished: String(t.is_published).trim() === "1",
        createdAt: parseDate(t.created_at),
        updatedAt: parseDate(t.updated_at),
      },
    });
    wpIdToPrismaId[Number(t.id)] = created.id;
  }

  console.log("Importing", donors.length, "donors...");
  let skipped = 0;
  for (const d of donors) {
    const tributeId = wpIdToPrismaId[Number(d.tribute_id)];
    if (!tributeId) {
      skipped++;
      continue;
    }
    const message = d.message != null && String(d.message).trim() !== "" && String(d.message).toLowerCase() !== "null"
      ? String(d.message)
      : null;
    await prisma.tributeDonor.create({
      data: {
        tributeId,
        donorName: String(d.donor_name ?? ""),
        donationAmount: d.donation_amount != null && d.donation_amount !== "" ? Number(d.donation_amount) : null,
        donationDate: d.donation_date != null && d.donation_date !== "" ? String(d.donation_date).trim() : null,
        isAnonymous: String(d.is_anonymous).trim() === "1",
        message,
        displayOrder: Number(d.display_order) || 0,
        createdAt: parseDate(d.created_at),
      },
    });
  }
  if (skipped) console.log("Skipped", skipped, "donors (tribute_id not found).");

  console.log("Done. Tributes directory will use this data when WordPress DB is not connected.");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
