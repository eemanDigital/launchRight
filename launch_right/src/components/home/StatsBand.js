import Reveal from "@/components/ui/Reveal";
import { stats } from "@/lib/homeData";

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy py-12 text-white sm:py-14">
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-green-2/10 blur-3xl" />
      <div className="container-wide relative">
        <dl className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.08 * i}>
              <div className={`px-4 text-center ${i > 0 ? "lg:border-l lg:border-white/15" : ""}`}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-extrabold tracking-tight text-green-2 sm:text-4xl lg:text-[2.75rem]">
                  {stat.value}
                </dd>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/65 sm:text-[11px]">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}