"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { 
  Copy, 
  Check, 
  Type, 
  Palette, 
  Download, 
  FileDown, 
  CreditCard, 
  Layers, 
  RotateCw, 
  Sparkles,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  TrendingUp,
  Code2,
  Cpu
} from "lucide-react";

// Color definitions matching the design system
const colors = [
  {
    name: "Electric Emerald",
    role: "Primary brand accent, core interaction highlights",
    hex: "#1BB080",
    oklch: "oklch(72% 0.16 160)",
    variable: "--primary",
    theme: "Primary",
    bgClass: "bg-[#1BB080]",
    borderClass: "border-[#1BB080]/20"
  },
  {
    name: "Mint Green",
    role: "Secondary brand accent, glass reflections & gradients",
    hex: "#24D09B",
    oklch: "oklch(77% 0.18 165)",
    variable: "--secondary",
    theme: "Accent",
    bgClass: "bg-[#24D09B]",
    borderClass: "border-[#24D09B]/20"
  },
  {
    name: "Cosmic Black",
    role: "Primary background for dark mode",
    hex: "#08080A",
    oklch: "oklch(12% 0.01 240)",
    variable: "--background-dark",
    theme: "Mono Dark",
    bgClass: "bg-[#08080A]",
    borderClass: "border-white/10"
  },
  {
    name: "Abyss Gray",
    role: "Secondary background, card wrapper structures",
    hex: "#0E0E12",
    oklch: "oklch(16% 0.02 240)",
    variable: "--background-secondary-dark",
    theme: "Mono Dark",
    bgClass: "bg-[#0E0E12]",
    borderClass: "border-white/5"
  },
  {
    name: "Pearl White",
    role: "Primary high-contrast text on dark modes",
    hex: "#F5F5F7",
    oklch: "oklch(96% 0.00 0)",
    variable: "--foreground",
    theme: "Text Primary",
    bgClass: "bg-[#F5F5F7]",
    borderClass: "border-black/10"
  },
  {
    name: "Slate Muted",
    role: "Secondary headings, metadata, captions",
    hex: "#A1A1AA",
    oklch: "oklch(71% 0.01 240)",
    variable: "--muted",
    theme: "Text Muted",
    bgClass: "bg-[#A1A1AA]",
    borderClass: "border-white/5"
  },
  {
    name: "Pure Ice",
    role: "Primary background for light mode base",
    hex: "#FAFAFC",
    oklch: "oklch(98% 0.00 0)",
    variable: "--background-light",
    theme: "Mono Light",
    bgClass: "bg-[#FAFAFC]",
    borderClass: "border-black/5"
  },
  {
    name: "Cool Platinum",
    role: "Secondary light background & borders",
    hex: "#F1F1F4",
    oklch: "oklch(95% 0.01 240)",
    variable: "--background-secondary-light",
    theme: "Mono Light",
    bgClass: "bg-[#F1F1F4]",
    borderClass: "border-black/5"
  }
];

