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
    },
    {
      icon: GlobeAltIcon,
      name: "Website Development",
      desc: "Landing pages to e-commerce",
      link: "/website",
    },
    {
      icon: ComputerDesktopIcon,
      name: "Software & Apps",
      desc: "POS, Mobile Apps, Custom",
      link: "/software",
    },
  ];

  const getCTAText = (plan) => {
    if (plan.popular) return "Get Started";
    if (plan.badge === "PREMIUM") return "Go Premium";
    return "Get Started";
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
            Transparent Pricing, Real Results
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            CAC registration, professional websites, and legal documents — all from one team. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => {
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
                    <span className={`text-sm ${isHighlighted || isDark ? "text-gray-400" : "text-muted-light"}`}>
                      From
                    </span>
                    <span className={`text-4xl font-extrabold tracking-tight ml-1.5 ${isHighlighted || isDark ? "text-white" : "text-navy"}`}>
                      {plan.price}
                    </span>
                  </div>

                  <div className={`flex items-center gap-2 text-sm font-medium mb-6 ${isHighlighted || isDark ? "text-gray-400" : "text-muted"}`}>
                    <ClockIcon className="w-4 h-4" />
                    <span>{plan.timeline}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckIcon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isHighlighted || isDark ? "text-gold" : "text-success"}`} />
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
                    {getCTAText(plan)}
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
              <span className="font-semibold text-navy">Personal Attention, Every Time</span>
            </div>
            <p className="text-muted text-sm">
              We limit client intake weekly to ensure quality delivery and dedicated support for your project.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8">
          <h3 className="text-xl font-bold text-navy mb-2 tracking-tight">
            Also Available
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {moreServices.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group flex items-center gap-4 p-5 rounded-xl border border-gray-100 bg-white hover:border-gold/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                <service.icon className="w-5 h-5 text-navy/60 group-hover:text-gold transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy tracking-tight">
                  {service.name}
                </h4>
                <p className="text-muted text-xs">{service.desc}</p>
              </div>
            </Link>
          ))}
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
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
