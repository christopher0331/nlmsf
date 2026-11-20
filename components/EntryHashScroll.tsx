"use client";

import { useEffect } from "react";

function revealTarget(el: HTMLElement) {
  let node: HTMLElement | null = el.parentElement;
  while (node) {
    if (node instanceof HTMLDetailsElement) node.open = true;
    node = node.parentElement;
  }

  const panel = el.closest<HTMLElement>('[role="tabpanel"]');
  if (panel?.id) {
    const tab = document.querySelector<HTMLElement>(
      `[role="tab"][aria-controls="${CSS.escape(panel.id)}"]`,
    );
    if (tab && tab.getAttribute("aria-selected") !== "true") {
      tab.click();
    }
  }
}

function scrollToLocationHash() {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return;
  let id = raw;
  try {
    id = decodeURIComponent(raw);
  } catch {
    id = raw;
  }
  const el = document.getElementById(id);
  if (!(el instanceof HTMLElement)) return;
  revealTarget(el);
  el.scrollIntoView({ block: "start" });
}

/**
 * Re-applies the URL hash after load so a shared link lands on the entry,
 * including when that entry sits inside a closed accordion or inactive tab.
 * scroll-margin-top on the target clears the site header.
 */
export default function EntryHashScroll() {
  useEffect(() => {
    let userMoved = false;
    const markMoved = () => {
      userMoved = true;
    };
    const scrollIfStill = () => {
      if (!userMoved) scrollToLocationHash();
    };
    scrollToLocationHash();
    const timers = [80, 400].map((ms) => window.setTimeout(scrollIfStill, ms));
    window.addEventListener("hashchange", scrollToLocationHash);
    window.addEventListener("load", scrollIfStill);
    window.addEventListener("wheel", markMoved, { passive: true });
    window.addEventListener("touchstart", markMoved, { passive: true });
    window.addEventListener("keydown", markMoved);
    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("hashchange", scrollToLocationHash);
      window.removeEventListener("load", scrollIfStill);
      window.removeEventListener("wheel", markMoved);
      window.removeEventListener("touchstart", markMoved);
      window.removeEventListener("keydown", markMoved);
    };
  }, []);

  return null;
}
