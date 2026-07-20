# AbramSoft Brand Identity Sheet & Style Guide

Welcome to the official Brand Identity Package and Visual Style Guide for the premium **AbramSoft** redesign. This document serves as the single source of truth for the digital agency's branding, typography, color palettes, and motion principles.

---

## 1. Brand Voice & Tone
AbramSoft communicates with architectural clarity, technical authority, and premium elegance. We steer clear of low-quality tech-agency clichés, using minimalist, hyper-precise visual cues to showcase high-performance software engineering, complex AI modeling, and results-driven digital transformations. The aesthetic is clean, responsive, and deeply polished—balancing the sleek depth of developer culture with high-end luxury enterprise consulting.

---

## 2. Logo Design Concept
The new AbramSoft brand identity utilizes a high-tech geometric symbol paired with an architectural wordmark.

### Logo Symbol: The Quantum Prism
* **Concept:** An isometric, three-dimensional interlocking hexagon forming a stylized, abstract "A" and "S" through negative space and dynamic neon light paths.
* **Meaning:** The interlocking facets represent integrated software systems, the deep neural layers of AI, and the flawless delivery of full-cycle IT solutions.
* **SVG Representation (Standard & favicon):**
  ```xml
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-10 h-10">
    <defs>
      <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6D5DFC" />
        <stop offset="100%" stop-color="#00C2FF" />
      </linearGradient>
    </defs>
    <!-- Geometric Hex Prism -->
    <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" fill="none" stroke="url(#brandGrad)" stroke-width="8" stroke-linejoin="round" />
    <path d="M50,15 L50,50 L85,75 M50,50 L15,75" fill="none" stroke="url(#brandGrad)" stroke-width="4" stroke-opacity="0.4" />
    <circle cx="50" cy="50" r="10" fill="url(#brandGrad)" />
  </svg>
  ```

### Wordmark: Geometric Tech
* **Typography:** Rendered in **Outfit** with wide letter spacing (`tracking-wider` or `tracking-widest`), completely capitalized: `ABRAMSOFT`.
* **Vibe:** Swiss modernist, authoritative, clean, and highly technical.

---

## 3. Dual-Theme Color System

To support both premium Dark Mode (default) and Light Mode seamlessly, we use the following color mappings.

### Dark Mode (Primary Theme)
* **Background Base:** Near-black `#08080A` to deep charcoal `#0E0E12` (smooth radial and linear gradients).
* **Glass Panels:** `rgba(255, 255, 255, 0.04)` background, `1px solid rgba(255, 255, 255, 0.08)` border, with a deep `backdrop-blur-xl` and subtle cyan-indigo glow.
* **Primary Brand Gradient:** Electric Blue-Violet to Cyber Cyan (`#6D5DFC` → `#00C2FF`).
* **Text Primary:** Crystal White `#F5F5F7` (excellent readability).
* **Text Muted:** Silver-Gray `#A1A1AA`.
* **Success/Stat Green:** Soft Cyber Neon Green `#3DFFB0`.

### Light Mode (Secondary Theme)
* **Background Base:** Off-white linen `#FAFAFC` to soft mist `#F1F1F4` gradient.
* **Glass Panels:** `rgba(255, 255, 255, 0.65)` background, `1px solid rgba(0, 0, 0, 0.06)` border, `backdrop-blur-xl`, with a soft, diffused drop shadow.
* **Primary Brand Gradient:** Slightly deepened for accessibility: Deep Violet to Royal Teal (`#5A4AE0` → `#0099CC`).
* **Text Primary:** Ink Black `#111114`.
* **Text Muted:** Deep Slate `#5B5B66`.
* **Success/Stat Green:** Emerald Accent `#12B981`.

---

## 4. Typography System

We pair **Outfit** (headings) with **Inter** (body copy) to create a clean, elegant hierarchy that reflects luxury tech:

* **Headings (H1 - H6):** **Outfit** (Google Font)
  * Primary style: `font-medium` to `font-bold`, tight letter spacing (`tracking-tight`), and large scales.
  * H1 (Hero): `56px` on mobile, scaling to `96px` on desktop.
* **Body & UI Elements:** **Inter** (Google Font)
  * Primary style: `font-normal` or `font-medium`, balanced letter spacing (`tracking-normal`), and optimal line heights (`leading-relaxed`) to prevent user fatigue.
* **Technical details / Stats:** **JetBrains Mono**
  * Perfect for stats, tooltips, tags, dates, and technology categories.

---

## 5. Logo Usage Rules
1. **Clear Space:** Maintain a minimum clear space equal to 50% of the logo's width around all sides to preserve visual impact.
2. **Minimum Size:** The wordmark logo should never be displayed below `120px` in width; the standalone symbol icon should never be below `24px` in width.
3. **Contrast Alignment:** On dark backgrounds, always use the white wordmark with the `#6D5DFC` glow; on light backgrounds, use the `#111114` ink-black wordmark with the `#5A4AE0` accent.
4. **No Distortion:** Never stretch, compress, recolor with non-brand hues, or place on overly complex background patterns.

---

## 6. Motion & Visual Interaction Principles
* **Atmospheric Depths:** Floating neon glow blobs with extremely low opacity (`opacity-[0.05]`) drift slowly behind key content sections in dark mode.
* **Micro-Interactions:** Custom tilt-on-hover effects on bento-grid cells, lifting panels 4px on hover with transition times set to standard `cubic-bezier(0.16, 1, 0.3, 1)`.
* **Entrance Choreography:** Elements fade and slide up sequentially on scroll using staggered Framer Motion layout entries.
