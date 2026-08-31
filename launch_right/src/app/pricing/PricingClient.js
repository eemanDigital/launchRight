"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  pricingPlans,
  specialPackages,
  regularPackages,
  addons,
} from "@/data/pricingData";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckIcon,
  ClockIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
  ArrowRightIcon,
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
      bg: "bg-blue-50",
      border: "border-blue-200",
      accent: "text-blue-600",
      badge: "bg-blue-600",
    },
    purple: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      accent: "text-blue-600",
      badge: "bg-blue-600",
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
        <div className="absolute top-0 left-0 right-0 bg-gold text-white py-2 text-center text-sm font-bold">
          {plan.badge}
        </div>
      )}

      <div className={`p-6 flex flex-col flex-1 ${isHighlighted || plan.badge ? "pt-10" : ""}`}>
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
          <span className={`text-3xl md:text-4xl font-extrabold ${isHighlighted || isDark ? "text-white" : "text-navy"}`}>
            {plan.price}
          </span>
        </div>

        <div className={`flex items-center gap-2 text-sm font-medium mb-4 ${isHighlighted || isDark ? "text-gray-300" : colors.accent}`}>
          <ClockIcon className="w-4 h-4" />
          <span>{plan.timeline}</span>
        </div>

        <ul className="space-y-2 mb-6 flex-1">
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
                ? "bg-gold text-white hover:bg-gold-light"
                : "bg-navy text-white hover:bg-navy-light"
          }`}>
          Get Started
        </a>

        {plan.highlight && (
          <p className={`text-sm italic text-center mt-4 ${isHighlighted || isDark ? "text-gray-400" : "text-gray-400"}`}>
            "{plan.highlight}"
          </p>
        )}
      </div>
    </motion.div>
  );
}

function SpecialPackageCard({ plan }) {
  const colors = getColorClasses(plan.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex flex-col rounded-2xl overflow-hidden ${colors.bg} border ${colors.border} shadow-lg`}>
      <div className="p-6 flex flex-col flex-1">
        <p className={`text-sm font-medium mb-1 ${colors.accent}`}>
          {plan.subtitle}
        </p>
        <h3 className={`text-xl font-bold mb-3 ${"text-navy"}`}>
          {plan.name}
        </h3>

        <div className="my-4">
          <span className={`text-3xl md:text-4xl font-extrabold text-navy`}>
            {plan.price}
          </span>
        </div>

        <div className={`flex items-center gap-2 text-sm font-medium mb-4 ${colors.accent}`}>
          <ClockIcon className="w-4 h-4" />
          <span>{plan.timeline}</span>
        </div>

        <ul className="space-y-2 mb-6 flex-1">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${colors.accent}`} />
              <span className="text-gray-700">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/message/KTFL2G2JM3JTP1"
          className="block w-full text-center py-3 rounded-lg font-bold text-sm bg-navy text-white hover:bg-navy-light transition-all">
          Get Started
        </a>

        {plan.highlight && (
          <p className={`text-sm italic text-center mt-4 text-gray-400`}>
            "{plan.highlight}"
          </p>
        )}
      </div>
    </motion.div>
  );
}

function RegularPackageCard({ pkg }) {
  const colors = getColorClasses(pkg.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex flex-col rounded-2xl overflow-hidden ${colors.bg} border ${colors.border} shadow-md`}>
      <div className="p-6 flex flex-col flex-1">
        <h3 className={`text-lg font-bold mb-2 text-navy`}>
          {pkg.name}
        </h3>

        <div className="mb-2">
          <span className={`text-2xl md:text-3xl font-extrabold text-navy`}>
            {pkg.price}
          </span>
          {pkg.originalPrice && (
            <span className="text-sm line-through ml-2 text-gray-500">
              {pkg.originalPrice}
            </span>
          )}
        </div>

        <div className={`flex items-center gap-2 text-sm font-medium mb-4 ${colors.accent}`}>
          <ClockIcon className="w-4 h-4" />
          <span>{pkg.timeline}</span>
        </div>

        <ul className="space-y-2 mb-6 flex-1">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${colors.accent}`} />
              <span className="text-gray-700">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {pkg.note && (
          <p className={`text-xs italic text-center mb-4 text-gray-400`}>
            {pkg.note}
          </p>
        )}

        <a
          href="https://wa.me/message/KTFL2G2JM3JTP1"
          className="block w-full text-center py-3 rounded-lg font-bold text-sm bg-navy text-white hover:bg-navy-light transition-all">
          Get Started
        </a>
      </div>
    </motion.div>
  );
}

const otherServices = [
  {
    icon: GlobeAltIcon,
    name: "Website Development",
    desc: "Landing pages to e-commerce",
    link: "/website",
  },
  {
    icon: ComputerDesktopIcon,
    name: "Software & Apps",
    desc: "POS, Apps, Custom Systems",
    link: "/software",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-12 bg-navy">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Pricing & Packages
          </h1>
          <p className="text-white/60 text-center mt-4 max-w-2xl mx-auto">
            Complete packages combining CAC registration websites, legal
            documents, and dedicated support — with standalone options and
            add-ons to fit your needs
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

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-16 max-w-5xl mx-auto items-start">
            {pricingPlans.map((plan, index) => (
              <PackageCard key={index} plan={plan} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Special Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored packages for organisations, NGOs, and investors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto items-start">
            {specialPackages.map((plan, index) => (
              <SpecialPackageCard key={index} plan={plan} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Standalone Registrations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don&apos;t need a full package? Register your business with a
              single service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-16 max-w-5xl mx-auto items-start">
            {regularPackages.map((pkg, index) => (
              <RegularPackageCard key={index} pkg={pkg} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-xl max-w-4xl mx-auto mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-navy text-center mb-6">
              Add-On Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {addons.map((addon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-3 p-3 sm:p-4 rounded-xl border border-gray-100 bg-surface">
                  <span className="text-sm font-medium text-gray-700">
                    {addon.name}
                  </span>
                  <span className="text-sm font-bold text-navy whitespace-nowrap">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              Mix and match add-ons to create a solution that fits your business
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-2xl font-bold text-navy mb-6">
              More Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
            {otherServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <Link
                  href={service.link}
                  className="group flex items-center justify-between gap-4 p-5 rounded-xl border border-gray-100 bg-white hover:border-gold/20 hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <service.icon className="w-5 h-5 text-navy/60 group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy tracking-tight">
                        {service.name}
                      </h4>
                      <p className="text-muted text-xs">{service.desc}</p>
                    </div>
                  </div>
                  <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-gold transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16">
            <p className="text-gray-600 mb-4">
              Need help choosing the right package or a custom solution?
            </p>
            <a
              href="https://wa.me/message/KTFL2G2JM3JTP1"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy-light transition-colors shadow-lg shadow-navy/10 text-sm sm:text-base">
              Chat With Us for a Tailored Quote
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}