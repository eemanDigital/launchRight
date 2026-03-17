"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

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
      className="text-sm text-navy hover:text-gold transition-colors flex items-center gap-1"
    >
      {copied ? "Copied!" : "Copy list"}
    </button>
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
    "Valid ID card of Director(s) (International passport, PVC, NIN, or driver's licence)",
  ];

  const businessNameRequirements = [
    "Full Name of Proprietor",
    "Business name",
    "Nature of businesses the business will engage in",
    "Business Address (with street name or building name)",
    "Residential address (Street No. inclusive)",
    "Phone number",
    "Date of birth",
    "Signature (snap with phone)",
    "Passport photograph (snap with phone)",
    "Email address",
    "Valid ID card (International passport, PVC, NIN, or driver's licence)",
  ];

  const ngoRequirements = [
    "Registered address of the IT",
    "Phone number of trustees",
    "Email address of the Trustees or director",
    "State/LGA",
    "Resident address of Trustees (if different from registered address)",
    "Email of each Trustees",
    "Signature Specimen of each Trustees",
    "Date of birth of each Trustees",
    "NIN or recognized means of identification of Trustees",
    "Aims/objectives",
    "Passport photograph",
    "2 Newspapers Publication",
    "Constitution (we can help draft)",
    "Minimum of 2 Trustees required",
  ];

  const RequirementList = ({ title, items, delay, timeline }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-navy font-semibold">{title}</h3>
        {timeline && (
          <span className={`badge ${timeline.includes('Guaranteed') ? 'badge-success' : 'badge-gold'}`}>
            {timeline}
          </span>
        )}
      </div>
      <ul className="space-y-2 mb-4">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-gray-500 flex items-start gap-2">
            <span className="text-gold">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <CopyButton text={items.join('\n')} />
    </motion.div>
  );

  return (
    <section id="requirements" className="section-pad bg-surface">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-4">
            What you need to register
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-6">
            We've made it simple. Click "Copy list" to copy the requirements and prepare your documents.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="badge badge-success">Business Name: 24-48 hrs (Guaranteed)</span>
            <span className="badge badge-gold">LTD & IT: 4-15 days (Subject to CAC)</span>
          </div>

          <a
            href="https://wa.me/message/KTFL2G2JM3JTP1"
            className="btn-primary inline-flex"
          >
            Not sure which one? Chat with us
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <RequirementList 
            title="Company Registration (LTD)" 
            items={companyRequirements} 
            delay={0}
            timeline="4-15 days (Subject to CAC)"
          />
          <RequirementList 
            title="Business Name / Enterprise" 
            items={businessNameRequirements} 
            delay={0.1}
            timeline="24-48 hrs (Guaranteed)"
          />
          <RequirementList 
            title="NGO / Club / Association" 
            items={ngoRequirements} 
            delay={0.2}
            timeline="4-15 days (Subject to CAC)"
          />
        </div>
      </div>
    </section>
  );
}
