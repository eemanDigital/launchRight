"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon, ShieldCheckIcon, StarIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function FinalCTA() {
  return (
    <section className="section-pad bg-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-40 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Ready to register your business?
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
            Join 2,000+ Nigerian entrepreneurs who trusted JurisTech to make their business real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/2348000000000?text=Hi%20JurisTech%2C%20I%20want%20to%20register%20my%20business"
              className="btn-gold text-base"
            >
              Start Registration
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/2348000000000?text=Hi%20JurisTech%2C%20I%20have%20a%20question"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Chat With Us
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <MapPinIcon className="w-6 h-6 text-gold mx-auto mb-2" />
              <p className="text-white/80 text-sm">Suite 412, IT Igbani Street, MKK Plaza, Jabi Abuja</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <PhoneIcon className="w-6 h-6 text-gold mx-auto mb-2" />
              <a href="tel:08067234189" className="text-white/80 text-sm hover:text-white">
                08067234189
              </a>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <ShieldCheckIcon className="w-6 h-6 text-gold mx-auto mb-2" />
              <p className="text-white/80 text-sm">CAC-Accredited Agent</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
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
    </section>
  );
}
