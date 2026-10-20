import { StarIcon } from "@heroicons/react/24/solid";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/homeData";

function TestimonialCard({ t }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8 transition-colors duration-300 hover:border-green-2/30 hover:bg-green-2/10">
      <span className="text-5xl leading-none font-black text-green-2">”</span>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy/80">
        {t.quote}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg font-bold text-green-2">
          {t.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-extrabold text-navy">{t.name}</p>
          <p className="text-xs text-muted">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-surface">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Client stories"
            title="More than 2,000"
            highlight="success stories"
            description="Real entrepreneurs across Nigeria and beyond trusted JurisTech with their business setup."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i} className="h-full">
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 flex items-center justify-center gap-2 text-sm font-semibold text-navy">
            <span className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((n) => (
                <StarIcon key={n} className="h-4 w-4 text-green-2" />
              ))}
            </span>
            4.9/5 from 500+ verified reviews
          </p>
        </Reveal>
      </div>
    </section>
  );
}