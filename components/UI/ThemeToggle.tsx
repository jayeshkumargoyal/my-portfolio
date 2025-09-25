'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

type ThemeMode = 'pure' | 'atmospheric';

const ThemeToggle = () => {
  const [mode, setMode] = useState<ThemeMode>('atmospheric');

  useEffect(() => {
    // Apply theme mode to document
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode(prev => prev === 'pure' ? 'atmospheric' : 'pure');
  };

  return (
    <motion.button
      onClick={toggleMode}
      className="p-3 bg-dark-elevated text-text-secondary hover:text-accent-primary transition-colors duration-200 rounded-xl border border-white/10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${mode === 'pure' ? 'atmospheric' : 'pure'} mode`}
    >
      {mode === 'pure' ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;
