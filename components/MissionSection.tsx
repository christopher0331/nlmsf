import Image from "next/image";
import Link from "next/link";
import CharitySeals from "@/components/CharitySeals";

type MissionSectionProps = {
  /** When true, renders for the mission/about page content area (no homepage charity seals). */
  embedded?: boolean;
};

export default function MissionSection({ embedded = false }: MissionSectionProps) {
  const missionBlock = (
    <div
      className={
        embedded
          ? "grid grid-cols-1 gap-8 items-start"
          : "grid grid-cols-1 md:grid-cols-[minmax(0,40%)_minmax(0,60%)] gap-8 lg:gap-10 items-center"
      }
    >
      <div className={embedded ? "" : "order-2 md:order-1"}>
        <h2 className="text-3xl font-bold m-0 mb-5 text-gray-800 md:text-[1.75rem]">
          Our Mission
        </h2>
        <p className="text-[1.1rem] leading-relaxed m-0 mb-5 text-gray-700">
          To support the LMS patient, family, and caregiver community through
          education, information sharing, resource assistance, and 24/7 direct
          phone support.
        </p>
        <p className="text-[1.1rem] leading-relaxed m-0 mb-5 text-gray-700">
          To address common challenges (unmet needs) in treatment, survivorship
          after treatment, as well as research/clinical trials considerations,
          through the Foundation&apos;s International LMS Research
          Roundtable—collaborating with researchers, clinicians, partner
          organizations, and especially the LMS community—to achieve meaningful
          progress.
        </p>
        <p className="text-[1.1rem] leading-relaxed m-0 mb-5 text-gray-700">
          To fund LMS-specific research that advances the field of study and
          accelerates research and clinical trial initiatives and treatment
          options.
        </p>
        <p className="text-[1.1rem] leading-relaxed m-0 mb-5 text-gray-700">
          To raise global, national, and community awareness of this disease,
          prioritizing actionable goals and delivering measurable progress.
        </p>
        {!embedded && (
          <Link
            href="/mission"
            className="inline-block mt-2 py-3 px-6 text-base font-semibold no-underline rounded-md transition-all duration-200 bg-[#4338ca] text-white border-0 hover:bg-[#3730a3] hover:-translate-y-0.5"
          >
            Learn More About Us
          </Link>
        )}
        {embedded && (
          <Link href="/mission#mission-overview" className="mission-details-link">
            Mission &amp; Goals Details
          </Link>
        )}
      </div>
      <div className={embedded ? "w-full" : "relative order-1 md:order-2 w-full min-w-0"}>
        <Image
          src="/images/Gemini_Generated_Image_5gw69x5gw69x5gw6.png"
          alt="A Patient-Centered Foundation — NLMSF core values"
          width={1400}
          height={1400}
          className="w-full h-auto rounded-lg block object-contain"
          sizes={embedded ? "(min-width: 992px) 65vw, 100vw" : "(min-width: 768px) 38vw, 100vw"}
        />
      </div>
    </div>
  );

  if (embedded) {
    return (
      <section id="our-mission" className="content-section" aria-label="Our Mission">
        <div className="impact-card mission-embedded-card">{missionBlock}</div>
      </section>
    );
  }

  return (
    <section
      className="py-12 px-6 pb-16 bg-white text-gray-800 md:py-8 md:px-4 md:pb-12"
      aria-label="Our Mission"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12 md:mb-12">{missionBlock}</div>

        <CharitySeals className="border-t border-gray-200 mt-4" />
      </div>
    </section>
  );
}
