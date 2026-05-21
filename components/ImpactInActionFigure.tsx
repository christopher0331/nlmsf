"use client";

import "./impact-in-action.css";
import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

const IMAGE_SRC = "/images/Impact-in-action.png";
const IMAGE_ALT =
  "NLMSF Impact in Action infographic showing six foundation initiatives: advancing research and treatment innovation, the International Leiomyosarcoma Research Roundtable, Clinical Trials Patient-Caregiver Perspectives, Annual Early Career Awards, Community Empowerment Initiatives, and the Patient Caregiver and Family Community Roundtable";

export default function ImpactInActionFigure() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

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
        className="impact-lightbox-backdrop"
        role="presentation"
        onPointerDown={onBackdropPointerDown}
      >
        <div
          className="impact-lightbox-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="impact-lightbox-toolbar">
            <p id={titleId} className="impact-lightbox-title">
              NLMSF Impact in Action
            </p>
            <button
              type="button"
              className="impact-lightbox-close"
              onClick={close}
              aria-label="Close enlarged image"
            >
              Close
            </button>
          </div>
          <div className="impact-lightbox-image-wrap">
            <Image
              src={IMAGE_SRC}
              alt={IMAGE_ALT}
              width={1272}
              height={717}
              className="impact-lightbox-image"
              sizes="95vw"
              priority
            />
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      <figure className="impact-figure">
        <button
          type="button"
          className="impact-image-trigger"
          onClick={() => setOpen(true)}
          aria-label="View NLMSF Impact in Action infographic at full size"
        >
          <Image
            src={IMAGE_SRC}
            alt={IMAGE_ALT}
            width={1272}
            height={717}
            className="impact-image"
            sizes="(min-width: 1024px) 900px, 100vw"
          />
          <span className="impact-image-hint" aria-hidden>
            <i className="fas fa-search-plus" />
            Click to enlarge
          </span>
        </button>
      </figure>
      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
