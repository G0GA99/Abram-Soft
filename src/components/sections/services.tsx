"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Brain, Search, Megaphone, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites, WordPress, Shopify & e-commerce solutions built for performance and scalability.",
    href: "/web-development",
    color: "from-[var(--primary)] to-[var(--secondary)]",
  },
  {
    icon: Brain,
    title: "AI/ML Development",
    description: "AI automation, NLP chatbots, computer vision & generative AI solutions for modern businesses.",
    href: "/ai-ml-development",
    color: "from-[var(--primary)] to-[var(--secondary)]",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "On-page, off-page, technical & local SEO strategies to boost your online visibility.",
    href: "/search-engine-optimization",
    color: "from-[var(--primary)] to-[var(--secondary)]",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Social media, email, content marketing & PPC advertising to grow your brand presence.",
    href: "/digital-marketing-services",
    color: "from-[var(--primary)] to-[var(--secondary)]",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left - rect.width / 2) / 20,
        y: (e.clientY - rect.top - rect.height / 2) / 20,
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
      }}
    >
      <Link href={service.href}>
        <Card className="group h-full relative overflow-hidden">
          {/* Gradient background on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
          
          <CardHeader>
            <div className="flex items-start justify-between mb-4">
              <div className="h-14 w-14 rounded-2xl bg-gradient-brand/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-7 w-7 text-[var(--primary)]" />
              </div>
              <motion.div
                className="h-10 w-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              >
                <ArrowUpRight className="h-5 w-5 text-[var(--primary)]" />
              </motion.div>
            </div>
            <CardTitle className="group-hover:text-gradient transition-all duration-300">
              {service.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              {service.description}
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold text-[var(--primary)] uppercase tracking-wider mb-4"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="subheading-luxury text-4xl sm:text-5xl md:text-6xl text-[var(--foreground)] mb-4"
          >
            Our innovative <span className="text-gradient">services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--muted)] max-w-2xl mx-auto"
          >
            We specialize in delivering innovative and impactful solutions that elevate brands and drive results.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
