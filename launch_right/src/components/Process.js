"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon, DocumentTextIcon, CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/\D/g, ''));
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-navy">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Process() {
  const steps = [
    {
      icon: MagnifyingGlassIcon,
      title: "Check Availability",
      description: "We check if your business name is available — free, with no commitment.",
      step: "Step 1",
    },
    {
      icon: DocumentTextIcon,
      title: "We File Application",
      description: "We prepare and submit your application to CAC correctly the first time.",
      step: "Step 2",
    },
    {
      icon: CheckCircleIcon,
      title: "Receive Certificate",
      description: "Get your official CAC certificate delivered to your email.",
      step: "Step 3",
    },
  ];

  const stats = [
    { value: "2000", suffix: "+", label: "Businesses Registered" },
    { value: "24-48", suffix: " hrs", label: "Business Name (Guaranteed)" },
    { value: "4-15", suffix: " days", label: "LTD & IT (Subject to CAC)" },
    { value: "4.9", suffix: "★", label: "Client Rating" },
  ];

  return (
    <section id="process" className="section-pad bg-surface">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-4">
            How it works
          </h2>
<p className="text-gray-500 max-w-xl mx-auto">
            We ensure your application is correct — no rejections from errors. Business Name: 24-48 hours. LTD & IT: 4-15 days (subject to CAC).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-colors">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gold text-sm font-medium mb-2">{step.step}</p>
                <h3 className="text-navy text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRightIcon className="w-6 h-6 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="text-3xl md:text-4xl font-semibold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
