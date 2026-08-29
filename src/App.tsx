import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { SkillsDashboard } from './components/SkillsDashboard';
import { TimelineSection } from './components/TimelineSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  // Keyboard shortcut listener (Escape closes modal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResumeOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Intersection observer / scroll spy for active section tracking
  useEffect(() => {
    const sections = ['about', 'projects', 'skills', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A192F] text-slate-100 font-sans antialiased selection:bg-teal-500/30 selection:text-teal-200 flex flex-col">
      {/* Sticky Dark Navy Top Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. About / Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Projects Section (3-card grid) */}
        <ProjectsShowcase />

        {/* 3. Skills Section (2-column layout: Core Tech Stack vs Tools & Platforms) */}
        <SkillsDashboard />

        {/* 4. Experience & Education (2-column timeline) */}
        <TimelineSection />
      </main>

      {/* 5. Contact Section & Minimal Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* ATS-Compliant Resume Modal & Print View */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
