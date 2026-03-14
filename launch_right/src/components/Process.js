"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
    <span ref={ref} className="text-[#C9972B]">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Process() {
  const steps = [
    {
      number: "1",
      icon: "🔍",
      title: "Free Name Search",
      description:
        "Tell us your preferred business name. We check availability for FREE — no commitment. If taken, we suggest alternatives until we find one that works.",
    },
    {
      number: "2",
      icon: "📝",
      title: "We File Your Application",
      description:
        "We prepare and submit your application to CAC. For Business Name: approved in 24–48 hours. For LTD: typically 3–5 working days (CAC-dependent).",
    },
    {
      number: "3",
      icon: "📧",
      title: "Receive Your Certificate",
      description:
        "Your official CAC certificate arrives in your email. Ready to open a business bank account, sign contracts, and operate legally.",
    },
  ];

  const stats = [
    { value: "2000", suffix: "+", label: "Businesses Filed with CAC" },
    { value: "24-48", suffix: " hrs", label: "Business Name Approval" },
    { value: "98", suffix: "%", label: "First-Time Approval Rate" },
    { value: "4.9", suffix: "★", label: "Average Client Rating" },
  ];

  return (
    <section id="process" className="py-20 bg-white section-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond'] font-bold text-[#0A1628] mb-4">
            How It Works
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            CAC approves all registrations. We ensure your application is correct — no rejections from errors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#C9972B] to-[#E8B84B] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0A1628] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-[#0A1628] text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-[#6B7280]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-[#F7F5F0] rounded-xl">
              <div className="text-4xl md:text-5xl font-['Cormorant_Garamond'] font-bold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[#6B7280]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}