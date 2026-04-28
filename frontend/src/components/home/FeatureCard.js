import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, TimerReset, Zap } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const iconMap = {
  'Instant Sharing': Zap,
  'Secure Links': ShieldCheck,
  'Syntax Highlighting': Sparkles,
  'Expiry Control': TimerReset,
};

export default function FeatureCard({ feature, index }) {
  const Icon = iconMap[feature.title] || Sparkles;

  return (
    <GlassCard className="group p-6" delay={index * 0.08}>
      <motion.div
        whileHover={{ rotate: 6 }}
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-button-gradient shadow-cyan"
      >
        <Icon className="h-6 w-6 text-white" />
      </motion.div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
        <p className="leading-7 text-gray-300">{feature.description}</p>
      </div>
    </GlassCard>
  );
}
