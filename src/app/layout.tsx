import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import NavBar from "@/components/specific/NavBar/NavBar";
import Footer from "@/components/specific/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 400 500 900",
});

export const metadata: Metadata = {
  title:
    "AI Prompt Wizard: Generate High-Quality Prompts for ChatGPT, DALL·E, MidJourney & More",
  description:
    "AI Prompt Wizard is your go-to tool for generating precise and creative prompts across multiple AI models, including ChatGPT, DALL·E, and MidJourney. Leverage this generator to create optimized prompts that enhance natural language understanding, produce stunning visuals, and boost business, art, and content creation productivity. Whether you're a novice or a seasoned AI user, AI Prompt Wizard helps you master prompt generation with ease.",
  keywords: [
    "AI prompt generator",
    "AI Prompt Wizard",
    "ChatGPT prompt generation",
    "DALL·E prompts",
    "MidJourney AI",
    "AI visual generation",
    "creative AI prompts",
    "AI prompt optimization",
    "AI prompt techniques",
    "generative AI tools",
    "prompt engineering",
    "AI content generation",
    "best AI prompts",
    "AI for business",
    "AI for art",
    "how to generate AI prompts",
    "advanced AI prompt creation",
    "AI-powered applications",
  ],
  openGraph: {
    title:
      "AI Prompt Wizard: Generate High-Quality Prompts for ChatGPT, DALL·E, MidJourney & More",
    description:
      "Use AI Prompt Wizard to generate optimized, creative, and precise prompts for AI models like ChatGPT, DALL·E, and MidJourney. Empower your projects with cutting-edge prompt generation for business, art, and content creation.",
    url: "https://www.example.com/ai-prompt-wizard",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="bg-backgroundalt antialiased">
        <NavBar />
        <main className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
