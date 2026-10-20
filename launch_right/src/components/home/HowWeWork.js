import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { DotGrid } from "@/components/ui/Decor";
import { steps } from "@/lib/homeData";

function StepCard({ step }) {
  return (
    <article className="relative rounded-3xl border border-line bg-white p-8 text-center shadow-card">
      <span className="hex mx-auto flex h-24 w-24 items-center justify-center bg-green-2 text-navy">
        <span className="text-3xl font-black">{step.n}</span>
      </span>
      <h3 className="mt-6 text-xl font-extrabold text-navy tracking-tight">{step.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.text}</p>
      <ul className="mt-6 flex flex-wrap justify-center gap-2">
        {step.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-surface px-3 py-1 text-[11px] font-semibold text-navy"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function HowWeWork() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-surface overflow-hidden">
      <div className="container-wide relative">
        <DotGrid className="absolute -left-4 top-24 hidden h-24 w-24 opacity-50 lg:block" />
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="From idea to"
            highlight="launch"
            description="Three simple steps. We take the legal and technical burden off your shoulders."
          />
        </Reveal>

        <div className="relative mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-[3.75rem] hidden border-t-2 border-dashed border-green-2 lg:block" />
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={0.1 * i} className="relative">
              <StepCard step={step} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}