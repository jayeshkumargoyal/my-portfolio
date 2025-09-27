'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DynamicBackground from '@/components/UI/DynamicBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <DynamicBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
