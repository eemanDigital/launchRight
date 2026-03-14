"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#C9972B] to-[#E8B84B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond'] font-bold text-[#0A1628] mb-4">
            Your Business. Officially Registered. Starting Today.
          </h2>
          <p className="text-[#0A1628]/80 text-lg mb-8 max-w-2xl mx-auto">
            Join 2,000+ Nigerian entrepreneurs who trusted JurisTech to make their
            business real. It takes 5 minutes to get started.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://wa.me/2348000000000?text=Hi%20JurisTech%2C%20I%20want%20to%20register%20my%20business"
              className="bg-[#0A1628] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1A2A3F] transition-all"
            >
              Register My Business Now →
            </a>
            <a
              href="https://wa.me/2348000000000?text=Hi%20JurisTech%2C%20I%20have%20a%20question"
              className="border-2 border-[#0A1628] text-[#0A1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#0A1628] hover:text-white transition-all"
            >
              💬 Chat With Us First
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[#0A1628]/80 text-sm">
            <span className="flex items-center gap-2">
              <span>🔒</span> Secure Payment
            </span>
            <span className="flex items-center gap-2">
              <span>✓</span> Money-Back Guarantee
            </span>
            <span className="flex items-center gap-2">
              <span>⭐</span> 4.9/5 Rating
            </span>
            <span className="flex items-center gap-2">
              <span>🏛️</span> CAC-Accredited
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}