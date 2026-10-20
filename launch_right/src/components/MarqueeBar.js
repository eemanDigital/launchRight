"use client";

const items = [
  "Custom Software & Apps",
  "Professional Websites",
  "Business Incorporation",
  "Legal Documents",
  "CAC Registration",
  "Compliance Support",
];

function Asterisk({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true">
      <path d="M12 1.5c.55 5.6 4.35 9.4 9.95 9.95-5.6.55-9.4 4.35-9.95 9.95-.55-5.6-4.35-9.4-9.95-9.95C7.65 10.9 11.45 7.1 12 1.5Z" />
      <path
        d="M18.72 15.6c.25 2.55 1.98 4.28 4.53 4.53-2.55.25-4.28 1.98-4.53 4.53-.25-2.55-1.98-4.28-4.53-4.53 2.55-.25 4.28-1.98 4.53-4.53Z"
        opacity="0.55"
      />
    </svg>
  );
}

export default function MarqueeBar() {
  const loop = [...items, ...items];

  return (
    <div className="relative bg-white border-y border-border overflow-hidden">
      <div className="marquee-fade relative overflow-hidden">
        <div
          role="marquee"
          aria-label="Services we offer"
          className="animate-marquee flex w-max whitespace-nowrap h-[60px] items-center">
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-5 pr-5 text-[15px] font-semibold text-navy tracking-[-0.01em]">
              {item}
              <Asterisk className="w-3 h-3 flex-shrink-0 text-green-2" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}