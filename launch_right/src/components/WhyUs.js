"use client";

import { motion } from "framer-motion";
import { 
  MagnifyingGlassIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  CurrencyDollarIcon, 
  ChatBubbleLeftRightIcon, 
  ArrowPathIcon, 
  GlobeAltIcon, 
  ClockIcon as ClockOutlineIcon 
} from "@heroicons/react/24/outline";

export default function WhyUs() {
  const features = [
    {
      icon: MagnifyingGlassIcon,
      title: "Free Name Search",
      description: "We check availability before you pay. If taken, we suggest alternatives — free.",
    },
    {
      icon: ShieldCheckIcon,
      title: "CAC-Accredited",
      description: "Direct filing with CAC. Your application is correct — no rejections from errors.",
    },
    {
      icon: ClockIcon,
      title: "24-48 Hour Business Name",
      description: "Business Name registered in 24-48 hours (guaranteed). LTD & IT: 4-15 days (subject to CAC).",
    },
    {
      icon: CurrencyDollarIcon,
      title: "No Hidden Fees",
      description: "The price you see is the price you pay. Always. No surprises.",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Direct WhatsApp Updates",
      description: "Real-time updates at every stage. No ghosting. You always know what's happening.",
    },
    {
      icon: ArrowPathIcon,
      title: "Money-Back Guarantee",
      description: "If your name can't be registered, we refund you 100%. Zero risk.",
    },
    {
      icon: GlobeAltIcon,
      title: "Diaspora-Friendly",
      description: "Register from anywhere in the world. UK, US, Canada — we've helped Nigerians abroad.",
    },
    {
      icon: ClockOutlineIcon,
      title: "Honest Timelines",
      description: "We don't promise what CAC can't guarantee. Business Name = 24-48hrs.",
    },
  ];

  return (
    <section className="section-pad bg-surface">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-4">
            Why choose JurisTech
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We're committed to making business registration simple, fast, and reliable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-navy" />
              </div>
              <h3 className="text-navy font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
