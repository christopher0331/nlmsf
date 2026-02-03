import { redirect } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

/** Redirect /tribute/[slug] to /[slug] to match nlmsf.org format (e.g. /andria-barnes-ruth-tribute-page). */
export default async function TributeSlugPage({ params }: Props) {
  const { slug } = await params;
  redirect(`/${slug}`);
}
