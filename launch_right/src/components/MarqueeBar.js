"use client";

export default function MarqueeBar() {
  const stats = [
    "2,000+ businesses registered",
    "98% first-time approval rate",
    "4.9/5 average rating",
    "24-48 hour business name",
    "Trusted by entrepreneurs",
    "CAC-accredited agents",
  ];

  return (
    <div className="bg-surface-dark py-6 overflow-hidden border-y border-gray-100">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...stats, ...stats, ...stats].map((item, index) => (
          <span key={index} className="text-gray-500 mx-8 text-sm font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
