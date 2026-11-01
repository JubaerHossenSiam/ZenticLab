import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/designs/Footer";
import "./designs.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zentic Lab — Your Partner in Digital Growth",
    template: "%s | Zentic Lab",
  },
  description:
    "Professional e-commerce and business websites, hosting, and website care in Bangladesh.",
  applicationName: "Zentic Lab",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* ColorZilla can inject cz-shortcut-listen before hydration. Tolerate body
          attribute differences while keeping descendant hydration checks active. */}
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="site-shell">
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
