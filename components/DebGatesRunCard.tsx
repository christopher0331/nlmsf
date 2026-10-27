import Image from "next/image";
import {
  DEB_GATES_RUN,
  debGatesEventReady,
  debGatesPhotoReady,
} from "@/lib/deb-gates-run";

const donateClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-white no-underline transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4338ca]";

export default function DebGatesRunCard() {
  const showEvent = debGatesEventReady();
  const showPhoto = debGatesPhotoReady();

  return (
    <article className="overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-[0_4px_20px_rgba(107,70,193,0.12)]">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#6b46c1] to-[#4c1d95] px-6 py-5 text-white">
        <div
          className="absolute top-0 right-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/[0.06]"
          aria-hidden
        />
        <div className="relative z-10">
          <p className="m-0 text-xs font-semibold uppercase tracking-widest text-white/75">
            Story shared with NLMSF
          </p>
          {showPhoto ? (
            <div className="relative mx-auto mt-4 h-28 w-28 overflow-hidden rounded-full border-2 border-white/40">
              <Image
                src={DEB_GATES_RUN.photoSrc}
                alt={DEB_GATES_RUN.photoAlt}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
          ) : null}
          <h3 className="m-0 mt-2 text-2xl font-bold text-white">Deb Gates</h3>
          <p className="m-0 mt-1 text-sm text-white/85">
            Running in memory of Stephen A. Gates, MD
          </p>
          {showEvent ? (
            <p className="m-0 mt-2 text-sm font-medium text-white">
              {DEB_GATES_RUN.eventName}
              {" · "}
              {DEB_GATES_RUN.eventDate}
              {DEB_GATES_RUN.eventLocation.trim()
                ? ` · ${DEB_GATES_RUN.eventLocation}`
                : ""}
            </p>
          ) : null}
        </div>
      </div>

      <div className="px-6 py-5">
        <p className="m-0 text-[0.95rem] leading-relaxed text-gray-600">
          Deb Gates runs in memory of her husband, Stephen A. Gates, MD. She
          shared her story of uterine leiomyosarcoma survivorship — and of a
          life built around running — with the National Leiomyosarcoma
          Foundation.
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <a
            href={DEB_GATES_RUN.donateHref}
            className={donateClass}
            style={{
              background: "linear-gradient(135deg, #7e22ce, #4338ca)",
              boxShadow: "0 4px 14px rgba(126, 34, 206, 0.35)",
            }}
          >
            <i className="fas fa-heart" aria-hidden />
            Donate to NLMSF
          </a>
          <a
            href={DEB_GATES_RUN.path}
            className="inline-flex items-center justify-center gap-1 text-sm font-semibold text-[#7e22ce] no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7e22ce]"
          >
            Read Deb&apos;s story
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </article>
  );
}
