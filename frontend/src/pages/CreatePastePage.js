import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import PageShell from '../components/layout/PageShell';
import CreatePasteForm from '../components/create/CreatePasteForm';
import PreviewPanel from '../components/create/PreviewPanel';

const initialState = {
  title: 'Weekly reflection',
  language: 'General Note',
  expiry: '7 days',
  password: '',
  code: `Today we wrapped the onboarding flow and collected feedback from the first group of testers.

The strongest response was around simplicity. People loved being able to write one clean paragraph, generate a link, and share it immediately.

Next, we should improve search, add folders, and keep the experience just as lightweight.`,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    window.setTimeout(() => {
      setIsLoading(false);
      toast.success('Post published successfully');
      navigate('/paste/qs-93lx2');
    }, 1100);
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
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Write once, share instantly
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
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
