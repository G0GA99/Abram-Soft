"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  {
    title: "The Future of AI in Web Development: Trends to Watch",
    excerpt: "Explore how artificial intelligence is revolutionizing the way we build and design websites.",
    category: "AI & Technology",
    date: "Jan 15, 2025",
    href: "/blog/ai-web-development-trends",
  },
  {
    title: "SEO Strategies That Actually Work in 2025",
    excerpt: "Discover the proven techniques that will boost your website's visibility and organic traffic.",
    category: "SEO",
    date: "Jan 10, 2025",
    href: "/blog/seo-strategies-2025",
  },
  {
    title: "Building Scalable E-commerce Solutions",
    excerpt: "Learn the best practices for creating e-commerce platforms that grow with your business.",
    category: "Web Development",
    date: "Jan 5, 2025",
    href: "/blog/scalable-ecommerce",
  },
];

function BlogCard({ post, index }: { post: typeof posts[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={post.href}>
        <Card className="group h-full overflow-hidden">
          {/* Image Placeholder */}
          <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-brand/20 flex items-center justify-center">
                <Tag className="h-8 w-8 text-[var(--primary)]" />
              </div>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <CardHeader className="pb-2">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)]">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                <Calendar className="h-3 w-3" />
                {post.date}
              </span>
            </div>
            <CardTitle className="group-hover:text-gradient transition-all duration-300 line-clamp-2">
              {post.title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-[var(--muted)] text-sm line-clamp-2 mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-2 text-[var(--primary)] font-medium text-sm group-hover:gap-3 transition-all">
              <span>Read More</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm font-bold text-[var(--primary)] uppercase tracking-wider mb-4"
            >
              Blog
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="subheading-luxury text-4xl sm:text-5xl md:text-6xl text-[var(--foreground)]"
            >
              Latest insights & <span className="text-gradient">inspiration</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-0"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline"
            >
              View All Posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
