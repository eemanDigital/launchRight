"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRightIcon,
  CheckIcon,
  XMarkIcon,
  ChevronDownIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  DocumentTextIcon,
  LifebuoyIcon,
  LightBulbIcon,
  ChartBarIcon,
  BriefcaseIcon,
  ScaleIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  CommandLineIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { trackWhatsAppClick } from "@/lib/analytics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSchema from "@/components/FAQSchema";

const WHATSAPP = "https://wa.me/message/KTFL2G2JM3JTP1";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

function HeroSection() {
  const badges = [
    { icon: CheckCircleIcon, label: "CAC Registered" },
    { icon: GlobeAltIcon, label: "Website Ready" },
    { icon: DocumentTextIcon, label: "Legal Documents" },
    { icon: EnvelopeIcon, label: "Business Email" },
  ];

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/image/herobg.jpg"
          alt=""
          width={1376}
          height={768}
          className="absolute top-0 sm:top-30 left-0 w-full h-full sm:h-[67%] object-cover object-center"
          loading="eager"
        />
        {/* Light scrim: keeps text readable without clouding the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/25 to-transparent" />
        {/* Stronger overlay for mobile readability */}
        <div className="absolute inset-0 bg-navy/60 sm:bg-navy/30 md:bg-transparent" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto lg:ml-0 lg:mr-auto pl-5 pr-5 sm:pl-6 sm:pr-6 lg:pl-16 lg:pr-8 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-32">
        <div className="max-w-2xl text-left space-y-5 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">
              REGISTER · LAUNCH · AUTOMATE · GROW
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Don&apos;t just register your business.{" "}
            <span className="text-gradient-gold block">Build it properly.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-lg text-white/60 max-w-xl leading-relaxed">
            Company registration, professional website, essential legal
            documents and digital setup — handled in one launch package.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3 sm:px-6 sm:py-4 w-full sm:w-auto">
            <span className="text-white/50 text-sm font-medium">
              Business Launch
            </span>
            <span className="text-white text-2xl sm:text-3xl font-bold">₦225,000</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP}
              className="btn-gold text-base shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30"
              onClick={() => trackWhatsAppClick("Business Launch Hero CTA")}>
              Start Your Business Launch
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 backdrop-blur-sm border border-white/15 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/25 transition-all duration-300"
              onClick={() =>
                trackWhatsAppClick("Business Launch Hero WhatsApp")
              }>
              Talk to Us on WhatsApp
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-white/35 text-sm">
            60% to commence · 40% before final delivery
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl pt-2">
            {badges.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
                <b.icon className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-white/70 text-xs font-medium">
                  {b.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

function ProblemSection() {
  const before = [
    "No professional online presence",
    "Business documents scattered",
    "Customers unsure whether the business is legitimate",
    "No professional business email",
    "Contracts handled casually",
  ];

  const after = [
    "Properly incorporated company",
    "Professional website",
    "Business email",
    "Essential legal documentation",
    "Clear professional digital presence",
  ];

  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="badge badge-navy mb-4 inline-flex">THE PROBLEM</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight">
            Your business shouldn&apos;t look unfinished.
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Many entrepreneurs have registered — or are trying to register — a
            business but still lack the basic infrastructure needed to operate
            professionally.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="card-dark p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <XMarkIcon className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-white text-lg font-semibold tracking-tight">
                Before
              </h3>
            </div>
            <ul className="space-y-4">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/55">
                  <XMarkIcon className="w-5 h-5 text-red-400/60 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
            className="card-premium p-8 lg:p-10 bg-surface">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-success/10 border border-success/20 flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-success" />
              </div>
              <h3 className="text-navy text-lg font-semibold tracking-tight">
                After Business Launch
              </h3>
            </div>
            <ul className="space-y-4">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TransformationSection() {
  const stages = [
    {
      step: "1",
      title: "REGISTER",
      desc: "Private Limited Company",
      color: "gold",
    },
    { step: "2", title: "STRUCTURE", desc: "Legal documents", color: "teal" },
    {
      step: "3",
      title: "LAUNCH",
      desc: "Website + domain + email",
      color: "green",
    },
    {
      step: "4",
      title: "OPERATE",
      desc: "60 days post-launch support",
      color: "cyan",
    },
  ];

  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-gold/3 via-transparent to-green/3 rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="badge-gold badge mb-4 inline-flex">
            THE TRANSFORMATION
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight">
            From business idea to business that looks ready for business.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold/20 hover:shadow-lg transition-all text-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center mx-auto mb-5 border-2 border-gold/30 shadow-lg">
                  <span className="text-gold text-lg font-bold">
                    {stage.step}
                  </span>
                </div>
                <h3 className="text-navy text-lg font-bold mb-2 tracking-tight">
                  {stage.title}
                </h3>
                <p className="text-muted text-sm">{stage.desc}</p>
              </div>
              {i < stages.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gold/30" />
              )}
              {i < stages.length - 1 && (
                <div className="lg:hidden flex justify-center py-2">
                  <ArrowRightIcon className="w-5 h-5 text-gold/40 rotate-90 md:rotate-0" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsIncludedSection() {
  const categories = [
    {
      icon: BuildingOffice2Icon,
      title: "COMPANY SETUP",
      iconWrap: "bg-gold/10 border-gold/20",
      iconColor: "text-gold",
      items: [
        "Private Limited Company registration",
        "Certificate of Incorporation + MEMART",
        "Shareholders Agreement",
      ],
    },
    {
      icon: GlobeAltIcon,
      title: "DIGITAL SETUP",
      iconWrap: "bg-teal/10 border-teal/20",
      iconColor: "text-teal",
      items: [
        "Professional 4-page website",
        "Domain — 1 year",
        "Commercial hosting — 1 year",
        "Business email setup",
        "WhatsApp integration",
      ],
    },
    {
      icon: DocumentTextIcon,
      title: "LEGAL SETUP",
      iconWrap: "bg-green/10 border-green/20",
      iconColor: "text-green",
      items: ["1 employment OR service contract"],
    },
    {
      icon: LifebuoyIcon,
      title: "SUPPORT",
      iconWrap: "bg-cyan/10 border-cyan/20",
      iconColor: "text-cyan",
      items: ["60 days post-launch support"],
    },
  ];

  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-green/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="badge-gold badge mb-4 inline-flex">
            WHAT YOU GET
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight">
            Everything you need to launch properly.
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Not a list of separate services. One integrated system to get your
            business running professionally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              className="card-premium p-8 bg-surface">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center ${cat.iconWrap}`}>
                  <cat.icon className={`w-6 h-6 ${cat.iconColor}`} />
                </div>
                <h3 className="text-navy text-sm font-bold tracking-widest uppercase">
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-600">
                    <CheckIcon className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebsiteShowcaseSection() {
  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-gold/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="badge-gold badge mb-4 inline-flex">
            YOUR WEBSITE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight">
            Your business gets a professional digital home.
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Not a generic template thrown together overnight. A responsive
            professional website built around your business.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-lg px-4 py-1.5 text-xs text-gray-400 border border-gray-200">
                    yourbusiness.com
                  </div>
                </div>
              </div>
              <img
                src="/image/website2.png"
                alt="Professional business website built by JurisTech Lab"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-lg px-4 py-1.5 text-xs text-gray-400 border border-gray-200">
                    yourbusiness.com
                  </div>
                </div>
              </div>
              <img
                src="/image/website_laptop_mockup.png"
                alt="Responsive website mockup shown on a laptop"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10">
          {[
            { icon: DevicePhoneMobileIcon, label: "Mobile Responsive" },
            { icon: GlobeAltIcon, label: "Custom Domain" },
            { icon: ChatBubbleLeftRightIcon, label: "WhatsApp Integration" },
            { icon: CommandLineIcon, label: "Basic SEO Setup" },
          ].map((feat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 border border-gray-100 text-center">
              <feat.icon className="w-5 h-5 text-gold mx-auto mb-2" />
              <span className="text-navy text-xs font-semibold">
                {feat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// function ProofSection() {
//   return (
//     <section className="section-pad bg-white relative overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-green/3 to-transparent rounded-full blur-3xl" />
//       </div>

//       <div className="relative container-wide">
//         <motion.div
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-center mb-16">
//           <span className="badge-gold badge mb-4 inline-flex">REAL WORK. REAL CLIENTS.</span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight">
//             Proof, not promises.
//           </h2>
//           <p className="text-muted max-w-2xl mx-auto text-lg">
//             Real CAC registrations delivered. Real websites launched.
//             Real clients who came back to say thank you.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           {[
//             { img: "/image/wc1.jpg" },
//             { img: "/image/wc2.jpg" },
//             { img: "/image/wc5.jpg" },
//           ].map((row, i) => (
//             <motion.div
//               key={i}
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               custom={i}
//               viewport={{ once: true }}
//               className="card-premium bg-surface overflow-hidden">
//               <div className="relative">
//                 <img
//                   src={row.img}
//                   alt="WhatsApp delivery of completed CAC registration to a client"
//                   className="w-full h-72 object-cover object-top"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
//               </div>
//               <div className="p-5">
//                 <div className="flex items-center gap-2 mb-2">
//                   <ShieldCheckIcon className="w-4 h-4 text-success" />
//                   <span className="text-success text-xs font-bold uppercase tracking-wider">
//                     Registration Delivered
//                   </span>
//                 </div>
//                 <p className="text-muted text-sm leading-relaxed">
//                   Business registered and official documents delivered to the client on WhatsApp.
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
//           {[
//             { img: "/image/wc3.jpg" },
//             { img: "/image/wc4.jpg" },
//           ].map((row, i) => (
//             <motion.div
//               key={i}
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               custom={i + 3}
//               viewport={{ once: true }}
//               className="card-premium bg-surface overflow-hidden">
//               <div className="relative">
//                 <img
//                   src={row.img}
//                   alt="Client receiving CAC registration documents"
//                   className="w-full h-80 object-cover object-top"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="p-5 flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-success/10 border border-success/20 flex items-center justify-center flex-shrink-0">
//                   <ChatBubbleLeftRightIcon className="w-5 h-5 text-success" />
//                 </div>
//                 <p className="text-muted text-sm italic">
//                   &ldquo;Thank you for all you do.&rdquo;
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.p
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-center text-muted text-xs mt-10">
//           Samples shown anonymously. Client conversations used with permission.
//         </motion.p>
//       </div>
//     </section>
//   );
// }

function WhoItsForSection() {
  const audiences = [
    {
      icon: LightBulbIcon,
      title: "New Founders",
      desc: "Turning an idea into a properly established company.",
    },
    {
      icon: ChartBarIcon,
      title: "Growing Businesses",
      desc: "Moving from informal operations to a more professional structure.",
    },
    {
      icon: BriefcaseIcon,
      title: "Consultants & Professionals",
      desc: "Building credibility with a proper company and digital presence.",
    },
    {
      icon: ScaleIcon,
      title: "Product & Service Businesses",
      desc: "Creating the infrastructure needed to attract and serve customers professionally.",
    },
  ];

  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="relative container-wide">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="badge-gold badge mb-4 inline-flex">
            WHO IT&apos;S FOR
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight">
            Built for entrepreneurs who are ready to take the next step.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {audiences.map((a, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              className="card-premium p-8 text-center bg-surface">
              <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center mx-auto mb-5">
                <a.icon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="text-navy text-lg font-bold mb-2 tracking-tight">
                {a.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Tell us about your business",
      desc: "Complete the onboarding information and provide the required details.",
    },
    {
      num: "02",
      title: "We handle the setup",
      desc: "Company registration, documentation and website development begin.",
    },
    {
      num: "03",
      title: "Review and refine",
      desc: "Review the website and agreed deliverables within the project scope.",
    },
    {
      num: "04",
      title: "Launch",
      desc: "Receive your completed business setup and begin operating professionally.",
    },
  ];

  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-gold/3 via-transparent to-green/3 rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="badge-gold badge mb-4 inline-flex">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight">
            From payment to launch.
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              className="relative">
              {i < steps.length - 1 && (
                <div className="absolute left-7 top-16 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold/50 to-gold/30 hidden md:block" />
              )}
              <div className="flex gap-4 md:gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center border-2 border-gold/30 shadow-lg">
                    <span className="text-gold text-lg font-bold">
                      {step.num}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-lg md:text-xl font-bold text-navy mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm md:text-base">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-xl px-6 py-4 border border-gray-100 shadow-sm">
            <RocketLaunchIcon className="w-5 h-5 text-gold" />
            <span className="text-navy font-semibold text-sm">
              Typical delivery: 7–15 working days
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyJurisTechSection() {
  const differentiators = [
    {
      icon: ScaleIcon,
      title: "LEGAL",
      desc: "Lawyer-led documentation and business structure.",
      iconWrap: "bg-gold/20 border-gold/30",
      iconColor: "text-gold",
    },
    {
      icon: CpuChipIcon,
      title: "TECHNOLOGY",
      desc: "Professional websites and digital infrastructure.",
      iconWrap: "bg-teal/20 border-teal/30",
      iconColor: "text-teal",
    },
    {
      icon: CommandLineIcon,
      title: "ONE PROCESS",
      desc: "Instead of coordinating different providers for registration, legal documents and website development.",
      iconWrap: "bg-green/20 border-green/30",
      iconColor: "text-green",
    },
  ];

  return (
    <section className="section-pad bg-navy relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient-mesh" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-green/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,82,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,82,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative container-wide">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-6">
            <span className="text-white/80 text-sm font-medium">
              WHY JURISTECH LAB
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-5 tracking-tight">
            Legal thinking. Technology execution. One team.
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            We combine legal and technology capabilities to help businesses not
            only register, but build the basic legal and digital infrastructure
            required to operate professionally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentiators.map((d, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-colors">
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${d.iconWrap}`}>
                <d.icon className={`w-6 h-6 ${d.iconColor}`} />
              </div>
              <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-3">
                {d.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-white/40">
            <span className="text-base sm:text-lg font-semibold text-gold">LAW</span>
            <span className="text-base sm:text-xl">+</span>
            <span className="text-base sm:text-lg font-semibold text-teal">TECHNOLOGY</span>
            <span className="text-base sm:text-xl">→</span>
            <span className="text-base sm:text-lg font-semibold text-white">
              BUSINESS LAUNCH
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

function PricingSection() {
  const features = [
    "Private Limited Company registration",
    "Certificate of Incorporation + MEMART",
    "Shareholders Agreement",
    "Professional 4-page website",
    "Domain — 1 year",
    "Commercial hosting — 1 year",
    "Business email setup",
    "WhatsApp integration",
    "1 employment OR service contract",
    "60 days post-launch support",
  ];

  return (
    <section className="section-pad mesh-gradient-bg relative overflow-hidden">
      <div className="relative container-narrow">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12">
          <span className="badge-gold badge mb-4 inline-flex">PRICING</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy tracking-tight">
            One price. Everything included.
          </h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
          className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-navy to-navy-deep text-white rounded-3xl overflow-hidden shadow-2xl shadow-navy/20 ring-2 ring-gold/30">
            <div className="bg-gradient-to-r from-gold to-gold-light py-3 text-center">
              <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                <StarIcon className="w-3.5 h-3.5" /> BUSINESS LAUNCH
              </span>
            </div>

            <div className="p-8 lg:p-10">
              <div className="mb-6">
                <span className="text-white/50 text-sm">Total</span>
                <span className="text-white text-5xl font-extrabold tracking-tight ml-2">
                  ₦225,000
                </span>
              </div>

              <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
                <ClockIcon className="w-4 h-4" />
                <span>Typical delivery: 7–15 working days</span>
              </div>

              <ul className="space-y-3 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckIcon className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white/5 rounded-xl p-4 mb-8 border border-white/10">
                <p className="text-white/60 text-xs text-center">
                  <span className="font-semibold text-gold">
                    60% to commence
                  </span>{" "}
                  ·{" "}
                  <span className="font-semibold text-gold">
                    40% before final delivery
                  </span>
                </p>
              </div>

              <a
                href={WHATSAPP}
                className="block w-full text-center py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-gold to-gold-light text-white hover:shadow-gold hover:shadow-lg transition-all"
                onClick={() =>
                  trackWhatsAppClick("Business Launch Pricing CTA")
                }>
                Start Your Business Launch
              </a>
            </div>
          </div>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-muted text-sm mt-8 max-w-md mx-auto">
          Additional pages, contracts, major functionality and work outside the
          agreed scope are quoted separately.
        </motion.p>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is the ₦225,000 the total price?",
      a: "Yes. ₦225,000 covers everything listed in the Business Launch package — company registration, website, legal documents, email setup, and 60 days of post-launch support. Additional pages, contracts, or major functionality outside the agreed scope are quoted separately.",
    },
    {
      q: "How long does the process take?",
      a: "Typical delivery is 7–15 working days from when we receive your information and initial payment. This covers CAC registration, website development, and document preparation.",
    },
    {
      q: "What information do I need to provide?",
      a: "You'll need to complete a short onboarding form with your business details, provide valid IDs (NIN, passport, or driver's license), a utility bill, and any specific requirements for your website. We'll send you a clear checklist.",
    },
    {
      q: "Can I choose between an employment contract and service contract?",
      a: "Yes. You can choose either one employment contract or one service contract as part of the package. If you need both, that can be added at an additional fee.",
    },
    {
      q: "Can I request additional website pages?",
      a: "Absolutely. The package includes 4 pages. Additional pages, e-commerce functionality, or custom features are quoted separately based on your requirements.",
    },
    {
      q: "Can I upgrade my website later?",
      a: "Yes. You can upgrade your website at any time — add pages, e-commerce, booking systems, or any other functionality. We'll provide a quote based on your needs.",
    },
    {
      q: "What happens after the 60-day support period?",
      a: "After 60 days, you can continue with our ongoing support and maintenance plans, or manage things yourself. The website, domain, and hosting remain yours.",
    },
    {
      q: "How does the 60/40 payment structure work?",
      a: "60% (₦135,000) is paid upfront to commence work. The remaining 40% (₦90,000) is paid before final delivery of all completed work. This ensures commitment from both sides.",
    },
  ];

  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="relative container-narrow">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12">
          <span className="badge-gold badge mb-4 inline-flex">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              custom={i * 0.05}
              viewport={{ once: true }}
              className={`rounded-xl border transition-colors ${
                openIndex === i
                  ? "border-gold/20 bg-gold/[0.03]"
                  : "border-gray-100 hover:border-gray-200"
              }`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-5 px-6 flex justify-between items-center text-left">
                <span
                  className={`font-medium text-sm pr-4 ${openIndex === i ? "text-gold" : "text-navy"}`}>
                  {faq.q}
                </span>
                <ChevronDownIcon
                  className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i
                      ? "rotate-180 text-gold"
                      : "text-muted-light"
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden">
                    <div className="pb-5 px-6 text-muted text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="section-pad bg-navy relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient-mesh" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gold/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gold/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,82,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,82,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-narrow relative">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 tracking-tight">
            Ready to build your business properly?
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Get your company structure, essential legal documents and
            professional digital presence handled through one streamlined
            process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={WHATSAPP}
              className="btn-gold text-base shadow-lg shadow-gold/20"
              onClick={() => trackWhatsAppClick("Business Launch Final CTA")}>
              Start Your Business Launch
              <ArrowRightIcon className="w-4 h-4" />
            </motion.a>
            <a
              href={WHATSAPP}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 backdrop-blur-sm border border-white/15 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/25 transition-all"
              onClick={() =>
                trackWhatsAppClick("Business Launch Final WhatsApp")
              }>
              Talk to Us on WhatsApp
            </a>
          </div>

          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3">
            <span className="text-white/60 text-sm">₦225,000</span>
            <span className="text-white/30">·</span>
            <span className="text-white/60 text-sm">60% to commence</span>
            <span className="text-white/30">·</span>
            <span className="text-white/60 text-sm">
              40% before final delivery
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

export default function BusinessLaunchPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <TransformationSection />
      <WhatsIncludedSection />
      <WebsiteShowcaseSection />
      {/* <ProofSection /> */}
      <WhoItsForSection />
      <HowItWorksSection />
      <WhyJurisTechSection />
      <PricingSection />
      <FAQSection />
      <FAQSchema />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
