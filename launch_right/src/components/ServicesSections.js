/**
 * components/ServicesSections.jsx
 * Three responsive sections modelled on the reference design:
 *   <ServicesSection/>  – heading + paragraph, notched feature cards
 *   <AboutSection/>     – photo collage + copy + stat cards
 *   <AllInOneSection/>  – closing navy panel
 * Server components. Needs Tailwind + next/link + next/image.
 *
 * Add the JurisTech palette to Tailwind
 *
 * Tailwind v3 (tailwind.config.js) -> theme.extend.colors:
 *   navy:  "#071d4f",
 *   brand: "#0758f7",
 *   leaf:  "#16a66a",
 *   mint:  "#c8f1de",
 *   mist:  "#f4f7fc",
 *   sky:   "#e4eeff",
 *
 * Tailwind v4 (globals.css):
 *   @theme {
 *     --color-navy:#071d4f; --color-brand:#0758f7; --color-leaf:#16a66a;
 *     --color-mint:#c8f1de; --color-mist:#f4f7fc;  --color-sky:#e4eeff;
 *   }
 */
import Link from "next/link";
import Image from "next/image";
import { about, allInOne, services, servicesIntro } from "@/content/services";

/* ------------------------------ tiny pieces ------------------------------ */

function Pill({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${
        dark ? "bg-white/10 text-white" : "bg-navy/[0.06] text-navy"
      }`}>
      <svg aria-hidden viewBox="0 0 20 20" className="h-3 w-3 fill-current">
        <path d="M10 1l2.2 5.6L18 7.3l-4.4 3.9L15 17l-5-3-5 3 1.4-5.8L2 7.3l5.8-.7z" />
      </svg>
      {children}
    </span>
  );
}

function Chevron({ className = "h-3.5 w-3.5" }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M7 4l6 6-6 6" />
    </svg>
  );
}

function DoubleChevron() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 4l6 6-6 6M10 4l6 6-6 6" />
    </svg>
  );
}

const ICONS = {
  software: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M9.5 9.5L7.5 11l2 1.5M14.5 9.5l2 1.5-2 1.5M12.8 8.8l-1.6 4.4M8 21h8M12 17v4" />
    </>
  ),
  website: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3.2 3.2 3.2 14.8 0 18M12 3c-3.2 3.2-3.2 14.8 0 18" />
    </>
  ),
  cac: (
    <>
      <path d="M4 21V9l8-5.5L20 9v12M2 21h20M9.5 21v-5h5v5M9 11.5h.01M15 11.5h.01" />
    </>
  ),
  legal: (
    <>
      <path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 006 0L5 7zM19 7l-3 7a3 3 0 006 0l-3-7z" />
    </>
  ),
};

function Icon({ name }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round">
      {ICONS[name]}
    </svg>
  );
}

/* --------------------------- 1. services section --------------------------- */

const SERVICE_TONES = {
  light: {
    card: "bg-white text-navy",
    icon: "text-green-dark",
    body: "text-ink-soft",
    details: "text-navy/55",
    ring: "border-green-2/25 bg-green-2/[0.04]",
    button:
      "bg-green-2 text-navy hover:bg-navy hover:text-white",
  },
  mint: {
    card: "bg-green-2 text-navy",
    icon: "text-navy",
    body: "text-navy/75",
    details: "text-navy/60",
    ring: "border-white/35 bg-white/[0.08]",
    button:
      "bg-navy text-white hover:bg-white hover:text-navy",
  },
  navy: {
    card: "bg-navy text-white",
    icon: "text-green-2",
    body: "text-white/75",
    details: "text-white/55",
    ring: "border-white/25 bg-white/[0.06]",
    button:
      "bg-white text-navy hover:bg-green-2",
  },
  sky: {
    card: "bg-blue-soft text-navy",
    icon: "text-blue",
    body: "text-navy/70",
    details: "text-navy/55",
    ring: "border-blue/20 bg-blue/[0.04]",
    button:
      "bg-blue text-white hover:bg-navy",
  },
};

const SERVICE_CTA_NOTCH =
  "absolute bottom-0 left-0 rounded-tr-[28px] bg-[var(--notch)] pb-2 pr-3 pt-3 " +
  "after:absolute after:bottom-0 after:left-full after:h-7 after:w-7 after:content-[''] " +
  "after:bg-[radial-gradient(circle_at_100%_0,transparent_27px,var(--notch)_28px)]";

function ServiceCard({ s }) {
  const tone = SERVICE_TONES[s.tone] ?? SERVICE_TONES.light;

  return (
    <article
      className={`group relative flex min-h-[320px] flex-col overflow-hidden rounded-3xl p-6 pb-20 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none sm:p-7 sm:pb-20 ${tone.card}`}>
      <div className="relative z-10 flex flex-1 flex-col">
        <div className="flex items-center justify-between">
          <span
            className={`${tone.icon} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
            <Icon name={s.icon} />
          </span>
          <span className="font-mono text-xs font-bold tracking-wide opacity-45">
            {s.num}
          </span>
        </div>

        <h3 className="mt-8 text-xl font-bold leading-tight tracking-tight">
          {s.title}
        </h3>
        <p className={`mt-3 text-sm leading-relaxed ${tone.body}`}>
          {s.description}
        </p>
        <p
          className={`mt-3 text-[11px] font-semibold leading-relaxed ${tone.details}`}>
          {s.points.join(" · ")}
        </p>
      </div>
      <div className={`${SERVICE_CTA_NOTCH} z-10 transition-shadow duration-500 ease-out group-hover:shadow-[0_10px_24px_rgba(7,29,79,0.18)] motion-reduce:transition-none`}>
        <Link
          href={s.cta.href}
          className={`group/cta inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${tone.button}`}>
          Explore More
          <Chevron className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-1" />
        </Link>
      </div>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-6 -right-3 z-0 h-24 w-24 rounded-full border-[14px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-125 group-hover:rotate-12 motion-reduce:transition-none ${tone.ring}`}
      />
    </article>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-surface py-20 [--notch:var(--color-surface)] sm:py-24 lg:py-28">
      <div className="container-wide">
        <div className="grid items-end gap-5 lg:grid-cols-[1.2fr,0.8fr] lg:gap-16">
          <div>
            <p className="eyebrow-label">{servicesIntro.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl">
              {servicesIntro.headingLead}{" "}
              <span className="highlight">{servicesIntro.headingAccent}</span>
            </h2>
          </div>
          <p className="max-w-xl pb-1 text-base leading-relaxed text-ink-soft lg:justify-self-end">
            {servicesIntro.text}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:mt-12 xl:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.num} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- 2. about section ----------------------------- */

export function AboutSection() {
  const { images, team, delivery, satisfaction, skills } = about;
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* collage */}
        <div className="grid grid-cols-[1fr_2fr] gap-3 sm:gap-4">
          <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={images.main.src}
              alt={images.main.alt}
              fill
              sizes="(min-width:1024px) 600px, 100vw"
              className="object-cover"
              priority={false}
            />
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-mint p-4 text-center text-navy">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-white">
              <svg
                aria-hidden
                viewBox="0 0 20 20"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 10.5l3.2 3.2L15 7" />
              </svg>
            </span>
            <p className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              {delivery.value}%
            </p>
            <p className="mt-1 text-xs font-medium leading-snug text-navy/70 sm:text-sm">
              {delivery.label}
            </p>
          </div>

          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl sm:aspect-auto sm:min-h-[200px]">
            <Image
              src={images.secondary.src}
              alt={images.secondary.alt}
              fill
              sizes="(min-width:1024px) 400px, 70vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* copy */}
        <div>
          <Pill>{about.eyebrow}</Pill>
          <h2 className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight text-navy sm:text-[2.6rem]">
            {about.heading}
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-navy/65">
            {about.text}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href={about.cta.href}
              className="group inline-flex items-center rounded-full border-2 border-leaf bg-leaf p-1 transition-colors hover:border-navy hover:bg-navy">
              <span className="rounded-full bg-white px-5 py-2 text-sm font-medium text-navy">
                {about.cta.label}
              </span>
              <span className="px-3 text-white">
                <DoubleChevron />
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {team.avatars.map((a, i) => (
                  <span
                    key={i}
                    className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-navy text-xs font-medium text-white">
                    {a}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-navy">{team.title}</p>
                <p className="text-xs text-navy/55">{team.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex min-h-[170px] flex-col justify-between rounded-2xl bg-mist p-6">
              <div>
                <p className="text-5xl font-medium tracking-tight text-navy">
                  {satisfaction.value}
                  <span className="text-xl text-navy/50"> %</span>
                </p>
                <div
                  role="progressbar"
                  aria-label={satisfaction.label}
                  aria-valuenow={satisfaction.value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="mt-4 h-1.5 overflow-hidden rounded-full bg-navy/10">
                  <div
                    className="h-full rounded-full bg-leaf"
                    style={{ width: `${satisfaction.value}%` }}
                  />
                </div>
              </div>
              <p className="mt-5 text-sm font-medium text-navy">
                {satisfaction.label}
              </p>
            </div>

            <div className="flex min-h-[170px] flex-col rounded-2xl bg-mist p-6">
              <p className="text-base font-medium text-navy">{skills.title}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skills.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-navy/15 bg-white/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-navy/75">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- 3. all-in-one panel ---------------------------- */

export function AllInOneSection() {
  return (
    <section className="bg-surface px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
      <div className="container-wide">
        <div className="relative grid gap-10 overflow-hidden rounded-[2rem] bg-navy p-7 shadow-cover sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-14">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[48px] border-white/[0.04]"
          />
          <div className="relative">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-green-2">
              {allInOne.eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {allInOne.heading}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
              {allInOne.text}
            </p>
            <Link
              href={allInOne.cta.href}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-green-2 px-6 py-3 text-sm font-bold text-navy transition-all hover:-translate-y-0.5 hover:bg-white">
              {allInOne.cta.label}
              <DoubleChevron />
            </Link>
          </div>

          <ol className="relative grid gap-3">
            {allInOne.list.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 transition-colors hover:border-green-2/40 hover:bg-white/[0.09]">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-green-2/15 font-mono text-xs font-bold text-green-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-semibold text-white sm:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
