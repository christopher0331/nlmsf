import CharitySeals from "@/components/CharitySeals";
import ImpactInActionFigure from "@/components/ImpactInActionFigure";
import Link from "next/link";

export default function ImpactInActionSection() {
  return (
    <section
      className="py-12 px-6 pb-16 bg-white text-gray-800 md:py-8 md:px-4 md:pb-12"
      aria-label="NLMSF Impact in Action"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8 md:mb-6">
          <h2 className="text-3xl font-bold m-0 mb-4 text-gray-800 md:text-[1.75rem]">
            NLMSF Impact in Action
          </h2>
          <p className="text-[1.1rem] leading-relaxed m-0 max-w-[800px] mx-auto text-gray-700">
            A visual overview of how the National Leiomyosarcoma Foundation advances
            research, strengthens the global LMS community, and supports patients,
            caregivers, and families across key programs and initiatives.{" "}
            <strong>Click the image to view it at full size.</strong>
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
