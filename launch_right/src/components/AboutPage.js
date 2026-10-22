"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRightIcon,
  BuildingOfficeIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  ScaleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const credentials = [
  { icon: ScaleIcon, text: "Called to the Nigerian Bar" },
  { icon: ShieldCheckIcon, text: "CAC-accredited agent" },
  { icon: CodeBracketIcon, text: "MERN stack developer" },
  { icon: CheckBadgeIcon, text: "NBA member" },
];

const principles = [
  {
    icon: ScaleIcon,
    title: "Legal foundations",
    description:
      "Sound legal guidance and compliant documentation help businesses start with clarity and operate with confidence.",
    color: "bg-green-soft",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Practical technology",
    description:
      "Websites, software, and digital tools should solve real business problems and make everyday work simpler.",
    color: "bg-blue-soft",
  },
  {
    icon: BuildingOfficeIcon,
    title: "Growth that lasts",
    description:
      "We bring legal, compliance, and technology support together so businesses can move forward without unnecessary handoffs.",
    color: "bg-mist",
  },
];

const currentBuilds = [
  {
    name: "JurisTech",
    description: "Legal-tech business services platform",
    status: "Live",
    statusColor: "border-green-2/30 bg-green-2/10 text-green-dark",
    image: "/image/juristech-cover-page.png",
    href: "/",
  },
  {
    name: "VendPadi",
    description: "WhatsApp storefront for Nigerian merchants",
    status: "Beta",
    statusColor: "border-blue-2/30 bg-blue-2/10 text-blue",
    image: "/image/product-vendpadi.svg",
    href: "/products#vendpadi",
  },
  {
    name: "case-master-app",
    description: "Law firm management software",
    status: "In development",
    statusColor: "border-blue-2/30 bg-blue-2/10 text-blue",
    image: "/image/product-casemaster.svg",
    href: "/products#case-master",
  },
];

