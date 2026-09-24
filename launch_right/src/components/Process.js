"use client";

import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    step: "01",
    icon: MagnifyingGlassIcon,
    title: "Tell Us Your Needs",
    desc: "We listen and recommend the best path for your business goals.",
    pills: ["Free Consultation", "Name Search"],
    node: "bg-blue-2 before:border-blue-2/40",
  },
  {
    step: "02",
    icon: DocumentTextIcon,
    title: "We Handle Everything",
    desc: "CAC registration, website development, and legal documents — all in parallel.",
    pills: ["CAC Filing", "Web Design", "Legal Docs"],
    node: "bg-gradient-to-br from-blue to-green",
  },
  {
    step: "03",
    icon: RocketLaunchIcon,
    title: "Launch With Confidence",
    desc: "Your business is legally registered, digitally present, and ready from day one.",
    pills: ["Certificate", "Website", "Ongoing Support"],
    node: "bg-green-2",
  },
];

const stats = [
  { value: "2,000+", label: "Clients Served" },
  { value: "5+", label: "Years Experience" },
  { value: "24-48hrs", label: "Fast Turnaround" },
  { value: "4.9★", label: "Client Rating" },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-pad bg-surface relative overflow-hidden">
      {/* faint wave texture */}
      <svg className="absolute bottom-0 left-0 w-full opacity-[0.05] pointer-events-none" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path fill="none" stroke="#2d7cff" strokeWidth="2" d="M0,140 C240,60 480,200 720,120 C960,40 1200,180 1440,100" />
        <path fill="none" stroke="#1fc87f" strokeWidth="2" d="M0,170 C240,90 480,230 720,150 C960,70 1200,210 1440,130" />
      </svg>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-soft via-transparent to-green-pale rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14">
          <span className="eyebrow-label mb-5">HOW WE WORK</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-5 tracking-tight">
            From Idea to <span className="text-gradient-brand">Launch</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Registration, websites, and legal documents — all under one roof.
          </p>
        </motion.div>

        {/* trajectory */}
        <div className="relative max-w-5xl mx-auto">
          {/* flight path line (desktop) */}
          <svg className="absolute top-8 hidden lg:block inset-x-0 h-16 pointer-events-none" viewBox="0 0 1024 64" preserveAspectRatio="none">
            <path
              d="M60,54 C240,10 380,10 560,50 C700,80 860,80 964,30"
              fill="none"
              stroke="url(#flightGrad)"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
            <defs>
              <linearGradient id="flightGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0758f7" />
                <stop offset="100%" stopColor="#1fc87f" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative text-center">
                {/* node puck */}
                <div className="relative inline-flex items-center justify-center">
                  <span className="absolute w-24 h-24 rounded-full border border-dashed border-blue-2/25 animate-spin-slow [animation-duration:20s]" style={{ animationDelay: `${index * 0.4}s` }} />
                  <div
                    className={`relative w-16 h-16 rounded-2xl flex items-center justify-center ${step.node} text-white border border-white/50 shadow-soft`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-8 h-8 rounded-full bg-white border border-line text-blue-2 text-[11px] font-black flex items-center justify-center shadow-sm">
                    {step.step}
                  </span>
                  {/* satellite dot */}
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-green-2 shadow-[0_0_12px_rgba(30,200,127,0.7)] animate-pulse" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-navy mt-6 mb-2">
                  {step.title}
                </h3>
                <p className="text-muted text-sm md:text-base leading-relaxed mb-4 max-w-xs mx-auto">
                  {step.desc}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {step.pills.map((pill) => (
                    <span
                      key={pill}
                      className="px-3 py-1 rounded-full text-xs font-bold bg-blue-soft border border-line text-blue-2">
                      {pill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* stats band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-6 lg:p-7 text-center bg-white border border-line shadow-soft group hover:border-blue-2/30 transition-colors">
              <div className="absolute inset-x-6 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-blue-2 to-green-2 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl lg:text-4xl font-extrabold mb-2 tracking-tight group-hover:text-gold transition-colors text-navy">
                {stat.value}
              </div>
              <p className="text-muted text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}