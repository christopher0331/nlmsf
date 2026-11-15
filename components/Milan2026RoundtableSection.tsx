import Image from "next/image";
import Link from "next/link";

/**
 * Homepage feature for the 2026 Milan Roundtable group photo.
 * Caption details come from the slide visible in the photo
 * (IEO, October 2–3, 2026); year confirmed by Christopher.
 */
export default function Milan2026RoundtableSection() {
  return (
    <section
      id="milan-2026-roundtable"
      className="mx-auto w-full max-w-[1600px] px-8 py-8"
      aria-labelledby="milan-2026-roundtable-title"
    >
      <article className="mx-auto max-w-[600px] overflow-hidden rounded-xl border border-[#ddd6fe] bg-white shadow-[0_6px_22px_rgba(107,70,193,0.13)]">
        <Image
          src="/images/roundtable/milan-roundtable-group-photo.jpg"
          alt="Group photo of participants at the 2026 International Leiomyosarcoma Roundtable, Milan, Italy (IEO, October 2–3, 2026)"
          width={2048}
          height={873}
          className="h-auto w-full"
          sizes="(min-width: 640px) 600px, 100vw"
        />
        <div className="px-5 py-5 md:px-6">
          <p className="m-0 text-xs font-semibold uppercase tracking-widest text-[#7c3aed]">
            International Research Roundtable
          </p>
          <h2
            id="milan-2026-roundtable-title"
            className="m-0 mt-2 text-2xl font-bold leading-tight text-[#4c1d95] md:text-[1.75rem]"
          >
            2026 International Research Roundtable &mdash; Milan
          </h2>
          <p className="m-0 mt-3 text-[0.98rem] leading-relaxed text-gray-700">
            The 2026 International Leiomyosarcoma Roundtable met October 2&ndash;3
            at the European Institute of Oncology (IEO) in Milan, Italy.
          </p>
          <Link
            href="/international-research-roundtable/#milan-roundtable-photo"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7e22ce] no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7e22ce]"
          >
            View the group photo on the International Research Roundtable page
            <span aria-hidden>→</span>
          </Link>
        </div>
      </article>
    </section>
  );
}
