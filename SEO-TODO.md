# SEO Parity TODO

Source data: `high-risk-seo-issues.txt`, `missing-on-clone.txt`, `seo-parity-details.csv`, `seo-parity-report.json`

Audit totals (788 paths): 115 ok, 532 clone_5xx, 90 missing, 49 redirect mismatch, 2 fetch error.
The 532 `clone_5xx` were caused by the empty Prisma DB (now fixed). After restart most will resolve automatically.

---

## Phase 1: Old WordPress alias redirects (next.config.ts) ✅ DONE
These are old/renamed WordPress slugs that 404 on WP itself but were still crawled, or that WP soft-redirected. All need 301s to the correct current page.

- [ ] `/about` → `/mission`
- [ ] `/about-us` → `/mission`
- [ ] `/advocacy` → `/patient-caregiver-advocacy`
- [ ] `/annual-reports` → `/accountability-reports`
- [ ] `/board-members` → `/our-board`
- [ ] `/buddy-program` → `/leiomyosarcoma-support-group`
- [ ] `/care-planning` → `/survivorship-care-planning-2`
- [ ] `/caregiver-buddy-program` → `/leiomyosarcoma-support-group`
- [ ] `/caregiver-workshops` → `/caregivers-corner`
- [ ] `/caregivers-corner-staged-2` → `/caregivers-corner`
- [ ] `/caregiving-counts` → `/caregiver-traits-2`
- [ ] `/circle-of-hope` → `/donate`
- [ ] `/clinical-trials` → `/clinical-trials-research-information`
- [ ] `/clinical-trials-perspective` → `/clinical-trials-research-information`
- [ ] `/closer-look-at-leiomoysarcoma` → `/closer-look-at-leiomyosarcoma`
- [ ] `/co-survivors-tips` → `/co-survivor-tips`
- [ ] `/community-events` → `/events`
- [ ] `/community-snapshot-news` → `/community-snapshot-news` (exists; verify not 500)
- [ ] `/connect-with-clinician` → `/find-a-sarcoma-specialist`
- [ ] `/contact-us` → `/contact`
- [ ] `/denver-resources` → `/resources`
- [ ] `/denver-support` → `/support`
- [ ] `/donate-leiomyosarcoma-research` → `/donate`
- [ ] `/donate-online` → `/donate`
- [ ] `/donate-staged` → `/donate`
- [ ] `/education-forums` → `/events`
- [ ] `/educational-programs` → `/events`
- [ ] `/event-registration-form` → `/events`
- [ ] `/events-admin` → `/admin/events`
- [ ] `/financial-statements` → `/accountability-reports`
- [ ] `/funded-projects` → `/research-funding-2`
- [ ] `/gift-shop-old` → `/gift-shop`
- [ ] `/history` → `/mission`
- [ ] `/light-a-candle` → `/in-memoriam`
- [ ] `/lms-abcs` → `/abcs-of-new-diagnosis`
- [ ] `/lms-interactive-news-tracker` → `/news-tracker`
- [ ] `/lms-live` → `/events`
- [ ] `/lms-research` → `/research-initiatives`
- [ ] `/lms-roundtable` → `/international-research-roundtable`
- [ ] `/lms-surgical-guide` → `/treatment-options`
- [ ] `/medical-advisors` → `/medical-advisory-board`
- [ ] `/molecular-tumor-testing-staged` → `/molecular-tumor-testing`
- [ ] `/more-testimonials` → `/testimonials`
- [ ] `/navigating-leiomyosarcoma-treatment-after-treatment` → `/after-treatment`
- [ ] `/navigating-support-staged-2` → `/navigating-support`
- [ ] `/new-diagnosis-2-staged` → `/new-diagnosis`
- [ ] `/newly-diagnosed` → `/new-diagnosis`
- [ ] `/newly-diagnosed-and-treatment-staged2` → `/newly-diagnosed-and-treatment`
- [ ] `/newsletter` → `/news-tracker`
- [ ] `/newsletter-archives` → `/news-tracker`
- [ ] `/newsletter-signup` → `/contact`
- [ ] `/pathology-report` → `/pathology-report-accuracy`
- [ ] `/patient-advocacy-peer-group-roundtable` → `/patient-caregiver-advocacy`
- [ ] `/patient-education` → `/events`
- [ ] `/patient-perspectives-staged` → `/patient-perspectives`
- [ ] `/patient-stories` → `/patient-perspectives`
- [ ] `/patients` → `/`
- [ ] `/podcast` → `/sarcoma-sound-bytes`
- [ ] `/podcast-2` → `/sarcoma-sound-bytes`
- [ ] `/podcasts-wellbeing` → `/sarcoma-sound-bytes`
- [ ] `/privacy` → `/privacy-policy`
- [ ] `/research` → `/research-initiatives`
- [ ] `/research-breakthroughs` → `/research-initiatives`
- [ ] `/research-funding` → `/research-funding-2`
- [ ] `/research-initiaves` → `/research-initiatives`
- [ ] `/research-projects` → `/research-funding-2`
- [ ] `/research-recordings` → `/events`
- [ ] `/research-roundtable` → `/international-research-roundtable`
- [ ] `/resources-staged` → `/resources`
- [ ] `/sound-bytes-hub` → `/sarcoma-sound-bytes`
- [ ] `/subscribe` → `/contact`
- [ ] `/support-groups` → `/leiomyosarcoma-support-group`
- [ ] `/survivorship` → `/survivorship-care-planning-2`
- [ ] `/survivorship-2` → `/survivorship-care-planning-2`
- [ ] `/survivorship-care` → `/survivorship-care-planning-2`
- [ ] `/survivorship-resources` → `/survivorship-resources-2`
- [ ] `/symposia` → `/events`
- [ ] `/terms` → `/privacy-policy`
- [ ] `/transparency` → `/accountability-reports`
- [ ] `/tribute-admin` → `/admin/tributes`
- [ ] `/what-is-leiomyosarcoma` → `/what-is-lms`
- [ ] `/what-is-lms-staged` → `/what-is-lms`
- [ ] `/who-we-are` → `/mission`
- [ ] `/workshops` → `/events`
- [ ] `/your-voice-matters` → `/patient-perspectives`
- [ ] `/your-voice-matters-2` → `/patient-perspectives`
- [ ] `/live-the-life-you-deserve` → `/patient-perspectives`
- [ ] `/repurposing` → `/`
- [ ] `/rocky-mountain` → `/`
- [ ] `/sarcoma-coalition` → `/`
- [ ] `/testing-form` → `/`
- [ ] `/LINK_PLACEHOLDER` → `/`

