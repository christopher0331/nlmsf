export type MerchTheme = {
  id: string;
  label: string;
  title: string;
  prompt: string;
};

export const BRAND_LOCKUP = `National Leiomyosarcoma Foundation (NLMSF). Brand colors: champion purple #6D28D9, lavender, white, deep navy. Purple sarcoma awareness ribbon. Must include readable text "NLMSF". Optional supporting words: Hope, Courage, Resilience, Strength, Champion of Hope. Square, high-contrast graphic print for DTG merch. No photorealistic people, no medical gore, no watermarks, no extra logos. Centered composition with safe margin for t-shirts, hoodies, and hats.`;

export const MERCH_THEMES: MerchTheme[] = [
  {
    id: "champion-hope",
    label: "Champion of Hope",
    title: "Champion of Hope",
    prompt:
      "Bold merch badge that says Champion of Hope and NLMSF, purple awareness ribbon, Hope Courage Resilience Strength around a circular seal, print-ready graphic.",
  },
  {
    id: "hope-stack",
    label: "Hope / Courage / Strength",
    title: "Hope Courage Strength",
    prompt:
      "Stacked wordmark merch graphic: HOPE, COURAGE, STRENGTH, with NLMSF and a purple ribbon. High contrast, athletic poster style.",
  },
  {
    id: "awareness-day",
    label: "July 15 Awareness Day",
    title: "LMS Awareness Day",
    prompt:
      "July 15 National Leiomyosarcoma Awareness Day merch design. Include NLMSF, a purple ribbon, and the date July 15. Community rally poster style.",
  },
  {
    id: "purple-ribbon",
    label: "Purple Ribbon",
    title: "Purple Ribbon NLMSF",
    prompt:
      "Large stylized purple awareness ribbon as the hero, NLMSF wordmark underneath, small Champion of Hope caption. Clean, iconic, merch-friendly.",
  },
  {
    id: "research-heart",
    label: "Research Heart",
    title: "Fund LMS Research",
    prompt:
      "Heart-and-ribbon emblem for funding LMS research. Text: NLMSF and Support LMS Research. Warm, hopeful, still bold enough for a hoodie.",
  },
  {
    id: "resilience",
    label: "Resilience",
    title: "Resilience",
    prompt:
      "Shield or crest merch graphic with RESILIENCE as the hero word, NLMSF, purple ribbon, and a small nlmsf.org. Strong, survivor-advocate energy.",
  },
];

export function getTheme(id: string): MerchTheme | undefined {
  return MERCH_THEMES.find((t) => t.id === id);
}

export function buildGeminiPrompt(theme: MerchTheme, extra: string): string {
  const extraLine = extra.trim() ? `Additional art direction from staff: ${extra.trim()}` : "";
  return `${BRAND_LOCKUP}

Theme: ${theme.label}
${theme.prompt}
${extraLine}`.trim();
}
