import type { Metadata } from "next";
import ServicesDesign from "@/components/designs/ServicesDesign";
export const metadata: Metadata = {
  title: "Website Services",
  description: "Explore e-commerce and business website services from Zentic Lab in Dhaka, Bangladesh.",
  alternates: { canonical: "https://zenticlab.com/services" },
};
export default function Page() {
  return <ServicesDesign />;
}
