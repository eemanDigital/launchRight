"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { trackWhatsAppClick } from "@/lib/analytics";
import Link from "next/link";

export default function Hero() {
  const stats = [
    { value: "2,000+", label: "Businesses Registered" },
    { value: "5+", label: "Years Experience" },
    { value: "24-48h", label: "Business Name Approval" },
    { value: "4.9★", label: "Client Rating" },
  ];

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      <div className="absolute inset-0 hero-gradient-mesh" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-navy-deep/50" />

      <div className="relative container-wide pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">Lawyer · CAC Agent · Developer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.08] tracking-tight">
              Launch Your Business{" "}
              <span className="text-gradient-gold">Legally & Digitally</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg text-white/60 max-w-xl leading-relaxed">
              Built by a practising Nigerian lawyer who also codes.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-white/45 max-w-lg">
              CAC Registration · Professional Websites · Legal Documents · Software — All under one roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                className="btn-gold text-base shadow-lg shadow-gold/20"
                onClick={() => trackWhatsAppClick("Hero CTA - Register My Business")}>
                Register My Business
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <Link
                href="/tools/document-generator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/15 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/25 transition-all">
                Explore Our Tools
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2 text-white/60">
                <CheckIcon className="w-5 h-5 text-success" />
                <span className="text-sm">CAC Registration</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <CheckIcon className="w-5 h-5 text-success" />
                <span className="text-sm">Website Development</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <CheckIcon className="w-5 h-5 text-success" />
                <span className="text-sm">Legal Compliance</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/8 rounded-lg px-4 py-3 hover:border-white/15 transition-colors">
                  <p className="text-white text-xl font-bold tracking-tight">{stat.value}</p>
                  <p className="text-white/45 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/15 to-transparent blur-3xl rounded-full scale-110" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/image/hero-illustration.svg"
                alt="JurisTech dashboard showing CAC registration stats and client wins"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
