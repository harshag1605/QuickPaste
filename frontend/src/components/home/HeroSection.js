import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, PlayCircle } from 'lucide-react';
import { heroCode } from '../../data/mockPaste';
import useTypingText from '../../hooks/useTypingText';
import GradientLink from '../ui/GradientLink';
import GlassCard from '../ui/GlassCard';

const metrics = ['1-click publishing', 'Secure private links', 'Beautiful reading views'];

export default function HeroSection() {
  const typedCode = useTypingText(heroCode);

  return (
    <section className="section-shell flex min-h-[calc(100vh-5rem)] items-center py-16">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="hero-chip">
            <PlayCircle className="h-4 w-4 text-secondary" />
            Premium sharing for thoughts, notes, and code
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Share Anything <span className="text-gradient">Instantly</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
              Create and share paragraphs, notes, drafts, and code with one click. Quick Paste
              delivers a sleek, startup-grade experience for private sharing and fast publishing.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <GradientLink to="/create" className="w-full sm:w-auto">
              Create Post
              <ArrowRight className="h-4 w-4" />
            </GradientLink>
            <GradientLink to="/paste/qs-93lx2" variant="ghost" className="w-full sm:w-auto">
              View Example
            </GradientLink>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-gray-300">
            {metrics.map((metric) => (
              <div
                key={metric}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
              >
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                {metric}
              </div>
            ))}
          </div>
        </motion.div>

        <GlassCard className="overflow-hidden p-0">
          <div className="border-b border-white/10 px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">launch-note.txt</p>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Live typing demo</p>
              </div>
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400/90" />
                <span className="h-3 w-3 rounded-full bg-amber-300/90" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
              </div>
            </div>
          </div>

          <div className="relative min-h-[360px] bg-[#0A0F1B] p-6">
            <div className="absolute inset-0 bg-card-gradient opacity-40" />
            <pre className="scrollbar-hidden relative z-10 overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-gray-200">
              <code>{typedCode}<span className="animate-pulse text-secondary">|</span></code>
            </pre>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
