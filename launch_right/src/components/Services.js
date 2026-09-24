"use client";

import { motion } from "framer-motion";
import {
  BuildingOfficeIcon,
  GlobeAltIcon,
  DocumentCheckIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  BanknotesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const serviceCategories = [
  {
    id: "software",
    icon: CodeBracketIcon,
    title: "Custom Software & Apps",
    description:
      "Bespoke software solutions — mobile apps, POS systems, SaaS platforms, and API integrations.",
    items: [
      "Mobile Apps (Android)",
      "POS Systems",
      "Custom SaaS Platforms",
      "API Integrations",
      "Database Design",
    ],
    link: "/software",
    accent: "blue",
  },
  {
    id: "web",
    icon: GlobeAltIcon,
    title: "Website Development",
    description:
      "Professional business websites built for conversion — from landing pages to full e-commerce stores.",
    items: [
      "Landing Pages",
      "Business Websites",
      "E-commerce Stores",
      "Domain & Email Setup",
      "SEO Optimization",
    ],
    link: "/website",
    accent: "green",
  },
  {
    id: "cac",
    icon: BuildingOfficeIcon,
    title: "Business Incorporation (CAC)",
    description:
      "Register and incorporate your business with the Corporate Affairs Commission — fast, compliant, and handled by accredited agents.",
    items: [
      "Business Name Registration",
      "Private Limited Company (LTD)",
      "Public Limited Company (PLC)",
      "NGO / Incorporated Trustees",
      "Post-Registration Services",
    ],
    link: "/pricing",
    accent: "blue",
  },
  {
    id: "legal",
    icon: DocumentCheckIcon,
    title: "Legal Documentation",
    description:
      "Lawyer-drafted contracts, agreements, and compliance documents tailored to Nigerian law.",
    items: [
      "Shareholders Agreements",
      "Employment Contracts",
      "Service Agreements",
      "Terms & Conditions / Privacy Policies",
      "Letters of Demand",
    ],
    link: "/tools/document-generator",
    linkText: "Try Free Generator",
    accent: "green",
  },
  {
    id: "compliance",
    icon: ShieldCheckIcon,
    title: "Compliance Services",
    description:
      "Stay on top of your regulatory obligations — FIRS, SCUML, annual returns, and more.",
    items: [
      "FIRS TIN Registration",
      "SCUML Registration",
      "Annual Returns Filing",
      "CAC Post-Registration Compliance",
      "Compliance Advisory",
    ],
    link: "/contact",
    accent: "blue",
  },
  {
    id: "products",
    icon: CommandLineIcon,
    title: "Legal-Tech Tools",
    description:
      "JurisTech's own products — built for Nigerian businesses and professionals.",
    items: [
      "VendPadi (WhatsApp Storefront)",
      "case-master-app (Law Firm Management)",
      "Legal Document Generator (Free)",
    ],
    link: "/products",
    linkText: "View Products",
    accent: "green",
  },
];

const guarantees = [
  "Lawyer-Reviewed Deliverables",
  "In-House Engineering",
  "Transparent Pricing",
  "Dedicated Project Manager",
  "Post-Launch Support",
  "Satisfaction Guaranteed",
];

const accentMap = {
  blue: {
    icon: "from-blue to-blue-2",
    check: "bg-blue-2/15 border-blue-2/25 text-blue-2",
    chip: "border-blue-2/40 text-blue-2 hover:bg-blue-2/10",
    ring: "border-blue-2/30",
  },
  green: {
    icon: "from-green to-green-2",
    check: "bg-green-2/15 border-green-2/25 text-green-2",
    chip: "border-green-2/40 text-green-2 hover:bg-green-2/10",
    ring: "border-green-2/30",
  },
};

export default function Services() {
  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-soft to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="eyebrow-label mb-4">WHAT WE DO</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
            One team. <span className="text-gradient-brand">Six disciplines.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg mt-4">
            We combine legal, regulatory, and technical expertise so you don't
            have to hire three different people.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {serviceCategories.map((category, index) => {
            const accent = accentMap[category.accent];
            return (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 border border-line hover:border-blue-2/30 hover:shadow-pop transition-all duration-300">
                <div className="relative inline-flex mb-4">
                  <div
                    className={`absolute inset-0 rounded-xl border border-dashed ${accent.ring} animate-spin-slow [animation-duration:22s] opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${accent.icon} flex items-center justify-center text-white shadow-lg shadow-black/10 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-7 h-7" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 tracking-tight">
                  {category.title}
                </h3>
                <p className="text-muted text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-ink-soft">
                      <span
                        className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${accent.check}`}>
                        <CheckCircleIcon className="w-3 h-3" />
                      </span>
                      <span className="font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={category.link}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold transition-all ${accent.chip}`}>
                  {category.linkText || "Learn more"}{" "}
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="band-cover rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 hero-gradient-cover" />
          <div className="relative">
            <div className="text-center mb-8">
              <span className="eyebrow-label eyebrow-label--light mb-3">
                OUR PROMISE
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
                The JurisTech Guarantee
              </h3>
              <p className="text-white/60 max-w-xl mx-auto">
                We don't collect your money and disappear. Every project is
                tracked and delivered with updates at every stage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur rounded-xl border border-white/10">
                  <span className="w-6 h-6 rounded-full bg-green-2/20 border border-green-2/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-green-2" />
                  </span>
                  <span className="text-white font-medium text-sm">
                    {guarantee}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              label: "Processing Time",
              value: "24hrs – 15 Days",
              icon: <ClockIcon className="w-6 h-6" />,
              accent: "text-blue-2",
              ring: "border-blue-2/30",
            },
            {
              label: "Pricing",
              value: "Transparent & Clear",
              icon: <BanknotesIcon className="w-6 h-6" />,
              accent: "text-green-2",
              ring: "border-green-2/30",
            },
            {
              label: "Support",
              value: "30-90 Days",
              icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
              accent: "text-blue-2",
              ring: "border-blue-2/30",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl border border-line shadow-soft">
              <div
                className={`w-12 h-12 border rounded-xl flex items-center justify-center mx-auto mb-3 ${stat.ring} ${stat.accent}`}>
                {stat.icon}
              </div>
              <p className="text-sm text-muted mb-1">{stat.label}</p>
              <p className="text-2xl font-extrabold text-navy tracking-tight">
                {stat.value}
              </p>
              <div className="mt-3 w-16 h-1 rounded-full bg-gradient-to-r from-blue-2 to-green-2 mx-auto" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}