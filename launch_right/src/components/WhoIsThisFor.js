"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const audiences = [
  {
    image: "/image/starting-business.svg",
    step: "01",
    label: "Launch",
    title: "Starting a Business",
    description:
      "You have an idea and need to make it legal. We handle incorporation, business name search, the legal setup, and a website so your brand launches properly.",
    link: "/services#cac",
    chip: [
      { text: "CAC Name Search", c: "border-blue-2/25 bg-blue-2/10 text-blue-2" },
      { text: "Registered Business", c: "border-blue-2/25 bg-blue-2/10 text-blue-2" },
      { text: "Starter Website", c: "border-blue-2/25 bg-blue-2/10 text-blue-2" },
    ],
    node: "bg-blue-2",
    ring: "border-blue-2/30",
  },
  {
    image: "/image/growing-sme.svg",
    step: "02",
    label: "Scale",
    title: "Growing an SME",
    description:
      "Your business is running but you need compliance support, contracts, annual returns, and a professional digital presence to scale.",
    link: "/services#compliance",
    chip: [
      { text: "Annual Returns", c: "border-green-2/25 bg-green-2/10 text-green-2" },
      { text: "Contracts & Policies", c: "border-green-2/25 bg-green-2/10 text-green-2" },
      { text: "Digital Presence", c: "border-green-2/25 bg-green-2/10 text-green-2" },
    ],
    node: "bg-green-2",
    ring: "border-green-2/30",
  },
  {
    image: "/image/building-product.svg",
    step: "03",
    label: "Build",
    title: "Building a Product",
    description:
      "You're a startup or tech founder who needs both legal infrastructure (contracts, compliance) and technical execution (websites, apps, SaaS).",
    link: "/products",
    chip: [
      { text: "Legal Foundation", c: "border-gold/25 bg-gold/10 text-gold" },
      { text: "Web Apps & SaaS", c: "border-gold/25 bg-gold/10 text-gold" },
      { text: "API Integrations", c: "border-gold/25 bg-gold/10 text-gold" },
    ],
    node: "bg-gold",
    ring: "border-gold/30",
  },
];

export default function WhoIsThisFor() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = audiences[active];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % audiences.length),
      5500
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="section-pad bg-white relative overflow-hidden">
      {/* wave top separator */}
      <svg className="wave-divider wave-divider--top absolute top-0 left-0 text-surface" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,30 C240,0 480,60 720,35 C960,10 1200,55 1440,25 L1440,0 L0,0 Z" />
      </svg>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-blue-soft to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 lg:mb-16">
          <span className="eyebrow-label mb-5">WHO THIS IS FOR</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-5 tracking-tight">
            Built for <span className="text-gradient-brand">Wherever You Are</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Pick your stage — we&apos;ll take it from there.
          </p>
        </motion.div>

        <div
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>
          {/* ——— Visual stage: ripple radar ——— */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[300px] sm:h-[380px] flex items-center justify-center">
            {/* ripple rings */}
            {["w-72 h-72", "w-56 h-56", "w-40 h-40"].map((size, i) => (
              <span
                key={i}
                className={`absolute ${size} rounded-full ${current.ring} ${
                  i === 2 ? "border-dashed animate-spin-slow [animation-duration:24s]" : ""
                } transition-colors duration-700`}
                style={{
                  animation: i < 2 ? `ring-pulse 3s ease-out ${i * 0.9}s infinite` : undefined,
                }}
              />
            ))}

            {/* crosshair nodes */}
            {[
              "-top-1 left-1/2 -translate-x-1/2",
              "-bottom-1 left-1/2 -translate-x-1/2",
              "-left-1 top-1/2 -translate-y-1/2",
              "-right-1 top-1/2 -translate-y-1/2",
            ].map((pos, i) => (
              <span key={i} className={`absolute ${pos} w-2.5 h-2.5 rounded-full ${current.node} shadow-[0_0_16px_currentColor] transition-colors duration-700 animate-pulse`} />
            ))}

            {/* center illustration */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.92 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative flex items-center justify-center">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-56 sm:w-72 h-auto object-contain drop-shadow-2xl animate-float-slow"
                />
              </motion.div>
            </AnimatePresence>

            {/* step orb badge */}
            <AnimatePresence>
              <motion.span
                key={`orb-${active}`}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ delay: 0.2 }}
                className="absolute top-1 right-0 sm:right-6 flex flex-col items-center">
                <span className="orb-check w-12 h-12 text-sm font-black">
                  {current.step}
                </span>
                <span className="mt-2 text-[10px] font-black uppercase tracking-widest text-navy/40">
                  {current.label}
                </span>
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* ——— Content stage ——— */}
          <div>
            {/* segmented selector */}
            <div className="relative inline-flex items-center gap-1 p-1.5 rounded-full bg-surface border border-line shadow-soft mb-8">
              {audiences.map((a, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={a.step}
                    onClick={() => setActive(i)}
                    className={`relative px-4 sm:px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${
                      isActive ? "text-white" : "text-navy/50 hover:text-navy"
                    }`}>
                    {isActive && (
                      <motion.span
                        layoutId="who-pill"
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue to-green"
                      />
                    )}
                    <span className="relative z-10">{a.label}</span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.4, ease: "easeOut" }}>
                <span className="text-gold text-xs font-semibold tracking-widest uppercase mb-3 inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Step {current.step}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4 tracking-tight">
                  {current.title}
                </h3>
                <p className="text-muted text-base leading-relaxed mb-6 max-w-md">
                  {current.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {current.chip.map((c) => (
                    <span
                      key={c.text}
                      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-bold ${c.c}`}>
                      {c.text}
                    </span>
                  ))}
                </div>

                <Link
                  href={current.link}
                  className="group inline-flex items-center gap-3 bg-navy text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-soft hover:shadow-pop hover:-translate-y-0.5 transition-all duration-300 hover:bg-navy-light">
                  Learn more
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 text-center">
          <p className="text-muted text-sm">
            Not sure where you fit?{" "}
            <Link
              href="https://wa.me/message/KTFL2G2JM3JTP1"
              className="text-gold font-bold hover:underline">
              Let&apos;s talk about your business
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}