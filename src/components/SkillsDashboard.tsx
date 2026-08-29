import React from 'react';
import { CORE_TECH_STACK, TOOLS_AND_PLATFORMS, CERTIFICATIONS } from '../data/portfolioData';
import { 
  Layers, 
  Cpu, 
  Wrench, 
  Award, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

export const SkillsDashboard: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#0A192F] border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif">
            Skills & Technical Proficiency
          </h2>
          <p className="text-base text-slate-300 font-sans leading-relaxed">
            A structured breakdown of core engineering competencies, frameworks, systems architecture tools, and verified industry credentials.
          </p>
        </div>

        {/* Two-Column Layout: Core Tech Stack vs. Tools & Platforms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Column 1: Core Tech Stack */}
          <div className="bg-[#112240] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-teal-950/80 text-teal-400 border border-teal-500/30">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">
                  Core Tech Stack
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  Programming languages, frameworks, and distributed databases
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {CORE_TECH_STACK.map((item) => (
                <div key={item.name} className="p-4 rounded-xl bg-[#0A192F] border border-slate-800/90 space-y-2.5 hover:border-teal-500/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-white font-sans">
                      {item.name}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#112240] border border-slate-700/80 text-slate-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Tools & Platforms */}
          <div className="bg-[#112240] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-teal-950/80 text-teal-400 border border-teal-500/30">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">
                  Tools & Platforms
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  DevOps, cloud hosting, testing environments, and collaboration
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {TOOLS_AND_PLATFORMS.map((item) => (
                <div key={item.name} className="p-4 rounded-xl bg-[#0A192F] border border-slate-800/90 space-y-2.5 hover:border-teal-500/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-white font-sans">
                      {item.name}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#112240] border border-slate-700/80 text-slate-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Certifications Section */}
        <div className="mt-12 bg-[#112240] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
            <div className="p-2 rounded-lg bg-teal-950/80 text-teal-400 border border-teal-500/30">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">
                Verified Certifications & Accreditations
              </h3>
              <p className="text-xs text-slate-400">
                Industry-recognized credentials in data science, artificial intelligence, and cloud computing
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div 
                key={cert.title}
                className="p-5 rounded-xl bg-[#0A192F] border border-slate-800 space-y-2 hover:border-teal-500/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-sm text-white font-sans line-clamp-2">
                    {cert.title}
                  </h4>
                </div>

                <p className="text-xs text-slate-300">
                  {cert.issuer}
                </p>

                <div className="text-[11px] font-mono text-slate-400 pt-1">
                  ID: {cert.credentialId}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
