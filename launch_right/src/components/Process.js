"use client";

import { motion } from "framer-motion";

function Counter({ value, suffix = "" }) {
  return (
    <span className="text-navy">
      {value}{suffix}
    </span>
  );
}

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16">
          <img
            src="/image/process-diagram.svg"
            alt="Three-step process: Consult, Execute, Launch"
            className="w-full h-auto"
          />
        </motion.div>

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