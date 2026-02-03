const path = require("path");
const { PrismaClient } = require("@prisma/client");
const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");
const { PrismaLibSql } = require("@prisma/adapter-libsql");

const sourceUrl =
  process.env.SOURCE_DATABASE_URL ||
  `file:${path.join(__dirname, "..", "prisma", "dev.db")}`;
const targetUrl = process.env.DATABASE_URL;
const tursoToken = process.env.TURSO_AUTH_TOKEN;

if (!targetUrl) {
  throw new Error("DATABASE_URL is required to clone to Turso.");
}

const source = new PrismaClient({
  adapter: new PrismaBetterSqlite3({ url: sourceUrl }),
});

const target = new PrismaClient({
  adapter: new PrismaLibSql({ url: targetUrl, authToken: tursoToken }),
});

async function main() {
  const [tableDefs, indexDefs, triggerDefs] = await Promise.all([
    source.$queryRaw`SELECT sql FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%' AND sql IS NOT NULL`,
    source.$queryRaw`SELECT sql FROM sqlite_master WHERE type = 'index' AND name NOT LIKE 'sqlite_%' AND sql IS NOT NULL`,
    source.$queryRaw`SELECT sql FROM sqlite_master WHERE type = 'trigger' AND name NOT LIKE 'sqlite_%' AND sql IS NOT NULL`,
  ]);

  for (const row of tableDefs) {
    await target.$executeRawUnsafe(row.sql);
  }
  for (const row of indexDefs) {
    await target.$executeRawUnsafe(row.sql);
  }
  for (const row of triggerDefs) {
    await target.$executeRawUnsafe(row.sql);
  }

  const [
    events,
    communityEntries,
    educationVideos,
    tributes,
    tributeDonors,
    tributeComments,
  ] = await Promise.all([
    source.event.findMany(),
    source.communityEntry.findMany(),
    source.educationVideo.findMany(),
    source.tribute.findMany(),
    source.tributeDonor.findMany(),
    source.tributeComment.findMany(),
  ]);

  await target.tributeComment.deleteMany();
  await target.tributeDonor.deleteMany();
  await target.tribute.deleteMany();
  await target.educationVideo.deleteMany();
  await target.communityEntry.deleteMany();
  await target.event.deleteMany();

  if (events.length) {
    await target.event.createMany({ data: events });
  }
  if (communityEntries.length) {
    await target.communityEntry.createMany({ data: communityEntries });
  }
  if (educationVideos.length) {
    await target.educationVideo.createMany({ data: educationVideos });
  }
  if (tributes.length) {
    await target.tribute.createMany({ data: tributes });
  }
  if (tributeDonors.length) {
    await target.tributeDonor.createMany({ data: tributeDonors });
  }
  if (tributeComments.length) {
    await target.tributeComment.createMany({ data: tributeComments });
  }

  console.log("Clone complete.");
}

main()
  .then(() => Promise.all([source.$disconnect(), target.$disconnect()]))
  .catch(async (error) => {
    console.error(error);
    await Promise.all([source.$disconnect(), target.$disconnect()]);
    process.exit(1);
  });
