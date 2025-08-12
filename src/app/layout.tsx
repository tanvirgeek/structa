import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Inria_Sans } from "next/font/google";
import PageLoader from "@/components/PageLoader";
import RouteChangeLoader from "@/components/RouteChangeLoader";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Structa",
  description: "Created by Third Rock Technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inriaSans.variable} antialiased relative`}
      >
        <RouteChangeLoader />
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
