"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon, ShieldCheckIcon, StarIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { event } from "@/lib/fpixel";

export default function FinalCTA() {
  return (
    <section className="section-pad bg-navy relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient-mesh" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gold/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gold/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(201,151,43,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,151,43,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-8">
            <StarIcon className="w-4 h-4 text-gold" />
            <span className="text-white/70 text-sm font-medium">Trusted by 2,000+ entrepreneurs</span>
          </motion.span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 tracking-tight">
            Ready to Launch Your Business?
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Get CAC registration, a professional website, and legal documents — all from one team that understands your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/message/KTFL2G2JM3JTP1"
              className="btn-gold text-base shadow-lg shadow-gold/20"
              onClick={() => event('Contact', { content_name: 'Final CTA', method: 'WhatsApp', action: 'Start Project' })}>
              Start Your Project
              <ArrowRightIcon className="w-4 h-4" />
            </motion.a>
            <a
              href="https://wa.me/message/KTFL2G2JM3JTP1"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 backdrop-blur-sm border border-white/15 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/25 transition-all"
              onClick={() => event('Contact', { content_name: 'Final CTA', method: 'WhatsApp', action: 'Get Quote' })}>
              Get a Quote
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/8 hover:border-white/15 transition-colors">
              <MapPinIcon className="w-6 h-6 text-gold mx-auto mb-3" />
              <p className="text-white/70 text-sm">Suite 412, IT Igbani Street, MKK Plaza, Jabi Abuja</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/8 hover:border-white/15 transition-colors">
              <PhoneIcon className="w-6 h-6 text-gold mx-auto mb-3" />
              <a href="tel:08067234189" className="text-white/70 text-sm hover:text-white transition-colors">
                08067234189
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/8 hover:border-white/15 transition-colors">
              <ShieldCheckIcon className="w-6 h-6 text-gold mx-auto mb-3" />
              <p className="text-white/70 text-sm">CAC-Accredited Agent</p>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/50 text-sm">
            <span className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-success" />
              Money-back guarantee
            </span>
            <span className="flex items-center gap-2">
              <StarIcon className="w-4 h-4 text-gold" />
              4.9/5 rating
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-gold" />
              2,000+ registered
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}