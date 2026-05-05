"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterTextIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Madam Julit Onyema",
      location: "Kogi State",
      role: "Groceries",
      stars: 5,
      quote:
        "I had my business name registered in less than 24 hours. The process was so smooth I didn't have to leave my house.",
      accent: "emerald",
    },
    {
      name: "Maryam Muftaudeen",
      location: "Abuja",
      role: "Tech Startup Founder",
      stars: 5,
      quote:
        "JurisTech made company registration effortless. The team was responsive, knowledgeable, and transparent. Certificate in just 12 days.",
      accent: "blue",
    },
    {
      name: "Folake Sanni",
      location: "Abuja",
      role: "E-commerce Entrepreneur",
      stars: 5,
      quote:
        "I'd tried twice before with other agents and failed. JurisTech got it right on the first attempt. Transparent, fast, and professional.",
      accent: "gold",
    },
  ];

  const accentMap = {
    emerald: { bg: "bg-emerald-50", border: "border-emerald-100", text: "text-emerald-600", initial: "from-emerald-500 to-emerald-600" },
    blue: { bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-600", initial: "from-blue-500 to-blue-600" },
    gold: { bg: "bg-gold/5", border: "border-gold/15", text: "text-gold", initial: "from-gold to-gold-light" },
  };

  return (
    <section id="testimonials" className="section-pad bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-t from-gold/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="badge-gold badge mb-4 inline-flex">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-5 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Don't take our word for it — here's what entrepreneurs say about working with JurisTech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const accent = accentMap[testimonial.accent];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className={`relative ${accent.bg} ${accent.border} border rounded-2xl p-8 h-full flex flex-col`}>
                  <ChatBubbleBottomCenterTextIcon className={`w-8 h-8 ${accent.text} opacity-20 mb-4`} />

                  <div className="flex gap-0.5 mb-5">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-gold" />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-1">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100/60">
                    <div className={`w-10 h-10 bg-gradient-to-br ${accent.initial} rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-sm`}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted">{testimonial.role} · {testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-gray-100 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-gold" />
              ))}
            </div>
            <span className="text-muted text-sm font-medium">4.9/5 from 500+ verified reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
