import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import MerchStudioClient from "./MerchStudioClient";

export default async function AdminMerchPage() {
  const ok = await isAuthenticated();
  if (!ok) redirect("/admin?next=/admin/merch");
  return <MerchStudioClient />;
}
