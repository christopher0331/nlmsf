import Image from "next/image";

export default function UterineFibroidsSection() {
  return (
    <section id="uterine-fibroids" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-rose-600">
        Uterine Fibroids – What You Should Know Before Having Fibroid Surgery, Leiomyomas
        vs. Leiomyosarcoma
      </h2>
      <div className="rounded-xl border border-rose-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600">
            <i className="fas fa-female" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Uterine Fibroids Information
            </h3>
            <p className="text-sm text-slate-500">Differentiating fibroids and LMS</p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos provide information on uterine fibroids, their differences from
          Leiomyosarcoma, and important considerations before undergoing fibroid surgery.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-rose-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-600">
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-700">
                JP
              </div>
              <div>
                <h5 className="text-sm font-semibold text-rose-700">Dr. Joanna Przybyl</h5>
                <p className="text-xs text-slate-500">
                  The Research Institute of Montreal at McGill University
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Circulating DNA in Uterine Leiomyosarcoma and Benign Uterine Leiomyomas
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> February 24, 2022
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Przybyl presents research on using circulating DNA to differentiate
              between uterine Leiomyosarcoma and benign uterine leiomyomas (fibroids).
            </p>
            <a
              href="https://youtu.be/Lhh_uvjK8uU"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rose-700 hover:text-rose-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-rose-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-600">
              Video Recording
            </div>
            <a
              href="https://youtu.be/3d0FoUPv738"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/3d0FoUPv738/mqdefault.jpg"
                  alt="Uterine Fibroids – What You Should Know Before Having Surgery - Panel of Experts"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-700">
                PE
              </div>
              <div>
                <h5 className="text-sm font-semibold text-rose-700">Panel of Experts</h5>
                <p className="text-xs text-slate-500">Hosted by the NLMSF</p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Uterine Fibroids – What You Should Know Before Having Surgery
            </h4>
            <p className="mt-3 text-sm text-slate-600">
              A panel of experts discusses key considerations before fibroid surgery,
              including differentiating leiomyomas and leiomyosarcoma.
            </p>
            <a
              href="http://bit.ly/2K82sFO"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rose-700 hover:text-rose-800"
            >
              <i className="fas fa-file-alt" aria-hidden /> Introductory brief about the
              medical panel presentation
            </a>
            <a
              href="https://youtu.be/3d0FoUPv738"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-rose-700 hover:text-rose-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Video
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-rose-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-600">
              Video Recording
            </div>
            <a
              href="https://youtu.be/Ht-xPnnNuQY"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/Ht-xPnnNuQY/mqdefault.jpg"
                  alt="Clinical dilemma: Differentiating LMS and benign leiomyoma - Dr. O. Sandra Madueke-Laveaux"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-700">
                SL
              </div>
              <div>
                <h5 className="text-sm font-semibold text-rose-700">
                  O. Sandra Madueke-Laveaux, MD
                </h5>
                <p className="text-xs text-slate-500">
                  Associate Professor of OB-GYN — University of Chicago
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Differentiating Leiomyosarcoma from Benign Leiomyoma: Toward a Blood Biomarker
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> October 27, 2023
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Hosted by the NLMSF. Dr. Laveaux discusses the clinical challenge of
              distinguishing LMS from benign leiomyoma and her work on a pre-operative blood
              biomarker.
            </p>
            <a
              href="https://youtu.be/Ht-xPnnNuQY"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rose-700 hover:text-rose-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Video
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
