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
    <section className="section-pad bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14">
          <span className="badge-gold badge mb-4 inline-flex">OUR PRODUCTS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mt-2 mb-4 tracking-tight">
            We Build, Not Just Consult
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            JurisTech develops its own legal-tech products for Nigerian businesses and professionals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <div className="card-premium bg-surface h-full flex flex-col group overflow-hidden">
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${product.statusColor} backdrop-blur-sm`}>
                      {product.status}
                    </span>
                  </div>
                </div>

                <div className="p-8 pt-4 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4 -mt-2">
                    <div className={`w-10 h-10 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center shadow-sm`}>
                      <product.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-navy tracking-tight">{product.name}</h3>
                  </div>

                  <p className="text-gold text-sm font-medium mb-3">{product.tagline}</p>
                  <p className="text-muted text-sm leading-relaxed flex-1 mb-6">
                    {product.description}
                  </p>

                  <Link
                    href={product.link}
                    className="flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                    {product.cta} <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
