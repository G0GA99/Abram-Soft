"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { Testimonials } from "@/components/sections/testimonials";
import { Sparkles, Target, Lightbulb, Users, Award, Rocket, Github, Linkedin, Twitter } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We pay attention to every detail, ensuring pixel-perfect execution in everything we deliver.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, treating their success as our own.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We set high standards and consistently exceed expectations in every project.",
  },
];

const teamMembers = [
  {
    name: "Muhammad Abrar",
    role: "CEO & Founder",
    bio: "Pioneering highly scalable enterprise cloud architectures, premium design systems, and resilient engineering pipelines.",
    color: "from-[#84da25] to-[#00ffdd]",
    initials: "MA",
  },
  {
    name: "Sara Alvi",
    role: "Head of AI Engineering",
    bio: "Spearheading neural networks, deep learning pipelines, generative models, and robust intelligent automation solutions.",
    color: "from-[#00ffdd] to-[#25a5da]",
    initials: "SA",
  },
  {
    name: "Zayn Farooq",
    role: "Lead Full-Stack Developer",
    bio: "Crafting real-time transactional web systems, custom performance-tuned engines, and modular server APIs.",
    color: "from-[#25a5da] to-[#84da25]",
    initials: "ZF",
  },
  {
    name: "Elena Rostova",
    role: "Creative Director & UX Lead",
    bio: "Designing immersive customer-centric visual products, intuitive layouts, and refined micro-interaction experiences.",
    color: "from-[#84da25] to-[#da8425]",
    initials: "ER",
  },
];

function TeamMemberCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
      }}
      className="glass-card p-5 sm:p-6 relative overflow-hidden group cursor-pointer border border-[var(--glass-border)] hover:border-[var(--primary)]/30 rounded-2xl transition-all duration-300"
    >
      {/* Subtle glow on hover */}
      <div className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500`} />
      
      {/* Initials badge as a clean tech avatar */}
      <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${member.color} p-[1.5px] mb-3.5 shadow-md group-hover:scale-105 transition-all duration-300`}>
        <div className="h-full w-full rounded-full bg-black/85 flex items-center justify-center backdrop-blur-md">
          <span className="font-display font-bold text-sm text-white tracking-wide">{member.initials}</span>
        </div>
      </div>

      <h3 className="font-display text-base font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
        {member.name}
      </h3>
      <p className="text-[11px] font-semibold text-[var(--primary)] uppercase tracking-wider mb-2">
        {member.role}
      </p>
      <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
        {member.bio}
      </p>

      {/* Social links */}
      <div className="flex items-center gap-2 pt-3 border-t border-white/5 opacity-80 group-hover:opacity-100 transition-opacity">
        <a href="#" className="h-6 w-6 rounded-md glass hover:bg-white/10 flex items-center justify-center transition-colors">
          <Twitter className="h-3 w-3 text-[var(--muted)] hover:text-white" />
        </a>
        <a href="#" className="h-6 w-6 rounded-md glass hover:bg-white/10 flex items-center justify-center transition-colors">
          <Linkedin className="h-3 w-3 text-[var(--muted)] hover:text-white" />
        </a>
        <a href="#" className="h-6 w-6 rounded-md glass hover:bg-white/10 flex items-center justify-center transition-colors">
          <Github className="h-3 w-3 text-[var(--muted)] hover:text-white" />
        </a>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="relative overflow-x-hidden">
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
              <span className="text-xs text-[var(--muted)] font-medium">About AbramSoft</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4 tracking-tight">
              A team of <span className="text-gradient">creative thinkers</span>
            </h1>
            <p 
              style={{ fontFamily: 'var(--font-luxury), "Cormorant Garamond", Georgia, serif', fontStyle: 'italic' }} 
              className="text-[19px] leading-relaxed font-normal text-[var(--muted)] max-w-[587px] w-full mx-auto"
            >
              We are a digital solutions studio crafting modern software, web experiences, 
              and strategic engineering solutions for growing enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={ref} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--primary)]/30 transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center mb-5 text-[var(--primary)]">
                <Rocket className="h-5 w-5" />
              </div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--foreground)] mb-3">
                Our Vision
              </h2>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                Driving the future of digital craftsmanship. We envision a world where technology 
                and minimalist design seamlessly converge to create high-impact, meaningful software 
                experiences that scale effortlessly.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--primary)]/30 transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center mb-5 text-[var(--primary)]">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--foreground)] mb-3">
                Our Mission
              </h2>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                Transforming ambitious ideas into reliable digital products. We are committed to delivering 
                cutting-edge web systems, intelligent automation, and refined design architectures that help businesses thrive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-2">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--muted)] max-w-lg mx-auto">
              The foundational principles guiding every architecture and pixel we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card p-5 sm:p-6 rounded-2xl border border-[var(--glass-border)] hover:border-[var(--primary)]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-9 w-9 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center mb-4 text-[var(--primary)]">
                  <value.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-display text-base font-bold text-[var(--foreground)] mb-1.5">
                  {value.title}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-2">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--muted)] max-w-lg mx-auto">
              The engineers and designers behind our software products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </main>
  );
}

