"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">CAC-Accredited Agent</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1]"
            >
              Register your business in{" "}
              <span className="text-gradient-gold">48 hours</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/60 max-w-lg"
            >
              We file directly with CAC. Business Name approved in 24-48 hours. LTD & IT: 4-15 days (subject to CAC). No hidden fees.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                className="btn-gold text-base"
              >
                Start Registration
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all"
              >
                See How It Works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-6 pt-2"
            >
              <div className="flex items-center gap-2 text-white/60">
                <CheckIcon className="w-5 h-5 text-success" />
                <span className="text-sm">Free name search</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <CheckIcon className="w-5 h-5 text-success" />
                <span className="text-sm">Money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <CheckIcon className="w-5 h-5 text-success" />
                <span className="text-sm">2,000+ businesses registered</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-6 pt-6"
            >
              <a
                href="tel:08067234189"
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors"
              >
                <PhoneIcon className="w-5 h-5 text-gold" />
                <span className="text-white font-medium">08067234189</span>
              </a>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                <MapPinIcon className="w-5 h-5 text-gold" />
                <span className="text-white text-sm">Suite 412, MKK Plaza, Jabi Abuja</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent blur-3xl rounded-full" />
            <div className="relative bg-gradient-to-br from-navy-light to-navy rounded-2xl p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                    <ShieldCheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">CAC Certificate</p>
                    <p className="text-white/50 text-sm">Officially Registered</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-success/20 rounded-full">
                  <span className="text-success text-sm font-medium">Approved</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Company Name</p>
                  <h3 className="text-white text-xl font-semibold">SMART VENTURES NIGERIA LTD</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">RC Number</p>
                    <p className="text-white font-mono">1984728</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Registration Date</p>
                    <p className="text-white">March 14, 2026</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Business Type</p>
                    <p className="text-white">Private Limited Company</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Status</p>
                    <p className="text-success font-medium">Active</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
