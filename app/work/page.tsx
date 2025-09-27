'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SectionHeader from '@/components/UI/SectionHeader';
import ProjectCard from '@/components/UI/ProjectCard';
import ProjectDetailModal from '@/components/UI/ProjectDetailModal';
import Badge from '@/components/UI/Badge';
import portfolioData from '@/data/portfolio.json';
import { Project } from '@/types/portfolio';

const WorkPage = () => {
  const [filter, setFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { projects, workPage } = portfolioData;

  const categories = workPage.filters;
  
  const filteredProjects = filter === 'All Projects' 
    ? projects 
    : projects.filter(project => {
        // Custom filtering logic for different categories
        if (filter === 'Python') {
          return project.tags.some(tag => 
            tag.toLowerCase().includes('python') || 
            tag.toLowerCase().includes('pytorch') ||
            tag.toLowerCase().includes('opencv') ||
            tag.toLowerCase().includes('numpy') ||
            tag.toLowerCase().includes('pandas')
          );
        }
        if (filter === 'JavaScript') {
          return project.tags.some(tag => 
            tag.toLowerCase().includes('javascript') || 
            tag.toLowerCase().includes('react') ||
            tag.toLowerCase().includes('node') ||
            tag.toLowerCase().includes('express')
          );
        }
        if (filter === 'Java') {
          return project.tags.some(tag => 
            tag.toLowerCase().includes('java') || 
            tag.toLowerCase().includes('android')
          );
        }
        if (filter === 'React') {
          return project.tags.some(tag => 
            tag.toLowerCase().includes('react')
          );
        }
        if (filter === 'Node.js') {
          return project.tags.some(tag => 
            tag.toLowerCase().includes('node') ||
            tag.toLowerCase().includes('express')
          );
        }
        if (filter === 'AI/ML') {
          return project.tags.some(tag => 
            tag.toLowerCase().includes('pytorch') ||
            tag.toLowerCase().includes('opencv') ||
            tag.toLowerCase().includes('numpy') ||
            tag.toLowerCase().includes('pandas') ||
            tag.toLowerCase().includes('scikit') ||
            tag.toLowerCase().includes('ai') ||
            tag.toLowerCase().includes('ml')
          );
        }
        if (filter === 'Web Development') {
          return project.tags.some(tag => 
            tag.toLowerCase().includes('react') ||
            tag.toLowerCase().includes('node') ||
            tag.toLowerCase().includes('express') ||
            tag.toLowerCase().includes('html') ||
            tag.toLowerCase().includes('css') ||
            tag.toLowerCase().includes('javascript') ||
            tag.toLowerCase().includes('mongodb') ||
            tag.toLowerCase().includes('rest')
          );
        }
        return project.tags.includes(filter);
      });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={workPage.hero.eyebrow}
            title={workPage.hero.title}
            subtitle={workPage.hero.subtitle}
          />
          
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 justify-center mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-accent-orange text-base-black'
                    : 'bg-surface-2 text-text-muted hover:text-accent-orange hover:bg-accent-orange/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard 
                    project={project} 
                    index={index} 
                    onClick={() => handleProjectClick(project)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-text-muted text-lg">
                No projects found for this filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Layout>
  );
};

export default WorkPage;
