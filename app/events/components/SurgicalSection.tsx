import Image from "next/image";

export default function SurgicalSection() {
  return (
    <section id="surgical" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-teal-600">Surgical Treatment</h2>
      <div className="rounded-xl border border-teal-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600">
            <i className="fas fa-procedures" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Surgical Options</h3>
            <p className="text-sm text-slate-500">Surgical approaches for LMS</p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos discuss surgical treatment options for Leiomyosarcoma, including
          techniques and considerations for optimal outcomes.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-600">
              YouTube Podcast
            </div>
            <a
              href="https://youtu.be/UYp4Wui3Bs"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/UYp4Wui3Bs/mqdefault.jpg"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                KC
              </div>
              <div>
                <h5 className="text-sm font-semibold text-teal-700">Dr. Kenneth Cardona</h5>
                <p className="text-xs text-slate-500">
                  Emory University Winship Cancer Institute, Atlanta, GA
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Surgery for Leiomyosarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> September 24, 2020
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Dr. Cardona discusses surgical approaches for Leiomyosarcoma, including
              considerations for retroperitoneal and other sites.
            </p>
            <a
              href="https://youtu.be/UYp4Wui3Bs"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Podcast
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-600">
              Video Recording
            </div>
            <a
              href="https://www.youtube.com/watch?v=OTpX1AryJAM"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/OTpX1AryJAM/mqdefault.jpg"
                  alt="Current Thoracic Surgical Procedures for Sarcoma Lung Metastases - Dr. Eric Toloza"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                ET
              </div>
              <div>
                <h5 className="text-sm font-semibold text-teal-700">Eric Toloza, MD</h5>
                <p className="text-xs text-slate-500">
                  Thoracic Surgeon, Moffitt Cancer Center — Tampa, FL
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Current Thoracic Surgical Procedures for Sarcoma Lung Metastases
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> April 12, 2024
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Presented by Dr. Toloza. Hosted by the NLMSF.
            </p>
            <a
              href="https://www.youtube.com/watch?v=OTpX1AryJAM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Video
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-600">
              Video Recording
            </div>
            <a
              href="https://youtu.be/2FuOuLewaJI"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/2FuOuLewaJI/mqdefault.jpg"
                  alt="Retroperitoneal Leiomyosarcoma — Consensus Guidelines and Daily Practice - Dr. William Tseng"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                WT
              </div>
              <div>
                <h5 className="text-sm font-semibold text-teal-700">William Tseng, MD</h5>
                <p className="text-xs text-slate-500">
                  Sarcoma Surgical Oncologist — City of Hope National Medical Center
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Retroperitoneal Leiomyosarcoma — Consensus Guidelines and Daily Practice
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> August 22, 2022
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Hosted by the NLMSF. Presented by Dr. Tseng.
            </p>
            <a
              href="https://youtu.be/2FuOuLewaJI"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Video
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-600">
              Video Recording
            </div>
            <a
              href="https://youtu.be/WKGfH1M1be8"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/WKGfH1M1be8/mqdefault.jpg"
                  alt="Surgical Management of LMS - Dr. Aime Crago"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                AC
              </div>
              <div>
                <h5 className="text-sm font-semibold text-teal-700">Aime Crago, MD</h5>
                <p className="text-xs text-slate-500">
                  Sarcoma Surgical Oncologist — Memorial Sloan Kettering Cancer Center, New
                  York, NY
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Surgical Management of LMS
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> November 2, 2020
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Hosted by the NLMSF. Dr. Crago discusses surgical management principles for
              Leiomyosarcoma.
            </p>
            <a
              href="https://youtu.be/WKGfH1M1be8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Video
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-600">
              Video Recording
            </div>
            <a
              href="https://youtu.be/uVyMcPVAQyA"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/uVyMcPVAQyA/mqdefault.jpg"
                  alt="Perspectives on Surgical Management of LMS/Sarcoma - Dr. Jeffery Farma"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                JF
              </div>
              <div>
                <h5 className="text-sm font-semibold text-teal-700">Jeffery Farma, MD</h5>
                <p className="text-xs text-slate-500">
                  Sarcoma Surgeon — Fox Chase Medical Center, Philadelphia, PA
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Perspectives on Surgical Management of LMS/Sarcoma
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> April 2, 2020
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Hosted by the NLMSF. Dr. Farma shares perspectives on surgical management of
              LMS and sarcomas.
            </p>
            <a
              href="https://youtu.be/uVyMcPVAQyA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Video
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
