"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, ShieldCheckIcon, AcademicCapIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

export default function FounderSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100/80 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-gold/4 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-2xl" />
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-gold/10 shadow-xl">
                  <img
                    src="/image/my-image.png"
                    alt="Lukman Asinmi, Founder of JurisTech"
                    className="w-full h-full object-cover object-[center_15%]"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-center md:text-left flex-1">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                Meet the Founder
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4 tracking-tight">
                I'm Lukman Asinmi
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                I'm a practising Nigerian lawyer, CAC-accredited agent, and MERN stack developer. I built JurisTech because I got tired of watching businesses fail over preventable legal and technical mistakes. Everything we deliver, I personally stand behind.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                <span className="inline-flex items-center gap-2 text-sm text-muted bg-surface px-4 py-2 rounded-full border border-gray-100">
                  <AcademicCapIcon className="w-4 h-4 text-gold" />
                  NBA Member
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-muted bg-surface px-4 py-2 rounded-full border border-gray-100">
                  <ShieldCheckIcon className="w-4 h-4 text-gold" />
                  CAC-Accredited
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-muted bg-surface px-4 py-2 rounded-full border border-gray-100">
                  <CodeBracketIcon className="w-4 h-4 text-gold" />
                  MERN Developer
                </span>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all duration-200">
                Read My Full Story <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}