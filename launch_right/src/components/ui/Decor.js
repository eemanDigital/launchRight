export function DotGrid({ className = "" }) {
  return <div aria-hidden="true" className={`dot-grid pointer-events-none ${className}`} />;
}

export function StripeCircle({ className = "" }) {
  return <div aria-hidden="true" className={`stripe-circle pointer-events-none ${className}`} />;
}