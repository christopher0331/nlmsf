"use client";

import { useState } from "react";
import Link from "next/link";

const FAQ_ITEMS = [
  {
    q: "Is immunotherapy as hard on you as chemo?",
    a: "Side effects vary and are highly subjective. Chemotherapy affects all rapidly dividing cells, while immunotherapy causes immune-related side effects ranging from mild to severe.",
    links: [],
  },
  {
    q: "Can you combine targeted therapy with immunotherapy?",
    a: "Yes, immunotherapy might consolidate dramatic tumor responses into durable remissions, reducing the risk of drug-resistant clones. ",
    links: [{ href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3967236/", text: "Learn more" }],
  },
  {
    q: "What is combination immunotherapy?",
    a: "It helps T cells find and fight cancer. For some, it stops cancer and shrinks tumors. Thousands of clinical studies are testing combinations for many cancers.",
    links: [],
  },
  {
    q: "What is the treatment of choice for leiomyosarcoma?",
    a: "Management depends on disease site, tumor size, grade, and patient factors. Options include surgical resection, radiation, and chemotherapy. A multidisciplinary approach at high-volume sarcoma centers is recommended. ",
    links: [{ href: "https://www.ncbi.nlm.nih.gov/books/NBK551667/", text: "NCBI Reference" }],
  },
];

export default function ImmunotherapyFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-compact space-y-3">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`faq-item rounded-lg overflow-hidden transition-all duration-300 border border-slate-200 bg-white shadow-sm ${
              isOpen ? "active border-l-4 border-l-blue-600" : "border-l-4 border-l-violet-500"
            }`}
          >
            <h4
              className="faq-question flex cursor-pointer items-center justify-between gap-2 p-4 text-base font-bold text-slate-800 transition-colors hover:bg-slate-50 user-select-none md:text-lg"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.q}</span>
              <i
                className={`fas faq-icon text-slate-500 transition-transform duration-300 ${isOpen ? "fa-chevron-up text-blue-700" : "fa-chevron-down"}`}
                aria-hidden
              />
            </h4>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-slate-200 bg-slate-50 px-4 pb-4 pt-0">
                <p className="m-0 text-sm leading-relaxed text-slate-600 md:text-base">
                  {item.a}
                  {item.links.map((link, i) => (
                    <span key={i}>
                      {" "}
                      <Link
                        href={link.href}
                        className="font-medium text-blue-600 no-underline hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </Link>
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
