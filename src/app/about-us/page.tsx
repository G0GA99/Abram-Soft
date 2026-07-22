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
        x: (e.clientX - rect.left - rect.width / 2) / 15,
        y: (e.clientY - rect.top - rect.height / 2) / 15,
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
      }}
      className="glass-card p-5 relative overflow-hidden group cursor-pointer border border-[var(--glass-border)] hover:border-[var(--primary)]/30 rounded-3xl"
    >
      {/* Dynamic gradient background trace */}
      <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
      
      {/* Initials badge as a high-fidelity round tech avatar */}
      <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${member.color} p-[1.5px] mb-4 shadow-lg group-hover:scale-105 transition-all duration-300`}>
        <div className="h-full w-full rounded-full bg-black/80 flex items-center justify-center backdrop-blur-md">
          <span className="font-display font-black text-lg text-white tracking-wide">{member.initials}</span>
        </div>
      </div>

      <h3 className="font-display text-base sm:text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
        {member.name}
      </h3>
      <p className="text-[10px] sm:text-xs font-bold text-[var(--primary)] uppercase tracking-wider mb-2">
        {member.role}
      </p>
      <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
        {member.bio}
      </p>

      {/* Social links */}
      <div className="flex items-center gap-2 pt-2 border-t border-white/5 opacity-80 group-hover:opacity-100 transition-opacity">
        <a href="#" className="h-7 w-7 rounded-full glass hover:bg-white/10 flex items-center justify-center transition-colors">
          <Twitter className="h-3 w-3 text-[var(--muted)] hover:text-white" />
        </a>
        <a href="#" className="h-7 w-7 rounded-full glass hover:bg-white/10 flex items-center justify-center transition-colors">
          <Linkedin className="h-3 w-3 text-[var(--muted)] hover:text-white" />
        </a>
        <a href="#" className="h-7 w-7 rounded-full glass hover:bg-white/10 flex items-center justify-center transition-colors">
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
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="h-4 w-4 text-[var(--primary)]" />
              <span className="text-sm text-[var(--muted)]">About Us</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-6">
              A team of <span className="text-gradient">creative thinkers</span>
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              We&apos;re a full-service design agency specializing in branding, web design, 
              and creative strategies that elevate businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={ref} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-card"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-6">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="subheading-luxury text-2xl sm:text-3xl text-[var(--foreground)] mb-4">
                Our Vision
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Driving the Future of Creativity. We envision a world where technology 
                and design seamlessly blend to create meaningful digital experiences 
                that transform businesses and improve lives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="subheading-luxury text-2xl sm:text-3xl text-[var(--foreground)] mb-4">
                Our Mission
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Bringing ideas to life through creativity. We are dedicated to delivering 
                innovative digital solutions that help businesses thrive in the modern 
                marketplace through cutting-edge technology and exceptional design.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card text-center"
              >
                <div className="h-14 w-14 mx-auto rounded-2xl bg-gradient-brand/10 flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-[var(--primary)]" />
                </div>
                <h4 className="font-display text-lg font-semibold text-[var(--foreground)] mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-[var(--muted)]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              The experts behind our innovative digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
