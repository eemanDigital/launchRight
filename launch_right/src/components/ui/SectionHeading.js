import HexIcon from "./HexIcon";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  light = false,
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignment}`}>
      <HexIcon className="h-9 w-9" />
      <p
        className={`text-[11px] font-bold uppercase tracking-[0.22em] ${
          light ? "text-green-2" : "text-navy"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-extrabold uppercase leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title} <span className="highlight">{highlight}</span>
      </h2>
      {description && (
        <p
          className={`mt-1 max-w-2xl text-base leading-relaxed ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}