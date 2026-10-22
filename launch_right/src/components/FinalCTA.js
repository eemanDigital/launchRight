"use client";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckIcon,
  ShieldCheckIcon,
  StarIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { event } from "@/lib/fpixel";

export default function FinalCTA({ variant }) {
  const isServicesVariant = variant === "services";

  return (
    <section
      className={
        isServicesVariant
          ? "bg-surface py-16 sm:py-20 lg:py-24"
          : "relative overflow-hidden"
      }
    >
      {!isServicesVariant && (
        <svg className="wave-divider wave-divider--top absolute top-0 left-0 text-white" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,30 C240,0 480,60 720,35 C960,10 1200,55 1440,25 L1440,0 L0,0 Z" />
        </svg>
      )}

      <div
        className={
          isServicesVariant
            ? "container-wide relative"
            : "relative pt-10 lg:pt-14 pb-20 lg:pb-24 bg-navy overflow-hidden"
        }
      >
        {isServicesVariant ? (
          <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-40 max-w-5xl rounded-full bg-green-2/10 blur-3xl" />
        ) : (
          <div className="absolute inset-0 hero-gradient-cover" />
        )}

        {/* concentric launch rings */}
        {!isServicesVariant && (
          <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none">
          {["w-[520px] h-[520px]", "w-[400px] h-[400px]", "w-[280px] h-[280px]"].map((size, i) => (
            <span
              key={i}
              className={`absolute -translate-x-1/2 -translate-y-1/2 ${size} rounded-full ${
                i === 1 ? "border border-dashed border-blue-2/25 animate-spin-slow [animation-duration:36s]" : "border border-white/10"
              }`}
              style={{
                left: "50%",
                top: "50%",
                animation: i === 0 ? "ring-pulse 3s ease-out infinite" : undefined,
              }}
            />
          ))}
          {/* center orb */}
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-navy-light to-navy-deep border border-white/20 flex items-center justify-center shadow-cover">
            <span className="text-white font-black text-xl tracking-tighter">JT</span>
          </span>
          </div>
        )}

        {/* glows */}
        {!isServicesVariant && (
          <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-2/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-green-2/15 rounded-full blur-3xl" />
          </div>
        )}

        {/* faint grid */}
        {!isServicesVariant && (
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(45,124,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(45,124,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
          </div>
        )}

        <div
          className={
            isServicesVariant
              ? "relative overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-white shadow-cover sm:px-12 sm:py-16 lg:py-20"
              : "container-narrow relative pt-40 lg:pt-56"
          }
        >
          {isServicesVariant && (
            <>
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-green-2/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full border-[40px] border-white/[0.04]" />
            </>
          )}
          <motion.div
            initial={isServicesVariant ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center">
            <motion.span
              initial={isServicesVariant ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur border border-white/15 rounded-full px-5 py-2.5 mb-8">
              <StarIcon className="w-4 h-4 text-green-2" />
              <span className="text-white/70 text-sm font-medium">Trusted by 2,000+ entrepreneurs</span>
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Ready to Build Your{" "}
              <span className="text-gradient-brand">Business?</span>
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Get incorporated, launch a professional website, and ship custom software — all from one team that understands your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[15px] font-semibold text-white bg-gradient-to-r from-green-2 to-green-dark shadow-[0_12px_30px_rgba(22,166,106,0.4)] hover:shadow-[0_16px_40px_rgba(22,166,106,0.5)] transition-all duration-300"
                onClick={() => event('Contact', { content_name: 'Final CTA', method: 'WhatsApp', action: 'Start Project' })}>
                Start Your Project
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </motion.a>
              <a
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold text-white/90 bg-white/10 backdrop-blur border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                onClick={() => event('Contact', { content_name: 'Final CTA', method: 'WhatsApp', action: 'Get Quote' })}>
                Get a Quote
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
              {[
                { icon: MapPinIcon, text: "Suite 412, IT Igbani Street, MKK Plaza, Jabi Abuja" },
                { icon: PhoneIcon, text: "08067234189", href: "tel:08067234189" },
                { icon: ShieldCheckIcon, text: "CAC-Accredited Agent" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={isServicesVariant ? false : { opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-colors">
                  <span className="mx-auto mb-3 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-green-2" />
                  </span>
                  {item.href ? (
                    <a href={item.href} className="text-white/70 text-sm hover:text-white transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-white/70 text-sm">{item.text}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/50 text-sm">
              <span className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-green-2" />
                Money-back guarantee
              </span>
              <span className="flex items-center gap-2">
                <StarIcon className="w-4 h-4 text-green-2" />
                4.9/5 rating
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheckIcon className="w-4 h-4 text-green-2" />
                2,000+ clients served
              </span>
            </div>
          </motion.div>
        </div>

        {!isServicesVariant && (
          <svg className="wave-divider wave-divider--bottom absolute bottom-0 left-0 text-navy-deep" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,50 C240,10 480,70 720,40 C960,10 1200,65 1440,30 L1440,80 L0,80 Z" />
          </svg>
        )}
      </div>
    </section>
  );
}