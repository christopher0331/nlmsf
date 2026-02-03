import Image from "next/image";

export default function BasicResearchSection() {
  return (
    <section
      id="basic-research"
      className="mb-12 rounded-2xl bg-white p-8 shadow-md"
    >
      <h2 className="mb-6 text-3xl font-bold text-indigo-600">Basic Research</h2>
      <div className="rounded-xl border border-indigo-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
            <i className="fas fa-microscope" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Research Presentations</h3>
            <p className="text-sm text-slate-500">Scientific research on Leiomyosarcoma</p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos feature presentations from leading researchers in the field of
          Leiomyosarcoma, discussing the latest scientific discoveries and their
          implications for treatment.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
              YouTube Podcast
            </div>
            <a
              href="https://www.youtube.com/watch?v=W32m1xq3B98"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/W32m1xq3B98/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                RD
              </div>
              <div>
                <h5 className="text-sm font-semibold text-indigo-700">Dr. Ryan Denu</h5>
                <p className="text-xs text-slate-500">
                  MD Anderson Cancer Center, Houston, TX
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Novel Leiomyosarcoma Subtypes Using Spatial Transcriptomics
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> 2024
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Denu discusses his research team&apos;s identification of two novel
              leiomyosarcoma subtypes - one with mesenchymal features and another enriched
              with smooth muscle cell markers - using spatial transcriptomics.
            </p>
            <a
              href="https://www.youtube.com/watch?v=W32m1xq3B98"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>
          <article className="flex h-full flex-col rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
              YouTube Event
            </div>
            <a
              href="https://youtu.be/IuSRMS3lGw8"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/IuSRMS3lGw8/mqdefault.jpg"
                  alt="LMS Project Updates – Dr. Suzanne George"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                SG
              </div>
              <div>
                <h5 className="text-sm font-semibold text-indigo-700">
                  Dr. Suzanne George
                </h5>
                <p className="text-xs text-slate-500">
                  CMI LMS Project (Count Me In) / Broad Institute
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              LMS Project Updates: uLMS Pilot &amp; NIH LMS SPORE Collaboration
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> 2025
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Updates to the LMS Project and next steps, including the uLMS pilot project and
              collaboration with the large NIH LMS SPORE program. Session covers community
              engagement, research aims, and how patient-partnered data can accelerate
              discoveries. NLMSF has co-funded support for the past 4 years.
            </p>
            <a
              href="https://youtu.be/IuSRMS3lGw8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Event
            </a>
          </article>
          <article className="flex h-full flex-col rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
              YouTube Podcast
            </div>
            <a
              href="https://www.youtube.com/watch?v=s5xJqpD0oMA"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/s5xJqpD0oMA/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                PC
              </div>
              <div>
                <h5 className="text-sm font-semibold text-indigo-700">
                  Dr. Priya Chudasama
                </h5>
                <p className="text-xs text-slate-500">Heibelberg University, Germany</p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              The Importance of Telomeres in Leiomyosarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> July 19, 2022
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Chudasama presents research on the role of telomeres in Leiomyosarcoma
              development and progression.
            </p>
            <a
              href="https://www.youtube.com/watch?v=s5xJqpD0oMA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>
          <article className="flex h-full flex-col rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/lgXPwxdB8pM"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/lgXPwxdB8pM/mqdefault.jpg"
                  alt="Video Thumbnail"
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <i
                  className="fas fa-play-circle absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow"
                  aria-hidden
                />
              </div>
            </a>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                JT
              </div>
              <div>
                <h5 className="text-sm font-semibold text-indigo-700">Dr. Jonathan Trent</h5>
                <p className="text-xs text-slate-500">
                  Sylvester Comprehensive Cancer Center, Miami University
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">LMS Connect Live</h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> March 18, 2022
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Program featuring Dr. Matthew Hemming (Dana-Farber) discussing laboratory
              models of leiomyosarcoma and Dr. Nicolas Llosa (Johns Hopkins) on the immune
              microenvironment of LMS.
            </p>
            <a
              href="https://youtu.be/lgXPwxdB8pM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
