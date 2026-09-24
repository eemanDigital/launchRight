"use client";

const items = [
  "2,000+ Clients Served",
  "Custom Software & Apps",
  "Professional Websites",
  "Business Incorporation",
  "Legal Documents",
  "CAC Accredited Agent",
  "Trusted Across Nigeria",
];

export default function MarqueeBar() {
  return (
    <div className="relative bg-navy-deep border-y border-white/10 overflow-hidden">
      {/* hairline gradients */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-2/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-2/40 to-transparent" />

      {/* soft orb glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-blue-2/10 blur-3xl pointer-events-none" />

      <div className="animate-marquee flex whitespace-nowrap py-4 relative">
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-9 text-sm font-semibold text-white/55 flex items-center gap-3.5">
            <span
              className={`w-2.5 h-2.5 rounded-full ring-2 ring-offset-0 ${
                index % 2 === 0
                  ? "bg-green-2 shadow-[0_0_12px_rgba(30,200,127,0.7)] ring-green-2/20"
                  : "bg-blue-2 shadow-[0_0_12px_rgba(45,124,255,0.7)] ring-blue-2/20"
              }`}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}