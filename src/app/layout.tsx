import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollButton } from "@/components/scroll-button";
import { SmoothScroll } from "@/components/smooth-scroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Use Cormorant Garamond for elegant luxury editorial styling
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-luxury",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AbramSoft - Software Development & IT Solutions Company",
  description: "A full-service digital solutions agency specializing in web development, SEO, social media marketing, and quality assurance to help businesses grow online.",
  keywords: ["web development", "SEO", "digital marketing", "AI/ML", "software development", "IT solutions"],
  authors: [{ name: "AbramSoft" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "AbramSoft - Software Development & IT Solutions Company",
    description: "A full-service digital solutions agency specializing in web development, SEO, and digital marketing.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${cormorantGaramond.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider>
          <SmoothScroll>
            {children}
            <CustomCursor />
            <ScrollButton />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
