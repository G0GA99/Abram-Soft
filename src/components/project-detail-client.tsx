"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Sparkles, ArrowRight } from "lucide-react";

interface ProjectType {
  title: string;
  category: string;
  description: string;
  fullOverview: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  duration: string;
  client: string;
}

export function ProjectDetailClient({ project }: { project: ProjectType }) {
  return (
    <main className="relative overflow-x-hidden min-h-screen bg-[var(--background)]">
      <Navbar />

      {/* Header Back Button */}
      <div className="pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors group cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Title / Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>{project.category}</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] tracking-tight leading-none"
              >
                {project.title} <span className="text-gradient">Case Study</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-[var(--muted)] leading-relaxed"
              >
                {project.fullOverview}
              </motion.p>

              {/* Technologies used */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <h4 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-full text-xs bg-[var(--glass)] border border-[var(--glass-border)] text-[var(--foreground)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Metadata Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 glass-card p-8 space-y-6 border border-[var(--glass-border)]"
            >
              <h3 className="font-display text-xl font-bold text-[var(--foreground)] border-b border-white/5 pb-4">
                Project Information
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-xs text-[var(--muted)]">Client</span>
                  <p className="font-semibold text-[var(--foreground)] mt-1">{project.client}</p>
                </div>
                <div>
                  <span className="text-xs text-[var(--muted)]">Timeline</span>
                  <p className="font-semibold text-[var(--foreground)] mt-1">{project.duration}</p>
                </div>
                <div>
                  <span className="text-xs text-[var(--muted)]">Service</span>
                  <p className="font-semibold text-[var(--foreground)] mt-1">{project.category}</p>
                </div>
                <div>
                  <span className="text-xs text-[var(--muted)]">Status</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Success
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild className="w-full rounded-full bg-gradient-brand">
                  <Link href="/contact-us">
                    Discuss A Similar Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Details breakdown */}
      <section className="py-16 border-t border-white/5 bg-[var(--dark-bg-secondary)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Challenge */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border border-[var(--glass-border)]"
            >
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 text-amber-400">
                ⚠️
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--foreground)] mb-4">
                The Challenge
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 border border-[var(--glass-border)]"
            >
              <div className="h-10 w-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-6 text-[var(--primary)]">
                💡
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--foreground)] mb-4">
                The Solution
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                {project.solution}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-brand/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
              The <span className="text-gradient">Impact</span> & Results
            </h2>
            <p className="text-sm text-[var(--muted)] mt-2">
              Measurable improvement indicators achieved post-deployment
            </p>
          </div>

          <div className="space-y-6">
            {project.results.map((result, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-5 glass rounded-2xl border border-[var(--glass-border)] hover:border-[var(--primary)]/20 transition-all"
              >
                <div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="h-4.5 w-4.5 text-emerald-400" />
                </div>
                <p className="text-[var(--foreground)] font-medium leading-relaxed pt-0.5">
                  {result}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="glass-card p-8 inline-block max-w-lg">
              <h4 className="font-display font-bold text-lg text-[var(--foreground)] mb-2">
                Ready to transform your business?
              </h4>
              <p className="text-sm text-[var(--muted)] mb-6">
                Let AbramSoft design, build, and optimize your digital presence for maximum performance and growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="default" className="rounded-full bg-gradient-brand">
                  <Link href="/contact-us">
                    Start Your Project
                  </Link>
                </Button>
                <Button asChild variant="outline" size="default" className="rounded-full">
                  <Link href="/portfolio">
                    Explore Other Projects
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
