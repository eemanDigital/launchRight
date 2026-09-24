"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Madam Julit Onyema",
      location: "Kogi State",
      role: "Groceries",
      stars: 5,
      quote:
        "I didn't think it was possible to register my business name in less than 24 hours without leaving my shop. JurisTech made it happen. Everything was handled on WhatsApp — the certificate came straight to my phone.",
      ring: "border-green-2/30 before:bg-green-2/10",
      text: "text-green-2",
    },
    {
      name: "Maryam Muftaudeen",
      location: "Abuja",
      role: "Tech Startup Founder",
      stars: 5,
      quote:
        "We needed company registration, a shareholders agreement, and a website for our startup. Most agencies would send us to three different people. JurisTech handled everything in-house. Certificate in 12 days.",
      ring: "border-blue-2/30 before:bg-blue-2/10",
      text: "text-blue-2",
    },
    {
      name: "Folake Sanni",
      location: "Abuja",
      role: "E-commerce Entrepreneur",
      stars: 5,
      quote:
        "I'd tried twice before with other agents and both times my application was rejected. JurisTech got it right on the first attempt — no extra charges, no excuses. They explained what went wrong and fixed it.",
      ring: "border-gold/30 before:bg-gold/10",
      text: "text-gold",
    },
  ];

  return (
    <section
      id="testimonials"
      className="section-pad bg-white relative overflow-hidden">
      {/* faint wave texture */}
      <svg className="absolute bottom-0 left-0 w-full opacity-[0.05] pointer-events-none" viewBox="0 0 1440 160" preserveAspectRatio="none">
        <path fill="none" stroke="#2d7cff" strokeWidth="2" d="M0,120 C240,40 480,160 720,90 C960,20 1200,140 1440,70" />
        <path fill="none" stroke="#1fc87f" strokeWidth="2" d="M0,140 C240,60 480,180 720,110 C960,40 1200,160 1440,90" />
      </svg>

      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="eyebrow-label mb-5">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-5 tracking-tight">
            What Our <span className="text-gradient-brand">Clients Say</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Don&apos;t take our word for it — here&apos;s what entrepreneurs say about working with JurisTech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full">
                <div className={`relative rounded-3xl p-8 h-full flex flex-col border ${testimonial.ring} bg-surface/70 overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-cover`}>
                {/* soft radial wash */}
                <span className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-60 pointer-events-none ${testimonial.text}`} style={{ background: "currentColor" }} />
                {/* floating quote orb */}
                <div className="absolute -top-4 -right-3 w-16 h-16 rounded-full bg-white border border-line-soft shadow-soft flex items-center justify-center rotate-6 group-hover:rotate-12 transition-transform duration-500">
                  <span className={`text-[2rem] font-black leading-none select-none ${testimonial.text}`}>”</span>
                </div>

                {/* stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-gold" />
                  ))}
                </div>

                <p className="text-ink/80 mb-7 leading-relaxed text-sm flex-1">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3.5 pt-5 border-t border-line-soft">
                  {/* orb avatar */}
                  <div className="relative flex-shrink-0">
                    <span className={`absolute -inset-1.5 rounded-full border border-dashed ${testimonial.ring.split(" ")[0]} animate-spin-slow [animation-duration:16s]`} />
                    <div className={`relative w-10 h-10 rounded-full bg-gradient-to-br from-navy-light to-navy flex items-center justify-center text-white font-bold text-sm shadow-soft`}>
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted">{testimonial.role} · {testimonial.location}</p>
                  </div>
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
          className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-surface border border-line shadow-soft">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-gold" />
              ))}
            </div>
            <span className="text-muted text-sm font-semibold">4.9/5 from 500+ verified reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}