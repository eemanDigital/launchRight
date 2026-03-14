"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="copy-btn flex items-center gap-1 text-xs bg-[#C9972B]/10 hover:bg-[#C9972B]/20 text-[#C9972B] px-3 py-1.5 rounded-lg font-medium transition-colors"
    >
      {copied ? (
        <>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

function RequirementCard({ type, icon, title, items }) {
  const requirementsList = items.join('\n');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 border border-gray-100 card-premium"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{icon}</div>
          <div>
            <h3 className="text-[#0A1628] text-lg font-bold">{title}</h3>
            <p className="text-xs text-[#6B7280]">{items.length} items required</p>
          </div>
        </div>
        <CopyButton text={requirementsList} />
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-[#6B7280] flex items-start gap-2">
            <span className="text-[#C9972B] mt-0.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Requirements() {
  const companyRequirements = [
    "Proposed name of the company",
    "Full Name of Director(s)",
    "Objects of the company (nature of businesses)",
    "Business Address (with street name or building name)",
    "Residential address of Director(s) (Street No. inclusive)",
    "Phone number",
    "Director(s) email address",
    "Director(s) date of birth",
    "Director(s) state of origin and local government",
    "Shareholders (if different from director(s))",
    "Director(s)' signature (snap with phone)",
    "Company email address",
    "Shareholding & Allotment (how much shares each member holds)",
    "Valid ID card of Director(s) (NIN, passport, PVC, or driver's licence)",
  ];

  const businessNameRequirements = [
    "Full Name of Proprietor",
    "Business name",
    "The nature of businesses the business will engage in",
    "Business Address (with street name or building name)",
    "Residential address (Street No. inclusive)",
    "Phone number",
    "Date of birth",
    "Signature (snap with phone)",
    "Passport photograph (snap with phone)",
    "Email address",
    "Valid ID card (NIN, passport, PVC, or driver's licence)",
  ];

  const ngoRequirements = [
    "Registered address of the IT",
    "Phone number of trustees",
    "Email address of the Trustees",
    "State/LGA",
    "Resident address of Trustees (if different from registered address)",
    "Email of each Trustees",
    "Signature Specimen of each Trustees",
    "Date of birth of each Trustees",
    "NIN or recognized ID of Trustees",
    "Aims/objectives",
    "Passport photograph",
    "2 Newspapers Publication",
    "Constitution (we can help draft)",
    "Minimum of 2 Trustees required",
  ];

  return (
    <section id="requirements" className="py-20 bg-[#F7F5F0] section-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond'] font-bold text-[#0A1628] mb-4">
            What You Need to Register
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto mb-4">
            We've made it simple. Click "Copy" to copy the requirements list and prepare your documents.
          </p>
          <p className="text-[#C9972B] text-sm font-medium">
            💡 Free name availability search before you pay — no commitment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <RequirementCard
            type="company"
            icon="🏢"
            title="Company Registration (LTD)"
            items={companyRequirements}
          />
          <RequirementCard
            type="business"
            icon="🏪"
            title="Business Name / Enterprise"
            items={businessNameRequirements}
          />
          <RequirementCard
            type="ngo"
            icon="⛪"
            title="NGO / Club / Association"
            items={ngoRequirements}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-xl p-6 border border-[#C9972B]/20 inline-block">
            <p className="text-[#6B7280] mb-4">Not sure which registration type you need?</p>
            <a
              href="https://wa.me/2348000000000?text=Hi%20JurisTech%2C%20I%27m%20not%20sure%20which%20registration%20type%20I%20need"
              className="inline-flex items-center gap-2 bg-[#C9972B] text-[#0A1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#E8B84B] transition-all"
            >
              Chat With Us on WhatsApp →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}