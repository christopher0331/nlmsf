# WordPress tribute data import

Use this to copy tribute data from your WordPress MySQL database into the local Next.js app (SQLite) so you have all tributes, donors, and comments locally without needing MySQL.

## 1. Export from SiteGround (WordPress DB)

1. Log in to **SiteGround** → **Site Tools** (or cPanel) → open **phpMyAdmin** (or **MySQL**).
2. Select the database (the one from `wp-config.php`, e.g. `dbf55acvpn54re`).
3. Export the **three tribute tables** (names depend on your table prefix, e.g. `qlr_`):
   - `qlr_nlmsf_tributes`
   - `qlr_nlmsf_tribute_donors`
   - `qlr_nlmsf_tribute_comments`

   **Option A – Export as SQL**
   - Select each table → **Export** → **Format: SQL** → **Go**. Save as e.g. `tributes.sql`, `donors.sql`, `comments.sql`.
   - Then convert to the JSON format below (or use a SQL→JSON tool), or use Option B.

   **Option B – Export as CSV**
   - Select each table → **Export** → **Format: CSV** → **Go**. Save as `tributes.csv`, `donors.csv`, `comments.csv`.
   - Use a CSV-to-JSON converter (or Excel → Save as JSON) so you get one JSON object with `tributes`, `donors`, and `comments` arrays matching the format in `wordpress-tributes-export.json`.

   **Option C – Copy/paste as JSON**
   - In phpMyAdmin, run:
     - `SELECT * FROM qlr_nlmsf_tributes;`
     - `SELECT * FROM qlr_nlmsf_tribute_donors;`
     - `SELECT * FROM qlr_nlmsf_tribute_comments;`
   - Use “Export” with format **JSON** if available, or copy the result rows and build the JSON by hand so it matches the structure in `wordpress-tributes-export.json`.

## 2. Put the data in the repo

- Replace the contents of **`data/wordpress-tributes-export.json`** with your export.
- The file must be valid JSON with this shape (column names match the WordPress tables):

```json
{
  "tributes": [
    {
      "id": 1,
      "name": "Andria Barnes Ruth",
      "slug": "andria-barnes-ruth-tribute-page",
      "biography": "...",
      "image_url": "https://...",
      "display_order": 0,
      "is_published": 1,
      "created_at": "2023-08-01 12:00:00",
      "updated_at": "2023-08-01 12:00:00"
    }
  ],
  "donors": [
    {
      "id": 1,
      "tribute_id": 1,
      "donor_name": "Jane Doe",
      "donation_amount": 50,
      "donation_date": "2023-09-01",
      "is_anonymous": 0,
      "message": "In memory of...",
      "display_order": 0,
      "created_at": "2023-09-01 12:00:00"
    }
  ],
  "comments": [
    {
      "id": 1,
      "tribute_id": 1,
      "commenter_name": "John",
      "commenter_email": "john@example.com",
      "comment_text": "Condolences.",
      "is_approved": 1,
      "created_at": "2023-09-01 12:00:00"
    }
  ]
}
```

- Use your **actual table prefix** (e.g. `qlr_`). The column names in the JSON are without the prefix (e.g. `tribute_id`, not `qlr_tribute_id`).

## 3. Run the import script

From the project root:

```bash
node scripts/import-wordpress-tributes.js
```

This will:

- **Replace** all existing tribute, donor, and comment data in the local SQLite DB with the contents of `data/wordpress-tributes-export.json`.
- Map WordPress numeric `id` and `tribute_id` to the local Prisma IDs so donors and comments stay linked to the right tribute.

After this, the tributes directory and tribute pages will use the copied data from the JSON file (with WordPress DB env vars unset or unreachable, the app uses SQLite).

---

## Community News (Snapshots + News Tracker)

To import Community Snapshot and News Tracker entries from WordPress:

1. In phpMyAdmin, export **`qlr_posts`** as **CSV**.
2. **For correct links (Mailchimp, etc.):** also export **`qlr_postmeta`** as CSV. The plugin stores the real URL in postmeta as `nlmsf_external_url`; without it, the script falls back to WordPress permalinks (e.g. `?nlmsf_snapshot=...`), which don’t open the newsletter.
3. Run the seed script:

   ```bash
   npm run seed:community-news
   # or with paths (postmeta optional but recommended):
   node scripts/seed-community-news-from-wp-csv.js /path/to/qlr_posts.csv /path/to/qlr_postmeta.csv
   ```

4. The script imports only rows where `post_type` is `nlmsf_snapshot` or `nlmsf_news_tracker` and `post_status` is `publish`. It **replaces** all existing community entries in SQLite. If postmeta is provided, it uses `nlmsf_external_url` for the link URL when present.

**Fixing a single link:** In **Admin → Community News**, use **Edit URL** on an entry to change its link (e.g. to the Mailchimp URL) without re-importing.

After this, **/community-snapshot-news** and **/community-news** (redirect) show the snapshot feed and news tracker; the homepage **Recent Updates** and **Admin → Community News** list use this data.
