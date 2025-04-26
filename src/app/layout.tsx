import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import ConvexClerkProvider from "@/provider/ConvexClerkProvider";
import Footer from "@/components/Footer";
import Link from "next/link";

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
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className + " bg-background min-h-screen"}>
          <ConvexClerkProvider>
            <div className="flex flex-col min-h-screen">
              {/* NAVBAR */}
              <nav className="w-full flex justify-end items-center gap-4 px-8 py-4">
                <SignedOut>
                  <Link href="/sign-in">
                    <button className="rounded-lg border-2 border-primary text-primary font-mono px-6 py-2 shadow-cyber hover:bg-primary/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                      Sign In
                    </button>
                  </Link>
                  <Link href="/sign-up">
                    <button className="rounded-lg border-2 border-cyan-400 text-cyan-700 font-mono px-6 py-2 shadow-cyber hover:bg-cyan-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary">
                      Sign Up
                    </button>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <nav className="flex items-center gap-2 md:gap-4">
                    <Link href="/" className="px-6 py-2 rounded-full border-2 border-primary text-primary font-mono text-sm shadow-cyber hover:bg-primary hover:text-background hover:shadow-cyber-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400">Home</Link>
                    <Link href="/generate-program" className="px-6 py-2 rounded-full border-2 border-primary text-primary font-mono text-sm shadow-cyber hover:bg-primary hover:text-background hover:shadow-cyber-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400">Generate Program</Link>
                    <Link href="/profile" className="px-6 py-2 rounded-full border-2 border-primary text-primary font-mono text-sm shadow-cyber hover:bg-primary hover:text-background hover:shadow-cyber-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400">Profile</Link>
                    <Link href="/plans" className="px-6 py-2 rounded-full border-2 border-primary text-primary font-mono text-sm shadow-cyber hover:bg-primary hover:text-background hover:shadow-cyber-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 hidden md:inline">Plans</Link>
                    <UserButton afterSignOutUrl="/" />
                  </nav>
                </SignedIn>
              </nav>
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
                  </nav>
                </div>
              </header>
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ConvexClerkProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}