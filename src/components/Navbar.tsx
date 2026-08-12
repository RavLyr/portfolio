'use client';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
      <div className="h-16 max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, '#hero')}
            className="font-headline-md text-lg font-bold tracking-tight text-text-primary hover:text-primary transition-colors"
          >
            Ravly Ramdhani
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-label-caps">
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, '#hero')}
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, '#about')}
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            About
          </a>
          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, '#projects')}
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Work
          </a>
          <a 
            href="#experience" 
            onClick={(e) => scrollToSection(e, '#experience')}
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Experience
          </a>
          <a 
            href="#skills" 
            onClick={(e) => scrollToSection(e, '#skills')}
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Skills
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')}
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="hidden sm:inline-flex btn-primary"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
