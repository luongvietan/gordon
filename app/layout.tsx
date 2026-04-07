import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter } from "next/font/google";
import "./globals.css";
import { ScrollEffects } from "./_components/ScrollEffects";

const headline = Be_Vietnam_Pro({
  variable: "--font-headline",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Công Ty Kim Và Gordon | Smart Sustainable Poultry Systems",
  description: "Revolutionizing poultry farming with smart, sustainable systems.",
  icons: {
    icon: [{ url: "/brand/favicon.png", type: "image/png" }],
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
      className={`${headline.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}
