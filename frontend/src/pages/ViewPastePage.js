import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import api from '../api';
import PageShell from '../components/layout/PageShell';
import PasteHeader from '../components/view/PasteHeader';
import ShareLinkCard from '../components/view/ShareLinkCard';
import GlassCard from '../components/ui/GlassCard';

export default function ViewPastePage() {
  const { pasteId } = useParams();
  const [paste, setPaste] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchPaste = async () => {
      try {
        const data = await api.getPaste(pasteId);
        setPaste(data);
      } catch (error) {
        console.error('Failed to fetch paste:', error);
        toast.error('Post not found or expired');
      } finally {
        setIsLoading(false);
      }
    };
    fetchPaste();
  }, [pasteId]);

  const shareUrl = `${window.location.origin}/paste/${pasteId}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success('Share link copied');
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error('Clipboard access is unavailable');
    }
  };

  const handleDownload = () => {
    if (!paste) return;
    const blob = new Blob([paste.content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${(paste.title || 'untitled').replace(/\s+/g, '-').toLowerCase()}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
    toast.success('Post downloaded');
  };

  if (isLoading) {
    return (
      <PageShell>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      </PageShell>
    );
  }

  if (!paste) {
    return (
      <PageShell>
        <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-semibold text-white">Post not found</h2>
          <p className="text-gray-400">This post may have expired or never existed.</p>
          <a href="/" className="text-primary hover:underline">Go back home</a>
        </div>
      </PageShell>
    );
  }

  const mappedPaste = {
    ...paste,
    code: paste.content, // Map content to code for component compatibility
    shareUrl: shareUrl,
    expiry: paste.expiresAt ? new Date(paste.expiresAt).toLocaleString() : 'Never'
  };

  return (
    <PageShell>
      <section className="section-shell py-12 sm:py-16">
        <PasteHeader
          paste={mappedPaste}
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
                  <p className="text-sm font-medium text-white">{mappedPaste.language}</p>
                  <p className="text-xs text-gray-400">Clean reading view</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                  Post ID: {mappedPaste.id}
                </div>
              </div>

              <div className="min-h-[480px] whitespace-pre-wrap bg-[#0A0F1B] p-6 text-[0.95rem] leading-8 text-gray-200">
                {mappedPaste.code}
              </div>
            </GlassCard>
          </motion.div>

          <div className="space-y-6">
            <ShareLinkCard link={mappedPaste.shareUrl} copied={copied} />
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
                    <span className="text-gray-500">Type:</span> {mappedPaste.language}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="text-gray-500">Expiry:</span> {mappedPaste.expiry}
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
