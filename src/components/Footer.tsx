import React from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  FileText, 
  Phone,
  MapPin,
  ArrowUp,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Props {
  onOpenResume: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0A192F] text-slate-200 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif">
            Contact Information
          </h2>
          <p className="text-base text-slate-300 font-sans leading-relaxed">
            Open for software engineering, full-stack web development, and AI developer roles. Feel free to reach out directly through any of the channels below.
          </p>
        </div>

        {/* Contact Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Direct Email */}
          <div className="bg-[#112240] rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4 hover:border-teal-500/40 transition-colors group">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-teal-950/80 text-teal-400 border border-teal-500/30">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/30">
                Primary Channel
              </span>
            </div>

            <div>
              <span className="text-xs text-slate-400 font-medium block">Email Address</span>
              <a 
                id="contact-email-link"
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="text-white hover:text-teal-400 font-semibold text-base transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <p className="text-xs text-slate-400">
              Direct inbox for technical inquiries, job opportunities, and project discussions.
            </p>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="bg-[#112240] rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4 hover:border-teal-500/40 transition-colors group">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-teal-950/80 text-teal-400 border border-teal-500/30">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/30">
                Direct Line
              </span>
            </div>

            <div>
              <span className="text-xs text-slate-400 font-medium block">Phone Number</span>
              <a 
                id="contact-phone-link"
                href={`tel:${PERSONAL_INFO.phone}`} 
                className="text-white hover:text-teal-400 font-semibold text-base transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>

            <p className="text-xs text-slate-400">
              Available for voice calls, technical discussions, and direct interview scheduling.
            </p>
          </div>

          {/* Card 3: Location & Availability */}
          <div className="bg-[#112240] rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4 hover:border-teal-500/40 transition-colors group">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-teal-950/80 text-teal-400 border border-teal-500/30">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/30">
                Location
              </span>
            </div>

            <div>
              <span className="text-xs text-slate-400 font-medium block">Current Base</span>
              <span className="text-white font-semibold text-base block">
                {PERSONAL_INFO.location}
              </span>
            </div>

            <p className="text-xs text-slate-400">
              Open to on-site, hybrid, and remote software engineering positions across India & globally.
            </p>
          </div>

        </div>

        {/* Secondary Channels & Resume Banner */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* LinkedIn Profile */}
          <a
            id="contact-linkedin-box"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#112240] rounded-2xl p-5 border border-slate-800 flex items-center justify-between hover:border-teal-500/40 transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#0A192F] text-[#0A66C2] border border-slate-800">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-white font-semibold text-sm block group-hover:text-teal-400 transition-colors">
                  LinkedIn Profile
                </span>
                <span className="text-xs text-slate-400">
                  Connect & Network
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
          </a>

          {/* GitHub Profile */}
          <a
            id="contact-github-box"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#112240] rounded-2xl p-5 border border-slate-800 flex items-center justify-between hover:border-teal-500/40 transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#0A192F] text-slate-200 border border-slate-800">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <span className="text-white font-semibold text-sm block group-hover:text-teal-400 transition-colors">
                  GitHub Repositories
                </span>
                <span className="text-xs text-slate-400">
                  Source Code & Commits
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
          </a>

          {/* View ATS Resume Modal CTA */}
          <button
            id="contact-btn-resume"
            type="button"
            onClick={onOpenResume}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 rounded-2xl p-5 flex items-center justify-between font-semibold shadow-lg hover:shadow-teal-500/20 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3.5 text-left">
              <div className="p-2.5 rounded-xl bg-slate-950 text-teal-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-slate-950 font-bold text-sm block">
                  ATS-Compliant Resume
                </span>
                <span className="text-xs text-slate-800 font-medium">
                  View & Download PDF
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-950" />
          </button>

        </div>

        {/* Bottom Social Links & Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-5">
            <a
              id="footer-link-linkedin"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-teal-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              id="footer-link-github"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-teal-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              id="footer-link-email-bottom"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-teal-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
            
            <button
              id="btn-scroll-top"
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#112240] border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
