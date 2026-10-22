"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  pricingPlans,
  specialPackages,
  regularPackages,
  addons,
} from "@/data/pricingData";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const WHATSAPP = "https://wa.me/message/KTFL2G2JM3JTP1";

const supportingServices = [
  {
    icon: ScaleIcon,
    title: "Business registration",
    description:
      "CAC business name, limited company, NGO, and diaspora incorporation options.",
    href: "#standalone",
  },
  {
    icon: DocumentTextIcon,
    title: "Legal documents",
    description:
      "Agreements, compliance support, and practical legal foundations for your business.",
    href: "/services",
  },
  {
    icon: GlobeAltIcon,
    title: "Websites",
    description:
      "Professional websites, from a focused one-page launch to a full online store.",
    href: "/website",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Software and apps",
    description:
      "Custom systems and applications tailored to your business workflow.",
    href: "/software",
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

function Price({ amount, originalAmount, dark = false, large = false }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span
        className={`font-black tracking-tight ${large ? "text-4xl sm:text-5xl" : "text-3xl"} ${dark ? "text-white" : "text-navy"}`}
      >
        {amount}
      </span>
      {originalAmount && (
        <span
          className={`text-sm line-through ${dark ? "text-white/45" : "text-muted"}`}
        >
          {originalAmount}
        </span>
      )}
    </div>
  );
}

function FeatureList({ features, dark = false, compact = false }) {
  return (
    <ul className={compact ? "space-y-2.5" : "space-y-3"}>
      {features.map((feature) => (
        <li
          key={feature}
          className={`flex items-start gap-2.5 text-sm leading-relaxed ${dark ? "text-white/75" : "text-ink-soft"}`}
        >
          <span
            className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${dark ? "bg-green-2/15" : "bg-green-2/15"}`}
          >
            <CheckIcon
              className={`h-3.5 w-3.5 ${dark ? "text-green-2" : "text-green-dark"}`}
            />
          </span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

function Timeline({ children, dark = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${dark ? "bg-white/10 text-white/70" : "bg-surface text-muted"}`}
    >
      <ClockIcon className="h-4 w-4 text-green-2" />
      {children}
    </div>
  );
}

function PremiumPackageCard({ plan, index }) {
  const featured = Boolean(plan.popular);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 shadow-card transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${
        featured
          ? "border-navy bg-navy text-white shadow-cover lg:scale-[1.03]"
          : "border-line bg-white"
      }`}
    >
      {featured && (
        <span className="absolute right-5 top-5 rounded-full border border-green-2/30 bg-green-2/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-green-2">
          Most popular
        </span>
      )}
      <p
        className={`pr-24 text-xs font-bold uppercase tracking-[0.16em] ${featured ? "text-white/55" : "text-muted"}`}
      >
        {plan.tagline}
      </p>
      <h3
        className={`mt-3 text-xl font-extrabold tracking-tight sm:text-2xl ${featured ? "text-white" : "text-navy"}`}
      >
        {plan.name}
      </h3>
      <p
        className={`mt-2 min-h-[3rem] text-sm leading-relaxed ${featured ? "text-white/65" : "text-muted"}`}
      >
        {plan.subtitle}
      </p>
      <div className="mt-6">
        <Price
          amount={plan.price}
          originalAmount={plan.originalPrice}
          large
          dark={featured}
        />
      </div>
      <div className="mt-4">
        <Timeline dark={featured}>{plan.timeline}</Timeline>
      </div>
      <div
        className={`my-6 h-px ${featured ? "bg-white/10" : "bg-line-soft"}`}
      />
      <div className="flex-1">
        <FeatureList features={plan.features} dark={featured} compact />
      </div>
      <a
        href={WHATSAPP}
        className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
          featured
            ? "bg-green-2 text-navy hover:bg-white"
            : "bg-navy text-white hover:bg-green-2 hover:text-navy"
        }`}
      >
        Get started
        <ArrowRightIcon className="h-4 w-4" />
      </a>
      {plan.highlight && (
        <p
          className={`mt-4 text-center text-xs leading-relaxed ${featured ? "text-white/50" : "text-muted"}`}
        >
          {plan.highlight}
        </p>
      )}
    </motion.article>
  );
}

function DetailPackageCard({ plan, index, compact = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-card sm:p-7"
    >
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-dark">
        {plan.subtitle || "Standalone registration"}
      </p>
      <h3 className="mt-3 text-xl font-extrabold tracking-tight text-navy">
        {plan.name}
      </h3>
      <div className="mt-5">
        <Price amount={plan.price} originalAmount={plan.originalPrice} />
      </div>
      <div className="mt-4">
        <Timeline>{plan.timeline}</Timeline>
      </div>
      <div className="my-5 h-px bg-line-soft" />
      <div className="flex-1">
        <FeatureList features={plan.features} compact />
      </div>
      {plan.note && (
        <p className="mt-4 rounded-xl bg-surface p-3 text-xs leading-relaxed text-muted">
          {plan.note}
        </p>
      )}
      {plan.highlight && !compact && (
        <p className="mt-4 text-xs leading-relaxed text-muted">
          {plan.highlight}
        </p>
      )}
      <a
        href={WHATSAPP}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-2 hover:text-navy"
      >
        Get started
        <ArrowRightIcon className="h-4 w-4" />
      </a>
    </motion.article>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />

      <section className="relative overflow-hidden bg-navy text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-lighter"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-36 right-[20%] h-[28rem] w-[28rem] rounded-full border-[70px] border-white/[0.035]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-green-2/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-wide relative grid items-center gap-10 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:min-h-[600px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-24 lg:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-2xl"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-green-2">
              Pricing and packages
            </p>
            <h1 className="mt-5 text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build your business.
              <br />
              <span className="text-green-2">Know what it costs.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Clear packages for CAC registration, websites, legal documents,
              and business support—with standalone options and no hidden fees.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#premium-packages"
                className="group inline-flex items-center gap-2 rounded-full bg-green-2 px-6 py-3 text-sm font-bold text-navy shadow-pop transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Compare packages
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={WHATSAPP}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-green-2 hover:bg-white/5"
              >
                Ask a question
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/60">
              {["Lawyer-led", "CAC-accredited", "One accountable team"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-2" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto h-[350px] w-full max-w-[530px] sm:h-[440px] lg:h-[490px]"
          >
            <div className="absolute inset-x-8 top-0 h-[92%] overflow-hidden rounded-t-[10rem] rounded-b-[2rem] border border-white/10 sm:inset-x-12">
              <img
                src="/image/my-image.png"
                alt="JurisTech founder Lukman Asinmi"
                className="h-full w-full object-cover object-[center_15%]"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/5 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 z-10 rounded-2xl border border-white/10 bg-navy-deep/90 px-5 py-4 shadow-pop backdrop-blur sm:left-2">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-2">
                Straightforward pricing
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Clear scope. Clear timelines.
              </p>
            </div>
            <div
              className="absolute right-0 top-10 hidden h-20 w-20 rotate-12 rounded-2xl border-2 border-green-2/40 sm:block"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </section>

      <section
        aria-label="Pricing highlights"
        className="border-b border-line bg-white"
      >
        <div className="container-wide grid grid-cols-2 gap-4 py-7 sm:grid-cols-4 sm:gap-6 sm:py-9">
          {[
            "CAC registration",
            "Legal documents",
            "Websites and software",
            "No hidden fees",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 text-center text-xs font-bold text-navy sm:text-sm"
            >
              <CheckIcon className="h-5 w-5 shrink-0 text-green-2" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-green-pale">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="max-w-xl">
            <span className="eyebrow-label">Everything under one roof</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
              One team for your legal and digital foundations.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Choose a complete package or start with the service you need
              today. We&apos;ll make the scope, timeline, and next steps clear
              before work begins.
            </p>
            <Link
              href="#premium-packages"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-2 hover:text-navy"
            >
              See package options
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {supportingServices.map(({ icon: Icon, title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex items-start gap-4 rounded-2xl border border-white bg-white/80 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card sm:p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green-soft text-green-dark transition-colors group-hover:bg-green-2 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-extrabold text-navy">
                    {title}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted">
                    {description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="premium-packages"
        className="section-pad scroll-mt-20 bg-white"
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="Premium packages"
            title="Simple, transparent pricing"
            description="Complete registration packages with websites, legal documents, and support. Choose the level that fits your next step."
          />
          <div className="grid items-stretch gap-5 md:grid-cols-3 lg:gap-6">
            {pricingPlans.map((plan, index) => (
              <PremiumPackageCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
          <p className="mt-8 text-center text-xs leading-relaxed text-muted">
            Package scope and timelines are subject to required information,
            CAC processing, and any applicable third-party fees.
          </p>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-wide">
          <SectionHeading
            eyebrow="A complete business foundation"
            title="More than a registration"
            description="We combine legal, compliance, and digital services to help you launch professionally and keep moving forward."
          />
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-card sm:p-6">
              <img
                src="/image/website_laptop_mockup.png"
                alt="Example of a responsive business website"
                className="w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-8 left-8 rounded-xl bg-navy px-4 py-3 text-white shadow-pop sm:bottom-10 sm:left-10">
                <p className="text-xs font-bold uppercase tracking-wider text-green-2">
                  Legal + digital
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Built around your business
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {supportingServices.map(({ icon: Icon, title, description, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-sm transition-all hover:border-green-2/40 hover:shadow-card sm:p-5"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-green-soft text-green-dark transition-colors group-hover:bg-green-2 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-extrabold text-navy">
                      {title}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted">
                      {description}
                    </span>
                  </span>
                  <ArrowRightIcon className="h-5 w-5 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-green-dark" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Special packages"
            title="Support tailored to your organisation"
            description="Dedicated packages for incorporated trustees, NGOs, diaspora founders, and eligible foreign investors."
          />
          <div className="mx-auto grid max-w-5xl items-stretch gap-5 md:grid-cols-2">
            {specialPackages.map((plan, index) => (
              <DetailPackageCard
                key={plan.name}
                plan={plan}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="standalone"
        className="section-pad scroll-mt-20 bg-green-pale"
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="Standalone registrations"
            title="Start with the service you need"
            description="Transparent options for business name, limited company, and incorporated trustees registrations."
          />
          <div className="grid items-stretch gap-5 lg:grid-cols-3">
            {regularPackages.map((plan, index) => (
              <DetailPackageCard
                key={plan.name}
                plan={plan}
                index={index}
                compact
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-5xl rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8">
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow-label">Add-ons</span>
                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                  Add the services you need
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                Mix and match optional services to create the right scope for
                your business.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {addons.map((addon) => (
                <div
                  key={addon.name}
                  className="flex min-h-16 items-center justify-between gap-3 rounded-xl border border-line-soft bg-white px-4 py-3"
                >
                  <span className="text-sm font-medium leading-snug text-ink-soft">
                    {addon.name}
                  </span>
                  <span className="whitespace-nowrap text-sm font-extrabold text-navy">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
        <div
          className="pointer-events-none absolute -right-16 -top-32 h-80 w-80 rounded-full border-[50px] border-white/[0.04]"
          aria-hidden="true"
        />
        <div className="container-wide relative text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-green-2">
            Need a tailored option?
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Let&apos;s find the right package for your business.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
            Tell us what you&apos;re building. We&apos;ll help you understand
            the scope, costs, and next steps before you commit.
          </p>
          <a
            href={WHATSAPP}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-green-2 px-7 py-3.5 text-sm font-extrabold text-navy shadow-pop transition-all hover:-translate-y-0.5 hover:bg-white"
          >
            Chat with us for a quote
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
