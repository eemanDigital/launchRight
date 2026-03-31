"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { motion } from "framer-motion";
import { CheckIcon, ClockIcon, GlobeAltIcon, ShoppingCartIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

const webPackages = [
  {
    name: "Landing Page",
    subtitle: "Perfect for promotions, events, product launches",
    price: "₦45,000",
    originalPrice: "₦65,000",
    timeline: "3–5 days",
    features: [
      "1-3 page responsive design",
      "Mobile-first approach",
      "Contact form integration",
      "Social media links",
      "Basic SEO setup",
      "WhatsApp chat button",
    ],
    color: "emerald",
    popular: false,
  },
  {
    name: "Business Website",
    subtitle: "For established businesses needing online presence",
    price: "₦120,000",
    originalPrice: "₦180,000",
    timeline: "7–14 days",
    features: [
      "5-7 pages (Home, About, Services, Portfolio, Contact)",
      "Professional responsive design",
      "Business email integration",
      "Google Maps integration",
      "WhatsApp & call buttons",
      "Basic SEO optimization",
      "SSL certificate",
      "Custom domain setup",
    ],
    color: "blue",
    popular: true,
  },
  {
    name: "E-Commerce Store",
    subtitle: "Sell products online with full payment integration",
    price: "₦250,000",
    originalPrice: "₦350,000",
    timeline: "14–21 days",
    features: [
      "Unlimited products",
      "Paystack/Flutterwave integration",
      "Order management system",
      "Customer accounts",
      "Inventory management",
      "Delivery integration",
      "Mobile app notifications",
      "Marketing tools",
    ],
    color: "purple",
    popular: false,
  },
];

const features = [
  { icon: GlobeAltIcon, title: "Custom Design", desc: "Unique designs tailored to your brand" },
  { icon: DevicePhoneMobileIcon, title: "Mobile Responsive", desc: "Perfect on all devices" },
  { icon: ShoppingCartIcon, title: "Payment Integration", desc: "Accept payments easily" },
];

const getColorClasses = (color) => {
  const colors = {
    emerald: { bg: "bg-emerald-50", border: "border-emerald-200", accent: "text-emerald-600", badge: "bg-emerald-500" },
    blue: { bg: "bg-blue-50", border: "border-blue-200", accent: "text-blue-600", badge: "bg-blue-600" },
    purple: { bg: "bg-purple-50", border: "border-purple-200", accent: "text-purple-600", badge: "bg-purple-600" },
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
      }`}>
      {pkg.popular && (
        <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white py-2 text-center text-sm font-bold">
          Most Popular
        </div>
      )}

      <div className={`p-6 ${isHighlighted ? "pt-10" : ""}`}>
        <div className="flex items-center gap-2 mb-3">
          <GlobeAltIcon className={`w-5 h-5 ${isHighlighted ? "text-blue-400" : colors.accent}`} />
          <span className={`text-xs font-medium ${isHighlighted ? "text-gray-300" : "text-gray-500"}`}>
            {pkg.subtitle}
          </span>
        </div>

        <h4 className={`text-xl font-bold mb-2 ${isHighlighted ? "text-white" : "text-navy"}`}>
          {pkg.name}
        </h4>

        <div className="mb-4">
          <span className={`text-2xl font-extrabold ${isHighlighted ? "text-white" : "text-navy"}`}>
            {pkg.price}
          </span>
          <span className={`text-sm line-through ml-2 ${isHighlighted ? "text-gray-400" : "text-gray-500"}`}>
            {pkg.originalPrice}
          </span>
        </div>

        <div className={`flex items-center gap-2 text-xs font-medium mb-4 ${isHighlighted ? "text-gray-300" : colors.accent}`}>
          <ClockIcon className="w-3 h-3" />
          <span>{pkg.timeline}</span>
        </div>

        <ul className="space-y-2 mb-6">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-xs">
              <CheckIcon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isHighlighted ? "text-blue-400" : colors.accent}`} />
              <span className={isHighlighted ? "text-gray-200" : "text-gray-700"}>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/message/KTFL2G2JM3JTP1"
          className={`block w-full text-center py-3 rounded-lg font-bold text-sm transition-all ${
            isHighlighted ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-navy text-white hover:bg-navy-light"
          }`}>
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
      <div className="pt-24 pb-12 bg-navy">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Website Development
          </h1>
          <p className="text-white/60 text-center mt-4 max-w-2xl mx-auto">
            Professional websites built for Nigerian businesses. Mobile-responsive, fast-loading, and SEO-optimized.
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
            <h2 className="text-3xl font-bold text-navy mb-4">Choose Your Website Package</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All websites include custom design, mobile responsiveness, and WhatsApp integration
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
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-gold" />
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
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold text-navy mb-4">Need Something Custom?</h3>
            <p className="text-gray-600 mb-6">
              Get a tailored website quote for your specific business needs. Chat with us to discuss your requirements.
            </p>
            <a
              href="https://wa.me/message/KTFL2G2JM3JTP1"
              className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy-light transition-colors">
              Get Custom Quote
            </a>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