---

## Phase 2: Nested path redirects (missing_on_clone) ✅ DONE
Old WordPress nested URLs that need redirects to their flat equivalents.

- [ ] `/newly-diagnosed/abcs` → `/abcs-of-new-diagnosis`
- [ ] `/newly-diagnosed/care-team` → `/oncology-care-team`
- [ ] `/newly-diagnosed/find-a-specialist` → `/find-a-sarcoma-specialist`
- [ ] `/newly-diagnosed/find-specialist` → `/find-a-sarcoma-specialist`
- [ ] `/newly-diagnosed/managing-lms` → `/what-is-lms`
- [ ] `/newly-diagnosed/patient-perspectives` → `/patient-perspectives`
- [ ] `/newly-diagnosed/treatment-options` → `/treatment-options`
- [ ] `/patient/patient-perspectives` → `/patient-perspectives`
- [ ] `/resources/clinical-trials` → `/clinical-trials-research-information`
- [ ] `/resources/community-support` → `/leiomyosarcoma-support-group`
- [ ] `/resources/events` → `/events`
- [ ] `/resources/patient-resources` → `/resources`
- [ ] `/support/groups` → `/leiomyosarcoma-support-group`
- [ ] `/support/resources` → `/resources`
- [ ] `/contact/newsletter` → `/contact`
- [ ] `/donations/donation-form` → `/donate`
- [ ] `/donations/donations-tribute-funds` → `/tributes-directory`
- [ ] `/events/summit-registration` → `/events`
- [ ] `/get-involved/donate` → `/donate`
- [ ] `/get-involved/fundraise` → `/donate`
- [ ] `/get-involved/volunteer` → `/volunteer`
- [ ] `/what-is-lms/faq` → `/what-is-lms`
- [ ] `/accountability-reports/2023` → `/2023-accountability-report`
- [ ] `/accountability-reports/2024` → `/accountability-reports`

