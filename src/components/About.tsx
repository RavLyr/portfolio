'use client';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/animations';

export default function About() {
  return (
    <section id="about" className="px-6 py-16 bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex flex-col gap-6">
            <motion.h3 
              className="font-headline-md text-on-surface"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
            >
              About Me
            </motion.h3>
            
            <motion.p 
              className="font-body-lg text-on-surface-variant"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              transition={{ delay: 0.1 }}
            >
              I'm a Computer Engineering student at Diponegoro University with hands-on experience building web applications and backend systems. Over the past year, I completed a full-stack developer internship at CV. Karya Hidup Sentosa in Yogyakarta, where I worked on internal manufacturing applications, resolved production bugs, and implemented containerized deployment workflows.
            </motion.p>
            
            <motion.p 
              className="font-body-md text-on-surface-variant"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              transition={{ delay: 0.15 }}
            >
              My work spans modern web technologies, blockchain integration, and AI-assisted development. I'm particularly interested in backend engineering, distributed systems, and practical applications of emerging technologies. Currently, I'm exploring decentralized verification systems and building tools that solve real-world problems.
            </motion.p>
          </div>
          
          <motion.div 
            className="md:col-span-4 md:col-start-9"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ delay: 0.2 }}
          >
            <div className="card-solid p-8">
              <h4 className="font-label-caps text-primary mb-6">
                Quick Highlights
              </h4>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-primary mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <div>
                    <div className="font-button text-on-surface">Computer Engineering</div>
                    <div className="font-body-md text-on-surface-variant mt-1">
                      Diponegoro University
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-primary mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="font-button text-on-surface">Location</div>
                    <div className="font-body-md text-on-surface-variant mt-1">
                      Semarang, Indonesia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
