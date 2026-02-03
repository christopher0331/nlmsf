import Image from "next/image";

export default function ChemotherapySection() {
  return (
    <section id="chemotherapy" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-purple-600">
        Chemotherapy and Targeted Agents
      </h2>
      <div className="rounded-xl border border-purple-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
            <i className="fas fa-pills" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Treatment Options</h3>
            <p className="text-sm text-slate-500">
              Current chemotherapy and targeted treatments for LMS
            </p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos feature presentations from leading oncologists discussing current
          chemotherapy and targeted treatment options for Leiomyosarcoma patients.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-600">
              YouTube Podcast
            </div>
            <a href="#" target="_blank" rel="noopener noreferrer" className="group block">
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
                NS
              </div>
              <div>
                <h5 className="text-sm font-semibold text-purple-700">Dr. Neeta Somaiah</h5>
                <p className="text-xs text-slate-500">
                  MD Anderson Cancer Center, Houston, TX
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Current Treatment Options for Leiomyosarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> June 20, 2024
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Somaiah discusses the latest treatment options available for
              Leiomyosarcoma patients.
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800">
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/qcwqPNfPkpA"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/qcwqPNfPkpA/mqdefault.jpg"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
                EN
              </div>
              <div>
                <h5 className="text-sm font-semibold text-purple-700">Dr. Elise Nassif</h5>
                <p className="text-xs text-slate-500">
                  MD Anderson Cancer Center, Houston, TX
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              How Patient Co-morbidities Impact Chemotherapy Treatment
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> April 14, 2023
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Nassif explains how existing health conditions can affect chemotherapy
              treatment decisions and outcomes.
            </p>
            <a
              href="https://youtu.be/qcwqPNfPkpA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/efuZXkaRncQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/efuZXkaRncQ/mqdefault.jpg"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
                JT
              </div>
              <div>
                <h5 className="text-sm font-semibold text-purple-700">Dr. Jonathan Trent</h5>
                <p className="text-xs text-slate-500">
                  Sylvester Comprehensive Cancer Center, Miami, FL
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              The Use of Trabectedin in the Treatment of LMS
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> January 29, 2023
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Trent discusses the application and effectiveness of Trabectedin (Yondelis)
              in treating Leiomyosarcoma.
            </p>
            <a
              href="https://youtu.be/efuZXkaRncQ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/zk6CNU11VE0"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/zk6CNU11VE0/mqdefault.jpg"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
                NS
              </div>
              <div>
                <h5 className="text-sm font-semibold text-purple-700">Dr. Neeta Somaiah</h5>
                <p className="text-xs text-slate-500">
                  MD Anderson Cancer Center, Houston, TX
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              The Use of Votrient in the Treatment of Sarcomas
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> January 20, 2023
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Somaiah explains how Votrient (pazopanib) is used in the treatment of
              Leiomyosarcoma and other sarcomas.
            </p>
            <a
              href="https://youtu.be/zk6CNU11VE0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
