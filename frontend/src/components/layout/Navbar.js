import { motion } from 'framer-motion';
import { FileText, Sparkles } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import GradientLink from '../ui/GradientLink';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Create', to: '/create' },
  { label: 'View Demo', to: '/paste/qs-93lx2' },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-xl"
    >
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-button-gradient shadow-glow">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-wide text-slate-900">Quick Paste</p>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Instant text sharing</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/90 p-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition ${
                  isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <GradientLink to="/create" className="hidden md:inline-flex">
          <Sparkles className="h-4 w-4" />
          Create Post
        </GradientLink>
      </div>
    </motion.header>
  );
}
