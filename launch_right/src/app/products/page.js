"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  ScaleIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const products = [
  {
    id: "vendpadi",
    name: "VendPadi",
    tagline: "The WhatsApp storefront for Nigerian merchants",
    description:
      "VendPadi lets small business owners create a product catalogue and receive orders directly through WhatsApp — no website required, no technical knowledge needed. Perfect for market traders, Instagram sellers, and anyone who wants to sell online without the complexity of a full e-commerce platform.",
    features: [
      "Product catalogue with photos and prices",
      "Order management via WhatsApp",
      "No website or app needed",
      "Works for any business size",
      "Built for the Nigerian market",
    ],
    status: "Beta — Coming Soon",
    statusColor: "bg-amber-100 text-amber-700",
    cta: "Join Waitlist",
    ctaType: "email",
    icon: ChatBubbleLeftRightIcon,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    id: "case-master",
    name: "case-master-app",
    tagline: "Law firm management, built for Nigerian practice",
    description:
      "A full practice management platform covering litigation tracking, client management, document generation, and compliance. Built by a lawyer who uses it daily — so it solves real problems, not hypothetical ones.",
    features: [
      "Case & litigation tracking",
      "Client management system",
      "Automated document generation",
      "Compliance deadline alerts",
      "Billing & invoicing",
    ],
    status: "In Development",
    statusColor: "bg-blue-100 text-blue-700",
    cta: "Get Early Access",
    ctaType: "whatsapp",
    icon: ScaleIcon,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    id: "doc-generator",
    name: "Legal Document Generator",
    tagline: "Generate Nigerian legal documents in minutes",
    description:
      "Answer a few questions and get a lawyer-reviewed, Nigeria-compliant document instantly. No lawyer fees for standard documents. Currently supports tenancy agreements, NDAs, service contracts, employment letters, loan agreements, and letters of demand.",
    features: [
      "6 document types available",
      "Nigeria-specific clauses included",
      "Instant PDF download",
      "Free to use — no login required",
      "Lawyer-reviewed templates",
    ],
    status: "MVP Live",
    statusColor: "bg-green-100 text-green-700",
    cta: "Try It Free",
    ctaType: "link",
    ctaLink: "/tools/document-generator",
    icon: DevicePhoneMobileIcon,
    iconColor: "text-gold",
    iconBg: "bg-gold/10",
  },
];

export default function ProductsPage() {
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (waitlistEmail) {
      setWaitlistSubmitted(true);
      setWaitlistEmail("");
    }
  };

  const handleCTA = (product) => {
    if (product.ctaType === "whatsapp") {
      window.open("https://wa.me/message/KTFL2G2JM3JTP1", "_blank");
    } else if (product.ctaType === "link") {
      window.location.href = product.ctaLink;
    } else {
      setActiveProduct(product.id);
    }
  };

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <div className="pt-24 pb-12 bg-navy">
        <div className="container-wide">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold font-semibold text-sm uppercase tracking-wider">
              JurisTech Products
            </motion.span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
              We Build Legal-Tech Products
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Beyond client services, JurisTech builds its own products for Nigerian businesses and professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="container-wide py-16">
        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${product.iconBg} rounded-xl flex items-center justify-center`}>
                    <product.icon className={`w-6 h-6 ${product.iconColor}`} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${product.statusColor}`}>
                    {product.status}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-navy mb-2">{product.name}</h2>
                <p className="text-gold font-medium mb-4">{product.tagline}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckIcon className="w-4 h-4 text-green" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  {product.ctaType === "link" ? (
                    <Link href={product.ctaLink} className="btn-primary">
                      {product.cta} <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  ) : product.ctaType === "whatsapp" ? (
                    <a href="https://wa.me/message/KTFL2G2JM3JTP1" className="btn-green">
                      {product.cta} <ArrowRightIcon className="w-4 h-4" />
                    </a>
                  ) : (
                    <button onClick={() => setActiveProduct(product.id)} className="btn-primary">
                      {product.cta} <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <div className="bg-gradient-to-br from-navy to-navy-light rounded-xl p-6 text-white">
                    <product.icon className="w-10 h-10 text-gold mb-4" />
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-white/60 text-sm">{product.tagline}</p>
                  </div>
                  <div className="mt-6 space-y-3">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <CheckIcon className="w-5 h-5 text-green flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProduct === "vendpadi" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full">
              <h3 className="text-xl font-bold text-navy mb-2">Join the VendPadi Waitlist</h3>
              <p className="text-gray-500 text-sm mb-6">
                Be the first to know when VendPadi launches. We'll notify you via email.
              </p>
              {waitlistSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="w-6 h-6 text-green" />
                  </div>
                  <p className="text-navy font-semibold">You're on the list!</p>
                  <p className="text-gray-500 text-sm">We'll be in touch when we launch.</p>
                  <button onClick={() => setActiveProduct(null)} className="mt-6 text-sm text-gray-500 hover:text-navy">
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                  />
                  <div className="flex gap-3">
                    <button type="submit" className="flex-1 btn-primary">
                      Join Waitlist
                    </button>
                    <button type="button" onClick={() => setActiveProduct(null)} className="px-4 py-3 border border-gray-200 rounded-lg text-gray-600">
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-navy py-16">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want to Build Something Together?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            We also build custom software for clients. If you have an idea for a product, let's talk.
          </p>
          <a href="https://wa.me/message/KTFL2G2JM3JTP1" className="btn-gold">
            Start a Project <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
