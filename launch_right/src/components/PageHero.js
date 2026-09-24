"use client";

import { motion } from "framer-motion";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  period,
  bottomText,
  children,
}) {
  return (
    <section className="band-cover relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient-cover" />
      {/* soft glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[360px] h-[360px] bg-blue-2/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] bg-green-2/20 rounded-full blur-3xl" />
      </div>

      {/* orbiting monogram */}
      <div className="absolute top-1/2 right-[8%] -translate-y-1/2 hidden lg:flex items-center justify-center pointer-events-none">
        <span className="absolute w-40 h-40 rounded-full border border-dashed border-blue-2/30 animate-spin-slow [animation-duration:40s]" />
        <span className="absolute w-28 h-28 rounded-full border border-white/10" />
        <span className="w-16 h-16 rounded-full bg-gradient-to-br from-navy-light to-navy-deep border border-white/15 flex items-center justify-center shadow-cover">
          <span className="text-white font-black text-sm tracking-tighter">
            JT
          </span>
        </span>
      </div>

      <div className="relative container-wide pt-32 lg:pt-40 pb-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto">
          {eyebrow && (
            <span className="eyebrow-label eyebrow-label--light mb-6">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/60 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          {period && (
            <p className="text-white/30 text-sm mt-4 tracking-wide uppercase">
              {period}
            </p>
          )}
          {children}
        </motion.div>

        {bottomText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8">
            <span className="inline-flex items-center gap-2 text-white/40 text-xs font-semibold tracking-widest uppercase">
              {bottomText}
            </span>
          </motion.div>
        )}
      </div>

      {/* wave into next section */}
      <svg className="wave-divider wave-divider--bottom absolute bottom-0 left-0 text-surface" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,30 C240,0 480,60 720,35 C960,10 1200,55 1440,25 L1440,60 L0,60 Z" />
      </svg>
    </section>
  );
}