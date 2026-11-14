import type { Metadata } from "next";
import Link from "next/link";
import {
  AT_THE_HEART_CLOSING,
  AT_THE_HEART_COMMITMENT_LEAD,
  AT_THE_HEART_COMMITMENTS,
  AT_THE_HEART_INTRO,
  AT_THE_HEART_PATH,
  AT_THE_HEART_TITLE,
} from "@/lib/at-the-heart-message";

const PAGE_TITLE = "At the Heart of the National Leiomyosarcoma Foundation | NLMSF";
const PAGE_DESCRIPTION =
  "Every leiomyosarcoma (LMS) diagnosis deserves to be understood individually. A message from the National Leiomyosarcoma Foundation.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `https://nlmsf.org${AT_THE_HEART_PATH}` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `https://nlmsf.org${AT_THE_HEART_PATH}`,
    type: "article",
  },
};

export default function AtTheHeartPage() {
  return (
    <main className="bg-gradient-to-b from-[#f5f3ff] to-white">
      <section className="bg-gradient-to-br from-[#6b46c1] to-[#4c1d95] px-6 py-14 text-center text-white">
        <p className="m-0 text-xs font-semibold uppercase tracking-widest text-white/75">
          A message from NLMSF
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl">
          {AT_THE_HEART_TITLE}
        </h1>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-12 text-[1.0625rem] leading-[1.8] text-gray-800">
        {AT_THE_HEART_INTRO.map((p, i) => (
          <p
            key={i}
            className={
              i === 0
                ? "mb-6 text-xl font-semibold leading-relaxed text-[#3b2768]"
                : "mb-6"
            }
          >
            {p}
          </p>
        ))}

        <p className="mb-4 font-medium text-[#3b2768]">
          {AT_THE_HEART_COMMITMENT_LEAD}
        </p>
        <ul className="mb-8 list-none space-y-2 p-0">
          {AT_THE_HEART_COMMITMENTS.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5b21b6] text-xs font-bold leading-none text-white"
                aria-hidden
              >
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {AT_THE_HEART_CLOSING.map((p, i) => (
          <p key={i} className="mb-6 font-medium text-[#3b2768]">
            {p}
          </p>
        ))}

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/new-diagnosis/"
            className="inline-flex items-center rounded-full bg-[#5b21b6] px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-[#4c1d95]"
          >
            Newly diagnosed? Start here
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center rounded-full border-2 border-[#5b21b6] px-5 py-2.5 text-sm font-semibold text-[#5b21b6] no-underline hover:bg-[#5b21b6] hover:text-white"
          >
            Get support
          </Link>
        </div>
      </article>
    </main>
  );
}
