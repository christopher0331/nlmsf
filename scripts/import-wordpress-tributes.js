/**
 * Import WordPress tribute tables into local Prisma/SQLite.
 * Replace data/wordpress-tributes-export.json with your export from phpMyAdmin, then run:
 *   node scripts/import-wordpress-tributes.js
 */
const path = require("path");
const fs = require("fs");
require("dotenv").config({ path: path.join(process.cwd(), ".env") });
const { PrismaClient } = require("@prisma/client");
const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");

const projectRoot = process.cwd();
const dataPath = path.join(projectRoot, "data", "wordpress-tributes-export.json");
const dbPath = process.env.DATABASE_URL || "file:" + path.join(projectRoot, "prisma", "dev.db");

const adapter = new PrismaBetterSqlite3({ url: dbPath });
const prisma = new PrismaClient({ adapter });

function parseDate(s) {
  if (!s) return new Date();
  const d = new Date(s);
  return isNaN(d.getTime()) ? new Date() : d;
}

async function main() {
  if (!fs.existsSync(dataPath)) {
    console.error("Missing file: data/wordpress-tributes-export.json");
    console.error("Copy your WordPress export there (see data/README.md).");
    process.exit(1);
  }

  const raw = fs.readFileSync(dataPath, "utf8");
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error("Invalid JSON in data/wordpress-tributes-export.json:", e.message);
    process.exit(1);
  }

  const tributes = Array.isArray(data.tributes) ? data.tributes : [];
  const donors = Array.isArray(data.donors) ? data.donors : [];
  const comments = Array.isArray(data.comments) ? data.comments : [];

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
        isPublished: Number(t.is_published) === 1,
        createdAt: parseDate(t.created_at),
        updatedAt: parseDate(t.updated_at),
      },
    });
    wpIdToPrismaId[Number(t.id)] = created.id;
  }

  console.log("Importing", donors.length, "donors...");
  for (const d of donors) {
    const tributeId = wpIdToPrismaId[Number(d.tribute_id)];
    if (!tributeId) continue;
    await prisma.tributeDonor.create({
      data: {
        tributeId,
        donorName: String(d.donor_name ?? ""),
        donationAmount: d.donation_amount != null ? Number(d.donation_amount) : null,
        donationDate: d.donation_date != null && d.donation_date !== "" ? String(d.donation_date) : null,
        isAnonymous: Number(d.is_anonymous) === 1,
        message: d.message != null && d.message !== "" ? String(d.message) : null,
        displayOrder: Number(d.display_order) || 0,
        createdAt: parseDate(d.created_at),
      },
    });
  }

  console.log("Importing", comments.length, "comments...");
  for (const c of comments) {
    const tributeId = wpIdToPrismaId[Number(c.tribute_id)];
    if (!tributeId) continue;
    await prisma.tributeComment.create({
      data: {
        tributeId,
        commenterName: String(c.commenter_name ?? ""),
        commenterEmail: c.commenter_email != null && c.commenter_email !== "" ? String(c.commenter_email) : null,
        commentText: String(c.comment_text ?? ""),
        isApproved: Number(c.is_approved) === 1,
        createdAt: parseDate(c.created_at),
      },
    });
  }

  console.log("Done. Tributes directory will use this data when WordPress DB is not connected.");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
