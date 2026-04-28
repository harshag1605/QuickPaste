import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import LoadingSkeleton from '../ui/LoadingSkeleton';

export default function PreviewPanel({ formData, isLoading }) {
  return (
    <GlassCard className="h-full overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div>
          <p className="text-sm font-medium text-slate-900">Live Preview</p>
          <p className="text-xs text-slate-600">What your shared post will look like</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-600">
          <FileText className="h-4 w-4 text-secondary" />
          {formData.language}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="rounded-2xl border border-slate-200 bg-slate-100/90 p-4">
          <p className="text-lg font-semibold text-slate-900">{formData.title || 'Untitled post'}</p>
          <p className="mt-1 text-sm text-slate-600">
            Expires in {formData.expiry} {formData.password ? '• password protected' : ''}
          </p>
        </div>

        {isLoading ? (
          <div className="space-y-3">
            <LoadingSkeleton className="h-12" />
            <LoadingSkeleton className="h-40" />
            <LoadingSkeleton className="h-28" />
          </div>
        ) : (
          <motion.div
            key={`${formData.title}-${formData.language}-${formData.code.length}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
          >
            <div className="min-h-[420px] whitespace-pre-wrap p-6 text-[0.95rem] leading-8 text-slate-700">
              {formData.code ||
                `Start writing your message...

Quick Paste is designed for clean sharing of paragraphs, notes, and ideas.

Paste anything you want to share beautifully.`}
            </div>
          </motion.div>
        )}
      </div>
    </GlassCard>
  );
}
