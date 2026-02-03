import Image from "next/image";

export default function MicrobiomeSection() {
  return (
    <section id="microbiome" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-teal-600">
        The Microbiome (Gut Health) and its Impact on Chemotherapy
      </h2>
      <div className="rounded-xl border border-teal-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600">
            <i className="fas fa-bacteria" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Microbiome Research</h3>
            <p className="text-sm text-slate-500">Impact of gut health on LMS treatment</p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos explore the role of the microbiome (gut health) in influencing the
          effectiveness of chemotherapy treatments for Leiomyosarcoma patients.
        </p>
        <div className="grid gap-6">
          <article className="flex h-full flex-col rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/NtEdB4bno5E"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/NtEdB4bno5E/mqdefault.jpg"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                EN
              </div>
              <div>
                <h5 className="text-sm font-semibold text-teal-700">Dr. Elise Nassif</h5>
                <p className="text-xs text-slate-500">MD Anderson Cancer Center, Houston, TX</p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              The Microbiome (Gut Health) and its Impact on Chemotherapy Treatment
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> February 17, 2023
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Nassif discusses how gut health influences the effectiveness of
              chemotherapy treatments for Leiomyosarcoma.
            </p>
            <a
              href="https://youtu.be/NtEdB4bno5E"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
