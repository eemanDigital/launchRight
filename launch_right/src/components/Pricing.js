"use client";

import { motion } from "framer-motion";
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₦60,000",
      description: "For freelancers and sole traders",
      timeline: "24-48 hours",
      timelineNote: "Guaranteed",
      features: [
        "Business Name Registration",
        "Free name availability search",
        "CAC certificate (digital)",
        "TIN registration guidance",
        "Certificate explanation letter",
      ],
      popular: false,
      cta: "Starter",
    },
    {
      name: "Business",
      price: "₦175,000",
      description: "For small businesses and startups",
      timeline: "24-48 hours",
      timelineNote: "Guaranteed",
      features: [
        "Business Name Registration",
        "CAC certificate",
        "TIN registration guidance",
        "5-page business website",
        "Domain & hosting (1 year)",
        "Service Agreement template",
        "Privacy Policy",
      ],
      popular: true,
      cta: "Business%20Launch",
    },
    {
      name: "Corporate",
      price: "₦350,000",
      description: "For companies ready to scale",
      timeline: "4-15 days",
      timelineNote: "Subject to CAC",
      features: [
        "Private Limited Company (LTD)",
        "MEMART (lawyer-drafted)",
        "CAC Form 1.1 + Status Report",
        "Corporate seal (digital)",
        "8-10 page corporate website",
        "Shareholders' Agreement",
        "Employment Contract",
        "Privacy Policy + Terms",
      ],
      popular: false,
      cta: "Corporate%20Setup",
    },
  ];

  const addons = [
    { name: "CAC Annual Returns", price: "₦20,000/yr" },
    { name: "Business Name Renewal", price: "₦15,000" },
    { name: "Change of Directors", price: "from ₦35,000" },
    { name: "Website Maintenance", price: "₦25,000/mo" },
  ];

  return (
    <section id="pricing" className="section-pad bg-surface">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Choose the package that fits your needs. All prices include CAC fees and our service charge.
          </p>
          <p className="text-gold text-sm mt-3">
            Business Name: 24-48 hours guaranteed • LTD & IT: 4-15 days (subject to CAC approval)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? "bg-navy text-white ring-4 ring-navy/10" 
                  : "bg-white border border-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? "text-white" : "text-navy"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-white/70" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-6">
                <div className={`text-3xl font-semibold ${plan.popular ? "text-white" : "text-navy"}`}>
                  {plan.price}
                </div>
                <div className={`flex items-center gap-1 mt-2 text-sm ${plan.popular ? "text-white/70" : "text-gray-500"}`}>
                  <ClockIcon className="w-4 h-4" />
                  {plan.timeline}
                  {plan.timelineNote && (
                    <span className="text-xs text-gold">({plan.timelineNote})</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-gold" : "text-success"}`} />
                    <span className={`text-sm ${plan.popular ? "text-white/80" : "text-gray-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/2348000000000?text=Hi%20JurisTech%2C%20I%27m%20interested%20in%20the%20${plan.cta}%20package`}
                className={`block text-center py-3 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? "bg-gold text-white hover:bg-gold-light"
                    : "bg-navy text-white hover:bg-navy-light"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-gray-100"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-navy mb-1">
              Add-on Services
            </h3>
            <p className="text-gray-500 text-sm">Need just one thing? Add to any package.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {addons.map((addon, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-surface rounded-xl">
                <span className="text-sm text-navy">{addon.name}</span>
                <span className="text-sm font-semibold text-gold">{addon.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">Not sure which package is right for you?</p>
          <a
            href="https://wa.me/2348000000000?text=Hi%20JurisTech%2C%20I%27m%20not%20sure%20which%20package%20to%20choose"
            className="btn-secondary"
          >
            Chat With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
