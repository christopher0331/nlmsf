import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Fraunces, Source_Serif_4 } from "next/font/google";
import PrintStoryButton from "./PrintStoryButton";
import "./print.css";
import { DEB_GATES_RUN } from "@/lib/deb-gates-run";
import {
  DEB_GATES_STORY_MEMORIAL_URL,
  DEB_GATES_STORY_PARAGRAPHS,
  DEB_GATES_STORY_PULL_QUOTE,
  DEB_GATES_STORY_SIGN_OFF,
} from "@/lib/deb-gates-story";

const storyDisplay = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-story-display",
});

const storyBody = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-story-body",
});

const PAGE_TITLE = "Deb's Story | NLMSF";
const PAGE_DESCRIPTION =
  "Deb Gates's story, in her own words, as shared with the National Leiomyosarcoma Foundation.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://nlmsf.org/deb-gates-run/story/",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://nlmsf.org/deb-gates-run/story/",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const displayFontStyle = {
  fontFamily: "var(--font-story-display), Georgia, serif",
} as const;

const bodyFontStyle = {
  fontFamily: "var(--font-story-body), Georgia, 'Times New Roman', serif",
} as const;

const sectionTitle = {
  background: "linear-gradient(90deg, #7e22ce, #4338ca)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

function BackLink() {
  return (
    <Link
      href={DEB_GATES_RUN.path}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5b21b6] no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b21b6]"
    >
      <span aria-hidden>←</span>
      Back to Deb&apos;s run
    </Link>
  );
}

function LinkedText({ text }: { text: string }) {
  if (!text.includes(DEB_GATES_STORY_MEMORIAL_URL)) {
    return text;
  }
  const parts = text.split(DEB_GATES_STORY_MEMORIAL_URL);
  const nodes: ReactNode[] = [];
  parts.forEach((part, index) => {
    nodes.push(<span key={`t-${index}`}>{part}</span>);
    if (index < parts.length - 1) {
      nodes.push(
        <a
          key={`a-${index}`}
          href={DEB_GATES_STORY_MEMORIAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-[#5b21b6] underline decoration-[#c4b5fd] underline-offset-[3px] hover:decoration-[#5b21b6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b21b6]"
        >
          {DEB_GATES_STORY_MEMORIAL_URL}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>,
      );
    }
  });
  return nodes;
}

function NarrativeParagraph({
  text,
  dropCap = false,
}: {
  text: string;
  dropCap?: boolean;
}) {
  const body = (
    <p
      className={`mb-7 whitespace-pre-wrap text-[1.0625rem] leading-[1.8] text-[#1e1b4b] sm:text-[1.125rem] ${dropCap ? "flow-root" : ""}`}
    >
      {dropCap ? (
        <>
          <span
            className="story-drop-letter float-left mr-2 mt-1 text-[3.25rem] font-semibold leading-[0.8] text-[#5b21b6] sm:text-[3.5rem]"
            style={displayFontStyle}
          >
            {text.slice(0, 1)}
          </span>
          <LinkedText text={text.slice(1)} />
        </>
      ) : (
        <LinkedText text={text} />
      )}
    </p>
  );
  return body;
}

export default function DebGatesStoryPage() {
  const [salutation, ...rest] = DEB_GATES_STORY_PARAGRAPHS;
  const narrative = rest.slice(0, -1);
  const quoteIndex = narrative.findIndex((paragraph) =>
    paragraph.includes(DEB_GATES_STORY_PULL_QUOTE),
  );

  return (
    <main
      className={`deb-gates-story min-h-screen bg-gradient-to-b from-[#faf8ff] via-white to-[#f8f7fc] text-[#1e1b4b] ${storyDisplay.variable} ${storyBody.variable}`}
    >
      <section className="story-hero relative mx-4 mt-4 max-w-[1400px] overflow-hidden rounded-xl border border-[#ddd6fe] bg-white text-center shadow-sm sm:mx-auto sm:mt-6">
        <div
          className="story-accent h-1.5 bg-gradient-to-r from-[#6b46c1] via-[#7c3aed] to-[#c4b5fd]"
          aria-hidden
        />
        <div
          className="story-hero-wash pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(126, 34, 206, 0.05), rgba(67, 56, 202, 0.1))",
          }}
        />
        <div className="relative z-[2] px-4 py-10 sm:px-6 sm:py-12">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-[30px] px-4 py-1.5 text-sm font-semibold text-white"
            style={{ background: "linear-gradient(90deg, #7e22ce, #4338ca)" }}
          >
            <i className="fas fa-book-open" aria-hidden />
            <span>In her own words</span>
          </div>
          <h1
            className="mb-4 pb-1 text-3xl font-bold leading-tight sm:text-5xl"
            style={sectionTitle}
          >
            Deb&apos;s Story
          </h1>
          <p className="story-kicker mx-auto max-w-[40rem] text-base leading-relaxed text-gray-600 sm:text-lg">
            As shared with the National Leiomyosarcoma Foundation.
          </p>
        </div>
      </section>

      <div className="story-chrome mx-auto mt-6 flex w-full max-w-[calc(65ch+3rem)] flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <BackLink />
        <PrintStoryButton />
      </div>

      <div className="mx-auto mt-8 w-full max-w-[calc(65ch+4.5rem)] px-4 sm:px-6">
        <div className="rounded-2xl border border-[#ddd6fe] bg-white px-4 py-8 shadow-[0_6px_22px_rgba(107,70,193,0.1)] sm:px-10 sm:py-12">
        <article className="story-column mx-auto max-w-[65ch]" style={bodyFontStyle}>
          <p className="mb-10 whitespace-pre-wrap text-balance text-center text-xl italic leading-relaxed text-[#3b2768]">
            {salutation}
          </p>
          {narrative.map((paragraph, index) => (
            <div key={index}>
              <NarrativeParagraph text={paragraph} dropCap={index === 0} />
              {index === quoteIndex ? (
                <blockquote className="my-10 border-l-[3px] border-[#7e22ce] bg-gradient-to-br from-[#f5f3ff] via-white to-[#faf5ff] py-5 pl-5 pr-4 sm:pl-6">
                  <p
                    className="m-0 text-[1.35rem] italic leading-snug text-[#1e1b4b] sm:text-[1.5rem]"
                    style={displayFontStyle}
                  >
                    <span aria-hidden="true">“</span>
                    {DEB_GATES_STORY_PULL_QUOTE}
                    <span aria-hidden="true">”</span>
                  </p>
                </blockquote>
              ) : null}
            </div>
          ))}
          <p
            className="story-signoff m-0 mt-14 border-t border-[#ddd6fe] pt-6 text-right text-2xl italic text-[#1e1b4b]"
            style={displayFontStyle}
          >
            {DEB_GATES_STORY_SIGN_OFF}
          </p>
        </article>
        </div>
      </div>

      <div className="story-chrome mx-auto mt-8 flex w-full max-w-[calc(65ch+3rem)] px-5 pb-16 sm:px-6">
        <BackLink />
      </div>
    </main>
  );
}
