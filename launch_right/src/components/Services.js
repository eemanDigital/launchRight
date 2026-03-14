"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: "🏪",
      name: "Business Name Registration",
      description: "For solo founders, freelancers and sole traders. Fastest route to legitimacy.",
      timeline: "⚡ 24–48 Hours",
      timelineNote: "CAC-approved",
      price: "From ₦60,000",
    },
    {
      icon: "🏢",
      name: "Private Limited Company (LTD)",
      description: "Full incorporation for startups, partnerships and businesses ready for contracts, loans and investment.",
      timeline: "📅 3–5 Working Days",
      timelineNote: "CAC processing time",
      price: "From ₦175,000",
    },
    {
      icon: "⛪",
      name: "Incorporated Trustees",
      description: "For NGOs, churches, associations and foundations needing full legal recognition.",
      timeline: "📅 7–10 Working Days",
      timelineNote: "CAC processing time",
      price: "From ₦350,000",
    },
    {
      icon: "🔄",
      name: "Annual Returns & Renewal",
      description: "Stay CAC-compliant every year. We handle your annual returns filing and business name renewals.",
      timeline: "⚡ 48 Hours",
      timelineNote: "CAC processing time",
      price: "From ₦15,000",
    },
    {
      icon: "⚖️",
      name: "Legal Document Drafting",
      description: "Lawyer-drafted Shareholders' Agreements, Employment Contracts, NDAs, Service Agreements and NDPR-compliant website policies.",
      timeline: "📅 2–4 Working Days",
      timelineNote: "Turnaround time",
      price: "From ₦15,000",
    },
    {
      icon: "🌐",
      name: "Business Website Development",
      description: "Custom, mobile-first websites built for Nigerian businesses — from single-page landing pages to full e-commerce platforms.",
      timeline: "📅 5–21 Working Days",
      timelineNote: "Depends on complexity",
      price: "From ₦50,000",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F7F5F0] section-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond'] font-bold text-[#0A1628] mb-4">
            Our Services
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto mb-4">
            CAC filing done right. Business Name approved in 24–48 hours. Other registrations depend on CAC processing times.
          </p>
          <p className="text-[#C9972B] text-sm font-medium">
            🔍 Free name availability search before you pay
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-100 card-premium hover:border-[#C9972B]/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl bg-[#F7F5F0] p-3 rounded-xl">{service.icon}</div>
                <span className="text-[#C9972B] font-bold text-lg">{service.price}</span>
              </div>
              <h3 className="text-[#0A1628] text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-[#6B7280] text-sm mb-4">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <span className="text-sm text-[#0A1628] font-medium">{service.timeline}</span>
                  <p className="text-xs text-[#6B7280]">{service.timelineNote}</p>
                </div>
                <a
                  href="https://wa.me/2348000000000?text=Hi%20JurisTech%2C%20I%27m%20interested%20in%20the%20Services"
                  className="text-[#C9972B] font-semibold group-hover:text-[#0A1628] transition-colors"
                >
                  Get Started →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}