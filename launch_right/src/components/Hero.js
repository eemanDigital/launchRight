"use client";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { trackWhatsAppClick } from "@/lib/analytics";
import Link from "next/link";

const stats = [
  { value: "2,000+", label: "Clients Served" },
  { value: "5+", label: "Years Experience" },
  { value: "24-48h", label: "Fast Turnaround" },
  { value: "4.9", label: "Client Rating" },
];

const chips = [
  { text: "CAC Registered", pos: "top-2 -left-6 sm:-left-10 rotate-[-6deg]" },
  { text: "Website Ready", pos: "top-0 right-0 sm:-right-8 rotate-[5deg]" },
  { text: "Legal Documents", pos: "bottom-24 left-0 sm:-left-12 rotate-[6deg]" },
  { text: "Business Email", pos: "-bottom-3 right-4 sm:-right-6 rotate-[-5deg]" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Cover background */}
      <div className="absolute inset-0 hero-gradient-cover" />

      {/* Ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-[640px] h-[640px] rounded-full bg-blue-2/20 blur-3xl" />
        <div className="absolute top-1/2 -left-48 w-[560px] h-[560px] rounded-full bg-green-2/15 blur-3xl" />
      </div>

      {/* Faint grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(45,124,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(45,124,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative container-ultra pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* ——— Left: copy ——— */}
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08 }}
            className="text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
              <span className="eyebrow-label eyebrow-label--light">
                Nigeria&apos;s Full-Stack Digital Studio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.06] tracking-tight">
              Build Your Business{" "}
              <span className="text-gradient-brand block">
                Digitally &amp; Legally
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-white/70 leading-relaxed">
              Custom software, professional websites, and business incorporation
              — led by a practising lawyer who codes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                onClick={() => trackWhatsAppClick("Hero CTA - Start Project")}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[15px] font-semibold text-white bg-gradient-to-r from-green-2 to-green-dark shadow-[0_12px_30px_rgba(22,166,106,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(22,166,106,0.5)]">
                Start Your Project
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/tools/document-generator"
                className="inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[15px] font-semibold text-white/90 bg-white/10 backdrop-blur border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30">
                <PlayIcon className="w-4 h-4" />
                Explore Our Tools
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-white/55">
              {["Lawyer-led Studio", "CAC Accredited Agent", "24–48h Turnaround"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-green-2" />
                    {t}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* ——— Right: monogram orb + chips ——— */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[440px]">
            {/* Orb art */}
            <div className="orb aspect-square w-full animate-float-slow">
              {/* halo */}
              <div className="absolute inset-[-12%] rounded-full bg-blue-2/10 blur-2xl" />

              {/* radiating rings */}
              <div className="orb-ring inset-[4%]" />
              <div className="orb-ring inset-[10%]" style={{ opacity: 0.7 }} />
              <div
                className="orb-ring inset-[16%]"
                style={{ opacity: 0.4, borderColor: "rgba(45,124,255,0.35)" }}
              />

              {/* rotating dashed orbit */}
              <div className="orb-ring orb-ring--dashed inset-[2%] animate-spin-slow [animation-duration:26s]">
                <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-green-2 shadow-[0_0_16px_rgba(30,200,127,0.8)]" />
              </div>
              <div className="orb-ring orb-ring--dashed inset-[13%] animate-rotate-slow [animation-duration:40s] [animation-direction:reverse]">
                <span className="absolute top-1/2 -right-[4px] -translate-y-1/2 w-2 h-2 rounded-full bg-blue-2 shadow-[0_0_14px_rgba(45,124,255,0.8)]" />
              </div>

              {/* wave arcs */}
              <svg
                className="absolute inset-[7%] w-[86%] h-[86%] pointer-events-none"
                viewBox="0 0 100 100"
                fill="none">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  stroke="url(#waveGrad)"
                  strokeDasharray="1 3"
                  strokeLinecap="round"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2d7cff" />
                    <stop offset="100%" stopColor="#1fc87f" />
                  </linearGradient>
                </defs>
              </svg>

              {/* core disc */}
              <div className="relative z-10 flex flex-col items-center justify-center w-[58%] aspect-square">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-2/20 via-navy-light/40 to-green-2/15 backdrop-blur-sm border border-white/15 shadow-cover" />
                <p className="relative text-white/75 text-[11px] font-bold tracking-[0.35em] uppercase">
                  Juris
                </p>
                <p className="relative text-6xl sm:text-7xl font-black text-white tracking-tighter leading-none mt-2">
                  JT
                </p>
                <p className="relative text-white/60 text-[10px] font-bold tracking-[0.28em] uppercase mt-3">
                  Technology Ltd
                </p>
              </div>

              {/* green check orb */}
              <div className="orb-check absolute z-20 right-[6%] top-[7%] w-14 h-14 sm:w-16 sm:h-16 animate-float">
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 12.5l5 5 10-11" />
                </svg>
              </div>

              {/* pulse rings from check orb */}
              <span className="absolute right-[6%] top-[7%] z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-2/40" style={{ animation: "ring-pulse 2.4s ease-out infinite" }} />
            </div>

            {/* Floating chips */}
            {chips.map((chip, i) => (
              <motion.div
                key={chip.text}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
                className={`absolute z-30 ${chip.pos} animate-float`}
                style={{ animationDelay: `${i * 0.7}s` }}>
                <span className="chip-pill">
                  <span className="chip-check">✓</span>
                  {chip.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats band */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-16 lg:mt-20 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="flex flex-col items-center">
                <p className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {stat.value}
                </p>
                <p className="text-white/50 text-[11px] mt-2 font-semibold uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="relative -mb-px">
        <svg
          className="wave-divider wave-divider--bottom"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none">
          <path
            fill="#05132f"
            d="M0,64 C240,110 480,10 720,38 C960,66 1200,16 1440,58 L1440,120 L0,120 Z"
          />
          <path
            fill="#030b20"
            d="M0,96 C300,56 620,128 960,92 C1160,72 1320,86 1440,98 L1440,120 L0,120 Z"
            opacity="0.7"
          />
        </svg>
      </div>
    </section>
  );
}