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
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

export default function Pricing() {
  const plans = [
    {
      name: " STARTER PACK",
      subtitle: "For side hustlers, market traders, freelancers",
      price: "₦75,000",
      itemizedValue: "BN Reg (₦35k) + Landing Page (₦45k) + Domain (₦15k) = ₦95,000",
      timeline: "5-8 working days",
      features: [
        "CAC Business Name Registration (BN)",
        "Certificate of Registration",
        "Status Report",
        "1-page landing page",
        "30 days WhatsApp support post-registration",
        "Custom .com.ng Domain",
      ],
      highlight: "stop operating in the shadows",
      color: "emerald",
    },
    {
      name: "THE ENTREPRENEUR",
      subtitle: "For entrepreneurs, product-based businesses, consultants",
      price: "₦135,000",
      itemizedValue: "LTD (₦75k) + Website (₦120k) + Contracts (₦45k) = ₦240,000",
      timeline: "7–10 working days",
      features: [
        "CAC Private Limited Company (RC Number)",
        "Certificate of Incorporation + MEMART",
        "3-page professional business website",
        "Custom .ng domain name (1st year FREE)",
        "Business email setup",
        "Shareholders Agreement (lawyer-drafted)",
        "1 Employment or Service Contract",
        "60 days post-registration support",
      ],
      highlight: "open doors that a business name never can",
      color: "blue",
      popular: true,
    },
    {
      name: "BOSS MOVE",
      subtitle: "For growing SMEs, importers/exporters, real estate",
      price: "₦300,000",
      itemizedValue: "Everything in Entrepreneur + E-commerce + Legal toolkit",
      timeline: "10–14 working days",
      features: [
        "CAC Private Limited Company (RC Number)",
        "Certificate of Incorporation + MEMART + Status Report",
        "5-page custom business website",
        "Paystack or Flutterwave payment integration",
        "WhatsApp chat button on website",
        "Shareholders Agreement",
        "2 Custom Contracts (your choice)",
        "1 Letter of Demand template",
        "FIRS TIN Registration",
        "SCUML pre-compliance guidance",
        "3 months dedicated support",
      ],
      highlight: "the letter of demand has recovered millions",
      color: "slate",
      badge: "Complete Setup",
    },
  ];

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
    <section id="pricing" className="section-pad bg-gradient-to-b from-gray-50 to-white">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">CAC Registration</span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 mb-4">
            Choose Your Package
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Professional CAC registration with websites, legal documents, and
            dedicated support. All packages include government filing fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color);
            const isHighlighted = plan.popular || plan.badge;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col rounded-3xl overflow-hidden ${
                  plan.popular
                    ? "bg-navy text-white shadow-2xl shadow-navy/30 ring-2 ring-blue-500 scale-[1.02] z-10"
                    : plan.badge
                    ? "bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl ring-2 ring-gold"
                    : "bg-white border border-gray-200 shadow-lg"
                }`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white py-2.5 text-center text-sm font-bold flex items-center justify-center gap-1.5">
                    <StarIconSolid className="w-4 h-4" /> Most Popular
                  </div>
                )}
                {plan.badge && !plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gold text-navy py-2.5 text-center text-sm font-bold">
                    Complete Setup
                  </div>
                )}

                <div className={`p-8 ${isHighlighted ? "pt-12" : ""}`}>
                  <p className={`text-sm font-medium mb-2 ${isHighlighted ? "text-gray-300" : "text-gray-500"}`}>
                    {plan.subtitle}
                  </p>
                  <h3 className={`text-2xl font-bold mb-1 ${isHighlighted ? "text-white" : "text-navy"}`}>
                    {plan.name}
                  </h3>

                  <div className="my-6">
                    <span className={`text-4xl font-extrabold ${isHighlighted ? "text-white" : "text-navy"}`}>
                      {plan.price}
                    </span>
                  </div>
                  <div className={`text-xs mb-6 pb-4 border-b ${isHighlighted ? "text-gray-400 border-white/10" : "text-gray-500 border-gray-200"}`}>
                    {plan.itemizedValue}
                  </div>

                  <div className={`flex items-center gap-2 text-sm font-medium mb-6 ${isHighlighted ? "text-gray-300" : colors.accent}`}>
                    <ClockIcon className="w-5 h-5" />
                    <span>{plan.timeline}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isHighlighted ? "text-gold" : colors.accent}`} />
                        <span className={isHighlighted ? "text-gray-200" : "text-gray-600"}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <a
                    href="https://wa.me/message/KTFL2G2JM3JTP1"
                    className={`block w-full text-center py-4 rounded-xl font-bold text-sm transition-all ${
                      plan.popular
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : plan.badge
                        ? "bg-gold text-navy hover:bg-yellow-400"
                        : "bg-navy text-white hover:bg-navy-light"
                    }`}>
                    Get Started
                  </a>
                </div>
                
                <div className={`px-8 pb-8 pt-0 ${isHighlighted ? "border-t border-white/10" : ""}`}>
                  <p className={`text-sm italic text-center ${isHighlighted ? "text-gray-400" : "text-gray-400"}`}>
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
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-navy mb-3">Need More Options?</h3>
          <p className="text-gray-500">Explore our full range of services and pricing</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {moreServices.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <Link
                key={index}
                href={service.link}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:border-gold/30 transition-all"
              >
                <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 ${colors.accent}`} />
                </div>
                <h4 className="text-lg font-bold text-navy mb-1">{service.name}</h4>
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
          className="text-center mt-16"
        >
          <p className="text-gray-500 mb-4">Need NGO, Foreign Investor, or custom services?</p>
          <a
            href="https://wa.me/message/KTFL2G2JM3JTP1"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy-light transition-colors">
            Chat With Us for a Tailored Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
