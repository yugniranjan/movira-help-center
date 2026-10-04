import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://help.movira360.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Movira Help Center", template: "%s | Movira Help Center" },
  description: "Guides, answers, and troubleshooting for the Movira360 park operations platform.",
  applicationName: "Movira Help Center",
  icons: {
    icon: "/movira360-logo.png",
    apple: "/movira360-logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "Movira Help Center",
    title: "Movira Help Center",
    description: "Everything your team needs to operate confidently with Movira360.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
