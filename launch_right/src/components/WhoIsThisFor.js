"use client";

import { motion } from "framer-motion";
import { RocketLaunchIcon, ChartBarIcon, WrenchScrewdriverIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const audiences = [
  {
    icon: RocketLaunchIcon,
    title: "Starting a Business",
    description: "You have an idea and need to make it legal. We handle your CAC registration, business name search, and the legal setup so you can focus on building.",
    link: "/services#cac",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50/80",
    border: "border-blue-100",
    hoverBorder: "group-hover:border-blue-200",
  },
  {
    icon: ChartBarIcon,
    title: "Growing an SME",
    description: "Your business is running but you need compliance support, contracts, annual returns, and a professional digital presence to scale.",
    link: "/services#compliance",
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50/80",
    border: "border-emerald-100",
    hoverBorder: "group-hover:border-emerald-200",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Building a Product",
    description: "You're a startup or tech founder who needs both legal infrastructure (contracts, compliance) and technical execution (websites, apps, SaaS).",
    link: "/products",
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50/80",
    border: "border-purple-100",
    hoverBorder: "group-hover:border-purple-200",
  },
];

export default function WhoIsThisFor() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14">
          <span className="badge-gold badge mb-4 inline-flex">WHO THIS IS FOR</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-4 tracking-tight">
            Built for Wherever You Are
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Whether you're launching, growing, or building — JurisTech has you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <Link
                href={audience.link}
                className={`group block ${audience.bg} ${audience.border} ${audience.hoverBorder} border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full`}>
                <div className={`w-14 h-14 bg-gradient-to-br ${audience.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <audience.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 tracking-tight">{audience.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{audience.description}</p>
                <div className="flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                  Learn more <ArrowRightIcon className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
