"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { Services } from "@/components/sections/services";
import { Sparkles } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="h-4 w-4 text-[var(--primary)]" />
              <span className="text-sm text-[var(--muted)]">Our Expertise</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-6">
              What We <span className="text-gradient">Deliver</span>
            </h1>
            <p 
              style={{ fontFamily: 'var(--font-luxury), "Cormorant Garamond", Georgia, serif', fontStyle: 'italic' }} 
              className="text-[27px] leading-relaxed font-normal text-[var(--muted)] max-w-2xl mx-auto"
            >
              Comprehensive full-scale design, development, and growth solutions 
              custom-crafted to take your brand from concept to global leader.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List Section */}
      <Services />

      <Footer />
    </main>
  );
}
