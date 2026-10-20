"use client";

import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const pillars = [
  {
    icon: CodeBracketIcon,
    title: "Custom Software & Apps",
    description:
      "Bespoke products engineered in-house — from POS systems and SaaS platforms to mobile apps and API integrations.",
    points: [
      "POS & Inventory Systems",
      "SaaS Platforms",
      "Mobile Apps (Android)",
      "API Integrations",
    ],
    href: "/software",
    cta: "Explore software",
    accent: "blue",
  },
  {
    icon: GlobeAltIcon,
    title: "Professional Websites",
    description:
      "Conversion-focused websites and e-commerce stores — designed, built, and deployed by our own team.",
    points: [
      "Business Websites",
      "E-commerce Stores",
      "Landing Pages",
      "SEO & Domain Setup",
    ],
    href: "/website",
    cta: "See website packages",
    accent: "green",
  },
  {
    icon: BuildingOfficeIcon,
    title: "Business Incorporation",
    description:
      "CAC-registered business names and companies, backed by lawyer-drafted legal documents and compliance support.",
    points: [
      "Business Name (24-48h)",
      "Limited Company (LTD)",
      "NGO / Incorporated Trustees",
      "Legal Documents",
    ],
    href: "/pricing",
    cta: "View packages",
    accent: "amber",
  },
];

const accentMap = {
  blue: {
    ring: "border-blue-2/40",
    glow: "rgba(45,124,255,0.3)",
    tile: "from-blue to-blue-2",
    chip: "border-blue-2/50 text-white bg-white/5",
    check: "bg-blue-2/20 border-blue-2/40 text-blue-2",
    dot: "bg-blue-2",
    line: "bg-blue-2/40",
  },
  green: {
    ring: "border-green-2/40",
    glow: "rgba(30,200,127,0.3)",
    tile: "from-green to-green-2",
    chip: "border-green-2/50 text-white bg-white/5",
    check: "bg-green-2/20 border-green-2/40 text-green-2",
    dot: "bg-green-2",
    line: "bg-green-2/40",
  },
  amber: {
    ring: "border-blue-2/40",
    glow: "rgba(30,200,127,0.3)",
    tile: "from-blue-2 to-green-2",
    chip: "border-blue-2/50 text-white bg-white/5",
    check:
      "bg-gradient-to-br from-blue-2/20 to-green-2/20 border-blue-2/40 text-white",
    dot: "bg-gradient-to-br from-blue-2 to-green-2",
    line: "bg-blue-2/40",
  },
};

