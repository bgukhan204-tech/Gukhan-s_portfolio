import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink, ArrowRight, BarChart2, Shield, Zap, Database } from 'lucide-react';

interface Props {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  onOpenLiveDemo: (project: Project) => void;
}

export const ProjectCard: React.FC<Props> = ({ 
  project, 
  onOpenCaseStudy, 
  onOpenLiveDemo 
}) => {
  // Select an illustrative icon based on project category/title
  const getProjectIcon = () => {
    if (project.id === 'sentinel-ai') return <Shield className="w-5 h-5 text-teal-400" />;
    if (project.id === 'hyperscale-store') return <Zap className="w-5 h-5 text-teal-400" />;
    return <Database className="w-5 h-5 text-teal-400" />;
  };

  return (
    <div 
      id={`project-card-${project.id}`}
      className="group flex flex-col justify-between bg-[#112240] rounded-xl border border-slate-800 shadow-lg hover:shadow-2xl hover:border-teal-500/50 transition-all duration-300 overflow-hidden text-slate-200"
    >
      <div>
        {/* Top Preview Banner / Architectural Thumbnail */}
        <div className="relative h-44 bg-gradient-to-br from-[#071322] to-[#0A192F] p-5 flex flex-col justify-between overflow-hidden text-white border-b border-slate-800">
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-teal-950/80 text-teal-300 border border-teal-500/40">
              {project.category}
            </span>
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
              {getProjectIcon()}
            </div>
          </div>

          <div className="relative z-10 space-y-1">
            <h4 className="font-serif font-bold text-lg text-white group-hover:text-teal-300 transition-colors">
              {project.title}
            </h4>
            <p className="text-xs text-slate-300 line-clamp-1">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Challenge & Overview */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wide">
              Engineering Scope:
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Key Measurable Outcome Metric Banner */}
          <div className="bg-[#0A192F] border border-slate-800 rounded-lg p-3 space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
              <BarChart2 className="w-3.5 h-3.5 text-teal-400" />
              <span>Key Focus & Metrics:</span>
            </div>
            <div className="flex items-center gap-3 pt-0.5">
              {project.metrics.slice(0, 2).map((metric, idx) => (
                <div key={idx} className="text-xs font-semibold text-slate-200">
                  <span className="text-teal-300 font-bold">{metric.value}</span>{' '}
                  <span className="text-slate-400 text-[11px]">({metric.label})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack List */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Tech Stack:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span 
                  key={tech}
                  className="text-xs px-2.5 py-0.5 rounded bg-[#0A192F] border border-slate-800 text-slate-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Links & CTAs */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3 bg-[#0e1d37]">
        {/* View Project / Case Study */}
        <button
          id={`btn-view-project-${project.id}`}
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-semibold transition-colors cursor-pointer"
        >
          <span>View Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {/* GitHub Repo */}
        <a
          id={`btn-github-${project.id}`}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg border border-slate-700 bg-[#0A192F] hover:border-slate-500 text-slate-300 hover:text-white transition-colors"
          title="View GitHub Repository"
        >
          <Github className="w-4 h-4" />
        </a>

        {/* Live Demo / Simulator CTA */}
        <button
          id={`btn-demo-${project.id}`}
          type="button"
          onClick={() => onOpenLiveDemo(project)}
          className="p-2.5 rounded-lg border border-teal-500/40 bg-[#0A192F] hover:bg-teal-950/50 text-teal-400 hover:text-teal-300 transition-colors cursor-pointer"
          title="Launch Live Interactive Demo / Benchmark"
        >
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
