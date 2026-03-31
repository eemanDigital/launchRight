"use client";

import { motion } from "framer-motion";
import { ScaleIcon, CheckBadgeIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

export default function FounderSection() {
  return (
    <section id="founder" className="section-pad bg-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/30 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3">
                      <ScaleIcon className="w-16 h-16 text-gold/50" />
                    </div>
                    <p className="text-gold/60 text-sm">Add Photo</p>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 bg-gold text-navy px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                  <CheckBadgeIcon className="w-4 h-4 inline mr-1" />
                  CAC Accredited
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4">
                <StarIconSolid className="w-4 h-4 text-gold" />
                <span className="text-gold text-sm font-medium">Meet Your Registration Expert</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Lukman Abiodun Lawal
              </h2>
              <p className="text-gold font-medium mb-6">
                Lawyer · CAC-Accredited Agent · Founder, JurisTech
              </p>

              <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
                <p>
                  I'm a Nigerian lawyer and CAC-accredited agent with hands-on experience in business registration, corporate compliance, and legal documentation. Every registration that goes through JurisTech is personally overseen by me — not outsourced, not delegated.
                </p>
                <p>
                  I built JurisTech because I kept watching entrepreneurs get exploited by unreliable agents and overpriced lawyers. My NBA membership ensures every legal document we produce meets professional standards.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                  <p className="text-white/50 text-xs mb-1">NBA Member</p>
                  <p className="text-white font-semibold text-sm">Nigerian Bar Association</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                  <p className="text-white/50 text-xs mb-1">Businesses Registered</p>
                  <p className="text-white font-semibold text-sm">2,000+ Successfully</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                  <p className="text-white/50 text-xs mb-1">Experience</p>
                  <p className="text-white font-semibold text-sm">5+ Years Practice</p>
                </div>
              </div>

              <a
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-bold rounded-xl hover:bg-yellow-400 transition-colors"
              >
                <SparklesIcon className="w-5 h-5" />
                Chat Directly With Me
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
