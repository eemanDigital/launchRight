"use client";

import { motion } from "framer-motion";

export default function WhyUs() {
  const features = [
    {
      icon: "🔍",
      title: "Free Name Search First",
      description: "We check if your business name is available before you pay. If taken, we suggest alternatives — no extra charge.",
    },
    {
      icon: "🏛️",
      title: "CAC-Accredited Filing",
      description: "We file directly with CAC. Your application is correct — no rejections from errors. We handle the paperwork.",
    },
    {
      icon: "⚡",
      title: "24–48 Hour Business Name",
      description: "Business Name registration approved in 24–48 hours. LTD and other types: CAC processing time applies.",
    },
    {
      icon: "💰",
      title: "No Hidden Fees",
      description: "The price you see is the price you pay. Includes all government levies and our service fee. Always.",
    },
    {
      icon: "💬",
      title: "Direct WhatsApp Updates",
      description: "We update you at every stage. No ghosting, no guessing. You always know exactly what's happening.",
    },
    {
      icon: "🔄",
      title: "Money-Back Guarantee",
      description: "If your chosen name cannot be registered, we refund you 100%. Zero risk. We're that confident.",
    },
    {
      icon: "🌍",
      title: "Diaspora-Friendly",
      description: "Register from anywhere in the world. UK, US, Canada, UAE — we've helped Nigerians abroad go legit.",
    },
    {
      icon: "📋",
      title: "Honest Timelines",
      description: "We don't promise what CAC can't guarantee. Business Name = 24–48hrs. LTD = 3–5 days (estimated).",
    },
  ];

  return (
    <section className="py-20 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond'] font-bold text-[#0A1628] mb-4">
            Why Choose JurisTech
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            We believe in honesty and transparency. Here's what you get when you work with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-5 hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl mb-3">{feature.icon}</div>
              <h3 className="text-[#0A1628] text-base font-bold mb-2">{feature.title}</h3>
              <p className="text-[#6B7280] text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}