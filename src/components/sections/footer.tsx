"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact-us" },
];

const services = [
  { name: "Web Development", href: "/web-development" },
  { name: "AI/ML Development", href: "/ai-ml-development" },
  { name: "SEO Services", href: "/search-engine-optimization" },
  { name: "Digital Marketing", href: "/digital-marketing-services" },
];

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer id="contact-footer" className="relative pt-24 pb-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="glass-card p-8 sm:p-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex mb-6 rounded-2xl focus-visible:outline-offset-4" aria-label="AbramSoft home">
                <BrandLogo />
              </Link>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
                A full-service digital solutions agency specializing in web development, SEO, 
                and digital marketing to help businesses grow online.
              </p>
              {/* Social Links */}
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-[var(--foreground)] mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-semibold text-[var(--foreground)] mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-semibold text-[var(--foreground)] mb-6">
                Contact Info
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[var(--primary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--muted)] text-sm">+92 313 4134 482</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[var(--primary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--muted)] text-sm">abramsoftofficial@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[var(--primary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--muted)] text-sm">
                    Abramsoft (Pvt) Ltd, Main, Multan Rd, near AL-Awan Bakers Mandi Stop, 
                    Hajveri Town, Lahore, 54700
                  </span>
                </li>
              </ul>

              {/* Newsletter */}
              <div className="mt-6">
                <p className="text-sm text-[var(--muted)] mb-3">Subscribe to our newsletter</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 h-10 px-4 rounded-full glass bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--primary)]/50"
                  />
                  <Button size="icon" className="shrink-0">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--glass-border)]">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} AbramSoft. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
