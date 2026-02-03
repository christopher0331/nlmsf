import type { Metadata } from "next";
import OurBoardClient from "./OurBoardClient";
import "./our-board.css";

export const metadata: Metadata = {
  title: "Our Board | NLMSF",
  description:
    "Meet the National Leiomyosarcoma Foundation board members and their priorities.",
};

export default function OurBoardPage() {
  return <OurBoardClient />;
}
