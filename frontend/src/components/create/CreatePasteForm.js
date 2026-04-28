import { motion } from 'framer-motion';
import { LockKeyhole, Sparkles } from 'lucide-react';
import FieldGroup from './FieldGroup';
import GlassCard from '../ui/GlassCard';
import GradientButton from '../ui/GradientButton';

const contentTypes = ['General Note', 'Announcement', 'Paragraph', 'Meeting Notes', 'Code Snippet'];
const expiryOptions = ['1 hour', '24 hours', '7 days', '30 days', 'Never'];

export default function CreatePasteForm({ formData, setFormData, onSubmit, isLoading }) {
  const updateField = (key) => (event) => {
    setFormData((current) => ({ ...current, [key]: event.target.value }));
  };

  return (
    <GlassCard className="p-6 sm:p-8">
      <div className="mb-8 space-y-4">
        <span className="hero-chip">
          <Sparkles className="h-4 w-4 text-secondary" />
          New post
        </span>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Create a polished, secure share
        </h1>
        <p className="text-slate-600"> 
          Configure metadata, privacy, and content type while your live preview updates in real
          time.
        </p>
      </div>

      <form className="space-y-6" onSubmit={onSubmit}>
        <FieldGroup label="Title" hint="Visible to recipients" delay={0.05}>
          <input
            className="glass-input"
            placeholder="e.g. Weekly reflection"
            value={formData.title}
            onChange={updateField('title')}
          />
        </FieldGroup>

        <div className="grid gap-6 md:grid-cols-2">
          <FieldGroup label="Content type" delay={0.1}>
            <select
              className="glass-input"
              value={formData.language}
              onChange={updateField('language')}
            >
              {contentTypes.map((type) => (
                <option key={type} value={type} className="bg-white text-slate-900">
                  {type}
                </option>
              ))}
            </select>
          </FieldGroup>

          <FieldGroup label="Expiry" delay={0.15}>
            <select className="glass-input" value={formData.expiry} onChange={updateField('expiry')}>
              {expiryOptions.map((option) => (
                <option key={option} value={option} className="bg-white text-slate-900">
                  {option}
                </option>
              ))}
            </select>
          </FieldGroup>
        </div>

        <FieldGroup label="Password" hint="Optional access gate" delay={0.2}>
          <div className="relative">
            <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              type="password"
              className="glass-input pl-11"
              placeholder="Protect this post"
              value={formData.password}
              onChange={updateField('password')}
            />
          </div>
        </FieldGroup>

        <FieldGroup label="Content" hint="Paragraphs, notes, or code" delay={0.25}>
          <textarea
            className="glass-input min-h-[260px] resize-none"
            placeholder="Write or paste your content here..."
            value={formData.code}
            onChange={updateField('code')}
          />
        </FieldGroup>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <GradientButton type="submit" className="w-full py-4 text-base">
            {isLoading ? 'Publishing...' : 'Publish Share'}
          </GradientButton>
        </motion.div>
      </form>
    </GlassCard>
  );
}
