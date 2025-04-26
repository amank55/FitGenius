import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "@/provider/ConvexClerkProvider";
import Footer from "@/components/Footer";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

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
    <html lang="en">
      <body className={inter.className}>
        <ConvexClerkProvider>
          <div className="flex flex-col min-h-screen">
            {/* HEADER */}
            <header className="w-full border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
              <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo/Title */}
                <Link href="/" className="flex items-center gap-2 font-mono text-xl font-bold tracking-tight text-primary hover:text-cyan-400 transition">
                  <span className="">FitGenius</span>
                  <span className="text-xs text-muted-foreground font-normal ml-1">.ai</span>
                </Link>
                {/* Navigation */}
                <nav className="flex items-center gap-2 md:gap-4">
                  <Link href="/" className="px-6 py-2 rounded-full border-2 border-primary text-primary font-mono text-sm shadow-cyber hover:bg-primary hover:text-background hover:shadow-cyber-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400">Home</Link>
                  <Link href="/generate-program" className="px-6 py-2 rounded-full border-2 border-primary text-primary font-mono text-sm shadow-cyber hover:bg-primary hover:text-background hover:shadow-cyber-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400">Generate Program</Link>
                  <Link href="/profile" className="px-6 py-2 rounded-full border-2 border-primary text-primary font-mono text-sm shadow-cyber hover:bg-primary hover:text-background hover:shadow-cyber-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400">Profile</Link>
                  <Link href="/plans" className="px-6 py-2 rounded-full border-2 border-primary text-primary font-mono text-sm shadow-cyber hover:bg-primary hover:text-background hover:shadow-cyber-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hidden md:inline">Plans</Link>
                  <UserButton afterSignOutUrl="/" />
                </nav>
              </div>
            </header>
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ConvexClerkProvider>
      </body>
    </html>
  );
}