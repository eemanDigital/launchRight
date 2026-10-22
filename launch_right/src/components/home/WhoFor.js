"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { stages, site } from "@/lib/homeData";

const photos = {
  meeting: {
    src: "/images/services-2.jpg",
    alt: "Entrepreneurs planning their next stage of growth",
    caption: "Good ideas deserve a clear plan.",
  },
  team: {
    src: "/images/services-1.jpg",
    alt: "JurisTech team collaborating on a client project",
    caption: "One team for the whole journey.",
  },
  celebration: {
    src: "/images/growth.jpg",
    alt: "Business owners celebrating a milestone",
    caption: "Built to help you move forward.",
  },
};

function StageCard({ stage, active, onSelect }) {
  const Icon = stage.icon;

  return (
    <button
      type="button"
      role="tab"
      id={`stage-tab-${stage.id}`}
      aria-selected={active}
      aria-controls="stage-panel"
      onClick={onSelect}
      className={`group flex min-h-[174px] w-full flex-col rounded-3xl border p-5 text-left transition-all duration-300 sm:p-6 ${
        active
          ? "border-green-2 bg-green-pale shadow-card"
          : "border-line bg-white hover:-translate-y-0.5 hover:border-green-2/50 hover:shadow-card"
      }`}>
      <span className="flex w-full items-center justify-between">
        <span
          className={`grid h-11 w-11 place-items-center rounded-xl transition-colors duration-300 ${
            active ? "bg-green-2 text-navy" : "bg-surface text-navy"
          }`}>
          <Icon className="h-6 w-6" strokeWidth={1.7} />
        </span>
        <ArrowRightIcon
          className={`h-5 w-5 transition-all duration-300 ${
            active
              ? "translate-x-0 text-green-dark"
              : "-translate-x-1 text-muted opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
          }`}
        />
      </span>
      <span className="mt-5 text-lg font-extrabold tracking-tight text-navy">
        {stage.title}
      </span>
      <span className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">
        {stage.text}
      </span>
    </button>
  );
}

function PhotoTile({ photo, className = "" }) {
  return (
    <figure
      className={`group relative min-h-[190px] overflow-hidden rounded-3xl bg-navy ${className}`}>
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/5 to-transparent" />
      <figcaption className="absolute bottom-0 left-0 p-5 text-sm font-semibold text-white sm:p-6">
        {photo.caption}
      </figcaption>
    </figure>
  );
}

export default function WhoFor() {
  const [active, setActive] = useState(stages[0]);
  const ActiveIcon = active.icon;

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-wide">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-green-2/15 text-green-dark">
            <CheckCircleIcon className="h-6 w-6" />
          </span>
          <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
            Who we help
          </p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Inspiring you to reach{" "}
            <span className="highlight">your business goals</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            From your first idea to your next big milestone, get the legal and
            digital support that fits your stage.
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Choose your business stage"
          className="grid gap-4 md:grid-cols-2 lg:gap-5">
          <div className="grid gap-4 lg:gap-5">
            <StageCard
              stage={stages[0]}
              active={active.id === stages[0].id}
              onSelect={() => setActive(stages[0])}
            />
            <StageCard
              stage={stages[1]}
              active={active.id === stages[1].id}
              onSelect={() => setActive(stages[1])}
            />
            <PhotoTile
              photo={photos.team}
              className="min-h-[280px] sm:min-h-[320px]"
            />
          </div>

          <div className="grid gap-4 lg:gap-5">
            <PhotoTile
              photo={photos.meeting}
              className="min-h-[280px] sm:min-h-[320px]"
            />
            <StageCard
              stage={stages[2]}
              active={active.id === stages[2].id}
              onSelect={() => setActive(stages[2])}
            />
            <PhotoTile
              photo={photos.celebration}
              className="min-h-[260px] sm:min-h-[300px]"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            id="stage-panel"
            role="tabpanel"
            aria-labelledby={`stage-tab-${active.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-6 flex flex-col gap-6 rounded-3xl bg-navy p-6 text-white sm:mt-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-green-2 text-navy">
                <ActiveIcon className="h-6 w-6" strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-green-2">
                  Your next step · {active.label}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-semibold text-white/80">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3 sm:justify-end">
              <Button href={active.href} size="sm">
                {active.cta}
              </Button>
              <Button href={site.whatsapp} external variant="outline" size="sm">
                Chat With Us
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
