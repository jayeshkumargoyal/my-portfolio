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
    };
    avatar: string;
  };
  projects: Project[];
  skills: {
    languages: SkillItem[];
    frameworksLibraries: SkillItem[];
    databasesDesign: SkillItem[];
    developerToolsPlatforms: SkillItem[];
    mlAi: SkillItem[];
  };
  timeline: TimelineEntry[];
  companyLogos: {
    pmassistant: string;
    universityAlberta: string;
    universityAlbertaStudentsUnion: string;
    cityofedmonton: string;
    amii: string;
    default: string;
  };
  homePage: any;
  aboutPage: any;
  workPage: any;
  contactPage: any;
  footer: any;
  volunteer: any;
}

export interface SkillItem {
  name: string;
  badge?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  highlights?: string[];
  challenges?: string[];
  technologies?: {
    frontend?: string[];
    backend?: string[];
    integrations?: string[];
    deployment?: string[];
    hardware?: string[];
    apis?: string[];
    algorithms?: string[];
    data?: string[];
    mobile?: string[];
    design?: string[];
  };
  results?: string[];
  role: string;
  year: string;
  tags: string[];
  coverImage: string;
  gallery?: string[];
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
  featured: boolean;
}

