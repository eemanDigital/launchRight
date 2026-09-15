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
    iconWrap: "bg-gold/15 border-gold/25",
    iconColor: "text-gold",
    glow: "bg-gold/15",
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
    iconWrap: "bg-teal/15 border-teal/25",
    iconColor: "text-teal",
    glow: "bg-teal/15",
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
    iconWrap: "bg-green/15 border-green/25",
    iconColor: "text-green",
    glow: "bg-green/15",
  },
];

export default function Pillars() {
  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-bg pointer-events-none" />

      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20">
          <span className="badge-gold badge mb-4 inline-flex">
            WHAT WE BUILD
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-5 tracking-tight">
            Software, Websites &amp; Incorporation
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Three core pillars, one accountable team — no juggling agencies, no
            missed deadlines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group h-full">
              <Link href={pillar.href} className="block h-full">
                <div className="relative h-full rounded-2xl p-8 overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-lighter border border-white/10 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-gold/40 group-hover:shadow-2xl group-hover:shadow-navy/25">
                  {/* Corner accent glow */}
                  <div
                    className={`absolute -top-24 -right-24 w-60 h-60 ${pillar.glow} rounded-full blur-3xl transition-all duration-700 opacity-40 group-hover:opacity-100 group-hover:scale-125 pointer-events-none`}
                  />
                  {/* Light sheen sweep */}
                  <div className="absolute inset-0 -translate-x-[105%] group-hover:translate-x-[105%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.06] to-transparent skew-x-[-12deg] pointer-events-none" />
                  {/* Grid texture */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0,82,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,82,255,0.3) 1px, transparent 1px)`,
                        backgroundSize: "36px 36px",
                      }}
                    />
                  </div>

                  {/* Background number watermark */}
                  <span className="absolute top-6 right-7 text-6xl font-black text-white/[0.05] select-none pointer-events-none">
                    0{index + 1}
                  </span>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-7 relative">
                      <span
                        className={`absolute -inset-3 rounded-2xl ${pillar.iconWrap} opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100`}
                      />
                      <div
                        className={`relative w-14 h-14 ${pillar.iconWrap} rounded-xl border flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 shadow-lg shadow-navy/30`}>
                        <pillar.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    {/* Points */}
                    <ul className="space-y-2.5 mb-8">
                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-white/75">
                          <span className="w-5 h-5 rounded-full bg-gold/15 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckIcon className="w-3 h-3 text-gold" />
                          </span>
                          <span className="font-medium leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-gold text-sm font-bold group-hover:gap-3.5 transition-all duration-300">
                      {pillar.cta}
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}