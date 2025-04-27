import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import ConvexClerkProvider from "@/provider/ConvexClerkProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FitGenius - AI-Powered Fitness Assistant",
  description: "Your personal AI-powered fitness assistant that creates customized workout and diet plans tailored to your goals, preferences, and lifestyle.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <body className="antialiased">
          <Navbar />

          {/* GRID BACKGROUND */}
          <div className="fixed inset-0 -z-1">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background"></div>
            <div className="absolute inset-0 bg-[linear-gradient(var(--cyber-grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--cyber-grid-color)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          </div>

          <main className="pt-24 flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}