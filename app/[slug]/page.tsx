import type { Metadata } from "next";
import { permanentRedirect, notFound } from "next/navigation";
import TributePageClient from "@/app/tribute/[slug]/TributePageClient";
import { getResolvedTributeSlug } from "@/lib/tribute-resolve";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const base = "Tribute | NLMSF";
  return {
    title: `${slug.replace(/-/g, " ")} ${base}`,
    description: "Honor and remember through our community tribute page.",
  };
}

export default async function TributeSlugPage({ params }: Props) {
  const { slug } = await params;
  const actualSlug = await getResolvedTributeSlug(slug);
  if (!actualSlug) notFound();
  // Permanent redirect (308): short slugs → canonical long URL so Google treats it as a legit move
  if (actualSlug !== slug) {
    permanentRedirect(`/${actualSlug}`);
  }
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <TributePageClient slugPromise={Promise.resolve({ slug: actualSlug })} />
    </main>
  );
}
