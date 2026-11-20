"use client";

import { useEffect, useRef, useState } from "react";

type CopyEntryLinkProps = {
  id: string;
};

function absoluteEntryUrl(id: string): string {
  const path = window.location.pathname || "/";
  return `${window.location.origin}${path}#${id}`;
}

async function writeClipboard(text: string) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
  } catch {
    // Fall through to the selection-based copy when clipboard permission is blocked.
  }
  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.left = "-9999px";
  document.body.appendChild(input);
  input.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(input);
  if (!ok) throw new Error("copy failed");
}

export default function CopyEntryLink({ id }: CopyEntryLinkProps) {
  const [copied, setCopied] = useState(false);
  const [entryTitle, setEntryTitle] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const heading = buttonRef.current?.closest("article")?.querySelector("h4");
    const title = heading?.textContent?.replace(/\s+/g, " ").trim();
    if (title) setEntryTitle(title);
  }, []);

  async function onCopy() {
    try {
      await writeClipboard(absoluteEntryUrl(id));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="entry-copy">
      <button
        ref={buttonRef}
        type="button"
        className="entry-copy-button"
        onClick={onCopy}
        aria-label={entryTitle ? `Copy link to ${entryTitle}` : "Copy link to this entry"}
      >
        <i className="fas fa-link" aria-hidden />
        <span aria-live="polite">{copied ? "Copied" : "Copy link"}</span>
      </button>
    </div>
  );
}
