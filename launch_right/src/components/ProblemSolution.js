"use client";

import { motion } from "framer-motion";

export default function ProblemSolution() {
  const problems = [
    "Long queues at crowded CAC offices",
    "Confusing, ever-changing requirements",
    "Fear of costly mistakes and rejections",
    "Unreliable agents who disappear after payment",
    "Weeks of waiting with zero updates",
    "No idea what documents you actually need",
  ];

  const solutions = [
    "100% online — never visit a CAC office",
    "Free name availability search before you pay",
    "We suggest alternative names if yours is taken",
    "Real-time WhatsApp updates throughout the process",
    "Business Name approved in 24–48 hours (CAC-dependent)",
    "Transparent pricing — what you see is what you pay",
  ];

  return (
    <section className="py-20 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#0A1628] rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500" />
            <h3 className="text-white text-2xl md:text-3xl font-['Cormorant_Garamond'] font-bold mb-8">
              Business Registration in Nigeria Shouldn't Be This Hard.
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3 text-[#9CA3AF]">
                  <span className="text-red-500 text-lg">✗</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-10 border-2 border-[#C9972B]/30 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9972B] to-[#E8B84B]" />
            <h3 className="text-[#0A1628] text-2xl md:text-3xl font-['Cormorant_Garamond'] font-bold mb-8">
              There's a Better Way. Here's Our Promise.
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-[#1A1A2E]">
                  <span className="text-[#C9972B] text-lg">✓</span>
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
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/2348000000000?text=Hi%20JurisTech%2C%20I%20want%20to%20register%20my%20business"
            className="inline-flex items-center gap-2 bg-[#C9972B] text-[#0A1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#E8B84B] transition-all"
          >
            Get Free Name Search → 
            <span className="text-sm font-normal">(No commitment)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}