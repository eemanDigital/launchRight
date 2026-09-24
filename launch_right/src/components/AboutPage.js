"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ScaleIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const credentials = [
  { icon: ScaleIcon, text: "Called to the Nigerian Bar", accent: "blue" },
  { icon: ShieldCheckIcon, text: "CAC-Accredited Agent", accent: "green" },
  { icon: CodeBracketIcon, text: "MERN Stack Developer", accent: "green" },
  { icon: CheckCircleIcon, text: "NBA Member", accent: "blue" },
];

const credentialAccents = {
  blue: {
    tile: "from-blue to-blue-2",
    ring: "border-blue-2/30",
  },
  green: {
    tile: "from-green to-green-2",
    ring: "border-green-2/30",
  },
};

const currentBuilds = [
  {
    name: "JurisTech",
    desc: "Legal-tech business services platform",
    status: "Live",
    statusColor: "bg-green-2/15 text-green-2 border-green-2/30",
  },
  {
    name: "VendPadi",
    desc: "WhatsApp storefront for Nigerian merchants",
    status: "Beta",
    statusColor: "bg-blue-2/15 text-blue-2 border-blue-2/30",
  },
  {
    name: "case-master-app",
    desc: "Law firm management software",
    status: "In Development",
    statusColor: "bg-blue-2/15 text-blue-2 border-blue-2/30",
  },
];

const servicesOverview = [
  {
    icon: BuildingOfficeIcon,
    name: "CAC Registration",
    desc: "Business Name, LTD, NGO",
    link: "/services",
    tile: "from-blue to-blue-2",
  },
  {
    icon: ScaleIcon,
    name: "Legal Documents",
    desc: "Contracts, Agreements, Compliance",
    link: "/services",
    tile: "from-green to-green-2",
  },
  {
    icon: CodeBracketIcon,
    name: "Website Development",
    desc: "Landing pages to e-commerce",
    link: "/services",
    tile: "from-blue-2 to-green-2",
  },
  {
    icon: ComputerDesktopIcon,
    name: "Custom Software",
    desc: "SaaS, Mobile, POS systems",
    link: "/services",
    tile: "from-green to-green-2",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="band-cover relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-cover" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-2/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-green-2/20 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 min-w-0">
              <div className="relative">
                {/* orbit slots */}
                <div className="absolute -inset-4 rounded-full border border-dashed border-blue-2/30 animate-spin-slow [animation-duration:36s]" />
                <div className="absolute -inset-8 rounded-full border border-white/10" />
                <div className="w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden ring-2 ring-green-2/40 shadow-cover">
                  <img
                    src="/image/my-image.png"
                    alt="Lukman Asinmi - Founder of JurisTech"
                    className="w-full h-full object-cover object-[center_15%]"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-green-2 to-green-dark text-white px-4 py-2 font-bold text-xs shadow-[0_10px_24px_rgba(22,166,106,0.4)]">
                  <ShieldCheckIcon className="w-4 h-4" />
                  CAC Accredited
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 text-center lg:text-left min-w-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
                <span className="w-2 h-2 bg-green-2 rounded-full animate-pulse" />
                <span className="text-white/80 text-sm font-medium">
                  Lawyer · CAC Agent · Developer
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight tracking-tight">
                Lukman Asinmi
              </h1>
              <p className="text-green-2 text-lg md:text-xl mb-4 font-semibold">
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
      <section className="py-20 bg-white relative overflow-hidden">
        <svg className="absolute top-0 left-0 w-full opacity-[0.04] pointer-events-none" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="none" stroke="#2d7cff" strokeWidth="2" d="M0,70 C160,10 320,110 480,60 C640,10 800,110 960,60 C1120,10 1280,110 1440,50" />
        </svg>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8">
              <span className="eyebrow-label">MY STORY</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 mb-4 tracking-tight">
                How JurisTech <span className="text-gradient-brand">Came to Be</span>
              </h2>
            </motion.div>

            <div className="space-y-5 text-muted leading-relaxed text-lg">
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
            <span className="eyebrow-label mb-4 inline-flex">CREDENTIALS</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 tracking-tight">
              Qualifications
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {credentials.map((cred, index) => {
              const accent = credentialAccents[cred.accent];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 text-center border border-line shadow-soft">
                  <div className={`w-12 h-12 bg-gradient-to-br ${accent.tile} rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md shadow-black/10`}>
                    <cred.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-bold text-navy leading-snug">
                    {cred.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Builds */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="eyebrow-label mb-4 inline-flex">CURRENT PROJECTS</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 mb-5 tracking-tight">
              What I&apos;m <span className="text-gradient-brand">Building</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
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
                className="bg-white rounded-2xl p-8 border border-line shadow-card relative overflow-hidden">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-2/40 to-transparent" />
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold text-navy text-lg tracking-tight">{build.name}</h3>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${build.statusColor}`}>
                    <span className="w-1.5 h-1.5 inline-block rounded-full bg-current mr-1.5" />
                    {build.status}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {build.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="band-cover py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-cover" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-96 h-96 bg-blue-2/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-green-2/20 rounded-full blur-3xl" />
        </div>
        <div className="container-narrow text-center relative">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow-label eyebrow-label--light mb-4 inline-flex">
            A PERSONAL NOTE
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-8 leading-tight tracking-tight">
            You&apos;re Trusting Me Directly
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/75 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
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
            <a
              href="https://wa.me/message/KTFL2G2JM3JTP1"
              className="btn-gradient-green text-base">
              Work With Me <ArrowRightIcon className="w-4 h-4" />
            </a>
            <Link
              href="/tools/document-generator"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              Try Our Free Tools
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="eyebrow-label mb-4 inline-flex">SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 mb-5 tracking-tight">
              What JurisTech <span className="text-gradient-brand">Offers</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Everything you need to launch, operate, and grow your business —
              legally and digitally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {servicesOverview.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}>
                <Link
                  href={service.link}
                  className="block bg-white rounded-2xl p-8 border border-line shadow-soft group hover:shadow-pop hover:-translate-y-1 hover:border-blue-2/30 transition-all duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.tile} rounded-xl flex items-center justify-center mb-5 shadow-md shadow-black/10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 tracking-tight">
                    {service.name}
                  </h3>
                  <p className="text-muted text-sm mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-green-2 text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
                    Learn more <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}