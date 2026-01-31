import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freightcode | Freight Operations Software for Complex Trade Lanes",
  description: "Freightcode helps forwarding teams manage quotes, shipments, documentation, compliance, and route-level risk from a single system.",
  keywords: ["freight software", "freight forwarding system", "logistics software", "freight operations", "supply chain"],
  authors: [{ name: "Freightcode" }],
  openGraph: {
    title: "Freightcode | Freight Operations Software",
    description: "Manage quotes, shipments, documentation, compliance, and route-level risk from a single system.",
    url: "https://freightcode.co.uk",
    siteName: "Freightcode",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freightcode | Freight Operations Software",
    description: "Manage quotes, shipments, documentation, compliance, and route-level risk from a single system.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
