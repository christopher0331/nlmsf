# nlmsf

React/Next.js + Tailwind site converted from pasted HTML/CSS/JS. **URL parity** and **content parity** only — no new features or redesign.

See **[CONVERSION.md](./CONVERSION.md)** for the step-by-step game plan and how to paste new pages.

## Events (right column) and admin

The homepage right column shows **Upcoming Events** and **Recent Recordings**. Events are stored in a **SQLite** database (super cheap, file-based). Once an event’s date/time has passed, it moves from “Upcoming” to “Recent Recordings” automatically.

- **Protected admin:** `/admin` — sign in with a single password (env). `/admin/events` — list events, “Show on Homepage” toggle, Edit, Delete, and **Add New Event** (title, date, time, timezone, Zoom link, description, display options).
- **Database:** SQLite via Prisma. Default DB file: `prisma/dev.db`. For production on Vercel, use [Turso](https://turso.tech) or [Neon](https://neon.tech) and set `DATABASE_URL`; schema stays the same.

**Setup:**

1. Copy `.env.example` to `.env`.
2. Set `ADMIN_PASSWORD` (and optionally `DATABASE_URL`; default is `file:./prisma/dev.db`).
3. Run `npx prisma db push` (already done if you ran the app).
4. Open `/admin`, sign in, then go to **Manage Events** to add events.

## Latest from LinkedIn

The homepage section under Recent Updates reads **`data/linkedin-posts.json`** only. Append a post to the `posts` array and deploy; no component change is required. The page shows the **3 newest** posts (`date` descending; the same date keeps earlier array order).

| Field | Required | Notes |
| --- | --- | --- |
| `id` | yes | Stable unique slug, e.g. `2026-11-14-to-our-caregivers` (`YYYY-MM-DD` plus the first words). |
| `date` | yes | ISO date or datetime: `YYYY-MM-DD` or `YYYY-MM-DDTHH:MM:SS`. Approximate dates are fine. |
| `text` | yes | Post copy. Shown clamped to four lines. |
| `url` | no | Link for “Read on LinkedIn”. Omit to use the company page. |
| `image` | no | Site path (`/images/...`) or an `http(s)` image URL. |

“Follow us on LinkedIn”, and any post without `url`, go to `https://www.linkedin.com/company/national-leiomyosarcoma-foundation-nlmsf/`. The same notes are in the file’s `_schema` field.
