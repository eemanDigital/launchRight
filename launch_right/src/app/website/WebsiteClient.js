"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import PageHero from "@/components/PageHero";
import { webPackages } from "@/data/pricingData";
import { motion } from "framer-motion";
import { CheckIcon, ClockIcon, GlobeAltIcon, ShoppingCartIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

const features = [
  {
    icon: GlobeAltIcon,
    title: "Custom Design",
    desc: "Unique designs tailored to your brand",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile Responsive",
    desc: "Perfect on all devices",
  },
  {
    icon: ShoppingCartIcon,
    title: "Payment Integration",
    desc: "Accept payments easily",
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
    gold: {
      bg: "bg-blue-soft",
      border: "border-blue-2/25",
      accent: "text-blue-2",
      badge: "bg-blue-2",
    },
    purple: {
      bg: "bg-blue-soft",
      border: "border-blue-2/25",
      accent: "text-blue-2",
      badge: "bg-blue-2",
    },
  };
  return colors[color] || colors.blue;
};

function WebPackageCard({ pkg }) {
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
          Most Popular
        </div>
      )}

      <div className={`p-6 ${isHighlighted ? "pt-10" : ""}`}>
        <div className="flex items-center gap-2 mb-3">
          <GlobeAltIcon
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
          <span
            className={`text-sm line-through ml-2 ${isHighlighted ? "text-white/40" : "text-muted-light"}`}
          >
            {pkg.originalPrice}
          </span>
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
          Get Started
        </a>
      </div>
    </motion.div>
  );
}

export default function WebsitePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="WEBSITE DEVELOPMENT"
        title={
          <>
            Professional websites,{" "}
            <span className="text-gradient-brand">built for conversion.</span>
          </>
        }
        subtitle="Professional websites built for Nigerian businesses. Mobile-responsive, fast-loading, and SEO-optimized."
        period="DESIGN · BUILD · DEPLOY"
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
              Choose Your Website Package
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              All websites include custom design, mobile responsiveness, and
              WhatsApp integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {webPackages.map((pkg, index) => (
              <WebPackageCard key={index} pkg={pkg} />
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
                <div className="w-12 h-12 bg-green-2/15 border border-green-2/25 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-green-2" />
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
                Need Something Custom?
              </h3>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                Get a tailored website quote for your specific business needs. Chat
                with us to discuss your requirements.
              </p>
              <a
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-gradient-to-r from-green-2 to-green-dark text-white font-bold hover:shadow-[0_12px_30px_rgba(22,166,106,0.4)] transition-all"
              >
                Get Custom Quote
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
