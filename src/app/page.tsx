import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedProjects from '@/components/FeaturedProjects';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import TechnicalSkills from '@/components/TechnicalSkills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Particle Background Effect */}
      <ParticleBackground />

      {/* Deep Background Glow */}
      <div className="absolute inset-0 bg-radial-glow z-0 pointer-events-none" />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Featured Projects Section */}
        <FeaturedProjects />

        {/* Experience Timeline Section */}
        <ExperienceTimeline />

        {/* Technical Skills Section */}
        <TechnicalSkills />

        {/* Contact Section (includes footer) */}
        <Contact />
      </main>
    </div>
  );
}
