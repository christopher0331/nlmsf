import Image from "next/image";

export default function PecomaSection() {
  return (
    <section id="pecoma" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-amber-600">PEComa</h2>
      <div className="rounded-xl border border-amber-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <i className="fas fa-dna" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">PEComa Research</h3>
            <p className="text-sm text-slate-500">Updates on PEComa treatment and research</p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos discuss research updates and treatment options for PEComa, a rare
          type of sarcoma related to Leiomyosarcoma.
        </p>
        <div className="grid gap-6">
          <article className="flex h-full flex-col rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-600">
              YouTube Podcast
            </div>
            <a
              href="https://www.youtube.com/watch?v=yKp4zAo9TUU"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/yKp4zAo9TUU/mqdefault.jpg"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">
                AW
              </div>
              <div>
                <h5 className="text-sm font-semibold text-amber-700">
                  Dr. Andrew Wagner &amp; Dr. Marco Schito
                </h5>
                <p className="text-xs text-slate-500">
                  Dana-Farber Cancer Institute, Boston, MA &amp; University of Arizona
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              PEComa Research Updates and Drug Repurposing
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> March 2024
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Wagner provides PEComa research updates, and Dr. Schito discusses
              repurposing drugs for PEComa treatment through a patient-driven initiative.
            </p>
            <a
              href="https://www.youtube.com/watch?v=yKp4zAo9TUU"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
