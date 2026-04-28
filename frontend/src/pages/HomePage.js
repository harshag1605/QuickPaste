import { motion } from 'framer-motion';
import PageShell from '../components/layout/PageShell';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import GlassCard from '../components/ui/GlassCard';

const stats = [
  { label: 'Posts shared', value: '120K+' },
  { label: 'Teams onboarded', value: '4.8K' },
  { label: 'Avg. share time', value: '<1 sec' },
];

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />

      <section className="section-shell pb-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {stats.map((item, index) => (
            <GlassCard key={item.label} className="p-6" delay={index * 0.05}>
              <p className="text-3xl font-semibold text-slate-900">{item.value}</p>
              <p className="mt-2 text-slate-600">{item.label}</p>
            </GlassCard>
          ))}
        </motion.div>
      </section>

      <FeaturesSection />
    </PageShell>
  );
}
