'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  magnetic?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  magnetic = true,
  onClick,
  ...props
}: ButtonProps) => {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-focus/50 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-accent-orange to-accent-orange-emphasis text-base-black hover:shadow-glow hover:scale-105',
    secondary: 'border border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-base-black',
    ghost: 'text-text-muted hover:text-accent-orange hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = clsx(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );

  if (magnetic) {
    return (
      <motion.button
        className={buttonClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
