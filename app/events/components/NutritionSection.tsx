import Image from "next/image";

export default function NutritionSection() {
  return (
    <section id="nutrition" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-green-600">Nutrition</h2>
      <div className="rounded-xl border border-green-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
            <i className="fas fa-apple-alt" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Nutrition Guidance</h3>
            <p className="text-sm text-slate-500">Dietary support for LMS patients</p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos provide guidance on nutrition for Leiomyosarcoma patients, including
          dietary recommendations during chemotherapy and clinical trials.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-600">
              YouTube Podcast
            </div>
            <a
              href="https://www.youtube.com/watch?v=6zDo6Qls33c"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/6zDo6Qls33c/mqdefault.jpg"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                AT
              </div>
              <div>
                <h5 className="text-sm font-semibold text-green-700">
                  Alison Tierney, MS, RD, CD, CSO
                </h5>
                <p className="text-xs text-slate-500">
                  Licensed Cancer Dietician and Cancer Survivor
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Guidance on Diet During Chemo and Clinical Trials
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> May 22, 2024
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Alison Tierney empowers cancer patients with dietary guidance to support their
              body before, during, and after treatment.
            </p>
            <a
              href="https://www.youtube.com/watch?v=6zDo6Qls33c"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-600">
              YouTube Recording
            </div>
            <a
              href="https://youtu.be/Ks30Ztm7QWQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/Ks30Ztm7QWQ/mqdefault.jpg"
                  alt="Pathology Perspectives and Recent Research - Video Thumbnail"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                JD
              </div>
              <div>
                <h5 className="text-sm font-semibold text-green-700">
                  Josephine Dermawan, MD
                </h5>
                <p className="text-xs text-slate-500">
                  Research Pathologist — Cleveland Clinic, Cleveland, OH
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Pathology Perspectives and Recent Research
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> May 2024
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Hosted by the NLMSF. Dr. Dermawan discusses pathology perspectives and her
              recent research publication.
            </p>
            <a
              href="https://youtu.be/Ks30Ztm7QWQ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Video
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-600">
              YouTube Recording
            </div>
            <a
              href="https://www.youtube.com/watch?v=gjvcYEdOZmw"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/gjvcYEdOZmw/mqdefault.jpg"
                  alt="Basic Lecture on Pathology of Sarcoma - Video Thumbnail"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                AL
              </div>
              <div>
                <h5 className="text-sm font-semibold text-green-700">Alexander Lazar, MD</h5>
                <p className="text-xs text-slate-500">
                  Sarcoma Pathologist — MD Anderson Cancer Center, Houston, TX
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Basic Lecture on Pathology of Sarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> August 3, 2020
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Hosted by the NLMSF. Foundational concepts in sarcoma pathology with relevance
              for treatment and research.
            </p>
            <a
              href="https://www.youtube.com/watch?v=gjvcYEdOZmw"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Video
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
