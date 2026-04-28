import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import api from '../api';
import PageShell from '../components/layout/PageShell';
import CreatePasteForm from '../components/create/CreatePasteForm';
import PreviewPanel from '../components/create/PreviewPanel';

const initialState = {
  title: '',
  language: 'General Note',
  expiry: '7 days',
  password: '',
  code: '',
};

export default function CreatePastePage() {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const normalizedData = useMemo(
    () => ({
      ...formData,
    }),
    [formData]
  );

  const mapExpiry = (expiry) => {
    const now = new Date();
    switch (expiry) {
      case '1 hour': return new Date(now.getTime() + 60 * 60 * 1000).toISOString();
      case '24 hours': return new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString();
      case '7 days': return new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString();
      case '30 days': return new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString();
      default: return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.code.trim()) {
      toast.error('Content cannot be empty');
      return;
    }

    setIsLoading(true);
    try {
      const payload = {
        title: formData.title || 'Untitled',
        content: formData.code,
        language: formData.language,
        expiresAt: mapExpiry(formData.expiry),
        visibility: 'PUBLIC' // Default for now
      };

      const result = await api.createPaste(payload);
      toast.success('Post published successfully');
      navigate(`/paste/${result.shareId}`);
    } catch (error) {
      console.error('Failed to create paste:', error);
      toast.error(error.response?.data?.message || 'Failed to publish post');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageShell>
      <section className="section-shell py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-2xl"
        >
          <span className="hero-chip">Create post</span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Write once, share instantly
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            A split-screen workflow designed for elegant paragraph sharing across desktop and
            mobile.
          </p>
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <CreatePasteForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
          <PreviewPanel formData={normalizedData} isLoading={isLoading} />
        </div>
      </section>
    </PageShell>
  );
}
