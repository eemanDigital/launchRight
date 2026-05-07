"use client";

export default function MarqueeBar() {
  const items = [
    "2,000+ Businesses Registered",
    "CAC Accredited Agent",
    "Legal Compliance Experts",
    "Professional Websites",
    "Custom Software Solutions",
    "Document Generation",
    "Trusted Across Nigeria",
  ];

  return (
    <div className="relative bg-navy-deep border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-transparent to-navy-deep z-10 pointer-events-none" />
      
      <div className="py-4 animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={index} className="text-white/40 mx-8 text-sm font-medium flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-gold/60 rounded-full flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}