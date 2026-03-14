"use client";

import { motion } from "framer-motion";
import { BuildingOfficeIcon, GlobeAltIcon, DocumentTextIcon, ArrowRightIcon, ClockIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Services() {
  const services = [
    {
      icon: BuildingOfficeIcon,
      name: "Business Name",
      description: "For freelancers and sole traders. Fastest route to legitimacy.",
      price: "From ₦60,000",
      timeline: "24-48 hours",
      timelineNote: "Guaranteed",
      popular: true,
    },
    {
      icon: GlobeAltIcon,
      name: "Private Limited Company",
      description: "Full incorporation for startups ready for investment.",
      price: "From ₦175,000",
      timeline: "4-15 days",
      timelineNote: "Subject to CAC",
    },
    {
      icon: ShieldCheckIcon,
      name: "Incorporated Trustees",
      description: "For NGOs, churches, and associations.",
      price: "From ₦350,000",
      timeline: "4-15 days",
      timelineNote: "Subject to CAC",
    },
    {
      icon: DocumentTextIcon,
      name: "Annual Returns",
      description: "Stay CAC-compliant every year.",
      price: "From ₦15,000",
      timeline: "48 hours",
      timelineNote: "",
    },
    {
      icon: DocumentTextIcon,
      name: "Legal Documents",
      description: "Shareholders' agreements, contracts, NDAs.",
      price: "From ₦15,000",
      timeline: "2-4 days",
      timelineNote: "",
    },
    {
      icon: GlobeAltIcon,
      name: "Website Development",
      description: "Professional websites for your business.",
      price: "From ₦50,000",
      timeline: "5-21 days",
      timelineNote: "",
    },
  ];

  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            CAC registration, legal documents, and web development — all in one place.
          </p>
          <p className="text-gold text-sm mt-2">
            Business Name: 24-48 hours guaranteed • LTD & IT: 4-15 days (subject to CAC)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href="https://wa.me/2348000000000?text=Hi%20JurisTech%2C%20I%27m%20interested%20in%20your%20services"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group p-6 rounded-2xl border transition-all hover:shadow-lg ${
                service.popular 
                  ? "bg-navy border-navy text-white" 
                  : "bg-white border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                service.popular ? "bg-white/10" : "bg-surface"
              }`}>
                <service.icon className={`w-6 h-6 ${service.popular ? "text-white" : "text-navy"}`} />
              </div>
              
              <div className="flex items-start justify-between mb-3">
                <h3 className={`text-lg font-semibold ${service.popular ? "text-white" : "text-navy"}`}>
                  {service.name}
                </h3>
                {service.popular && (
                  <span className="badge bg-white/20 text-white border-0 text-xs">Popular</span>
                )}
              </div>
              
              <p className={`text-sm mb-4 ${service.popular ? "text-white/70" : "text-gray-500"}`}>
                {service.description}
              </p>
              
              <div className="flex items-end justify-between">
                <div>
                  <p className={`text-lg font-semibold ${service.popular ? "text-white" : "text-navy"}`}>
                    {service.price}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <ClockIcon className={`w-4 h-4 ${service.popular ? "text-white/70" : "text-gray-400"}`} />
                  <span className={service.popular ? "text-white/70" : "text-gray-400"}>
                    {service.timeline}
                  </span>
                  {service.timelineNote && (
                    <span className={`text-xs ${service.popular ? "text-gold" : "text-gold"}`}>
                      ({service.timelineNote})
                    </span>
                  )}
                </div>
              </div>
              
              <div className={`mt-4 pt-4 border-t flex items-center justify-between ${
                service.popular ? "border-white/20" : "border-gray-100"
              }`}>
                <span className={`text-sm font-medium ${
                  service.popular ? "text-white" : "text-navy"
                } group-hover:underline`}>
                  Get started
                </span>
                <ArrowRightIcon className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                  service.popular ? "text-white" : "text-navy"
                }`} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
