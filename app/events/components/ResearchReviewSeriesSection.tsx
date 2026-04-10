import Image from "next/image";

export default function ResearchReviewSeriesSection() {
  return (
    <section
      id="research-review-series"
      className="mb-12 rounded-2xl bg-white p-8 shadow-md"
    >
      <h2 className="mb-6 text-3xl font-bold text-purple-700">
        LMS Research in Review Series
      </h2>
      <div className="rounded-xl border border-purple-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-700">
            <i className="fas fa-flask" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              NLMSF LMS Research in Review Series
            </h3>
            <p className="text-sm text-slate-500">
              Leading LMS researchers present their latest findings for patients and caregivers
            </p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          The NLMSF Research in Review Series features presentations from top leiomyosarcoma
          specialists and researchers, translating cutting-edge science into accessible
          discussions for the LMS community.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Maki */}
          <article className="flex h-full flex-col rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700">
              Research in Review
            </div>
            <a
              href="https://www.youtube.com/watch?v=S2l6Qi4K-KU"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/Maki_presentation_image.png"
                  alt="Dr. Robert Maki — LEGUBICIN: A New Soft Tissue Sarcoma Treatment Update"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
                  <i className="fas fa-play-circle text-5xl text-white/90 drop-shadow" aria-hidden />
                </div>
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
                RM
              </div>
              <div>
                <h5 className="text-sm font-semibold text-purple-700">Robert Maki, MD, PhD</h5>
                <p className="text-xs text-slate-500">
                  Memorial Sloan Kettering Cancer Center
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              LEGUBICIN: A New Soft Tissue Sarcoma Treatment Update
            </h4>
            <p className="mt-3 text-sm text-slate-600 flex-1">
              Dr. Maki presents the latest research on LEGUBICIN for pre-treated, advanced
              soft tissue sarcomas — a study showing an impressive increase in
              progression-free survival and fewer side effects compared to doxorubicin alone.
              Dr. Maki is a Sarcoma Medical Oncologist &amp; Early Drug Development Specialist
              and member of the NLMSF International LMS Research Roundtable.
            </p>
            <a
              href="https://www.youtube.com/watch?v=S2l6Qi4K-KU"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Presentation
            </a>
          </article>

          {/* Zhou */}
          <article className="flex h-full flex-col rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700">
              Research in Review
            </div>
            <a
              href="https://www.youtube.com/watch?v=ndRGkJb8vWM"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/Zhou_presentation_image.jpg"
                  alt="Dr. Maggie Yuxi Zhou — Overview of the Forthcoming ctDNA Research Project"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
                  <i className="fas fa-play-circle text-5xl text-white/90 drop-shadow" aria-hidden />
                </div>
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
                MZ
              </div>
              <div>
                <h5 className="text-sm font-semibold text-purple-700">Maggie Yuxi Zhou, MD</h5>
                <p className="text-xs text-slate-500">
                  Division of Oncology, Stanford University
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              LMS-Specific Research &amp; Clinical Trials: Overview of the Forthcoming ctDNA Research Project
            </h4>
            <p className="mt-3 text-sm text-slate-600 flex-1">
              Dr. Zhou, Instructor of Medicine in the Division of Oncology at Stanford University,
              presents an overview of the forthcoming ctDNA (circulating tumor DNA) research
              project — a next-generation liquid biopsy approach specific to LMS patients
              and its potential to transform monitoring and clinical trial design.
            </p>
            <a
              href="https://www.youtube.com/watch?v=ndRGkJb8vWM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Presentation
            </a>
          </article>

        </div>
      </div>
    </section>
  );
}
