import { motion } from 'framer-motion';
import { CalendarDays, Download, Files, Link2 } from 'lucide-react';
import GradientButton from '../ui/GradientButton';

export default function PasteHeader({ paste, copied, onCopy, onDownload }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
    >
      <div className="space-y-4">
        <span className="hero-chip">
          <CalendarDays className="h-4 w-4 text-secondary" />
          Created {paste.createdAt}
        </span>
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {paste.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            Share-ready content with clean reading, direct actions, and premium transitions.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <GradientButton onClick={onCopy}>
          {copied ? <Files className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
          {copied ? 'Link Copied' : 'Copy Link'}
        </GradientButton>
        <GradientButton variant="ghost" onClick={onDownload}>
          <Download className="h-4 w-4" />
          Download
        </GradientButton>
      </div>
    </motion.div>
  );
}
