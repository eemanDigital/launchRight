"use client";

import Link from "next/link";
import {
  ScaleIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import Reveal from "@/components/ui/Reveal";

function ProgressBar({ label, value }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-navy">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-surface">
        <div
          className="h-2 rounded-full bg-green-2 transition-[width]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function AboutPreviewSection() {
  return (
    <section id="about" className="section-pad relative bg-white overflow-hidden">
      <div className="container-wide relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative h-[28rem] sm:h-[34rem] max-w-md mx-auto lg:mx-0 w-full">
            <img
              src="/images/about/team-african.jpg"
              alt="JurisTech team collaborating in Abuja"
              className="absolute top-0 left-0 w-32 h-32 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-white shadow-lg z-20"
            />
            <img
              src="/images/about/meeting-african.jpg"
              alt="Business team meeting"
              className="absolute top-6 left-16 sm:left-20 w-[72%] h-[24rem] sm:h-[30rem] rounded-2xl object-cover object-[center_20%] shadow-lg z-10"
            />
            <img
              src="/images/about/celebration-african.jpg"
              alt="Celebrating business success"
              className="absolute bottom-6 right-0 w-40 h-40 sm:w-44 sm:h-44 rounded-2xl object-cover border-4 border-white shadow-xl z-20"
            />

            <div className="absolute bottom-0 left-0 z-20 flex w-56 items-center gap-4 rounded-2xl bg-blue-2 px-5 py-4 text-white shadow-pop">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-white text-blue-2">
                <TrophyIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-2xl font-extrabold leading-none">25+</p>
                <p className="mt-1 text-xs">Years Of Experience</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow-label">About JurisTech</span>
              <h2 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-4xl lg:text-5xl">
                We Build Competitive <span className="highlight">Business Sectors</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft max-w-xl">
                JurisTech is Nigeria's full-service digital studio led by a practising lawyer who codes. We combine legal expertise, CAC accreditation, and in-house engineering to help entrepreneurs and SMEs launch, comply, and scale — all under one roof.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-col gap-4">
              <Reveal delay={0.05}>
                <div className="flex items-start gap-4 rounded-3xl border border-line bg-white p-5 shadow-card">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-green-2/15 text-green-2">
                    <ScaleIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="text-base font-extrabold tracking-tight text-navy">Company Values</h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      Integrity, accuracy, and accountability. Every registration, website, and document meets the standard we'd put our own name on.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex items-start gap-4 rounded-3xl border border-line bg-white p-5 shadow-card">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-green-2/15 text-green-2">
                    <ShieldCheckIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="text-base font-extrabold tracking-tight text-navy">Company Mission</h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      To make business launch and growth simple for Nigerian entrepreneurs by delivering compliant CAC registrations, lawyer-drafted legal docs, custom software, and conversion-focused websites — one team, one price, no handoffs.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <Reveal delay={0.15} className="flex items-center gap-3">
                <img
                  src="/images/about/founder.jpg"
                  alt="Lukman Asinmi, Founder & Managing Director"
                  className="h-14 w-14 rounded-full object-cover object-[center_25%] ring-2 ring-green-2/30"
                />
                <div>
                  <p className="text-sm font-extrabold tracking-tight text-navy">Lukman Asinmi</p>
                  <p className="text-xs text-muted">Founder & Managing Director · Lawyer | CAC Agent | Developer</p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-green-2 px-6 py-2.5 text-sm font-bold text-navy shadow-pop transition-all hover:-translate-y-0.5 hover:shadow-cover"
                >
                  More About Us
                </Link>
              </Reveal>
            </div>

            <Reveal delay={0.25} className="mt-8">
              <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1 space-y-4">
                    <ProgressBar label="Client Satisfaction" value={98} />
                    <ProgressBar label="On-Time Delivery" value={95} />
                  </div>
                  <div className="flex flex-col items-center gap-3 text-center">
                    <p className="text-sm font-extrabold tracking-tight text-navy">Creative Team</p>
                    <div className="flex items-center justify-center -space-x-2">
                      {["LA", "KS", "AM", "FD"].map((initial) => (
                        <span
                          key={initial}
                          className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-navy text-[10px] font-bold text-green-2"
                        >
                          {initial}
                        </span>
                      ))}
                      <Link
                        href="/about"
                        className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-green-2 text-navy transition-transform hover:scale-110"
                        aria-label="Meet the team"
                      >
                        <CheckCircleIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
