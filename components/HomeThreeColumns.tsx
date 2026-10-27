import Image from "next/image";
import Link from "next/link";
import HomeEventsColumn from "@/components/HomeEventsColumn";
import DebGatesRunCard from "@/components/DebGatesRunCard";
import ClinicalTrialsCard from "@/components/ClinicalTrialsCard";
import StormTrialAlert from "@/components/StormTrialAlert";
import WebsiteNavigator from "@/components/WebsiteNavigator";

const ONCLIVE_IMG = "/images/nlmsf-science.png";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function HomeThreeColumns() {
  return (
    <section
      className="py-8 px-8 max-w-[1600px] mx-auto w-full"
      aria-label="Resources and navigation"
    >
      <div className="grid grid-cols-1 gap-12 items-start lg:grid-cols-3">
        {/* Left column: Journey Navigator + Storm trial alert + Clinical Trials + OncLive image */}
        <div className="flex flex-col gap-0">
          <WebsiteNavigator />

          <StormTrialAlert variant="compact" />

          <ClinicalTrialsCard />

          <div className="mt-6">
            <Image
              src={ONCLIVE_IMG}
              alt="OncLive Sarcoma"
              width={640}
              height={360}
              className="h-auto w-full rounded-xl object-cover shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
              sizes="(min-width: 1024px) 420px, 90vw"
            />
          </div>
        </div>

        {/* Center column: Support Hotline + Deb Gates run + commitment list */}
        <div className="flex flex-col">
          <div className="rounded-xl bg-gradient-to-br from-[#6b46c1] to-[#4c1d95] p-6 text-center text-white shadow-[0_4px_20px_rgba(107,70,193,0.25)] relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/[0.06] translate-x-1/3 -translate-y-1/3"
              aria-hidden
            />
            <div
              className="absolute bottom-0 left-0 w-28 h-28 rounded-full bg-white/[0.04] -translate-x-1/3 translate-y-1/3"
              aria-hidden
            />
            <div className="relative z-10">
              <p className="text-white/70 text-xs font-semibold uppercase tracking-widest m-0 mb-2">
                LMS Lifeline
              </p>
              <h2 className="text-2xl font-bold text-white m-0 mb-1 sm:text-xl">
                24/7 &mdash; We Are Here for You
              </h2>
              <div className="w-10 h-[2px] bg-white/30 mx-auto my-4 rounded-full" />
              <a
                href="tel:+13038083437"
                className="block text-[2.25rem] font-bold text-white no-underline mb-1 transition-opacity hover:opacity-85 leading-tight sm:text-3xl"
              >
                (303) 808-3437
              </a>
              <a
                href="tel:+13037830924"
                className="block text-lg text-white/70 font-medium no-underline mb-5 transition-opacity hover:opacity-85 hover:text-white/90 sm:text-base"
              >
                or (303) 783-0924
              </a>
              <div className="flex gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center py-2 px-4 bg-white/15 backdrop-blur-sm border border-white/25 text-white rounded-full no-underline text-sm font-medium transition-all duration-200 hover:bg-white/25 hover:-translate-y-0.5"
                >
                  <MessageIcon className="w-3.5 h-3.5 mr-1.5" />
                  Get Support
                </Link>
                <Link
                  href="/find-a-sarcoma-specialist/"
                  className="inline-flex items-center py-2 px-4 bg-white/15 backdrop-blur-sm border border-white/25 text-white rounded-full no-underline text-sm font-medium transition-all duration-200 hover:bg-white/25 hover:-translate-y-0.5"
                >
                  <SearchIcon className="w-3.5 h-3.5 mr-1.5" />
                  Find a Specialist
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <DebGatesRunCard />
          </div>

          <div className="mt-6 rounded-xl border border-gray-200 bg-white px-4 py-5 shadow-[0_4px_12px_rgba(15,23,42,0.06)] sm:px-5 sm:py-6">
            <p className="m-0 text-[0.9375rem] leading-relaxed text-gray-700">
              Through our website, educational programs, resources, and direct support, NLMSF is committed to helping patients and their families and caregivers:
            </p>
            <ul className="m-0 mt-4 list-disc space-y-2.5 pl-5 text-[0.9375rem] leading-relaxed text-gray-700 marker:text-[#6b46c1]">
              <li>Understand your diagnosis through clear, credible, patient-friendly information.</li>
              <li>Ask informed questions and have more meaningful conversations with their healthcare team.</li>
              <li>Find knowledgeable specialists and resources to help guide their care.</li>
              <li>Strengthen their voice and advocate for themselves throughout their journey.</li>
              <li>Feel supported and empowered from diagnosis through treatment, survivorship, and beyond.</li>
            </ul>
          </div>
        </div>

        {/* Right column: Upcoming Events + Recent Recordings */}
        <div>
          <HomeEventsColumn />
        </div>
      </div>

    </section>
  );
}
