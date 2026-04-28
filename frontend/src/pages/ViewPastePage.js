import { useState } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import PageShell from '../components/layout/PageShell';
import PasteHeader from '../components/view/PasteHeader';
import ShareLinkCard from '../components/view/ShareLinkCard';
import GlassCard from '../components/ui/GlassCard';
import { mockPaste } from '../data/mockPaste';

export default function ViewPastePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(mockPaste.shareUrl);
      setCopied(true);
      toast.success('Share link copied');
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error('Clipboard access is unavailable');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([mockPaste.code], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${mockPaste.title.replace(/\s+/g, '-').toLowerCase()}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
    toast.success('Post downloaded');
  };

  return (
    <PageShell>
      <section className="section-shell py-12 sm:py-16">
        <PasteHeader
          paste={mockPaste}
          copied={copied}
          onCopy={handleCopy}
          onDownload={handleDownload}
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-[1fr_320px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <GlassCard className="overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <p className="text-sm font-medium text-white">{mockPaste.language}</p>
                  <p className="text-xs text-gray-400">Clean reading view</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                  Post ID: {mockPaste.id}
                </div>
              </div>

              <div className="min-h-[480px] whitespace-pre-wrap bg-[#0A0F1B] p-6 text-[0.95rem] leading-8 text-gray-200">
                {mockPaste.code}
              </div>
            </GlassCard>
          </motion.div>

          <div className="space-y-6">
            <ShareLinkCard link={mockPaste.shareUrl} copied={copied} />
            <GlassCard className="p-5">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-white">Post metadata</p>
                  <p className="mt-1 text-sm text-gray-400">
                    Useful context for your recipient before they open the shared content.
                  </p>
                </div>
                <div className="grid gap-3 text-sm text-gray-300">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="text-gray-500">Type:</span> {mockPaste.language}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="text-gray-500">Expiry:</span> {mockPaste.expiry}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="text-gray-500">Status:</span> Live and shareable
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
