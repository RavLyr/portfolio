'use client';
import { contactData } from '@/data/social';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-border-subtle py-16">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-on-surface-variant font-label-caps">
          © 2024 Ravly Ramdhani
        </div>
        
        <div className="flex items-center gap-8">
          {contactData.social
            .filter(link => link.primary)
            .sort((a, b) => a.order - b.order)
            .map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform !== 'Email' ? '_blank' : undefined}
                rel={link.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-caps"
              >
                <span className="text-lg">
                  {link.platform === 'GitHub' && '🔗'}
                  {link.platform === 'LinkedIn' && '🔗'}
                  {link.platform === 'Email' && '✉️'}
                </span>
                {link.platform.toUpperCase()}
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
}
