export interface PortfolioData {
  meta: {
    title: string;
    description: string;
    keywords: string;
    author: string;
    url: string;
    image: string;
  };
  profile: {
    name: string;
    role: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    social: {
      github: string;
      linkedin: string;
      twitter: string;
      dribbble: string;
    };
    avatar: string;
  };
  projects: Project[];
  skills: {
    frontend: string[];
    backend: string[];
    mobile: string[];
    design: string[];
    tools: string[];
  };
  timeline: TimelineEntry[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  role: string;
  year: string;
  tags: string[];
  coverImage: string;
  gallery: string[];
  links: {
    live?: string;
    github?: string;
  };
  featured: boolean;
}

export interface TimelineEntry {
  title: string;
  organization: string;
  period: string;
  shortDescription: string;
  description: string;
  highlights: string[];
}

