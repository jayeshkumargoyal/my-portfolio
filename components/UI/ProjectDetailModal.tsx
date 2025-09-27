'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, Github, Calendar, User, Tag } from 'lucide-react';
import { Project } from '@/types/portfolio';
import { useEffect } from 'react';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key and focus management
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Focus the modal for accessibility
      const modal = document.querySelector('[data-modal-content]');
      if (modal) {
        (modal as HTMLElement).focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
            transition={{ duration: 0.2 }}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 z-50 flex items-center justify-center p-4 overflow-hidden"
            onClick={(e) => {
              // Close modal when clicking outside the content area
              if (e.target === e.currentTarget) {
                onClose();
              }
            }}
          >
            <div 
              className="bg-surface-1 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden focus:outline-none"
              onClick={(e) => e.stopPropagation()}
              data-modal-content
              tabIndex={-1}
            >
              {/* Header */}
              <div className="relative">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <motion.button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                  aria-label="Close modal"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </motion.button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{project.role}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-text-high mb-4">Project Overview</h3>
                  <p className="text-text-muted leading-relaxed">{project.longDescription}</p>
                </div>

                {/* Key Achievements */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-text-high mb-4">Key Achievements</h3>
                  <div className="space-y-4">
                    {project.highlights?.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-accent-orange rounded-full mt-2 flex-shrink-0" />
                        <p className="text-text-muted leading-relaxed">{highlight}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                {project.challenges && project.challenges.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-text-high mb-4">Challenges Overcome</h3>
                    <div className="space-y-4">
                      {project.challenges.map((challenge, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-text-muted leading-relaxed">{challenge}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                {project.technologies && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-text-high mb-4">Technologies & Tools</h3>
                    <div className="space-y-4">
                      {Object.entries(project.technologies).map(([category, techs]) => (
                        <div key={category}>
                          <h4 className="text-sm font-medium text-accent-orange mb-2 capitalize">
                            {category.replace(/([A-Z])/g, ' $1').trim()}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {techs?.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 bg-surface-2 text-text-muted text-sm rounded-full border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Results */}
                {project.results && project.results.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-text-high mb-4">Results & Impact</h3>
                    <div className="space-y-4">
                      {project.results.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-text-muted leading-relaxed">{result}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Tags */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-text-high mb-4">Project Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-surface-2 text-text-muted text-sm rounded-full border border-white/10 hover:bg-accent-orange/10 hover:text-accent-orange transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-surface-2 text-text-muted rounded-lg hover:bg-accent-orange hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </motion.a>
                  )}
                  {project.links.live && (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-accent-orange text-white rounded-lg hover:bg-accent-orange-emphasis transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
