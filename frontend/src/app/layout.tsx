import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { default: "Pro Legal | Your ambition. Our legal expertise.", template: "%s | Pro Legal" },
  description: "Explore expert-assisted business registration, tax and compliance, trademark protection, documentation and legal services with Pro Legal.",
  robots: { index: false, follow: false }, // Demo project: enable indexing after verified launch content and legal review
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>;
}
