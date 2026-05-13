"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  ScaleIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const credentials = [
  { icon: ScaleIcon, text: "Called to the Nigerian Bar" },
  { icon: ShieldCheckIcon, text: "CAC-Accredited Agent" },
  { icon: CodeBracketIcon, text: "MERN Stack Developer" },
  { icon: CheckCircleIcon, text: "NBA Member" },
];

const currentBuilds = [
  {
    name: "JurisTech",
    desc: "Legal-tech business services platform",
    status: "Live",
    statusColor: "bg-green/10 text-green",
  },
  {
    name: "VendPadi",
    desc: "WhatsApp storefront for Nigerian merchants",
    status: "Beta",
    statusColor: "bg-amber-100 text-amber-700",
  },
  {
    name: "case-master-app",
    desc: "Law firm management software",
    status: "In Development",
    statusColor: "bg-blue-100 text-blue-700",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy via-navy to-navy-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden border-2 border-gold/30 shadow-2xl">
                  <img
                    src="/image/my-image.png"
                    alt="Lukman Asinmi - Founder of JurisTech"
                    className="w-full h-full object-cover object-[center_15%]"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-gold text-navy px-4 py-2 rounded-xl font-bold text-xs shadow-xl flex items-center gap-1.5">
                  <ShieldCheckIcon className="w-4 h-4" />
                  CAC Accredited
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-white/80 text-sm font-medium">
                  Lawyer · CAC Agent · Developer
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
                Lukman Asinmi
              </h1>
              <p className="text-gold text-lg md:text-xl mb-4">
                Lawyer. CAC Agent. Developer. Founder of JurisTech.
              </p>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                I built JurisTech at the intersection of law, compliance, and
                technology — because Nigerian businesses deserve all three from
                someone who actually understands them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Background Story */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold font-semibold text-sm uppercase tracking-wider">
              My Story
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 mb-10">
              How JurisTech Came to Be
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}>
                Early in my legal practice, I kept watching the same pattern
                play out. Entrepreneurs would come to my office needing legal
                documents — contracts, agreements, compliance filings. The
                documents themselves were straightforward. But the real problem
                wasn't legal; it was structural.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}>
                These entrepreneurs needed three things simultaneously: legal
                documents and compliance support, CAC registration and
                regulatory filings, and a professional website and digital
                presence. And the people struggling the most were the ones who
                could least afford to hire three different professionals.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}>
                I became a CAC-accredited agent so I could handle registration
                filings directly. Then I taught myself to code — JavaScript,
                React, Node.js, the full MERN stack — because the problems I saw
                in my legal practice couldn't be solved with documents alone.
                The bottlenecks were technological. The inefficiencies were
                systemic.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}>
                JurisTech is the answer. It's a legal-tech company that combines
                legal practice, CAC accreditation, and software development
                under one roof. I'm not outsourcing any of these disciplines. I
                personally oversee and execute across all three. Every
                registration, every website, every document that leaves
                JurisTech meets a standard I am personally willing to put my
                name on.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-surface">
        <div className="container-wide">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="badge badge-gold mb-4 inline-block">
              CREDENTIALS
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3">Qualifications</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {credentials.map((cred, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="card-accent p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <cred.icon className="w-6 h-6 text-gold" />
                </div>
                <p className="text-sm font-semibold text-navy leading-snug">{cred.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Builds */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="badge badge-gold mb-4 inline-block">
              CURRENT PROJECTS
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 mb-5">What I'm Building</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Products and platforms currently in development or live
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {currentBuilds.map((build, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="card-premium p-8">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold text-navy text-lg">{build.name}</h3>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold ${build.statusColor}`}>
                    {build.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{build.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy to-navy-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-green rounded-full blur-3xl" />
        </div>
        <div className="container-narrow text-center relative">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="badge badge-gold mb-4 inline-block">
            A PERSONAL NOTE
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-8 leading-tight">
            You're Trusting Me Directly
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/75 text-lg leading-relaxed mb-10 font-light">
            If you're wondering whether to trust JurisTech with your business
            registration or legal documents — you're trusting me directly. My
            name is on every document we produce. My accreditation number is on
            every CAC filing. My code powers every system we build. That's a
            level of personal accountability most service providers can't offer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/message/KTFL2G2JM3JTP1" className="btn-gold text-base">
              Work With Me <ArrowRightIcon className="w-4 h-4" />
            </a>
            <Link
              href="/tools/document-generator"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              Try Our Free Tools
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="badge badge-gold mb-4 inline-block">
              SERVICES
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mt-3 mb-5">
              What JurisTech Offers
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Everything you need to launch, operate, and grow your business —
              legally and digitally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: BuildingOfficeIcon,
                name: "CAC Registration",
                desc: "Business Name, LTD, NGO",
                link: "/services",
              },
              {
                icon: ScaleIcon,
                name: "Legal Documents",
                desc: "Contracts, Agreements, Compliance",
                link: "/services",
              },
              {
                icon: CodeBracketIcon,
                name: "Website Development",
                desc: "Landing pages to e-commerce",
                link: "/services",
              },
              {
                icon: ComputerDesktopIcon,
                name: "Custom Software",
                desc: "SaaS, Mobile, POS systems",
                link: "/services",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}>
                <Link
                  href={service.link}
                  className="block card-premium p-8 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:from-gold/30 group-hover:to-gold/15 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.desc}</p>
                  <div className="flex items-center gap-1.5 text-gold text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
                    Learn more <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}
