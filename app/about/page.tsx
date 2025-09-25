'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import SectionHeader from '@/components/UI/SectionHeader';
import Badge from '@/components/UI/Badge';
import Button from '@/components/UI/Button';
import TagChip from '@/components/UI/TagChip';
import { Download, MapPin, Mail, Github, Linkedin, Twitter, ExternalLink, Building2, GraduationCap, Users, Book, Boxes, Database, Wrench, Brain } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const AboutPage = () => {
  const { profile, skills, timeline, aboutPage, volunteer, companyLogos } = portfolioData;

  const socialLinks = [
    { name: 'GitHub', href: profile.social.github, icon: Github },
    { name: 'LinkedIn', href: profile.social.linkedin, icon: Linkedin },
    { name: 'Twitter', href: profile.social.twitter, icon: Twitter },
    { name: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  ];

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
                {aboutPage.hero.eyebrow}
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                <span className="text-gradient">{aboutPage.hero.title}</span>
                <br />
                <span className="text-text-primary text-2xl sm:text-3xl font-medium" style={{ lineHeight: '0.9' }}>{aboutPage.hero.subtitle}</span>
              </h1>
              
              <div className="space-y-4 text-text-muted mt-6">
                <p className="text-lg">
                  {aboutPage.hero.description}
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-text-muted">
                  <MapPin className="mr-2" size={20} />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center text-text-muted">
                  <Mail className="mr-2" size={20} />
                  <span>{profile.email}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  {aboutPage.hero.primaryButton.text}
                </Button>
                <Link href="/contact">
                  <Button variant="secondary" size="lg">
                    {aboutPage.hero.secondaryButton.text}
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src={aboutPage.hero.image}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-base/80 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-dark-surface/30">
        <div className="container-custom">
          <SectionHeader
            eyebrow={aboutPage.skills.eyebrow}
            title={aboutPage.skills.title}
            subtitle={aboutPage.skills.subtitle}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {Object.entries(skills).map(([category, skillList], index) => {
              // Icon and color mapping
              const categoryConfig = {
                languages: { icon: Book, color: 'text-orange-400 bg-orange-400/10', title: 'Languages' },
                frameworksLibraries: { icon: Boxes, color: 'text-sky-400 bg-sky-400/10', title: 'Frameworks & Libraries' },
                databasesDesign: { icon: Database, color: 'text-emerald-400 bg-emerald-400/10', title: 'Databases & Design' },
                developerToolsPlatforms: { icon: Wrench, color: 'text-zinc-300 bg-zinc-300/10', title: 'Developer Tools & Platforms' },
                mlAi: { icon: Brain, color: 'text-violet-400 bg-violet-400/10', title: 'ML & AI' }
              };

              const config = categoryConfig[category as keyof typeof categoryConfig];
              const Icon = config.icon;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="glass-effect p-6 rounded-2xl hover:shadow-lg hover:shadow-accent-orange/10 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg ${config.color} mr-3 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-text-high">
                      {config.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      >
                        <TagChip 
                          name={skill.name} 
                          badge={skill.badge}
                          className={`${config.color} hover:scale-105 transition-transform duration-200`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="experience" className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow={aboutPage.experience.eyebrow}
            title={aboutPage.experience.title}
            subtitle={aboutPage.experience.subtitle}
          />
          
          <div className="mt-16 space-y-8">
            {timeline.map((entry, index) => {
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
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l border-accent-orange/20"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent-orange rounded-full" />
                  <div className="glass-effect p-6 rounded-2xl">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-white rounded-xl p-3 shadow-sm">
                          <Image
                            src={getCompanyLogo(entry.organization)}
                            alt={`${entry.organization} logo`}
                            width={40}
                            height={40}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-text-primary mb-1">
                            {entry.title}
                          </h3>
                          <h4 className="text-lg text-text-muted">
                            {entry.organization}
                          </h4>
                        </div>
                      </div>
                      <span className="text-sm text-accent-orange font-medium">
                        {entry.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {entry.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <span className="text-accent-orange mr-2">•</span>
                          <span className="text-text-muted text-sm">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Experience Section */}
      <section className="section-padding bg-dark-surface/30">
        <div className="container-custom">
          <SectionHeader
            eyebrow={aboutPage.volunteer.eyebrow}
            title={aboutPage.volunteer.title}
            subtitle={aboutPage.volunteer.subtitle}
          >
            <div className="mt-6">
              <a
                href={aboutPage.volunteer.linkedinPost}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-orange hover:text-accent-orange-emphasis transition-colors duration-200"
              >
                <Linkedin size={20} />
                <span className="text-sm font-medium">View my volunteer story on LinkedIn</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </SectionHeader>
          
          <div className="mt-16 space-y-8">
            {volunteer.map((entry, index) => {
              // Define company logo images based on organization
              const getCompanyLogo = (organization: string) => {
                if (organization.toLowerCase().includes('amii') || organization.toLowerCase().includes('artificial machine intelligence')) {
                  return companyLogos.amii;
                } else if (organization.toLowerCase().includes('city of edmonton') || organization.toLowerCase().includes('edmonton')) {
                  return companyLogos.cityofedmonton;
                } else if (organization.toLowerCase().includes('code for good')) {
                  return companyLogos.codeForGood;
                } else if (organization.toLowerCase().includes('university') && organization.toLowerCase().includes('outreach')) {
                  return companyLogos.universityAlbertaOutreach;
                } else {
                  return companyLogos.default;
                }
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  className="relative pl-8 border-l border-accent-orange/20"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent-orange rounded-full" />
                  <div className="glass-effect p-6 rounded-2xl">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-white rounded-xl p-3 shadow-sm">
                          <Image
                            src={getCompanyLogo(entry.organization)}
                            alt={`${entry.organization} logo`}
                            width={40}
                            height={40}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-text-primary mb-1">
                            {entry.title}
                          </h3>
                          <h4 className="text-lg text-text-muted">
                            {entry.organization}
                          </h4>
                        </div>
                      </div>
                      <span className="text-sm text-accent-orange font-medium">
                        {entry.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {entry.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <span className="text-accent-orange mr-2">•</span>
                          <span className="text-text-muted text-sm">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-dark-surface/30">
        <div className="container-custom">
          <SectionHeader
            eyebrow={aboutPage.values.eyebrow}
            title={aboutPage.values.title}
            subtitle={aboutPage.values.subtitle}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {aboutPage.values.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
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
              {aboutPage.cta.title}
            </h2>
            <p className="text-lg text-text-muted mb-8">
              {aboutPage.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={aboutPage.cta.primaryButton.link}>
                <Button size="lg">
                  {aboutPage.cta.primaryButton.text}
                </Button>
              </Link>
              <Link href={aboutPage.cta.secondaryButton.link}>
                <Button variant="secondary" size="lg">
                  {aboutPage.cta.secondaryButton.text}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
