"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BuildingOfficeIcon,
  ScaleIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  ComputerDesktopIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const values = [
  {
    icon: ScaleIcon,
    title: "Legal Expertise",
    desc: "Every document reviewed by a qualified Nigerian lawyer",
  },
  {
    icon: ShieldCheckIcon,
    title: "CAC Accreditation",
    desc: "Officially accredited to file with Corporate Affairs Commission",
  },
  {
    icon: CodeBracketIcon,
    title: "Technical Excellence",
    desc: "Modern technology solutions built for Nigerian businesses",
  },
];

const achievements = [
  { number: "2,000+", label: "Businesses Registered" },
  { number: "98%", label: "Success Rate" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
];

const services = [
  {
    icon: DocumentTextIcon,
    name: "CAC Registration",
    link: "/pricing",
    desc: "Business Name, LTD, NGO",
  },
  {
    icon: GlobeAltIcon,
    name: "Website Development",
    link: "/website",
    desc: "Landing pages to e-commerce",
  },
  {
    icon: ComputerDesktopIcon,
    name: "Software Development",
    link: "/software",
    desc: "POS, Mobile Apps, Custom",
  },
  {
    icon: CogIcon,
    name: "Legal Documents",
    link: "/pricing",
    desc: "Contracts, Agreements, Compliance",
  },
];

const teamValues = [
  "Transparent pricing — no hidden fees",
  "Personal oversight on every registration",
  "Direct access to the founder",
  "Quick turnaround times guaranteed",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy via-navy to-navy-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium">
                Nigerian Business Infrastructure Company
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building Nigeria's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400">
                {" "}
                Legal-Tech Platform
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              JurisTech combines legal expertise, CAC accreditation, and
              technology to help Nigerian entrepreneurs launch, operate, and
              grow their businesses — legally and digitally.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
                Why JurisTech Exists
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  JurisTech was born from frustration. We watched countless
                  Nigerian entrepreneurs struggle with unreliable agents,
                  overpriced lawyers, and web developers who had no
                  understanding of the legal requirements behind building a real
                  business.
                </p>
                <p>
                  We created JurisTech to be different. A single platform where
                  you can register your business, build your online presence,
                  and get professional legal documents — all handled by people
                  who understand all three disciplines.
                </p>
                <p>
                  We're not just service providers. We're partners in your
                  business journey, committed to helping you succeed the right
                  way.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-navy mb-1">
                    {item.number}
                  </div>
                  <div className="text-gray-500 text-sm">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              What Sets Us Apart
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-shrink-0">
              <div className="relative">
                <div className="w-80 h-96 rounded-3xl overflow-hidden border-2 border-gold/30 shadow-2xl">
                  <img
                    src="../image/my-image.png"
                    alt="Lukman Asinmi - Founder, JurisTech"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold text-navy px-5 py-2.5 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5" />
                  CAC Accredited
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Meet The Founder
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-2">
                Lukman Asinmi, Esq.
              </h2>
              <p className="text-gold text-lg mb-8">
                Lawyer · CAC-Accredited Agent · Software Engineer
              </p>

              <div className="space-y-5 text-gray-300 leading-relaxed mb-8">
                <p>
                  JurisTech exists because I kept watching hardworking Nigerian
                  entrepreneurs get shortchanged — by ghost agents who
                  disappeared after collecting money, by lawyers who charged
                  ₦200,000 for a simple contract, and by web developers who
                  built sites with no understanding of the business behind them.
                </p>
                <p>
                  I am a Nigerian lawyer, an accredited CAC agent, and the
                  developer who built JurisTech from scratch. That combination
                  is not common — and it means every client who works with us
                  gets legal accuracy, regulatory compliance, and technical
                  execution from someone who understands all three.
                </p>
                <p>
                  Every registration, every website, every document that leaves
                  JurisTech meets a standard I am personally willing to put my
                  name on.
                </p>
              </div>

              <div className="mb-8">
                <p className="text-gold text-2xl font-serif italic opacity-80">
                  — Lukman
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-gold" />
                  NBA Member
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-gold" />
                  CAC-Accredited Agent
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-gold" />
                  Lead Developer
                </div>
              </div>

              <a
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                className="inline-flex items-center gap-2 text-gold hover:text-yellow-400 transition-colors font-medium">
                Have questions? Talk to me directly
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">
              Our Services
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Everything you need to launch, operate, and grow your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <Link
                  href={service.link}
                  className="block bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-gold/30 transition-all group">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{service.desc}</p>
                  <div className="flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
                    Learn more <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-navy to-navy-light">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Work With Us?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Get started with your business registration, website, or software
              project today. Our team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/message/KTFL2G2JM3JTP1"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-bold rounded-xl hover:bg-yellow-400 transition-colors">
                Start Registration
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
