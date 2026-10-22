"use client";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BanknotesIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClockIcon,
  CodeBracketIcon,
  CommandLineIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const serviceCategories = [
  {
    id: "software",
    icon: CodeBracketIcon,
    title: "Custom software & apps",
    description:
      "Purpose-built digital products designed around the way your business works.",
    items: ["Mobile apps", "POS systems", "SaaS platforms", "API integrations"],
    link: "/software",
    accent: "blue",
  },
  {
    id: "web",
    icon: GlobeAltIcon,
    title: "Website development",
    description:
      "Fast, professional websites that make it easier for customers to choose you.",
    items: ["Landing pages", "Business websites", "Online stores", "SEO setup"],
    link: "/website",
    accent: "green",
  },
  {
    id: "cac",
    icon: BuildingOfficeIcon,
    title: "CAC business registration",
    description:
      "Get your business registered correctly, with guidance from accredited agents.",
    items: ["Business names", "Limited companies", "NGOs & trustees", "Post-registration"],
    link: "/pricing",
    accent: "blue",
  },
  {
    id: "legal",
    icon: DocumentCheckIcon,
    title: "Legal documents",
    description:
      "Clear, lawyer-prepared documents shaped around your business and Nigerian law.",
    items: ["Shareholder agreements", "Employment contracts", "Service agreements", "Policies"],
    link: "/tools/document-generator",
    linkText: "Explore document tools",
    accent: "green",
  },
  {
    id: "compliance",
    icon: ShieldCheckIcon,
    title: "Compliance support",
    description:
      "Stay organised with practical help for ongoing filings and regulatory obligations.",
    items: ["Annual returns", "FIRS TIN", "SCUML registration", "Compliance advice"],
    link: "/contact",
    accent: "blue",
  },
  {
    id: "products",
    icon: CommandLineIcon,
    title: "Legal-tech products",
    description:
      "Useful tools built to make everyday business and legal workflows simpler.",
    items: ["VendPadi storefront", "Case management", "Document generator"],
    link: "/products",
    linkText: "View our products",
    accent: "green",
  },
];

const serviceAccent = {
  blue: {
    icon: "bg-blue-soft text-blue",
    arrow: "bg-blue text-white group-hover:bg-navy",
    dot: "bg-blue",
  },
  green: {
    icon: "bg-green-soft text-green-dark",
    arrow: "bg-green-2 text-navy group-hover:bg-navy group-hover:text-white",
    dot: "bg-green-dark",
  },
};

const reasons = [
  {
    image: "/images/services/business-consulting.jpg",
    imageAlt: "Business owners discussing a plan together",
    icon: BuildingOfficeIcon,
    title: "Everything under one roof",
    description:
      "Bring legal, registration, and digital specialists together around one business goal.",
  },
  {
    image: "/images/services/team-collaboration.jpg",
    imageAlt: "Colleagues working together in a technology team",
    icon: ShieldCheckIcon,
    title: "Experience you can trust",
    description:
      "Get practical guidance, lawyer-reviewed documents, and software built by our in-house team.",
  },
  {
    image: "/images/services/growth-planning.jpg",
    imageAlt: "A team mapping out a business growth plan",
    icon: GlobeAltIcon,
    title: "Support that grows with you",
    description:
      "Start with what you need now, then add the legal and digital support for what comes next.",
  },
];

const additionalServices = serviceCategories.slice(4);

const guarantees = [
  "Lawyer-reviewed deliverables",
  "In-house engineering",
  "Transparent pricing",
  "Dedicated project coordination",
  "Post-launch support",
  "Clear progress updates",
];

const serviceStats = [
  {
    label: "Registration timelines",
    value: "24–48 hours*",
    detail: "Business Name applications",
    icon: ClockIcon,
    accent: "text-blue",
    ring: "border-blue/25 bg-blue-soft",
  },
  {
    label: "Project scope",
    value: "Clear from day one",
    detail: "A plan before work begins",
    icon: BanknotesIcon,
    accent: "text-green-dark",
    ring: "border-green-2/25 bg-green-soft",
  },
  {
    label: "Client support",
    value: "Here when you need us",
    detail: "Guidance beyond handover",
    icon: ChatBubbleLeftRightIcon,
    accent: "text-blue",
    ring: "border-blue/25 bg-blue-soft",
  },
];

