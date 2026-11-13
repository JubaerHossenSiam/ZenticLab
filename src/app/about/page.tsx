import type { Metadata } from "next";
import AboutDesign from "@/components/designs/AboutDesign";
export const metadata: Metadata = {
  title: { absolute: "About Zentic Lab | Website Team in Dhaka, Bangladesh" },
  description:
    "A small team in Dhaka. You talk directly to the people who build your website. We never sell you more than you need, and put everything in writing.",
  alternates: { canonical: "https://zenticlab.com/about" },
};
export default function Page() {
  return <AboutDesign />;
}
