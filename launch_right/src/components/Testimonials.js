"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Madam Julit Onyema",
      location: "Kogi State, Nigeria",
      role: "Groceries",
      stars: 5,
      quote:
        "I had my business name registered in less than 24 hours. The process was so smooth I didn't have to leave my house. Genuinely the easiest part of starting my business.",
    },
    {
      name: "Maryam Muftaudeen",
      location: "Abuja",
      role: "Tech Startup Founder",
      stars: 5,
      quote:
        "JurisTech made company registration effortless. The team was responsive, knowledgeable, and transparent. I had my certificate in just 12 days. Highly recommend!",
    },
    {
      name: "Folake Sanni",
      location: "Abuja",
      role: "E-commerce Entrepreneur",
      stars: 5,
      quote:
        "I'd tried twice before with other agents and failed. JurisTech got it right on the first attempt. Transparent, fast, and professional. I've already referred three friends.",
    },
  ];

  return (
    <section id="testimonials" className="section-pad bg-surface">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14">
          <span className="badge-gold badge mb-4 inline-flex">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Don't take our word for it — here's what entrepreneurs say about working with JurisTech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-premium bg-white p-8 h-full flex flex-col">
              <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-gold/20 mb-4" />

              <div className="flex gap-0.5 mb-5">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-gold" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-1">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-navy to-navy-light rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted">{testimonial.role} · {testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-3.5 h-3.5 text-gold" />
              ))}
            </div>
            <span className="text-muted text-sm font-medium">4.9/5 from 500+ verified reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
