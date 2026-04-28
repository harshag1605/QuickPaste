import { motion } from 'framer-motion';

export default function FieldGroup({ label, hint, children, delay = 0 }) {
  return (
    <motion.label
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="block space-y-3"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-white">{label}</span>
        {hint ? <span className="text-xs text-gray-400">{hint}</span> : null}
      </div>
      {children}
    </motion.label>
  );
}
