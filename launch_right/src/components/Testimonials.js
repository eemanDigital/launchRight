"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      initials: "CO",
      name: "Chidinma Okonkwo",
      business: "Fashion Brand Owner — Lagos",
      stars: 5,
      quote:
        "I had my business name registered in less than 24 hours. The process was so smooth I didn't have to leave my house. JurisTech is genuinely the easiest part of starting my business.",
    },
    {
      initials: "EA",
      name: "Emeka Adeyemi",
      business: "Tech Startup Founder — London, UK",
      stars: 5,
      quote:
        "As a Nigerian in the UK, I was worried about registering remotely. JurisTech made it completely seamless. My LTD company was ready in 4 days. Excellent communication throughout.",
    },
    {
      initials: "FS",
      name: "Folake Sanni",
      business: "E-commerce Entrepreneur — Abuja",
      stars: 5,
      quote:
        "I'd tried twice before with other agents and failed. JurisTech got it right on the first attempt. Transparent, fast, and professional. I've already referred three friends.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond'] font-bold text-[#0A1628] mb-4">
            Real Entrepreneurs. Real Results.
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Don't take our word for it — here's what our clients say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : index === 2 ? 30 : 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#F7F5F0] rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#C9972B] text-white flex items-center justify-center font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#0A1628]">{testimonial.name}</p>
                  <p className="text-sm text-[#6B7280]">{testimonial.business}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <span key={i} className="text-[#C9972B]">⭐</span>
                ))}
              </div>
              <p className="text-[#1A1A2E] italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#6B7280]">⭐ 4.9/5 from 500+ verified reviews on Google</p>
        </motion.div>
      </div>
    </section>
  );
}