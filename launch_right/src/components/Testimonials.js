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
    <section id="testimonials" className="section-pad bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy mb-4">
            What our clients say
          </h2>
          <p className="text-gray-500">
            Don't take our word for it — here's what entrepreneurs say about
            working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface p-8 rounded-2xl">
              <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-gold/30 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-gold" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
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
          <p className="text-gray-400 text-sm">
            4.9/5 from 500+ verified reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}
