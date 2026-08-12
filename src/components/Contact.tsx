'use client';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { contactData } from '@/data/social';
import { fadeUpVariants } from '@/lib/animations';
import { Mail, Link, User, AtSign } from 'lucide-react';

const iconMap = {
  'email': Mail,
  'github': Link,
  'linkedin': User,
  'instagram': AtSign,
};

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Contact Form */}
          <motion.div 
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-headline-lg text-on-surface">Let's Connect</h3>
              <p className="font-body-md text-on-surface-variant">
                Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            <ContactForm />
          </motion.div>

          {/* Direct Links */}
          <motion.div 
            className="flex flex-col gap-8 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ delay: 0.1 }}
          >
            <div className="card-solid p-8 flex flex-col gap-8">
              {contactData.social
                .filter(link => link.primary)
                .sort((a, b) => a.order - b.order)
                .map((link) => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap];
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target={link.platform !== 'Email' ? '_blank' : undefined}
                      rel={link.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-6 group"
                    >
                      <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        {Icon && <Icon className="w-6 h-6" />}
                      </div>
                      <div>
                        <div className="font-label-caps text-on-surface-variant mb-1">
                          {link.platform}
                        </div>
                        <div className="font-button text-on-surface group-hover:text-primary transition-colors">
                          {link.label}
                        </div>
                      </div>
                    </a>
                  );
                })}
            </div>
            
            {/* Copyright footer */}
            <div className="text-center">
              <p className="font-label-caps text-on-surface-variant text-xs">
                © 2024 Ravly Ramdhani. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
