// Projects
export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  category: string;
  techStack: string[];
  thumbnailUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  tier: 1 | 2 | 3;
  startDate?: string;
  endDate?: string;
}

export type ProjectStatus = 
  | 'functional'
  | 'completed'
  | 'in-progress'
  | 'early-stage';

export interface ProjectsData {
  featured: Project[];
  all: Project[];
}

// Experience
export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: {
    start: string;
    end: string;
  };
  technologies: string[];
  responsibilities: string[];
  impact: string[];
  type: 'internship' | 'full-time' | 'contract' | 'freelance';
}

export interface ExperienceData {
  timeline: Experience[];
}

// Skills
export interface SkillCategory {
  category: string;
  icon?: string;
  skills: string[];
  order: number;
}

export interface SkillsData {
  categories: SkillCategory[];
}

// Social/Contact
export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  icon?: string;
  primary: boolean;
  order: number;
}

export interface ContactData {
  email: string;
  location: string;
  social: SocialLink[];
}
