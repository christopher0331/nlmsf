/**
 * Prisma seed: creates sample tributes so /tributes-directory has data.
 * Run: npx prisma db seed
 */
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");

const url = process.env.DATABASE_URL || "file:" + path.join(__dirname, "dev.db");
const adapter = new PrismaBetterSqlite3({ url });
const prisma = new PrismaClient({ adapter });

const tributes = [
  {
    slug: "andria-barnes-ruth-tribute-page",
    name: "Andria Barnes Ruth",
    biography: `Andria Barnes Ruth passed away on June 29, 2023 at the age of 58, secondary to leiomyosarcoma. She courageously underwent extensive treatment regimens to control the disease as best as possible. She was very thankful for the family and professional experiences she was able to enjoy as a result of these treatment programs. Her family thanks you for contributing to leiomyosarcoma research as we strive to find more effective treatment options.

Andria was a gifted pediatrician who devoted her career to bettering the lives of children. She formed deep and lasting relationships with her patients, remembering small details about their lives and interests.

Andria and her husband Rob raised their three children with love and cultivated in them a desire for learning and individual growth. She joined her children in every one of their passions and cherished their accomplishments. As she faced growing health challenges, Andria's tenacious spirit was unwavering and she maintained her commitment to her work and her family. Her faith in the Lord Jesus Christ strengthened her and she faced every trial with optimism.`,
    imageUrl: "https://nlsmf.org/wp-content/uploads/2023/08/Andria-Barnes-Ruth-Photo-scaled.jpg",
  },
  {
    slug: "anna-marmo-tribute-page",
    name: "Anna Marmo",
    biography: "In loving memory of Anna Marmo. Honor her legacy by making a donation in her memory to support leiomyosarcoma research.",
    imageUrl: null,
  },
];

async function main() {
  for (const t of tributes) {
    const existing = await prisma.tribute.findFirst({ where: { slug: t.slug } });
    if (existing) {
      console.log("Tribute already exists: " + t.slug);
      continue;
    }
    await prisma.tribute.create({
      data: {
        name: t.name,
        slug: t.slug,
        biography: t.biography,
        imageUrl: t.imageUrl,
        isPublished: true,
      },
    });
    console.log("Created tribute: " + t.name + " (slug: " + t.slug + ").");
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
