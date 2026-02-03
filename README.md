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
