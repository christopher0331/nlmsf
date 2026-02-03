"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DonateCTA from "@/components/DonateCTA";

type TributeData = {
  id: string;
  name: string;
  slug: string;
  biography: string;
  image_url: string | null;
  created_at: string;
  donors: Array<{
    id: string;
    donor_name: string;
    donation_amount: number | null;
    donation_date: string | null;
    is_anonymous: boolean;
    message: string | null;
    created_at: string;
  }>;
  comments: Array<{
    id: string;
    commenter_name: string;
    comment_text: string;
    created_at: string;
  }>;
};

type Props = { slugPromise: Promise<{ slug: string }> };

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return iso;
  }
}

function formatBiography(html: string): React.ReactNode {
  if (!html) return null;
  if (html.includes("<") && html.includes(">")) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return html.split(/\n\n/).map((p, i) => <p key={i} className="mb-3 last:mb-0">{p}</p>);
}

export default function TributePageClient({ slugPromise }: Props) {
  const [slug, setSlug] = useState<string | null>(null);
  const [data, setData] = useState<TributeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [commentForm, setCommentForm] = useState({ name: "", email: "", text: "" });
  const [commentSubmitting, setCommentSubmitting] = useState(false);
  const [commentSuccess, setCommentSuccess] = useState(false);

  useEffect(() => {
    slugPromise.then((p) => setSlug(p.slug));
  }, [slugPromise]);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    setLoading(true);
    fetch(`/api/tributes/${encodeURIComponent(slug)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((d) => {
        if (!cancelled) setData(d);
      })
      .catch(() => {
        if (!cancelled) setData(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [slug]);

  // Canonical: long URL (with -tribute-page), the redirect target
  useEffect(() => {
    if (!data?.slug || typeof document === "undefined") return;
    const href = `${typeof window !== "undefined" ? window.location.origin : ""}/${data.slug}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = href;
    return () => {
      link?.remove();
    };
  }, [data?.slug]);

  async function handleCommentSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!slug || !commentForm.name.trim() || !commentForm.text.trim()) return;
    setCommentSubmitting(true);
    setCommentSuccess(false);
    try {
      const res = await fetch(`/api/tributes/${encodeURIComponent(slug)}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          commenter_name: commentForm.name.trim(),
          commenter_email: commentForm.email.trim() || undefined,
          comment_text: commentForm.text.trim(),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      const newComment = await res.json();
      setData((prev) =>
        prev
          ? { ...prev, comments: [newComment, ...prev.comments] }
          : null
      );
      setCommentForm({ name: "", email: "", text: "" });
      setCommentSuccess(true);
    } catch {
      alert("Failed to share your memory. Please try again.");
    } finally {
      setCommentSubmitting(false);
    }
  }

  if (loading || !slug) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center py-16 text-gray-500">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-200 border-t-[#7e22ce]" />
        <p className="mt-4">Loading tribute page...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="mx-auto max-w-[800px] px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Tribute not found</h1>
        <p className="mt-2 text-gray-600">The requested tribute page could not be found.</p>
        <Link
          href="/tributes-directory/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#7e22ce] px-4 py-2.5 font-semibold text-white hover:bg-[#6b21a8]"
        >
          <i className="fas fa-arrow-left" aria-hidden /> Back to directory
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1200px]">
      {/* Main: two columns */}
      <div className="grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[2fr_1fr] md:gap-12 md:px-6 md:pr-8">
        <div className="min-w-0 pr-0 md:pr-8">
          <section className="mb-10">
            <h2 className="mb-6 flex items-center justify-center gap-3 rounded-xl border border-[#7e22ce]/10 bg-gradient-to-r from-[#7e22ce]/5 to-[#4338ca]/5 px-6 py-4 pb-5 text-center text-xl font-bold leading-snug text-gray-700 md:text-2xl">
              <i className="fas fa-heart text-[#7e22ce]" aria-hidden />
              Celebrating the life of {data.name.toUpperCase()}
            </h2>
            {data.image_url && (
              <div className="mx-auto mb-8 h-[250px] w-[250px] overflow-hidden rounded-full border-6 border-white bg-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.15)] md:h-[300px] md:w-[300px]">
                <img
                  src={data.image_url}
                  alt={data.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            )}
            <h3 className="mb-3 inline-block border-b-4 border-[#7e22ce] pb-2 text-xl font-bold text-gray-900 md:text-2xl">
              {data.name}&apos;s story
            </h3>
            <div className="rounded-xl border-l-4 border-[#7e22ce] bg-[#f8fafc] p-6 text-lg leading-relaxed text-gray-700">
              {formatBiography(data.biography)}
            </div>
          </section>

          <section className="mb-10">
            <DonateCTA tributeName={data.name} />
          </section>

          <section className="rounded-xl border border-gray-200 bg-[#f8fafc] p-6">
            <h3 className="mb-4 text-center text-xl font-bold text-gray-900 md:text-2xl">
              Comments & memories
            </h3>
            <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4">
              <h4 className="mb-1 text-base font-semibold text-gray-900">Share a memory</h4>
              <p className="mb-4 text-sm text-gray-500">
                Leave a comment or share a special memory about {data.name}
              </p>
              <form onSubmit={handleCommentSubmit} className="space-y-3">
                <div>
                  <label htmlFor="comment-name" className="mb-1 block text-sm font-medium text-gray-700">
                    Your name *
                  </label>
                  <input
                    id="comment-name"
                    type="text"
                    required
                    value={commentForm.name}
                    onChange={(e) => setCommentForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#7e22ce] focus:outline-none focus:ring-2 focus:ring-[#7e22ce]/20"
                  />
                </div>
                <div>
                  <label htmlFor="comment-email" className="mb-1 block text-sm font-medium text-gray-700">
                    Your email
                  </label>
                  <input
                    id="comment-email"
                    type="email"
                    value={commentForm.email}
                    onChange={(e) => setCommentForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#7e22ce] focus:outline-none focus:ring-2 focus:ring-[#7e22ce]/20"
                  />
                  <p className="mt-0.5 text-xs text-gray-500">Your email will not be displayed publicly.</p>
                </div>
                <div>
                  <label htmlFor="comment-text" className="mb-1 block text-sm font-medium text-gray-700">
                    Your memory or comment *
                  </label>
                  <textarea
                    id="comment-text"
                    required
                    rows={4}
                    value={commentForm.text}
                    onChange={(e) => setCommentForm((f) => ({ ...f, text: e.target.value }))}
                    placeholder={`Share a special memory about ${data.name}...`}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#7e22ce] focus:outline-none focus:ring-2 focus:ring-[#7e22ce]/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={commentSubmitting}
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#7e22ce] to-[#4338ca] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(126,34,206,0.3)] transition hover:from-[#6b21a8] hover:to-[#3730a3] disabled:opacity-70"
                >
                  {commentSubmitting ? (
                    <><i className="fas fa-spinner fa-spin" aria-hidden /> Sharing...</>
                  ) : (
                    <><i className="fas fa-heart" aria-hidden /> Share memory</>
                  )}
                </button>
              </form>
              {commentSuccess && (
                <p className="mt-3 text-sm font-medium text-green-600">Thank you for sharing your memory.</p>
              )}
            </div>
            <h4 className="mb-4 text-center text-lg font-bold text-gray-900">Memories shared</h4>
            {data.comments.length === 0 ? (
              <p className="rounded-lg border-2 border-dashed border-gray-300 bg-white py-8 text-center text-gray-500">
                No memories shared yet. Be the first to share a memory about this person.
              </p>
            ) : (
              <ul className="space-y-4">
                {data.comments.map((c) => (
                  <li
                    key={c.id}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
                  >
                    <div className="mb-2 flex items-center justify-between border-b border-gray-100 pb-2">
                      <span className="flex items-center gap-2 font-semibold text-gray-900">
                        <i className="fas fa-user-circle text-[#7e22ce]" aria-hidden />
                        {c.commenter_name}
                      </span>
                      <span className="text-xs text-gray-500">{formatDate(c.created_at)}</span>
                    </div>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {c.comment_text}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        <aside className="border-t-2 border-gray-200 pt-8 md:border-l-2 md:border-t-0 md:pl-8">
          <div className="sticky top-8 rounded-xl border border-gray-200 bg-[#f8fafc] p-6 shadow-[0_4px_6px_rgba(0,0,0,0.05)]">
            <h2 className="mb-4 flex items-center justify-center gap-2 text-xl font-bold text-red-600">
              <i className="fas fa-heart" aria-hidden />
              Donations in honor of {data.name}
            </h2>
            {data.donors.length === 0 ? (
              <div className="rounded-lg border-2 border-dashed border-gray-300 bg-white py-8 text-center text-gray-500">
                No donations yet. Be the first to make a donation in honor of {data.name}.
              </div>
            ) : (
              <ul className="flex flex-col gap-4">
                {data.donors.map((d) => (
                  <li
                    key={d.id}
                    className="rounded-lg border-l-4 border-red-600 bg-white p-4 shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                  >
                    <p className="font-semibold text-gray-900">
                      {d.is_anonymous ? "Anonymous" : d.donor_name}
                    </p>
                    {d.donation_amount != null && d.donation_amount > 0 && (
                      <p className="font-semibold text-green-600">
                        ${Number(d.donation_amount).toFixed(2)}
                      </p>
                    )}
                    {d.donation_date && (
                      <p className="text-xs text-gray-400">{formatDate(d.donation_date)}</p>
                    )}
                    {d.message && d.message.trim() && (
                      <p className="mt-2 border-t border-gray-100 pt-2 text-sm italic text-gray-600">
                        &quot;{d.message}&quot;
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
