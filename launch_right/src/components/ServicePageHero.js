"use client";

import { ArrowRightIcon, CheckIcon, PlayIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";

const trustPoints = ["Lawyer-led", "CAC-accredited", "One accountable team"];

export default function ServicePageHero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full bg-cover bg-center opacity-25 lg:w-[68%]"
        style={{ backgroundImage: "url('/images/services/hero-office.jpg')" }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-12 h-96 w-96 rounded-full bg-green-2/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-green-2/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>
      <div
        className="pointer-events-none absolute right-0 top-0 z-[1] hidden h-full w-[39%] bg-green-2 lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/75"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 grid min-h-[680px] items-center gap-10 pb-16 pt-32 sm:pt-36 lg:min-h-[700px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:pb-20 lg:pt-40">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl"
        >
          <p className="eyebrow-label eyebrow-label--light">
            Built for ambitious Nigerian businesses
          </p>
          <h1 className="mt-5 text-4xl font-black uppercase leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Legal, digital
            <br />
            <span className="text-green-2">&amp; built to grow.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            From CAC registration and legal documents to websites and custom
            software, get the right expertise from one team that sees the whole
            picture.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#our-services"
              className="group inline-flex items-center gap-2 rounded-full bg-green-2 px-6 py-3 text-xs font-bold uppercase tracking-wide text-navy shadow-pop transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Explore our services
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-green-2 hover:bg-white/5"
            >
              Talk to our team
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold text-white/65">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-green-2" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto h-[340px] w-full max-w-[650px] sm:h-[430px] lg:h-[500px] lg:max-w-none"
        >
          <div className="absolute -right-3 top-4 h-24 w-24 rounded-full border border-green-2/35 sm:right-2 sm:top-0 sm:h-32 sm:w-32" />
          <div className="absolute bottom-5 left-0 z-10 h-20 w-20 rounded-full border-[12px] border-green-2/20 sm:bottom-8 sm:left-1" />
          <div className="absolute inset-3 overflow-hidden rounded-[2rem] border border-white/10 shadow-cover sm:inset-5 sm:rounded-[3rem] lg:inset-y-4 lg:left-5 lg:right-0 lg:rounded-[48%_0_0_48%]">
            <img
              src="/images/services/hero-team.jpg"
              alt="A team collaborating around laptops in a shared workspace"
              className="h-full w-full object-cover object-center"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/35 via-transparent to-navy/10" />
          </div>
          <Link
            href="/about"
            aria-label="Meet the JurisTech team"
            className="absolute left-7 top-8 z-20 grid h-14 w-14 place-items-center rounded-full border-4 border-white/80 bg-green-2 text-navy shadow-pop transition-transform duration-300 hover:scale-110 sm:left-10 sm:top-10 sm:h-16 sm:w-16 lg:left-16"
          >
            <PlayIcon className="ml-0.5 h-5 w-5" />
          </Link>
          <div className="absolute bottom-0 right-0 z-20 max-w-[250px] rounded-2xl border border-white/15 bg-navy/90 p-4 shadow-pop backdrop-blur sm:bottom-5 sm:right-2 sm:max-w-[280px] sm:p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-2">
              One team, from start to scale
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Practical advice and dependable delivery, under one roof.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 h-2 w-full bg-green-2" />
    </section>
  );
}
