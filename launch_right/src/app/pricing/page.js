"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  CheckIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import FinalCTA from "@/components/FinalCTA";

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
    color: "gold",
    badge: "Complete Setup",
  },
];

const specialPackages = [
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
      "5-page website",
      "60 days post-registration support",
    ],
    highlight: "dont miss funding because of paperwork",
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

const getColorClasses = (color) => {
  const colors = {
    emerald: { bg: "bg-emerald-50", border: "border-emerald-200", accent: "text-emerald-600", badge: "bg-emerald-500" },
    blue: { bg: "bg-blue-50", border: "border-blue-200", accent: "text-blue-600", badge: "bg-blue-600" },
    gold: { bg: "bg-amber-50", border: "border-amber-200", accent: "text-amber-600", badge: "bg-gold" },
    purple: { bg: "bg-purple-50", border: "border-purple-200", accent: "text-purple-600", badge: "bg-purple-600" },
    slate: { bg: "bg-slate-50", border: "border-slate-200", accent: "text-slate-600", badge: "bg-slate-700" },
  };
  return colors[color] || colors.blue;
};

function PackageCard({ plan, isPopular = false }) {
  const colors = getColorClasses(plan.color);
  const isHighlighted = plan.popular || plan.badge;
  
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

      <div className={`p-6 ${isHighlighted ? "pt-10" : ""}`}>
        <h3 className={`text-xl font-bold mb-1 ${isHighlighted ? "text-white" : "text-navy"}`}>
          {plan.name}
        </h3>
        <p className={`text-sm mb-4 ${isHighlighted ? "text-gray-300" : "text-gray-600"}`}>
          {plan.subtitle}
        </p>

        <div className="mb-4">
          <span className={`text-4xl font-extrabold ${isHighlighted ? "text-white" : "text-navy"}`}>
            {plan.price}
          </span>
        </div>
        <div className={`text-xs mb-4 ${isHighlighted ? "text-gray-400" : "text-gray-500"}`}>
          {plan.itemizedValue}
        </div>

        <div className={`flex items-center gap-2 text-sm font-medium mb-4 ${isHighlighted ? "text-gray-300" : colors.accent}`}>
          <ClockIcon className="w-4 h-4" />
          <span>{plan.timeline}</span>
        </div>

        <ul className="space-y-2 mb-6">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isHighlighted ? "text-blue-400" : colors.accent}`} />
              <span className={isHighlighted ? "text-gray-200" : "text-gray-700"}>{feature}</span>
            </li>
          ))}
        </ul>

        <div className={`mt-auto pt-4 border-t ${isHighlighted ? "border-white/20" : colors.border}`}>
          <p className={`text-sm italic ${isHighlighted ? "text-gray-400" : "text-gray-500"}`}>
            "{plan.highlight}"
          </p>
        </div>
      </div>

      <div className="p-4 pt-0">
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

function RegularPackageCard({ pkg }) {
  const colors = getColorClasses(pkg.color);
  return (
    <div className={`rounded-2xl overflow-hidden ${colors.bg} border ${colors.border} shadow-lg`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${colors.badge} text-white`}>
            REGULAR
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <ClockIcon className="w-3 h-3" />
            {pkg.timeline}
          </span>
        </div>

        <h4 className="text-lg font-bold text-navy mb-2">{pkg.name}</h4>

        <div className="mb-4">
          <span className="text-2xl font-extrabold text-navy">{pkg.price}</span>
          <span className="text-sm text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
        </div>

        <ul className="space-y-2 mb-4">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-xs">
              <CheckIcon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${colors.accent}`} />
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
    </div>
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
            Professional CAC registration with websites, legal documents, and dedicated support
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
            <h2 className="text-3xl font-bold text-navy mb-4">Premium Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete registration packages with websites, legal documents, and ongoing support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <PackageCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Special Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored registration for NGOs, foundations, and international clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specialPackages.map((plan, index) => (
              <PackageCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8">
            <h2 className="text-2xl font-bold text-navy mb-2 flex items-center justify-center gap-2">
              <SparklesIcon className="w-6 h-6 text-gold" />
              Regular Registration
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Streamlined registration with essential documents, status reports, and annual return reminders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {regularPackages.map((pkg, index) => (
              <RegularPackageCard key={index} pkg={pkg} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-navy mb-2 flex items-center justify-center gap-2">
                <SparklesIcon className="w-6 h-6 text-gold" />
                Add-on Services
              </h3>
              <p className="text-gray-600">
                Stack these onto any package or order standalone
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {addons.map((addon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
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
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
