export type PackageKey =
  | "test_1"
  | "test_50c"
  | "registration"
  | "raffle_1"
  | "raffle_10"
  | "raffle_25"
  | "day_of_donation"
  | "misc"
  | "silver"
  | "gold"
  | "title"
  | "legacy";

export type PackageDef = {
  label: string;
  price: number; // cents (fixed packages); 0 when variableAmount
  eventTickets: number;
  raffleTickets: number;
  sponsorRaffleTickets: number;
  bestDressedVotes: number;
  podcast: boolean;
  logoOnHomepage: boolean;
  recognition: string | null;
  description: string;
  /** Checkout expects JSON `amountCents`; perks come from computeDayOfDonationPerks */
  variableAmount?: boolean;
  minAmountCents?: number;
  maxAmountCents?: number;
};

/** Published bundle prices used to turn a day-of dollar amount into tickets (greedy: best raffle value first). */
const DAY_OF_BUNDLES = [
  { price: 50000, eventTickets: 0, raffleTickets: 25 }, // $500 — 25 raffle
  { price: 30000, eventTickets: 0, raffleTickets: 10 }, // $300 — 10 raffle
  { price: 5000, eventTickets: 0, raffleTickets: 1 }, // $50 — 1 raffle
  { price: 10000, eventTickets: 1, raffleTickets: 1 }, // $100 — registration
] as const;

export type DayOfPerkBreakdown = {
  eventTickets: number;
  raffleTickets: number;
  sponsorRaffleTickets: number;
  bestDressedVotes: number;
  podcast: boolean;
  logoOnHomepage: boolean;
  recognition: string | null;
  remainderCents: number;
  summaryLine: string;
};

export function computeDayOfDonationPerks(amountCents: number): DayOfPerkBreakdown {
  let remaining = Math.max(0, Math.floor(amountCents));
  let eventTickets = 0;
  let raffleTickets = 0;

  for (const b of DAY_OF_BUNDLES) {
    while (remaining >= b.price) {
      remaining -= b.price;
      eventTickets += b.eventTickets;
      raffleTickets += b.raffleTickets;
    }
  }

  let recognition: string | null = null;
  if (remaining > 0) {
    recognition = `Unrestricted donation (no matching ticket bundle): $${(remaining / 100).toFixed(2)}`;
  }

  const parts: string[] = [];
  if (eventTickets > 0) {
    parts.push(`${eventTickets} event ticket${eventTickets !== 1 ? "s" : ""}`);
  }
  if (raffleTickets > 0) {
    parts.push(`${raffleTickets} raffle ticket${raffleTickets !== 1 ? "s" : ""}`);
  }
  const summaryLine =
    parts.length > 0
      ? `Allocated from published pack prices: ${parts.join(" + ")}.`
      : "Amount below standard ticket bundle prices — recorded as a general donation.";

  return {
    eventTickets,
    raffleTickets,
    sponsorRaffleTickets: 0,
    bestDressedVotes: 0,
    podcast: false,
    logoOnHomepage: false,
    recognition,
    remainderCents: remaining,
    summaryLine,
  };
}

