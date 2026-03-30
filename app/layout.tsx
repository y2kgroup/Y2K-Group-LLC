import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Y2K Group LLC | Enterprise IT Solutions & Cloud Services",
  description: "Leading provider of cloud solutions, cybersecurity, and IT consulting services. Transform your business with cutting-edge technology solutions.",
  keywords: "cloud solutions, cybersecurity, IT support, consulting, AWS, Azure, Google Cloud, managed IT services",
  icons: {
    icon: "/favicon.svg",
    apple: "/logo-icon.svg",
  },
  // Vercel deployment
  other: {
    'deployed': '2025-03-30',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
