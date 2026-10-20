import Link from "next/link";

const variants = {
  volt: "bg-green-2 text-navy hover:bg-navy hover:text-green-2",
  dark: "bg-navy text-white hover:bg-white hover:text-navy",
  light: "bg-white text-navy hover:bg-green-2 hover:text-navy",
  outline: "border border-white/40 text-white hover:border-green-2 hover:text-green-2",
};

const sizes = {
  sm: "px-6 py-2.5 text-[11px]",
  md: "px-8 py-3.5 text-xs",
};

export default function Button({
  href,
  children,
  variant = "volt",
  size = "md",
  className = "",
  external = false,
  onClick,
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={cls}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onClick} className={cls}>
      {children}
    </Link>
  );
}