export const PACKAGES: Record<PackageKey, PackageDef> = {
  test_1: {
    label: "Test $1 Ticket",
    price: 100,
    eventTickets: 1,
    raffleTickets: 0,
    sponsorRaffleTickets: 0,
    bestDressedVotes: 0,
    podcast: false,
    logoOnHomepage: false,
    recognition: null,
    description: "Test ticket — $1.00.",
  },
  test_50c: {
    label: "Test $0.50 Ticket",
    price: 50,
    eventTickets: 0,
    raffleTickets: 1,
    sponsorRaffleTickets: 0,
    bestDressedVotes: 0,
    podcast: false,
    logoOnHomepage: false,
    recognition: null,
    description: "Test ticket — $0.50.",
  },
  registration: {
    label: "Registration",
    price: 10000,
    eventTickets: 1,
    raffleTickets: 1,
    sponsorRaffleTickets: 0,
    bestDressedVotes: 0,
    podcast: false,
    logoOnHomepage: false,
    recognition: null,
    description: "Entrance to the event and 1 raffle ticket.",
  },
  raffle_1: {
    label: "Raffle — 1 Ticket",
    price: 5000,
    eventTickets: 0,
    raffleTickets: 1,
    sponsorRaffleTickets: 0,
    bestDressedVotes: 0,
    podcast: false,
    logoOnHomepage: false,
    recognition: null,
    description: "1 raffle ticket.",
  },
  raffle_10: {
    label: "Raffle — 10 Tickets",
    price: 30000,
    eventTickets: 0,
    raffleTickets: 10,
    sponsorRaffleTickets: 0,
    bestDressedVotes: 0,
    podcast: false,
    logoOnHomepage: false,
    recognition: null,
    description: "10 raffle tickets.",
  },
  raffle_25: {
    label: "Raffle — 25 Tickets",
    price: 50000,
    eventTickets: 0,
    raffleTickets: 25,
    sponsorRaffleTickets: 0,
    bestDressedVotes: 0,
    podcast: false,
    logoOnHomepage: false,
    recognition: null,
    description: "25 raffle tickets.",
  },
  day_of_donation: {
    label: "Day-of Donation",
    price: 0,
    variableAmount: true,
    minAmountCents: 500,
    maxAmountCents: 10_000_000,
    eventTickets: 0,
    raffleTickets: 0,
    sponsorRaffleTickets: 0,
    bestDressedVotes: 0,
    podcast: false,
    logoOnHomepage: false,
    recognition: null,
    description:
      "Variable amount. Ticket counts follow standard pack pricing ($500 / $300 / $50 / $100 registration) at checkout.",
  },
  misc: {
    label: "Miscellaneous Donation",
    price: 0,
    variableAmount: true,
    minAmountCents: 100,
    maxAmountCents: 10_000_000,
    eventTickets: 0,
    raffleTickets: 0,
    sponsorRaffleTickets: 0,
    bestDressedVotes: 0,
    podcast: false,
    logoOnHomepage: false,
    recognition: null,
    description: "General miscellaneous donation — no tickets or perks included.",
  },
  silver: {
    label: "Silver Sponsor",
    price: 50000,
    eventTickets: 4,
    raffleTickets: 10,
    sponsorRaffleTickets: 0,
    bestDressedVotes: 0,
    podcast: false,
    logoOnHomepage: false,
    recognition: "Before, during, and after the event",
    description:
      "4 event tickets, 10 raffle tickets, and recognition before, during, and after the event.",
  },
  gold: {
    label: "Annual/Gold Sponsor",
    price: 100000,
    eventTickets: 8,
    raffleTickets: 20,
    sponsorRaffleTickets: 1,
    bestDressedVotes: 1,
    podcast: false,
    logoOnHomepage: false,
    recognition: "Before, during, and after the event",
    description:
      "8 event tickets, 20 raffle tickets, recognition before, during, and after the event. 1 Special Sponsor Raffle ticket. 1 Best Dressed Vote.",
  },
  title: {
    label: "Title Sponsor",
    price: 500000,
    eventTickets: 15,
    raffleTickets: 50,
    sponsorRaffleTickets: 2,
    bestDressedVotes: 2,
    podcast: true,
    logoOnHomepage: true,
    recognition: "Before and during the event",
    description:
      "15 event tickets, 50 raffle tickets, and recognition before and during the event. A Podcast for a charity of your choice with Jamie Truman. Logo with link on our homepage for one full year. 2 Special Sponsor Raffle tickets. 2 Best Dressed Votes.",
  },
  legacy: {
    label: "Legacy Sponsor",
    price: 1000000,
    eventTickets: 20,
    raffleTickets: 100,
    sponsorRaffleTickets: 3,
    bestDressedVotes: 3,
    podcast: true,
    logoOnHomepage: true,
    recognition: "Prior, during, and after the event",
    description:
      "20 event tickets, 100 raffle tickets, and recognition prior, during, and after the event. A Podcast for a charity of your choice with Jamie Truman. Logo with link on our homepage for one full year. 3 Special Sponsor Raffle tickets. 3 Best Dressed Votes.",
  },
};

export const PACKAGE_KEYS = Object.keys(PACKAGES) as PackageKey[];

export function isValidPackageKey(key: string): key is PackageKey {
  return key in PACKAGES;
}

export function formatCents(cents: number): string {
  return (cents / 100).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
