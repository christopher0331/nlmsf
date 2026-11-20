"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  readAwarenessPreviewDate,
  resolveAwareness,
  type ResolvedAwareness,
} from "@/lib/awareness-banner";

const REPEAT = 3;

/**
 * Horizontally scrolling awareness banner for the current local month.
 * The message is chosen after mount so a static build does not freeze a month
 * and server HTML cannot disagree with the visitor's clock.
 */
export default function AwarenessBanner() {
  const [message, setMessage] = useState<ResolvedAwareness | null>(null);

  useEffect(() => {
    const apply = () => {
      const preview = readAwarenessPreviewDate(window.location.search);
      setMessage(resolveAwareness(preview ?? new Date()));
    };
    apply();
    const onVisible = () => {
      if (document.visibilityState === "visible") apply();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, []);

  const ready = message != null;
  const text = message?.text ?? "";
  const href = message?.href ?? "/donate";
  const label = message?.label ?? "Awareness observance";

  return (
    <div
      className="awareness-banner relative flex min-h-[50px] min-w-0 flex-1 items-center overflow-hidden bg-[#4c1d95] text-sm font-semibold leading-snug text-white"
      role="region"
      aria-label={ready ? label : "Awareness observance"}
      aria-live="polite"
      aria-busy={ready ? undefined : true}
      data-awareness-month={message?.month ?? undefined}
    >
      {ready ? (
        <Link href={href} className="awareness-focus-link bg-[#4c1d95] text-white">
          {text}
        </Link>
      ) : (
        <span className="sr-only">Loading this month&apos;s awareness message.</span>
      )}

      {ready ? (
        <Link
          href={href}
          tabIndex={-1}
          aria-hidden
          className="awareness-track text-white no-underline"
        >
          <MarqueeHalf text={text} />
          <MarqueeHalf text={text} />
        </Link>
      ) : null}

      {ready ? (
        <div className="awareness-static w-full px-3 py-2">
          <Link
            href={href}
            className="text-white underline decoration-white/70 underline-offset-2 hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fde68a]"
          >
            {text}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

function MarqueeHalf({ text }: { text: string }) {
  return (
    <span className="flex shrink-0 items-center">
      {Array.from({ length: REPEAT }, (_, index) => (
        <span key={index} className="whitespace-nowrap px-8">
          {text}
          <span className="px-6 text-white/70">·</span>
        </span>
      ))}
    </span>
  );
}
