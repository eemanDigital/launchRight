"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { stages, site } from "@/lib/homeData";

export default function WhoFor() {
  const [active, setActive] = useState(stages[0]);
  const Icon = active.icon;

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Who it's for"
          title="Built for"
          highlight="your stage"
          description="Wherever you are on your business journey, we have the right combination of legal and digital support."
        />

        <div className="mt-12 flex justify-center">
          <div role="tablist" className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-line bg-surface p-1.5 shadow-card">
            {stages.map((stage) => (
              <button
                key={stage.id}
                role="tab"
                aria-selected={active.id === stage.id}
                onClick={() => setActive(stage)}
                className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors duration-300 ${
                  active.id === stage.id
                    ? "bg-green-2 text-navy"
                    : "text-navy/60 hover:text-navy"
                }`}
              >
                {stage.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative mx-auto mt-10 grid max-w-5xl gap-8 overflow-hidden rounded-[2rem] bg-navy p-8 text-white sm:p-12 lg:grid-cols-[auto,1fr] lg:items-center"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-2/15 blur-3xl" />
            <div className="relative">
              <span className="hex flex h-28 w-28 items-center justify-center bg-green-2 text-navy">
                <Icon className="h-12 w-12" strokeWidth={1.5} />
              </span>
            </div>
            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-green-2">
                {active.label}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">{active.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                {active.text}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold text-white/80"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={active.href}>{active.cta}</Button>
                <Button href={site.whatsapp} external variant="outline">
                  Chat With Us
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}