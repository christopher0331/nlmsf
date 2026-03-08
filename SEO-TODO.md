# SEO Parity TODO

Source data: `high-risk-seo-issues.txt`, `missing-on-clone.txt`, `seo-parity-details.csv`, `seo-parity-report.json`

**Latest audit (788 paths):** 175 ok, 376 missing_on_clone, 233 redirected_path_change, 2 clone_noindex, 2 clone_fetch_error.

---

## Phase 1: Old WordPress alias redirects (next.config.ts) — DONE

All 90+ old/renamed WordPress slugs have 301 redirects in `next.config.ts`.

---

## Phase 2: Nested path redirects — DONE

24 nested WordPress URLs redirected to their flat equivalents.

---

## Phase 3: Sound bytes date routes — DONE

Wildcard: `/sound-bytes/:date` → `/sarcoma-sound-bytes`

---

## Phase 4: /uncategorized/* blog posts — DONE

Wildcard: `/uncategorized/:slug` → `/patient-perspectives`

---

## Phase 5: /wp-content/uploads/* rewrite — DONE

Rewrite: `/wp-content/uploads/:path*` → `https://media.nlmsf.org/wp-content/uploads/:path*`

---

## Phase 6: WordPress admin/author/category junk — DONE

- `/author/:slug` → `/`
- `/category/uncategorized` → `/`
- `/category/uncategorized/page/:num` → `/`
- `/page/:num` → `/`

---

## Phase 7: wp-login.php (middleware) — DONE

349 `/wp-login.php` URLs (with various `?redirect_to=` params) now return `410 Gone` via Next.js middleware. No SEO value — these are WordPress admin login URLs.

---

## Phase 8: Remaining missing page redirects — DONE

Added redirects for specific tribute names and edge-case pages:
- `/anna-marmo-memorial-fund` → `/anna-marmo-tribute-page`
- `/cynthia-diane-katafiasz` → `/tributes-directory`
- `/herbert-lee-perry-jr` → `/herbert-lee-perry-tribute-page`
- `/irene-abrahamian-2` → `/irene-abrahamian-tribute-page`
- `/julie-neuhaus-tribute-page-3` → `/julie-neuhaus-tribute-page`
- `/june-25th-sound-byte` → `/sarcoma-sound-bytes`
- `/june-9th-sound-byte` → `/sarcoma-sound-bytes`
- `/laura-ann-trimble` → `/laura-anne-trimble-tribute-page`
- `/michele-k-winslow` → `/michele-winslow-tribute-page`
- `/norma-jarrett` → `/norma-jarret-tribute-page`
- `/penne-m-morris` → `/pennee-m-morris-tribute-page`
- `/first-last-tribute-page` → `/tributes-directory`
- `/chris-hancock-tribute-page` → `/tributes-directory`
- `/author/admin/page/2` → `/`

---

## Phase 9: PDF redirects (middleware) — DONE

- `/CRI_Patients-Guide-25.pdf` → external PDF on media.nlmsf.org
- `/accountability-reports/*/summary.pdf` → `/accountability-reports/`

---

## Phase 10: Fix redirect loop — DONE

Deleted `app/denise-f-montano-tribute-page/page.tsx` which redirected to `/denise-f-montano-tribute-fund`, creating an infinite loop with the `/:slug-tribute-fund` → `/:slug-tribute-page` config redirect. The `[slug]` catch-all now handles it.

---

## Phase 11: Tribute name slugs (pending — needs data import)

~35 person-name tribute slugs (e.g. `/anna-marmo`, `/tim-hile`) will 404 until tribute data is imported into the Prisma DB. The `[slug]` catch-all route properly looks up tributes and returns 404 when data is missing.

- [ ] Import tribute data via `scripts/import-wordpress-tributes-from-csv.js` when CSVs are available
- [ ] Verify tribute person-name slugs then 200 correctly

---

## Phase 12: Intentional — no action needed

### `clone_noindex` (2 items)
- `/events-admin` → redirects to `/admin/events` (admin page — noindex is correct)
- `/tribute-admin` → redirects to `/admin/tributes` (admin page — noindex is correct)

### `redirected_path_change` (233 items)
These are all our intentional 301 redirects working correctly. The audit flags them because the path changed, which is expected.

### Malformed/junk URLs
These are broken links from the WordPress site itself — garbled URLs with encoding issues. No SEO value.
- `/-%20http:/randal.sg-host.com/survivors-inspire/%20`
- `/%E2%80%93%20%20http:/randal.sg-host.com/patient-caregiver-advocacy`
- `/leiomyosarcoma.info/mypart-network/%20(opens%20in%20a%20new%20tab)`
- `/nlmsf.org/testimonials`
- `/uncategorized/lms-lifeline-buddy-program/%20%20%20%20`

---

## Summary

| Phase | Items | Status |
|-------|-------|--------|
| 1 — WordPress alias redirects | ~90 | DONE |
| 2 — Nested path redirects | ~24 | DONE |
| 3 — Sound bytes wildcard | 14 | DONE |
| 4 — /uncategorized/* wildcard | ~15 | DONE |
| 5 — /wp-content/uploads/* rewrite | ~22 | DONE |
| 6 — Author/category junk | ~10 | DONE |
| 7 — wp-login.php (410 Gone) | ~349 | DONE |
| 8 — Remaining missing redirects | ~14 | DONE |
| 9 — PDF redirects | 3 | DONE |
| 10 — Redirect loop fix | 1 | DONE |
| 11 — Tribute data import | ~35 | PENDING (needs CSVs) |
| 12 — Intentional / ignore | ~240 | No action needed |
