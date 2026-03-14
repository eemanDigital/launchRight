"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
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
    <section id="faq" className="section-pad bg-white">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-4">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border-b border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-5 flex justify-between items-center text-left hover:opacity-70 transition-opacity"
              >
                <span className="font-medium text-navy pr-4">{faq.question}</span>
                <ChevronDownIcon 
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 text-gray-500 leading-relaxed">
                      {faq.answer}
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
