import type { Metadata } from "next";
import EcommerceDesign from "@/components/designs/EcommerceDesign";
export const metadata: Metadata = {
  title: "E-Commerce Website Packages",
  description:
    "Compare online store packages and launch a professional e-commerce website for your business.",
};
export default function Page() {
  return <EcommerceDesign />;
}
