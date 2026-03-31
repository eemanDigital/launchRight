"use client";

import { motion } from "framer-motion";
import { BuildingOfficeIcon, ScaleIcon, CommandLineIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function AboutJurisTech() {
  const stats = [
    { icon: BuildingOfficeIcon, label: "2,000+ Businesses Served" },
    { icon: CheckBadgeIcon, label: "CAC-Accredited" },
    { icon: ScaleIcon, label: "Law + Tech + Compliance" },
  ];

  return (
    <section id="about" className="section-pad bg-gradient-to-b from-surface to-white relative">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              About JurisTech
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                JurisTech is a Nigerian business infrastructure company built to give entrepreneurs, SMEs, startups, and organizations everything they need to launch, operate, and grow — legally and digitally.
              </p>
              <p>
                We combine legal expertise, CAC accreditation, and technology under one roof — so you don&apos;t have to coordinate between a lawyer, a CAC agent, and a web developer separately. We handle it all, end to end.
              </p>
              <p>
                From company registration to professional websites, legal documents, compliance support, and custom software — JurisTech is where Nigerian businesses get built.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <p className="font-semibold text-navy">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
