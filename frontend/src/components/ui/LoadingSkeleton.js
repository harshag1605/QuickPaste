export default function LoadingSkeleton({ className = '' }) {
  return (
    <div
      className={`animate-pulse rounded-2xl border border-slate-200 bg-slate-200/50 ${className}`}
      aria-hidden="true"
    />
  );
}
