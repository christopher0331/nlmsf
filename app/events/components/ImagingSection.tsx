import Image from "next/image";

export default function ImagingSection() {
  return (
    <section id="imaging" className="mb-12 rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-blue-600">Imaging/Radiology</h2>
      <div className="rounded-xl border border-blue-100 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <i className="fas fa-x-ray" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Imaging Resources</h3>
            <p className="text-sm text-slate-500">
              Role of imaging in LMS diagnosis and treatment
            </p>
          </div>
        </div>
        <p className="mb-6 text-base text-slate-600">
          These videos discuss the role of imaging and radiology in the diagnosis,
          monitoring, and treatment planning for Leiomyosarcoma patients.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
              YouTube Recording
            </div>
            <a
              href="https://youtu.be/qaYjM2GPYzk"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/qaYjM2GPYzk/mqdefault.jpg"
                  alt="Targeting the Molecular and Immunological Features of LMS - Video Thumbnail"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                MO
              </div>
              <div>
                <h5 className="text-sm font-semibold text-blue-700">
                  Sarcoma Medical Oncologist
                </h5>
                <p className="text-xs text-slate-500">
                  MD Anderson Cancer Center — Houston, TX
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Targeting the Molecular and Immunological Features of LMS
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> June 9, 2023
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Hosted by the NLMSF. Recording of a session covering imaging and immunologic
              considerations in LMS.
            </p>
            <a
              href="https://youtu.be/qaYjM2GPYzk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              <i className="fas fa-play-circle" aria-hidden /> Watch Video
            </a>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
              YouTube Recording
            </div>
            <a
              href="https://youtu.be/W9QnMxDOeQM"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/W9QnMxDOeQM/mqdefault.jpg"
                  alt="Current Status and Future Directions of Immunotherapies in Soft Tissue Sarcomas - Video Thumbnail"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                JT
              </div>
              <div>
                <h5 className="text-sm font-semibold text-blue-700">
                  Jonathan Trent, MD, PhD
                </h5>
                <p className="text-xs text-slate-500">
                  Sylvester Comprehensive Cancer Center, Sarcoma Center — Miami, FL
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Current Status and Future Directions of Immunotherapies in Soft Tissue
              Sarcomas
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> February 28, 2023
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Hosted by the NLMSF. Overview of immunotherapies in soft tissue sarcomas and
              future directions.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a
                href="https://youtu.be/W9QnMxDOeQM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                <i className="fas fa-play-circle" aria-hidden /> Watch Video
              </a>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8945421/#B68-biomedicines-10-00573"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                <i className="fas fa-external-link-alt" aria-hidden /> Related Article
              </a>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
              YouTube Recording
            </div>
            <a
              href="https://youtu.be/w9o46xJ0cvA"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://img.youtube.com/vi/w9o46xJ0cvA/mqdefault.jpg"
                  alt="Immunotherapy for Sarcoma: A Work in Progress - Video Thumbnail"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                CM
              </div>
              <div>
                <h5 className="text-sm font-semibold text-blue-700">Christian Meyer, MD</h5>
                <p className="text-xs text-slate-500">
                  Sarcoma Medical Oncologist — The Johns Hopkins Sidney Kimmel
                  Comprehensive Cancer Center, Baltimore, MD
                </p>
              </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">
              Immunotherapy for Sarcoma: A Work in Progress
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              <i className="far fa-calendar mr-2" aria-hidden /> April 14, 2022
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Hosted by the NLMSF. Dr. Meyer discusses insights from his Journal of
              Clinical Oncology article.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a
                href="https://youtu.be/w9o46xJ0cvA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                <i className="fas fa-play-circle" aria-hidden /> Watch Video
              </a>
              <a
                href="https://ascopubs.org/doi/10.1200/JCO.21.01338"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                <i className="fas fa-external-link-alt" aria-hidden /> Read the Article
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
