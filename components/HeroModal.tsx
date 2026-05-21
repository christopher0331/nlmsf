"use client";

import { useCallback, useEffect, type ReactNode } from "react";

type HeroModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  iconClass?: string;
  titleId: string;
  children: ReactNode;
  maxWidthClass?: string;
};

export default function HeroModal({
  open,
  onClose,
  title,
  description,
  iconClass,
  titleId,
  children,
  maxWidthClass = "max-w-[440px]",
}: HeroModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, handleEscape]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={`relative w-full ${maxWidthClass} bg-white rounded-2xl shadow-[0_20px_50px_rgba(76,29,149,0.22)] overflow-hidden`}
      >
        <div className="flex items-start gap-4 px-6 pt-6 pb-4 border-b border-violet-100 bg-gradient-to-br from-violet-50/90 via-white to-white">
          {iconClass ? (
            <div
              className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#6b46c1] to-[#4c1d95] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(107,70,193,0.35)]"
              aria-hidden
            >
              <i className={`${iconClass} text-lg`} />
            </div>
          ) : null}
          <div className="flex-1 min-w-0 pr-8">
            <h2 id={titleId} className="m-0 text-xl font-bold text-gray-900 leading-snug">
              {title}
            </h2>
            {description ? (
              <p className="mt-1.5 mb-0 text-sm text-gray-600 leading-relaxed">{description}</p>
            ) : null}
          </div>
          <button
            type="button"
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 bg-transparent border-0 cursor-pointer transition-colors hover:bg-gray-100 hover:text-gray-800"
            onClick={onClose}
            aria-label="Close"
          >
            <i className="fas fa-times text-lg" aria-hidden />
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}

const inputClass =
  "w-full py-2.5 px-3.5 border border-gray-200 rounded-lg text-base text-gray-900 bg-white placeholder:text-gray-400 transition-shadow focus:outline-none focus:ring-2 focus:ring-[#6b46c1]/35 focus:border-[#6b46c1]";

const btnPrimaryClass =
  "w-full py-3 px-6 rounded-lg font-semibold text-base text-white border-0 cursor-pointer transition-all duration-200 bg-gradient-to-r from-[#6b46c1] to-[#4c1d95] shadow-[0_4px_14px_rgba(107,70,193,0.35)] hover:shadow-[0_6px_18px_rgba(76,29,149,0.4)] hover:-translate-y-0.5 active:translate-y-0";

const COMMUNITY_GROUPS = [
  {
    name: "NLMSF Leiomyosarcoma Support Group",
    href: "https://www.facebook.com/groups/leiomyosarcomasupportgroup",
  },
  {
    name: "Stand Up to Leiomyosarcoma",
    href: "https://www.facebook.com/groups/cancerleiomyosarcoma",
  },
  {
    name: "Cancer Sucks - Leiomyosarcoma",
    href: "https://www.facebook.com/groups/573285557042465/",
  },
] as const;

export function HeroSubscribeModalContent({
  mailchimpAction,
}: {
  mailchimpAction: string;
}) {
  return (
    <form
      action={mailchimpAction}
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        <p className="m-0 mb-4 text-sm text-gray-600 leading-relaxed">
          Get research updates, event news, and community resources delivered to your inbox.
        </p>
        <p className="m-0 mb-4 text-xs text-gray-500">
          <span className="text-red-600 font-medium">*</span> Required field
        </p>
        <div className="mb-5">
          <label htmlFor="mce-EMAIL" className="block text-sm font-semibold text-gray-800 mb-1.5">
            Email address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            className={`required email ${inputClass}`}
            id="mce-EMAIL"
            placeholder="you@example.com"
            required
            defaultValue=""
          />
        </div>
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{ display: "none" }} />
          <div className="response" id="mce-success-response" style={{ display: "none" }} />
        </div>
        <div aria-hidden="true" style={{ position: "absolute", left: -5000 }}>
          <input
            type="text"
            name="b_7882c1010a69171493a3bed4b_7958b212a8"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        <input
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          className={btnPrimaryClass}
          value="Subscribe to updates"
        />
        <p className="mt-3 mb-0 text-xs text-gray-500 text-center leading-relaxed">
          Opens Mailchimp in a new tab to complete signup.
        </p>
      </div>
    </form>
  );
}

export function HeroCommunityModalContent() {
  return (
    <ul className="list-none m-0 p-0 flex flex-col gap-3">
      {COMMUNITY_GROUPS.map((group) => (
        <li key={group.href}>
          <a
            href={group.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3.5 w-full py-3.5 px-4 rounded-xl border border-gray-200 bg-gray-50/80 no-underline text-inherit transition-all duration-200 hover:border-[#6b46c1]/40 hover:bg-violet-50 hover:shadow-[0_4px_14px_rgba(107,70,193,0.12)]"
          >
            <span
              className="shrink-0 w-10 h-10 rounded-lg bg-[#1877F2] text-white flex items-center justify-center"
              aria-hidden
            >
              <i className="fab fa-facebook-f text-base" />
            </span>
            <span className="flex-1 min-w-0 text-left">
              <span className="block text-[0.95rem] font-semibold text-gray-900 leading-snug group-hover:text-[#4c1d95]">
                {group.name}
              </span>
              <span className="block text-xs text-gray-500 mt-0.5">Opens in Facebook</span>
            </span>
            <i
              className="fas fa-external-link-alt text-sm text-gray-400 shrink-0 group-hover:text-[#6b46c1] transition-colors"
              aria-hidden
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
