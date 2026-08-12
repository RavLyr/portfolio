'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Project } from '@/types';

const STATUS_LABELS: Record<string, string> = {
  'functional': 'Functional',
  'completed': 'Completed',
  'in-progress': 'In Progress',
  'early-stage': 'In Development',
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      className="flex flex-col card-solid overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Status Badge */}
      {project.status === 'early-stage' && (
        <div className="absolute top-4 right-4 z-10">
          <span className="status-badge in-development">
            {STATUS_LABELS[project.status]}
          </span>
        </div>
      )}

      {/* Project Image */}
      <div className="w-full h-48 bg-surface-container-high relative overflow-hidden">
        {project.thumbnailUrl ? (
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow gap-4">
        <h4 className="font-headline-md text-on-surface line-clamp-2">
          {project.title}
        </h4>
        
        <p className="font-body-md text-on-surface-variant flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="tech-badge">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Footer - GitHub Link */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-primary font-button hover:text-surface-tint transition-colors"
          >
            <span>View on GitHub</span>
            <span>→</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
