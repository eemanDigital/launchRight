"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does CAC registration take?",
      answer:
        "It depends on the registration type. Business Name registration is approved in 24–48 hours (CAC processes these quickly). Private Limited Company (LTD) and other types depend on CAC processing times — typically 3–14 working days. We keep you updated at every stage. Full package delivery (website + legal docs) follows these timelines plus additional time for web development and document drafting.",
    },
    {
      question: "Who approves my business registration?",
      answer:
        "The Corporate Affairs Commission (CAC) is the only body that approves business registrations in Nigeria. We are accredited agents who file your application correctly — but final approval comes from CAC. We ensure your application is error-free to avoid rejections and delays.",
    },
    {
      question: "What documents do I need to provide?",
      answer:
        "For business name: valid ID (NIN, passport, or driver's license) and a utility bill. For LTD: IDs for all directors and shareholders. We'll send you a precise checklist after you reach out.",
    },
    {
      question: "Can I register from outside Nigeria?",
      answer:
        "Absolutely. We have clients in the UK, US, Canada, UAE, and across Europe. Everything is done digitally — you never need to be physically present in Nigeria.",
    },
    {
      question: "Do you offer free name availability search?",
      answer:
        "Yes! We check if your preferred business name is available BEFORE you pay anything. If it's taken, we suggest alternatives at no extra cost. Only when you confirm a name do we proceed with registration.",
    },
    {
      question: "What if my preferred business name is taken?",
      answer:
        "We conduct a name availability search before filing. If your first choice is taken, we'll suggest alternatives at no extra charge. If we cannot register any of your choices, you receive a full refund.",
    },
    {
      question: "What is the difference between a Business Name and an LTD?",
      answer:
        "A Business Name is a sole proprietorship registered to an individual — simple, fast (24–48 hours), and low-cost. A Private Limited Company (LTD) is a separate legal entity that can have multiple shareholders, attract investment, open corporate bank accounts, and offers personal liability protection for directors. LTD processing depends on CAC (typically 3–14 working days).",
    },
    {
      question: "Is my payment secure?",
      answer:
        "Yes. We accept bank transfers and secure online payments. You receive a payment receipt immediately, and work begins only after payment confirmation.",
    },
    {
      question: "Will I receive a physical certificate?",
      answer:
        "Your certificate is delivered digitally as an official PDF from CAC — which is fully valid for bank account opening, contracts, and all legal purposes. Physical copies can be arranged on request.",
    },
    {
      question: "Do you offer post-registration services?",
      answer:
        "Yes — including annual returns filing, change of directors, address changes, share allotment, and business name renewal. We're your long-term CAC partner.",
    },
    {
      question: "Are you a CAC-accredited agent?",
      answer:
        "Yes. JurisTech operates as an accredited CAC agent. All registrations are filed through the official CAC online portal and are fully government-recognized. We file correctly to avoid rejections.",
    },
    {
      question: "How do I get started?",
      answer:
        "Click any Get Started button on this page to open a WhatsApp chat with our team. Tell us your preferred business name and we'll check if it's available — FREE, with no commitment. Then we'll guide you through the next steps.",
    },
    {
      question: "What legal documents do I actually get?",
      answer:
        "It depends on your package. Our Basic package includes a certificate explanation letter for bank account opening. Business Launch adds a lawyer-drafted Service Agreement and Privacy Policy. Corporate Setup includes a full legal suite — Shareholders' Agreement, Employment Contract, NDA, and NDPR-compliant website policies. Premium adds Director Service Agreement, Founder Vesting Agreement, Data Processing Agreement, and a 1-hour legal consultation. All documents are drafted by our in-house lawyer and are Nigerian-law compliant.",
    },
    {
      question: "Does the package price include the domain and hosting?",
      answer:
        "Yes — domain registration and hosting are fully included in every package. Basic and Business Launch packages include a .com.ng domain. Corporate Setup and Premium include a .com domain. Hosting is included for 1 full year on all packages, with SSL certificate included. Renewal costs after Year 1 are straightforward — we will notify you in advance.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond'] font-bold text-[#0A1628] mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center bg-[#F7F5F0] hover:bg-[#EDE9E3] transition-colors"
              >
                <span className="text-[#0A1628] font-semibold">{faq.question}</span>
                <span className="text-[#C9972B] text-2xl ml-4">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-[#6B7280]">{faq.answer}</div>
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