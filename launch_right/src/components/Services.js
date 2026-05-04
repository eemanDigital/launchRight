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
    id: "cac",
    icon: BuildingOfficeIcon,
    title: "CAC Business Registration",
    description: "Register your business with the Corporate Affairs Commission — fast, compliant, and handled by accredited agents.",
    color: "bg-blue-500",
    items: ["Business Name Registration", "Private Limited Company (LTD)", "Public Limited Company (PLC)", "NGO / Incorporated Trustees", "Post-Registration Services"],
    link: "/pricing",
  },
  {
    id: "legal",
    icon: DocumentCheckIcon,
    title: "Legal Documentation",
    description: "Lawyer-drafted contracts, agreements, and compliance documents tailored to Nigerian law.",
    color: "bg-emerald-500",
    items: ["Shareholders Agreements", "Employment Contracts", "Service Agreements", "Terms & Conditions / Privacy Policies", "Letters of Demand"],
    link: "/tools/document-generator",
    linkText: "Try Free Generator",
  },
  {
    id: "compliance",
    icon: ShieldCheckIcon,
    title: "Compliance Services",
    description: "Stay on top of your regulatory obligations — FIRS, SCUML, annual returns, and more.",
    color: "bg-purple-500",
    items: ["FIRS TIN Registration", "SCUML Registration", "Annual Returns Filing", "CAC Post-Registration Compliance", "Compliance Advisory"],
    link: "/contact",
  },
  {
    id: "web",
    icon: GlobeAltIcon,
    title: "Website Development",
    description: "Professional business websites built for conversion — from landing pages to full e-commerce stores.",
    color: "bg-gold",
    items: ["Landing Pages", "Business Websites", "E-commerce Stores", "Domain & Email Setup", "SEO Optimization"],
    link: "/website",
  },
  {
    id: "software",
    icon: CodeBracketIcon,
    title: "Custom Software & Apps",
    description: "Bespoke software solutions — mobile apps, POS systems, SaaS platforms, and API integrations.",
    color: "bg-slate-500",
    items: ["Mobile Apps (Android)", "POS Systems", "Custom SaaS Platforms", "API Integrations", "Database Design"],
    link: "/software",
  },
  {
    id: "products",
    icon: CommandLineIcon,
    title: "Legal-Tech Tools",
    description: "JurisTech's own products — built for Nigerian businesses and professionals.",
    color: "bg-green",
    items: ["VendPadi (WhatsApp Storefront)", "case-master-app (Law Firm Management)", "Legal Document Generator (Free)"],
    link: "/products",
    linkText: "View Products",
  },
];

const guarantees = [
  "CAC-Accredited Agents",
  "Official CAC Portal Filing",
  "Transparent Pricing",
  "Dedicated Account Manager",
  "Post-Registration Support",
  "Satisfaction Guaranteed",
];

export default function Services() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            What We Do
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We combine legal, regulatory, and technical expertise so you don't have to hire three different people.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-gold/50 hover:shadow-xl transition-all duration-300">
              <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              <ul className="space-y-2 mb-5">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircleIcon className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={category.link}
                className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
                {category.linkText || "Learn more"} <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-navy rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Our Promise to You
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              We don't collect your money and disappear. Every document is filed on the official CAC portal. You receive updates at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <CheckCircleIcon className="w-6 h-6 text-gold flex-shrink-0" />
                <span className="text-white font-medium">{guarantee}</span>
              </div>
            ))}
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
            },
            {
              label: "Government Fees",
              value: "Included",
              icon: <BanknotesIcon className="w-6 h-6" />,
            },
            {
              label: "Support",
              value: "30-90 Days",
              icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
            },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mx-auto mb-3">
                {stat.icon}
              </div>
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-navy">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
