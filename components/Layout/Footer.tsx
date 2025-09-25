'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Calendar } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const Footer = () => {
  const { profile, footer } = portfolioData;

  const socialLinks = [
    { name: 'GitHub', href: profile.social.github, icon: Github },
    { name: 'LinkedIn', href: profile.social.linkedin, icon: Linkedin },
    { name: 'Calendly', href: footer.social.calendly, icon: Calendar },
    { name: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  ];

  return (
    <footer className="bg-dark-surface/50 border-t border-white/10">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent-orange">{profile.name}</h3>
              <p className="text-text-muted text-sm max-w-xs">
                {footer.description}
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-text-high uppercase tracking-wider">
                Navigation
              </h4>
              <ul className="space-y-2">
                {footer.links.map((link) => (
                  <li key={link.text}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent-orange transition-colors duration-200 text-sm"
                      >
                        {link.text}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-text-muted hover:text-accent-orange transition-colors duration-200 text-sm"
                      >
                        {link.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-text-high uppercase tracking-wider">
                Connect
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.name === 'Email' ? '_self' : '_blank'}
                      rel={social.name === 'Email' ? '' : 'noopener noreferrer'}
                      className="p-2 text-text-muted hover:text-accent-orange transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-text-muted text-sm">
              {footer.copyright}
            </p>
            <p className="text-text-muted text-sm mt-2 sm:mt-0">
              {footer.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
