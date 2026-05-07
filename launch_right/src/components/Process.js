"use client";

import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

function Counter({ value, suffix = "" }) {
  return (
    <span className="text-navy">
      {value}{suffix}
    </span>
  );
}

const steps = [
  {
    step: "01",
    icon: MagnifyingGlassIcon,
    title: "Tell Us Your Needs",
    desc: "We listen and recommend the best path for your business goals.",
    pills: ["Free Consultation", "Name Search"],
  },
  {
    step: "02",
    icon: DocumentTextIcon,
    title: "We Handle Everything",
    desc: "CAC registration, website development, and legal documents — all in parallel.",
    pills: ["CAC Filing", "Web Design", "Legal Docs"],
  },
  {
    step: "03",
    icon: RocketLaunchIcon,
    title: "Launch With Confidence",
    desc: "Your business is legally registered, digitally present, and ready from day one.",
    pills: ["Certificate", "Website", "Ongoing Support"],
  },
];

export default function Process() {
  const stats = [
    { value: "2,000+", suffix: "", label: "Clients Served" },
    { value: "5+", suffix: "", label: "Years Experience" },
    { value: "24-48", suffix: "hrs", label: "Business Name (Guaranteed)" },
    { value: "4.9", suffix: "★", label: "Client Rating" },
  ];

  return (
    <section id="process" className="section-pad bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-gold/3 via-transparent to-green/3 rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <span className="badge-gold badge mb-4 inline-flex">HOW WE WORK</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight">
            From Idea to Launch
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Registration, websites, and legal documents — all under one roof.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto mb-16 space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative">

              {index < steps.length - 1 && (
                <div className="absolute left-7 top-16 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold/50 to-gold/30 hidden md:block" />
              )}

              <div className="flex gap-4 md:gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center border-2 border-gold/30 shadow-lg">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-gold/15 text-gold text-[10px] font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-navy mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm md:text-base mb-3">
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.pills.map((pill) => (
                      <span
                        key={pill}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-gold/8 border border-gold/15 text-gold">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 lg:p-8 text-center border border-gray-100/80 hover:border-gold/20 transition-colors group">
              <div className="text-3xl lg:text-4xl font-bold mb-2 tracking-tight group-hover:text-gold transition-colors">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}