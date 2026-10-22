import { StarIcon } from "@heroicons/react/24/solid";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/homeData";

function TestimonialCard({ t }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-2/40 hover:shadow-card sm:p-8">
      <div className="flex items-center justify-between">
        <span className="text-4xl font-black leading-none text-green-2" aria-hidden="true">“</span>
        <span className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
          {[0, 1, 2, 3, 4].map((n) => (
            <StarIcon key={n} className="h-3.5 w-3.5 text-green-2" />
          ))}
        </span>
      </div>
      <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink-soft">
        {t.quote}
      </blockquote>
      <figcaption className="mt-7 flex items-center gap-4 border-t border-line-soft pt-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-base font-bold text-green-2">
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
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Client stories"
            title="More than 2,000"
            highlight="success stories"
            description="Real entrepreneurs across Nigeria and beyond trusted JurisTech with their business setup."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i} className="h-full">
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 flex items-center justify-center gap-2 text-sm font-semibold text-navy">
            4.9/5 from 500+ verified reviews
          </p>
        </Reveal>
      </div>
    </section>
  );
}