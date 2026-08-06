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
    points: ["POS & Inventory Systems", "SaaS Platforms", "Mobile Apps (Android)", "API Integrations"],
    href: "/software",
    cta: "Explore software",
    tile: "bg-slate-500",
    linkText: "text-gold",
  },
  {
    icon: GlobeAltIcon,
    title: "Professional Websites",
    description:
      "Conversion-focused websites and e-commerce stores — designed, built, and deployed by our own team.",
    points: ["Business Websites", "E-commerce Stores", "Landing Pages", "SEO & Domain Setup"],
    href: "/website",
    cta: "See website packages",
    tile: "bg-gold",
    linkText: "text-gold",
  },
  {
    icon: BuildingOfficeIcon,
    title: "Business Incorporation",
    description:
      "CAC-registered business names and companies, backed by lawyer-drafted legal documents and compliance support.",
    points: ["Business Name (24-48h)", "Limited Company (LTD)", "NGO / Incorporated Trustees", "Legal Documents"],
    href: "/pricing",
    cta: "View packages",
    tile: "bg-green",
    linkText: "text-gold",
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
          <span className="badge-gold badge mb-4 inline-flex">WHAT WE BUILD</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight">
            Software, Websites &amp; Incorporation
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Three core pillars, one accountable team — no juggling agencies, no missed deadlines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group">
              <Link href={pillar.href} className="block h-full">
                <div className="bg-white rounded-2xl p-8 border border-gray-100/80 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300 h-full">
                  <div className={`w-14 h-14 ${pillar.tile} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className="w-5 h-5 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckIcon className="w-3 h-3 text-green" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    {pillar.cta}
                    <ArrowRightIcon className="w-4 h-4" />
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
