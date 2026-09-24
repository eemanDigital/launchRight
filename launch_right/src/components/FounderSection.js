"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const credentials = [
  { icon: AcademicCapIcon, label: "NBA Member" },
  { icon: ShieldCheckIcon, label: "CAC-Accredited" },
  { icon: CodeBracketIcon, label: "Software Developer" },
];

export default function FounderSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-line-soft relative overflow-hidden">
      {/* wave texture */}
      <svg className="absolute top-0 left-0 w-full opacity-[0.05] pointer-events-none" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path fill="none" stroke="#2d7cff" strokeWidth="2" d="M0,70 C160,10 320,110 480,60 C640,10 800,110 960,60 C1120,10 1280,110 1440,50" />
      </svg>

      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* ——— Medallion ——— */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-shrink-0 relative">
              {/* outer orbital rings */}
              <div className="absolute -inset-5 rounded-full border border-dashed border-blue-2/30 animate-spin-slow [animation-duration:30s]">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-2 shadow-[0_0_14px_rgba(45,124,255,0.8)]" />
              </div>
              <div className="absolute -inset-11 rounded-full border border-dashed border-green-2/20 animate-spin-slow [animation-duration:44s] [animation-direction:reverse]">
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-green-2 shadow-[0_0_12px_rgba(30,200,127,0.8)]" />
              </div>

              {/* halo */}
              <div className="absolute -inset-7 bg-gradient-to-br from-blue-2/15 to-transparent rounded-full blur-2xl" />

              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-white shadow-cover">
                <img
                  src="/image/my-image.png"
                  alt="Lukman Asinmi, Founder of JurisTech"
                  className="w-full h-full object-cover object-[center_15%]"
                  loading="lazy"
                />
              </div>

              {/* green check orb */}
              <div className="orb-check absolute z-10 -right-3 bottom-6 w-11 h-11 animate-float">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 12.5l5 5 10-11" />
                </svg>
              </div>

              {/* name plate */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="chip-pill text-xs">
                  <span className="chip-check">✓</span>
                  Founder &amp; CEO
                </span>
              </motion.div>
            </motion.div>

            {/* ——— Content ——— */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-center md:text-left flex-1">
              <span className="eyebrow-label mb-4">MEET THE FOUNDER</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mb-4 tracking-tight">
                I&apos;m <span className="text-gradient-brand">Lukman Asinmi</span>
              </h2>
              <p className="text-muted leading-relaxed mb-7 max-w-2xl">
                I&apos;m a Nigerian lawyer, CAC-accredited agent, and a Software
                Developer. I built JurisTech because I got tired of watching
                businesses fail over preventable legal and technical mistakes.
                Everything we deliver, I personally stand behind.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-7">
                {credentials.map((c, i) => (
                  <motion.span
                    key={c.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink bg-surface px-4 py-2 rounded-full border border-line shadow-sm">
                    <span className="w-7 h-7 rounded-full bg-white border border-line inline-flex items-center justify-center">
                      <c.icon className="w-3.5 h-3.5 text-gold" />
                    </span>
                    {c.label}
                  </motion.span>
                ))}
              </div>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 rounded-full bg-navy text-white text-sm font-semibold px-6 py-3.5 shadow-soft hover:bg-navy-light hover:-translate-y-0.5 hover:shadow-pop transition-all duration-300">
                Read My Full Story
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}