"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { faqs, site } from "@/lib/homeData";

function FaqItem({ faq, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 ${
        open ? "border-green-2 bg-surface" : "border-line bg-white"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="text-sm font-bold text-navy sm:text-lg">{faq.question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
            open ? "bg-green-2 text-navy" : "bg-surface text-navy"
          }`}
        >
          {open ? (
            <MinusIcon className="h-4 w-4" strokeWidth={3} />
          ) : (
            <PlusIcon className="h-4 w-4" strokeWidth={3} />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-ink-soft">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="container-wide max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow="Get answers"
            title="Frequently asked"
            highlight="questions"
            description="Everything you need to know about registering and building your business."
          />
        </Reveal>

        <div className="mt-14 space-y-4">
          <Reveal>
            <FaqItem faq={faqs[0]} defaultOpen />
          </Reveal>
          {faqs.slice(1).map((faq, i) => (
            <Reveal key={faq.question} delay={0.04 * (i + 1)}>
              <FaqItem faq={faq} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-sm font-semibold text-ink-soft">
              Still have questions? We'd love to help.
            </p>
            <Button href={site.whatsapp} external>
              Chat With Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}