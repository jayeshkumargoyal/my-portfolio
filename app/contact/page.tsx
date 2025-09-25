'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import Button from '@/components/UI/Button';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, ExternalLink, Download } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const ContactPage = () => {
  const { profile, contactPage } = portfolioData;
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: '', visible: false });

  const socialLinks = [
    { name: 'LinkedIn', href: profile.social.linkedin, icon: Linkedin, ariaLabel: 'Open LinkedIn' },
    { name: 'GitHub', href: profile.social.github, icon: Github, ariaLabel: 'Open GitHub' },
  ];

  const schedulingUrl = contactPage.booking.link;

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 1500);
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast('Copied!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Contact Header Component
  const ContactHeader = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-12"
    >
      <div className="eyebrow mb-4">{contactPage.hero.eyebrow}</div>
      <h1 id="contact-heading" className="text-4xl sm:text-5xl font-bold text-text-high mb-6">{contactPage.hero.title}</h1>
      <p className="text-lg text-text-muted">
        {contactPage.hero.subtitle}
      </p>
    </motion.div>
  );

  // Booking Hero Component
  const BookingHero = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="glass-effect p-8 rounded-2xl text-center mb-12"
    >
      <h2 className="text-2xl font-semibold text-text-high mb-4">{contactPage.booking.title}</h2>
      <p className="text-text-muted mb-6">{contactPage.booking.subtitle}</p>
      <Button
        size="lg"
        onClick={() => window.open(schedulingUrl, '_blank', 'noopener,noreferrer')}
        className="magnetic-hover hover:-translate-y-1 transition-transform duration-200"
        aria-label="Book a recruiter call"
      >
        {contactPage.booking.buttonText}
      </Button>
    </motion.div>
  );

  // Contact Card Component
  const ContactCard = ({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`glass-effect p-6 rounded-2xl ${className}`}
    >
      <h3 className="text-lg font-semibold text-text-high mb-4">{title}</h3>
      {children}
    </motion.div>
  );

  // Direct Contact Card Component
  const DirectContactCard = () => (
    <ContactCard title={contactPage.sections.directContact.title}>
      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-center justify-between py-3 border-b border-white/10">
          <div className="flex items-center">
            <Mail className="mr-3 text-accent-orange" size={20} aria-hidden="true" />
            <div>
              <p className="text-text-high font-medium">Email</p>
              <p className="text-text-muted text-sm">{profile.email}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(`mailto:${profile.email}?subject=Hello Jayesh`, '_blank')}
              aria-label="Email Jayesh"
              className="min-w-[44px] min-h-[44px]"
            >
              Email me
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(profile.email, 'email')}
              aria-label="Copy email to clipboard"
              className="min-w-[44px] min-h-[44px]"
            >
              <Copy size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Phone className="mr-3 text-accent-orange" size={20} aria-hidden="true" />
            <div>
              <p className="text-text-high font-medium">Phone</p>
              <p className="text-text-muted text-sm">{profile.phone}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(`tel:${profile.phone}`, '_blank')}
              aria-label="Call Jayesh"
              className="min-w-[44px] min-h-[44px]"
            >
              Call me
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(profile.phone, 'phone')}
              aria-label="Copy phone to clipboard"
              className="min-w-[44px] min-h-[44px]"
            >
              <Copy size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </ContactCard>
  );

  // Location Card Component
  const LocationCard = () => (
    <ContactCard title={contactPage.sections.location.title}>
      <div className="flex items-center">
        <MapPin className="mr-3 text-accent-orange" size={20} aria-hidden="true" />
        <div>
          <p className="text-text-high font-medium">{profile.location}</p>
          <p className="text-text-muted text-sm">{contactPage.sections.location.subtitle}</p>
        </div>
      </div>
    </ContactCard>
  );


  // Social Links Card Component
  const SocialLinksCard = () => (
    <ContactCard title={contactPage.sections.social.title}>
      <div className="space-y-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className="flex items-center justify-between py-3 hover:bg-white/5 rounded-lg px-2 transition-colors duration-200 min-h-[44px]"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center">
                <Icon className="mr-3 text-accent-orange" size={20} aria-hidden="true" />
                <span className="text-text-high">{social.name}</span>
              </div>
              <ExternalLink className="text-text-muted" size={16} aria-hidden="true" />
            </motion.a>
          );
        })}
      </div>
    </ContactCard>
  );

  // Resume Card Component
  const ResumeCard = () => {
    const hasResume = true; // Check if resume.pdf exists
    
    return (
      <ContactCard title={contactPage.sections.resume.title}>
        {hasResume ? (
          <div className="space-y-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open('/resume.pdf', '_blank', 'noopener,noreferrer')}
              className="w-full min-h-[44px]"
              aria-label="View resume in new tab"
            >
              <ExternalLink className="mr-2" size={16} aria-hidden="true" />
              {contactPage.sections.resume.viewText}
            </Button>
            <div className="text-center">
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Jayesh_Resume.pdf';
                  link.click();
                }}
                className="text-accent-orange hover:text-accent-orange-emphasis text-sm font-medium transition-colors duration-200 min-h-[44px] flex items-center justify-center w-full"
                aria-label="Download resume PDF"
              >
                <Download className="mr-2" size={16} aria-hidden="true" />
                {contactPage.sections.resume.downloadText}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-text-muted text-sm">
              To add your resume, place <code className="bg-surface-2 px-2 py-1 rounded text-xs">resume.pdf</code> in the <code className="bg-surface-2 px-2 py-1 rounded text-xs">public</code> folder.
            </p>
          </div>
        )}
      </ContactCard>
    );
  };


  // Toast Component
  const Toast = () => (
    <AnimatePresence>
      {toast.visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 bg-surface-2 text-text-high px-4 py-3 rounded-xl border border-accent-orange/20 z-50"
          role="status"
          aria-live="polite"
          aria-label="Copy notification"
        >
          {toast.message}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <Layout>
      <main className="section-padding">
        <section aria-labelledby="contact-heading">
          <div className="container-custom">
            <ContactHeader />
            <BookingHero />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Contact Details */}
              <div className="space-y-6">
                <DirectContactCard />
                <LocationCard />
              </div>

              {/* Right Column - Social and Resume */}
              <div className="space-y-6">
                <SocialLinksCard />
                <ResumeCard />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Toast />
    </Layout>
  );
};

export default ContactPage;