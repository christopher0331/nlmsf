import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getFullFeed } from "@/lib/community-news";
import CommunityNewsFeed from "./CommunityNewsFeed";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "NLMSF Community Snapshot News | NLMSF",
  description:
    "Community stories, events, and important announcements from the National LeiomyoSarcoma Foundation. Stay connected with our LMS family.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

function snapshotYears(snapshots: { year: string }[]): string[] {
  const set = new Set(snapshots.map((s) => s.year));
  return Array.from(set).sort((a, b) => Number(b) - Number(a));
}

export default async function CommunitySnapshotNewsPage() {
  const { snapshots, newsTracker } = await getFullFeed();
  const years = snapshotYears(snapshots);
  const latestSnapshot = snapshots[0] ?? null;
  const latestNewsletter = newsTracker[0] ?? null;

  return (
    <main>
      {/* Hero */}
      <section
        className="relative rounded-xl py-12 px-6 md:px-8 mb-12 overflow-hidden max-w-[1400px] mx-auto"
        style={{
          background: "linear-gradient(135deg, rgba(126, 34, 206, 0.05) 0%, rgba(67, 56, 202, 0.07) 100%)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Decorative shapes */}
        <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden>
          <div
            className="absolute rounded-full opacity-10 w-20 h-20 animate-float"
            style={{ top: "10%", left: "15%", background: "linear-gradient(135deg, #7e22ce, #a855f7)" }}
          />
          <div
            className="absolute rounded-full opacity-10 w-28 h-28 md:w-32 md:h-32 animate-float"
            style={{ top: "60%", right: "20%", background: "linear-gradient(135deg, #4338ca, #6366f1)", animationDelay: "2s" }}
          />
          <div
            className="absolute rounded-full opacity-10 w-14 h-14 md:w-16 md:h-16 animate-float"
            style={{ bottom: "20%", left: "25%", background: "linear-gradient(135deg, #0891b2, #06b6d4)", animationDelay: "4s" }}
          />
        </div>

        <div className="relative z-[2] text-center max-w-[800px] mx-auto">
          <h1
            className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight"
            style={{
              background: "linear-gradient(to right, #7e22ce, #4338ca)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            NLMSF Community Snapshot News
          </h1>
          <div
            className="w-20 h-1 rounded mx-auto my-6"
            style={{ background: "linear-gradient(to right, #7e22ce, #4338ca)" }}
            aria-hidden
          />
          <p className="text-xl font-semibold text-indigo-500 mb-4">
            Community Stories, Events, and Important Announcements
          </p>
          <p className="text-lg text-slate-600 max-w-[600px] mx-auto leading-relaxed">
            Stay connected with the National LeiomyoSarcoma Foundation community through our snapshot news updates. Featuring patient stories, community events, advocacy efforts, and important announcements from our growing LMS family.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 grid grid-cols-1 gap-10 items-start lg:grid-cols-[280px_1fr]">
        <aside className="sticky top-24 max-lg:static order-2 lg:order-1">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <nav aria-label="Community navigation">
              <h3
                className="text-xl font-bold mb-4"
                style={{
                  background: "linear-gradient(to right, #7e22ce, #4338ca)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Community Navigation
              </h3>
              <ul className="list-none p-0 m-0 space-y-1 mb-8">
                <li>
                  <Link
                    href="/community-snapshot-news"
                    className="flex items-center gap-3 py-3 px-4 rounded-lg font-medium no-underline transition-all bg-violet-50 text-violet-700 border-l-4 border-violet-600"
                  >
                    <i className="fas fa-home w-4 text-center" aria-hidden /> Community Home
                  </Link>
                </li>
                {years.map((y) => (
                  <li key={y}>
                    <a href={`#${y}`} className="flex items-center gap-3 py-3 px-4 rounded-lg text-slate-600 font-medium no-underline transition-all hover:bg-violet-50 hover:text-violet-700 hover:pl-5">
                      <i className="fas fa-calendar-alt w-4 text-center" aria-hidden /> {y} Snapshots
                    </a>
                  </li>
                ))}
                <li>
                  <Link href="/patient-stories" className="flex items-center gap-3 py-3 px-4 rounded-lg text-slate-600 font-medium no-underline transition-all hover:bg-violet-50 hover:text-violet-700 hover:pl-5">
                    <i className="fas fa-heart w-4 text-center" aria-hidden /> Patient Stories
                  </Link>
                </li>
                <li>
                  <Link href="/community-events" className="flex items-center gap-3 py-3 px-4 rounded-lg text-slate-600 font-medium no-underline transition-all hover:bg-violet-50 hover:text-violet-700 hover:pl-5">
                    <i className="fas fa-calendar-check w-4 text-center" aria-hidden /> Community Events
                  </Link>
                </li>
                <li>
                  <Link href="/advocacy" className="flex items-center gap-3 py-3 px-4 rounded-lg text-slate-600 font-medium no-underline transition-all hover:bg-violet-50 hover:text-violet-700 hover:pl-5">
                    <i className="fas fa-bullhorn w-4 text-center" aria-hidden /> Advocacy Efforts
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="mb-8">
              <h3
                className="text-xl font-bold mb-4"
                style={{
                  background: "linear-gradient(to right, #7e22ce, #4338ca)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Recent Updates
              </h3>
              <ul className="list-none p-0 m-0 space-y-3">
                {latestNewsletter && (
                  <li>
                    <a href={latestNewsletter.url} className="block p-4 bg-gray-50 rounded-lg text-gray-800 no-underline transition-all border-l-4 border-gray-200 hover:bg-violet-50/50 hover:border-violet-500 hover:text-violet-700" {...ext}>
                      <span className="font-medium">{latestNewsletter.title}</span>
                      <span className="block text-sm text-slate-500 mt-1">{latestNewsletter.display_date}</span>
                    </a>
                  </li>
                )}
                {latestSnapshot && (
                  <li>
                    <a href={latestSnapshot.url} className="block p-4 bg-gray-50 rounded-lg text-gray-800 no-underline transition-all border-l-4 border-gray-200 hover:bg-violet-50/50 hover:border-violet-500 hover:text-violet-700" {...ext}>
                      <span className="font-medium">{latestSnapshot.title}</span>
                      <span className="block text-sm text-slate-500 mt-1">{latestSnapshot.display_date}</span>
                    </a>
                  </li>
                )}
                {!latestSnapshot && !latestNewsletter && (
                  <li>
                    <span className="block p-4 bg-gray-50 rounded-lg text-gray-800 border-l-4 border-gray-200">
                      <span className="font-medium">Community Updates Coming Soon</span>
                      <span className="block text-sm text-slate-500 mt-1">—</span>
                    </span>
                  </li>
                )}
              </ul>
            </div>

            <div
              className="text-white p-6 rounded-xl text-center"
              style={{
                background: "linear-gradient(135deg, #7e22ce, #4338ca)",
              }}
            >
              <h3 className="text-lg font-bold text-white mb-2">Join Our Community</h3>
              <p className="text-white/90 text-sm mb-4 leading-relaxed">
                Connect with other LMS patients, caregivers, and advocates. Share your story and find support in our community.
              </p>
              <a
                href="https://nlmsf.org/support/"
                className="inline-block bg-white text-violet-700 font-semibold py-3 px-6 rounded-lg no-underline transition-all hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md"
                {...ext}
              >
                Get Support
              </a>
            </div>
          </div>
        </aside>

        <div className="min-w-0 order-1 lg:order-2">
          <div className="hero-badge flex justify-center mb-8">
            <Image
              src="https://media.nlmsf.org/wp-content/uploads/2025/08/snapshotlogo.png"
              alt="Community Snapshot Logo"
              className="snapshot-logo-badge max-w-[35%] h-auto drop-shadow-md transition-transform duration-300 hover:scale-105"
              width={240}
              height={240}
            />
          </div>

          <section className="content-section mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-4"
              style={{
                background: "linear-gradient(to right, #7e22ce, #4338ca)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              In the News...
            </h2>
            <p className="text-center text-slate-600 text-lg max-w-[800px] mx-auto mb-8">
              Browse our collection of Community Snapshot News for the latest updates and important information from the National LeiomyoSarcoma Foundation community.
            </p>

            <CommunityNewsFeed snapshots={snapshots} newsTracker={newsTracker} />
          </section>
        </div>
      </div>
    </main>
  );
}
