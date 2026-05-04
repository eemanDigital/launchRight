"use client";

export default function MarqueeBar() {
  const stats = [
    "2,000+ clients served",
    "CAC Registration Experts",
    "Website Development",
    "Legal Compliance Support",
    "Professional Legal Documents",
    "Trusted by entrepreneurs",
    "Lawyer + Developer + CAC Agent",
  ];

  return (
    <div className="bg-surface-dark py-5 overflow-hidden border-b border-gray-100/80">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...stats, ...stats, ...stats].map((item, index) => (
          <span key={index} className="text-muted mx-10 text-sm font-medium flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
