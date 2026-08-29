import React, { useState } from 'react';
import { Project } from '../types';
import { ArchitectureDiagramView } from './ArchitectureDiagramView';
import { InteractiveSimulator } from './InteractiveSimulators';
import { 
  X, 
  Github, 
  ExternalLink, 
  Cpu, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Play, 
  BookOpen, 
  BarChart2,
  Zap
} from 'lucide-react';

interface Props {
  project: Project;
  initialTab?: 'architecture' | 'demo' | 'case-study';
  onClose: () => void;
}

export const ProjectModal: React.FC<Props> = ({ 
  project, 
  initialTab = 'case-study', 
  onClose 
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'demo' | 'case-study'>(initialTab);

  return (
    <div 
      id="project-deep-dive-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-[#112240] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-200">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0A192F] text-white border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-950/80 text-teal-300 border border-teal-500/40">
              {project.category}
            </span>
            <h2 className="text-base sm:text-lg font-bold font-serif truncate max-w-[320px] sm:max-w-md">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1.5 font-medium transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>

            <button
              id="modal-btn-close"
              type="button"
              onClick={onClose}
              className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-[#0A192F] border-b border-slate-800 text-xs font-sans">
          <button
            type="button"
            onClick={() => setActiveTab('case-study')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
              activeTab === 'case-study'
                ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Case Study & Scope</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>System Architecture Flow</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('demo')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
              activeTab === 'demo'
                ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>{project.id === 'sentinel-ai' ? 'Video Demo & App Walkthrough' : 'Interactive Simulator'}</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 bg-[#0B172E]">
          
          {/* TAB 1: CASE STUDY & RESULTS */}
          {activeTab === 'case-study' && (
            <div className="space-y-6 text-sm">
              {/* Problem vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#112240] border border-red-500/30 space-y-2 shadow-lg">
                  <span className="text-xs font-bold text-red-400 flex items-center gap-1.5 uppercase tracking-wide">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    Engineering Challenge & Problem
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {project.detailedCaseStudy.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#112240] border border-teal-500/30 space-y-2 shadow-lg">
                  <span className="text-xs font-bold text-teal-300 flex items-center gap-1.5 uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    Architectural Solution & Strategy
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {project.detailedCaseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Algorithms & Domain Logic */}
              <div className="p-5 rounded-xl bg-[#112240] border border-slate-800 space-y-3 shadow-lg">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wide block">
                  Key Algorithms, Models & Domain Logic
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.detailedCaseStudy.algorithms.map((algo, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0A192F] border border-slate-800 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{algo}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics Summary */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#112240] border border-slate-800 shadow-lg text-center">
                    <span className="text-[11px] text-slate-400 block font-medium">{m.label}</span>
                    <span className="text-lg font-bold text-teal-300 font-sans">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Empirical Gains & Challenge Overcome */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-teal-950/60 border border-teal-500/40 text-teal-200 space-y-1">
                  <span className="text-xs font-bold text-teal-300 block">
                    Key Performance Metrics & Highlights:
                  </span>
                  <p className="text-xs text-teal-100/90">
                    {project.detailedCaseStudy.performanceGains}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#112240] border border-slate-800 text-slate-300 space-y-1 shadow-lg">
                  <span className="text-xs font-bold text-white block">
                    Critical Bottleneck Overcome:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.detailedCaseStudy.challengesOvercome}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE FLOW */}
          {activeTab === 'architecture' && (
            <div className="space-y-5">
              <div className="bg-[#112240] p-4 rounded-xl border border-slate-800">
                <h4 className="text-sm font-serif font-bold text-white mb-1">
                  End-to-End System Architecture
                </h4>
                <p className="text-xs text-slate-400">
                  Dataflow mapping incoming requests through high-speed validation, inference engines, and persistent database storage.
                </p>
              </div>

              <div className="bg-[#112240] p-4 rounded-xl border border-slate-800 shadow-lg">
                <ArchitectureDiagramView diagram={project.architecture} compact={false} />
              </div>
            </div>
          )}

          {/* TAB 3: INTERACTIVE SIMULATOR */}
          {activeTab === 'demo' && (
            <div className="bg-[#112240] p-5 rounded-xl border border-slate-800 shadow-lg">
              <InteractiveSimulator demoType={project.demoType} />
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#0A192F] border-t border-slate-800 flex items-center justify-between text-xs font-sans">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="font-semibold text-slate-300">Technologies:</span>
            <span className="text-slate-300">{project.techStack.join(', ')}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
