import type { Metadata } from "next";
import ServicesDesign from "@/components/designs/ServicesDesign";
import EcommerceDesign from "@/components/designs/EcommerceDesign";
import BusinessDesign from "@/components/designs/BusinessDesign";
export const metadata: Metadata = {
  title: "Website Services",
  description: "Explore e-commerce and business website services from Zentic Lab in Dhaka, Bangladesh.",
};
export default async function Page({ searchParams }: { searchParams: Promise<{ tab?: string | string[] }> }) {
  const { tab } = await searchParams;
  if (tab === "ecommerce") return <EcommerceDesign />;
  if (tab === "business") return <BusinessDesign />;
  return <ServicesDesign />;
}
