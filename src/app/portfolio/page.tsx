"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MAQTechs",
    category: "Web Development",
    description: "Corporate MAQTechs website built with a strong focus on performance and usability. A modern technology and digital solutions company website designed to represent innovation, reliability, and technical expertise.",
    image: "/images/portfolio-maqtechs.jpg",
    href: "/portfolio/maqtechs-web-development",
    tags: ["React", "Node.js", "Responsive"],
  },
  {
    title: "PUEHS Portal",
    category: "Web Development",
    description: "Educational portal with modern design and seamless user experience. Designed to streamline administrative processes and enhance communication between students, teachers, and parents.",
    image: "/images/portfolio-puehs.jpg",
    href: "/portfolio/puehs-portal",
    tags: ["Laravel", "MySQL", "UI/UX"],
  },
  {
    title: "QuarterTonez",
    category: "SEO Case Study",
    description: "Complete SEO transformation resulting in 300% organic traffic increase. Implemented comprehensive on-page and off-page SEO strategies for a music education platform.",
    image: "/images/portfolio-quartertonez.jpg",
    href: "/portfolio/quartertonez-seo",
    tags: ["SEO", "Content Strategy", "Analytics"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Explore our latest projects and see how we&apos;ve helped businesses 
              transform their digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={project.href}>
                  <Card className="group h-full overflow-hidden">
                    {/* Image Placeholder */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-20 w-20 rounded-2xl bg-gradient-brand/20 flex items-center justify-center">
                          <ExternalLink className="h-8 w-8 text-[var(--primary)]" />
                        </div>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)]">
                          {project.category}
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-gradient transition-all">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs bg-[var(--glass)] text-[var(--muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-[var(--primary)] font-medium text-sm group-hover:gap-3 transition-all">
                        <span>View Case Study</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
