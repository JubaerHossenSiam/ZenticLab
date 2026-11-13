import type { Metadata } from "next";
import ContactDesign from "@/components/designs/ContactDesign";
export const metadata: Metadata = {
  title: { absolute: "Contact Zentic Lab | Book a Free Project Call" },
  description:
    "Tell us about your website project on WhatsApp or by email, or book a free project call. We reply within 24 hours. Based in Mirpur, Dhaka.",
  alternates: { canonical: "https://zenticlab.com/contact" },
};
export default function Page() {
  return <ContactDesign />;
}
