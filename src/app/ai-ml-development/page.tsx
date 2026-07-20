"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Bot, LineChart, Eye, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Streamline your workflows with intelligent automation solutions.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Make data-driven decisions with advanced predictive models.",
  },
  {
    icon: Bot,
    title: "NLP Chatbots",
    description: "Intelligent conversational AI for customer support and engagement.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image recognition and visual analysis solutions for your business.",
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    description: "Leverage the power of generative AI for content creation and more.",
  },
];

export default function AIMLDevelopmentPage() {
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
              <Brain className="h-4 w-4 text-[var(--primary)]" />
              <span className="text-sm text-[var(--muted)]">AI/ML Development</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-6">
              AI & ML <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8">
              Harness the power of artificial intelligence and machine learning to 
              transform your business operations and drive innovation.
            </p>
            <Button asChild>
              <Link href="/contact-us">
                Explore AI Solutions
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
              Ready to Implement AI?
            </h2>
            <p className="text-[var(--muted)] mb-8">
              Let&apos;s discuss how AI can transform your business operations.
            </p>
            <Button asChild size="lg">
              <Link href="/contact-us">
                Schedule a Consultation
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
