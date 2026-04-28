export default function LoadingSkeleton({ className = '' }) {
  return (
    <div
      className={`animate-pulse rounded-2xl border border-white/5 bg-white/[0.04] ${className}`}
      aria-hidden="true"
    />
  );
}
