"use client";

import { motion } from "framer-motion";
import {
  XMarkIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function ProblemSolution() {
  const problems = [
    "Coordinating between a lawyer, CAC agent, and web developer separately",
    "Confusing legal requirements and compliance obligations",
    "Poor quality websites that don't convert customers",
    "Legal documents that don't hold up when needed",
    "Unreliable agents who disappear after payment",
  ];

  const solutions = [
    "Everything under one roof — lawyer, CAC agent, and developer",
    "Custom software and websites built in-house by real engineers",
    "Legally vetted documents reviewed by qualified lawyers",
    "Business incorporation done right the first time",
    "Full compliance support — CAC, FIRS, SCUML",
    "24-48 hours for Business Name (guaranteed)",
    "Ongoing support for your business growth",
  ];

  return (
    <section className="section-pad bg-navy relative overflow-hidden">
      {/* deep cover gradient */}
      <div className="absolute inset-0 band-cover" />

      {/* wave top */}
      <svg className="wave-divider wave-divider--top absolute top-0 left-0 text-white" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,30 C240,0 480,60 720,35 C960,10 1200,55 1440,25 L1440,0 L0,0 Z" />
      </svg>

      {/* ambience glows */}
      <div className="absolute top-0 left-0 w-[480px] h-[480px] bg-rose/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-green-2/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20">
          <span className="eyebrow-label eyebrow-label--light mb-5">
            THE PROBLEM &amp; SOLUTION
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            One Team. {" "}
            <span className="text-gradient-brand">Legal, Digital &amp; Technical.</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            From fragmented providers to a single accountable partner — handled
            right the first time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.15fr_1fr] gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-rose/10 border border-rose/30 flex items-center justify-center">
                <XMarkIcon className="w-5 h-5 text-rose-light" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-rose-light">
                  The Old Way
                </p>
                <p className="text-white/30 text-xs mt-0.5">
                  Fragmented providers, hidden costs
                </p>
              </div>
            </div>

            <ul className="space-y-4 border-l border-rose/20 pl-5">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-3">
                  <span className="absolute -left-[26px] top-2.5 w-2 h-2 rounded-full bg-rose/40" />
                  <span className="w-5 h-5 rounded-full bg-rose/10 border border-rose/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <XMarkIcon className="w-3 h-3 text-rose-light" />
                  </span>
                  <span className="text-white/40 line-through decoration-rose-light/40 decoration-1 text-sm leading-relaxed">
                    {problem}
                  </span>
                </motion.li>
              ))}
            </ul>

            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.22em] text-rose-light/60 flex items-center gap-2.5">
              <span className="w-8 h-[3px] rounded-full bg-rose/40" />
              Fragmented · Expensive · Stressful
            </p>
          </motion.div>

          {/* ——— Center: transition meter ——— */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center py-6 lg:py-0">
            {/* radiating arcs */}
            <svg className="w-72 h-72 sm:w-80 sm:h-80 pointer-events-none" viewBox="0 0 320 320" fill="none">
              <circle cx="160" cy="160" r="148" stroke="rgba(45,124,255,0.35)" strokeWidth="1.5" strokeDasharray="3 8" className="animate-[spin-slow_40s_linear_infinite]" style={{ transformOrigin: "160px 160px" }} />
              <circle cx="160" cy="160" r="120" stroke="rgba(30,200,127,0.3)" strokeWidth="1.5" strokeDasharray="1 6" strokeLinecap="round" />
              <circle cx="160" cy="160" r="90" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
              <path d="M40,160 A120,120 0 0 1 160,40" stroke="rgba(45,124,255,0.6)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M160,280 A120,120 0 0 1 280,160" stroke="rgba(30,200,127,0.6)" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            {/* center orb: X → ✓ */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="orb w-36 h-36 sm:w-40 sm:h-40">
                <div className="absolute inset-[-8%] rounded-full bg-gold/10 blur-2xl" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-navy-light to-navy-deep border border-white/15 shadow-cover flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[10px] font-black tracking-[0.3em] text-white/50 uppercase">Transform</p>
                    <p className="text-3xl font-black text-white mt-1 tracking-tighter">
                      X<span className="text-gradient-brand mx-1">→</span>✓
                    </p>
                    <p className="text-[10px] font-black tracking-[0.24em] text-green-2 uppercase mt-1">
                      One Team
                    </p>
                  </div>
                </div>
                {/* green check orb */}
                <div className="orb-check absolute z-10 -right-2 -bottom-2 w-12 h-12 animate-float">
                  <CheckIcon className="w-6 h-6" strokeWidth={3} />
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 text-white/60 text-[10px] font-bold uppercase tracking-[0.25em]">
              <span className="h-px w-8 bg-white/20" />
              Fragmented → Unified
              <span className="h-px w-8 bg-white/20" />
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-green-2/10 border border-green-2/30 flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-green-2" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-green-2">
                  With JurisTech
                </p>
                <p className="text-white/30 text-xs mt-0.5">
                  One partner, end to end
                </p>
              </div>
            </div>

            <ul className="space-y-3.5 border-l border-green-2/25 pl-5">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.07 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-3">
                  <span className="absolute -left-[26px] top-2.5 w-2 h-2 rounded-full bg-green-2/50" />
                  <span className="w-5 h-5 rounded-full bg-green-2/15 border border-green-2/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon className="w-3 h-3 text-green-2" />
                  </span>
                  <span className="text-white/90 text-sm leading-relaxed">
                    {solution}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20">
          <a
            href="https://wa.me/message/KTFL2G2JM3JTP1"
            className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-green-2 to-green-dark shadow-[0_12px_30px_rgba(22,166,106,0.4)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(22,166,106,0.5)] transition-all duration-300">
            Start Your Project — Chat With Us
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}