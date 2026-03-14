"use client";

export default function MarqueeBar() {
  const testimonials = [
    "⭐ Chidinma — Lagos",
    "⭐ Emeka — London",
    "⭐ Tunde — Abuja",
    "⭐ Ngozi — Houston",
    "⭐ Segun — Lagos",
    "⭐ Adaeze — Toronto",
    "⭐ Ibrahim — Kano",
    "⭐ Folake — Port Harcourt",
    "⭐ Chidi — Owerri",
    "⭐ Grace — Benin City",
    "⭐ Marcus — Kaduna",
    "⭐ Sandra — UK",
  ];

  return (
    <div className="bg-[#0A1628] py-4 overflow-hidden border-y border-[#C9972B]/10">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...testimonials, ...testimonials].map((item, index) => (
          <span key={index} className="text-[#9CA3AF] mx-8 text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}