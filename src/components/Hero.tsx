'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUpVariants } from '@/lib/animations';

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col justify-center min-h-[70vh] px-6 py-32 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Label with line */}
            <motion.div 
              className="flex items-center gap-4"
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
            >
              <span className="w-12 h-0.5 bg-primary rounded-full"></span>
              <span className="font-label-caps text-primary">Portfolio</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              className="font-display text-on-surface tracking-tight leading-tight"
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ delay: 0.1 }}
            >
              Ravly Ramdhani
            </motion.h1>

            {/* Subheading */}
            <motion.h2 
              className="font-headline-lg text-on-surface-variant"
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ delay: 0.15 }}
            >
              Backend-focused Full Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="font-body-lg text-on-surface-variant max-w-2xl"
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ delay: 0.2 }}
            >
              Building scalable, resilient, and highly available systems. Passionate about software architecture, clean code, and solving complex engineering challenges.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 mt-8"
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ delay: 0.25 }}
            >
              <a 
                href="#projects" 
                className="btn-primary"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="btn-secondary"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ delay: 0.3 }}
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Ravly Ramdhani"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
