import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Code2, ArrowUpRight } from 'lucide-react';

export const ProjectsShowcase: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [initialModalTab, setInitialModalTab] = useState<'architecture' | 'demo' | 'case-study'>('case-study');

  const handleOpenCaseStudy = (project: Project) => {
    setActiveProject(project);
    // For Deepfake Detection, immediately open the video demonstration tab
    if (project.id === 'sentinel-ai') {
      setInitialModalTab('demo');
    } else {
      setInitialModalTab('case-study');
    }
  };

  const handleOpenLiveDemo = (project: Project) => {
    setActiveProject(project);
    setInitialModalTab('demo');
  };

  // Limit to the top 3 best projects as explicitly specified
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-[#0A192F] border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif">
            Production-Grade Projects
          </h2>
          <p className="text-base text-slate-300 font-sans leading-relaxed">
            Real-world systems engineered with a focus on concurrency, low latency, clean object-oriented domain modeling, and measurable business outcomes.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={handleOpenCaseStudy}
              onOpenLiveDemo={handleOpenLiveDemo}
            />
          ))}
        </div>

        {/* Project Case Study / Deep Dive Modal */}
        {activeProject && (
          <ProjectModal
            project={activeProject}
            initialTab={initialModalTab}
            onClose={() => setActiveProject(null)}
          />
        )}
      </div>
    </section>
  );
};
