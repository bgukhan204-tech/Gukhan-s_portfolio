import React from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  FileDown, 
  ArrowRight, 
  CheckCircle2, 
  MapPin
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Props {
  onOpenResume: () => void;
}

export const Hero: React.FC<Props> = ({ onOpenResume }) => {
  const [imgSrc, setImgSrc] = React.useState('/my_pic.jpeg');
  const [loadFailed, setLoadFailed] = React.useState(false);

  const handleImageError = () => {
    if (imgSrc === '/my_pic.jpeg') {
      setImgSrc('/my pic .jpeg');
    } else if (imgSrc === '/my pic .jpeg') {
      setImgSrc('/assets/my_pic.jpeg');
    } else if (imgSrc === '/assets/my_pic.jpeg') {
      setImgSrc('/profile.jpg');
    } else {
      setLoadFailed(true);
    }
  };

  return (
    <section 
      id="about" 
      className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 bg-[#0A192F] border-b border-slate-800 text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Introduction, Bio, & Direct Action Buttons (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status & Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/40 text-teal-300 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 inline-block animate-pulse" />
              <span>AI & DATA SCIENCE • FULL-STACK DEVELOPER</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif">
                Hi, I'm <span className="text-teal-400">{PERSONAL_INFO.name}.</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-200 font-sans">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Key Quick Highlights */}
            <div className="flex flex-wrap gap-y-2.5 gap-x-4 text-xs sm:text-sm text-slate-300 font-medium pt-1">
              <div className="flex items-center gap-1.5 text-slate-200 bg-[#112240] px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Spring Boot, Java & JWT Security</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-200 bg-[#112240] px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>React & Modern Frontend</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-200 bg-[#112240] px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Python, TensorFlow & Streamlit</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300 bg-[#112240] px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Direct Stylized Action Buttons: LinkedIn, GitHub, Download Resume CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {/* Download Resume CTA */}
              <button
                id="hero-btn-download-resume"
                type="button"
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm shadow-md hover:shadow-teal-500/20 transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              {/* LinkedIn Button */}
              <a
                id="hero-btn-linkedin"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#112240] border border-slate-700 hover:border-teal-400 hover:text-teal-300 text-slate-200 font-medium text-sm shadow-sm transition-all"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub Button */}
              <a
                id="hero-btn-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#112240] border border-slate-700 hover:border-slate-500 hover:text-white text-slate-200 font-medium text-sm shadow-sm transition-all"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>

              {/* Quick Contact CTA */}
              <a
                id="hero-btn-contact"
                href="#contact"
                className="flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-slate-300 hover:text-teal-400 transition-colors ml-1"
              >
                <span>Contact</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Picture Card (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center lg:justify-end select-none"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Background ambient teal glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-teal-500/25 to-blue-500/15 blur-md transform" />

              {/* Main Photo Frame (Static, non-clickable) */}
              <div 
                className="relative bg-[#112240] rounded-2xl sm:rounded-3xl p-3 border border-slate-800 shadow-2xl overflow-hidden group"
              >
                <div className="relative aspect-[3/4] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0A192F] border border-slate-800/80">
                  {!loadFailed ? (
                    <img
                      id="hero-profile-photo"
                      src={imgSrc}
                      onError={handleImageError}
                      alt="Gukhan B - Software Engineer & AI Specialist"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#112240] to-[#0A192F] text-center space-y-3">
                      <div className="w-24 h-24 rounded-2xl bg-[#0A192F] border-2 border-teal-500/40 flex items-center justify-center text-teal-300 font-serif font-bold text-3xl shadow-xl">
                        GB
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white font-serif">{PERSONAL_INFO.name}</h4>
                        <p className="text-xs text-teal-400 font-medium">{PERSONAL_INFO.title}</p>
                      </div>
                    </div>
                  )}

                  {/* Gradient bottom overlay for subtle depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Availability & Info Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0A192F]/90 backdrop-blur-md border border-slate-700/80 shadow-lg flex items-center justify-between pointer-events-none">
                    <div>
                      <h3 className="text-sm font-bold text-white font-serif">
                        {PERSONAL_INFO.name}
                      </h3>
                      <p className="text-[11px] text-teal-400 font-medium">
                        Software Engineer • AI & Data Science
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 bg-teal-950/80 border border-teal-500/40 px-2.5 py-1 rounded-full text-[10px] font-semibold text-teal-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                      <span>Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
