import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
      className={`mx-auto flex max-w-2xl flex-col gap-4 ${alignment}`}
    >
      <span className="hero-chip">{eyebrow}</span>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="text-base leading-7 text-gray-300 sm:text-lg">{description}</p>
      </div>
    </motion.div>
  );
}
