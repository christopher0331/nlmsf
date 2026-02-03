import Image from "next/image";
import Link from "next/link";

export default function MissionSection() {
  return (
    <section
      className="py-12 px-6 pb-16 bg-white text-gray-800 md:py-8 md:px-4 md:pb-12"
      aria-label="Our Mission"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12 md:gap-8 md:mb-12">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold m-0 mb-5 text-gray-800 md:text-[1.75rem]">
              Our Mission
            </h2>
            <p className="text-[1.1rem] leading-relaxed m-0 mb-5 text-gray-700">
              To support the LMS patient, family, and caregiver community through
              education, information sharing, resource assistance, and 24/7 direct
              phone support.
            </p>
            <p className="text-[1.1rem] leading-relaxed m-0 mb-5 text-gray-700">
              To address unmet needs in treatment, research, clinical trials, and
              care through the Foundation&apos;s International LMS Research
              Roundtable—collaborating with researchers, clinicians, partner
              organizations, and especially the LMS community—to achieve meaningful
              progress.
            </p>
            <p className="text-[1.1rem] leading-relaxed m-0 mb-5 text-gray-700">
              To fund LMS-specific research that advances the field of study and
              accelerates development of clinical trials and treatments.
            </p>
            <p className="text-[1.1rem] leading-relaxed m-0 mb-5 text-gray-700">
              To raise global, national, and community awareness of this disease,
              prioritizing actionable goals and delivering measurable progress.
            </p>
            <Link
              href="/our-board"
              className="inline-block mt-2 py-3 px-6 text-base font-semibold no-underline rounded-md transition-all duration-200 bg-[#4338ca] text-white border-0 hover:bg-[#3730a3] hover:-translate-y-0.5"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="relative order-1 md:order-2">
            <Image
              src="https://nlmsf.org/wp-content/uploads/2025/04/Untitled-design-2.png"
              alt="NLMSF Team and Volunteers"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg block object-contain"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-around items-center pt-8 gap-6 md:flex-col md:pt-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-[12em] max-w-full md:w-[10em]"
            aria-label="GuideStar"
          >
            <Image
              src="https://nlmsf.org/wp-content/uploads/2021/03/GuideStar-Seal.jpg"
              alt="GuideStar Seal"
              width={240}
              height={240}
              className="w-full h-auto block object-contain"
              sizes="(min-width: 768px) 10rem, 12rem"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-[25em] max-w-full md:w-[20em]"
            aria-label="Charity Navigator"
          >
            <Image
              src="https://nlmsf.org/wp-content/uploads/2025/07/charity-nav-scaled.png"
              alt="Charity Navigator"
              width={800}
              height={400}
              className="w-full h-auto block object-contain"
              sizes="(min-width: 768px) 20rem, 25rem"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-[12em] max-w-full md:w-[10em]"
            aria-label="Top Rated"
          >
            <Image
              src="https://nlmsf.org/wp-content/uploads/2021/03/Top-rated-Seal.jpg"
              alt="Top Rated Seal"
              width={240}
              height={240}
              className="w-full h-auto block object-contain"
              sizes="(min-width: 768px) 10rem, 12rem"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
