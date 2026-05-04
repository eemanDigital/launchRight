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
      step: "01",
    },
    {
      icon: DocumentTextIcon,
      title: "We Handle Everything",
      description:
        "We file your CAC registration, build your website, and draft your legal documents — all coordinated by our team.",
      step: "02",
    },
    {
      icon: CheckCircleIcon,
      title: "Launch With Confidence",
      description: "Get your certificate, website, and legal documents delivered. Ready to operate legally from day one.",
      step: "03",
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
          <span className="badge-gold badge mb-4 inline-flex">HOW WE WORK</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-4 tracking-tight">
            From Idea to Launch
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Registration, websites, and legal documents — all under one roof.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20 relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative">
              <div className="card-premium p-8 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy to-navy-light rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gold/40 text-4xl font-bold tracking-tighter">{step.step}</span>
                </div>
                <h3 className="text-navy text-xl font-semibold mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRightIcon className="w-5 h-5 text-gold/30" />
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-premium bg-white p-6 lg:p-8 text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
