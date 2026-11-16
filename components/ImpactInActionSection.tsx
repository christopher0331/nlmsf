import CharitySeals from "@/components/CharitySeals";
import ImpactInActionFigure from "@/components/ImpactInActionFigure";
import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/images/nlmsf_logo_no_background-removebg-preview.png";
const QR_SRC = "/images/qr/nlmsf-qr.svg";

export default function ImpactInActionSection() {
  return (
    <section
      id="impact-in-action"
      className="py-12 px-6 pb-16 bg-white text-gray-800 md:py-8 md:px-4 md:pb-12"
      aria-label="NLMSF Impact in Action"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8 md:mb-6">
          <div className="impact-heading">
            <Image
              src={LOGO_SRC}
              alt="National Leiomyosarcoma Foundation logo"
              width={144}
              height={144}
              className="impact-heading-logo"
              sizes="72px"
            />
            <div className="impact-heading-copy">
              <p className="impact-heading-eyebrow">Our Programs</p>
              <h2 className="impact-heading-title">NLMSF Impact in Action</h2>
              <span className="impact-heading-rule" aria-hidden />
            </div>
            <a
              className="impact-heading-qr"
              href="https://nlmsf.org/qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Plain img so the QR is not cropped, recompressed, or otherwise altered. */}
              <img
                src={QR_SRC}
                alt="QR code: scan to visit nlmsf.org"
                width={128}
                height={128}
                className="impact-heading-qr-image"
              />
              <span className="impact-heading-qr-caption">Scan to visit nlmsf.org</span>
            </a>
          </div>
          <p className="text-[1.1rem] leading-relaxed m-0 max-w-[800px] mx-auto text-gray-700">
            A visual overview of how the National Leiomyosarcoma Foundation advances
            research, strengthens the global LMS community, and supports patients,
            caregivers, and families across key programs and initiatives.
          </p>
        </div>

        <ImpactInActionFigure />

        <p className="text-center mt-8 mb-0">
          <Link
            href="/mission#our-mission"
            className="inline-block py-3 px-6 text-base font-semibold no-underline rounded-md transition-all duration-200 bg-[#4338ca] text-white border-0 hover:bg-[#3730a3] hover:-translate-y-0.5"
          >
            Learn More About Our Mission
          </Link>
        </p>

        <CharitySeals className="border-t border-gray-200 mt-10" />
      </div>
    </section>
  );
}
