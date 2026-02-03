"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "How do I get matched with a Buddy in the LIFELINE program?",
    a: "Complete our confidential form describing your diagnosis, treatment stage, and specific concerns. Our team will carefully match you with a trained buddy who has a similar experience. Matches are typically made within 3-5 business days.",
  },
  {
    q: "What can I expect when I call the 24/7 LIFELINE Support Hotline?",
    a: "Your call will be answered by a trained volunteer who understands the LMS journey. They can provide emotional support, information about resources, and practical guidance. All conversations are confidential, and follow-up assistance can be arranged if needed.",
  },
  {
    q: "How can I participate in the genomic and molecular tumor testing programs?",
    a: "Speak with your oncologist about your interest in genomic testing. The NLMSF can provide information about partner programs like Perthera, CERTIS, Boston Gene, and the Broad Institute. Some programs may require tumor tissue samples, while others can work with blood samples or existing test results.",
  },
  {
    q: "Are there costs associated with NLMSF support programs?",
    a: "Most NLMSF support services are provided at no cost to patients and caregivers, thanks to our donors and volunteers. Some specialized genomic testing programs may have costs, though financial assistance might be available. Our team can provide specific information for each program you're interested in.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-container">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`faq-item ${isOpen ? "active" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              onKeyDown={(e) => e.key === "Enter" && setOpenIndex(isOpen ? null : index)}
              role="button"
              tabIndex={0}
            >
              <h3>{item.q}</h3>
              <span className={`faq-toggle ${isOpen ? "active" : ""}`}>
                <i className="fas fa-chevron-down" aria-hidden />
              </span>
            </div>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
