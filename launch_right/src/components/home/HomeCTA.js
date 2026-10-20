import { MapPinIcon, PhoneIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { DotGrid, StripeCircle } from "@/components/ui/Decor";
import { site } from "@/lib/homeData";

export default function HomeCTA() {
  return (
    <section className="py-16 sm:pb-24 bg-white">
      <div className="container-wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center text-white sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-green-2/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48">
              <StripeCircle className="h-full w-full opacity-70" />
            </div>
            <DotGrid className="absolute left-8 top-8 hidden h-20 w-20 opacity-50 sm:block" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-green-2">
                Trusted by 2,000+ entrepreneurs
              </p>
              <h2 className="mt-3 text-3xl font-extrabold uppercase leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
                Ready to <span className="highlight">build</span> your business?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                Get a free name availability check and a consultation with our team today. No
                upfront fees, no pressure — just a clear plan for your business.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Button href={site.whatsapp} external>
                  Start Your Project
                </Button>
                <Button href="/contact" variant="outline">
                  Get a Quote
                </Button>
              </div>

              <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-green-2" />
                  {site.address}
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-green-2" />
                  {site.phone}
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-5 w-5 text-green-2" />
                  CAC-Accredited Agent
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}