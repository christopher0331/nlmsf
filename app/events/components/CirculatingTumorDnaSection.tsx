import Image from "next/image";

export default function CirculatingTumorDnaSection() {
  return (
    <section id="circulating-tumor-dna" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-emerald-600">
        Circulating Tumor DNA and Liquid Biopsies
      </h2>
      <div className="rounded-xl border border-emerald-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <i className="fas fa-vial" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Liquid Biopsy Research</h3>
            <p className="text-sm text-slate-500">Advancements in ctDNA testing for LMS</p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos discuss the emerging field of circulating tumor DNA (ctDNA) testing
          and liquid biopsies, which offer potential for less invasive monitoring of
          Leiomyosarcoma.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-600">
              YouTube Podcast
            </div>
            <a
              href="https://www.youtube.com/watch?v=fhsyH8bJn-l"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2025/07/Screenshot-2025-07-14-at-4.43.49 PM.png"
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
                <h5 className="text-sm font-semibold text-emerald-700">Expert Panel</h5>
                <p className="text-xs text-slate-500">Multiple Institutions</p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Circulating Tumor DNA Status and Future Directions for Sarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> 2023
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Panel discussion with experts including Dr. Nam Quoc Bui, Dr. Brian Compton,
              Dr. Elizabeth Davis, Dr. Erlinda Maria Gordon, Dr. Matthew Hemming, Dr. Elise
              Nasif, Dr. Joanna Pryzbyl, Dr. David Schulman and Dr. Jonathan Trent.
            </p>
            <a
              href="https://www.youtube.com/watch?v=fhsyH8bJn_I"
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
              href="https://youtu.be/4DdhdoP8BOQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/4DdhdoP8BOQ/mqdefault.jpg"
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
                KG
              </div>
              <div>
                <h5 className="text-sm font-semibold text-emerald-700">
                  Dr. Kristin Ganjoo &amp; Dr. Katie Baker
                </h5>
                <p className="text-xs text-slate-500">
                  Stanford University &amp; Natera/Signatera
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              The Role of Circulating Tumor DNA (ctDNA) in Leiomyosarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> March 27, 2022
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Ganjoo and Dr. Baker discuss how circulating tumor DNA testing can be used
              in the management of Leiomyosarcoma.
            </p>
            <a
              href="https://youtu.be/4DdhdoP8BOQ"
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
              href="https://youtu.be/Lhh_uvjK8uU"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/Lhh_uvjK8uU/mqdefault.jpg"
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
                JP
              </div>
              <div>
                <h5 className="text-sm font-semibold text-emerald-700">Dr. Joanna Przybyl</h5>
                <p className="text-xs text-slate-500">
                  The Research Institute of Montreal at McGill University
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Circulating DNA in Uterine Leiomyosarcoma and Benign Uterine Leiomyosarcomas
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> February 24, 2022
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Przybyl presents research on using circulating DNA to differentiate
              between uterine LMS and benign conditions.
            </p>
            <a
              href="https://youtu.be/Lhh_uvjK8uU"
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
