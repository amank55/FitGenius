"use client";

import { ZapIcon, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Better Workouts",
    excerpt: "Learn how to maximize your workout efficiency with these simple tips that can help you achieve better results in less time.",
    author: "Sarah Johnson",
    date: "May 15, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Workout Tips",
  },
  {
    id: 2,
    title: "Nutrition Basics for Beginners",
    excerpt: "Understanding the fundamentals of nutrition is key to achieving your fitness goals. This guide covers everything you need to know to get started.",
    author: "Michael Chen",
    date: "May 10, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Nutrition",
  },
  {
    id: 3,
    title: "Recovery Strategies for Athletes",
    excerpt: "Proper recovery is just as important as training. Discover effective strategies to help your body recover faster and perform better.",
    author: "David Rodriguez",
    date: "May 5, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Recovery",
  },
  {
    id: 4,
    title: "How to Stay Motivated on Your Fitness Journey",
    excerpt: "Maintaining motivation can be challenging. Learn practical strategies to stay committed to your fitness goals even when the going gets tough.",
    author: "Emily Parker",
    date: "April 28, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Motivation",
  },
  {
    id: 5,
    title: "The Science of Muscle Growth",
    excerpt: "Understanding the science behind muscle growth can help you optimize your training. This article breaks down the key principles.",
    author: "James Wilson",
    date: "April 20, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Strength Training",
  },
  {
    id: 6,
    title: "Mindful Eating: A Guide to Better Nutrition",
    excerpt: "Mindful eating can transform your relationship with food. Learn how to practice mindful eating and improve your overall health.",
    author: "Lisa Thompson",
    date: "April 15, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Nutrition",
  },
];

const BlogPage = () => {
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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">FitGenius Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-background/50 border border-border rounded-lg overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage; 