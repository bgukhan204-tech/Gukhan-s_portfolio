import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  Award, 
  BookOpen
} from 'lucide-react';

export const TimelineSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#0A192F] border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History & Background</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif">
            Experience & Education
          </h2>
          <p className="text-base text-slate-300 font-sans leading-relaxed">
            Professional software engineering internships, research roles, and academic credentials in Artificial Intelligence & Data Science.
          </p>
        </div>

        {/* Two-Column Timeline: Left = Professional Experience, Right = Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* Left Column: Professional & Research Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-teal-950/80 text-teal-400 border border-teal-500/30">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">
                  Professional Experience
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  Internships and applied engineering experience
                </p>
              </div>
            </div>

            {/* Vertical Experience Timeline Track */}
            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
              {EXPERIENCE_DATA.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0A192F] border-2 border-teal-400 group-hover:bg-teal-400 transition-colors shadow-sm" />

                  {/* Experience Card */}
                  <div className="bg-[#112240] rounded-xl p-5 border border-slate-800 shadow-xl space-y-3 hover:border-teal-500/40 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-serif font-bold text-base text-white">
                          {item.role}
                        </h4>
                        <div className="text-xs font-semibold text-teal-400">
                          {item.organization}
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-medium text-slate-300 bg-[#0A192F] px-2.5 py-1 rounded border border-slate-800 inline-block">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-teal-400/80" />
                      <span>{item.location}</span>
                    </div>

                    {/* Key Outcome Banner */}
                    <div className="p-3 rounded-lg bg-[#0A192F] border border-teal-500/20 text-xs text-slate-200 font-medium leading-relaxed">
                      <span className="font-bold text-teal-400">Highlight: </span>
                      {item.highlight}
                    </div>

                    {/* Achievements / Outcomes List */}
                    <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
                      {item.outcomes.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2 py-0.5 rounded bg-[#0A192F] border border-slate-800 text-slate-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Academic Credentials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-teal-950/80 text-teal-400 border border-teal-500/30">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">
                  Education & Academics
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  Degree programs, academic performance, and coursework
                </p>
              </div>
            </div>

            {/* Vertical Education Timeline Track */}
            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
              {EDUCATION_DATA.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0A192F] border-2 border-teal-400 group-hover:bg-teal-400 transition-colors shadow-sm" />

                  {/* Education Card */}
                  <div className="bg-[#112240] rounded-xl p-5 border border-slate-800 shadow-xl space-y-4 hover:border-teal-500/40 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-serif font-bold text-base text-white">
                          {item.degree}
                        </h4>
                        <div className="text-xs font-semibold text-teal-400">
                          {item.institution}
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-medium text-slate-300 bg-[#0A192F] px-2.5 py-1 rounded border border-slate-800 inline-block">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-teal-400/80" />
                        <span>{item.location}</span>
                      </div>
                      <span className="font-bold text-teal-300 bg-teal-950/60 px-2.5 py-0.5 rounded border border-teal-500/40">
                        {item.gpa}
                      </span>
                    </div>

                    {/* Academic Honors */}
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 uppercase tracking-wide">
                        <Award className="w-3.5 h-3.5 text-teal-400" />
                        <span>Certifications & Honors</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {item.honors.map((honor, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                            <span>{honor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Coursework */}
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wide">
                        <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                        <span>Relevant Coursework</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.relevantCoursework.map((course) => (
                          <span
                            key={course}
                            className="text-[11px] px-2 py-0.5 rounded bg-[#0A192F] border border-slate-800 text-slate-300 font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
