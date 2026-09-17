export function slugify(value: string): string {
  const slug = value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return slug || "nlmsf-merch";
}

export async function uniqueListingSlug(
  prisma: { merchListing: { findUnique: (args: { where: { slug: string } }) => Promise<{ id: string } | null> } },
  base: string,
): Promise<string> {
  let slug = slugify(base);
  let i = 2;
  while (await prisma.merchListing.findUnique({ where: { slug } })) {
    slug = `${slugify(base)}-${i}`;
    i += 1;
  }
  return slug;
}