---

## Phase 3: Sound bytes date routes ✅ DONE
14 `/sound-bytes/YYYY-MM-DD` paths. Redirect all to `/sarcoma-sound-bytes`.

- [x] Add wildcard redirect: `/sound-bytes/:date` → `/sarcoma-sound-bytes`

---

## Phase 4: /uncategorized/* blog posts ✅ DONE
WordPress blog posts under `/uncategorized/`. Redirect all to `/patient-perspectives` (closest match for wellness/support content).

- [x] Add wildcard redirect: `/uncategorized/:slug` → `/patient-perspectives`

---

## Phase 5: /wp-content/uploads/* (PDFs, images, docs) ✅ DONE
~22 linked files. Rewrite to `media.nlmsf.org` so existing links to PDFs/images keep working.

- [x] Add rewrite: `/wp-content/uploads/:path*` → `https://media.nlmsf.org/wp-content/uploads/:path*`

---

## Phase 6: WordPress admin/author/category junk ✅ DONE
These have zero SEO value. Redirected to homepage. `/wp-login.php` ignored (not a real route, [slug] catch-all will 404).

- [x] `/author/:slug` → `/`
- [x] `/category/uncategorized` → `/`
- [x] `/category/uncategorized/page/:num` → `/`
- [x] `/page/:num` → `/` (covers `/page/2?form=DONATE` etc.)

---

## Phase 7: Tribute name slugs (verify after Prisma fix)
~35 person-name slugs (e.g. `/anna-marmo`, `/tim-hile`) were 500ing because the Tribute table was empty. Now that `prisma db push` created the tables, these should 404 gracefully via the `[slug]` catch-all instead of 500ing. Once tribute data is imported (CSV or WordPress DB), they'll resolve to actual tribute pages.

- [ ] Restart dev server and verify tribute slugs return 404 (not 500)
- [ ] Import tribute data via `scripts/import-wordpress-tributes-from-csv.js` when CSVs are available
- [ ] Verify tribute person-name slugs then 200 correctly

---

## Phase 8: Malformed/junk URLs (ignore)
These are broken links from the WordPress site itself. No SEO value, no action needed.

- `/-%20http:/randal.sg-host.com/survivors-inspire/%20`
- `/%E2%80%93%20%20http:/randal.sg-host.com/patient-caregiver-advocacy`
- `/leiomyosarcoma.info/mypart-network/%20(opens%20in%20a%20new%20tab)`
- `/nlmsf.org/testimonials`
- `/uncategorized/lms-lifeline-buddy-program/%20%20%20%20`
- `/CRI_Patients-Guide-25.pdf` (root-level PDF, not under /wp-content/)

---

## Summary

| Phase | Items | Type | Effort |
|-------|-------|------|--------|
| 1 | ~90 | 301 redirects in next.config.ts | Medium (bulk add) |
| 2 | ~24 | 301 nested path redirects | Small (same file) |
| 3 | 14 | Wildcard redirect | Tiny (1 rule) |
| 4 | ~15 | Wildcard redirect | Tiny (1 rule) |
| 5 | ~22 | Rewrite to media.nlmsf.org | Small (1 rule) |
| 6 | ~350 | wp-login + author/category junk | Small (few rules) |
| 7 | ~35 | Verify after Prisma fix + data import | Depends on data |
| 8 | ~6 | Ignore | None |
