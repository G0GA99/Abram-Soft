"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { ArrowUpRight, ExternalLink, Sparkles, FolderKanban } from "lucide-react";

const projects = [
  {
    title: "MAQTechs",
    category: "Web Development",
    description: "Corporate MAQTechs website built with a strong focus on high performance, accessibility, and modern technical architecture.",
    image: "/images/portfolio-maqtechs.jpg",
    href: "/portfolio/maqtechs-web-development",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "PUEHS Portal",
    category: "Web Development",
    description: "Educational portal featuring a streamlined dashboard experience for seamless student and administrator workflows.",
    image: "/images/portfolio-puehs.jpg",
    href: "/portfolio/puehs-portal",
    tags: ["Laravel", "MySQL", "UI/UX Design"],
  },
  {
    title: "QuarterTonez",
    category: "SEO & Growth",
    description: "Strategic SEO architecture and content engineering resulting in a 300% organic growth boost for a music platform.",
    image: "/images/portfolio-quartertonez.jpg",
    href: "/portfolio/quartertonez-seo",
    tags: ["SEO Strategy", "Analytics", "Performance"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="relative overflow-x-hidden min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass mb-5 border border-white/10">
              <Sparkles className="h-3.5 w-3.5 text-[var(--primary)]" />
              <span className="text-xs text-[var(--muted)] font-medium">Selected Works</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4 tracking-tight">
              Featured <span className="text-gradient">Portfolio</span>
            </h1>
            <p 
              style={{ fontFamily: 'var(--font-luxury), "Cormorant Garamond", Georgia, serif', fontStyle: 'italic' }} 
              className="text-[19px] leading-relaxed font-normal text-[var(--muted)] max-w-[587px] w-full mx-auto"
            >
              Explore our software engineering, web portals, and growth case studies crafted with digital precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link href={project.href} className="block h-full group">
                  <div className="glass-card p-5 sm:p-6 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--primary)]/30 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      {/* Visual Header / Thumbnail Box */}
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-[var(--primary)]/10 via-black/40 to-black/60 border border-white/10 flex items-center justify-center group-hover:border-[var(--primary)]/40 transition-all duration-300">
                        <div className="h-11 w-11 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--primary)]/50 transition-all duration-300">
                          <FolderKanban className="h-5 w-5 text-[var(--primary)]" />
                        </div>
                        <div className="absolute top-3 right-3 h-7 w-7 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="h-3.5 w-3.5 text-white" />
                        </div>
                      </div>

                      {/* Category Badge */}
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] mb-3">
                        {project.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-display text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300 mb-2">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-[var(--muted)] leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-white/5 border border-white/10 text-[var(--muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Link */}
                      <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] group-hover:translate-x-1 transition-all duration-300">
                        <span>View Case Study</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
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

