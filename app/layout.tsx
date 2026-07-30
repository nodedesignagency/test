import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";

const almarai = Almarai({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-almarai",
});

export const metadata: Metadata = {
  title: "Mahadeva — AI First Agency",
  description:
    "Mahadeva helps ambitious brands turn AI into practical systems that automate work, improve efficiency, and drive measurable growth across teams.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={almarai.variable}>
      <body className="bg-white font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
