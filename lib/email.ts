import { Resend } from "resend";

let resend: Resend | null = null;

function getResend(): Resend {
  if (!resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error("RESEND_API_KEY is not set");
    resend = new Resend(key);
  }
  return resend;
}

const FROM = "NLMSF <no-reply@nlmsf.org>";
const FOUNDATION_EMAIL = "annieachee@aol.com";

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  newsletter: boolean;
}) {
  const r = getResend();

  await r.emails.send({
    from: FROM,
    to: [FOUNDATION_EMAIL],
    replyTo: data.email,
    subject: `[Contact Form] ${data.subject} — from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${esc(data.name)}</p>
      <p><strong>Email:</strong> ${esc(data.email)}</p>
      <p><strong>Phone:</strong> ${esc(data.phone || "Not provided")}</p>
      <p><strong>Subject:</strong> ${esc(data.subject)}</p>
      <p><strong>Newsletter:</strong> ${data.newsletter ? "Yes" : "No"}</p>
      <hr />
      <p>${esc(data.message).replace(/\n/g, "<br />")}</p>
    `,
  });
}

export async function sendFundraiserConfirmation(data: {
  name: string;
  email: string;
  packageLabel: string;
  amount: number;
  eventTickets: number;
  raffleTickets: number;
  sponsorRaffleTickets: number;
  bestDressedVotes: number;
}) {
  const r = getResend();
  const dollars = (data.amount / 100).toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });

  const ticketLines: string[] = [];
  if (data.eventTickets > 0)
    ticketLines.push(`${data.eventTickets} event ticket${data.eventTickets !== 1 ? "s" : ""}`);
  if (data.raffleTickets > 0)
    ticketLines.push(`${data.raffleTickets} raffle ticket${data.raffleTickets !== 1 ? "s" : ""}`);
  if (data.sponsorRaffleTickets > 0)
    ticketLines.push(`${data.sponsorRaffleTickets} special sponsor raffle ticket${data.sponsorRaffleTickets !== 1 ? "s" : ""}`);
  if (data.bestDressedVotes > 0)
    ticketLines.push(`${data.bestDressedVotes} best dressed vote${data.bestDressedVotes !== 1 ? "s" : ""}`);
  const includesBlock =
    ticketLines.length > 0
      ? `<tr>
          <td style="padding:6px 16px 6px 0;font-weight:bold;">Includes:</td>
          <td style="padding:6px 0;">${ticketLines.join(", ")}</td>
        </tr>`
      : `<tr>
          <td style="padding:6px 16px 6px 0;font-weight:bold;">Includes:</td>
          <td style="padding:6px 0;">General donation (no standard ticket bundles matched for this amount).</td>
        </tr>`;

  await r.emails.send({
    from: FROM,
    to: [data.email],
    subject: `Your NLMSF Pillars of Purpose Order — ${data.packageLabel}`,
    html: `
      <h2>Thank you, ${esc(data.name)}!</h2>
      <p>Your purchase has been confirmed for the <strong>Impact in Action: Pillars of Purpose</strong> fundraiser.</p>
      <table style="border-collapse:collapse;margin:16px 0;">
        <tr>
          <td style="padding:6px 16px 6px 0;font-weight:bold;">Package:</td>
          <td style="padding:6px 0;">${esc(data.packageLabel)}</td>
        </tr>
        <tr>
          <td style="padding:6px 16px 6px 0;font-weight:bold;">Amount:</td>
          <td style="padding:6px 0;">$${dollars}</td>
        </tr>
        ${includesBlock}
      </table>
      <p>If you have any questions, contact us at <a href="mailto:annieachee@aol.com">annieachee@aol.com</a> or call (303) 808-3437.</p>
      <p style="color:#888;font-size:13px;margin-top:24px;">National Leiomyosarcoma Foundation<br/>1685 S. Colorado Blvd., Unit S - Suite 447, Denver, CO 80222</p>
    `,
  });

  await r.emails.send({
    from: FROM,
    to: [FOUNDATION_EMAIL],
    subject: `[Fundraiser Order] ${data.packageLabel} — ${data.name}`,
    html: `
      <h2>New Fundraiser Order</h2>
      <p><strong>Name:</strong> ${esc(data.name)}</p>
      <p><strong>Email:</strong> ${esc(data.email)}</p>
      <p><strong>Package:</strong> ${esc(data.packageLabel)}</p>
      <p><strong>Amount:</strong> $${dollars}</p>
      <p><strong>Includes:</strong> ${ticketLines.length > 0 ? ticketLines.join(", ") : "General donation (no standard ticket bundles matched)"}</p>
    `,
  });
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
