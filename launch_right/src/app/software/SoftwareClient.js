"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import PageHero from "@/components/PageHero";
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
      bg: "bg-green-soft",
      border: "border-green-2/25",
      accent: "text-green-2",
      badge: "bg-green-2",
    },
    blue: {
      bg: "bg-blue-soft",
      border: "border-blue-2/25",
      accent: "text-blue-2",
      badge: "bg-blue-2",
    },
    slate: {
      bg: "bg-surface",
      border: "border-line",
      accent: "text-muted",
      badge: "bg-navy",
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
          ? "bg-navy text-white shadow-2xl ring-2 ring-blue-500"
          : `${colors.bg} border ${colors.border} shadow-lg`
      }`}
    >
      {pkg.popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-2 to-green-dark text-white py-2 text-center text-sm font-bold">
          Best Value
        </div>
      )}

      <div className={`p-6 ${isHighlighted ? "pt-10" : ""}`}>
        <div className="flex items-center gap-2 mb-3">
          <CodeBracketIcon
            className={`w-5 h-5 ${isHighlighted ? "text-green-2" : colors.accent}`}
          />
          <span
            className={`text-xs font-medium ${isHighlighted ? "text-white/60" : "text-muted"}`}
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
              className={`text-sm line-through ml-2 ${isHighlighted ? "text-white/40" : "text-muted-light"}`}
            >
              {pkg.originalPrice}
            </span>
          )}
        </div>

        <div
          className={`flex items-center gap-2 text-xs font-medium mb-4 ${isHighlighted ? "text-white/60" : colors.accent}`}
        >
          <ClockIcon className="w-3 h-3" />
          <span>{pkg.timeline}</span>
        </div>

        <ul className="space-y-2 mb-6">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-xs">
              <CheckIcon
                className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isHighlighted ? "text-green-2" : colors.accent}`}
              />
              <span className={isHighlighted ? "text-white/75" : "text-ink-soft"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/message/KTFL2G2JM3JTP1"
          className={`block w-full text-center py-3 rounded-lg font-bold text-sm transition-all ${
            isHighlighted
              ? "bg-gradient-to-r from-green-2 to-green-dark text-white hover:shadow-[0_8px_20px_rgba(22,166,106,0.4)]"
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
      <PageHero
        eyebrow="CUSTOM SOFTWARE"
        title={
          <>
            Software &amp; Apps,{" "}
            <span className="text-gradient-brand">engineered for Nigeria.</span>
          </>
        }
        subtitle="Custom software solutions built for Nigerian businesses. From POS systems to mobile apps."
        period="BUILT · DEPLOYED · SUPPORTED"
      />

      <section className="section-pad bg-surface">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="eyebrow-label mb-4">PACKAGES</span>
            <h2 className="text-3xl font-extrabold text-navy mb-4 tracking-tight">
              Choose Your Software Package
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
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
                className="bg-white rounded-2xl p-6 shadow-soft border border-line text-center"
              >
                <div className="w-12 h-12 bg-blue-2/15 border border-blue-2/25 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-blue-2" />
                </div>
                <h3 className="font-bold text-navy mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-muted text-sm">{feature.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="band-cover rounded-3xl p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto text-center"
          >
            <div className="absolute inset-0 hero-gradient-cover" />
            <div className="relative">
              <h3 className="text-xl md:text-2xl font-extrabold text-white mb-4 tracking-tight">
                Have a Unique Requirement?
              </h3>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                Tell us about your business needs and we&apos;ll build a custom
                solution for you.
              </p>
              <a
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-gradient-to-r from-green-2 to-green-dark text-white font-bold hover:shadow-[0_12px_30px_rgba(22,166,106,0.4)] transition-all"
              >
                Discuss Your Project
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
