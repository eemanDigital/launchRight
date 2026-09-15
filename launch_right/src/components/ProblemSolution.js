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
      {/* Diagonal split — problems side darker, solution side lighter */}
      <div
        aria-hidden
        className="absolute inset-0 bg-navy-lighter"
        style={{
          clipPath: "polygon(60% 0, 100% 0, 100% 100%, 42% 100%)",
        }}
      />

      {/* Ambience */}
      <div className="absolute top-0 left-0 w-[480px] h-[480px] bg-red-500/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-gold/[0.12] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20">
          <span className="badge badge-gold mb-4 inline-flex">
            THE PROBLEM &amp; SOLUTION
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            One Team. Legal, Digital &amp; Technical.
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            From fragmented providers to a single accountable partner — handled
            right the first time.
          </p>
        </motion.div>

        {/* Transformation */}
        <div className="grid lg:grid-cols-[1fr_1.15fr_1fr] gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-9">
              <span className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/25 flex items-center justify-center">
                <XMarkIcon className="w-5 h-5 text-red-400" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-red-400">
                  The Old Way
                </p>
                <p className="text-white/30 text-xs mt-0.5">
                  Fragmented providers, hidden costs
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <XMarkIcon className="w-3 h-3 text-red-400" />
                  </span>
                  <span className="text-white/35 line-through decoration-red-400/30 decoration-1 text-sm leading-relaxed">
                    {problem}
                  </span>
                </motion.li>
              ))}
            </ul>

            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400/50">
              Fragmented · Expensive · Stressful
            </p>
          </motion.div>

          {/* Center transformation node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center py-6 lg:py-0">
            <div className="relative">
              <div className="absolute inset-0 w-[110%] -left-[5%] bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold/15 animate-spin [animation-duration:22s]" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                <img
                  src="/image/problem-solution.svg"
                  alt="From fragmented providers to one unified JurisTech team"
                  className="relative w-56 sm:w-64 lg:w-72 h-auto drop-shadow-2xl"
                  loading="lazy"
                />
              </motion.div>
            </div>

            <div className="mt-7 flex items-center gap-3 text-gold text-[11px] font-bold uppercase tracking-[0.25em]">
              <span className="h-px w-8 bg-gold/40" />
              One unified team
              <span className="h-px w-8 bg-gold/40" />
            </div>
            <p className="text-white/35 text-xs mt-2">
              Legal + Digital + Technical
            </p>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-9">
              <span className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-gold" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
                  With JurisTech
                </p>
                <p className="text-white/30 text-xs mt-0.5">
                  One partner, end to end
                </p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.07 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon className="w-3 h-3 text-gold" />
                  </span>
                  <span className="text-white/85 text-sm leading-relaxed">
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
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold-light text-white text-sm font-bold px-8 py-4 rounded-full shadow-lg shadow-gold/25 hover:shadow-xl hover:shadow-gold/35 hover:-translate-y-0.5 transition-all duration-300">
            Start Your Project — Chat With Us
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}