"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "MAQTechs",
    category: "Web Development",
    description: "Corporate MAQTechs website built with a strong focus on performance and usability.",
    image: "/images/portfolio-maqtechs.jpg",
    href: "/portfolio/maqtechs-web-development",
  },
  {
    title: "PUEHS Portal",
    category: "Web Development",
    description: "Educational portal with modern design and seamless user experience.",
    image: "/images/portfolio-puehs.jpg",
    href: "/portfolio/puehs-portal",
  },
  {
    title: "QuarterTonez",
    category: "SEO Case Study",
    description: "Complete SEO transformation resulting in 300% organic traffic increase.",
    image: "/images/portfolio-quartertonez.jpg",
    href: "/portfolio/quartertonez-seo",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative h-full"
    >
      <Link href={project.href} className="block h-full">
        <div className="glass-card p-5 sm:p-6 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--primary)]/30 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
          <div>
            {/* Visual Header / Thumbnail Box */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-[var(--primary)]/10 via-black/40 to-black/60 border border-white/10 flex items-center justify-center group-hover:border-[var(--primary)]/40 transition-all duration-300">
              <div className="h-11 w-11 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--primary)]/50 transition-all duration-300">
                <ExternalLink className="h-5 w-5 text-[var(--primary)]" />
              </div>
              <div className="absolute top-3 right-3 h-7 w-7 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="h-3.5 w-3.5 text-white" />
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

          {/* Action Link */}
          <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] group-hover:translate-x-1 transition-all duration-300">
            <span>View Case Study</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" ref={ref} className="py-24">
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
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="subheading-luxury text-4xl sm:text-5xl md:text-6xl text-[var(--foreground)]"
            >
              Our design <span className="text-gradient">masterpieces</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-0"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
