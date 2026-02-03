import { ReactNode } from "react";

type InnerPageWithSidebarProps = {
  sidebar: ReactNode;
  children: ReactNode;
};

export default function InnerPageWithSidebar({ sidebar, children }: InnerPageWithSidebarProps) {
  return (
    <div className="max-w-[1200px] mx-auto py-8 px-6 grid grid-cols-1 gap-10 items-start md:grid-cols-[260px_1fr] md:gap-10">
      <aside className="sticky top-8 max-md:static" aria-label="Page navigation">
        {sidebar}
      </aside>
      <div className="min-w-0 [&>:first-child]:mt-0">{children}</div>
    </div>
  );
}
