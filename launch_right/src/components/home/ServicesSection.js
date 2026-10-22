import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { DotGrid } from "@/components/ui/Decor";
import { services } from "@/lib/homeData";

function ServiceCard({ s, n }) {
  const Icon = s.icon;
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-green-2/30 hover:shadow-pop">
      <div className="flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white shadow-[5px_5px_0_0_var(--color-green-2)] transition-colors duration-300 group-hover:bg-green-2 group-hover:text-navy">
          <Icon className="h-7 w-7" strokeWidth={1.5} />
        </span>
        <span className="font-mono text-5xl font-bold leading-none text-navy/10">
          {n}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-extrabold tracking-tight text-navy">
        {s.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        {s.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {s.items.map((item) => (
          <li
            key={item}
            className="rounded-full bg-surface px-3 py-1 text-[11px] font-semibold text-navy"
          >
            {item}
          </li>
        ))}
      </ul>

      <Link
        href={s.href}
        className="mt-auto inline-flex items-center gap-1 pt-5 text-xs font-bold uppercase tracking-wide text-navy transition-colors hover:text-green-2"
      >
        <span className="highlight">{s.cta}</span>
        <ArrowUpRightIcon className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}

function GrowthCard() {
  const bars = [
    { label: "Client Satisfaction", value: 98 },
    { label: "On-Time Delivery", value: 95 },
  ];
  return (
    <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-card">
      <h3 className="text-lg font-extrabold leading-snug tracking-tight text-navy">
        We Deliver <span className="highlight">Flawless Business Growth</span>
      </h3>
      <div className="mt-5 space-y-4 text-xs text-ink-soft">
        {bars.map((bar) => (
          <div key={bar.label}>
            <div className="mb-1.5 flex items-center justify-between font-semibold text-navy">
              <span>{bar.label}</span>
              <span>{bar.value}%</span>
            </div>
            <div className="h-2 rounded-full bg-surface">
              <div
                className="h-2 rounded-full bg-green-2"
                style={{ width: `${bar.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-auto pt-5 text-[11px] leading-relaxed text-muted">
        From CAC approval to launch day — measured on the outcomes that matter
        to your business.
      </p>
    </article>
  );
}

function TeamCard() {
  const members = ["LA", "DV", "WB", "LG"];
  return (
    <article className="flex h-full flex-col items-center justify-center rounded-3xl bg-navy p-6 text-center text-white shadow-card">
      <p className="text-lg font-extrabold tracking-tight">Lawyer-Led Team</p>
      <p className="mt-1 text-xs text-white/60">
        Legal · Digital — all under one roof
      </p>
      <div className="mt-5 flex items-center justify-center -space-x-2">
        {members.map((m) => (
          <span
            key={m}
            className="grid h-9 w-9 place-items-center rounded-full border-2 border-navy bg-navy-lighter text-[10px] font-bold text-green-2"
          >
            {m}
          </span>
        ))}
        <Link
          href="/about"
          aria-label="Meet the team"
          className="grid h-9 w-9 place-items-center rounded-full border-2 border-navy bg-green-2 text-navy transition-transform hover:scale-110"
        >
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad relative bg-surface overflow-hidden">
      <DotGrid className="absolute -top-4 right-8 hidden h-20 w-20 lg:block opacity-60" />
      <div className="container-wide relative">
        <Reveal>
          <SectionHeading
            eyebrow="What we build"
            title="Everything your business needs to"
            highlight="launch & grow"
            description="Four services, one accountable team — custom software, professional websites, CAC incorporation, and lawyer-drafted legal documents. No juggling agencies, no missed deadlines."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={0.05 * i} className="h-full">
              <ServiceCard s={s} n={`0${i + 1}`} />
            </Reveal>
          ))}
          <Reveal delay={0.25} className="h-full">
            <GrowthCard />
          </Reveal>
          <Reveal delay={0.3} className="h-full">
            <TeamCard />
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <Button href="/services">View All Services</Button>
        </Reveal>
      </div>
    </section>
  );
}
