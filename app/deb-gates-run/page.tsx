import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import {
  DEB_GATES_RUN,
  debGatesEventReady,
  debGatesPhotoReady,
} from "@/lib/deb-gates-run";

const PAGE_TITLE = "Deb Gates — Running in Memory | NLMSF";
const PAGE_DESCRIPTION =
  "Deb Gates shared her story with the National Leiomyosarcoma Foundation: uterine leiomyosarcoma survivorship, running in memory of Stephen A. Gates, MD, and support for NLMSF.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://nlmsf.org/deb-gates-run/",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://nlmsf.org/deb-gates-run/",
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

const sectionTitle = {
  background: "linear-gradient(90deg, #7e22ce, #4338ca)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 text-2xl font-bold md:text-[1.75rem]" style={sectionTitle}>
      {children}
    </h2>
  );
}

export default function DebGatesRunPage() {
  const showEvent = debGatesEventReady();
  const showPhoto = debGatesPhotoReady();

  return (
    <main>
      <section className="relative mx-auto mb-8 max-w-[1400px] rounded-xl bg-white px-6 py-12 text-center shadow-sm">
        <div
          className="absolute inset-0 z-[1] rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(126, 34, 206, 0.05), rgba(67, 56, 202, 0.1))",
          }}
        />
        <div className="relative z-[2]">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-[30px] px-4 py-1.5 text-sm font-semibold text-white"
            style={{ background: "linear-gradient(90deg, #7e22ce, #4338ca)" }}
          >
            <i className="fas fa-person-running" aria-hidden />
            <span>Story shared with NLMSF</span>
          </div>
          <h1
            className="mb-4 pb-1 text-3xl font-bold leading-tight md:text-5xl"
            style={sectionTitle}
          >
            Deb Gates
          </h1>
          <p className="mx-auto mb-4 max-w-[700px] text-lg text-gray-600">
            Running in memory of Stephen A. Gates, MD
          </p>
          {showEvent ? (
            <p className="mx-auto mb-4 max-w-[700px] text-base font-semibold text-[#4338ca]">
              {DEB_GATES_RUN.eventName}
              <span className="mx-2 text-gray-300" aria-hidden>
                ·
              </span>
              {DEB_GATES_RUN.eventDate}
              {DEB_GATES_RUN.eventLocation.trim() ? (
                <>
                  <span className="mx-2 text-gray-300" aria-hidden>
                    ·
                  </span>
                  {DEB_GATES_RUN.eventLocation}
                </>
              ) : null}
            </p>
          ) : null}
          <p className="mx-auto max-w-[640px] text-base leading-relaxed text-gray-500">
            This is Deb&apos;s story, as she shared it with the National
            Leiomyosarcoma Foundation.
          </p>
          {showPhoto ? (
            <div className="mx-auto mt-8 grid w-full max-w-[800px] grid-cols-1 items-center justify-items-center gap-6 md:grid-cols-2 md:gap-10">
              <figure className="m-0 w-full max-w-[400px]">
                <Image
                  src={DEB_GATES_RUN.photoSrc}
                  alt={DEB_GATES_RUN.photoAlt}
                  width={DEB_GATES_RUN.photoWidth}
                  height={DEB_GATES_RUN.photoHeight}
                  className="h-auto w-full rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                  sizes="(min-width: 768px) 380px, 90vw"
                  priority
                />
                <figcaption className="mt-2 text-center text-sm text-gray-500">
                  {DEB_GATES_RUN.photoCaption}
                </figcaption>
              </figure>
              <figure className="m-0 w-full max-w-[400px]">
                <Image
                  src={DEB_GATES_RUN.logoSrc}
                  alt={DEB_GATES_RUN.logoAlt}
                  width={DEB_GATES_RUN.logoWidth}
                  height={DEB_GATES_RUN.logoHeight}
                  className="h-auto w-full rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                  sizes="(min-width: 768px) 380px, 90vw"
                />
                <figcaption className="mt-2 text-center text-sm text-gray-500">
                  {DEB_GATES_RUN.logoCaption}
                </figcaption>
              </figure>
            </div>
          ) : null}
        </div>
      </section>

      <div className="mx-auto max-w-[800px] space-y-8 px-4 pb-16 md:px-6">
        <section className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-lg shadow-gray-200/50 md:p-10">
          <SectionHeading>Nearly thirty years of survivorship</SectionHeading>
          <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
            <p>
              On Christmas Eve 1997, Deb Gates was diagnosed with uterine
              leiomyosarcoma after a hysterectomy with morcellation. She has
              since faced melanomas and nine surgeries, and she has received
              care at Memorial Sloan Kettering.
            </p>
            <p>
              Deb says she is the longest uterine leiomyosarcoma survivor in
              the world, 30 years out. The foundation shares that as her own
              statement.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-lg shadow-gray-200/50 md:p-10">
          <SectionHeading>Running in his memory</SectionHeading>
          <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
            <p>
              Her husband, Stephen A. Gates, MD, died on July 22, 2006, at age
              53. Deb says the Seattle Marathon on November 30, 2007 — his
              birthday — turned her toward life. She went on to triathlons,
              relays, and rides, always running in his memory with a banner.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-lg shadow-gray-200/50 md:p-10">
          <SectionHeading>Hospital safety advocacy</SectionHeading>
          <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
            <p>
              Deb says she successfully advocated for Washington State to adopt
              national hospital safety construction standards in 2008, with more
              in 2010, including emergency pull cords in hospital bathrooms. She
              says she is now advocating at the federal level.
            </p>
            <p>
              Her advocacy is also on the public record. In a Washington State
              Department of Health comment report, Deborah W. Gates proposed
              emergency assistance systems in hospital toilets, and she wrote
              that the department adopted a 2006 Facility Guidelines Institute
              standard for hospital toilets after formal comments she submitted
              in March 2008. In 2010, Washington adopted most of the 2010
              Guidelines for Design and Construction of Health Care Facilities.
              That text encourages hospitals to install assistance systems in
              public and staff toilets when they build or renovate.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-base">
              <li>
                <a
                  href="https://doh.wa.gov/sites/default/files/legacy/Documents/2300/2014/346-070ReportComments.pdf"
                  className="font-semibold text-[#7e22ce] no-underline hover:underline"
                  {...ext}
                >
                  Washington State Department of Health comment report (PDF)
                </a>
              </li>
              <li>
                <a
                  href="https://lawfilesext.leg.wa.gov/law/wsr/2010/17/10-17-120.htm"
                  className="font-semibold text-[#7e22ce] no-underline hover:underline"
                  {...ext}
                >
                  2010 Washington State Register notice (WSR 10-17-120)
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-lg shadow-gray-200/50 md:p-10">
          <SectionHeading>With thanks</SectionHeading>
          <p className="text-base leading-relaxed text-gray-700 md:text-lg">
            Deb thanks the LMS advocacy community and fellow patients.
          </p>
        </section>

        <section className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-lg shadow-gray-200/50">
          <div className="flex flex-col items-center gap-4 px-6 py-10 text-center md:px-12">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full"
              style={{ background: "linear-gradient(135deg, #7e22ce, #4338ca)" }}
            >
              <i className="fas fa-hand-holding-heart text-2xl text-white" aria-hidden />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-[1.75rem]">
              Support NLMSF
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              Give through the foundation&apos;s donation form. Your gift
              supports leiomyosarcoma research and programs for patients and
              families.
            </p>
            <div className="mt-2 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={DEB_GATES_RUN.donateHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white no-underline transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4338ca] sm:w-auto"
                style={{
                  background: "linear-gradient(135deg, #7e22ce, #4338ca)",
                  boxShadow: "0 4px 14px rgba(126, 34, 206, 0.4)",
                }}
              >
                <i className="fas fa-donate" aria-hidden />
                Donate to NLMSF
              </a>
              <a
                href="/donate/"
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#7e22ce] px-8 py-4 text-lg font-semibold text-[#7e22ce] no-underline transition-all duration-300 hover:bg-[#7e22ce] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7e22ce] sm:w-auto"
              >
                Other ways to give
              </a>
            </div>
            <p className="m-0 max-w-xl text-sm leading-relaxed text-gray-500">
              Story shared with NLMSF. This page does not track a separate
              fundraising total.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
