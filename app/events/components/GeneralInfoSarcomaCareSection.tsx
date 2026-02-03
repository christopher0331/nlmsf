import Image from "next/image";

export default function GeneralInfoSarcomaCareSection() {
  return (
    <section id="general-info" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-emerald-600">
        General Information on Sarcoma Care – Multidisciplinary Approach
      </h2>
      <div className="rounded-xl border border-emerald-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <i className="fas fa-info-circle" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Sarcoma Care Resources</h3>
            <p className="text-sm text-slate-500">
              Comprehensive care approaches for sarcoma patients
            </p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos explore the multidisciplinary approach to sarcoma care, including
          systemic treatments, supportive care, and clinical trials, presented by experts
          in the field.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/2FuOuLewaJl"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/2FuOuLewaJl/mqdefault.jpg"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                ED
              </div>
              <div>
                <h5 className="text-sm font-semibold text-emerald-700">
                  Dr. Elizabeth Davis
                </h5>
                <p className="text-xs text-slate-500">
                  Vanderbilt Cancer Center, Nashville, TN
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Patient Learning Hour: Sarcoma and Its Treatment
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> July 14, 2022
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Elizabeth Davis presents a patient learning hour about sarcoma and its
              multidisciplinary treatment at Vanderbilt University.
            </p>
            <a
              href="https://youtu.be/2FuOuLewaJl"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/U-JW4GYi3tA"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/U-JW4GYi3tA/mqdefault.jpg"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                ED
              </div>
              <div>
                <h5 className="text-sm font-semibold text-emerald-700">
                  Dr. Elizabeth Davis
                </h5>
                <p className="text-xs text-slate-500">
                  Vanderbilt Cancer Center, Nashville, TN
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Treatment of Leiomyosarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> August 20, 2020
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Davis discusses the treatment of Leiomyosarcoma, including systemic
              therapies, supportive care, and upcoming clinical trials.
            </p>
            <a
              href="https://youtu.be/U-JW4GYi3tA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-600">
              YouTube Podcast
            </div>
            <a
              href="https://www.uclahealth.org/sarcoma/leiomyosarcoma-education-day"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://via.placeholder.com/320x180"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                P
              </div>
              <div>
                <h5 className="text-sm font-semibold text-emerald-700">UCLA & NLMSF</h5>
                <p className="text-xs text-slate-500">Collaborative Presentation</p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              UCLA-NLMSF Patient/Family LMS Education Symposium
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> February 2017
            </p>
            <p className="mt-3 text-sm text-slate-600">
              A symposium featuring presentations on drug development, personalized
              therapy, surgical management, radiation, immunotherapy, nutrition, and
              patient discussions for Leiomyosarcoma.
            </p>
            <a
              href="https://www.uclahealth.org/sarcoma/leiomyosarcoma-education-day"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
