"use client";

import { ZapIcon } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1 bg-primary/10 rounded">
                <ZapIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xl font-bold font-mono">
                Fit<span className="text-primary">Genius</span>.ai
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About FitGenius</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">
              FitGenius is your personal AI-powered fitness assistant that creates customized workout and diet plans tailored to your goals, preferences, and lifestyle.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p className="mb-6">
              At FitGenius, we believe that everyone deserves access to personalized fitness guidance. Our mission is to make professional-level fitness and nutrition planning accessible to everyone, regardless of their experience level or budget.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">How It Works</h2>
            <p className="mb-6">
              FitGenius uses advanced AI technology to analyze your fitness goals, current fitness level, dietary preferences, and lifestyle to create a comprehensive fitness plan that works for you. Our AI considers factors like:
            </p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Your specific fitness goals (weight loss, muscle gain, endurance, etc.)</li>
              <li>Your current fitness level and experience</li>
              <li>Any injuries or physical limitations</li>
              <li>Your dietary preferences and restrictions</li>
              <li>Your available time and equipment</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
            <p className="mb-6">
              FitGenius was created by a team of fitness enthusiasts, nutrition experts, and AI specialists who are passionate about making fitness accessible to everyone. Our team combines decades of experience in fitness, nutrition, and technology to create a platform that delivers real results.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Join the FitGenius Community</h2>
            <p className="mb-6">
              Whether you're just starting your fitness journey or you're looking to take your training to the next level, FitGenius is here to help. Join our community of fitness enthusiasts and start your journey to a healthier, stronger you today.
            </p>
            
            <div className="mt-8">
              <Link 
                href="/" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage; 