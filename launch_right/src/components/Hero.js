"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const headlineWords = ["Register", "Your", "Business", "—", "The", "Right", "Way."];

  return (
    <section className="relative min-h-screen bg-[#0A1628] overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#C9972B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#C9972B]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9972B]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#C9972B]/10 border border-[#C9972B]/20 rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
              <span className="text-[#C9972B] text-sm font-medium">CAC-Accredited Agent</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond'] font-bold text-white leading-tight">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`inline-block mr-3 ${word === "Right" || word === "Way." ? "gold-gradient-text" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-[#9CA3AF] text-lg md:text-xl max-w-lg"
            >
              We file your application correctly with CAC. Business Name approved in 24–48 hours. LTD processing depends on CAC — we keep you updated.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/2348000000000?text=Hi%20JurisTech%2C%20I%20want%20to%20register%20my%20business"
                className="btn-shimmer bg-[#C9972B] text-[#0A1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#E8B84B] transition-all text-center"
              >
                Start My Registration →
              </a>
              <a
                href="#requirements"
                className="border-2 border-[#C9972B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#C9972B] hover:text-[#0A1628] transition-all text-center"
              >
                View Requirements ↓
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex flex-wrap gap-3"
            >
              <div className="bg-[#1A2A3F]/50 backdrop-blur-sm border border-[#C9972B]/10 px-4 py-2 rounded-lg">
                <span className="text-[#10B981] mr-2">✓</span>
                <span className="text-sm text-[#9CA3AF]">Free Name Search</span>
              </div>
              <div className="bg-[#1A2A3F]/50 backdrop-blur-sm border border-[#C9972B]/10 px-4 py-2 rounded-lg">
                <span className="text-[#10B981] mr-2">✓</span>
                <span className="text-sm text-[#9CA3AF]">No Hidden Fees</span>
              </div>
              <div className="bg-[#1A2A3F]/50 backdrop-blur-sm border border-[#C9972B]/10 px-4 py-2 rounded-lg">
                <span className="text-[#10B981] mr-2">✓</span>
                <span className="text-sm text-[#9CA3AF]">Money-Back Guarantee</span>
              </div>
              <div className="bg-[#1A2A3F]/50 backdrop-blur-sm border border-[#C9972B]/10 px-4 py-2 rounded-lg">
                <span className="text-[#C9972B] mr-2">⚡</span>
                <span className="text-sm text-[#9CA3AF]">24–48hrs Business Name</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#C9972B]/20 blur-3xl rounded-full" />
            <div className="relative bg-gradient-to-br from-[#1A2A3F] to-[#0A1628] rounded-2xl p-8 border border-[#C9972B]/30 shadow-2xl animate-float-slow">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#C9972B] rounded-full flex items-center justify-center animate-pulse-glow">
                <svg className="w-8 h-8 text-[#0A1628]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.08 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
                </svg>
              </div>
              
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <p className="text-[#C9972B] text-xs uppercase tracking-widest">Certificate of Registration</p>
                  <h3 className="text-white text-2xl font-['Cormorant_Garamond'] font-bold">SMART VENTURES NIGERIA LTD</h3>
                </div>

                <div className="border-t border-b border-[#C9972B]/20 py-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B7280]">RC Number:</span>
                    <span className="text-white font-mono">1984728</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B7280]">Registration Date:</span>
                    <span className="text-white">March 14, 2026</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6B7280]">Business Type:</span>
                    <span className="text-white">Private Limited Company</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="bg-[#C9972B]/10 px-6 py-2 rounded-full">
                    <span className="text-[#C9972B] font-semibold text-sm">✓ APPROVED BY CAC</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9972B]/30 to-transparent" />
    </section>
  );
}