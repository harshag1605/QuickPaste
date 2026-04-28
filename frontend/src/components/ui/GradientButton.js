import { motion } from 'framer-motion';

export default function GradientButton({
  children,
  className = '',
  variant = 'primary',
  type = 'button',
  ...props
}) {
  const variantClass =
    variant === 'ghost'
      ? 'border border-slate-200 bg-white/90 text-slate-900 hover:border-cyan-400/40 hover:bg-slate-100'
      : 'bg-button-gradient text-white shadow-glow';

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold transition duration-300 ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
