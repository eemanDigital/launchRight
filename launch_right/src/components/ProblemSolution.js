"use client";

import { motion } from "framer-motion";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function ProblemSolution() {
  const problems = [
    "Trying to coordinate between a lawyer, CAC agent, and web developer separately",
    "Confusing legal requirements and compliance obligations",
    "Poor quality websites that don't convert customers",
    "Legal documents that don't hold up when you need them",
    "Unreliable agents who disappear after collecting payment",
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
    <section className="section-pad bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-4">
            Stop juggling multiple service providers
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We combine legal expertise, CAC accreditation, and technology to handle everything — right the first time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-navy rounded-2xl p-8 lg:p-10">
            <h3 className="text-white text-xl font-semibold mb-8">
              The Old Way
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-white/60">
                  <XMarkIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-surface rounded-2xl p-8 lg:p-10 border border-gray-100">
            <h3 className="text-navy text-xl font-semibold mb-8">
              With JurisTech
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>{solution}</span>
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
          className="text-center mt-12">
          <a
            href="https://wa.me/message/KTFL2G2JM3JTP1"
            className="btn-primary">
            Start Your Project — Chat With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
