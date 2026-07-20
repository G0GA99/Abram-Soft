"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Methodology } from "@/components/sections/methodology";
import { Achievements } from "@/components/sections/achievements";
import { Testimonials } from "@/components/sections/testimonials";
import { Toolkit } from "@/components/sections/toolkit";
import { Blog } from "@/components/sections/blog";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Portfolio />
      <Methodology />
      <Achievements />
      <Testimonials />
      <Toolkit />
      <Blog />
      <Footer />
    </main>
  );
}
