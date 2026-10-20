"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { trackWhatsAppClick } from "@/lib/analytics";

const WHATSAPP = "https://wa.me/message/KTFL2G2JM3JTP1";
const PHONE = "08067234189";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const trustMarkers = [
  "Lawyer-led Studio",
  "CAC Accredited Agent",
  "24–48h Turnaround",
];

export default function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden">
      <div className="relative flex flex-1 flex-col pb-24 lg:pb-[92px]">
        {/* The stage grows to fill whatever height is left in the viewport after
            the nav offset and padding. The navy panel is a flex child, so it
            stretches with it and the photo — pinned top and bottom — matches
            automatically, keeping the two blocks on one height at any screen
            size instead of sitting at a fixed 620px with dead space below. */}
        <div className="relative flex flex-1 flex-col">
          {/* ——— Navy copy panel ——— */}
          <div className="relative z-10 flex w-full flex-col lg:w-[70%] lg:flex-1 overflow-hidden rounded-tl-[44px] rounded-tr-[44px] lg:rounded-tr-none lg:rounded-tl-[70px] shadow-cover">
            {/* Navy fill. On lg its right edge is cut on a diagonal so the
                photo reads as a triangular wedge meeting the panel. */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-lighter lg:[clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]"
              aria-hidden="true"
            />
            {/* Decorative rings, clipped by the panel */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.9 }}
              className="absolute w-[450px] h-[450px] rounded-full border-[70px] border-white/[0.035] -right-[220px] -bottom-[220px] pointer-events-none animate-spin-slow [animation-duration:80s]"
              aria-hidden="true"
            />
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="show"
              transition={{ delay: 1 }}
              className="absolute w-[180px] h-[180px] rounded-full bg-white/[0.035] -top-16 -left-14 pointer-events-none"
              aria-hidden="true"
            />

            {/* Accent line, flush with the panel's base. It lives inside the
                panel so it stays welded to that edge at every breakpoint. */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 1.2, ease: "easeOut" }}
              style={{ originX: 0 }}
              className="absolute bottom-0 left-0 z-20 h-[13px] w-full bg-green-2"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pt-[120px] pb-12 sm:px-10 sm:pt-[132px] sm:pb-14 lg:pt-[150px] lg:pb-[76px] xl:px-[72px]">
              <motion.div
                initial="hidden"
                animate="show"
                transition={{ staggerChildren: 0.07 }}>
                {/* Eyebrow */}
                <motion.p
                  variants={fadeUp}
                  className="text-[12px] font-extrabold uppercase tracking-[0.23em] text-green-2">
                  Nigeria&apos;s Full-Stack Digital Studio
                </motion.p>

                {/* Headline — fixed three-line composition. Each step is sized so
                    the longest line ("Build Your Business") still fits on one
                    line at the width the panel actually has at that breakpoint. */}
                <motion.h1
                  variants={fadeUp}
                  className="mt-4 text-[25px] sm:text-[42px] md:text-[50px] lg:text-[46px] xl:text-[54px] 2xl:text-[64px] font-black leading-[0.98] tracking-[-0.03em] text-white">
                  <span className="block">Build Your Business</span>
                  <span className="block text-green-2">Digitally &amp;</span>
                  <span className="block text-green-2">Legally</span>
                </motion.h1>

                {/* Supporting copy */}
                <motion.p
                  variants={fadeUp}
                  className="mt-7 max-w-[480px] text-[16px] leading-[1.7] text-white/85">
                  Custom software, professional websites, and business
                  incorporation — led by a practising lawyer who codes.
                </motion.p>

                {/* CTA row */}
                <motion.div
                  variants={fadeUp}
                  className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={WHATSAPP}
                    onClick={() =>
                      trackWhatsAppClick("Hero CTA - Explore More")
                    }
                    className="btn-gradient-green group">
                    Explore More
                    <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <Link
                    href="/services"
                    className="inline-flex items-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:scale-[1.03] active:scale-[0.98]">
                    View All Services
                  </Link>
                </motion.div>

                {/* Trust markers */}
                <motion.div
                  variants={fadeUp}
                  className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[11.5px] font-medium text-white/60">
                  {trustMarkers.map((t) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-green-2 flex-shrink-0" />
                      {t}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* ——— Photo: below the panel on mobile; on desktop it bleeds behind
                the navy panel so the clip-path diagonal reads as a wedge. The
                stat badge and call card float inside the photo at every
                breakpoint, right-aligned and sized to their content. ——— */}
          <div className="relative h-[340px] sm:h-[420px] lg:absolute lg:inset-0 lg:h-auto overflow-hidden rounded-bl-[44px] rounded-br-[44px] lg:rounded-tl-[70px] lg:rounded-tr-[70px]">
            <motion.img
              src="/image/hero-studio.jpg"
              alt="JurisTech team working on client software and website projects"
              width={1600}
              height={1067}
              loading="eager"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-[1.05]"
            />
            {/* Navy wash so the photo sits inside the panel's colour world */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy/45 via-navy/20 to-navy/10" />

            {/* Skewed stat badge */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.85 }}
              className="absolute bottom-8 right-4 z-20 w-fit sm:bottom-12 sm:right-6 lg:bottom-[250px] lg:right-6">
              <div className="animate-float [animation-duration:7s]">
                <div className="-skew-x-[15deg] flex items-center gap-3 bg-navy-deep px-5 py-4 shadow-pop sm:gap-4 sm:px-6">
                  <div className="skew-x-[15deg] text-[26px] font-black leading-none text-green-2 sm:text-[30px]">
                    2,000+
                  </div>
                  <div className="skew-x-[15deg] text-[10px] font-semibold leading-[1.4] text-white/80 sm:text-[11px]">
                    <strong className="text-green-2">Clients</strong> served
                    <br />
                    across Nigeria
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call card — glassy navy card so the phone stays classy and legible
                over the photo. */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              transition={{ delay: 1 }}
              className="absolute right-4 bottom-[122px] z-20 w-fit sm:right-6 sm:bottom-[144px] lg:bottom-[145px]">
              <a
                href={`tel:${PHONE}`}
                className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-navy-deep/80 px-5 py-3.5 shadow-cover backdrop-blur-md transition-all duration-300 hover:border-green-2/40 hover:shadow-pop sm:gap-4 animate-float-gentle">
                <span className="text-right">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-green-2">
                    Call For More Info
                  </span>
                  <strong className="block mt-1 text-[20px] tracking-[0.05em] text-white">
                    {PHONE}
                  </strong>
                </span>
                <span className="w-[46px] h-[46px] rounded-full bg-green-2 grid place-items-center text-navy transition-all duration-300 group-hover:scale-110 group-hover:rotate-[8deg]">
                  <PhoneIcon className="w-[19px] h-[19px]" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* ——— Decorative skewed bars above the photo ——— */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 1.15 }}
            className="hidden lg:block absolute -top-[18px] right-[300px] w-8 h-[82px] skew-x-[-25deg] rounded-[5px] bg-green-2"
            aria-hidden="true"
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 1.3 }}
            className="hidden lg:block absolute -top-[18px] right-[266px] w-8 h-[82px] skew-x-[-25deg] rounded-[5px] bg-navy"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
