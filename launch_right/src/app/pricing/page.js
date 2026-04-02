"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pricingPlans } from "@/data/pricingData";
import { motion } from "framer-motion";
import {
  CheckIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

const getColorClasses = (color) => {
  const colors = {
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      accent: "text-emerald-600",
      badge: "bg-emerald-500",
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      accent: "text-blue-600",
      badge: "bg-blue-600",
    },
    gold: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      accent: "text-amber-600",
      badge: "bg-gold",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      accent: "text-purple-600",
      badge: "bg-purple-600",
    },
    slate: {
      bg: "bg-slate-50",
      border: "border-slate-200",
      accent: "text-slate-600",
      badge: "bg-slate-700",
    },
  };
  return colors[color] || colors.blue;
};

function PackageCard({ plan }) {
  const colors = getColorClasses(plan.color);
  const isHighlighted = plan.popular || plan.badge;
  const isDark = plan.badge === "PREMIUM" && !plan.popular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative flex flex-col rounded-2xl overflow-hidden ${
        isHighlighted
          ? "bg-navy text-white shadow-2xl ring-2 ring-blue-500"
          : isDark
            ? "bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl ring-2 ring-gold"
            : `${colors.bg} border ${colors.border} shadow-lg`
      }`}>
      {isHighlighted && plan.popular && (
        <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white py-2 text-center text-sm font-bold flex items-center justify-center gap-1">
          <StarIconSolid className="w-4 h-4" /> Most Popular
        </div>
      )}
      {!isHighlighted && plan.badge && (
        <div className="absolute top-0 left-0 right-0 bg-gold text-navy py-2 text-center text-sm font-bold">
          {plan.badge}
        </div>
      )}

      <div className={`p-6 ${isHighlighted || plan.badge ? "pt-10" : ""}`}>
        <p className={`text-sm font-medium mb-1 ${isHighlighted || isDark ? "text-gray-300" : "text-gray-500"}`}>
          {plan.subtitle}
        </p>
        <h3 className={`text-xl font-bold mb-1 ${isHighlighted || isDark ? "text-white" : "text-navy"}`}>
          {plan.name}
        </h3>
        {plan.tagline && (
          <p className={`text-sm font-medium mb-4 ${isHighlighted || isDark ? "text-gold" : "text-gold"}`}>
            {plan.tagline}
          </p>
        )}

        <div className="my-4">
          <span className={`text-4xl font-extrabold ${isHighlighted || isDark ? "text-white" : "text-navy"}`}>
            {plan.price}
          </span>
        </div>

        <div className={`flex items-center gap-2 text-sm font-medium mb-4 ${isHighlighted || isDark ? "text-gray-300" : colors.accent}`}>
          <ClockIcon className="w-4 h-4" />
          <span>{plan.timeline}</span>
        </div>

        <ul className="space-y-2 mb-6">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckIcon
                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isHighlighted || isDark ? "text-gold" : colors.accent}`}
              />
              <span className={isHighlighted || isDark ? "text-gray-200" : "text-gray-700"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/message/KTFL2G2JM3JTP1"
          className={`block w-full text-center py-3 rounded-lg font-bold text-sm transition-all ${
            isHighlighted && plan.popular
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : isDark
                ? "bg-gold text-navy hover:bg-yellow-400"
                : "bg-navy text-white hover:bg-navy-light"
          }`}>
          Get Started
        </a>

        <p className={`text-sm italic text-center mt-4 ${isHighlighted || isDark ? "text-gray-400" : "text-gray-400"}`}>
          "{plan.highlight}"
        </p>
      </div>
    </motion.div>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 bg-navy">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            CAC Registration Packages
          </h1>
          <p className="text-white/60 text-center mt-4 max-w-2xl mx-auto">
            Professional CAC registration with websites, legal documents, and
            dedicated support
          </p>
        </div>
      </div>

      <section className="section-pad bg-surface">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Premium Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete registration packages with websites, legal documents, and
              ongoing support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PackageCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
