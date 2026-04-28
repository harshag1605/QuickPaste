import { features } from '../../data/mockPaste';
import FeatureCard from './FeatureCard';
import SectionHeading from '../ui/SectionHeading';

export default function FeaturesSection() {
  return (
    <section className="section-shell py-24">
      <SectionHeading
        eyebrow="Core features"
        title="Built like a premium SaaS experience"
        description="Every interaction is tuned for speed, clarity, and visual polish, from publishing flows to secure sharing."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}
