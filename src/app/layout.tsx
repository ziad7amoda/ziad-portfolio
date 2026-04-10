import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: Replace with your real name, description, and URL
export const metadata: Metadata = {
  title: "Ziad Hamoda — Full Stack Engineer",
  description:
    "Portfolio of Ziad Hamoda — a Full Stack Engineer specializing in React, Node.js, and TypeScript. View my projects and get in touch.",
  keywords: [
    "full stack engineer",
    "react developer",
    "node.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Ziad Hamoda" }],
  openGraph: {
    title: "Ziad Hamoda — Full Stack Engineer",
    description:
      "Portfolio of Ziad Hamoda — a Full Stack Engineer specializing in React, Node.js, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <CustomCursor />
        <ScrollProgress />
        <ThemeSwitcher />
        {children}
      </body>
    </html>
  );
}
