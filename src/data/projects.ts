import type { Project, ProjectsData } from '@/types';

const certificateVerification: Project = {
  id: 'certificate-verification',
  title: 'Certificate Verification System',
  description: 'Decentralized certificate verification combining IPFS document storage with Hyperledger Fabric blockchain for immutable record-keeping.',
  status: 'functional',
  category: 'Backend / Blockchain',
  techStack: ['TypeScript', 'Express.js', 'PostgreSQL', 'IPFS', 'Hyperledger Fabric', 'Docker'],
  thumbnailUrl: '/certificate-verif.png',
  githubUrl: 'https://github.com/RavLyr/ipfs-hyperledger-backend',
  featured: true,
  tier: 1,
  startDate: '2024-09',
};

const bukuCDigital: Project = {
  id: 'buku-c-digital',
  title: 'Buku C Digital',
  description: 'Digital land record management system for village-level administration with map integration and SISMIOP data import.',
  status: 'completed',
  category: 'Full Stack / Government',
  techStack: ['Laravel', 'Inertia.js', 'Vue 3', 'Tailwind CSS', 'MySQL'],
  thumbnailUrl: '/buku-c.png',
  githubUrl: 'https://github.com/RavLyr/cadastral-management-system',
  featured: true,
  tier: 1,
  startDate: '2024-03',
  endDate: '2024-07',
};

const restaurantPOS: Project = {
  id: 'restaurant-pos',
  title: 'Restaurant POS System',
  description: 'Mobile-first Point of Sale system for small restaurants with order management and real-time updates.',
  status: 'early-stage',
  category: 'Full Stack / Business',
  techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  githubUrl: 'https://github.com/RavLyr/chicken-noodle-pos',
  featured: true,
  tier: 1,
  startDate: '2025-06',
};

export const projectsData: ProjectsData = {
  featured: [certificateVerification, bukuCDigital, restaurantPOS],
  all: [certificateVerification, bukuCDigital, restaurantPOS],
};