function ServiceCard({ category, index }) {
  const accent = serviceAccent[category.accent];
  const Icon = category.icon;

  return (
    <motion.article
      id={category.id}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group flex min-h-[220px] flex-col rounded-2xl border border-line bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-2/25 hover:shadow-card sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="hex grid h-14 w-14 place-items-center bg-line-soft p-0.5">
          <span className={`hex grid h-full w-full place-items-center ${accent.icon}`}>
            <Icon className="h-6 w-6" strokeWidth={1.7} />
          </span>
        </span>
        <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-muted-light">
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-extrabold leading-tight tracking-tight text-navy">
        {category.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        {category.description}
      </p>
      <p className="mt-3 text-[10px] font-semibold leading-relaxed text-muted">
        {category.items.join(" · ")}
      </p>
      <Link
        href={category.link}
        aria-label={`${category.linkText || "Explore"}: ${category.title}`}
        className="mt-auto inline-flex w-fit items-center gap-3 pt-5 text-xs font-bold text-navy"
      >
        <span className={`grid h-8 w-8 place-items-center rounded-full transition-all duration-300 group-hover:scale-110 ${accent.arrow}`}>
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
        {category.linkText || "Explore service"}
      </Link>
    </motion.article>
  );
}

function ServiceOverview() {
  return (
    <section
      id="our-services"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full border-[36px] border-blue-soft/70" />
      <div className="container-wide relative">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div className="relative grid gap-4 sm:grid-cols-2 lg:gap-5">
            <span aria-hidden="true" className="pointer-events-none absolute -left-6 -top-8 hidden h-40 w-24 rounded-full border border-green-2/20 sm:block" />
            {serviceCategories.slice(0, 4).map((category, index) => (
              <ServiceCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:pl-2"
          >
            <p className="eyebrow-label">Our services</p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-[1.08] tracking-tight text-navy sm:text-4xl">
              Business support
              <br />
              that moves you forward.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Build your business with legal, regulatory, and technical
              expertise working together. From registration and essential
              documents to websites and custom software, we make it easier to
              take the next step with confidence.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Clear guidance from first conversation to delivery",
                "Solutions tailored to Nigerian businesses",
                "One accountable team, fewer handoffs",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-medium text-navy/80"
                >
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-green-dark" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                Additional ways we can help
              </p>
              {additionalServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.id}
                    id={service.id}
                    href={service.link}
                    className="group flex items-center gap-3 rounded-xl border border-line bg-surface/80 p-3 transition-colors hover:border-green-2/50 hover:bg-green-pale"
                  >
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${serviceAccent[service.accent].icon}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-navy">{service.title}</span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-ink-soft">{service.description}</span>
                      <span className="mt-1 block text-[10px] font-semibold leading-relaxed text-muted">{service.items.join(" · ")}</span>
                    </span>
                    <ArrowRightIcon className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-green-dark" />
                  </Link>
                );
              })}
            </div>
            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-green-2 px-6 py-3 text-xs font-bold uppercase tracking-wide text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy hover:text-white"
            >
              Get started
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-[11px] leading-relaxed text-muted">
              *Business Name turnaround is subject to complete documents and
              CAC processing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(var(--color-line)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="container-wide relative">
        <motion.header
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="eyebrow-label justify-center">What we offer</p>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-navy sm:text-4xl">
            Why you should choose us
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            Clear advice, connected expertise, and dependable delivery at every
            stage of your business journey.
          </p>
        </motion.header>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.article
                key={reason.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative h-52 overflow-hidden sm:h-60">
                  <img
                    src={reason.image}
                    alt={reason.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/45 to-transparent" />
                </div>
                <div className="relative px-6 pb-6 pt-9">
                  <span className="absolute -top-7 left-6 grid h-14 w-14 place-items-center rounded-full border-4 border-white bg-green-2 text-navy shadow-card">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="text-lg font-extrabold tracking-tight text-navy">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {reason.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicePromise() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-wide">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-navy p-7 text-white shadow-cover sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[48px] border-white/[0.04]" />
          <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-green-2">
                Our promise
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Good work.
                <br />
                Clear communication.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                Know what happens next, who is handling it, and how your
                project is progressing.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {guarantees.map((guarantee) => (
                <li
                  key={guarantee}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-semibold text-white/90"
                >
                  <CheckCircleIcon className="h-5 w-5 shrink-0 text-green-2" />
                  {guarantee}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {serviceStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.article
                key={stat.label}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-line bg-white p-6 text-center shadow-sm"
              >
                <span
                  className={`mx-auto grid h-12 w-12 place-items-center rounded-xl border ${stat.ring} ${stat.accent}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
                  {stat.label}
                </p>
                <p className="mt-1 text-lg font-extrabold tracking-tight text-navy">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-ink-soft">{stat.detail}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <ServiceOverview />
      <WhyChooseUs />
      <ServicePromise />
    </>
  );
}