const services = [
  {
    icon: BuildingOfficeIcon,
    name: "CAC registration",
    description: "Business names, limited companies, and NGOs.",
    color: "bg-green-soft",
  },
  {
    icon: ScaleIcon,
    name: "Legal documents",
    description: "Contracts, agreements, and compliance support.",
    color: "bg-blue-soft",
  },
  {
    icon: CodeBracketIcon,
    name: "Website development",
    description: "Professional websites, from landing pages to e-commerce.",
    color: "bg-green-pale",
  },
  {
    icon: ComputerDesktopIcon,
    name: "Custom software",
    description: "Purpose-built SaaS, mobile, and business systems.",
    color: "bg-mist",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="eyebrow-label">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <section className="relative overflow-hidden bg-green-pale">
        <div
          className="pointer-events-none absolute -right-20 top-12 h-72 w-72 rounded-full border-[42px] border-green-2/10 sm:h-96 sm:w-96"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-16 left-0 h-40 w-40 rounded-full bg-blue-2/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-wide relative grid items-center gap-10 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:min-h-[600px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-24 lg:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-2xl"
          >
            <p className="eyebrow-label">Meet the founder</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.04] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Legal insight.
              <br />
              <span className="text-green-2">Digital thinking.</span>
              <br />
              Business built better.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              I&apos;m Lukman Asinmi, a Nigerian lawyer, CAC-accredited agent,
              and software developer. I built JurisTech to bring the legal and
              digital support businesses need together in one place.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#our-story"
                className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white shadow-pop transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-light"
              >
                Get to know us
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-sm font-bold text-navy transition-colors hover:border-green-2 hover:bg-white"
              >
                Work with us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto h-[360px] w-full max-w-[530px] sm:h-[440px] lg:h-[500px]"
          >
            <div className="absolute inset-x-8 top-0 h-[88%] overflow-hidden rounded-t-[10rem] rounded-b-[2rem] border-[6px] border-white shadow-cover sm:inset-x-12">
              <img
                src="/image/my-image.png"
                alt="Lukman Asinmi, founder of JurisTech"
                className="h-full w-full object-cover object-[center_15%]"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 z-10 flex items-center gap-3 rounded-2xl bg-navy px-5 py-4 text-white shadow-pop sm:left-2">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-green-2 text-navy">
                <CheckBadgeIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-extrabold">Law + tech</p>
                <p className="text-xs text-white/70">One accountable team</p>
              </div>
            </div>
            <div
              className="absolute right-0 top-12 hidden h-20 w-20 rotate-12 rounded-2xl border-2 border-green-2/40 sm:block"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </section>

      <section aria-label="Founder qualifications" className="border-b border-line bg-white">
        <div className="container-wide grid grid-cols-2 gap-4 py-7 sm:grid-cols-4 sm:gap-6 sm:py-9">
          {credentials.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center justify-center gap-2 text-center text-xs font-bold text-navy sm:text-sm"
            >
              <Icon className="h-5 w-5 shrink-0 text-green-2" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="our-story" className="section-pad bg-white">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our story"
            title={
              <>
                One vision, built at the intersection of{" "}
                <span className="text-green-dark">law and technology</span>
              </>
            }
            description="JurisTech exists to make it easier for Nigerian businesses to get the right foundations and tools to move forward."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="grid overflow-hidden rounded-[2rem] bg-green-pale shadow-card md:grid-cols-2"
          >
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-green-dark">
                Why JurisTech began
              </p>
              <h3 className="mt-4 text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
                Businesses shouldn&apos;t have to piece together the support
                they need.
              </h3>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                <p>
                  In legal practice, I kept meeting entrepreneurs who needed
                  more than documents. They also needed CAC registration,
                  compliance support, and a professional digital presence.
                </p>
                <p>
                  Coordinating different providers made the process harder and
                  more expensive. So I became a CAC-accredited agent and
                  learned to build software, bringing those capabilities
                  together under one roof.
                </p>
                <p>
                  Today, JurisTech combines legal practice, business
                  incorporation, and technology to help businesses launch,
                  operate, and grow with confidence.
                </p>
              </div>
              <Link
                href="/services"
                className="group mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:text-green-dark"
              >
                Explore what we do
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative min-h-[300px] sm:min-h-[380px]">
              <img
                src="/images/about/meeting-african.jpg"
                alt="Business team working together around a table"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-pop backdrop-blur sm:bottom-7 sm:left-7">
                <span className="text-2xl font-black text-green-dark">2,000+</span>
                <span className="max-w-24 text-xs font-semibold leading-snug text-navy">
                  businesses served
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What guides us"
            title="We make business foundations work together"
            description="Our approach connects the essentials, so entrepreneurs can focus on building what comes next."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, description, color }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`relative flex min-h-[280px] flex-col overflow-hidden rounded-3xl p-7 sm:p-8 ${color}`}
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-navy shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold tracking-tight text-navy">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {description}
                </p>
                <div
                  className="pointer-events-none absolute -bottom-8 -right-6 h-28 w-28 rounded-full border-[18px] border-white/40"
                  aria-hidden="true"
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative min-h-[340px] sm:min-h-[440px]"
            >
              <img
                src="/images/about/team-african.jpg"
                alt="JurisTech colleagues collaborating on business solutions"
                className="absolute inset-0 h-full w-full rounded-[2rem] object-cover shadow-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-5 right-4 rounded-2xl border border-white/20 bg-navy px-5 py-4 text-white shadow-pop sm:right-8">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-2">
                  Built on accountability
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Every detail has our name on it.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="eyebrow-label">A personal commitment</span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                Your business deserves a team that sees the whole picture.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                When you work with JurisTech, you work with me directly. My
                name is on every document we produce, my accreditation number
                is on every CAC filing, and my code powers the systems we
                build. I personally stand behind the work we deliver.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "One team across law, compliance, and technology",
                  "Practical solutions shaped around your business",
                  "Personal accountability from start to delivery",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-green-2" />
                    <p className="text-sm font-semibold text-navy">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-green-2 px-6 py-3 text-sm font-bold text-navy shadow-pop transition-all hover:-translate-y-0.5 hover:bg-green-dark hover:text-white"
                >
                  Talk to our team
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/tools/document-generator"
                  className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-bold text-navy transition-colors hover:border-green-2 hover:bg-green-pale"
                >
                  Try our free tools
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What we're building"
            title="Technology for real business needs"
            description="Alongside our client services, we develop practical products for Nigerian businesses and professionals."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {currentBuilds.map((build, index) => (
              <motion.article
                key={build.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Link
                  href={build.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-green-2/40 hover:shadow-pop"
                >
                  <div className="relative aspect-[1.65] overflow-hidden bg-green-pale">
                    <img
                      src={build.image}
                      alt={`${build.name} project preview`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <span
                      className={`absolute left-4 top-4 rounded-full border bg-white/95 px-3 py-1.5 text-[11px] font-bold shadow-sm backdrop-blur ${build.statusColor}`}
                    >
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current" />
                      {build.status}
                    </span>
                    <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-navy shadow-pop transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-green-2">
                      <ArrowRightIcon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-green-dark">
                      JurisTech product
                    </p>
                    <h3 className="mt-2 text-xl font-extrabold tracking-tight text-navy">
                      {build.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {build.description}
                    </p>
                    <span className="mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-green-pale px-4 py-2.5 text-sm font-bold text-navy transition-all duration-300 group-hover:gap-4 group-hover:bg-green-2">
                      View project
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <SectionHeading
            eyebrow="How we help"
            title="Everything you need to move forward"
            description="From getting established to building your digital operations, JurisTech brings core business services together."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, name, description, color }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/services"
                  className={`group relative flex min-h-[280px] h-full flex-col overflow-hidden rounded-3xl p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-pop sm:p-8 ${color}`}
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-green-dark shadow-sm transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105 group-hover:bg-green-2 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold tracking-tight text-navy">
                    {name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                    {description}
                  </p>
                  <span className="mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-navy shadow-sm transition-all duration-300 group-hover:gap-4 group-hover:shadow-pop">
                    Explore service
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-green-2 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </span>
                  <span
                    className="pointer-events-none absolute -bottom-8 -right-6 h-28 w-28 rounded-full border-[18px] border-white/40 transition-transform duration-500 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
