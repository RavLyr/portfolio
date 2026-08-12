'use client';
import { motion } from 'framer-motion';
import { skillsData } from '@/data/skills';
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations';

export default function TechnicalSkills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="max-w-[1280px] mx-auto w-full">
        <motion.div 
          className="flex flex-col gap-4 mb-12 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          <span className="font-label-caps text-primary">Capabilities</span>
          <h3 className="font-headline-lg text-on-surface">Technical Skills</h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerVariants}
        >
          {skillsData.categories
            .sort((a, b) => a.order - b.order)
            .map((category, index) => (
              <motion.div
                key={category.category}
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h5 className="font-button text-on-surface uppercase tracking-wider text-sm border-b border-surface-container-highest pb-2">
                  {category.category}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-surface-container rounded-md font-body-md text-sm text-on-surface-variant"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
