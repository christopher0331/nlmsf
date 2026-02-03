import Image from "next/image";

export default function RadiationSection() {
  return (
    <section id="radiation" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-red-600">Radiation Therapy</h2>
      <div className="rounded-xl border border-red-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
            <i className="fas fa-radiation" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Radiation Therapy Options
            </h3>
            <p className="text-sm text-slate-500">Radiation treatments for LMS</p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos discuss the role of radiation therapy in the treatment of
          Leiomyosarcoma, including its applications and effectiveness.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/CV17JtEHWqM"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/CV17JtEHWqM/mqdefault.jpg"
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
                AG
              </div>
              <div>
                <h5 className="text-sm font-semibold text-red-700">
                  Dr. B. Ashleigh Guadagnolo
                </h5>
                <p className="text-xs text-slate-500">
                  MD Anderson Cancer Center, Houston, TX
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Hypofractionated Radiation for Extremity and Truncal Sarcomas
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> February 2025
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Guadagnolo discusses whether hypofractionated radiation should be adopted
              as the standard of care for extremity and truncal sarcomas.
            </p>
            <a
              href="https://youtu.be/CV17JtEHWqM"
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
              href="https://youtu.be/NlW5kYoWv4k"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/NlW5kYoWv4k/mqdefault.jpg"
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
                AK
              </div>
              <div>
                <h5 className="text-sm font-semibold text-red-700">Dr. Anusha Kalbasi</h5>
                <p className="text-xs text-slate-500">
                  UCLA Jonsson Comprehensive Cancer Center, Los Angeles, CA
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              The Role of Radiation in the Treatment of Sarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> September 17, 2020
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Kalbasi discusses the role of radiation therapy in the treatment of
              sarcoma, including Leiomyosarcoma.
            </p>
            <a
              href="https://youtu.be/NlW5kYoWv4k"
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
