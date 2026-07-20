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
      <Link href={project.href}>
        <div className="glass-card overflow-hidden">
          {/* Image Container */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-brand/20" />
            <div className="absolute inset-0 flex items-center justify-center text-[var(--muted)]">
              <div className="text-center">
                <div className="h-20 w-20 mx-auto rounded-2xl bg-gradient-brand/10 flex items-center justify-center mb-4">
                  <ExternalLink className="h-8 w-8 text-[var(--primary)]" />
                </div>
                <p className="font-display font-semibold text-lg">{project.title}</p>
              </div>
            </div>
            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent flex flex-col justify-end p-6"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[var(--primary)]/20 text-[var(--primary)] mb-3">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-bold text-[var(--foreground)] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--muted)] mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-[var(--primary)] font-medium text-sm">
                  <span>View Case Study</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </motion.div>
            </motion.div>
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
