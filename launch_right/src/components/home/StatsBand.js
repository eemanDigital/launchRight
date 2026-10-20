import Reveal from "@/components/ui/Reveal";
import { stats } from "@/lib/homeData";

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy py-14 text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-green-2/10 blur-3xl" />
      <div className="container-wide relative">
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.08 * i}>
              <div className={`px-4 text-center ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-4xl font-extrabold tracking-tight text-green-2 sm:text-5xl">
                  {stat.value}
                </dd>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
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