export default function HexIcon({ className = "h-9 w-9" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`text-green-2 ${className}`}
      aria-hidden="true"
      fill="currentColor"
    >
      <path
        d="M20 3.5 34.5 12v16L20 36.5 5.5 28V12z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
        transform="rotate(14 20 20)"
      />
    </svg>
  );
}