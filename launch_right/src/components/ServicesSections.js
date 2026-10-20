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
      className="h-11 w-11"
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

const TONES = {
  light: {
    card: "bg-white text-navy",
    icon: "text-leaf",
    num: "text-navy/25",
    body: "text-navy/60",
    tag: "border-navy/15 text-navy/70",
    btn: "bg-white text-navy hover:bg-navy hover:text-white",
  },
  mint: {
    card: "bg-mint text-navy",
    icon: "text-navy",
    num: "text-navy/30",
    body: "text-navy/65",
    tag: "border-navy/20 text-navy/75",
    btn: "bg-mint text-navy hover:bg-navy hover:text-white",
  },
  navy: {
    card: "bg-navy text-white",
    icon: "text-[#4fd49a]",
    num: "text-white/25",
    body: "text-white/65",
    tag: "border-white/25 text-white/80",
    btn: "bg-navy text-white hover:bg-leaf",
  },
  sky: {
    card: "bg-sky text-navy",
    icon: "text-brand",
    num: "text-navy/25",
    body: "text-navy/60",
    tag: "border-navy/15 text-navy/70",
    btn: "bg-sky text-navy hover:bg-navy hover:text-white",
  },
};

/* The cream notch holding the button. --notch must equal the section background. */
const NOTCH =
  "absolute bottom-0 left-0 rounded-tr-[28px] bg-[var(--notch)] pb-2 pr-3 pt-3 " +
  "after:absolute after:bottom-0 after:left-full after:h-7 after:w-7 after:content-[''] " +
  "after:bg-[radial-gradient(circle_at_100%_0,transparent_27px,var(--notch)_28px)]";

function ServiceCard({ s }) {
  const t = TONES[s.tone] ?? TONES.light;
  return (
    <article
      className={`relative flex min-h-[440px] flex-col overflow-hidden rounded-[28px] p-7 pb-24 sm:p-8 sm:pb-24 ${t.card}`}>
      {s.tone === "mint" && (
        <>
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full border border-navy/10"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-12 h-40 w-40 rounded-full bg-leaf/20"
          />
        </>
      )}

      <div className="flex items-start justify-between">
        <span className={t.icon}>
          <Icon name={s.icon} />
        </span>
        <span className={`text-sm font-medium tabular-nums ${t.num}`}>
          {s.num}
        </span>
      </div>

      <h3 className="mt-12 text-[1.6rem] font-medium leading-[1.15] tracking-tight">
        {s.title}
      </h3>
      <p className={`mt-3 text-[15px] leading-relaxed ${t.body}`}>
        {s.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {s.points.map((p) => (
          <li
            key={p}
            className={`rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wide ${t.tag}`}>
            {p}
          </li>
        ))}
      </ul>

      <div className={NOTCH}>
        <Link
          href={s.cta.href}
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${t.btn}`}>
          {s.cta.label}
          <Chevron />
        </Link>
      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-mist py-16 [--notch:#f4f7fc] sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <Pill>{servicesIntro.eyebrow}</Pill>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1.1] tracking-tight text-navy sm:text-[2.6rem]">
              {servicesIntro.heading}
            </h2>
          </div>
          <p className="max-w-md pb-1 text-[15px] leading-relaxed text-navy/65">
            {servicesIntro.text}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
    <section className="bg-mist px-4 pb-16 pt-4 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[28px] bg-navy p-7 sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-16">
        <div>
          <Pill dark>{allInOne.eyebrow}</Pill>
          <h2 className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-[2.6rem]">
            {allInOne.heading}
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/65">
            {allInOne.text}
          </p>
          <Link
            href={allInOne.cta.href}
            className="group mt-8 inline-flex items-center rounded-full bg-leaf p-1 transition-colors hover:bg-white">
            <span className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-navy">
              {allInOne.cta.label}
            </span>
            <span className="px-3 text-white group-hover:text-navy">
              <DoubleChevron />
            </span>
          </Link>
        </div>

        <ol className="grid gap-3">
          {allInOne.list.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4">
              <span className="text-sm font-medium tabular-nums text-[#4fd49a]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-medium text-white">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
