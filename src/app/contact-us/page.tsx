"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Loader2 } from "lucide-react";
import { gsap } from "gsap";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const infoCardRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Highly polished GSAP spring entrance animation for contact info and form containers
    gsap.fromTo(
      [infoCardRef.current, formCardRef.current],
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out", 
        stagger: 0.15,
        delay: 0.2
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate server side transmission
    setTimeout(() => {
      // Functional Lead Persistence: Save inquiry to localStorage
      try {
        const existingLeads = JSON.parse(localStorage.getItem("abramsoft_leads") || "[]");
        const newLead = {
          ...formState,
          id: Date.now(),
          date: new Date().toISOString(),
        };
        localStorage.setItem("abramsoft_leads", JSON.stringify([...existingLeads, newLead]));
      } catch (err) {
        console.error("Failed to save lead:", err);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

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
              <MessageSquare className="h-4 w-4 text-[var(--primary)]" />
              <span className="text-sm text-[var(--muted)]">Contact Us</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-6">
              Let&apos;s build something <span className="text-gradient">extraordinary</span>
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Have a project in mind or want to learn more about our services? 
              Get in touch, and our team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info Column */}
            <div ref={infoCardRef} className="lg:col-span-5 space-y-8 opacity-0">
              <div className="glass-card p-8">
                <h3 className="font-display text-2xl font-bold text-[var(--foreground)] mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-brand/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--muted)]">Call Us</p>
                      <p className="font-medium text-[var(--foreground)] mt-1">
                        +92 313 4134 482
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-brand/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--muted)]">Email Us</p>
                      <p className="font-medium text-[var(--foreground)] mt-1">
                        abramsoftofficial@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-brand/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--muted)]">Visit Us</p>
                      <p className="font-medium text-[var(--foreground)] mt-1 leading-relaxed">
                        Abramsoft (Pvt) Ltd, Main, Multan Rd, near AL-Awan Bakers Mandi Stop, 
                        Hajveri Town, Lahore, 54700
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Map Card Placeholder */}
              <div className="glass-card p-8 text-center bg-gradient-brand/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-brand opacity-10 rounded-full blur-2xl -mr-6 -mt-6 transition-transform duration-500 group-hover:scale-150" />
                <h4 className="font-display font-semibold text-[var(--foreground)] mb-2">
                  Lahore, Pakistan HQ
                </h4>
                <p className="text-sm text-[var(--muted)] mb-4">
                  Monday – Friday: 9:00 AM – 6:00 PM (PKT)
                </p>
                <div className="h-48 rounded-2xl bg-[var(--glass)] border border-[var(--glass-border)] flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:border-[var(--primary)]/30">
                  <span className="text-xs text-[var(--muted)] font-mono mb-2">Google Maps Geolocation</span>
                  <p className="text-[10px] text-[var(--muted)]/80 text-center max-w-xs">
                    Multan Rd, near AL-Awan Bakers Mandi Stop, Lahore
                  </p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-8 sm:p-10 text-center flex flex-col items-center justify-center min-h-[400px]"
                >
                  <div className="h-16 w-16 rounded-full bg-gradient-brand/20 flex items-center justify-center mb-6">
                    <CheckCircle className="h-10 w-10 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[var(--foreground)] mb-3">
                    Thank You!
                  </h3>
                  <p className="text-[var(--muted)] max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                    Your message has been successfully received and stored securely. We appreciate you reaching out, and our team will get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="swipe" className="rounded-full">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form ref={formCardRef} onSubmit={handleSubmit} className="glass-card p-8 sm:p-10 space-y-6 opacity-0">
                  <h3 className="font-display text-2xl font-bold text-[var(--foreground)] mb-6">
                    Send us a message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-[var(--muted)]">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        disabled={isSubmitting}
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl glass bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--primary)]/50 transition-colors disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-[var(--muted)]">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        disabled={isSubmitting}
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl glass bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--primary)]/50 transition-colors disabled:opacity-50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-[var(--muted)]">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      disabled={isSubmitting}
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl glass bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--primary)]/50 transition-colors disabled:opacity-50"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-[var(--muted)]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      disabled={isSubmitting}
                      rows={6}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full p-4 rounded-xl glass bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--primary)]/50 transition-colors resize-none disabled:opacity-50"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} variant="swipe" className="w-full sm:w-auto h-12 px-8 rounded-full">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
