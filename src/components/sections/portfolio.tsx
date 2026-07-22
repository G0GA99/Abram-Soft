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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={project.href} className="block">
        <div className="glass-card overflow-hidden p-5 sm:p-6 transition-all duration-300">
          {/* Image Container */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-5 bg-gradient-brand/10 border border-[var(--glass-border)] flex items-center justify-center group-hover:border-[var(--primary)]/40 transition-colors">
            <div className="text-center p-4">
              <div className="h-14 w-14 sm:h-16 sm:w-16 mx-auto rounded-2xl bg-[var(--primary)]/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <ExternalLink className="h-6 w-6 sm:h-7 sm:w-7 text-[var(--primary)]" />
              </div>
              <span className="font-mono text-xs text-[var(--muted)] tracking-wider uppercase">Case Study</span>
            </div>
          </div>

          {/* Content Details */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--primary)]/15 text-[var(--primary)] mb-3">
              {project.category}
            </span>
            <h3 className="font-display text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--muted)] mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
            <div className="flex items-center gap-1.5 text-[var(--primary)] font-semibold text-sm group-hover:translate-x-1 transition-transform">
              <span>View Case Study</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
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
