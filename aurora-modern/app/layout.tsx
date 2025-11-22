import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Syncopate } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const metadata: Metadata = {
  title: "AURORA | Human-Aware AGI",
  description: "The rise of Human-Aware AGI. Bridging the gap between cold computation and genuine human empathy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${syncopate.variable} ${jetbrainsMono.variable} antialiased bg-void text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
