"use client";

import { motion } from "framer-motion";
import { 
  BuildingOfficeIcon, 
  GlobeAltIcon, 
  DocumentCheckIcon, 
  ShieldCheckIcon,
  UserGroupIcon,
  GlobeAmericasIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  BanknotesIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

export default function Services() {
  const services = [
    {
      icon: <BuildingOfficeIcon className="w-8 h-8" />,
      title: "CAC Registration",
      description: "Business Name (BN), Private Limited Company (Ltd), Incorporated Trustee (NGO)",
      color: "bg-blue-500",
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: "Professional Websites",
      description: "Custom business websites with payment integration, domain & email setup",
      color: "bg-gold",
    },
    {
      icon: <DocumentCheckIcon className="w-8 h-8" />,
      title: "Legal Documents",
      description: "Shareholders agreements, contracts, demand letters, and more",
      color: "bg-emerald-500",
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Tax & Compliance",
      description: "TIN registration, SCUML guidance, annual returns filing",
      color: "bg-purple-500",
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Diaspora Services",
      description: "Remote company setup for Nigerians abroad and foreign investors",
      color: "bg-slate-500",
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "WhatsApp and email support throughout your registration journey",
      color: "bg-pink-500",
    },
  ];

  const guarantees = [
    "CAC-Accredited Agents",
    "Official CAC Portal Filing",
    "Transparent Pricing",
    "Dedicated Account Manager",
    "Post-Registration Support",
    "Satisfaction Guaranteed",
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            What We Do
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From company registration to professional websites and legal documents — 
            we handle everything so you can focus on growing your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl border border-gray-200 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10 transition-all duration-300 bg-white"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-navy rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Our Promise to You
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              We don't collect your money and disappear. Every document is filed on the official CAC portal. 
              You receive updates at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
              >
                <CheckCircleIcon className="w-6 h-6 text-gold flex-shrink-0" />
                <span className="text-white font-medium">{guarantee}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            { label: "Processing Time", value: "3-14 Days", icon: <ClockIcon className="w-6 h-6" /> },
            { label: "Government Fees", value: "Included", icon: <BanknotesIcon className="w-6 h-6" /> },
            { label: "Support", value: "30-90 Days", icon: <ChatBubbleLeftRightIcon className="w-6 h-6" /> },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mx-auto mb-3">
                {stat.icon}
              </div>
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-navy">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
