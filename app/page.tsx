'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Building2, GraduationCap, Users } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import SectionHeader from '@/components/UI/SectionHeader';
import ProjectCard from '@/components/UI/ProjectCard';
import ProjectDetailModal from '@/components/UI/ProjectDetailModal';
import Button from '@/components/UI/Button';
import Badge from '@/components/UI/Badge';
import portfolioData from '@/data/portfolio.json';
import { Project } from '@/types/portfolio';

const HomePage = () => {
  const { profile, projects, homePage, companyLogos } = portfolioData;
  const featuredProjects = projects.filter(project => project.featured);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const socialLinks = [
    { name: 'GitHub', href: profile.social.github, icon: Github },
    { name: 'LinkedIn', href: profile.social.linkedin, icon: Linkedin },
    { name: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  ];

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
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="eyebrow"
              >
                {homePage.hero.eyebrow}
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-6">
                <span className="text-gradient">{homePage.hero.title}</span>
                <br />
                <span className="text-text-primary text-2xl sm:text-3xl lg:text-4xl">{homePage.hero.subtitle}</span>
              </h1>
              
              <p className="text-lg text-text-muted max-w-lg">
                {homePage.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto"
                  onClick={() => {
                    const experienceSection = document.getElementById('experience');
                    if (experienceSection) {
                      experienceSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {homePage.hero.primaryButton.text}
                </Button>
                <Link href="/contact">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    {homePage.hero.secondaryButton.text}
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.name === 'Email' ? '_self' : '_blank'}
                      rel={social.name === 'Email' ? '' : 'noopener noreferrer'}
                      className="p-3 text-text-muted hover:text-accent-orange transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Name tag below the image */}
              <div className="text-center">
                <div className="glass-effect p-6 rounded-2xl backdrop-blur-md">
                  <h3 className="text-2xl font-semibold text-text-high mb-2">
                    {profile.name}
                  </h3>
                  <p className="text-text-muted">
                    {profile.role} • {profile.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-surface-1/30">
        <div className="container-custom">
          <SectionHeader
            eyebrow={homePage.projects.eyebrow}
            title={homePage.projects.title}
            subtitle={homePage.projects.subtitle}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href={homePage.projects.cta.link}>
              <Button variant="secondary" size="lg">
                {homePage.projects.cta.text}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={homePage.overview.eyebrow}
            title={homePage.overview.title}
            subtitle={homePage.overview.subtitle}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {homePage.overview.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-accent-orange mb-2">{stat.value}</div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section id="experience" className="section-padding bg-surface-1/30">
        <div className="container-custom">
          <SectionHeader
            eyebrow={homePage.experience.eyebrow}
            title={homePage.experience.title}
            subtitle={homePage.experience.subtitle}
          />
          
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioData.timeline.filter(entry => entry.featured).map((entry, index) => {
                // Define company logo images based on organization
                const getCompanyLogo = (organization: string) => {
                  if (organization.toLowerCase().includes('pmassistant')) {
                    return companyLogos.pmassistant;
                  } else if (organization.toLowerCase().includes('university') && organization.toLowerCase().includes('students')) {
                    return companyLogos.universityAlbertaStudentsUnion;
                  } else if (organization.toLowerCase().includes('university')) {
                    return companyLogos.universityAlberta;
                  } else {
                    return companyLogos.default;
                  }
                };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="glass-effect p-6 rounded-2xl hover:shadow-lg hover:shadow-accent-orange/10 transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white rounded-lg p-2 shadow-sm flex-shrink-0">
                          <Image
                            src={getCompanyLogo(entry.organization)}
                            alt={`${entry.organization} logo`}
                            width={32}
                            height={32}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-semibold text-text-high leading-tight mb-2">
                            {entry.title}
                          </h3>
                          <h4 className="text-text-muted text-sm">
                            {entry.organization}
                          </h4>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm text-accent-orange font-medium">
                        {entry.period}
                      </span>
                    </div>
                    
                    <p className="text-text-muted text-sm mb-4 flex-grow">
                      {entry.shortDescription}
                    </p>
                    
                    <div className="mt-auto">
                      <Link 
                        href="/about#experience" 
                        className="text-accent-orange hover:text-accent-orange-emphasis text-sm font-medium transition-colors duration-200 cursor-pointer"
                      >
                        View full timeline →
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/about#experience">
                <Button variant="secondary" size="lg">
                  View Complete Experience
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text-high mb-6">
              {homePage.cta.title}
            </h2>
            <p className="text-lg text-text-muted mb-8">
              {homePage.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={homePage.cta.primaryButton.link}>
                <Button size="lg">
                  {homePage.cta.primaryButton.text}
                </Button>
              </Link>
              <Link href={homePage.cta.secondaryButton.link}>
                <Button variant="secondary" size="lg">
                  {homePage.cta.secondaryButton.text}
                </Button>
              </Link>
            </div>
          </motion.div>
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

export default HomePage;
