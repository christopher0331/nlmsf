"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

export function PdfPopupLink({
  href,
  className,
  label,
  documentTitle,
}: {
  href: string;
  className?: string;
  label: string;
  /** Shown in the modal header (falls back to "PDF") */
  documentTitle?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const headerLabel = documentTitle?.trim() || "PDF";

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  /** Only dismiss when the dimmer itself is pressed — not bubbled from the dialog / iframe. */
  const onBackdropPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.button !== 0) return;
      if (e.target !== e.currentTarget) return;
      close();
    },
    [close],
  );

  const modal =
    open && mounted ? (
      <div
        className="quick-tips-pdf-modal-backdrop"
        role="presentation"
        onPointerDown={onBackdropPointerDown}
      >
        <div
          className="quick-tips-pdf-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <div className="quick-tips-pdf-modal-toolbar">
            <span id={titleId} className="quick-tips-pdf-modal-title">
              {headerLabel}
            </span>
            <button
              type="button"
              className="quick-tips-pdf-modal-close"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Close PDF viewer"
            >
              Close
            </button>
          </div>
          <iframe title={headerLabel} src={href} className="quick-tips-pdf-iframe" />
        </div>
      </div>
    ) : null;

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>
        <span>{label}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      </button>
      {modal != null ? createPortal(modal, document.body) : null}
    </>
  );
}
