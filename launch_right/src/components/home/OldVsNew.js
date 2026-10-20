import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { newWay, oldWay, site } from "@/lib/homeData";

export default function OldVsNew() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="The problem & solution"
            title="One team. Legal, digital &"
            highlight="technical"
            description="From fragmented providers to a single accountable partner, handled right the first time."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="h-full rounded-[2rem] bg-surface p-8 sm:p-10 border border-line">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink-soft">
                The old way
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-navy">
                Fragmented providers, hidden costs
              </h3>
              <ul className="mt-8 space-y-4">
                {oldWay.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink-soft">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose">
                      <XMarkIcon className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs font-bold uppercase tracking-wide text-ink-soft">
                Fragmented · Expensive · Stressful
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-navy p-8 text-white sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-green-2/20 blur-3xl" />
              <div className="relative">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-green-2">
                  With JurisTech
                </p>
                <h3 className="mt-2 text-2xl font-extrabold">One partner, end to end</h3>
                <ul className="mt-8 space-y-4">
                  {newWay.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-white/85">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-2 text-navy">
                        <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href={site.whatsapp} external className="mt-8">
                  Start Your Project, Chat With Us
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}