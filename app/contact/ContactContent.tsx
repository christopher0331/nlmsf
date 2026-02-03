"use client";

import { useState } from "react";
import Link from "next/link";

const FAQ_ITEMS: Array<{
  q: string;
  beforeLink: string;
  linkText: string;
  href: string;
  afterLink: string;
}> = [
  {
    q: "How can I get involved with NLMSF?",
    beforeLink: "There are many ways to get involved with our foundation including volunteering, donating, fundraising, or participating in our events. Visit our ",
    linkText: "Get Involved",
    href: "/get-involved",
    afterLink: " page to learn more about specific opportunities.",
  },
  {
    q: "Where does my donation go?",
    beforeLink: "Your donations support research, patient programs, education, and advocacy. You can view our financial reports and details about fund allocation on our ",
    linkText: "Accountability Reports",
    href: "/accountability-reports",
    afterLink: " page.",
  },
  {
    q: "How can I find a leiomyosarcoma specialist?",
    beforeLink: "We maintain a directory of specialists who have experience treating leiomyosarcoma. Please visit our ",
    linkText: "Find a Specialist",
    href: "/newly-diagnosed/find-specialist",
    afterLink: " page for more information or contact our patient support team directly.",
  },
  {
    q: "Do you offer support groups?",
    beforeLink: "Yes, we facilitate both in-person and virtual support groups for patients and caregivers across the country. Check our ",
    linkText: "Support Groups",
    href: "/leiomyosarcoma-support-group",
    afterLink: " page to find one in your area.",
  },
  {
    q: "How can I apply for a research grant?",
    beforeLink: "Our foundation awards research grants to qualified investigators studying leiomyosarcoma. Grant applications are accepted during specific periods. Please visit our ",
    linkText: "Research Funding",
    href: "/funded-projects",
    afterLink: " page for details on eligibility and application process.",
  },
];

