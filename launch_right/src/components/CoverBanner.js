"use client";

import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const services = [
  { icon: CodeBracketIcon, label: "Custom Software & Apps", accent: "text-blue-2 bg-blue-2/10 border-blue-2/20" },
  { icon: GlobeAltIcon, label: "Professional Websites", accent: "text-green-2 bg-green-2/10 border-green-2/20" },
  { icon: BuildingOfficeIcon, label: "Business Incorporation", accent: "text-gold bg-gold/10 border-gold/20" },
];

const floatingChips = [
  { text: "Certified Delivered", pos: "-top-5 -right-4 sm:-right-7 rotate-[5deg]" },
  { text: "One Team. Full Stack.", pos: "top-1/3 -left-6 sm:-left-10 -rotate-[6deg]" },
  { text: "24–48h Turnaround", pos: "-bottom-4 right-8 -rotate-[3deg]" },
];

export default function CoverBanner() {
  return (
    <section className="bg-surface relative overflow-hidden">
      {/* soft wave top + bottom */}
      <svg className="wave-divider wave-divider--top absolute top-0 left-0 text-line-soft" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,30 C240,0 480,60 720,35 C960,10 1200,55 1440,25 L1440,0 L0,0 Z" />
      </svg>

      <div className="container-wide relative pb-14 lg:pb-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-20">
          {/* ——— Image side: unified dashboard frame ——— */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative">
            {/* dashed orbit behind */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full border border-dashed border-blue-2/30 animate-spin-slow [animation-duration:30s] pointer-events-none">
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-green-2 shadow-[0_0_14px_rgba(30,200,127,0.8)]" />
            </div>
            <div className="absolute -bottom-12 -right-6 w-56 h-56 rounded-full bg-blue-2/10 blur-3xl pointer-events-none" />

            {/* frame with corner brackets */}
            <div className="relative">
              {/* corner brackets */}
              {[
                "top-0 left-0 border-t-2 border-l-2 rounded-tl-xl",
                "top-0 right-0 border-t-2 border-r-2 rounded-tr-xl",
                "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl",
                "bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl",
              ].map((corner, i) => (
                <span
                  key={i}
                  className={`absolute w-8 h-8 border-gold ${corner} z-10 transition-all duration-300 group-hover:scale-125`}
                />
              ))}

              <div className="rounded-2xl overflow-hidden shadow-cover border-2 border-white ring-1 ring-line">
                <img
                  src="/image/juristech-cover-page.png"
                  alt="JurisTech services — custom software, websites, business incorporation and legal documents"
                  width={2055}
                  height={765}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              {/* scan line */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-float-slow" />
              </div>
            </div>

            {/* floating chips */}
            {floatingChips.map((chip, i) => (
              <motion.div
                key={chip.text}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className={`absolute z-20 ${chip.pos} animate-float`}
                style={{ animationDelay: `${i * 0.8}s` }}>
                <span className="chip-pill">
                  <span className="chip-check">✓</span>
                  {chip.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* ——— Text side ——— */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6">
            <span className="eyebrow-label">ALL-IN-ONE PLATFORM</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy tracking-tight leading-[1.1]">
              Everything your business needs —{" "}
              <span className="text-gradient-brand">under one roof.</span>
            </h2>
            <p className="text-muted text-base lg:text-lg leading-relaxed max-w-lg">
              From custom software and professional websites to CAC registration
              and legal documents — JurisTech handles the full stack so you can
              focus on running your business.
            </p>

            <ul className="space-y-3 pt-2">
              {services.map((s) => (
                <li key={s.label} className="flex items-center gap-3">
                  <span className={`w-10 h-10 rounded-xl border inline-flex items-center justify-center flex-shrink-0 ${s.accent}`}>
                    <s.icon className="w-5 h-5" />
                  </span>
                  <span className="text-navy text-sm font-semibold">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-5 pt-3">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 rounded-full bg-navy text-white text-sm font-semibold px-6 py-3.5 shadow-soft transition-all duration-300 hover:bg-navy-light hover:-translate-y-0.5 hover:shadow-pop">
                Explore all services
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <span className="inline-flex items-center gap-2 text-xs text-muted">
                <CheckIcon className="w-4 h-4 text-green-2" />
                Free consultation included
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}