import { motion } from 'framer-motion';
import { CheckCircle2, Link2 } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

export default function ShareLinkCard({ link, copied }) {
  return (
    <GlassCard className="p-5">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-button-gradient shadow-cyan">
            {copied ? <CheckCircle2 className="h-5 w-5 text-white" /> : <Link2 className="h-5 w-5 text-white" />}
          </div>
          <div>
            <p className="text-sm font-medium text-white">Share link</p>
            <p className="text-sm text-gray-400">Send this URL instantly to teammates or clients.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-gray-200">
          {link}
        </div>
      </motion.div>
    </GlassCard>
  );
}
