import type { Metadata } from "next";
import HomeDesign from "@/components/designs/HomeDesign";
export const metadata: Metadata = {
  title: { absolute: "E-Commerce & Business Websites in Bangladesh | Zentic Lab" },
  description:
    "No online shop or website yet? We build fast, secure websites that help businesses in Bangladesh sell more. Clear plan and price in writing.",
  alternates: { canonical: "https://zenticlab.com/" },
};
export default function Page() {
  return <HomeDesign />;
}
