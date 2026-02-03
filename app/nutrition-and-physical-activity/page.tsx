import type { Metadata } from "next";
import NutritionAndPhysicalActivityClient from "./NutritionAndPhysicalActivityClient";
import "./nutrition-and-physical-activity.css";

export const metadata: Metadata = {
  title: "Nutrition & Physical Activity | NLMSF",
  description:
    "Guidance on nutrition and physical activity to support treatment, recovery, and survivorship.",
};

export default function NutritionAndPhysicalActivityPage() {
  return <NutritionAndPhysicalActivityClient />;
}
