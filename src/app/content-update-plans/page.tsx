import type { Metadata } from "next";
import ContentUpdateDesign from "@/components/designs/ContentUpdateDesign";
export const metadata: Metadata = {
  title: { absolute: "Website Content Update Plans in Bangladesh | Zentic Lab" },
  description:
    "Need to change text, photos or products on your website? Our developers make updates within 24 hours. Choose 2 or 4 hours of help per month.",
  alternates: { canonical: "https://zenticlab.com/content-update-plans" },
};
export default function Page() {
  return <ContentUpdateDesign />;
}
