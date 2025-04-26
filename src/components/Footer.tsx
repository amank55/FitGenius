import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-background/90 to-cyber-black/80 border-t-4 border-cyan-400 shadow-cyber-glow">
      {/* Neon accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-primary to-cyan-400 blur-sm opacity-80 animate-pulse" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">About FitGenius</h3>
            <p className="text-sm text-muted-foreground mb-6">
              FitGenius is your personal AI-powered fitness assistant that creates customized workout and diet plans tailored to your goals, preferences, and lifestyle.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" target="_blank" className="text-muted-foreground hover:text-cyan-400 transition drop-shadow-cyber-glow">
                <Facebook size={24} className="hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-muted-foreground hover:text-pink-400 transition drop-shadow-cyber-glow">
                <Instagram size={24} className="hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-blue-400 transition drop-shadow-cyber-glow">
                <Twitter size={24} className="hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://youtube.com" target="_blank" className="text-muted-foreground hover:text-red-500 transition drop-shadow-cyber-glow">
                <Youtube size={24} className="hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-cyan-400 transition font-mono">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-sm text-muted-foreground hover:text-cyan-400 transition font-mono">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/plans" className="text-sm text-muted-foreground hover:text-cyan-400 transition font-mono">
                  Fitness Plans
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-cyan-400 transition font-mono">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">Latest from Blog</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/5-tips-for-better-workouts" className="text-sm text-muted-foreground hover:text-cyan-400 transition font-mono">
                  5 Tips for Better Workouts
                </Link>
              </li>
              <li>
                <Link href="/blog/nutrition-basics" className="text-sm text-muted-foreground hover:text-cyan-400 transition font-mono">
                  Nutrition Basics for Beginners
                </Link>
              </li>
              <li>
                <Link href="/blog/recovery-strategies" className="text-sm text-muted-foreground hover:text-cyan-400 transition font-mono">
                  Recovery Strategies for Athletes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-900 mt-12 pt-8 text-center">
          <p className="text-sm text-cyan-400 font-mono tracking-wider">
            © {new Date().getFullYear()} FitGenius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
