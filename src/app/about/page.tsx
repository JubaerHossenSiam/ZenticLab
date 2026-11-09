import type { Metadata } from "next";
import AboutDesign from "@/components/designs/AboutDesign";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Zentic Lab team, a small and focused website studio in Dhaka built on quality and honesty.",
  alternates: { canonical: "https://zenticlab.com/about" },
};
export default function Page() {
  return <AboutDesign />;
}
