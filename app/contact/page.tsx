import type { Metadata } from "next";
import Link from "next/link";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | NLMSF",
  description:
    "Get in touch with the National LeiomyoSarcoma Foundation. Support, feedback, collaboration. We're here to help.",
};

const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="hero-container mb-8 rounded-lg px-4 py-12 text-center text-white max-w-[1200px] mx-auto"
        style={{
          background: "linear-gradient(to right, #6a3ea1, #4338ca, #818cf8)",
        }}
      >
        <div className="hero-content max-w-[800px] mx-auto">
          <div className="hero-badge mb-4 inline-flex items-center rounded-full bg-white/20 px-4 py-2">
            <div
              className="badge-icon mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: "#6a3ea1" }}
            >
              <i className="fas fa-envelope text-xs" aria-hidden />
            </div>
            <span>Get in Touch</span>
          </div>
          <h1 className="hero-title mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            <span
              className="gradient-text inline-block"
              style={{
                background: "linear-gradient(to right, #ffffff, #e9d5ff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Contact Us
            </span>
          </h1>
          <div
            className="hero-divider mx-auto my-6 h-1 w-14 rounded"
            style={{ backgroundColor: "#e9d5ff" }}
            aria-hidden
          />
          <div className="hero-features mb-6 flex flex-wrap justify-center gap-4 sm:gap-4">
            <span className="feature-tag inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm">
              <i className="fas fa-question-circle mr-2" aria-hidden />
              Support
            </span>
            <span className="feature-tag inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm">
              <i className="fas fa-comments mr-2" aria-hidden />
              Feedback
            </span>
            <span className="feature-tag inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm">
              <i className="fas fa-handshake mr-2" aria-hidden />
              Collaboration
            </span>
          </div>
          <p className="hero-description mx-auto max-w-[700px] text-base leading-relaxed text-white/95 sm:text-lg">
            Have a question about Leiomyosarcoma? Looking to get involved with our foundation? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Sidebar + Main Content */}
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-4 lg:flex-row lg:gap-8">
        <aside className="sidebar w-full shrink-0 rounded-lg bg-slate-50 p-6 lg:sticky lg:top-24 lg:w-[300px] lg:self-start">
          <nav className="sidebar-navigation mb-8" aria-label="Contact options">
            <h3 className="sidebar-title mb-4 text-lg font-bold text-slate-800">
              Contact Options
            </h3>
            <ul className="sidebar-links list-none p-0 m-0 space-y-1">
              <li className="sidebar-link-item">
                <a
                  href="#contact-form"
                  className="sidebar-link active flex items-center py-2 text-slate-700 font-semibold no-underline transition-colors hover:text-[#6a3ea1]"
                >
                  <i className="fas fa-angle-right mr-2 w-4 text-center transition-transform hover:translate-x-0.5" aria-hidden />
                  Contact Form
                </a>
              </li>
              <li className="sidebar-link-item">
                <a
                  href="#contact-info"
                  className="sidebar-link flex items-center py-2 text-slate-600 no-underline transition-colors hover:translate-x-0.5 hover:text-[#6a3ea1]"
                >
                  <i className="fas fa-angle-right mr-2 w-4 text-center transition-transform group-hover:translate-x-0.5" aria-hidden />
                  Contact Information
                </a>
              </li>
              <li className="sidebar-link-item">
                <a
                  href="#faq"
                  className="sidebar-link flex items-center py-2 text-slate-600 no-underline transition-colors hover:text-[#6a3ea1]"
                >
                  <i className="fas fa-angle-right mr-2 w-4 text-center transition-transform" aria-hidden />
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </nav>

          <div className="sidebar-section border-t border-slate-200 pt-6">
            <h3 className="sidebar-section-title mb-4 text-base font-semibold text-slate-800">
              Get Support
            </h3>
            <ul className="topic-list list-none p-0 m-0 space-y-3">
              <li>
                <Link
                  href="/newly-diagnosed"
                  className="flex items-center text-slate-600 no-underline transition-colors hover:text-[#6a3ea1]"
                >
                  <i className="fas fa-info-circle mr-2 w-4 text-center" aria-hidden />
                  Newly Diagnosed Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/leiomyosarcoma-support-group"
                  className="flex items-center text-slate-600 no-underline transition-colors hover:text-[#6a3ea1]"
                >
                  <i className="fas fa-users mr-2 w-4 text-center" aria-hidden />
                  Support Groups
                </Link>
              </li>
              <li>
                <Link
                  href="/caregiver-traits"
                  className="flex items-center text-slate-600 no-underline transition-colors hover:text-[#6a3ea1]"
                >
                  <i className="fas fa-hand-holding-heart mr-2 w-4 text-center" aria-hidden />
                  Caregiver Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/financial-assistance"
                  className="flex items-center text-slate-600 no-underline transition-colors hover:text-[#6a3ea1]"
                >
                  <i className="fas fa-dollar-sign mr-2 w-4 text-center" aria-hidden />
                  Financial Assistance
                </Link>
              </li>
            </ul>
          </div>

          <div className="sidebar-section border-t border-slate-200 pt-6">
            <h3 className="sidebar-section-title mb-4 text-base font-semibold text-slate-800">
              Connect With Us
            </h3>
            <div className="social-links flex gap-4">
              <a
                href="https://facebook.com/nlmsf"
                className="social-link flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "#1877f2" }}
                {...ext}
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-sm" aria-hidden />
              </a>
              <a
                href="https://twitter.com/nlmsf"
                className="social-link flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "#1da1f2" }}
                {...ext}
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-sm" aria-hidden />
              </a>
              <a
                href="https://youtube.com/c/nlmsf"
                className="social-link flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "#ff0000" }}
                {...ext}
                aria-label="YouTube"
              >
                <i className="fab fa-youtube text-sm" aria-hidden />
              </a>
            </div>
          </div>

          <div className="sidebar-cta mt-8">
            <div
              className="cta-gradient rounded-lg p-6 text-center text-white"
              style={{
                background: "linear-gradient(to bottom right, #6a3ea1, #4338ca)",
              }}
            >
              <h4 className="mb-3 text-lg font-bold">Subscribe to Our Newsletter</h4>
              <p className="mb-5 text-sm leading-relaxed opacity-95">
                Stay updated on the latest news, research, and events
              </p>
              <Link
                href="/newsletter"
                className="cta-button inline-block rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#6a3ea1] no-underline shadow transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </aside>

        <div className="main-content min-w-0 flex-1 p-4">
          <ContactContent />
        </div>
      </div>
    </main>
  );
}
