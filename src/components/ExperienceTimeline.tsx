'use client';
import { motion } from 'framer-motion';
import { experienceData } from '@/data/experience';
import { fadeUpVariants } from '@/lib/animations';

export default function ExperienceTimeline() {
  const formatDate = (dateStr: string): string => {
    if (dateStr === 'present') return 'Present';
    const [year, month] = dateStr.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="experience" className="px-6 py-32 bg-surface-container-lowest">
      <div className="max-w-[800px] mx-auto w-full">
        <motion.div 
          className="flex flex-col gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          <span className="font-label-caps text-primary">Career</span>
          <h3 className="font-headline-lg text-on-surface">Experience</h3>
        </motion.div>

        <div className="relative pl-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[2px] before:bg-surface-container-high">
          {experienceData.timeline.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative mb-12 last:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[37px] top-1.5 w-6 h-6 rounded-full bg-surface border-4 border-primary" />

              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <h4 className="font-headline-md text-[24px] text-on-surface font-semibold">
                  {exp.role}
                </h4>
                <span className="font-label-caps text-primary">
                  {formatDate(exp.period.start)} - {formatDate(exp.period.end)}
                </span>
              </div>

              <div className="font-button text-on-surface-variant mb-4">
                {exp.company}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Responsibilities & Impact combined */}
              <ul className="flex flex-col gap-3 font-body-md text-on-surface-variant">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary shrink-0 mt-0.5">✓</span>
                    <span>{resp}</span>
                  </li>
                ))}
                {exp.impact.map((impact, idx) => (
                  <li key={`impact-${idx}`} className="flex items-start gap-2">
                    <span className="text-primary shrink-0 mt-0.5">✓</span>
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
