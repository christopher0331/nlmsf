import Image from "next/image";

export default function ImmunotherapySection() {
  return (
    <section id="immunotherapy" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-red-600">Immunotherapy</h2>
      <div className="rounded-xl border border-red-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
            <i className="fas fa-shield-alt" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Immunotherapy Approaches
            </h3>
            <p className="text-sm text-slate-500">
              Emerging immunotherapy treatments for LMS
            </p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos explore the role of immunotherapy in treating Leiomyosarcoma,
          including current research, clinical applications, and future directions.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/ogP5bVDSI3M"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/ogP5bVDSI3M/mqdefault.jpg"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">
                CM
              </div>
              <div>
                <h5 className="text-sm font-semibold text-red-700">Dr. Christian Meyer</h5>
                <p className="text-xs text-slate-500">
                  The Johns Hopkins Cancer Institute Sarcoma Center, Baltimore, MD
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Immunotherapy in Sarcoma: Current Data and Promising Strategies
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> August 26, 2024
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Meyer discusses the ASCO publication on immunotherapy in sarcoma,
              covering current data and promising strategies.
            </p>
            <a
              href="https://youtu.be/ogP5bVDSI3M"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/qaYjM2GPYzk"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/qaYjM2GPYzk/mqdefault.jpg"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">
                EN
              </div>
              <div>
                <h5 className="text-sm font-semibold text-red-700">Dr. Elise Nassif</h5>
                <p className="text-xs text-slate-500">
                  MD Anderson Cancer Center, Houston, TX
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Targeting the Molecular and Immunological Features of LMS
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> June 2024
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Nassif discusses targeting molecular and immunological features of
              Leiomyosarcoma for immunotherapy.
            </p>
            <a
              href="https://youtu.be/qaYjM2GPYzk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/W9QnMxDOeQM"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/W9QnMxDOeQM/mqdefault.jpg"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">
                JT
              </div>
              <div>
                <h5 className="text-sm font-semibold text-red-700">Dr. Jonathan Trent</h5>
                <p className="text-xs text-slate-500">
                  Sylvester Comprehensive Cancer Center, Miami, FL
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Current Status and Future Directions of Immunotherapy for soft tissue
              sarcomas
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> February 2016
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Trent discusses the current status and future directions of
              immunotherapies for soft tissue sarcomas, including Leiomyosarcoma.
            </p>
            <a
              href="https://youtu.be/W9QnMxDOeQM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/w9o46xJ0cvA"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/w9o46xJ0cvA/mqdefault.jpg"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">
                CM
              </div>
              <div>
                <h5 className="text-sm font-semibold text-red-700">Dr. Christian Meyer</h5>
                <p className="text-xs text-slate-500">
                  The Johns Hopkins Sidney Kimmel Comprehensive Cancer Center, Baltimore,
                  MD
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Immunotherapy for Sarcoma: A Work in Progress
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> April 14, 2022
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Meyer discusses his recent article in the Journal of Clinical Oncology
              on the progress of immunotherapy for sarcoma.
            </p>
            <a
              href="https://youtu.be/w9o46xJ0cvA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/qHzMxBKDSRM"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/qHzMxBKDSRM/mqdefault.jpg"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">
                SC
              </div>
              <div>
                <h5 className="text-sm font-semibold text-red-700">Dr. Sant Chawla</h5>
                <p className="text-xs text-slate-500">
                  Sarcoma Oncology Center, Santa Monica, CA
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Immunotherapy for Sarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> May 19, 2023
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Chawla discusses the current state of immunotherapy for sarcoma patients
              and promising new approaches.
            </p>
            <a
              href="https://youtu.be/qHzMxBKDSRM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">
                NL
              </div>
              <div>
                <h5 className="text-sm font-semibold text-red-700">Dr. Nicolas Llosa</h5>
                <p className="text-xs text-slate-500">Johns Hopkins University</p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Immune Microenvironment of LMS
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> March 18, 2022
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Llosa presents research on the immune microenvironment of Leiomyosarcoma
              and implications for immunotherapy.
            </p>
            <a
              href="https://youtu.be/lgXPwxdB8pM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
