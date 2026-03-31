"use client";

import { motion } from "framer-motion";

import {
  MagnifyingGlassIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

function Counter({ value, suffix = "" }) {
  return (
    <span className="text-navy">
      {value} {suffix}
    </span>
  );
}

export default function Process() {
  const steps = [
    {
      icon: MagnifyingGlassIcon,
      title: "Tell Us Your Needs",
      description:
        "Share your business goals — we'll recommend the right combination of registration, website, and legal documents.",
      step: "Step 1",
    },
    {
      icon: DocumentTextIcon,
      title: "We Handle Everything",
      description:
        "We file your CAC registration, build your website, and draft your legal documents — all coordinated by our team.",
      step: "Step 2",
    },
    {
      icon: CheckCircleIcon,
      title: "Launch With Confidence",
      description: "Get your certificate, website, and legal documents delivered. Ready to operate legally from day one.",
      step: "Step 3",
    },
  ];

  const stats = [
    { value: "2,000+", suffix: "", label: "Clients Served" },
    { value: "5+", suffix: "", label: "Years Experience" },
    { value: "24-48", suffix: "hrs", label: "Business Name (Guaranteed)" },
    { value: "4.9", suffix: "★", label: "Client Rating" },
  ];

  return (
    <section id="process" className="section-pad bg-surface">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-4">
            How we work together
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From idea to launch, we handle registration, websites, and legal documents — all under one roof.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-colors">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gold text-sm font-medium mb-2">
                  {step.step}
                </p>
                <h3 className="text-navy text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRightIcon className="w-6 h-6 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="text-3xl md:text-4xl font-semibold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
