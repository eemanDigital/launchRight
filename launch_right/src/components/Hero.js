"use client";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { trackWhatsAppClick } from "@/lib/analytics";
import Link from "next/link";

export default function Hero() {
  const services = [
    { label: "CAC Registration", verified: true },
    { label: "Website Development", verified: true },
    { label: "Legal Documents", verified: true },
    { label: "Software & SaaS", verified: true },
  ];

  const stats = [
    { value: "2,000+", label: "Businesses Registered" },
    { value: "5+", label: "Years Experience" },
    { value: "24-48h", label: "Business Name Approval" },
    { value: "4.9", label: "Client Rating", suffix: "★" },
  ];

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      <div className="absolute inset-0 hero-gradient-mesh" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-green/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(201,151,43,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,151,43,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-deep to-transparent" />

      <div className="relative container-ultra pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-w-0">
          <div className="space-y-10 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">
                Built by a Lawyer Who Codes
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-bold text-white leading-[1.05] tracking-tight break-words">
              Launch Your Business{" "}
              <span className="text-gradient-gold block">
                Legally &amp; Digitally
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-4">
              <p className="text-lg text-white/60 max-w-xl leading-relaxed">
                Built by a practising Nigerian lawyer who also codes. We handle
                the legal, digital, and technical so you can focus on building.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                className="btn-gold text-base shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30"
                onClick={() =>
                  trackWhatsAppClick("Hero CTA - Register My Business")
                }>
                Register My Business
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <Link
                href="/tools/document-generator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 backdrop-blur-sm border border-white/15 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                <PlayIcon className="w-4 h-4" />
                Explore Our Tools
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {services.map((service, i) => (
                <div key={i} className="flex items-center gap-3 text-white/50">
                  <CheckCircleIcon className="w-5 h-5 text-gold/70 flex-shrink-0" />
                  <span className="text-sm font-medium">{service.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
                  className="flex flex-col min-w-0">
                  <p className="text-white text-2xl font-bold tracking-tight font-display">
                    {stat.value}
                    {stat.suffix || ""}
                  </p>
                  <p className="text-white/40 text-xs mt-1.5 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center">
            {/* Background glow behind illustration */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-green/5 blur-3xl rounded-full scale-110" />

            {/* Floating accent badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-0 z-10">
              <div className="bg-navy/80 backdrop-blur-sm border border-gold/20 rounded-xl px-4 py-2.5 shadow-lg">
                <p className="text-gold text-lg font-bold">24-48h</p>
                <p className="text-white/50 text-[10px] uppercase tracking-wider">
                  Approval
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 left-0 z-10">
              <div className="bg-navy/80 backdrop-blur-sm border border-green/20 rounded-xl px-4 py-2.5 shadow-lg">
                <p className="text-green text-lg font-bold">2,000+</p>
                <p className="text-white/50 text-[10px] uppercase tracking-wider">
                  Launched
                </p>
              </div>
            </motion.div>

            <div className="relative w-full max-w-lg">
              <img
                src="/image/hero-illustration.svg"
                alt="JurisTech services hub connecting legal, digital, and technical solutions"
                className="w-full h-auto drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
