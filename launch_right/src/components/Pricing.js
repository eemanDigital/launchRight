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
  // const plans = [
  //   {
  //     name: "STARTER PACKAGE",
  //     tagline: "Start Smart",
  //     subtitle: "For side hustlers, market traders, freelancers",
  //     price: "₦80,000",
  //     timeline: "5–8 Working Days",
  //     features: [
  //       "CAC Business Name Registration",
  //       "Certificate of Registration",
  //       "Status Report",
  //       "1-Page Professional Website",
  //       "Custom Domain Name (.com.ng)",
  //       "WhatsApp Chat Integration",
  //       "30 Days Post-Setup Support",
  //     ],
  //     highlight: "Stop looking like an unregistered business. Start operating professionally.",
  //     color: "emerald",
  //     badge: "START SMART",
  //   },
  //   {
  //     name: "THE ENTREPRENEUR",
  //     tagline: "Most Popular",
  //     subtitle: "For entrepreneurs, product-based businesses, consultants",
  //     price: "₦135,000",
  //     timeline: "7–15 Working Days",
  //     features: [
  //       "Private Limited Company Registration",
  //       "Certificate of Incorporation + MEMART",
  //       "4-Page Professional Website",
  //       "Domain + Hosting (1 Year Included)",
  //       "Business Email Setup",
  //       "Shareholders Agreement (Lawyer-Drafted)",
  //       "1 Employment or Service Contract",
  //       "60 Days Post-Setup Support",
  //     ],
  //     highlight: "Build a business people trust, not just recognize.",
  //     color: "blue",
  //     popular: true,
  //   },
  //   {
  //     name: "BOSS MOVE",
  //     tagline: "Complete Setup",
  //     subtitle: "For growing SMEs, importers/exporters, real estate",
  //     price: "₦300,000",
  //     timeline: "10–14 Working Days",
  //     features: [
  //       "Everything in Entrepreneur Package",
  //       "6-Page Custom Website",
  //       "2 Custom Legal Contracts",
  //       "Shareholders Agreement",
  //       "Letter of Demand Template",
  //       "FIRS TIN Registration",
  //       "3 Months Dedicated Support",
  //     ],
  //     highlight: "Set up your business like a serious company from day one.",
  //     color: "slate",
  //     badge: "PREMIUM",
  //   },
  // ];

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
        iconBg: "bg-emerald-100",
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        accent: "text-blue-600",
        badge: "bg-blue-600",
        iconBg: "bg-blue-100",
      },
      slate: {
        bg: "bg-slate-800",
        border: "border-slate-700",
        accent: "text-slate-300",
        badge: "bg-gold",
        iconBg: "bg-slate-700",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        accent: "text-purple-600",
        badge: "bg-purple-500",
        iconBg: "bg-purple-100",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="pricing"
      className="section-pad bg-gradient-to-b from-gray-50 to-white">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Simple, Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 mb-4">
            Everything You Need to Launch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            CAC registration, professional websites, and legal documents — all
            from one team. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
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
                className={`relative flex flex-col rounded-3xl overflow-hidden ${
                  isHighlighted
                    ? "bg-navy text-white shadow-2xl shadow-navy/30 ring-2 ring-blue-500 scale-[1.02] z-10"
                    : isDark
                      ? "bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl ring-2 ring-gold"
                      : "bg-white border border-gray-200 shadow-lg"
                }`}>
                {isHighlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white py-2.5 text-center text-sm font-bold flex items-center justify-center gap-1.5">
                    <StarIconSolid className="w-4 h-4" /> Most Popular
                  </div>
                )}
                {!isHighlighted && plan.badge && (
                  <div className="absolute top-0 left-0 right-0 bg-gold text-navy py-2.5 text-center text-sm font-bold">
                    {plan.badge}
                  </div>
                )}

                <div
                  className={`p-8 ${isHighlighted || plan.badge ? "pt-12" : ""}`}>
                  <p
                    className={`text-sm font-medium mb-1 ${isHighlighted || isDark ? "text-gray-300" : "text-gray-500"}`}>
                    {plan.subtitle}
                  </p>
                  <h3
                    className={`text-xl font-bold mb-1 ${isHighlighted || isDark ? "text-white" : "text-navy"}`}>
                    {plan.name}
                  </h3>
                  {plan.tagline && (
                    <p
                      className={`text-sm font-medium mb-4 ${isHighlighted || isDark ? "text-gold" : "text-gold"}`}>
                      {plan.tagline}
                    </p>
                  )}

                  <div className="my-6">
                    <span
                      className={`text-4xl font-extrabold ${isHighlighted || isDark ? "text-white" : "text-navy"}`}>
                      {plan.price}
                    </span>
                  </div>

                  <div
                    className={`flex items-center gap-2 text-sm font-medium mb-6 ${isHighlighted || isDark ? "text-gray-300" : colors.accent}`}>
                    <ClockIcon className="w-5 h-5" />
                    <span>{plan.timeline}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckIcon
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isHighlighted || isDark ? "text-gold" : colors.accent}`}
                        />
                        <span
                          className={
                            isHighlighted || isDark
                              ? "text-gray-200"
                              : "text-gray-600"
                          }>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/message/KTFL2G2JM3JTP1"
                    className={`block w-full text-center py-4 rounded-xl font-bold text-sm transition-all ${
                      isHighlighted
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : isDark
                          ? "bg-gold text-navy hover:bg-yellow-400"
                          : "bg-navy text-white hover:bg-navy-light"
                    }`}
                    onClick={() => event('SelectPlan', { plan_name: plan.name, price: plan.price })}>
                    Get Started
                  </a>

                  <p
                    className={`text-sm italic text-center mt-4 ${isHighlighted || isDark ? "text-gray-400" : "text-gray-400"}`}>
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
          <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 rounded-2xl p-6 text-center border border-gold/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <SparklesIcon className="w-5 h-5 text-gold" />
              <span className="font-semibold text-navy">
                Limited Availability
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              We only take on a limited number of clients weekly to ensure
              quality delivery. Secure your spot today.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <h3 className="text-2xl font-bold text-navy mb-3">
            Need More Options?
          </h3>
          <p className="text-gray-500">Explore our full range of services</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {moreServices.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <Link
                key={index}
                href={service.link}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:border-gold/30 transition-all">
                <div
                  className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 ${colors.accent}`} />
                </div>
                <h4 className="text-lg font-bold text-navy mb-1">
                  {service.name}
                </h4>
                <p className="text-gray-500 text-sm mb-3">{service.desc}</p>
                <div className="flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
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
          <p className="text-gray-500 mb-4">
            Need NGO registration, Foreign Investor packages, or custom
            services?
          </p>
          <a
            href="https://wa.me/message/KTFL2G2JM3JTP1"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy-light transition-colors"
            onClick={() => event('Contact', { content_name: 'Pricing Custom Quote', method: 'WhatsApp' })}>
            Chat With Us for a Tailored Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
