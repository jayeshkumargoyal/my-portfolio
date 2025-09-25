'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card group"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-base/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-text-high group-hover:text-accent-orange transition-colors duration-200">
            {project.title}
          </h3>
          <span className="text-sm text-text-muted">{project.year}</span>
        </div>
        
        <p className="text-text-muted text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-surface-2 text-text-muted text-xs rounded-full border border-white/10"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 bg-surface-2 text-text-muted text-xs rounded-full border border-white/10">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-muted">{project.role}</span>
          <div className="flex items-center space-x-3">
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-surface-2 text-text-muted rounded-full hover:bg-accent-orange hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View source code"
              >
                <Github size={16} />
              </motion.a>
            )}
            <a
              href={project.links.live || project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-orange hover:text-accent-orange-emphasis text-sm font-medium transition-colors duration-200"
            >
              View Details →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
