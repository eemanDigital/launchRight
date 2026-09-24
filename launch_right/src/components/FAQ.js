"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDownIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does CAC registration take?",
      answer:
        "Business Name registration is approved in 24-48 hours (guaranteed). Private Limited Company (LTD) and Incorporated Trustees (NGO) typically take 4-15 working days, subject to CAC processing times. We keep you updated at every stage.",
    },
    {
      question: "Who approves my business registration?",
      answer:
        "The Corporate Affairs Commission (CAC) is the only body that approves business registrations in Nigeria. We are accredited agents who file your application correctly — but final approval comes from CAC.",
    },
    {
      question: "What documents do I need?",
      answer:
        "For Business Name: valid ID (NIN, passport, or driver's license) and a utility bill. For LTD: IDs for all directors and shareholders. We'll send you a precise checklist after you reach out.",
    },
    {
      question: "Can I register from outside Nigeria?",
      answer:
        "Absolutely. We have clients in the UK, US, Canada, UAE, and across Europe. Everything is done digitally — you never need to be physically present in Nigeria.",
    },
    {
      question: "Do you offer free name availability search?",
      answer:
        "Yes! We check if your preferred business name is available BEFORE you pay anything. If it's taken, we suggest alternatives at no extra cost.",
    },
    {
      question: "What's the difference between Business Name and LTD?",
      answer:
        "A Business Name is a sole proprietorship — simple, fast (24-48 hours guaranteed), and low-cost. A Private Limited Company (LTD) is a separate legal entity that can have multiple shareholders, attract investment, and offers personal liability protection. LTD processing takes 4-15 days (subject to CAC).",
    },
    {
      question: "Will I receive a physical certificate?",
      answer:
        "Your certificate is delivered digitally as an official PDF from CAC — which is fully valid for bank account opening, contracts, and all legal purposes. Physical copies can be arranged on request.",
    },
    {
      question: "How do I get started?",
      answer:
        "Click any Get Started button on this page to open a WhatsApp chat with our team. Tell us your preferred business name and we'll check if it's available — FREE, with no commitment.",
    },
  ];

  return (
    <section id="faq" className="section-pad bg-white relative overflow-hidden">
      {/* faint wave texture */}
      <svg className="absolute top-0 left-0 w-full opacity-[0.05] pointer-events-none" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path fill="none" stroke="#2d7cff" strokeWidth="2" d="M0,70 C160,10 320,110 480,60 C640,10 800,110 960,60 C1120,10 1280,110 1440,50" />
      </svg>

      <div className="relative container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <span className="eyebrow-label mb-5">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
            Frequently Asked <span className="text-gradient-brand">Questions</span>
          </h2>

          {/* floating hint orb */}
          <div className="mt-5 inline-flex items-center gap-2 bg-surface border border-line rounded-full px-5 py-2.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-2 animate-pulse" />
            <span className="text-xs font-semibold text-muted">
              Answers in plain language — no legal jargon
            </span>
          </div>
        </motion.div>

        <div className="space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                viewport={{ once: true }}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-2/25 bg-surface shadow-soft"
                    : "border-line hover:border-blue-2/20 bg-white"
                }`}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-5 px-5 sm:px-6 flex justify-between items-center text-left gap-4">
                  <span className="flex items-center gap-3.5">
                    {/* number orb */}
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black border transition-colors duration-300 ${
                        isOpen
                          ? "bg-gradient-to-br from-blue to-green text-white border-transparent"
                          : "bg-surface border-line text-muted"
                      }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-bold text-sm pr-2 transition-colors ${
                        isOpen ? "text-navy" : "text-ink/80"
                      }`}>
                      {faq.question}
                    </span>
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-navy text-white rotate-180" : "bg-surface border border-line text-muted"
                    }`}>
                    <ChevronDownIcon className="w-4 h-4" />
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden">
                      <div className="pb-5 pl-[3.35rem] pr-6 text-muted text-sm leading-relaxed">
                        <div className="border-l-2 border-blue-2/20 pl-4">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 text-center">
          <a
            href="https://wa.me/message/KTFL2G2JM3JTP1"
            className="group inline-flex items-center gap-3 rounded-full bg-navy text-white text-sm font-semibold px-7 py-3.5 shadow-soft hover:bg-navy-light hover:-translate-y-0.5 hover:shadow-pop transition-all duration-300">
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-green-2/20 transition-colors">
              <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4 text-green-2" />
            </span>
            Still have questions? Chat with us
          </a>
        </motion.div>
      </div>
    </section>
  );
}