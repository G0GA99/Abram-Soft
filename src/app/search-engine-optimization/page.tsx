"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Globe, FileCode, Landmark, BarChart3, LineChart, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Global SEO",
    description: "Optimize your website to rank globally and attract international audiences.",
  },
  {
    icon: FileCode,
    title: "On-Page & Technical SEO",
    description: "Perfect your site's structure, meta tags, schema markup, and speed for search engines.",
  },
  {
    icon: Landmark,
    title: "Local SEO",
    description: "Dominate local search results and attract high-intent customers in your area.",
  },
  {
    icon: BarChart3,
    title: "Keyword Research & Strategy",
    description: "In-depth research to target high-value, high-converting search phrases.",
  },
  {
    icon: LineChart,
    title: "SEO Analytics & Reporting",
    description: "Detailed, transparent tracking of rankings, traffic growth, and conversion rates.",
  },
];

export default function SEOPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Search className="h-4 w-4 text-[var(--primary)]" />
              <span className="text-sm text-[var(--muted)]">Search Engine Optimization</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-6">
              SEO <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8">
              Rank higher, drive organic traffic, and grow your brand authority with our 
              industry-leading search engine optimization services.
            </p>
            <Button asChild>
              <Link href="/contact-us">
                Analyze My Website
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-gradient-brand/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-[var(--primary)]" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--muted)]">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card text-center p-12">
            <h2 className="subheading-luxury text-3xl sm:text-4xl text-[var(--foreground)] mb-4">
              Get a Free SEO Audit
            </h2>
            <p className="text-[var(--muted)] mb-8">
              Understand what is holding your website back and discover major opportunities to scale.
            </p>
            <Button asChild size="lg">
              <Link href="/contact-us">
                Claim My Free Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
