"use client";

import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const services = [
  { icon: CodeBracketIcon, label: "Custom Software & Apps" },
  { icon: GlobeAltIcon, label: "Professional Websites" },
  { icon: BuildingOfficeIcon, label: "Business Incorporation" },
];

export default function CoverBanner() {
  return (
    <section className="bg-surface relative overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-0">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy/10 border border-gray-100">
              <img
                src="/image/juristech-cover-page.png"
                alt="JurisTech services — custom software, websites, business incorporation and legal documents"
                width={2055}
                height={765}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 lg:py-8">
            <span className="badge-gold badge inline-flex">ALL-IN-ONE</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy tracking-tight leading-snug">
              Everything your business needs — under one roof.
            </h2>
            <p className="text-muted text-base lg:text-lg leading-relaxed max-w-lg">
              From custom software and professional websites to CAC registration
              and legal documents — JurisTech handles the full stack so you can
              focus on running your business.
            </p>

            <ul className="space-y-3 pt-2">
              {services.map((s) => (
                <li key={s.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-4.5 h-4.5 text-navy" />
                  </div>
                  <span className="text-navy text-sm font-medium">{s.label}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all duration-300">
                Explore all services
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
