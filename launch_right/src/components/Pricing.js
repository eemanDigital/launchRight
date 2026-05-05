"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { pricingPlans as plans } from "@/data/pricingData";
import { event } from "@/lib/fpixel";

export default function Pricing() {
  const moreServices = [
    {
      icon: DocumentTextIcon,
      name: "NGO & Foundation",
      desc: "Churches, charities, non-profits",
      link: "/pricing",
      color: "purple",
    },
    {
      icon: GlobeAltIcon,
      name: "Website Development",
      desc: "Landing pages to e-commerce",
      link: "/website",
      color: "blue",
    },
    {
      icon: ComputerDesktopIcon,
      name: "Software & Apps",
      desc: "POS, Mobile Apps, Custom",
      link: "/software",
      color: "emerald",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        accent: "text-emerald-600",
        badge: "bg-emerald-500",
        iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        accent: "text-blue-600",
        badge: "bg-blue-600",
        iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
      },
      slate: {
        bg: "bg-slate-800",
        border: "border-slate-700",
        accent: "text-slate-300",
        badge: "bg-gold",
        iconBg: "bg-gradient-to-br from-slate-700 to-slate-800",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        accent: "text-purple-600",
        badge: "bg-purple-500",
        iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="pricing" className="section-pad mesh-gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-gold/4 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="badge-gold badge mb-4 inline-flex">PRICING</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight">
            Everything You Need to Launch
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            CAC registration, professional websites, and legal documents — all from one team. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color);
            const isHighlighted = plan.popular;
            const isDark = plan.badge === "PREMIUM" && !plan.popular;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col rounded-2xl overflow-hidden ${
                  isHighlighted
                    ? "bg-gradient-to-br from-navy to-navy-deep text-white shadow-2xl shadow-navy/20 ring-2 ring-gold/50 scale-[1.02] z-10"
                    : isDark
                      ? "bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl ring-1 ring-gold/30"
                      : "bg-white border border-gray-100 shadow-lg"
                }`}>
                {isHighlighted && (
                  <div className="bg-gradient-to-r from-gold to-gold-light text-navy py-2.5 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                    <StarIconSolid className="w-3.5 h-3.5" /> Most Popular
                  </div>
                )}
                {!isHighlighted && plan.badge && (
                  <div className="bg-gold text-navy py-2.5 text-center text-xs font-bold uppercase tracking-wider">
                    {plan.badge}
                  </div>
                )}

                <div className={`p-8 ${isHighlighted || plan.badge ? "pt-8" : ""}`}>
                  <p className={`text-sm font-medium mb-1 ${isHighlighted || isDark ? "text-gray-400" : "text-muted"}`}>
                    {plan.subtitle}
                  </p>
                  <h3 className={`text-lg font-bold mb-1 tracking-tight ${isHighlighted || isDark ? "text-white" : "text-navy"}`}>
                    {plan.name}
                  </h3>
                  {plan.tagline && (
                    <p className={`text-sm font-medium mb-5 ${isHighlighted || isDark ? "text-gold" : "text-gold"}`}>
                      {plan.tagline}
                    </p>
                  )}

                  <div className="my-6">
                    <span className={`text-4xl font-extrabold tracking-tight ${isHighlighted || isDark ? "text-white" : "text-navy"}`}>
                      {plan.price}
                    </span>
                  </div>

                  <div className={`flex items-center gap-2 text-sm font-medium mb-6 ${isHighlighted || isDark ? "text-gray-400" : colors.accent}`}>
                    <ClockIcon className="w-4 h-4" />
                    <span>{plan.timeline}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckIcon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isHighlighted || isDark ? "text-gold" : colors.accent}`} />
                        <span className={isHighlighted || isDark ? "text-gray-300" : "text-gray-600"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/message/KTFL2G2JM3JTP1"
                    className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all ${
                      isHighlighted
                        ? "bg-gradient-to-r from-gold to-gold-light text-navy hover:shadow-gold hover:shadow-lg"
                        : isDark
                          ? "bg-gold text-navy hover:bg-gold-light"
                          : "bg-navy text-white hover:bg-navy-light"
                    }`}
                    onClick={() => event('SelectPlan', { plan_name: plan.name, price: plan.price })}>
                    Get Started
                  </a>

                  <p className={`text-xs italic text-center mt-4 ${isHighlighted || isDark ? "text-gray-500" : "text-muted"}`}>
                    "{plan.highlight}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-gold/8 via-gold/4 to-gold/8 rounded-2xl p-6 text-center border border-gold/15">
            <div className="flex items-center justify-center gap-2 mb-2">
              <SparklesIcon className="w-5 h-5 text-gold" />
              <span className="font-semibold text-navy">Limited Availability</span>
            </div>
            <p className="text-muted text-sm">
              We only take on a limited number of clients weekly to ensure quality delivery. Secure your spot today.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10">
          <h3 className="text-2xl font-bold text-navy mb-3 tracking-tight">
            Need More Options?
          </h3>
          <p className="text-muted">Explore our full range of services</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {moreServices.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <Link
                key={index}
                href={service.link}
                className="group card-premium bg-white p-6">
                <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-navy mb-1 tracking-tight">
                  {service.name}
                </h4>
                <p className="text-muted text-sm mb-3">{service.desc}</p>
                <div className="flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-200">
                  View pricing <ArrowRightIcon className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16">
          <p className="text-muted mb-4">
            Need NGO registration, Foreign Investor packages, or custom services?
          </p>
          <a
            href="https://wa.me/message/KTFL2G2JM3JTP1"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy-light transition-colors shadow-lg shadow-navy/10"
            onClick={() => event('Contact', { content_name: 'Pricing Custom Quote', method: 'WhatsApp' })}>
            Chat With Us for a Tailored Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
