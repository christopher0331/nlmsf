import Image from "next/image";

export default function PatientResearchSection() {
  return (
    <section id="patient-research" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-blue-600">
        How to Participate in Patient Centered Research
      </h2>
      <div className="rounded-xl border border-blue-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <i className="fas fa-users" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Patient Research Opportunities
            </h3>
            <p className="text-sm text-slate-500">
              Engaging in patient-driven research initiatives
            </p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos explain how patients can participate in patient-centered research
          initiatives like Count-Me-In and Pattern.org to advance Leiomyosarcoma research.
        </p>
        <div className="grid gap-6">
          <article className="flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/EACPtT7cnK4"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/EACPtT7cnK4/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                BZ
              </div>
              <div>
                <h5 className="text-sm font-semibold text-blue-700">Ben Zola</h5>
                <p className="text-xs text-slate-500">
                  Director, Count Me In LMS Project
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Count Me In LMS Project and How to Participate
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> Unknown
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Ben Zola discusses the Count Me In LMS Project and how patients can
              participate in this patient-driven research initiative.
            </p>
            <a
              href="https://youtu.be/EACPtT7cnK4"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
