"use client";

import { motion } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  ScaleIcon,
  DocumentTextIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const products = [
  {
    icon: ChatBubbleLeftRightIcon,
    name: "VendPadi",
    tagline: "The WhatsApp storefront for Nigerian merchants",
    description: "Create a product catalogue and receive orders through WhatsApp — no website required.",
    status: "Beta — Coming Soon",
    orb: "bg-green-2",
    cta: "Learn More",
    link: "/products",
    color: "from-emerald-500 to-emerald-600",
    image: "/image/product-vendpadi.svg",
    metrics: "WhatsApp-first",
    bar: "w-1/3",
    barFrom: "from-green-2/20",
  },
  {
    icon: ScaleIcon,
    name: "case-master-app",
    tagline: "Law firm management, built for Nigerian practice",
    description: "Litigation tracking, client management, document generation, and compliance — built by a lawyer.",
    status: "In Development",
    orb: "bg-blue-2",
    cta: "Learn More",
    link: "/products",
    color: "from-blue-500 to-blue-600",
    image: "/image/product-casemaster.svg",
    metrics: "Built by lawyers",
    bar: "w-2/3",
    barFrom: "from-blue-2/20",
  },
  {
    icon: DocumentTextIcon,
    name: "Legal Document Generator",
    tagline: "Generate Nigerian legal documents in minutes",
    description: "Answer a few questions, get a lawyer-reviewed, Nigeria-compliant document instantly.",
    status: "MVP Live",
    orb: "bg-gold",
    cta: "Try Free",
    link: "/tools/document-generator",
    color: "from-gold to-gold-light",
    image: "/image/product-docgen.svg",
    metrics: "6 templates",
    bar: "w-full",
    barFrom: "from-gold/25",
  },
];

export default function ProductsSection() {
  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      {/* wave top */}
      <svg className="wave-divider wave-divider--top absolute top-0 left-0 text-white" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,30 C240,0 480,60 720,35 C960,10 1200,55 1440,25 L1440,0 L0,0 Z" />
      </svg>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-soft to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-20 w-[380px] h-[380px] bg-green-pale rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="eyebrow-label mb-5">OUR PRODUCTS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-5 tracking-tight">
            Products We&apos;re <span className="text-gradient-brand">Building</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            JurisTech develops its own legal-tech products for Nigerian businesses and professionals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group h-full">
              <Link href={product.link} className="flex flex-col h-full">
                {/* ——— Console frame ——— */}
                <div className="relative mb-6 rounded-2xl overflow-hidden bg-white border border-line shadow-soft transition-all duration-500 group-hover:shadow-cover group-hover:-translate-y-1">
                  {/* console top bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-surface-dark/60 border-b border-line-soft">
                    <div className="flex gap-1.5">
                      {["bg-rose/70", "bg-gold/70", "bg-green-2/70"].map((dot, i) => (
                        <span key={i} className={`w-2 h-2 rounded-full ${dot}`} />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-muted uppercase">
                      launch://{product.name.toLowerCase().replace(" ", "-")}
                    </span>
                    <span className="hidden sm:block text-[10px] font-bold text-muted">●</span>
                  </div>

                  {/* product image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-soft/60 to-green-pale/60">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* scan sheen */}
                    <div className="absolute inset-0 -translate-x-[105%] group-hover:translate-x-[105%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-12deg] pointer-events-none" />

                    {/* status orb (top-left) */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${product.orb} shadow-[0_0_12px_currentColor] animate-pulse`} />
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm text-navy border border-line shadow-sm">
                        {product.status}
                      </span>
                    </div>

                    {/* progress bar */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[88%]">
                      <div className={`h-1.5 rounded-full bg-white/70 overflow-hidden ${product.barFrom}`}>
                        <div className={`h-full rounded-full ${product.bar} bg-gradient-to-r from-gold/70 to-green-2`} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center shadow-sm`}>
                    <product.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-navy tracking-tight">{product.name}</h3>
                </div>

                <p className="text-gold text-sm font-semibold mb-2">{product.tagline}</p>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  {product.description}
                </p>

                <div className="flex items-center justify-between border-t border-line-soft pt-4 mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-muted">
                    <span className="chip-check w-5 h-5 text-[10px]">✓</span>
                    {product.metrics}
                  </span>
                  <span className="group/lnk inline-flex items-center gap-2 text-navy/70 text-sm font-bold group-hover:text-gold transition-colors duration-300">
                    {product.cta}
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}