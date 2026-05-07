"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const audiences = [
  {
    image: "/image/starting-business.svg",
    step: "01",
    title: "Starting a Business",
    description: "You have an idea and need to make it legal. We handle your CAC registration, business name search, and the legal setup so you can focus on building.",
    link: "/services#cac",
    tag: "Launch",
  },
  {
    image: "/image/growing-sme.svg",
    step: "02",
    title: "Growing an SME",
    description: "Your business is running but you need compliance support, contracts, annual returns, and a professional digital presence to scale.",
    link: "/services#compliance",
    tag: "Scale",
  },
  {
    image: "/image/building-product.svg",
    step: "03",
    title: "Building a Product",
    description: "You're a startup or tech founder who needs both legal infrastructure (contracts, compliance) and technical execution (websites, apps, SaaS).",
    link: "/products",
    tag: "Build",
  },
];

export default function WhoIsThisFor() {
  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-bg pointer-events-none" />

      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20">
          <span className="badge-gold badge mb-4 inline-flex">WHO THIS IS FOR</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight">
            Built for Wherever You Are
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Whether you're launching, growing, or building — JurisTech has you covered.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-0 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative">
              <Link href={audience.link} className="block h-full">
                <div className="relative px-6 lg:px-10 py-10">
                  {index < audiences.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-border to-transparent" />
                  )}

                  <div className="flex items-start gap-5 mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-surface-dark group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={audience.image}
                          alt={audience.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">{audience.tag}</span>
                      <span className="text-muted-light text-xs font-mono">{audience.step}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-3 tracking-tight">{audience.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{audience.description}</p>

                  <div className="flex items-center gap-2 text-navy/60 text-sm font-medium group-hover:text-gold transition-colors duration-300">
                    Learn more
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center">
          <p className="text-muted text-sm">
            Not sure where you fit?{" "}
            <Link href="https://wa.me/message/KTFL2G2JM3JTP1" className="text-gold font-medium hover:underline">
              Let's talk about your business
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}