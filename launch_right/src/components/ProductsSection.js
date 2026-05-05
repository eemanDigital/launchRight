"use client";

import { motion } from "framer-motion";
import { ChatBubbleLeftRightIcon, ScaleIcon, DocumentTextIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const products = [
  {
    icon: ChatBubbleLeftRightIcon,
    name: "VendPadi",
    tagline: "The WhatsApp storefront for Nigerian merchants",
    description: "Create a product catalogue and receive orders through WhatsApp — no website required.",
    status: "Beta — Coming Soon",
    statusColor: "bg-amber-100 text-amber-700 border-amber-200",
    cta: "Learn More",
    link: "/products",
    color: "from-emerald-500 to-emerald-600",
    image: "/image/product-vendpadi.svg",
  },
  {
    icon: ScaleIcon,
    name: "case-master-app",
    tagline: "Law firm management, built for Nigerian practice",
    description: "Litigation tracking, client management, document generation, and compliance — built by a lawyer.",
    status: "In Development",
    statusColor: "bg-blue-100 text-blue-700 border-blue-200",
    cta: "Learn More",
    link: "/products",
    color: "from-blue-500 to-blue-600",
    image: "/image/product-casemaster.svg",
  },
  {
    icon: DocumentTextIcon,
    name: "Legal Document Generator",
    tagline: "Generate Nigerian legal documents in minutes",
    description: "Answer a few questions, get a lawyer-reviewed, Nigeria-compliant document instantly.",
    status: "MVP Live",
    statusColor: "bg-gold/10 text-gold border-gold/20",
    cta: "Try Free",
    link: "/tools/document-generator",
    color: "from-gold to-gold-light",
    image: "/image/product-docgen.svg",
  },
];

export default function ProductsSection() {
  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-gold/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="badge-gold badge mb-4 inline-flex">OUR PRODUCTS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight">
            Products We&apos;re Building
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
              className="group">
              <Link href={product.link} className="block">
                <div className="relative mb-6 rounded-2xl overflow-hidden bg-surface aspect-[4/3]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${product.statusColor} backdrop-blur-sm`}>
                      {product.status}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center shadow-sm`}>
                    <product.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-navy tracking-tight">{product.name}</h3>
                </div>

                <p className="text-gold text-sm font-medium mb-2">{product.tagline}</p>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                <div className="flex items-center gap-2 text-navy/60 text-sm font-medium group-hover:text-gold transition-colors duration-300">
                  {product.cta}
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
