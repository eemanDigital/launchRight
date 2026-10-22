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
import ProductSchema from "@/components/ProductSchema";

const products = [
  {
    id: "vendpadi",
    image: "/image/product-vendpadi.svg",
    color: "bg-green-soft",
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
    statusColor: "bg-blue-2/15 text-blue-2 border-blue-2/30",
    cta: "Join Waitlist",
    ctaType: "email",
    icon: ChatBubbleLeftRightIcon,
    iconColor: "text-green-2",
    iconBg: "bg-green-2/15 border border-green-2/30",
  },
  {
    id: "case-master",
    image: "/image/product-casemaster.svg",
    color: "bg-blue-soft",
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
    statusColor: "bg-blue-2/15 text-blue-2 border-blue-2/30",
    cta: "Get Early Access",
    ctaType: "whatsapp",
    icon: ScaleIcon,
    iconColor: "text-blue-2",
    iconBg: "bg-blue-2/15 border border-blue-2/30",
  },
  {
    id: "doc-generator",
    image: "/image/product-docgen.svg",
    color: "bg-mist",
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
    statusColor: "bg-green-2/15 text-green-2 border-green-2/30",
    cta: "Try It Free",
    ctaType: "link",
    ctaLink: "/tools/document-generator",
    icon: DevicePhoneMobileIcon,
    iconColor: "text-green-2",
    iconBg: "bg-gradient-to-br from-blue-2/15 to-green-2/15 border border-blue-2/30",
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
    <main className="min-h-screen overflow-hidden bg-white">
      <ProductSchema />
      <Navbar />

      <section className="relative overflow-hidden bg-green-pale">
        <div
          className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full border-[42px] border-green-2/10 sm:h-96 sm:w-96"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-16 left-0 h-40 w-40 rounded-full bg-blue-2/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-wide relative grid items-center gap-10 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:min-h-[600px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-24 lg:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-2xl"
          >
            <p className="eyebrow-label">JurisTech projects</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.04] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Useful technology.
              <br />
              <span className="text-green-2">Built for real work.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              We build practical digital products for Nigerian businesses and
              professionals—grounded in real needs, legal insight, and
              first-hand experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white shadow-pop transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-light"
              >
                Explore our projects
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-sm font-bold text-navy transition-colors hover:border-green-2 hover:bg-white"
              >
                Build with us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[530px] py-4"
          >
            <div className="absolute -left-4 top-0 h-20 w-20 rounded-2xl border-2 border-green-2/40 sm:-left-2 sm:h-24 sm:w-24" />
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-cover">
              <img
                src="/image/product-vendpadi.svg"
                alt="VendPadi storefront product concept"
                className="aspect-[10/7] w-full object-cover"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-3 right-0 flex items-center gap-3 rounded-2xl bg-navy px-5 py-4 text-white shadow-pop sm:right-2">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-green-2 text-navy">
                <ChatBubbleLeftRightIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-extrabold">Built in-house</p>
                <p className="text-xs text-white/70">Made for local workflows</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section aria-label="Project approach" className="border-b border-line bg-white">
        <div className="container-wide grid grid-cols-2 gap-4 py-7 sm:grid-cols-4 sm:gap-6 sm:py-9">
          {[
            "Designed for Nigerian users",
            "Built by our in-house team",
            "Grounded in real workflows",
            "Made to grow over time",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 text-center text-xs font-bold text-navy sm:text-sm"
            >
              <CheckIcon className="h-5 w-5 shrink-0 text-green-2" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section-pad scroll-mt-20 bg-surface">
        <div className="container-wide">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow-label">What we're building</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
              Technology for everyday business needs
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Explore the products JurisTech is creating for merchants,
              businesses, and legal professionals.
            </p>
          </div>

          <div className="mx-auto max-w-6xl space-y-6 lg:space-y-8">
            {products.map((product, index) => (
              <motion.article
                id={product.id}
                key={product.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="scroll-mt-28"
              >
                <div
                  className={`group flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-shadow duration-300 hover:shadow-pop lg:flex-row ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`relative flex min-h-[250px] items-center justify-center p-7 sm:min-h-[320px] sm:p-10 lg:min-h-[390px] lg:w-[44%] ${product.color}`}
                  >
                    <span className="absolute left-5 top-5 text-xs font-black tracking-[0.2em] text-navy/35">
                      0{index + 1}
                    </span>
                    <img
                      src={product.image}
                      alt={`${product.name} product preview`}
                      className="max-h-[280px] w-full max-w-[420px] object-contain transition-transform duration-500 group-hover:scale-[1.03] sm:max-h-[320px] lg:max-h-[340px]"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`grid h-11 w-11 place-items-center rounded-xl ${product.iconBg}`}
                      >
                        <product.icon
                          className={`h-5 w-5 ${product.iconColor}`}
                        />
                      </span>
                      <span
                        className={`rounded-full border px-3 py-1.5 text-[11px] font-bold ${product.statusColor}`}
                      >
                        {product.status}
                      </span>
                    </div>

                    <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-green-dark">
                      JurisTech project
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm font-bold leading-relaxed text-green-dark sm:text-base">
                      {product.tagline}
                    </p>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                      {product.description}
                    </p>

                    <ul className="mt-6 grid gap-x-5 gap-y-3 sm:grid-cols-2">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-xs leading-relaxed text-ink-soft sm:text-sm"
                        >
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green-2/15">
                            <CheckIcon className="h-3.5 w-3.5 text-green-dark" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 border-t border-line-soft pt-6">
                      {product.ctaType === "link" ? (
                        <Link
                          href={product.ctaLink}
                          className="group/cta inline-flex items-center gap-3 rounded-full bg-navy px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-green-2 hover:text-navy"
                        >
                          {product.cta}
                          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleCTA(product)}
                          className="group/cta inline-flex items-center gap-3 rounded-full bg-navy px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-green-2 hover:text-navy"
                        >
                          {product.cta}
                          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

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
              <h3 className="text-xl font-extrabold text-navy mb-2 tracking-tight">Join the VendPadi Waitlist</h3>
              <p className="text-muted text-sm mb-6">
                Be the first to know when VendPadi launches. We'll notify you via email.
              </p>
              {waitlistSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-green-2/15 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="w-6 h-6 text-green-2" />
                  </div>
                  <p className="text-navy font-semibold">You're on the list!</p>
                  <p className="text-muted text-sm">We'll be in touch when we launch.</p>
                  <button onClick={() => setActiveProduct(null)} className="mt-6 text-sm text-muted hover:text-navy">
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
                    className="w-full px-4 py-3 rounded-lg border border-line focus:outline-none focus:ring-2 focus:ring-blue-2/30 focus:border-blue-2"
                  />
                  <div className="flex gap-3">
                    <button type="submit" className="flex-1 btn-gradient-green">
                      Join Waitlist
                    </button>
                    <button type="button" onClick={() => setActiveProduct(null)} className="px-4 py-3 border border-line rounded-lg text-ink-soft">
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="band-cover py-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-cover" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-blue-2/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-green-2/20 rounded-full blur-3xl" />
        </div>
        <div className="relative container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
            Want to Build Something Together?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            We also build custom software for clients. If you have an idea for a product, let's talk.
          </p>
          <a href="https://wa.me/message/KTFL2G2JM3JTP1" className="btn-gradient-green">
            Start a Project <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
