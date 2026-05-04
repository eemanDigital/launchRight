"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function FounderSection() {
  return (
    <section className="py-16 lg:py-20 bg-white border-t border-gray-100/80">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-xl scale-110" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-gold/10 shadow-xl">
                  <img
                    src="/image/my-image.png"
                    alt="Lukman Asinmi, Founder of JurisTech"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                The Founder
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-3 tracking-tight">
                I'm Lukman Asinmi
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 max-w-2xl">
                I'm a practising Nigerian lawyer, CAC-accredited agent, and MERN stack developer. I built JurisTech because I got tired of watching businesses fail over preventable legal and technical mistakes. Everything we deliver, I personally stand behind.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-5">
                <span className="inline-flex items-center gap-1.5 text-sm text-muted bg-surface px-3 py-1.5 rounded-full border border-gray-100">
                  <ShieldCheckIcon className="w-4 h-4 text-gold" />
                  NBA Member
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-muted bg-surface px-3 py-1.5 rounded-full border border-gray-100">
                  <ShieldCheckIcon className="w-4 h-4 text-gold" />
                  CAC-Accredited
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-muted bg-surface px-3 py-1.5 rounded-full border border-gray-100">
                  <ShieldCheckIcon className="w-4 h-4 text-gold" />
                  2,000+ clients
                </span>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-gold font-medium hover:gap-2 transition-all duration-200">
                Read My Full Story <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
