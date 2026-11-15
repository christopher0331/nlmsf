import {
  LINKEDIN_COMPANY_URL,
  formatLinkedInPostDate,
  getLatestLinkedInPosts,
  linkedInPostHref,
} from "@/lib/linkedin-posts";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"
      />
    </svg>
  );
}

/**
 * Server-rendered homepage feed. Content comes from `data/linkedin-posts.json`.
 * No LinkedIn embed script.
 */
export default function LatestFromLinkedIn() {
  const posts = getLatestLinkedInPosts();
  if (posts.length === 0) return null;

  return (
    <section
      id="latest-from-linkedin"
      className="mx-auto w-full max-w-[1200px] px-4 pb-10 sm:px-8"
      aria-labelledby="latest-from-linkedin-heading"
    >
      <div className="overflow-hidden rounded-2xl border border-[#ddd6fe] bg-gradient-to-br from-[#f5f3ff] via-white to-[#faf5ff] shadow-[0_6px_22px_rgba(107,70,193,0.12)]">
        <div
          className="h-1.5 bg-gradient-to-r from-[#6b46c1] via-[#7c3aed] to-[#c4b5fd]"
          aria-hidden="true"
        />
        <div className="px-4 py-6 sm:px-6 sm:py-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="m-0 text-xs font-semibold uppercase tracking-widest text-[#5b21b6]">
                NLMSF on LinkedIn
              </p>
              <h2
                id="latest-from-linkedin-heading"
                className="m-0 mt-1 text-2xl font-extrabold leading-tight text-[#4c1d95]"
              >
                Latest from LinkedIn
              </h2>
            </div>
            <a
              href={LINKEDIN_COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn (opens in a new tab)"
              className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-[#6b46c1] px-4 py-2.5 text-sm font-semibold text-white no-underline shadow-sm transition-colors hover:bg-[#4c1d95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e1b4b] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
            >
              <LinkedInIcon className="h-4 w-4 shrink-0" />
              Follow us on LinkedIn
            </a>
          </div>

          <ul className="m-0 mt-6 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
            {posts.map((post) => {
              const href = linkedInPostHref(post);
              const dateLabel = formatLinkedInPostDate(post.date);
              const headingId = `linkedin-post-${post.id}`;
              return (
                <li key={post.id} className="min-w-0">
                  <article
                    aria-labelledby={headingId}
                    className="flex h-full flex-col rounded-xl border border-[#ddd6fe] bg-white p-4 shadow-[0_4px_16px_rgba(107,70,193,0.08)] sm:p-5"
                  >
                    <time
                      dateTime={post.date}
                      className="text-xs font-bold uppercase tracking-[0.08em] text-[#7e22ce]"
                    >
                      {dateLabel}
                    </time>
                    {post.image ? (
                      // eslint-disable-next-line @next/next/no-img-element -- optional post images may be any http(s) URL supplied in the data file
                      <img
                        src={post.image}
                        alt=""
                        className="mt-3 aspect-[16/9] w-full rounded-lg object-cover"
                      />
                    ) : null}
                    <p
                      id={headingId}
                      className="m-0 mt-3 line-clamp-4 whitespace-pre-line text-[0.95rem] leading-relaxed text-gray-800"
                    >
                      {post.text}
                    </p>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read the ${dateLabel} post on LinkedIn: ${post.text}. Opens in a new tab.`}
                      className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-[#7e22ce] no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7e22ce]"
                    >
                      Read on LinkedIn
                      <span aria-hidden="true">→</span>
                    </a>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
