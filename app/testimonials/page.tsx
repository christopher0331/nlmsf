import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";
import { clinicianTestimonials, patientTestimonials } from "./data";
import "./testimonials.css";

export const metadata: Metadata = {
  title: "Testimonials | NLMSF",
  description:
    "Stories and experiences from patients, caregivers, and clinicians supporting the LMS community.",
};


export default function TestimonialsPage() {
  return (
    <main className="nlmsf-testimonials-page">
      <section className="nlmsf-hero-section">
        <div className="nlmsf-hero-container">
          <div className="nlmsf-hero-content">
            <span className="nlmsf-resource-tag">Patient Stories</span>
            <h1 className="nlmsf-hero-title">Testimonials</h1>
            <div className="nlmsf-hero-description">
              <p>
                Read stories and experiences from patients, caregivers, and medical professionals
                who have worked with the National Leiomyosarcoma Foundation.
              </p>
              <p>
                These testimonials reflect the impact of NLMSF&apos;s dedication to providing support,
                education, and resources to the LMS community, as well as our commitment to
                advancing research initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="nlmsf-content-section">
        <div className="nlmsf-content-container nlmsf-layout">
          <aside className="nlmsf-sidebar">
            <div className="nlmsf-sidebar-navigation">
              <h3 className="nlmsf-sidebar-title">Testimonial Categories</h3>
              <ul className="nlmsf-sidebar-menu">
                <li className="nlmsf-sidebar-item">
                  <a href="#research-clinicians" className="nlmsf-sidebar-link">
                    <span className="nlmsf-sidebar-icon">👨‍⚕️</span>
                    <span>Research Clinicians</span>
                  </a>
                </li>
                <li className="nlmsf-sidebar-item">
                  <a href="#patients" className="nlmsf-sidebar-link">
                    <span className="nlmsf-sidebar-icon">💜</span>
                    <span>Patient Stories</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="nlmsf-sidebar-resources">
              <h3 className="nlmsf-sidebar-title">Related Resources</h3>
              <ul className="nlmsf-sidebar-menu">
                <li className="nlmsf-sidebar-item">
                  <a href="/patient-perspectives" className="nlmsf-sidebar-link">
                    <span className="nlmsf-sidebar-icon">📝</span>
                    <span>Patient Perspectives</span>
                  </a>
                </li>
                <li className="nlmsf-sidebar-item">
                  <a href="/our-board" className="nlmsf-sidebar-link">
                    <span className="nlmsf-sidebar-icon">👥</span>
                    <span>Meet Our Board</span>
                  </a>
                </li>
                <li className="nlmsf-sidebar-item">
                  <a href="/medical-advisory-board" className="nlmsf-sidebar-link">
                    <span className="nlmsf-sidebar-icon">🔬</span>
                    <span>Medical Advisors</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="nlmsf-sidebar-cta">
              <h3 className="nlmsf-sidebar-cta-title">Share Your Story</h3>
              <p className="nlmsf-sidebar-cta-text">
                Has NLMSF made a difference in your journey? We&apos;d love to hear your story and share
                it with others who might benefit from your experiences.
              </p>
              <a href="/contact" className="nlmsf-sidebar-cta-button">
                Submit Your Testimonial
              </a>
            </div>
          </aside>

          <TestimonialsClient
            clinicianTestimonials={clinicianTestimonials}
            patientTestimonials={patientTestimonials}
          />
        </div>
      </section>
    </main>
  );
}
