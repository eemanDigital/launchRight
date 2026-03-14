"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "The Legit Starter",
      price: "₦60,000",
      timeline: "⚡ 24–48 Hours",
      timelineNote: "CAC-approved",
      badge: null,
      bestFor: "Freelancers, market traders and solo entrepreneurs.",
      cacFeatures: [
        "Business Name Registration",
        "Free name availability search",
        "CAC certificate (digital)",
        "TIN registration guidance",
      ],
      webFeatures: [
        "1-page landing page",
        ".com.ng domain — 1 year",
        "Basic hosting — 1 year",
        "WhatsApp CTA + contact form",
      ],
      legalFeatures: [
        "Certificate explanation letter",
      ],
      ctaPackage: "Legit%20Starter",
    },
    {
      name: "The Business Launch",
      price: "₦175,000",
      timeline: "⚡ 24–48 Hours",
      timelineNote: "CAC-approved",
      badge: null,
      bestFor: "Small businesses, Instagram sellers and service providers.",
      cacFeatures: [
        "Business Name Registration",
        "CAC certificate",
        "TIN registration guidance",
        "Year 1 Annual Returns reminder",
      ],
      webFeatures: [
        "5-page business website",
        "Mobile-first responsive",
        ".com.ng domain — 1 year",
        "Hosting with SSL — 1 year",
        "WhatsApp chat widget",
        "2 business emails",
        "2 rounds of revisions",
      ],
      legalFeatures: [
        "Service Agreement template",
        "Privacy Policy (NDPR-aware)",
        "CAC certificate usage guide",
      ],
      ctaPackage: "Business%20Launch",
    },
    {
      name: "The Corporate Setup",
      price: "₦350,000",
      timeline: "📅 10–14 Working Days",
      timelineNote: "CAC processing time",
      badge: "Most Popular",
      bestFor: "Startups, LTD companies and professional service firms.",
      cacFeatures: [
        "Private Limited Company (LTD)",
        "MEMART (lawyer-drafted)",
        "CAC Form 1.1 + Status Report",
        "Director documentation",
        "TIN + FIRS guidance",
        "Corporate seal (digital)",
      ],
      webFeatures: [
        "8–10 page corporate website",
        "CMS integration",
        ".com domain — 1 year",
        "Premium hosting + SSL",
        "Payment integration",
        "5 business emails",
        "30-day post-launch support",
      ],
      legalFeatures: [
        "Shareholders' Agreement",
        "Employment Contract (1 role)",
        "Privacy Policy + Terms",
        "NDA template",
        "Compliance checklist",
      ],
      ctaPackage: "Corporate%20Setup",
    },
    {
      name: "The Full Business Infrastructure",
      price: "₦600,000",
      timeline: "📅 14–21 Working Days",
      timelineNote: "CAC processing time",
      badge: null,
      bestFor: "Funded startups, e-commerce businesses and diaspora entrepreneurs.",
      cacFeatures: [
        "Private Limited Company (LTD)",
        "Custom MEMART",
        "Director structuring consultation",
        "TIN + FIRS guidance",
        "SCUML registration",
        "1-year compliance retainer",
      ],
      webFeatures: [
        "Full e-commerce platform",
        "Up to 20 pages / products",
        "Payment integration",
        "Customer accounts",
        "Admin dashboard",
        "WhatsApp Business",
        ".com domain — 1 year",
        "90-day support",
      ],
      legalFeatures: [
        "Complex Shareholders' Agreement",
        "Director Service Agreement",
        "Employment contracts (3 roles)",
        "Founder Vesting Agreement",
        "Data Processing Agreement",
        "1-hour legal consultation",
      ],
      ctaPackage: "Full%20Business%20Infrastructure",
    },
  ];

  const addons = [
    { icon: "🔄", name: "CAC Annual Returns", price: "₦20,000/year" },
    { icon: "📝", name: "Business Name Renewal", price: "₦15,000" },
    { icon: "✏️", name: "Change of Directors/Address", price: "from ₦35,000" },
    { icon: "🌐", name: "Website Maintenance", price: "₦25,000–₦50,000/mo" },
    { icon: "📄", name: "Additional Web Pages", price: "₦20,000–₦40,000/page" },
    { icon: "⚖️", name: "Custom Legal Document", price: "₦15,000–₦60,000" },
    { icon: "📧", name: "Business Emails", price: "₦5,000/address/yr" },
    { icon: "™️", name: "Trademark (IPONIRA)", price: "₦75,000–₦150,000" },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#F7F5F0] section-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond'] font-bold text-[#0A1628] mb-4">
            One Partner. Every Stage.
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            CAC registration, legal documents, and a professional website — handled together.
          </p>
          <p className="text-[#C9972B] text-sm font-medium mt-2">
            ⚡ Business Name: 24–48 hrs | 📅 LTD: CAC processing times apply
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl p-6 relative flex flex-col ${
                plan.badge
                  ? "border-2 border-[#C9972B] shadow-xl"
                  : "border border-gray-100"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C9972B] to-[#E8B84B] text-[#0A1628] px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-4">
                <h3 className="text-[#0A1628] text-lg font-bold">{plan.name}</h3>
                <p className="text-xs text-[#6B7280] mt-1">{plan.bestFor}</p>
              </div>
              
              <div className="mb-4">
                <p className="text-3xl font-['Cormorant_Garamond'] font-bold gold-gradient-text">
                  {plan.price}
                </p>
                <p className="text-sm text-[#0A1628] font-medium">{plan.timeline}</p>
                <p className="text-xs text-[#6B7280]">{plan.timelineNote}</p>
              </div>

              <div className="flex-1 space-y-3 text-sm overflow-hidden">
                <div className="bg-[#F7F5F0] p-3 rounded-lg">
                  <p className="font-semibold text-[#0A1628] text-xs uppercase mb-1">CAC</p>
                  {plan.cacFeatures.slice(0, 2).map((feature, i) => (
                    <p key={i} className="text-[#6B7280] text-xs flex items-center gap-1">
                      <span className="text-[#10B981]">✓</span> {feature}
                    </p>
                  ))}
                  {plan.cacFeatures.length > 2 && (
                    <p className="text-[#6B7280] text-xs">+{plan.cacFeatures.length - 2} more</p>
                  )}
                </div>
                
                <div className="bg-[#F7F5F0] p-3 rounded-lg">
                  <p className="font-semibold text-[#0A1628] text-xs uppercase mb-1">Web</p>
                  {plan.webFeatures.slice(0, 2).map((feature, i) => (
                    <p key={i} className="text-[#6B7280] text-xs flex items-center gap-1">
                      <span className="text-[#10B981]">✓</span> {feature}
                    </p>
                  ))}
                  {plan.webFeatures.length > 2 && (
                    <p className="text-[#6B7280] text-xs">+{plan.webFeatures.length - 2} more</p>
                  )}
                </div>
                
                <div className="bg-[#F7F5F0] p-3 rounded-lg">
                  <p className="font-semibold text-[#0A1628] text-xs uppercase mb-1">Legal</p>
                  {plan.legalFeatures.slice(0, 2).map((feature, i) => (
                    <p key={i} className="text-[#6B7280] text-xs flex items-center gap-1">
                      <span className="text-[#10B981]">✓</span> {feature}
                    </p>
                  ))}
                  {plan.legalFeatures.length > 2 && (
                    <p className="text-[#6B7280] text-xs">+{plan.legalFeatures.length - 2} more</p>
                  )}
                </div>
              </div>

              <a
                href={`https://wa.me/2348000000000?text=Hi%20JurisTech%2C%20I%27m%20interested%20in%20the%20${plan.ctaPackage}%20package`}
                className={`block text-center py-3 rounded-lg font-semibold transition-all mt-4 ${
                  plan.badge
                    ? "bg-gradient-to-r from-[#C9972B] to-[#E8B84B] text-[#0A1628] hover:opacity-90"
                    : "border-2 border-[#C9972B] text-[#C9972B] hover:bg-[#C9972B] hover:text-[#0A1628]"
                }`}
              >
                Get Started →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-gray-100 mb-12"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-['Cormorant_Garamond'] font-bold text-[#0A1628] mb-1">
              À La Carte Add-Ons
            </h3>
            <p className="text-[#6B7280]">Need just one thing? We've got you.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {addons.map((addon, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-[#F7F5F0] rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{addon.icon}</span>
                  <span className="text-sm text-[#0A1628]">{addon.name}</span>
                </div>
                <span className="text-sm font-semibold text-[#C9972B]">{addon.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#6B7280] mb-4">Not sure which package is right for you?</p>
          <a
            href="https://wa.me/2348000000000?text=Hi%20JurisTech%2C%20I%27m%20not%20sure%20which%20package%20to%20choose"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9972B] to-[#E8B84B] text-[#0A1628] px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Chat With Us on WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
}