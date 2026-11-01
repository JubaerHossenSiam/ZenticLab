import type { Metadata } from "next";
import ContentUpdateDesign from "@/components/designs/ContentUpdateDesign";
export const metadata: Metadata = {
  title: "Content Update Plans",
  description: "Get expert help updating website text, images, products, and content.",
};
export default function Page() {
  return <ContentUpdateDesign />;
}
