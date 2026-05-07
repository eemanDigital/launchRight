"use client";

import { motion } from "framer-motion";
import { XMarkIcon, CheckIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

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
    "Legally vetted documents reviewed by qualified lawyers",
    "Professional websites built for Nigerian businesses",
    "Full compliance support — CAC, FIRS, SCUML",
    "24-48 hours for Business Name (guaranteed)",
    "7-14 days for company registration",
    "Ongoing support for your business growth",
  ];

  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-green/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="badge badge-navy mb-4 inline-flex">THE PROBLEM & SOLUTION</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight">
            One Team. Legal, Digital &amp; Technical.
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            We combine legal expertise, CAC accreditation, and technology to handle everything — right the first time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-dark p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <XMarkIcon className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-white text-lg font-semibold tracking-tight">
                The Old Way
              </h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3 text-white/55">
                  <XMarkIcon className="w-5 h-5 text-red-400/60 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{problem}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Center infographic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-center items-center py-8">
            <img
              src="/image/problem-solution.svg"
              alt="From fragmented providers to unified JurisTech platform"
              className="w-full h-auto max-w-[280px]"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-premium p-8 lg:p-10 bg-surface">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-success/10 border border-success/20 flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-success" />
              </div>
              <h3 className="text-navy text-lg font-semibold tracking-tight">
                With JurisTech
              </h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{solution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-14">
          <a
            href="https://wa.me/message/KTFL2G2JM3JTP1"
            className="btn-primary">
            Start Your Project — Chat With Us
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}