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
      { text: "CAC Name Search", color: "text-gold bg-gold/10 border-gold/20" },
      { text: "Registered Business", color: "text-gold bg-gold/10 border-gold/20" },
      { text: "Starter Website", color: "text-gold bg-gold/10 border-gold/20" },
    ],
    glow: "from-gold/30 via-gold/10 to-transparent",
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
      { text: "Annual Returns", color: "text-teal bg-teal/10 border-teal/20" },
      { text: "Contracts & Policies", color: "text-teal bg-teal/10 border-teal/20" },
      { text: "Digital Presence", color: "text-teal bg-teal/10 border-teal/20" },
    ],
    glow: "from-teal/30 via-teal/10 to-transparent",
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
      { text: "Legal Foundation", color: "text-green bg-green/10 border-green/20" },
      { text: "Web Apps & SaaS", color: "text-green bg-green/10 border-green/20" },
      { text: "API Integrations", color: "text-green bg-green/10 border-green/20" },
    ],
    glow: "from-green/30 via-green/10 to-transparent",
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
    <section className="section-pad bg-surface relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-bg pointer-events-none" />

      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 lg:mb-16">
          <span className="badge-gold badge mb-4 inline-flex">
            WHO THIS IS FOR
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-5 tracking-tight">
            Built for Wherever You Are
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Pick your stage — we&apos;ll take it from there.
          </p>
        </motion.div>

        <div
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>
          {/* Visual stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[300px] sm:h-[360px] flex items-center justify-center">
            {/* Animated glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${current.glow} rounded-full blur-3xl transition-colors duration-700`}
            />
            {/* Ghost number */}
            <span className="absolute text-[10rem] sm:text-[13rem] font-black text-navy/5 select-none">
              {current.step}
            </span>

            {/* Illustration */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.92 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative w-64 sm:w-80">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
                {/* Floating chips */}
                <AnimatePresence>
                  <motion.span
                    key={`chip-${active}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ delay: 0.15 }}
                    className="absolute -top-2 -right-3 sm:-right-8 text-[11px] font-bold px-3 py-1.5 rounded-full bg-white border border-navy/10 shadow-lg">
                    {current.label} · 0{active + 1}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Content stage */}
          <div>
            {/* Segmented selector */}
            <div className="relative inline-flex items-center gap-1 p-1.5 rounded-full bg-white border border-navy/10 shadow-sm mb-8">
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
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-gold to-gold-light shadow-md shadow-gold/30"
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
                <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-4 tracking-tight">
                  {current.title}
                </h3>
                <p className="text-muted text-base leading-relaxed mb-6 max-w-md">
                  {current.description}
                </p>

                {/* Relevant tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {current.chip.map((c) => (
                    <span
                      key={c.text}
                      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-bold ${c.color}`}>
                      {c.text}
                    </span>
                  ))}
                </div>

                <Link
                  href={current.link}
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold-light text-white text-sm font-bold px-6 py-3.5 rounded-full shadow-lg shadow-gold/25 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 transition-all duration-300">
                  Learn more
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Not sure CTA */}
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