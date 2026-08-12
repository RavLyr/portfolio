import type { Experience, ExperienceData } from '@/types';

const khsInternship: Experience = {
  id: 'khs-internship',
  role: 'Full Stack Web Developer Intern',
  company: 'CV. Karya Hidup Sentosa',
  location: 'Yogyakarta, Indonesia',
  period: {
    start: '2024-05',
    end: '2025-04',
  },
  technologies: ['PHP', 'CodeIgniter 3', 'JavaScript', 'jQuery', 'MySQL', 'Docker', 'Nginx', 'Git'],
  responsibilities: [
    'Developed and maintained internal manufacturing web applications',
    'Implemented warehouse item transfer workflows and inventory tracking systems',
    'Resolved production bugs and optimized application performance',
    'Containerized applications using Docker for consistent deployment environments',
    'Worked with Apache2 and Nginx deployment configurations',
  ],
  impact: [
    'Resolved 20+ production bugs across multiple applications',
    'Reduced manual inventory tracking time by approximately 30%',
  ],
  type: 'internship',
};

export const experienceData: ExperienceData = {
  timeline: [khsInternship],
};
