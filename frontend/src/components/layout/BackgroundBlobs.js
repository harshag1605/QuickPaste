import { motion } from 'framer-motion';

const blobs = [
  'left-[-10%] top-[-8%] h-72 w-72 bg-primary/30',
  'right-[-6%] top-[18%] h-64 w-64 bg-secondary/25',
  'bottom-[-8%] left-[18%] h-80 w-80 bg-fuchsia-500/20',
];

export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid bg-[size:52px_52px] opacity-[0.05]" />
      {blobs.map((className, index) => (
        <motion.div
          key={className}
          className={`absolute rounded-full blur-3xl ${className}`}
          animate={{
            x: [0, index % 2 === 0 ? 35 : -25, 0],
            y: [0, index % 2 === 0 ? -20 : 28, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14 + index * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
