import { notFound } from "next/navigation";
import { ProjectDetailClient } from "@/components/project-detail-client";

const projectDetails: Record<string, {
  title: string;
  category: string;
  description: string;
  fullOverview: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  duration: string;
  client: string;
}> = {
  "maqtechs-web-development": {
    title: "MAQTechs",
    category: "Web Development",
    description: "Corporate MAQTechs website built with a strong focus on performance and usability.",
    fullOverview: "MAQTechs needed a state-of-the-art web platform to demonstrate their capabilities as an emerging technology leader. AbramSoft engineered a lightweight, super-responsive React & Next.js ecosystem featuring smooth layouts, custom animations, and a lightning-fast build flow.",
    challenge: "The previous digital footprint was static and did not showcase the company's depth of work in modern IT infrastructure, causing low engagement with corporate clients.",
    solution: "We designed a highly professional, interactive corporate showcase featuring rich layout structures, real-time product features, and high-quality UX components. We optimized the build with custom static generation to ensure near-instantaneous page loads.",
    results: [
      "99/100 Lighthouse performance and accessibility scores",
      "45% increase in average user session duration on first launch",
      "Seamless responsiveness across ultra-wide monitors to legacy mobile viewports",
    ],
    techStack: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    duration: "4 Weeks",
    client: "MAQTechs Global Inc.",
  },
  "puehs-portal": {
    title: "PUEHS Portal",
    category: "Web Development",
    description: "Educational portal with modern design and seamless user experience.",
    fullOverview: "The PUEHS Portal is a high-performance educational and administrative platform built to handle thousands of concurrent queries. AbramSoft designed and engineered a customized portal focusing on ease-of-use for teachers, administrators, and students alike.",
    challenge: "Heavy server loads during grading periods caused frequent crashes, and a complex layout led to high student confusion.",
    solution: "We introduced a robust, scalable backend architecture paired with an elegant, streamlined client interface. Data queries were optimized, and we incorporated micro-animations to transition between student dashboards gracefully.",
    results: [
      "15,000+ active users onboarded with zero downtime during peak hours",
      "60% reduction in administrative inquiry tickets",
      "Instant, intuitive grade and transcript retrieval within three taps",
    ],
    techStack: ["Next.js", "Laravel API", "PostgreSQL", "Tailwind CSS", "GSAP"],
    duration: "8 Weeks",
    client: "Punjab University EHS Team",
  },
  "quartertonez-seo": {
    title: "QuarterTonez",
    category: "SEO Case Study",
    description: "Complete SEO transformation resulting in 300% organic traffic increase.",
    fullOverview: "QuarterTonez, an online music education platform, wanted to scale organic visibility globally. AbramSoft delivered a comprehensive technical audit, optimized the content architecture, and launched highly targeted organic outreach campaigns.",
    challenge: "Highly competitive global search landscape with key keywords locked down by legacy players, resulting in negligible organic traffic.",
    solution: "Our SEO specialists redesigned the content strategy focusing on long-tail music education keywords. We optimized the schema markups, speed, and overall crawlability while acquiring premium editorial links.",
    results: [
      "300% growth in organic search impressions in under 6 months",
      "Top 3 rankings secured for over 18 high-intent commercial keywords",
      "42% increase in online music subscription sign-ups directly through organic search",
    ],
    techStack: ["Google Search Console", "Ahrefs", "Technical SEO Audit", "Content Hub Architecture", "Schema Markup"],
    duration: "Ongoing (6 Month Case Study)",
    client: "QuarterTonez Music Academy",
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}

export function generateStaticParams() {
  return [
    { slug: "maqtechs-web-development" },
    { slug: "puehs-portal" },
    { slug: "quartertonez-seo" },
  ];
}
