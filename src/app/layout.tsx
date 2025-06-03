import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import { Space_Grotesk, Inria_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Available weights
});

const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Available weights
});

export const metadata: Metadata = {
  title: "Structa",
  description: "Created by Third Rock Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inriaSans.variable} antialiased`}
      >
        <div className="overflow-hidden">
          <div className="sticky top-0 z-50 bg-white shadow-md">
            <NavigationBar />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
