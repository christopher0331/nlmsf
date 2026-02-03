"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

export type Testimonial = {
  name: string;
  text: string;
  type: "Research Clinician" | "Patient";
  imageUrl?: string;
};

type TestimonialsClientProps = {
  clinicianTestimonials: Testimonial[];
  patientTestimonials: Testimonial[];
};

const MAX_PREVIEW_LENGTH = 240;

function getPreview(text: string) {
  if (text.length <= MAX_PREVIEW_LENGTH) {
    return { preview: text, truncated: false };
  }
  return { preview: `${text.slice(0, MAX_PREVIEW_LENGTH).trim()}...`, truncated: true };
}

export default function TestimonialsClient({
  clinicianTestimonials,
  patientTestimonials,
}: TestimonialsClientProps) {
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);

  const handleClose = () => setActiveTestimonial(null);

  useEffect(() => {
    if (!activeTestimonial) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeTestimonial]);

  const clinicianCards = useMemo(
    () =>
      clinicianTestimonials.map((testimonial) => {
        const { preview, truncated } = getPreview(testimonial.text);
        return { testimonial, preview, truncated };
      }),
    [clinicianTestimonials],
  );

  const patientCards = useMemo(
    () =>
      patientTestimonials.map((testimonial) => {
        const { preview, truncated } = getPreview(testimonial.text);
        return { testimonial, preview, truncated };
      }),
    [patientTestimonials],
  );

  return (
    <div className="nlmsf-testimonials-content">
      <div className="nlmsf-testimonial-section nlmsf-section-clinicians" id="research-clinicians">
        <h2 className="nlmsf-section-title">Research Clinicians</h2>
        <p className="nlmsf-section-description">
          Learn how clinician leaders and researchers describe the impact of NLMSF and the LMS
          community.
        </p>
        <div className="nlmsf-testimonials-grid">
          {clinicianCards.map(({ testimonial, preview, truncated }) => (
            <article key={testimonial.name} className="nlmsf-testimonial-card">
              <div className="nlmsf-testimonial-header">
                <div className="nlmsf-testimonial-image">
                  {testimonial.imageUrl ? (
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                    />
                  ) : (
                    <span className="nlmsf-testimonial-image-placeholder">
                      {testimonial.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="nlmsf-testimonial-info">
                  <h3 className="nlmsf-testimonial-name">{testimonial.name}</h3>
                  <p className="nlmsf-testimonial-type">{testimonial.type}</p>
                </div>
              </div>
              <div className="nlmsf-testimonial-content">
                <p className="nlmsf-testimonial-text">{preview}</p>
                {truncated ? (
                  <button
                    type="button"
                    className="nlmsf-read-more"
                    onClick={() => setActiveTestimonial(testimonial)}
                  >
                    Read More
                  </button>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="nlmsf-testimonial-section nlmsf-section-patients" id="patients">
        <h2 className="nlmsf-section-title">Patient Stories</h2>
        <p className="nlmsf-section-description">
          Voices from patients and caregivers sharing the impact of NLMSF support and guidance.
        </p>
        <div className="nlmsf-testimonials-grid">
          {patientCards.map(({ testimonial, preview, truncated }) => (
            <article key={`${testimonial.name}-${testimonial.text.slice(0, 20)}`} className="nlmsf-testimonial-card">
              <div className="nlmsf-testimonial-header">
                <div className="nlmsf-testimonial-image purple-heart">
                  {testimonial.imageUrl ? (
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                    />
                  ) : (
                    <span className="nlmsf-testimonial-image-placeholder">
                      {testimonial.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="nlmsf-testimonial-info">
                  <h3 className="nlmsf-testimonial-name">{testimonial.name}</h3>
                  <p className="nlmsf-testimonial-type">{testimonial.type}</p>
                </div>
              </div>
              <div className="nlmsf-testimonial-content">
                <p className="nlmsf-testimonial-text">{preview}</p>
                {truncated ? (
                  <button
                    type="button"
                    className="nlmsf-read-more"
                    onClick={() => setActiveTestimonial(testimonial)}
                  >
                    Read More
                  </button>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeTestimonial ? (
        <div className="nlmsf-modal show" role="dialog" aria-modal="true">
          <button
            type="button"
            className="nlmsf-modal-overlay"
            aria-label="Close testimonial"
            onClick={handleClose}
          />
          <div className="nlmsf-modal-content">
            <div className="nlmsf-modal-header">
              <button type="button" className="nlmsf-modal-close" onClick={handleClose}>
                ×
              </button>
              <h3 className="nlmsf-testimonial-name">{activeTestimonial.name}</h3>
              <p className="nlmsf-modal-title">{activeTestimonial.type}</p>
            </div>
            <div className="nlmsf-modal-body">
              <p>{activeTestimonial.text}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
