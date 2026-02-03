# Conversion Game Plan: HTML/CSS/JS → React/Next.js/Tailwind

## Reminder: What We're Doing

You paste **HTML, CSS, and JS** from an existing site. We convert it to **React/Next.js with Tailwind** with:

- **URL parity** — Same paths (e.g. `/`, `/about`, `/contact`).
- **Content parity** — Same text, links, images, and structure; no added or removed content.

No new features, no redesign — just a faithful port.

---

## Step-by-Step Process

### 1. You Provide the Source

- Paste or share:
  - HTML (full page or fragments per URL).
  - CSS (linked file, `<style>`, or inline).
  - Any JS (inline scripts or separate files).
- Note the **URLs** for each page (e.g. `/`, `/about`, `/blog/hello-world`).

### 2. Route Mapping

- List every URL that must exist.
- Map each to the App Router:
  - `/` → `app/page.tsx`
  - `/about` → `app/about/page.tsx`
  - `/blog/[slug]` → `app/blog/[slug]/page.tsx` (if dynamic).
- Decide shared layout (e.g. header/footer in `app/layout.tsx`).

### 3. Structure & Layout

- Identify repeated chunks (header, nav, footer, sidebars).
- Put them in:
  - `app/layout.tsx` (root layout), or
  - Nested `app/.../layout.tsx` where structure differs.
- One `page.tsx` per URL; page content only in the page.

### 4. HTML → JSX

- Fix syntax: `class` → `className`, `for` → `htmlFor`, self-closing tags (`<img>`, `<input>`, `<br>`).
- Keep semantic structure (headings, nav, main, footer, lists).
- Keep accessibility (alt text, labels, ARIA where it existed).

### 5. CSS → Tailwind

- Replace CSS with Tailwind utility classes on elements.
- Use Tailwind for layout (flex, grid), spacing, typography, colors, borders.
- Add a tiny amount of custom CSS only when necessary (e.g. keyframe animations, third-party overrides); prefer `@apply` or a single global CSS file.

### 6. JS → React

- Inline event handlers → `onClick`, `onChange`, etc. on React components.
- DOM manipulation → `useState` / `useEffect` or event-driven state.
- Use `'use client'` only on components that need interactivity; keep pages server components when possible.

### 7. Verify

- Check every URL works and matches the original.
- Spot-check content (copy, links, images).
- Confirm interactive bits (dropdowns, toggles, forms) behave the same.

---

## Quick Reference

| Original       | In this project        |
|----------------|------------------------|
| HTML file      | `app/.../page.tsx`     |
| CSS file       | Tailwind + minimal CSS |
| Inline JS      | React state + handlers |
| Multiple pages | One route per URL      |
| Shared header/footer | `app/layout.tsx` or nested layout |

---

## When You Paste Next

1. Say which URL(s) the paste is for.
2. Paste HTML (and CSS/JS if separate).
3. We’ll create or update the right `app/...` route and keep URL + content parity.
