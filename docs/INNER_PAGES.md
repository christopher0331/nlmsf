# Inner Pages: URL & Menu Rules

## Page structure

Inner pages use:

1. **Hero section** – `InnerPageHero` (title, optional subtitle)
2. **Sidebar section** – passed to `InnerPageWithSidebar` (nav links, related content)
3. **Content section** – main body passed as `children` to `InnerPageWithSidebar`

## URL rules

- **Use the exact URL you are given.** Create the route so the path matches exactly (e.g. `/our-board` → `app/our-board/page.tsx`, `/get-involved/donate` → `app/get-involved/donate/page.tsx`). This preserves URL structure and avoids SEO impact.

## Menu rules

- **Check the Header** (`components/Header.tsx`) to see if the URL is already in the site menu.
- **If the URL is in the menu** – create the page only. Do not add it to the menu (it’s already linked).
- **If the URL is not in the menu** – create the page only. Do **not** add it to the menu. The page stays as an orphan (reachable by direct URL only).

## Example

- You’re asked to build `/our-board`.  
  → Create `app/our-board/page.tsx` with hero + sidebar + content.  
  → `/our-board` is already in the Header under About → Our Board, so do not add any new menu link.

- You’re asked to build `/some-orphan-page`.  
  → Create `app/some-orphan-page/page.tsx`.  
  → That path is not in the Header, so leave the menu unchanged (orphan page).