export default function Pillars() {
  return (
    <section className="section-pad band-cover relative overflow-hidden mt-25">
      {/* Top divider wave — separates Pillars from the marquee bar above */}
      {/* <div className="absolute inset-x-0 top-0 z-0 pointer-events-none">
        <svg
          className="wave-divider"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none">
          <path
            fill="#030b20"
            d="M0,40 C240,85 480,15 720,50 C960,85 1200,25 1440,60 L1440,0 L0,0 Z"
          />
          <path
            fill="#071d4f"
            opacity="0.65"
            d="M0,70 C260,30 520,100 820,72 C1080,45 1260,78 1440,64 L1440,0 L0,0 Z"
          />
          <path
            d="M0,40 C240,85 480,15 720,50 C960,85 1200,25 1440,60"
            stroke="url(#pillarWaveTopGrad)"
            strokeWidth="2"
            fill="none"
            opacity="0.9"
          />
          <defs>
            <linearGradient id="pillarWaveTopGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2d7cff" />
              <stop offset="100%" stopColor="#1fc87f" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}

      <div className="absolute inset-0 pointer-events-none">
        {/* wave texture behind cards */}
        <svg
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-[1100px] opacity-[0.06]"
          viewBox="0 0 1440 320"
          fill="none">
          <path
            d="M0,160 C240,40 480,280 720,180 C960,80 1200,260 1440,140"
            stroke="#2d7cff"
            strokeWidth="2"
          />
          <path
            d="M0,200 C240,80 480,320 720,220 C960,120 1200,300 1440,180"
            stroke="#1fc87f"
            strokeWidth="2"
          />
          <path
            d="M0,240 C240,120 480,360 720,260 C960,160 1200,340 1440,220"
            stroke="#ffffff"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="relative z-10 container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20">
          <span className="eyebrow-label eyebrow-label--light mb-5">
            WHAT WE BUILD
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Software, Websites &amp; Incorporation
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Three core pillars, one accountable team — no juggling agencies, no
            missed deadlines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto relative">
          {/* connector lines between cards */}
          <svg
            className="absolute -top-6 hidden lg:block w-full h-8 pointer-events-none"
            viewBox="0 0 1000 30"
            preserveAspectRatio="none">
            <line
              x1="335"
              y1="15"
              x2="665"
              y2="15"
              stroke="rgba(45,124,255,0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            <circle cx="335" cy="15" r="4" fill="#2d7cff" />
            <circle cx="665" cy="15" r="4" fill="#1fc87f" />
          </svg>

          {pillars.map((pillar, index) => {
            const accent = accentMap[pillar.accent];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="group h-full">
                <Link href={pillar.href} className="block h-full">
                  <div className="relative h-full rounded-3xl p-8 overflow-hidden bg-white/10 backdrop-blur-md border border-white/15 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-2/50 group-hover:shadow-cover">
                    {/* top hairline highlight */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                    {/* node glow */}
                    <div
                      className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none"
                      style={{ background: accent.glow }}
                    />

                    {/* light sheen sweep */}
                    <div className="absolute inset-0 -translate-x-[105%] group-hover:translate-x-[105%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.08] to-transparent skew-x-[-12deg] pointer-events-none" />

                    {/* orbital node */}
                    <div className="relative mb-8 flex items-center justify-center">
                      <div
                        className={`absolute w-28 h-28 rounded-full border border-dashed ${accent.ring} animate-spin-slow [animation-duration:18s]`}>
                        <span
                          className={`absolute -top-[3px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${accent.dot} shadow-[0_0_12px_rgba(255,255,255,0.5)]`}
                        />
                      </div>
                      <div
                        className={`w-16 h-16 relative flex items-center justify-center rounded-2xl bg-gradient-to-br ${accent.tile} shadow-lg shadow-black/30 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500`}>
                        <pillar.icon className="w-8 h-8 text-white drop-shadow-sm" />
                      </div>
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-black text-white/50 tracking-widest">
                        NODE 0{index + 1}
                      </span>
                    </div>

                    <div className="relative z-10 text-center">
                      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-white/75 text-sm leading-relaxed mb-6">
                        {pillar.description}
                      </p>

                      <ul className="space-y-2.5 mb-8 text-left">
                        {pillar.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-sm text-white/85">
                            <span
                              className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${accent.check}`}>
                              <CheckIcon className="w-3 h-3" />
                            </span>
                            <span className="font-medium leading-snug">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-center gap-2 text-blue-2 text-sm font-bold group-hover:gap-3.5 transition-all duration-300">
                        <span
                          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold backdrop-blur ${accent.chip}`}>
                          {pillar.cta}
                          <ArrowRightIcon className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom divider wave — separates Pillars from the banner below */}
      <div className="absolute inset-x-0 bottom-0 z-0 pointer-events-none">
        <svg
          className="wave-divider"
          viewBox="0 0 1440 110"
          preserveAspectRatio="none">
          <path
            fill="#f4f7ff"
            d="M0,45 C240,90 480,20 720,55 C960,90 1200,30 1440,65 L1440,110 L0,110 Z"
          />
          <path
            fill="#eaf0f8"
            opacity="0.7"
            d="M0,75 C260,35 520,110 820,78 C1080,50 1260,84 1440,70 L1440,110 L0,110 Z"
          />
          <path
            d="M0,45 C240,90 480,20 720,55 C960,90 1200,30 1440,65"
            stroke="url(#pillarWaveBottomGrad)"
            strokeWidth="2"
            fill="none"
            opacity="0.9"
          />
          <defs>
            <linearGradient
              id="pillarWaveBottomGrad"
              x1="0"
              y1="0"
              x2="1"
              y2="0">
              <stop offset="0%" stopColor="#2d7cff" />
              <stop offset="100%" stopColor="#1fc87f" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
