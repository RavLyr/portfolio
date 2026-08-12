import type { SkillCategory, SkillsData } from '@/types';

export const skillsData: SkillsData = {
  categories: [
    {
      category: 'Languages',
      skills: ['PHP', 'JavaScript', 'TypeScript', 'SQL', 'Go'],
      order: 1,
    },
    {
      category: 'Backend',
      skills: ['Laravel', 'Express.js', 'CodeIgniter 3', 'REST APIs'],
      order: 2,
    },
    {
      category: 'Frontend',
      skills: ['Vue.js', 'React', 'Next.js', 'Inertia.js', 'Tailwind CSS'],
      order: 3,
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL'],
      order: 4,
    },
    {
      category: 'Blockchain',
      skills: ['Hyperledger Fabric', 'IPFS'],
      order: 5,
    },
    {
      category: 'DevOps',
      skills: ['Docker', 'Docker Compose', 'Linux', 'Nginx', 'Git'],
      order: 6,
    },
    {
      category: 'AI',
      skills: ['AI-assisted development', 'Multi-agent workflows', 'LLM-based development'],
      order: 7,
    },
  ],
};
