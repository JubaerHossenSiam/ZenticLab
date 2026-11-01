import type { Metadata } from "next";
import BusinessDesign from "@/components/designs/BusinessDesign";
export const metadata: Metadata = {
  title: "Business Website Packages",
  description: "Build a professional business website that helps new clients find and trust your business.",
};
export default function Page() {
  return <BusinessDesign />;
}
