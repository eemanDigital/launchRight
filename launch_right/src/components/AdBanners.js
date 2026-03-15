"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AdBanners() {
  const [activeAd, setActiveAd] = useState(0);

  const ads = [
    {
      id: 1,
      title: "Launch Your Business Today",
      description: "Get CAC registration in 3-5 days",
      cta: "Get Started",
      bgGradient: "from-gold/20 to-navy",
    },
    {
      id: 2,
      title: "Special Business Package",
      description: "Complete legal compliance for startups",
      cta: "Learn More",
      bgGradient: "from-blue-600/20 to-navy",
    },
    {
      id: 3,
      title: "Free Business Consultation",
      description: "Speak with our CAC experts today",
      cta: "Book Now",
      bgGradient: "from-green-600/20 to-navy",
    },
  ];

  return (
    <section className="py-16 bg-navy">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${ads[activeAd].bgGradient}`}
          />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {ads[activeAd].title}
              </h2>
              <p className="text-lg text-white/80 mb-8">
                {ads[activeAd].description}
              </p>
              <button className="bg-gold text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
                {ads[activeAd].cta}
              </button>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 flex gap-2">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveAd(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeAd ? "bg-gold w-8" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Digital Marketing Materials",
              desc: "Promote your business professionally",
            },
            {
              title: "Event Flyers",
              desc: "High-quality prints for your events",
            },
            {
              title: "Custom Banners",
              desc: "Eye-catching banners for any occasion",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
