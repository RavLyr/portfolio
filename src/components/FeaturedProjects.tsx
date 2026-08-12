'use client';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '@/data/projects';
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="max-w-[1280px] mx-auto w-full">
        <motion.div 
          className="flex flex-col gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          <span className="font-label-caps text-primary">Work</span>
          <h3 className="font-headline-lg text-on-surface">Featured Projects</h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerVariants}
        >
          {projectsData.featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
