import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import AdminTributesClient from "./AdminTributesClient";

export default async function AdminTributesPage() {
  const ok = await isAuthenticated();
  if (!ok) redirect("/admin?next=/admin/tributes");

  return <AdminTributesClient />;
}
