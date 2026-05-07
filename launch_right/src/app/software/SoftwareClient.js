"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { softwarePackages } from "@/data/pricingData";
import { motion } from "framer-motion";
import { CheckIcon, ClockIcon, CodeBracketIcon, DevicePhoneMobileIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const features = [
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile Apps",
    desc: "Native Android apps for your business",
  },
  {
    icon: ShoppingCartIcon,
    title: "POS Systems",
    desc: "Complete retail management solutions",
  },
  {
    icon: CodeBracketIcon,
    title: "Custom Software",
    desc: "Tailored systems for your workflow",
  },
];

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
    slate: {
      bg: "bg-slate-50",
      border: "border-slate-200",
      accent: "text-slate-600",
      badge: "bg-slate-700",
    },
  };
  return colors[color] || colors.blue;
};

function SoftwarePackageCard({ pkg }) {
  const colors = getColorClasses(pkg.color);
  const isHighlighted = pkg.popular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative flex flex-col rounded-2xl overflow-hidden ${
        isHighlighted
          ? "bg-navy text-white shadow-2xl ring-2 ring-purple-500"
          : `${colors.bg} border ${colors.border} shadow-lg`
      }`}
    >
      {pkg.popular && (
        <div className="absolute top-0 left-0 right-0 bg-purple-500 text-white py-2 text-center text-sm font-bold">
          Best Value
        </div>
      )}

      <div className={`p-6 ${isHighlighted ? "pt-10" : ""}`}>
        <div className="flex items-center gap-2 mb-3">
          <CodeBracketIcon
            className={`w-5 h-5 ${isHighlighted ? "text-purple-400" : colors.accent}`}
          />
          <span
            className={`text-xs font-medium ${isHighlighted ? "text-gray-300" : "text-gray-500"}`}
          >
            {pkg.subtitle}
          </span>
        </div>

        <h2 className={`text-xl font-bold mb-2 ${isHighlighted ? "text-white" : "text-navy"}`}>
          {pkg.name}
        </h2>

        <div className="mb-4">
          <span
            className={`text-2xl font-extrabold ${isHighlighted ? "text-white" : "text-navy"}`}
          >
            {pkg.price}
          </span>
          {pkg.originalPrice && (
            <span
              className={`text-sm line-through ml-2 ${isHighlighted ? "text-gray-400" : "text-gray-500"}`}
            >
              {pkg.originalPrice}
            </span>
          )}
        </div>

        <div
          className={`flex items-center gap-2 text-xs font-medium mb-4 ${isHighlighted ? "text-gray-300" : colors.accent}`}
        >
          <ClockIcon className="w-3 h-3" />
          <span>{pkg.timeline}</span>
        </div>

        <ul className="space-y-2 mb-6">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-xs">
              <CheckIcon
                className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isHighlighted ? "text-purple-400" : colors.accent}`}
              />
              <span className={isHighlighted ? "text-gray-200" : "text-gray-700"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/message/KTFL2G2JM3JTP1"
          className={`block w-full text-center py-3 rounded-lg font-bold text-sm transition-all ${
            isHighlighted
              ? "bg-purple-500 text-white hover:bg-purple-600"
              : "bg-navy text-white hover:bg-navy-light"
          }`}
        >
          Get Quote
        </a>
      </div>
    </motion.div>
  );
}

export default function SoftwarePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 bg-navy">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Software & App Development
          </h1>
          <p className="text-white/60 text-center mt-4 max-w-2xl mx-auto">
            Custom software solutions built for Nigerian businesses. From POS
            systems to mobile apps.
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy mb-4">
              Choose Your Software Package
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All solutions include deployment, training, and ongoing support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {softwarePackages.map((pkg, index) => (
              <SoftwarePackageCard key={index} pkg={pkg} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-navy mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl max-w-4xl mx-auto text-center"
          >
            <h3 className="text-xl font-bold text-navy mb-4">
              Have a Unique Requirement?
            </h3>
            <p className="text-gray-600 mb-6">
              Tell us about your business needs and we&apos;ll build a custom
              solution for you.
            </p>
            <a
              href="https://wa.me/message/KTFL2G2JM3JTP1"
              className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy-light transition-colors"
            >
              Discuss Your Project
            </a>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
