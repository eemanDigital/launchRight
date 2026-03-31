"use client";

import { motion } from "framer-motion";
import {
  CheckIcon,
  ClockIcon,
  SparklesIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ShoppingCartIcon,
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
      cta: "JUST%20START",
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
      cta: "THE%20ENTREPRENEUR",
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
      cta: "BOSS%20MOVE",
      color: "gold",
      badge: "Complete Setup",
    },
    {
      name: "NGO / FOUNDATION",
      subtitle: "For churches, mosques, charities, foundations",
      price: "₦165,000",
      itemizedValue: "IT Reg (₦130k) + Website (₦120k) + Constitution (₦30k) = ₦280,000",
      timeline: "10–20 working days",
      features: [
        "CAC Incorporated Trustee Registration (IT Number)",
        "Constitution / Trust Deed (CAC-compliant)",
        "Certificate of Incorporation of Trustees",
        "5-page website ",
        "60 days post-registration support",
      ],
      highlight: "dont miss funding because of paperwork",
      cta: "NGO%20FOUNDATION",
      color: "purple",
    },
    {
      name: "FOREIGN INVESTOR / DIASPORA",
      subtitle: "For Nigerians abroad, foreign nationals, diaspora returnees",
      price: "₦280,000",
      itemizedValue: "Company + Website + Immigration docs + Investment agreements",
      timeline: "10–20 working days",
      features: [
        "CAC Private Limited Company or LLC Registration",
        "Certificate of Incorporation + MEMART",
        "5-page professional website",
        "Corporate bank account guidance",
        "Expatriate Quota / Immigration advice",
        "Shareholders Agreement",
        "Investment Agreement or JV Agreement",
        "Company Compliance Calendar",
        "3 months dedicated support",
        "All documents delivered digitally",
      ],
      highlight: "protect your investment from day one",
      cta: "FOREIGN%20INVESTOR",
      color: "slate",
    },
  ];

  const regularPackages = [
    {
      name: "Regular BN Registration",
      price: "₦35,000",
      originalPrice: "₦40,000",
      timeline: "3–5 working days",
      features: [
        "CAC Business Name Registration",
        "Certificate of Registration",
        "Status Report",
        "Free Consultation",
        "Annual Return Reminder (1 Year)",
      ],
      color: "emerald",
    },
    {
      name: "Regular LTD Registration",
      price: "₦74,999",
      originalPrice: "₦90,000",
      timeline: "7–10 working days",
      features: [
        "CAC Private Limited Company Registration",
        "Certificate of Incorporation",
        "MEMART",
        "Status Report",
        "Certification",
        "Free Consultation",
        "Annual Return Reminder (1 Year)",
      ],
      color: "blue",
    },
    {
      name: "Regular IT/NGO/Club Registration",
      price: "₦130,000",
      originalPrice: "₦150,000",
      timeline: "10–14 working days",
      features: [
        "CAC Incorporated Trustee Registration (IT)",
        "Certificate of Incorporation",
        "Constitution/Trust Deed",
        "Status Report",
        "Certification",
        "Free Consultation",
        "Annual Return Reminder (1 Year)",
      ],
      color: "purple",
    },
  ];

  const addons = [
    { name: "Extra website page", price: "₦15,000" },
    { name: "Additional custom contract", price: "₦25,000" },
    { name: "Power of Attorney", price: "₦25,000" },
    { name: "Annual Returns filing (CAC)", price: "₦15,000/Year" },
    { name: "Trademark search & advice", price: "₦30,000" },
    { name: "Website maintenance", price: "₦15,000/month" },
  ];

  const webDevPackages = [
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

  const softwarePackages = [
    {
      name: "Mobile App (Android)",
      subtitle: "Native Android app for your business",
      price: "₦350,000",
      originalPrice: "₦500,000",
      timeline: "21–30 days",
      features: [
        "Native Android development",
        "Custom UI/UX design",
        "Push notifications",
        "API integration",
        "User authentication",
        "Payment gateway",
        "Play Store deployment",
        "30 days support",
      ],
      color: "emerald",
      popular: false,
    },
    {
      name: "POS System",
      subtitle: "Point of Sale software for retail businesses",
      price: "₦180,000",
      originalPrice: "₦250,000",
      timeline: "10–14 days",
      features: [
        "Sales tracking",
        "Inventory management",
        "Receipt printing",
        "Multiple payment options",
        "Sales reports & analytics",
        "Staff management",
        "Multi-branch support",
        "Free setup training",
      ],
      color: "blue",
      popular: true,
    },
    {
      name: "Custom Software",
      subtitle: "Tailored solution for your specific needs",
      price: "From ₦500,000",
      originalPrice: "",
      timeline: "14–45 days",
      features: [
        "Requirements analysis",
        "Custom database design",
        "API development",
        "Dashboard & reports",
        "User role management",
        "Third-party integrations",
        "Deployment & training",
        "6 months support",
      ],
      color: "slate",
      popular: false,
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

  return (
    <section id="pricing" className="section-pad bg-surface">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            Choose Your Package
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Professional CAC registration with websites, legal documents, and
            dedicated support. All packages include government filing fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color, plan.popular);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`relative flex flex-col rounded-2xl overflow-hidden ${
                  plan.popular
                    ? "bg-navy text-white shadow-2xl shadow-navy/30 ring-2 ring-blue-500 scale-[1.02] z-10"
                    : plan.badge
                    ? `${colors.bg} border ${colors.border} shadow-lg ring-2 ring-gold`
                    : `${colors.bg} border ${colors.border} shadow-lg`
                }`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white py-2 text-center text-sm font-bold flex items-center justify-center gap-1">
                    <StarIconSolid className="w-4 h-4" /> Most Popular
                  </div>
                )}
                {plan.badge && !plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gold text-navy py-2 text-center text-sm font-bold">
                    {plan.badge}
                  </div>
                )}

                <div className={`p-6 ${plan.popular || plan.badge ? "pt-10" : ""}`}>
                  <h3
                    className={`text-lg font-bold mb-1 ${plan.popular || plan.badge ? "text-white" : "text-navy"}`}>
                    {plan.name}
                  </h3>
                  <p
                    className={`text-xs mb-4 ${plan.popular || plan.badge ? "text-gray-300" : "text-gray-600"}`}>
                    {plan.subtitle}
                  </p>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-3xl font-extrabold ${plan.popular || plan.badge ? "text-white" : "text-navy"}`}>
                        {plan.price}
                      </span>
                    </div>
                    <div
                      className={`text-xs mt-1 ${plan.popular || plan.badge ? "text-gray-400" : "text-gray-500"}`}>
                      {plan.itemizedValue}
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-2 text-sm font-medium mb-4 ${plan.popular ? "text-gray-300" : colors.accent}`}>
                    <ClockIcon className="w-4 h-4" />
                    <span>{plan.timeline}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <CheckIcon
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? "text-blue-400" : colors.accent}`}
                        />
                        <span
                          className={
                            plan.popular || plan.badge ? "text-gray-200" : "text-gray-700"
                          }>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-auto pt-4 border-t ${plan.popular || plan.badge ? "border-white/20" : colors.border}`}>
                    <p
                      className={`text-xs italic ${plan.popular || plan.badge ? "text-gray-400" : "text-gray-500"}`}>
                      "{plan.highlight}"
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <a
                    href="https://wa.me/message/KTFL2G2JM3JTP1"
                    className={`block w-full text-center py-3 rounded-lg font-bold text-sm transition-all ${
                      plan.popular
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : `bg-navy text-white hover:bg-navy-light`
                    }`}>
                    Get Started
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2 flex items-center justify-center gap-2">
              <SparklesIcon className="w-6 h-6 text-gold" />
              Regular Registration Packages
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Streamlined registration with essential documents, status reports,
              and annual return reminders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {regularPackages.map((pkg, index) => {
              const colors = getColorClasses(pkg.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-2xl overflow-hidden ${colors.bg} border ${colors.border} shadow-lg`}>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${colors.badge} text-white`}>
                        REGULAR
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <ClockIcon className="w-3 h-3" />
                        {pkg.timeline}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-navy mb-2">
                      {pkg.name}
                    </h4>

                    <div className="mb-4">
                      <span className="text-2xl font-extrabold text-navy">
                        {pkg.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {pkg.originalPrice}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs">
                          <CheckIcon
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${colors.accent}`}
                          />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="https://wa.me/message/KTFL2G2JM3JTP1"
                      className="block w-full text-center py-3 rounded-lg font-bold text-sm bg-navy text-white hover:bg-navy-light transition-colors">
                      Get Started
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-navy mb-2 flex items-center justify-center gap-2">
              <SparklesIcon className="w-6 h-6 text-gold" />
              Add-on Services
            </h3>
            <p className="text-gray-600">
              Stack these onto any package or order standalone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-gold/50 transition-colors">
                <span className="text-sm font-medium text-gray-700">
                  {addon.name}
                </span>
                <span className="text-sm font-bold text-navy">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2 flex items-center justify-center gap-2">
              <GlobeAltIcon className="w-6 h-6 text-blue-500" />
              Website Development
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional websites built for Nigerian businesses. Mobile-responsive, fast-loading, and SEO-optimized.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {webDevPackages.map((pkg, index) => {
              const colors = getColorClasses(pkg.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col rounded-2xl overflow-hidden ${
                    pkg.popular
                      ? "bg-navy text-white shadow-2xl ring-2 ring-blue-500"
                      : `${colors.bg} border ${colors.border} shadow-lg`
                  }`}>
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white py-1.5 text-center text-xs font-bold">
                      Most Popular
                    </div>
                  )}

                  <div className={`p-6 ${pkg.popular ? "pt-8" : ""}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <GlobeAltIcon className={`w-5 h-5 ${pkg.popular ? "text-blue-400" : colors.accent}`} />
                      <span className={`text-xs font-medium ${pkg.popular ? "text-gray-300" : "text-gray-500"}`}>
                        {pkg.subtitle}
                      </span>
                    </div>

                    <h4 className={`text-xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-navy"}`}>
                      {pkg.name}
                    </h4>

                    <div className="mb-4">
                      <span className={`text-2xl font-extrabold ${pkg.popular ? "text-white" : "text-navy"}`}>
                        {pkg.price}
                      </span>
                      {pkg.originalPrice && (
                        <span className={`text-sm line-through ml-2 ${pkg.popular ? "text-gray-400" : "text-gray-500"}`}>
                          {pkg.originalPrice}
                        </span>
                      )}
                    </div>

                    <div className={`flex items-center gap-2 text-xs font-medium mb-4 ${pkg.popular ? "text-gray-300" : colors.accent}`}>
                      <ClockIcon className="w-3 h-3" />
                      <span>{pkg.timeline}</span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs">
                          <CheckIcon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-blue-400" : colors.accent}`} />
                          <span className={pkg.popular ? "text-gray-200" : "text-gray-700"}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="https://wa.me/message/KTFL2G2JM3JTP1"
                      className={`block w-full text-center py-3 rounded-lg font-bold text-sm transition-all ${
                        pkg.popular
                          ? "bg-blue-500 text-white hover:bg-blue-600"
                          : "bg-navy text-white hover:bg-navy-light"
                      }`}>
                      Get Started
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8">
          <div className="relative flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <div className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-100">
              <p className="text-navy font-semibold text-sm flex items-center gap-2">
                <SparklesIcon className="w-4 h-4 text-gold" />
                Building something bigger? We also build custom software for Nigerian businesses.
              </p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2 flex items-center justify-center gap-2">
              <CodeBracketIcon className="w-6 h-6 text-purple-500" />
              Software & App Development
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Custom software solutions built for Nigerian businesses. From POS systems to mobile apps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {softwarePackages.map((pkg, index) => {
              const colors = getColorClasses(pkg.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col rounded-2xl overflow-hidden ${
                    pkg.popular
                      ? "bg-navy text-white shadow-2xl ring-2 ring-purple-500"
                      : `${colors.bg} border ${colors.border} shadow-lg`
                  }`}>
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-purple-500 text-white py-1.5 text-center text-xs font-bold">
                      Best Value
                    </div>
                  )}

                  <div className={`p-6 ${pkg.popular ? "pt-8" : ""}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <DevicePhoneMobileIcon className={`w-5 h-5 ${pkg.popular ? "text-purple-400" : colors.accent}`} />
                      <span className={`text-xs font-medium ${pkg.popular ? "text-gray-300" : "text-gray-500"}`}>
                        {pkg.subtitle}
                      </span>
                    </div>

                    <h4 className={`text-xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-navy"}`}>
                      {pkg.name}
                    </h4>

                    <div className="mb-4">
                      <span className={`text-2xl font-extrabold ${pkg.popular ? "text-white" : "text-navy"}`}>
                        {pkg.price}
                      </span>
                      {pkg.originalPrice && (
                        <span className={`text-sm line-through ml-2 ${pkg.popular ? "text-gray-400" : "text-gray-500"}`}>
                          {pkg.originalPrice}
                        </span>
                      )}
                    </div>

                    <div className={`flex items-center gap-2 text-xs font-medium mb-4 ${pkg.popular ? "text-gray-300" : colors.accent}`}>
                      <ClockIcon className="w-3 h-3" />
                      <span>{pkg.timeline}</span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs">
                          <CheckIcon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-purple-400" : colors.accent}`} />
                          <span className={pkg.popular ? "text-gray-200" : "text-gray-700"}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="https://wa.me/message/KTFL2G2JM3JTP1"
                      className={`block w-full text-center py-3 rounded-lg font-bold text-sm transition-all ${
                        pkg.popular
                          ? "bg-purple-500 text-white hover:bg-purple-600"
                          : "bg-navy text-white hover:bg-navy-light"
                      }`}>
                      Get Quote
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            Not sure which package is right for you?
          </p>
          <a
            href="https://wa.me/message/KTFL2G2JM3JTP1"
            className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy-light transition-colors">
            Chat With A Consultant
          </a>
        </motion.div>
      </div>
    </section>
  );
}
