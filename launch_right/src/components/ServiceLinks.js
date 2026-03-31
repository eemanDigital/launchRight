"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GlobeAltIcon, ComputerDesktopIcon, DocumentTextIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const serviceLinks = [
  {
    icon: DocumentTextIcon,
    name: "NGO & Foundation Registration",
    desc: "Churches, charities, non-profits",
    href: "/pricing",
    color: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    icon: GlobeAltIcon,
    name: "Website Development",
    desc: "Landing pages to e-commerce stores",
    href: "/website",
    color: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: ComputerDesktopIcon,
    name: "Software & Mobile Apps",
    desc: "POS systems, custom software, apps",
    href: "/software",
    color: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
];

export default function ServiceLinks() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">More Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
            Explore All Our Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Beyond CAC registration, we offer website development, custom software, and more to help your business grow.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {serviceLinks.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={service.href}
                className="group block bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:border-gold/30 transition-all h-full"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h4 className="text-xl font-bold text-navy mb-2">{service.name}</h4>
                <p className="text-gray-500 mb-4">{service.desc}</p>
                <div className="flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRightIcon className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors font-medium"
          >
            Meet the team behind JurisTech
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