// Typography definitions
const typographies = [
  {
    name: "Space Grotesk",
    type: "Display & Headings",
    role: "Used for high-tech, geometric, modern structural headings. Conveys precision, forward-thinking tech solutions, and solid engineering structures.",
    cssClass: "font-display",
    weight: "Bold (700)",
    sample: "BUILDING THE NEXT INTELLIGENT DIGITAL FRONTIER"
  },
  {
    name: "Cormorant Garamond",
    type: "Bespoke Editorial Titles",
    role: "Used for elegant, light, italicized accent headers. Adds human craftsmanship, bespoke luxury, and a premium editorial contrast to the tech elements.",
    cssClass: "font-luxury italic font-light",
    weight: "Light (300) / Regular (400) Italic",
    sample: "Bespoke digital architecture crafted with obsessive precision"
  },
  {
    name: "Inter",
    type: "Body Copy & UI Elements",
    role: "Highly optimized, extremely readable sans-serif font used for all body narratives, tables, lists, and micro-interactions.",
    cssClass: "font-sans",
    weight: "Regular (400) / Medium (500) / Semibold (600)",
    sample: "We architect, secure, and deliver enterprise-level software solutions that scale seamlessly with your growing brand."
  }
];
export default function BrandSheetPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [logoLayout, setLogoLayout] = useState<"standard" | "compact" | "icon">("standard");
  const [logoTheme, setLogoTheme] = useState<"dark" | "light" | "monochrome">("dark");
  const [typeTestText, setTypeTestText] = useState("ABRAMSOFT is the peak of code and craft.");
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setCopiedText(label);
    setTimeout(() => {
      setCopiedColor(null);
      setCopiedText(null);
    }, 2000);
  };

  const handleDownloadSVG = () => {
    const svgString = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 28 72 L 50 26 L 72 72" stroke="url(#glassyAFrame)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 39 52 L 61 52" stroke="url(#glassyCrossbar)" stroke-width="10" stroke-linecap="round" />
      <circle cx="50" cy="42" r="3" fill="#ffffff" />
      <defs>
        <linearGradient id="glassyAFrame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#24d09b" />
          <stop offset="40%" stop-color="#1bb080" />
          <stop offset="100%" stop-color="#0d6a4c" />
        </linearGradient>
        <linearGradient id="glassyCrossbar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#2ee0a5" />
          <stop offset="100%" stop-color="#1bb080" />
        </linearGradient>
      </defs>
    </svg>`;
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "abramsoft_logo_vector.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrintPDF = () => {
    window.print();
  };

  const handleDownloadHTML = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ABRAMSOFT Brand Guidelines - Standalone Edition</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        emerald: {
                            brand: '#1BB080',
                            accent: '#24D09B',
                        },
                        cosmic: '#08080A',
                        abyss: '#0E0E12',
                        pearl: '#F5F5F7',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['"Space Grotesk"', 'sans-serif'],
                        luxury: ['"Cormorant Garamond"', 'serif'],
                    }
                }
            }
        }
    </script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #08080A;
            color: #F5F5F7;
        }
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #08080A;
        }
        ::-webkit-scrollbar-thumb {
            background: #1BB08020;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #1BB08040;
        }
        .card-container {
            perspective: 1000px;
        }
        .card-inner {
            transition: transform 0.6s;
            transform-style: preserve-3d;
        }
        .card-container.flipped .card-inner {
            transform: rotateY(180deg);
        }
        .card-front, .card-back {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }
        .card-back {
            transform: rotateY(180deg);
        }
    </style>
</head>
<body class="selection:bg-emerald-brand/30 selection:text-white min-h-screen overflow-x-hidden relative pb-16">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
    <div class="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-tr from-emerald-brand/5 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-accent/5 to-transparent blur-[130px] rounded-full pointer-events-none"></div>

    <header class="relative pt-20 pb-10 border-b border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-brand/10 border border-emerald-brand/20 text-emerald-brand text-[11px] font-mono tracking-wider uppercase mb-4">
                        <span class="h-2 w-2 rounded-full bg-emerald-brand animate-pulse"></span>
                        Standalone Edition · Approved v1.0
                    </div>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.05] text-white">
                        ABRAMSOFT Guidelines
                    </h1>
                    <p class="text-sm sm:text-base text-zinc-400 font-sans max-w-3xl leading-relaxed mt-4">
                        The official offline visual specification for ABRAHAMS SOFT. A high-fidelity geometric monogram forming a glassy, dimensional "A" arch, anchored by an automated tech-system node. Built on architectural principles of precision, code excellence, and growth.
                    </p>
                </div>
                <div class="flex gap-3 shrink-0 print:hidden">
                    <button onclick="window.print()" class="inline-flex items-center gap-2 px-4 h-11 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs border border-white/10 transition-all cursor-pointer">
                        <svg class="h-4 w-4 text-emerald-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
                        <span>Print Sheet</span>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="relative overflow-hidden bg-gradient-to-b from-abyss to-zinc-950 border border-white/5 rounded-[24px] p-8 sm:p-16 flex flex-col items-center justify-center min-h-[400px]">
            <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_center,#000_30%,transparent_85%)] pointer-events-none"></div>
            
            <div class="absolute top-6 left-6 flex gap-6 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                <span class="flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-zinc-600"></span>GRID 100</span>
                <span class="flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-zinc-600"></span>EMERALD & MINT</span>
                <span class="flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-zinc-600"></span>v1.0</span>
            </div>

            <div class="relative group cursor-pointer transition-transform duration-500 hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-tr from-emerald-brand to-emerald-accent opacity-15 blur-3xl rounded-full scale-110"></div>
                
                <svg class="h-44 w-44 sm:h-52 sm:w-52 shrink-0 filter drop-shadow-[0_8px_24px_rgba(27,176,128,0.25)] relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 28 72 L 50 26 L 72 72" stroke="url(#heroGlassyAFrame)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M 39 52 L 61 52" stroke="url(#heroGlassyCrossbar)" stroke-width="10" stroke-linecap="round" />
                    <path d="M 31 66 L 50 29.5 L 69 66" stroke="url(#heroWhiteHighlight)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.65" />
                    <path d="M 41.5 50 L 58.5 50" stroke="url(#heroWhiteHighlight)" stroke-width="2.5" stroke-linecap="round" opacity="0.65" />
                    <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                    <defs>
                        <linearGradient id="heroGlassyAFrame" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#24d09b" />
                            <stop offset="40%" stop-color="#1bb080" />
                            <stop offset="100%" stop-color="#0d6a4c" />
                        </linearGradient>
                        <linearGradient id="heroGlassyCrossbar" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#2ee0a5" />
                            <stop offset="100%" stop-color="#1bb080" />
                        </linearGradient>
                        <linearGradient id="heroWhiteHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#ffffff" />
                            <stop offset="100%" stop-color="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    </section>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">
        <!-- 01 · Geometry & Construction -->
        <section class="space-y-6">
            <div class="flex items-baseline justify-between border-b border-white/10 pb-4">
                <div>
                    <h2 class="text-sm font-semibold tracking-wider text-emerald-brand uppercase">01 · Geometry & Construction</h2>
                    <p class="text-xs text-zinc-500 mt-1">Drawn on a 100-unit master engineering canvas.</p>
                </div>
                <div class="font-mono text-xs text-zinc-600">GEOMETRY</div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="bg-abyss border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                    <h3 class="font-mono text-[10.5px] text-zinc-500 uppercase tracking-wider mb-6">Grid Construction Map</h3>
                    <div class="aspect-square w-full max-w-[300px] mx-auto bg-zinc-950/50 border border-dashed border-emerald-brand/20 rounded-xl relative flex items-center justify-center p-4">
                        <div class="absolute inset-0 bg-[linear-gradient(rgba(27,176,128,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(27,176,128,0.06)_1px,transparent_1px)] bg-[size:10%_10%]"></div>
                        <svg viewBox="0 0 100 100" class="w-full h-full text-emerald-brand">
                            <rect x="20" y="20" width="60" height="60" stroke="#1BB080" stroke-width="0.5" stroke-dasharray="2 2" fill="none" />
                            <line x1="50" y1="10" x2="50" y2="90" stroke="#1BB080" stroke-width="0.5" stroke-dasharray="1 3" />
                            <line x1="10" y1="52" x2="90" y2="52" stroke="#1BB080" stroke-width="0.5" stroke-dasharray="1 3" />
                            <line x1="10" y1="42" x2="90" y2="42" stroke="#1BB080" stroke-width="0.5" stroke-dasharray="1 3" />
                            <circle cx="50" cy="26" r="2.5" fill="none" stroke="#24D09B" stroke-width="1" />
                            <circle cx="28" cy="72" r="2.5" fill="none" stroke="#24D09B" stroke-width="1" />
                            <circle cx="72" cy="72" r="2.5" fill="none" stroke="#24D09B" stroke-width="1" />
                            <path d="M 28 72 L 50 26 L 72 72" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.3" />
                            <path d="M 39 52 L 61 52" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" opacity="0.3" />
                            <circle cx="50" cy="42" r="1.5" fill="#ffffff" />
                        </svg>
                    </div>
                    <ul class="space-y-2 mt-6 text-xs text-zinc-400">
                        <li><strong>Geometric Matrix:</strong> Vertex vectors are placed at (50, 26) and base segments at x=28, x=72.</li>
                        <li><strong>Floating Central Core:</strong> The circular intelligence node (cx=50, cy=42) floats inside the negative-space vector arch.</li>
                    </ul>
                </div>

                <div class="bg-abyss border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                    <h3 class="font-mono text-[10.5px] text-zinc-500 uppercase tracking-wider mb-6">Clearspace & Safety Boundaries</h3>
                    <div class="aspect-square w-full max-w-[300px] mx-auto relative flex items-center justify-center">
                        <div class="absolute inset-[10%] border border-dashed border-red-500/30 rounded-xl flex items-center justify-center">
                            <div class="absolute inset-[20%] border border-white/10 rounded-lg flex items-center justify-center bg-zinc-950/20">
                                <svg viewBox="0 0 100 100" class="w-20 h-20 text-emerald-brand/80">
                                    <path d="M 28 72 L 50 26 L 72 72" stroke="#1bb080" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M 39 52 L 61 52" stroke="#1bb080" stroke-width="10" stroke-linecap="round" />
                                    <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                                </svg>
                            </div>
                        </div>
                        <span class="absolute top-[3%] left-1/2 -translate-x-1/2 font-mono text-[9px] text-red-400">½x clearspace</span>
                        <span class="absolute bottom-[3%] left-1/2 -translate-x-1/2 font-mono text-[9px] text-red-400">½x clearspace</span>
                    </div>
                    <ul class="space-y-2 mt-6 text-xs text-zinc-400">
                        <li><strong>Boundary Rule:</strong> Keep at least &frac12;x of whitespace around the outer bounds of the asset symbol.</li>
                        <li><strong>Minimum sizing:</strong> 24px width in digital interfaces, and 12mm width in modern printed stationery.</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- 02 · Color System -->
        <section class="space-y-6">
            <div class="flex items-baseline justify-between border-b border-white/10 pb-4">
                <div>
                    <h2 class="text-sm font-semibold tracking-wider text-emerald-brand uppercase">02 · Color System</h2>
                    <p class="text-xs text-zinc-500 mt-1">Dual-theme functional palette coordinates.</p>
                </div>
                <div class="font-mono text-xs text-zinc-600">COLOR</div>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div onclick="copyColor('#1BB080', 'Electric Emerald')" class="group rounded-xl bg-abyss border border-white/5 p-4 flex flex-col justify-between min-h-[160px] cursor-pointer hover:border-white/15 transition-all">
                    <div class="w-full h-24 rounded-lg bg-[#1BB080] border border-white/10 flex items-center justify-center">
                        <span class="text-[9px] font-mono tracking-wider bg-black/40 px-2 py-1 rounded text-white">PRIMARY</span>
                    </div>
                    <div class="pt-3">
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-xs">Electric Emerald</span>
                            <span class="font-mono text-[10px] text-zinc-400">#1BB080</span>
                        </div>
                    </div>
                </div>

                <div onclick="copyColor('#24D09B', 'Mint Green')" class="group rounded-xl bg-abyss border border-white/5 p-4 flex flex-col justify-between min-h-[160px] cursor-pointer hover:border-white/15 transition-all">
                    <div class="w-full h-24 rounded-lg bg-[#24D09B] border border-white/10 flex items-center justify-center">
                        <span class="text-[9px] font-mono tracking-wider bg-black/40 px-2 py-1 rounded text-white">ACCENT</span>
                    </div>
                    <div class="pt-3">
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-xs">Mint Green</span>
                            <span class="font-mono text-[10px] text-zinc-400">#24D09B</span>
                        </div>
                    </div>
                </div>

                <div onclick="copyColor('#08080A', 'Cosmic Black')" class="group rounded-xl bg-abyss border border-white/5 p-4 flex flex-col justify-between min-h-[160px] cursor-pointer hover:border-white/15 transition-all">
                    <div class="w-full h-24 rounded-lg bg-[#08080A] border border-white/10 flex items-center justify-center">
                        <span class="text-[9px] font-mono tracking-wider bg-white/10 px-2 py-1 rounded text-white">BG DARK</span>
                    </div>
                    <div class="pt-3">
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-xs">Cosmic Black</span>
                            <span class="font-mono text-[10px] text-zinc-400">#08080A</span>
                        </div>
                    </div>
                </div>

                <div onclick="copyColor('#F5F5F7', 'Pearl White')" class="group rounded-xl bg-abyss border border-white/5 p-4 flex flex-col justify-between min-h-[160px] cursor-pointer hover:border-white/15 transition-all">
                    <div class="w-full h-24 rounded-lg bg-[#F5F5F7] border border-black/10 flex items-center justify-center">
                        <span class="text-[9px] font-mono tracking-wider bg-black/40 px-2 py-1 rounded text-zinc-800">TEXT PRIMARY</span>
                    </div>
                    <div class="pt-3">
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-xs text-white">Pearl White</span>
                            <span class="font-mono text-[10px] text-zinc-400">#F5F5F7</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 03 · Typographic Systems -->
        <section class="space-y-6">
            <div class="flex items-baseline justify-between border-b border-white/10 pb-4">
                <div>
                    <h2 class="text-sm font-semibold tracking-wider text-emerald-brand uppercase">03 · Typographic Systems</h2>
                    <p class="text-xs text-zinc-500 mt-1">Sleek, architectural font pairings for code and copy.</p>
                </div>
                <div class="font-mono text-xs text-zinc-600">TYPOGRAPHY</div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="bg-abyss border border-white/5 p-5 rounded-xl flex flex-col justify-between min-h-[220px]">
                    <div>
                        <div class="flex justify-between items-center border-b border-white/5 pb-2 mb-3">
                            <h4 class="font-bold text-sm">Space Grotesk</h4>
                            <span class="text-[9px] bg-emerald-brand/10 text-emerald-brand px-2 py-0.5 rounded uppercase font-mono">Display</span>
                        </div>
                        <p class="text-[11.5px] text-zinc-400 leading-relaxed">High-tech, geometric, and modern structural headings that convey precision engineering and design stability.</p>
                    </div>
                    <p class="font-display font-bold text-sm tracking-tight text-center mt-4 bg-zinc-950/40 py-3 rounded-lg text-emerald-accent">BUILDING THE DIGITAL FRONT</p>
                </div>

                <div class="bg-abyss border border-white/5 p-5 rounded-xl flex flex-col justify-between min-h-[220px]">
                    <div>
                        <div class="flex justify-between items-center border-b border-white/5 pb-2 mb-3">
                            <h4 class="font-bold text-sm">Cormorant Garamond</h4>
                            <span class="text-[9px] bg-emerald-brand/10 text-emerald-brand px-2 py-0.5 rounded uppercase font-mono">Bespoke</span>
                        </div>
                        <p class="text-[11.5px] text-zinc-400 leading-relaxed">Elegant, light, italicized accent headings representing craftsmanship, customized software luxury, and editorial style.</p>
                    </div>
                    <p class="font-luxury italic text-base text-center mt-4 bg-zinc-950/40 py-3 rounded-lg text-emerald-accent">Bespoke digital systems engineered with precision</p>
                </div>

                <div class="bg-abyss border border-white/5 p-5 rounded-xl flex flex-col justify-between min-h-[220px]">
                    <div>
                        <div class="flex justify-between items-center border-b border-white/5 pb-2 mb-3">
                            <h4 class="font-bold text-sm">Inter</h4>
                            <span class="text-[9px] bg-emerald-brand/10 text-emerald-brand px-2 py-0.5 rounded uppercase font-mono">UI & Body</span>
                        </div>
                        <p class="text-[11.5px] text-zinc-400 leading-relaxed">Optimized, high-legibility sans-serif used for body copy, code, UI layouts, tables, and functional micro-interactions.</p>
                    </div>
                    <p class="font-sans text-xs text-center mt-4 bg-zinc-950/40 py-3 rounded-lg text-zinc-300">We architect, secure, and deliver enterprise-level software solutions that scale seamlessly.</p>
                </div>
            </div>

            <div class="bg-abyss border border-white/5 rounded-2xl p-6 space-y-4">
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                    <h4 class="font-display font-semibold text-xs text-white">Live Specimen Playground</h4>
                    <span class="text-[9px] text-zinc-500 font-mono uppercase">Interactively verify weights & scales</span>
                </div>
                <input
                    type="text"
                    id="specimenInput"
                    oninput="updateSpecimens(this.value)"
                    value="ABRAMSOFT is the peak of code and craft."
                    placeholder="Type to test fonts..."
                    class="w-full h-11 px-4 rounded-xl bg-zinc-950 border border-white/5 text-xs text-white focus:border-emerald-brand/50 focus:outline-none focus:ring-1 focus:ring-emerald-brand/50 transition-colors"
                />
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div class="p-4 bg-zinc-950/50 rounded-xl border border-white/5">
                        <p class="text-[8px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Space Grotesk</p>
                        <p id="specimenDisplay" class="font-display font-bold text-sm text-white break-all">ABRAMSOFT is the peak of code and craft.</p>
                    </div>
                    <div class="p-4 bg-zinc-950/50 rounded-xl border border-white/5">
                        <p class="text-[8px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Cormorant Garamond</p>
                        <p id="specimenLuxury" class="font-luxury italic text-base text-white break-all">ABRAMSOFT is the peak of code and craft.</p>
                    </div>
                    <div class="p-4 bg-zinc-950/50 rounded-xl border border-white/5">
                        <p class="text-[8px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Inter</p>
                        <p id="specimenSans" class="font-sans text-xs text-zinc-400 break-all">ABRAMSOFT is the peak of code and craft.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 04 · Digital & Social Applications -->
        <section class="space-y-6">
            <div class="flex items-baseline justify-between border-b border-white/10 pb-4">
                <div>
                    <h2 class="text-sm font-semibold tracking-wider text-emerald-brand uppercase">04 · Applications</h2>
                    <p class="text-xs text-zinc-500 mt-1">Bento specifications of the brand assets: web, layouts, profiles, loaders, avatars.</p>
                </div>
                <div class="font-mono text-xs text-zinc-600">APPLICATIONS</div>
            </div>

            <div class="grid grid-cols-12 gap-4">
                <!-- Favicon Browser mockup -->
                <div class="col-span-12 md:col-span-4 bg-abyss border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-6">
                    <div class="flex justify-between items-start">
                        <span class="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Favicon</span>
                        <span class="font-mono text-[9px] text-zinc-600">16–32PX</span>
                    </div>

                    <div class="flex-1 flex items-center justify-center py-4 bg-zinc-950/40 rounded-xl border border-white/5 min-h-[140px]">
                        <div class="bg-[#18181C] border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2 max-w-[190px] shadow-lg">
                            <svg viewBox="0 0 100 100" class="h-3.5 w-3.5 text-emerald-brand">
                                <path d="M 28 72 L 50 26 L 72 72" stroke="url(#miniFav)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" />
                                <circle cx="50" cy="42" r="4" fill="#ffffff" />
                                <defs>
                                    <linearGradient id="miniFav" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#24D09B" /><stop offset="100%" stop-color="#1BB080" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span class="text-[10px] text-zinc-300 font-sans truncate font-medium max-w-[100px]">ABRAMSOFT</span>
                            <span class="text-zinc-500 text-xs leading-none shrink-0 ml-1">×</span>
                        </div>
                    </div>

                    <p class="text-[11px] text-zinc-400 font-sans leading-relaxed">
                        Rendered at low resolutions, the crossbar is omitted and the glowing hub sits prominently in the apex vector space.
                    </p>
                </div>

                <!-- App Icon -->
                <div class="col-span-12 md:col-span-4 bg-abyss border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-6">
                    <div class="flex justify-between items-start">
                        <span class="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">App Icon</span>
                        <span class="font-mono text-[9px] text-zinc-600">1024PX</span>
                    </div>

                    <div class="flex-1 flex items-center justify-center py-4 bg-zinc-950/40 rounded-xl border border-white/5 min-h-[140px]">
                        <div class="h-24 w-24 rounded-[22px] bg-gradient-to-tr from-[#08080A] to-[#121218] border border-white/10 p-4 flex items-center justify-center shadow-xl relative overflow-hidden">
                            <div class="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-60 pointer-events-none"></div>
                            <svg viewBox="0 0 100 100" class="h-12 w-12 text-emerald-brand filter drop-shadow-[0_4px_10px_rgba(27,176,128,0.3)]">
                                <path d="M 28 72 L 50 26 L 72 72" stroke="url(#appIconGrad)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M 39 52 L 61 52" stroke="url(#appIconCross)" stroke-width="10" stroke-linecap="round" />
                                <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                                <defs>
                                    <linearGradient id="appIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#24D09B" /><stop offset="100%" stop-color="#1BB080" />
                                    </linearGradient>
                                    <linearGradient id="appIconCross" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stop-color="#2ee0a5" /><stop offset="100%" stop-color="#1bb080" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <p class="text-[11px] text-zinc-400 font-sans leading-relaxed">
                        App icon features dark radial gradients with high depth, subtle glassy surface rim lighting and inner glow parameters.
                    </p>
                </div>

                <!-- Sidebar Branding -->
                <div class="col-span-12 md:col-span-4 bg-abyss border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-6">
                    <div class="flex justify-between items-start">
                        <span class="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">In-product Brand Panel</span>
                        <span class="font-mono text-[9px] text-zinc-600">SIDEBAR PANEL</span>
                    </div>

                    <div class="flex-1 flex items-center justify-center bg-zinc-950/40 rounded-xl border border-white/5 min-h-[140px] p-4">
                        <div class="w-full max-w-[210px] bg-[#0A0A0E] border border-white/5 rounded-xl p-3 flex flex-col gap-3 shadow-2xl">
                            <div class="flex items-center gap-2 border-b border-white/5 pb-2.5">
                                <svg viewBox="0 0 100 100" class="h-5 w-5 text-[#1BB080]">
                                    <path d="M 28 72 L 50 26 L 72 72" stroke="url(#sideGrad)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M 39 52 L 61 52" stroke="url(#sideGrad)" stroke-width="10" stroke-linecap="round" />
                                    <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                                    <defs>
                                        <linearGradient id="sideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stop-color="#24D09B" /><stop offset="100%" stop-color="#1BB080" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span class="font-display font-black text-[10px] tracking-wider text-white">ABRAMSOFT</span>
                                <span class="ml-auto font-mono text-[7px] text-[#1BB080] border border-[#1BB080]/30 rounded px-1.5 py-0.5 bg-[#1BB080]/5 leading-none">PRO</span>
                            </div>
                            <div class="space-y-1.5">
                                <div class="h-2 rounded bg-white/10 w-[90%]"></div>
                                <div class="h-2 rounded bg-emerald-brand/15 w-[80%]"></div>
                            </div>
                        </div>
                    </div>

                    <p class="text-[11px] text-zinc-400 font-sans leading-relaxed">
                        In UI frameworks, the horizontal Standard Lockup is paired with a secondary green Pro/Enterprise indicator badge.
                    </p>
                </div>

                <!-- Loader -->
                <div class="col-span-12 md:col-span-4 bg-abyss border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-6">
                    <div class="flex justify-between items-start">
                        <span class="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Loading Animation</span>
                        <span class="font-mono text-[9px] text-zinc-600">ANIMATED STATE</span>
                    </div>

                    <div class="flex-1 flex items-center justify-center bg-zinc-950/40 rounded-xl border border-white/5 min-h-[140px] p-4">
                        <div class="relative flex items-center justify-center">
                            <div class="absolute h-16 w-16 bg-[#1BB080]/20 rounded-full blur-xl animate-pulse"></div>
                            <div class="animate-spin duration-[4s] ease-linear">
                                <svg class="h-16 w-16 text-[#1BB080]" viewBox="0 0 100 100" fill="none">
                                    <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="3" stroke-dasharray="60 40" stroke-linecap="round" />
                                </svg>
                            </div>
                            <div class="absolute h-3.5 w-3.5 bg-white rounded-full border-2 border-emerald-brand animate-ping"></div>
                            <div class="absolute h-2.5 w-2.5 bg-white rounded-full border border-zinc-950"></div>
                        </div>
                    </div>

                    <p class="text-[11px] text-zinc-400 font-sans leading-relaxed">
                        The hub dot scales continuously inside a rotating emerald segment circle, mirroring data network transactions.
                    </p>
                </div>

                <!-- Avatar -->
                <div class="col-span-12 md:col-span-4 bg-abyss border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-6">
                    <div class="flex justify-between items-start">
                        <span class="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Social Profile Avatar</span>
                        <span class="font-mono text-[9px] text-zinc-600">CIRCULAR SPEC</span>
                    </div>

                    <div class="flex-1 flex items-center justify-center bg-zinc-950/40 rounded-xl border border-white/5 min-h-[140px] p-4">
                        <div class="h-20 w-20 rounded-full bg-gradient-to-tr from-[#1BB080] to-[#24D09B] p-0.5 shadow-2xl relative">
                            <div class="h-full w-full rounded-full bg-[#08080A] flex items-center justify-center overflow-hidden">
                                <svg viewBox="0 0 100 100" class="h-9 w-9 text-emerald-brand">
                                    <path d="M 28 72 L 50 26 L 72 72" stroke="url(#scGrad)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M 39 52 L 61 52" stroke="url(#scGrad)" stroke-width="10" stroke-linecap="round" />
                                    <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                                    <defs>
                                        <linearGradient id="scGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stop-color="#24D09B" /><stop offset="100%" stop-color="#1BB080" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <p class="text-[11px] text-zinc-400 font-sans leading-relaxed">
                        The circular asset provides a thin glowing boundary stroke of &frac12;pt thickness, ensuring high separation against black backdrops.
                    </p>
                </div>

                <!-- Wordmarks -->
                <div class="col-span-12 md:col-span-4 bg-abyss border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-6">
                    <div class="flex justify-between items-start">
                        <span class="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Horizontal Wordmark Lockup</span>
                        <span class="font-mono text-[9px] text-zinc-600">LOCKUP FORMAT</span>
                    </div>

                    <div class="flex-1 flex items-center justify-center bg-zinc-950/40 rounded-xl border border-white/5 min-h-[140px] p-4">
                        <div class="flex items-center gap-3.5">
                            <svg viewBox="0 0 100 100" class="h-8.5 w-8.5 text-[#1BB080] shrink-0">
                                <path d="M 28 72 L 50 26 L 72 72" stroke="url(#hLkGrad)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M 39 52 L 61 52" stroke="url(#hLkGrad)" stroke-width="10" stroke-linecap="round" />
                                <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                                <defs>
                                    <linearGradient id="hLkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#24D09B" /><stop offset="100%" stop-color="#1BB080" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div class="flex flex-col">
                                <span class="flex items-baseline font-display leading-none tracking-[0.05em]">
                                    <span class="text-sm font-black tracking-wider text-white">ABRAM</span>
                                    <span class="text-sm font-black text-emerald-brand ml-0.5 tracking-wider">SOFT</span>
                                </span>
                                <span class="text-[4.8px] font-mono text-zinc-400 tracking-[0.02em] uppercase mt-1 leading-none select-none">
                                    CRAFTING DIGITAL EXCELLENCE
                                </span>
                            </div>
                        </div>
                    </div>

                    <p class="text-[11px] text-zinc-400 font-sans leading-relaxed">
                        Horizontal Standard Lockup uses clean "Space Grotesk" font weight 900, maintaining consistent horizontal safety baselines.
                    </p>
                </div>
            </div>
        </section>

        <!-- 05 · Stationery & Card -->
        <section class="space-y-6">
            <div class="flex items-baseline justify-between border-b border-white/10 pb-4">
                <div>
                    <h2 class="text-sm font-semibold tracking-wider text-emerald-brand uppercase">05 · Stationery & Card</h2>
                    <p class="text-xs text-zinc-500 mt-1">Interactive corporate identification spec card.</p>
                </div>
                <div class="font-mono text-xs text-zinc-600">STATIONERY</div>
            </div>

            <div class="flex flex-col lg:flex-row items-center gap-8 bg-abyss border border-white/5 p-8 rounded-2xl relative overflow-hidden">
                <div class="flex-1 space-y-4">
                    <h3 class="text-xl font-display font-bold text-white">450gsm Heavy Business Card</h3>
                    <p class="text-xs text-zinc-400 leading-relaxed">Premium corporate tactile print assets. Back features core vector monogram. Front features executive layout details, and embossed metal foil details in Electric Emerald gradient overlay.</p>
                    <button onclick="toggleCard()" class="px-4 py-2.5 bg-emerald-brand hover:bg-emerald-accent text-zinc-950 text-xs font-bold rounded-lg transition-all active:scale-95 cursor-pointer">
                        Flip Business Card
                    </button>
                </div>

                <div class="card-container w-full max-w-[400px] h-56 cursor-pointer" onclick="toggleCard()">
                    <div id="bizCard" class="card-inner w-full h-full relative duration-500">
                        <!-- CARD FRONT -->
                        <div class="card-front absolute inset-0 w-full h-full rounded-2xl p-8 flex flex-col justify-between overflow-hidden shadow-2xl border border-white/10 bg-[#0C0C10] select-none">
                            <div class="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-emerald-brand/10 rounded-tl-2xl"></div>
                            <div class="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-emerald-brand/10 rounded-br-2xl"></div>
                            <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,176,128,0.06)_0%,transparent_60%)] pointer-events-none"></div>

                            <div class="flex justify-between items-start">
                                <span class="text-[9px] font-mono text-emerald-brand uppercase tracking-[0.2em]">Corporate Suite</span>
                                <span class="text-[8px] text-zinc-600 font-mono">ID: AS-9048-SPEC</span>
                            </div>

                            <div class="flex flex-col items-center justify-center flex-1">
                                <svg viewBox="0 0 100 100" class="h-11 w-11 text-emerald-brand filter drop-shadow-[0_4px_12px_rgba(27,176,128,0.25)]">
                                    <path d="M 28 72 L 50 26 L 72 72" stroke="url(#cFr)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M 39 52 L 61 52" stroke="url(#cFr)" stroke-width="10" stroke-linecap="round" />
                                    <circle cx="50" cy="42" r="3" fill="#ffffff" />
                                    <defs>
                                        <linearGradient id="cFr" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stop-color="#24D09B" /><stop offset="100%" stop-color="#1BB080" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span class="font-display font-black text-xs tracking-[0.25em] text-white mt-2">ABRAMSOFT</span>
                            </div>

                            <div class="flex justify-between items-end">
                                <span class="text-[8.5px] text-zinc-500 font-mono uppercase tracking-wider">ABRAMSOFT Brand guidelines</span>
                                <span class="text-[8.5px] text-zinc-400 font-mono flex items-center gap-1">
                                    <svg class="h-2.5 w-2.5 text-emerald-brand" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> www.abramsoft.com
                                </span>
                            </div>
                        </div>

                        <!-- CARD BACK -->
                        <div class="card-back absolute inset-0 w-full h-full rounded-2xl p-7 flex flex-col justify-between overflow-hidden shadow-2xl border border-white/10 bg-[#08080C] select-none">
                            <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(27,176,128,0.05)_0%,transparent_60%)] pointer-events-none"></div>
                            
                            <div class="flex justify-between items-start border-b border-white/5 pb-2">
                                <div>
                                    <h4 class="font-display font-black text-xs text-white tracking-wider">ABRAMSOFT</h4>
                                    <p class="text-[6.2px] text-emerald-brand font-mono uppercase tracking-[0.025em] leading-none mt-1">CRAFTING DIGITAL EXCELLENCE</p>
                                </div>
                                <span class="bg-emerald-brand/10 text-emerald-brand border border-emerald-brand/20 rounded px-1.5 py-0.5 text-[7px] font-mono uppercase">
                                    Brand Specification
                                </span>
                            </div>

                            <div class="my-auto flex items-center justify-between">
                                <div class="space-y-1">
                                    <h5 class="font-display font-bold text-sm text-white">Abrar Ahmad</h5>
                                    <p class="text-[9px] text-emerald-brand font-mono uppercase tracking-wider">CEO</p>
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-white/5 pt-2 text-[8px] text-zinc-400 font-mono">
                                <div class="flex items-center gap-1.5">
                                    <svg class="h-2.5 w-2.5 text-emerald-brand shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                    <span>+92 313 4134 482</span>
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <svg class="h-2.5 w-2.5 text-emerald-brand shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                                    <span>www.abramsoft.com</span>
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <svg class="h-2.5 w-2.5 text-emerald-brand shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                    <span>abramsoftofficial@gmail.com</span>
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <svg class="h-2.5 w-2.5 text-emerald-brand shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                    <span class="truncate">Lahore, Punjab 54700</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 06 · Usage Rules -->
        <section class="space-y-6">
            <div class="flex items-baseline justify-between border-b border-white/10 pb-4">
                <div>
                    <h2 class="text-sm font-semibold tracking-wider text-emerald-brand uppercase">06 · Usage Rules</h2>
                    <p class="text-xs text-zinc-500 mt-1">Four rules to preserve monogram clarity. Distortions destroy precision.</p>
                </div>
                <div class="font-mono text-xs text-zinc-600">RULES</div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="bg-abyss border border-white/5 rounded-2xl p-5 space-y-4">
                    <div class="aspect-[1.2/1] bg-zinc-950/40 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                        <span class="absolute top-3 left-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-mono uppercase px-2 py-0.5 rounded">DO</span>
                        <svg viewBox="0 0 100 100" class="h-14 w-14 text-emerald-brand">
                            <path d="M 28 72 L 50 26 L 72 72" stroke="url(#doA)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M 39 52 L 61 52" stroke="url(#doB)" stroke-width="10" stroke-linecap="round" />
                            <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                            <defs>
                                <linearGradient id="doA" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#24D09B" /><stop offset="100%" stop-color="#1BB080" />
                                </linearGradient>
                                <linearGradient id="doB" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="#2ee0a5" /><stop offset="100%" stop-color="#1bb080" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <p class="text-[11.5px] text-zinc-400 leading-relaxed font-sans">
                        Always use approved vector geometry, linear color pairings and maintain &frac12;x padding clearspaces.
                    </p>
                </div>

                <div class="bg-abyss border border-white/5 rounded-2xl p-5 space-y-4">
                    <div class="aspect-[1.2/1] bg-zinc-950/40 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                        <span class="absolute top-3 left-3 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[9px] font-mono uppercase px-2 py-0.5 rounded">DON'T</span>
                        <div class="rotate-[18deg]">
                            <svg viewBox="0 0 100 100" class="h-14 w-14 text-emerald-brand">
                                <path d="M 28 72 L 50 26 L 72 72" stroke="#1BB080" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M 39 52 L 61 52" stroke="#1BB080" stroke-width="10" stroke-linecap="round" />
                                <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                            </svg>
                        </div>
                    </div>
                    <p class="text-[11.5px] text-zinc-400 leading-relaxed font-sans">
                        Never skew, tilt or rotate the emblem. The paths must stand upright on straight base axes.
                    </p>
                </div>

                <div class="bg-abyss border border-white/5 rounded-2xl p-5 space-y-4">
                    <div class="aspect-[1.2/1] bg-zinc-950/40 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                        <span class="absolute top-3 left-3 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[9px] font-mono uppercase px-2 py-0.5 rounded">DON'T</span>
                        <div class="scale-x-150 scale-y-75">
                            <svg viewBox="0 0 100 100" class="h-14 w-14 text-emerald-brand">
                                <path d="M 28 72 L 50 26 L 72 72" stroke="#1BB080" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M 39 52 L 61 52" stroke="#1BB080" stroke-width="10" stroke-linecap="round" />
                                <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                            </svg>
                        </div>
                    </div>
                    <p class="text-[11.5px] text-zinc-400 leading-relaxed font-sans">
                        Never distort or compress proportions. Always scale elements uniformly with strict aspect locking.
                    </p>
                </div>

                <div class="bg-abyss border border-white/5 rounded-2xl p-5 space-y-4">
                    <div class="aspect-[1.2/1] bg-zinc-950/40 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                        <span class="absolute top-3 left-3 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[9px] font-mono uppercase px-2 py-0.5 rounded">DON'T</span>
                        <svg viewBox="0 0 100 100" class="h-14 w-14 text-rose-400">
                            <path d="M 28 72 L 50 26 L 72 72" stroke="url(#offA)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M 39 52 L 61 52" stroke="url(#offB)" stroke-width="10" stroke-linecap="round" />
                            <circle cx="50" cy="42" r="3.2" fill="#E879F9" />
                            <defs>
                                <linearGradient id="offA" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#F472B6" /><stop offset="100%" stop-color="#FB7185" />
                                </linearGradient>
                                <linearGradient id="offB" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="#F472B6" /><stop offset="100%" stop-color="#C084FC" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <p class="text-[11.5px] text-zinc-400 leading-relaxed font-sans">
                        Never recolor vectors with non-brand gradients or use individual track hues outside specs.
                    </p>
                </div>
            </div>
        </section>
    </main>

    <footer class="border-t border-white/5 py-8 text-center text-xs text-zinc-500 font-mono">
        <p>© 2026 ABRAMSOFT. All rights reserved. Version 1.0 Standalone SPEC.</p>
    </footer>

    <div id="toast" class="fixed bottom-6 right-6 z-50 bg-zinc-950/90 border border-emerald-brand text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-semibold opacity-0 pointer-events-none transition-all duration-300">
        <div class="h-2 w-2 rounded-full bg-emerald-brand animate-ping"></div>
        <span id="toastMsg">Copied successfully!</span>
    </div>

    <script>
        function copyColor(hex, name) {
            navigator.clipboard.writeText(hex).then(() => {
                const toast = document.getElementById('toast');
                const toastMsg = document.getElementById('toastMsg');
                toastMsg.innerText = "Copied " + name + " (" + hex + ")!";
                toast.classList.remove('opacity-0', 'pointer-events-none');
                setTimeout(() => {
                    toast.classList.add('opacity-0', 'pointer-events-none');
                }, 2000);
            });
        }

        function updateSpecimens(value) {
            const val = value || "...";
            document.getElementById('specimenDisplay').innerText = val;
            document.getElementById('specimenLuxury').innerText = val;
            document.getElementById('specimenSans').innerText = val;
        }

        function toggleCard() {
            const card = document.getElementById('bizCard');
            card.classList.toggle('flipped');
        }
    </script>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "abramsoft_brand_guidelines_offline.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#08080A] text-[#F5F5F7] selection:bg-[#1BB080]/30 selection:text-white font-sans overflow-x-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-tr from-[#1BB080]/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-[#24D09B]/5 to-transparent blur-[130px] rounded-full pointer-events-none" />

      <div className="print:hidden">
        <Navbar />
      </div>

      {/* HEADER SECTION */}
      <header className="relative pt-36 pb-12 print:pt-12 print:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1BB080]/10 border border-[#1BB080]/20 text-[#1BB080] text-[11px] font-mono tracking-wider uppercase w-fit">
                <span className="h-2 w-2 rounded-full bg-[#1BB080] animate-pulse" />
                Approved · v1.0
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.05] text-white">
                ABRAMSOFT Guidelines
              </h1>
              <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed mt-2">
                The official visual specification for ABRAHAMS SOFT. A high-fidelity geometric monogram forming a glassy, dimensional &quot;A&quot; arch, anchored by an automated tech-system node. Built on architectural principles of precision, code excellence, and growth.
              </p>
            </div>
            
            {/* Quick Action Download Buttons */}
            <div className="flex flex-wrap gap-3 shrink-0 print:hidden">
              <button
                onClick={handleDownloadSVG}
                className="inline-flex items-center gap-2 px-4 h-11 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs border border-white/10 transition-all active:scale-95 cursor-pointer"
              >
                <Download className="h-4 w-4 text-[#1BB080]" />
                <span>Download SVG</span>
              </button>
              <button
                onClick={handlePrintPDF}
                className="inline-flex items-center gap-2 px-4 h-11 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs border border-white/10 transition-all active:scale-95 cursor-pointer"
              >
                <FileDown className="h-4 w-4 text-[#1BB080]" />
                <span>Download PDF Brand Sheet</span>
              </button>
              <button
                onClick={handleDownloadHTML}
                className="inline-flex items-center gap-2 px-4 h-11 rounded-xl bg-[#1BB080] hover:bg-[#24D09B] text-zinc-950 font-bold text-xs shadow-[0_4px_20px_rgba(27,176,128,0.25)] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Code2 className="h-4 w-4" />
                <span>Download HTML Page</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO / THE SHOWCASE MARK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative overflow-hidden bg-gradient-to-b from-[#0E0E12]/80 to-[#0A0A0E]/80 border border-white/5 rounded-[24px] p-8 sm:p-16 flex flex-col items-center justify-center min-h-[400px]">
          {/* Subtle Grid Backdrop inside the card */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_center,#000_30%,transparent_85%)] pointer-events-none" />
          
          {/* Metadata Overlay tags */}
          <div className="absolute top-6 left-6 flex gap-6 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />GRID 100</span>
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />EMERALD &amp; MINT</span>
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />v1.0</span>
          </div>

          {/* Large glowing Logo mark */}
          <div className="relative group cursor-pointer transition-transform duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1BB080] to-[#24D09B] opacity-15 blur-3xl rounded-full scale-110" />
            
            <svg
              className="h-44 w-44 sm:h-52 sm:w-52 shrink-0 filter drop-shadow-[0_8px_24px_rgba(27,176,128,0.25)] relative z-10"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 28 72 L 50 26 L 72 72"
                stroke="url(#heroGlassyAFrame)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 39 52 L 61 52"
                stroke="url(#heroGlassyCrossbar)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M 31 66 L 50 29.5 L 69 66"
                stroke="url(#heroWhiteHighlight)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.65"
              />
              <path
                d="M 41.5 50 L 58.5 50"
                stroke="url(#heroWhiteHighlight)"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.65"
              />
              <circle cx="50" cy="42" r="3.2" fill="#ffffff" className="animate-pulse" />
              <defs>
                <linearGradient id="heroGlassyAFrame" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#24d09b" />
                  <stop offset="40%" stopColor="#1bb080" />
                  <stop offset="100%" stopColor="#0d6a4c" />
                </linearGradient>
                <linearGradient id="heroGlassyCrossbar" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2ee0a5" />
                  <stop offset="100%" stopColor="#1bb080" />
                </linearGradient>
                <linearGradient id="heroWhiteHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* CORE SPEC SECTIONS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 space-y-16">
        
        {/* 01 • GEOMETRY & CONSTRUCTION */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-sm font-semibold tracking-wider text-[#1BB080] uppercase">01 · Geometry &amp; Construction</h2>
              <p className="text-xs text-zinc-500 mt-1">Drawn on a 100-unit master engineering canvas. Coordinates and safety margins.</p>
            </div>
            <div className="font-mono text-xs text-zinc-600">GEOMETRY</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Grid construction representation */}
            <div className="bg-[#0E0E12] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <h3 className="font-mono text-[10.5px] text-zinc-500 uppercase tracking-wider mb-6">Grid Construction Map</h3>
              
              {/* Construction Canvas */}
              <div className="aspect-square w-full max-w-[340px] mx-auto bg-zinc-950/50 border border-dashed border-[#1BB080]/20 rounded-xl relative flex items-center justify-center p-4">
                {/* Simulated blueprint grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(27,176,128,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(27,176,128,0.06)_1px,transparent_1px)] bg-[size:10%_10%]" />
                
                {/* SVG Construction Diagram */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#1BB080]">
                  {/* Bounding outline */}
                  <rect x="20" y="20" width="60" height="60" stroke="#1BB080" strokeWidth="0.5" strokeDasharray="2 2" fill="none" />
                  
                  {/* Guide lines & dimensions */}
                  <line x1="50" y1="10" x2="50" y2="90" stroke="#1BB080" strokeWidth="0.5" strokeDasharray="1 3" />
                  <line x1="10" y1="52" x2="90" y2="52" stroke="#1BB080" strokeWidth="0.5" strokeDasharray="1 3" />
                  <line x1="10" y1="42" x2="90" y2="42" stroke="#1BB080" strokeWidth="0.5" strokeDasharray="1 3" />

                  {/* Vertices indicator circles */}
                  <circle cx="50" cy="26" r="2.5" fill="none" stroke="#24D09B" strokeWidth="1" />
                  <circle cx="28" cy="72" r="2.5" fill="none" stroke="#24D09B" strokeWidth="1" />
                  <circle cx="72" cy="72" r="2.5" fill="none" stroke="#24D09B" strokeWidth="1" />
                  <circle cx="39" cy="52" r="1.5" fill="none" stroke="#24D09B" strokeWidth="1" />
                  <circle cx="61" cy="52" r="1.5" fill="none" stroke="#24D09B" strokeWidth="1" />
                  
                  {/* Text callouts */}
                  <text x="50" y="21" fill="#24D09B" fontSize="5" fontFamily="monospace" textAnchor="middle">y=26</text>
                  <text x="20" y="75" fill="#24D09B" fontSize="5" fontFamily="monospace">A(28, 72)</text>
                  <text x="64" y="75" fill="#24D09B" fontSize="5" fontFamily="monospace">B(72, 72)</text>
                  <text x="30" y="50" fill="#1BB080" fontSize="4.5" fontFamily="monospace">y=52</text>
                  
                  {/* Logo overlay with low opacity */}
                  <path d="M 28 72 L 50 26 L 72 72" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
                  <path d="M 39 52 L 61 52" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity="0.3" />
                  <circle cx="50" cy="42" r="4" fill="none" stroke="#ffffff" strokeWidth="0.75" />
                  <circle cx="50" cy="42" r="1.5" fill="#ffffff" />
                </svg>
              </div>

              <ul className="space-y-3 mt-6">
                <li className="flex gap-3 items-start text-xs text-zinc-400">
                  <span className="font-mono text-[9px] text-[#1BB080] bg-[#1BB080]/10 border border-[#1BB080]/25 px-2 py-0.5 rounded shrink-0">01</span>
                  <span><strong>Three Interlocking Paths:</strong> Drawn on a 100x100 engineering matrix. Apex vertex sits perfectly centered at (50, 26). Base anchors ground at x=28 and x=72, y=72.</span>
                </li>
                <li className="flex gap-3 items-start text-xs text-zinc-400">
                  <span className="font-mono text-[9px] text-[#1BB080] bg-[#1BB080]/10 border border-[#1BB080]/25 px-2 py-0.5 rounded shrink-0">02</span>
                  <span><strong>Floating Core Hub:</strong> Playhead-style circle (cx=50, cy=42, r=3.2) floats symmetrically in the negative-space arch. Represents central intelligence and AI services.</span>
                </li>
                <li className="flex gap-3 items-start text-xs text-zinc-400">
                  <span className="font-mono text-[9px] text-[#1BB080] bg-[#1BB080]/10 border border-[#1BB080]/25 px-2 py-0.5 rounded shrink-0">03</span>
                  <span><strong>Optical Balance Weight:</strong> Arch stroke is locked at 12 units thickness; crossbar at 10 units for structural contrast. Scaling is locked to uniform aspect ratios.</span>
                </li>
              </ul>
            </div>

            {/* Clearspace and minimum sizes */}
            <div className="bg-[#0E0E12] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <h3 className="font-mono text-[10.5px] text-zinc-500 uppercase tracking-wider mb-6">Clearspace &amp; Size Limits</h3>
              
              {/* Clearspace display */}
              <div className="aspect-square w-full max-w-[340px] mx-auto relative flex items-center justify-center">
                {/* Outer dashed border represents boundary */}
                <div className="absolute inset-[10%] border border-dashed border-rose-500/30 rounded-xl flex items-center justify-center">
                  {/* Inner container */}
                  <div className="absolute inset-[20%] border border-white/15 rounded-lg flex items-center justify-center bg-zinc-950/20">
                    <svg viewBox="0 0 100 100" className="w-20 h-20 text-[#1BB080]/80">
                      <path d="M 28 72 L 50 26 L 72 72" stroke="url(#csA)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 39 52 L 61 52" stroke="url(#csB)" strokeWidth="10" strokeLinecap="round" />
                      <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                      <defs>
                        <linearGradient id="csA" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#24d09b" /><stop offset="100%" stopColor="#1bb080" />
                        </linearGradient>
                        <linearGradient id="csB" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2ee0a5" /><stop offset="100%" stopColor="#1bb080" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Margins text markings */}
                <span className="absolute top-[5%] left-1/2 -translate-x-1/2 font-mono text-[9px] text-rose-400 bg-[#08080A] px-1.5 uppercase tracking-wider">½x clearspace</span>
                <span className="absolute bottom-[5%] left-1/2 -translate-x-1/2 font-mono text-[9px] text-rose-400 bg-[#08080A] px-1.5 uppercase tracking-wider">½x clearspace</span>
                <span className="absolute left-[2%] top-1/2 -translate-y-1/2 font-mono text-[9px] text-rose-400 bg-[#08080A] px-1.5 rotate-90 uppercase tracking-wider">½x clearspace</span>
                <span className="absolute right-[2%] top-1/2 -translate-y-1/2 font-mono text-[9px] text-rose-400 bg-[#08080A] px-1.5 -rotate-90 uppercase tracking-wider">½x clearspace</span>
              </div>

              <ul className="space-y-3 mt-6">
                <li className="flex gap-3 items-start text-xs text-zinc-400">
                  <span className="font-mono text-[9px] text-[#1BB080] bg-[#1BB080]/10 border border-[#1BB080]/25 px-2 py-0.5 rounded shrink-0">01</span>
                  <span><strong>The Safety Boundary:</strong> A clear protection area of &frac12;x (where x is the width of the monogram arch) must be maintained at all times. No text, graphic, or secondary lines may cross this boundary.</span>
                </li>
                <li className="flex gap-3 items-start text-xs text-zinc-400">
                  <span className="font-mono text-[9px] text-[#1BB080] bg-[#1BB080]/10 border border-[#1BB080]/25 px-2 py-0.5 rounded shrink-0">02</span>
                  <span><strong>Digital Scaling Limit:</strong> The standalone symbol must never be rendered below 24px wide on digital displays to avoid optical distortion of the central glowing node.</span>
                </li>
                <li className="flex gap-3 items-start text-xs text-zinc-400">
                  <span className="font-mono text-[9px] text-[#1BB080] bg-[#1BB080]/10 border border-[#1BB080]/25 px-2 py-0.5 rounded shrink-0">03</span>
                  <span><strong>Print Scaling Limit:</strong> In physical corporate stationery or print formats, the minimum size is locked to 12mm wide to guarantee premium vector fidelity.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 02 • COLOR SYSTEM */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-sm font-semibold tracking-wider text-[#1BB080] uppercase">02 · Color System</h2>
              <p className="text-xs text-zinc-500 mt-1">Dual-theme functional palette. Coordinates defined in HEX and OKLCH color spaces.</p>
            </div>
            <div className="font-mono text-xs text-zinc-600">COLOR</div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {colors.map((color) => (
              <div
                key={color.name}
                onClick={() => copyToClipboard(color.hex, color.name)}
                className="group relative rounded-2xl bg-[#0E0E12] border border-white/5 p-4 flex flex-col justify-between min-h-[180px] cursor-pointer hover:border-white/15 transition-all active:scale-[0.98]"
              >
                {/* Swatch color bubble */}
                <div className={`w-full aspect-[1.3/1] rounded-xl relative overflow-hidden flex items-center justify-center border ${color.borderClass} ${color.bgClass}`}>
                  <span className="absolute top-2 left-2 font-mono text-[8px] uppercase tracking-wider bg-black/30 backdrop-blur-md px-1.5 py-0.5 rounded text-white">
                    {color.theme}
                  </span>
                  
                  {/* Subtle hover icon */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-md p-1.5 rounded-full">
                    {copiedColor === color.hex ? (
                      <Check className="h-4 w-4 text-[#1BB080] animate-pulse" />
                    ) : (
                      <Copy className="h-4 w-4 text-white" />
                    )}
                  </div>
                </div>

                <div className="pt-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-semibold text-xs text-white group-hover:text-[#1BB080] transition-colors">{color.name}</span>
                    <span className="font-mono text-[9px] text-zinc-500 font-semibold">{color.hex}</span>
                  </div>
                  <p className="font-mono text-[8.5px] text-zinc-600 tracking-wider uppercase">{color.oklch}</p>
                  <p className="text-[10px] text-zinc-400 leading-snug line-clamp-2 pt-1 font-sans">{color.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Copy Notification Toast */}
          <AnimatePresence>
            {copiedText && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="fixed bottom-6 right-6 z-50 bg-zinc-950/90 backdrop-blur-md border border-[#1BB080] text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-semibold"
              >
                <div className="h-2 w-2 rounded-full bg-[#1BB080] animate-ping" />
                <span>Copied {copiedText} ({copiedColor})!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* 03 • TYPOGRAPHIC SYSTEMS */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-sm font-semibold tracking-wider text-[#1BB080] uppercase">03 · Typographic Systems</h2>
              <p className="text-xs text-zinc-500 mt-1">Sleek type pairings providing architectural structure and modern tech readability.</p>
            </div>
            <div className="font-mono text-xs text-zinc-600">TYPOGRAPHY</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {typographies.map((type) => (
              <div key={type.name} className="bg-[#0E0E12] border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">{type.name}</h4>
                      <p className="text-[9px] text-zinc-500 uppercase font-mono tracking-wider">{type.type}</p>
                    </div>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-[#1BB080]/10 text-[#1BB080] border border-[#1BB080]/20 font-mono uppercase">
                      {type.weight}
                    </span>
                  </div>
                  <p className="text-[11.5px] text-zinc-400 leading-relaxed font-sans min-h-[50px]">{type.role}</p>
                </div>

                <div className="bg-zinc-950/40 p-4 rounded-xl border border-white/5 min-h-[100px] flex items-center justify-center">
                  <p className={`text-center text-xs ${type.cssClass} leading-relaxed text-zinc-300`}>
                    {type.sample}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Live Playground */}
          <div className="bg-[#0E0E12] border border-white/5 rounded-2xl p-6 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
              <h4 className="font-display font-semibold text-xs text-white">Live Specimen Playground</h4>
              <span className="text-[9px] text-zinc-500 font-mono uppercase">Interactively verify weights &amp; scales</span>
            </div>

            <input
              type="text"
              value={typeTestText}
              onChange={(e) => setTypeTestText(e.target.value)}
              placeholder="Type to test fonts..."
              className="w-full h-11 px-4 rounded-xl bg-zinc-950/50 border border-white/5 text-xs focus:border-[#1BB080]/50 focus:outline-none focus:ring-1 focus:ring-[#1BB080]/50 transition-colors"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-zinc-950/30 rounded-xl border border-white/5">
                <p className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Space Grotesk (Display)</p>
                <p className="font-display font-bold text-sm text-white break-words">{typeTestText || "..."}</p>
              </div>
              <div className="p-4 bg-zinc-950/30 rounded-xl border border-white/5">
                <p className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Cormorant Garamond (Italic)</p>
                <p className="font-luxury italic text-base text-white break-words leading-tight">{typeTestText || "..."}</p>
              </div>
              <div className="p-4 bg-zinc-950/30 rounded-xl border border-white/5">
                <p className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Inter (Body / UI)</p>
                <p className="font-sans text-xs text-zinc-400 break-words leading-relaxed">{typeTestText || "..."}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 • DIGITAL & SOCIAL APPLICATIONS */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-sm font-semibold tracking-wider text-[#1BB080] uppercase">04 · Applications</h2>
              <p className="text-xs text-zinc-500 mt-1">Bento specifications of the brand assets: web, layouts, profiles, loaders, avatars.</p>
            </div>
            <div className="font-mono text-xs text-zinc-600">APPLICATIONS</div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            
            {/* Favicon Browser mockup */}
            <div className="col-span-12 md:col-span-4 bg-[#0E0E12] border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-6">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Favicon</span>
                <span className="font-mono text-[9px] text-zinc-600">16–32PX</span>
              </div>

              <div className="flex-1 flex items-center justify-center py-4 bg-zinc-950/40 rounded-xl border border-white/5 min-h-[140px]">
                {/* Browser Tab mock */}
                <div className="bg-[#18181C] border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2 max-w-[190px] shadow-lg">
                  {/* Favicon mini-SVG representation */}
                  <svg viewBox="0 0 100 100" className="h-3.5 w-3.5 text-[#1BB080]">
                    <path d="M 28 72 L 50 26 L 72 72" stroke="url(#miniFav)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="50" cy="42" r="4" fill="#ffffff" />
                    <defs>
                      <linearGradient id="miniFav" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#24D09B" /><stop offset="100%" stopColor="#1BB080" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-[10px] text-zinc-300 font-sans truncate font-medium max-w-[100px]">ABRAMSOFT — Tech Partner</span>
                  <span className="text-zinc-500 hover:text-white cursor-pointer text-xs leading-none shrink-0 ml-1">×</span>
                </div>
              </div>

              <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                Rendered at low resolutions, the crossbar is omitted and the glowing hub sits prominently in the apex vector space.
              </p>
            </div>

            {/* App Icon 1024px */}
            <div className="col-span-12 md:col-span-4 bg-[#0E0E12] border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-6">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">App Icon</span>
                <span className="font-mono text-[9px] text-zinc-600">1024PX</span>
              </div>

              <div className="flex-1 flex items-center justify-center py-4 bg-zinc-950/40 rounded-xl border border-white/5 min-h-[140px]">
                <div className="h-24 w-24 rounded-[22px] bg-gradient-to-tr from-[#08080A] to-[#121218] border border-white/10 p-4 flex items-center justify-center shadow-xl relative overflow-hidden">
                  {/* Glass highlight */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-60 pointer-events-none" />
                  <svg viewBox="0 0 100 100" className="h-12 w-12 text-[#1BB080] filter drop-shadow-[0_4px_10px_rgba(27,176,128,0.3)]">
                    <path d="M 28 72 L 50 26 L 72 72" stroke="url(#appIconGrad)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 39 52 L 61 52" stroke="url(#appIconCross)" strokeWidth="10" strokeLinecap="round" />
                    <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                    <defs>
                      <linearGradient id="appIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#24D09B" /><stop offset="100%" stopColor="#1BB080" />
                      </linearGradient>
                      <linearGradient id="appIconCross" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2ee0a5" /><stop offset="100%" stopColor="#1bb080" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                App icon features dark radial gradients with high depth, subtle glassy surface rim lighting and inner glow parameters.
              </p>
            </div>

            {/* Sidebar Branding lockup mockup */}
            <div className="col-span-12 md:col-span-4 bg-[#0E0E12] border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-6">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">In-product Brand Panel</span>
                <span className="font-mono text-[9px] text-zinc-600">SIDEBAR PANEL</span>
              </div>

              <div className="flex-1 flex items-center justify-center bg-zinc-950/40 rounded-xl border border-white/5 min-h-[140px] p-4">
                {/* Simulated Sidebar */}
                <div className="w-full max-w-[210px] bg-[#0A0A0E] border border-white/5 rounded-xl p-3 flex flex-col gap-3 shadow-2xl">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-2.5">
                    <svg viewBox="0 0 100 100" className="h-5 w-5 text-[#1BB080]">
                      <path d="M 28 72 L 50 26 L 72 72" stroke="url(#sideGrad)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 39 52 L 61 52" stroke="url(#sideGrad)" strokeWidth="10" strokeLinecap="round" />
                      <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                      <defs>
                        <linearGradient id="sideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#24D09B" /><stop offset="100%" stopColor="#1BB080" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="font-display font-black text-[10px] tracking-wider text-white">ABRAMSOFT</span>
                    <span className="ml-auto font-mono text-[7px] text-[#1BB080] border border-[#1BB080]/30 rounded px-1 py-0.5 bg-[#1BB080]/5 leading-none">PRO</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="h-2 rounded bg-white/10 w-[90%]" />
                    <div className="h-2 rounded bg-[#1BB080]/15 w-[80%]" />
                    <div className="h-2 rounded bg-white/5 w-[70%]" />
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                In UI frameworks, the horizontal Standard Lockup is paired with a secondary green Pro/Enterprise indicator badge.
              </p>
            </div>

            {/* Loading state animation */}
            <div className="col-span-12 md:col-span-4 bg-[#0E0E12] border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-6">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Loading Animation</span>
                <span className="font-mono text-[9px] text-zinc-600">ANIMATED STATE</span>
              </div>

              <div className="flex-1 flex items-center justify-center bg-zinc-950/40 rounded-xl border border-white/5 min-h-[140px] p-4">
                <div className="relative flex items-center justify-center">
                  {/* Pulsing Backlight */}
                  <div className="absolute h-16 w-16 bg-[#1BB080]/20 rounded-full blur-xl animate-pulse" />
                  
                  {/* Rotating Outer Loader Rings */}
                  <div className="animate-spin duration-[4s] ease-linear">
                    <svg className="h-16 w-16 text-[#1BB080]" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" strokeDasharray="60 40" strokeLinecap="round" />
                    </svg>
                  </div>
                  
                  {/* Pulsing center dot representing tech node */}
                  <div className="absolute h-3.5 w-3.5 bg-white rounded-full border-2 border-[#1BB080] animate-ping" />
                  <div className="absolute h-2.5 w-2.5 bg-white rounded-full border border-zinc-950" />
                </div>
              </div>

              <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                The hub dot scales continuously inside a rotating emerald segment circle, mirroring data network transactions.
              </p>
            </div>

            {/* Social avatar circle */}
            <div className="col-span-12 md:col-span-4 bg-[#0E0E12] border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-6">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Social Profile Avatar</span>
                <span className="font-mono text-[9px] text-zinc-600">CIRCULAR SPEC</span>
              </div>

              <div className="flex-1 flex items-center justify-center bg-zinc-950/40 rounded-xl border border-white/5 min-h-[140px] p-4">
                <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-[#1BB080] to-[#24D09B] p-0.5 shadow-2xl relative group">
                  <div className="absolute inset-0 bg-white/10 rounded-full" />
                  <div className="h-full w-full rounded-full bg-[#08080A] flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 100 100" className="h-9 w-9 text-[#1BB080]">
                      <path d="M 28 72 L 50 26 L 72 72" stroke="url(#scGrad)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 39 52 L 61 52" stroke="url(#scGrad)" strokeWidth="10" strokeLinecap="round" />
                      <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                      <defs>
                        <linearGradient id="scGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#24D09B" /><stop offset="100%" stopColor="#1BB080" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                The circular asset provides a thin glowing boundary stroke of &frac12;pt thickness, ensuring high separation against black backdrops.
              </p>
            </div>

            {/* Wordmark lockups */}
            <div className="col-span-12 md:col-span-4 bg-[#0E0E12] border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-6">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Horizontal Wordmark Lockup</span>
                <span className="font-mono text-[9px] text-zinc-600">LOCKUP FORMAT</span>
              </div>

              <div className="flex-1 flex items-center justify-center bg-zinc-950/40 rounded-xl border border-white/5 min-h-[140px] p-4">
                <div className="flex items-center gap-3.5">
                  <svg viewBox="0 0 100 100" className="h-8.5 w-8.5 text-[#1BB080] shrink-0">
                    <path d="M 28 72 L 50 26 L 72 72" stroke="url(#hLkGrad)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 39 52 L 61 52" stroke="url(#hLkGrad)" strokeWidth="10" strokeLinecap="round" />
                    <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                    <defs>
                      <linearGradient id="hLkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#24D09B" /><stop offset="100%" stopColor="#1BB080" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex flex-col">
                    <span className="flex items-baseline font-display leading-none tracking-[0.05em]">
                      <span className="text-sm font-black tracking-wider text-white">ABRAM</span>
                      <span className="text-sm font-black text-[#1BB080] ml-0.5 tracking-wider">SOFT</span>
                    </span>
                    <span className="text-[4.8px] font-mono text-zinc-400 tracking-[0.02em] uppercase mt-1 leading-none select-none">
                      CRAFTING DIGITAL EXCELLENCE
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                Horizontal Standard Lockup uses clean &quot;Space Grotesk&quot; font weight 900, maintaining consistent horizontal safety baselines.
              </p>
            </div>

            {/* Vertical Stacked lockup */}
            <div className="col-span-12 md:col-span-6 bg-[#0E0E12] border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-6">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Stacked wordmark format</span>
                <span className="font-mono text-[9px] text-zinc-600">SQUARE CONTEXT</span>
              </div>

              <div className="flex-1 flex items-center justify-center bg-zinc-950/40 rounded-xl border border-white/5 min-h-[160px] p-4">
                <div className="flex flex-col items-center text-center gap-3.5">
                  <svg viewBox="0 0 100 100" className="h-11 w-11 text-[#1BB080]">
                    <path d="M 28 72 L 50 26 L 72 72" stroke="url(#vLkGrad)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 39 52 L 61 52" stroke="url(#vLkGrad)" strokeWidth="10" strokeLinecap="round" />
                    <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                    <defs>
                      <linearGradient id="vLkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#24D09B" /><stop offset="100%" stopColor="#1BB080" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex flex-col items-center">
                    <h5 className="font-display font-black text-sm tracking-[0.1em] text-white">ABRAMSOFT</h5>
                    <p className="font-mono text-[5.2px] text-zinc-400 tracking-[0.025em] uppercase mt-1 leading-none select-none">CRAFTING DIGITAL EXCELLENCE</p>
                  </div>
                </div>
              </div>

              <p className="text-[11.5px] text-zinc-400 font-sans leading-relaxed">
                The stacked version is optimized for central framing layouts, printed brochures, stickers, and t-shirt backing decals.
              </p>
            </div>

            {/* Dual Theme Light mode mockup */}
            <div className="col-span-12 md:col-span-6 bg-[#0E0E12] border border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-6">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Light Theme Contrast</span>
                <span className="font-mono text-[9px] text-zinc-600">LIGHT SPEC</span>
              </div>

              <div className="flex-1 flex items-center justify-center bg-[#FAFAFC] rounded-xl border border-black/5 min-h-[160px] p-4">
                <div className="flex items-center gap-3.5">
                  <svg viewBox="0 0 100 100" className="h-8.5 w-8.5 text-[#1BB080] shrink-0">
                    <path d="M 28 72 L 50 26 L 72 72" stroke="url(#lightSpecGrad)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 39 52 L 61 52" stroke="url(#lightSpecGrad)" strokeWidth="10" strokeLinecap="round" />
                    <circle cx="50" cy="42" r="3.2" fill="#1BB080" />
                    <defs>
                      <linearGradient id="lightSpecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#24D09B" /><stop offset="100%" stopColor="#1BB080" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex flex-col">
                    <span className="flex items-baseline font-display leading-none tracking-[0.05em]">
                      <span className="text-sm font-black tracking-wider text-zinc-900">ABRAM</span>
                      <span className="text-sm font-black text-[#1BB080] ml-0.5 tracking-wider">SOFT</span>
                    </span>
                    <span className="text-[4.8px] font-mono text-zinc-500 tracking-[0.02em] uppercase mt-1 leading-none select-none">
                      CRAFTING DIGITAL EXCELLENCE
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-[11.5px] text-zinc-500 font-sans leading-relaxed">
                On off-white bases (#FAFAFC), the wordmark text transitions to ink-black (#111114) while the core dot gains a rich green fill.
              </p>
            </div>

          </div>
        </section>

        {/* 05 • INTERACTIVE 3D BUSINESS CARD */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-sm font-semibold tracking-wider text-[#1BB080] uppercase">05 · Corporate Stationery</h2>
              <p className="text-xs text-zinc-500 mt-1">Interactive 3D business card mockup. Click or tap to inspect back coordinates.</p>
            </div>
            <div className="font-mono text-xs text-zinc-600">STATIONERY</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#0E0E12] border border-white/5 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#1BB080]/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1BB080] uppercase tracking-wider">
                  <CreditCard className="h-4 w-4" />
                  <span>Interactive Card</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white">Stationery Specs</h3>
              </div>

              <div className="text-sm text-zinc-400 space-y-4 leading-relaxed font-sans">
                <p>
                  Built on heavy-weight 450gsm soft-touch tactile paper. Features glowing emerald glassmorphic holographic foil details.
                </p>
                <p className="text-xs text-zinc-500 italic">
                  *Click on the flip action button below or click anywhere on the card to rotate and verify contact points.
                </p>
              </div>

              <div>
                <button
                  onClick={() => setIsCardFlipped(!isCardFlipped)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-850 border border-white/5 hover:border-[#1BB080] text-xs font-semibold text-white transition-all active:scale-95 shadow-sm"
                >
                  <RotateCw className="h-4 w-4 animate-spin-slow" />
                  <span>Flip to {isCardFlipped ? "Front" : "Back Details"}</span>
                </button>
              </div>
            </div>

            {/* 3D Card Stage */}
            <div className="lg:col-span-7 flex justify-center items-center py-6">
              <div 
                className="w-full max-w-[420px] h-[250px] relative cursor-pointer group"
                style={{ perspective: "1000px" }}
                onClick={() => setIsCardFlipped(!isCardFlipped)}
              >
                <div 
                  className="w-full h-full relative transition-transform duration-700"
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: isCardFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                  }}
                >
                  
                  {/* CARD FRONT */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-2xl p-8 flex flex-col justify-between overflow-hidden shadow-2xl border border-white/10 bg-[#0C0C10] select-none"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Visual geometric frame elements */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#1BB080]/10 rounded-tl-2xl" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#1BB080]/10 rounded-br-2xl" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,176,128,0.06)_0%,transparent_60%)] pointer-events-none" />

                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-mono text-[#1BB080] uppercase tracking-[0.2em]">Corporate Suite</span>
                      <span className="text-[8px] text-zinc-600 font-mono">ID: AS-9048-SPEC</span>
                    </div>

                    <div className="flex flex-col items-center justify-center flex-1">
                      {/* Logo Frame */}
                      <svg viewBox="0 0 100 100" className="h-11 w-11 text-[#1BB080] filter drop-shadow-[0_4px_12px_rgba(27,176,128,0.25)]">
                        <path d="M 28 72 L 50 26 L 72 72" stroke="url(#cFr)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M 39 52 L 61 52" stroke="url(#cFr)" strokeWidth="10" strokeLinecap="round" />
                        <circle cx="50" cy="42" r="3" fill="#ffffff" />
                        <defs>
                          <linearGradient id="cFr" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#24D09B" /><stop offset="100%" stopColor="#1BB080" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="font-display font-black text-xs tracking-[0.25em] text-white mt-2">ABRAMSOFT</span>
                    </div>

                    <div className="flex justify-between items-end">
                      <span className="text-[8.5px] text-zinc-500 font-mono uppercase tracking-wider">ABRAMSOFT Brand guidelines</span>
                      <span className="text-[8.5px] text-zinc-400 font-mono flex items-center gap-1">
                        <Globe className="h-2.5 w-2.5 text-[#1BB080]" /> www.abramsoft.com
                      </span>
                    </div>
                  </div>

                  {/* CARD BACK */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-2xl p-7 flex flex-col justify-between overflow-hidden shadow-2xl border border-white/10 bg-[#08080C] select-none"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(27,176,128,0.05)_0%,transparent_60%)] pointer-events-none" />
                    
                    {/* Header */}
                    <div className="flex justify-between items-start border-b border-white/5 pb-2">
                      <div>
                        <h4 className="font-display font-black text-xs text-white tracking-wider">
                          ABRAMSOFT
                        </h4>
                        <p className="text-[6.2px] text-[#1BB080] font-mono uppercase tracking-[0.025em] leading-none mt-1 select-none">CRAFTING DIGITAL EXCELLENCE</p>
                      </div>
                      <span className="bg-[#1BB080]/10 text-[#1BB080] border border-[#1BB080]/20 rounded px-1.5 py-0.5 text-[7px] font-mono uppercase">
                        Brand Specification
                      </span>
                    </div>

                    {/* Employee Profile */}
                    <div className="my-auto flex items-center justify-between">
                      <div className="space-y-1">
                        <h5 className="font-display font-bold text-sm text-white">Abrar Ahmad</h5>
                        <p className="text-[9px] text-[#1BB080] font-mono uppercase tracking-wider">CEO</p>
                      </div>
                    </div>

                    {/* Footer Contact */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-white/5 pt-2 text-[8px] text-zinc-400 font-mono">
                      <div className="flex items-center gap-1.5">
                        <Phone className="h-2.5 w-2.5 text-[#1BB080] shrink-0" />
                        <span>+92 313 4134 482</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Globe className="h-2.5 w-2.5 text-[#1BB080] shrink-0" />
                        <span>www.abramsoft.com</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Mail className="h-2.5 w-2.5 text-[#1BB080] shrink-0" />
                        <span>abramsoftofficial@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-2.5 w-2.5 text-[#1BB080] shrink-0" />
                        <span className="truncate">Lahore, Punjab 54700</span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06 • LOGO USAGE RULES (DO / DON'T) */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-sm font-semibold tracking-wider text-[#1BB080] uppercase">06 · Usage Rules</h2>
              <p className="text-xs text-zinc-500 mt-1">Four rules to preserve monogram clarity. Distortions destroy precision.</p>
            </div>
            <div className="font-mono text-xs text-zinc-600">RULES</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* DO card */}
            <div className="bg-[#0E0E12] border border-white/5 rounded-2xl p-5 space-y-4">
              <div className="aspect-[1.2/1] bg-zinc-950/40 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                <span className="absolute top-3 left-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-mono uppercase px-2 py-0.5 rounded">
                  DO
                </span>
                
                {/* Perfect Logo */}
                <svg viewBox="0 0 100 100" className="h-14 w-14 text-[#1BB080]">
                  <path d="M 28 72 L 50 26 L 72 72" stroke="url(#doA)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 39 52 L 61 52" stroke="url(#doB)" strokeWidth="10" strokeLinecap="round" />
                  <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                  <defs>
                    <linearGradient id="doA" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#24D09B" /><stop offset="100%" stopColor="#1BB080" />
                    </linearGradient>
                    <linearGradient id="doB" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2ee0a5" /><stop offset="100%" stopColor="#1bb080" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="text-[11.5px] text-zinc-400 leading-relaxed font-sans">
                Always use approved vector geometry, linear color pairings and maintain &frac12;x padding clearspaces.
              </p>
            </div>

            {/* DON'T rotate card */}
            <div className="bg-[#0E0E12] border border-white/5 rounded-2xl p-5 space-y-4">
              <div className="aspect-[1.2/1] bg-zinc-950/40 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                <span className="absolute top-3 left-3 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[9px] font-mono uppercase px-2 py-0.5 rounded">
                  DON&apos;T
                </span>
                
                {/* Rotated Logo */}
                <div className="rotate-[18deg]">
                  <svg viewBox="0 0 100 100" className="h-14 w-14 text-[#1BB080]">
                    <path d="M 28 72 L 50 26 L 72 72" stroke="url(#doA)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 39 52 L 61 52" stroke="url(#doB)" strokeWidth="10" strokeLinecap="round" />
                    <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                  </svg>
                </div>
              </div>
              <p className="text-[11.5px] text-zinc-400 leading-relaxed font-sans">
                Never skew, tilt or rotate the emblem. The paths must stand upright on straight base axes.
              </p>
            </div>

            {/* DON'T stretch card */}
            <div className="bg-[#0E0E12] border border-white/5 rounded-2xl p-5 space-y-4">
              <div className="aspect-[1.2/1] bg-zinc-950/40 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                <span className="absolute top-3 left-3 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[9px] font-mono uppercase px-2 py-0.5 rounded">
                  DON&apos;T
                </span>
                
                {/* Stretched Logo */}
                <div className="scale-x-150 scale-y-75">
                  <svg viewBox="0 0 100 100" className="h-14 w-14 text-[#1BB080]">
                    <path d="M 28 72 L 50 26 L 72 72" stroke="url(#doA)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 39 52 L 61 52" stroke="url(#doB)" strokeWidth="10" strokeLinecap="round" />
                    <circle cx="50" cy="42" r="3.2" fill="#ffffff" />
                  </svg>
                </div>
              </div>
              <p className="text-[11.5px] text-zinc-400 leading-relaxed font-sans">
                Never distort or compress proportions. Always scale elements uniformly with strict aspect locking.
              </p>
            </div>

            {/* DON'T off-brand color card */}
            <div className="bg-[#0E0E12] border border-white/5 rounded-2xl p-5 space-y-4">
              <div className="aspect-[1.2/1] bg-zinc-950/40 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                <span className="absolute top-3 left-3 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[9px] font-mono uppercase px-2 py-0.5 rounded">
                  DON&apos;T
                </span>
                
                {/* Off brand Logo */}
                <svg viewBox="0 0 100 100" className="h-14 w-14 text-rose-400">
                  <path d="M 28 72 L 50 26 L 72 72" stroke="url(#offA)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 39 52 L 61 52" stroke="url(#offB)" strokeWidth="10" strokeLinecap="round" />
                  <circle cx="50" cy="42" r="3.2" fill="#E879F9" />
                  <defs>
                    <linearGradient id="offA" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F472B6" /><stop offset="100%" stopColor="#FB7185" />
                    </linearGradient>
                    <linearGradient id="offB" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F472B6" /><stop offset="100%" stopColor="#C084FC" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="text-[11.5px] text-zinc-400 leading-relaxed font-sans">
                Never recolor vectors with non-brand gradients or use individual track hues outside specs.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER FOOTNOTE */}
      <footer className="border-t border-white/10 py-8 bg-[#07070A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <span>ABRAMSOFT · BRAND SHEET SPECIFICATION v1.0</span>
          <span>6 sections · Space Grotesk / Cormorant Garamond / Inter</span>
        </div>
      </footer>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
