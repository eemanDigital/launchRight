import Image from "next/image";

export default function Photo({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}) {
  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}