export default function ContactContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<string>("");

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("Thank you. Your message has been received. We will get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="flex flex-1 flex-col">
      {/* Contact Information */}
      <div id="contact-info" className="content-section mb-12 scroll-mt-24">
        <h2
          className="section-title mb-6 rounded-md px-4 py-3 text-lg font-bold text-white sm:text-xl"
          style={{
            background: "linear-gradient(to right, #6a3ea1, #9333ea)",
          }}
        >
          Other Ways to Reach Us
        </h2>
        <div className="contact-cards-grid flex flex-row flex-wrap justify-around gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          <div className="contact-card rounded-lg bg-white p-6 text-center shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div
              className="contact-icon mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-xl text-white"
              style={{ backgroundColor: "#6a3ea1" }}
            >
              <i className="fas fa-phone-alt" aria-hidden />
            </div>
            <h3 className="contact-method text-xl font-bold text-slate-800">Phone</h3>
            <p className="contact-detail text-slate-600">(303)808-3437</p>
            <p className="contact-hours mt-1 text-sm text-slate-500">24 Hour Immediate Access</p>
          </div>
          <div className="contact-card rounded-lg bg-white p-6 text-center shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div
              className="contact-icon mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-xl text-white"
              style={{ backgroundColor: "#6a3ea1" }}
            >
              <i className="fas fa-envelope" aria-hidden />
            </div>
            <h3 className="contact-method text-xl font-bold text-slate-800">Email</h3>
            <p className="contact-detail text-slate-600">annieachee@aol.com</p>
            <p className="contact-hours mt-1 text-sm text-slate-500">We respond within 24 hours</p>
          </div>
          <div className="contact-card rounded-lg bg-white p-6 text-center shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div
              className="contact-icon mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-xl text-white"
              style={{ backgroundColor: "#6a3ea1" }}
            >
              <i className="fas fa-map-marker-alt" aria-hidden />
            </div>
            <h3 className="contact-method text-xl font-bold text-slate-800">Address</h3>
            <p className="contact-detail text-slate-600">1685 S. Colorado Blvd.</p>
            <p className="contact-detail text-slate-600">Unit S - Suite 447</p>
            <p className="contact-detail text-slate-600">Denver, CO 80222</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="content-section mb-12 scroll-mt-24">
        <h2
          className="section-title mb-6 rounded-md px-4 py-3 text-lg font-bold text-white sm:text-xl"
          style={{
            background: "linear-gradient(to right, #4338ca, #818cf8)",
          }}
        >
          Send Us a Message
        </h2>
        <div className="content-panel rounded-lg border-t-4 bg-white p-6 shadow-lg transition-shadow"
          style={{ borderTopColor: "#4338ca" }}
        >
          <div className="panel-header mb-4 flex items-center">
            <div
              className="icon-circle mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: "#4338ca" }}
            >
              <i className="fas fa-paper-plane" aria-hidden />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Contact Form</h3>
              <p className="mt-1 text-slate-600">Fill out the form below and we&apos;ll get back to you</p>
            </div>
          </div>
          <form
            id="nlmsf-contact-form"
            className="contact-form mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
            onSubmit={handleSubmit}
          >
            <div className="form-group flex flex-col">
              <label htmlFor="nlmsf-name" className="mb-2 font-semibold text-slate-800">
                Full Name *
              </label>
              <input
                type="text"
                id="nlmsf-name"
                name="name"
                required
                placeholder="Your name"
                className="rounded-md border border-slate-200 px-3 py-3 text-base transition-[border-color,box-shadow] focus:border-[#6a3ea1] focus:outline-none focus:ring-[3px] focus:ring-[#6a3ea1]/10"
              />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="nlmsf-email" className="mb-2 font-semibold text-slate-800">
                Email Address *
              </label>
              <input
                type="email"
                id="nlmsf-email"
                name="email"
                required
                placeholder="Your email address"
                className="rounded-md border border-slate-200 px-3 py-3 text-base transition-[border-color,box-shadow] focus:border-[#6a3ea1] focus:outline-none focus:ring-[3px] focus:ring-[#6a3ea1]/10"
              />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="nlmsf-phone" className="mb-2 font-semibold text-slate-800">
                Phone Number
              </label>
              <input
                type="tel"
                id="nlmsf-phone"
                name="phone"
                placeholder="Your phone number (optional)"
                className="rounded-md border border-slate-200 px-3 py-3 text-base transition-[border-color,box-shadow] focus:border-[#6a3ea1] focus:outline-none focus:ring-[3px] focus:ring-[#6a3ea1]/10"
              />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="nlmsf-subject" className="mb-2 font-semibold text-slate-800">
                Subject *
              </label>
              <select
                id="nlmsf-subject"
                name="subject"
                required
                className="rounded-md border border-slate-200 px-3 py-3 text-base transition-[border-color,box-shadow] focus:border-[#6a3ea1] focus:outline-none focus:ring-[3px] focus:ring-[#6a3ea1]/10"
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="general">General Inquiry</option>
                <option value="support">Patient Support</option>
                <option value="research">Research Information</option>
                <option value="donation">Donation Questions</option>
                <option value="volunteer">Volunteer Opportunities</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group col-span-full flex flex-col">
              <label htmlFor="nlmsf-message" className="mb-2 font-semibold text-slate-800">
                Your Message *
              </label>
              <textarea
                id="nlmsf-message"
                name="message"
                required
                rows={5}
                placeholder="How can we help you?"
                className="rounded-md border border-slate-200 px-3 py-3 text-base transition-[border-color,box-shadow] focus:border-[#6a3ea1] focus:outline-none focus:ring-[3px] focus:ring-[#6a3ea1]/10"
              />
            </div>
            <div className="form-group col-span-full flex flex-row items-center gap-2">
              <input
                type="checkbox"
                id="nlmsf-newsletter"
                name="newsletter"
                className="h-[18px] w-[18px] accent-[#6a3ea1]"
              />
              <label htmlFor="nlmsf-newsletter" className="text-slate-800">
                Subscribe to our newsletter
              </label>
            </div>
            <div className="form-group col-span-full flex flex-row items-center gap-2">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                required
                className="h-[18px] w-[18px] accent-[#6a3ea1]"
              />
              <label htmlFor="privacy" className="text-slate-800">
                I agree to the{" "}
                <Link href="/privacy-policy" className="font-semibold text-[#6a3ea1] underline hover:text-[#7e3af2]" target="_blank">
                  privacy policy
                </Link>{" "}
                *
              </label>
            </div>
            {formStatus && (
              <div id="nlmsf-form-status" className="col-span-full rounded border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                {formStatus}
              </div>
            )}
            <button
              type="submit"
              className="submit-button col-span-full mt-4 inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-white shadow transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow"
              style={{
                background: "linear-gradient(to right, #4338ca, #818cf8)",
              }}
            >
              <i className="fas fa-paper-plane mr-2" aria-hidden />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="content-section mb-12 scroll-mt-24">
        <h2
          className="section-title mb-6 rounded-md px-4 py-3 text-lg font-bold text-white sm:text-xl"
          style={{
            background: "linear-gradient(to right, #7c3aed, #a78bfa)",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div
          className="content-panel rounded-lg border-t-4 bg-white p-6 shadow-lg"
          style={{ borderTopColor: "#7c3aed" }}
        >
          <div className="panel-header mb-4 flex items-center">
            <div
              className="icon-circle mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              <i className="fas fa-question" aria-hidden />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Common Questions</h3>
              <p className="mt-1 text-slate-600">Answers to questions we frequently receive</p>
            </div>
          </div>
          <div className="faq-list mt-4">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className={`faq-item border-b border-slate-200 last:border-b-0 ${openIndex === index ? "open" : ""}`}
              >
                <div
                  className="faq-question flex cursor-pointer items-center justify-between py-4"
                  onClick={() => toggleFaq(index)}
                  onKeyDown={(e) => e.key === "Enter" && toggleFaq(index)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openIndex === index}
                >
                  <h4 className="faq-question m-0 text-base font-semibold text-slate-800 sm:text-lg">
                    {item.q}
                  </h4>
                  <button
                    type="button"
                    className="faq-toggle flex items-center justify-center rounded p-2 text-[#6a3ea1] transition-transform focus:outline-none focus:ring-2 focus:ring-[#6a3ea1]"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFaq(index);
                    }}
                    aria-label={openIndex === index ? "Collapse" : "Expand"}
                  >
                    <i
                      className={`fas ${openIndex === index ? "fa-chevron-up" : "fa-chevron-down"}`}
                      aria-hidden
                    />
                  </button>
                </div>
                <div
                  className={`faq-answer overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[1000px] opacity-100 pb-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="m-0 text-slate-600 leading-relaxed">
                    {item.beforeLink}
                    <Link
                      href={item.href}
                      className="font-semibold text-[#6a3ea1] no-underline hover:text-[#7e3af2] hover:underline"
                    >
                      {item.linkText}
                    </Link>
                    {item.afterLink}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
