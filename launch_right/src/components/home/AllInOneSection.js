import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { StripeCircle } from "@/components/ui/Decor";
import { allInOne } from "@/lib/homeData";

export default function AllInOneSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container-wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-green-2 px-6 py-12 sm:px-12 sm:py-16">
            <StripeCircle className="absolute -right-10 -top-10 h-48 w-48 opacity-60" />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-navy/70">
                  All-in-one
                </p>
                <h2 className="mt-3 text-3xl font-extrabold uppercase leading-[1.1] tracking-tight text-navy sm:text-4xl lg:text-5xl">
                  Everything your business needs, under one roof.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/85">
                  From custom software and professional websites to CAC registration and legal
                  documents, JurisTech handles the full stack so you can focus on running your
                  business.
                </p>
                <Button href="/services" variant="dark" className="mt-8">
                  Explore all services <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>

              <ul className="grid gap-4">
                {allInOne.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-white px-6 py-5 shadow-card border border-white/40"
                  >
                    <span className="font-black text-2xl text-green-2/60">
                      0{i + 1}
                    </span>
                    <span className="text-lg font-bold text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}