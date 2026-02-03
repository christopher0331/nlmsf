import Image from "next/image";

export default function SurvivorshipSection() {
  return (
    <section id="survivorship" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-purple-600">Survivorship Care Planning</h2>
      <div className="rounded-xl border border-purple-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
            <i className="fas fa-heart" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Survivorship Resources</h3>
            <p className="text-sm text-slate-500">Support for LMS survivors</p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos provide guidance on survivorship care planning for Leiomyosarcoma
          patients, focusing on long-term health and quality of life.
        </p>
        <div className="grid gap-6">
          <article className="flex h-full flex-col rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-600">
              Video Recording
            </div>
            <a
              href="https://youtu.be/kwyZaw5-2yU"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/kwyZaw5-2yU/mqdefault.jpg"
                  alt="Survivorship Care Planning - Shelley Fuld Nasso"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
                SN
              </div>
              <div>
                <h5 className="text-sm font-semibold text-purple-700">
                  Shelley Fuld Nasso, MPP
                </h5>
                <p className="text-xs text-slate-500">
                  CEO — National Coalition for Cancer Survivorship (NCCS)
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Survivorship Care Planning
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> October 4, 2022
            </p>
            <p className="mt-3 text-sm text-slate-600">Hosted by the NLMSF.</p>
            <a
              href="https://youtu.be/kwyZaw5-2yU"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Video
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
