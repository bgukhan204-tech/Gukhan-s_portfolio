import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  FileText
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, EDUCATION_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0A192F] text-white">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-teal-400" />
            <span className="text-sm font-semibold font-sans tracking-wide">
              Candidate Resume // ATS Compliant
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="resume-btn-print"
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded bg-teal-600 hover:bg-teal-500 text-white font-medium text-xs shadow-sm cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="resume-btn-close"
              type="button"
              onClick={onClose}
              className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Clean ATS Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans space-y-6">
          
          {/* Header */}
          <div className="border-b border-slate-300 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A192F] font-serif">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-teal-800 mt-0.5">
                {PERSONAL_INFO.title}
              </p>
            </div>

            <div className="text-xs text-slate-600 space-y-0.5 sm:text-right font-sans">
              <p>{PERSONAL_INFO.email} | {PERSONAL_INFO.phone}</p>
              <p>{PERSONAL_INFO.location}</p>
              <p>GitHub: github.com/bgukhan204-tech | LinkedIn: linkedin.com/in/gukhan-b-97674a381</p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold tracking-wider text-slate-950 uppercase border-b border-slate-200 pb-1 font-sans">
              Education
            </h2>
            {EDUCATION_DATA.map((edu) => (
              <div key={edu.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-sans">
                      {edu.institution}
                    </h3>
                    <p className="text-xs text-slate-700">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="text-right text-xs text-slate-600">
                    <span>{edu.period}</span>
                    <p className="font-semibold text-teal-800">{edu.gpa}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600">
                  <span className="font-semibold">Honors:</span> {edu.honors.join(' • ')}
                </p>
              </div>
            ))}
          </div>

          {/* Engineering Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold tracking-wider text-slate-950 uppercase border-b border-slate-200 pb-1 font-sans">
              Professional Engineering Experience
            </h2>

            {EXPERIENCE_DATA.map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-slate-900">
                    {item.role} <span className="font-normal text-slate-600">| {item.organization}</span>
                  </h3>
                  <span className="text-xs text-slate-600">{item.period}</span>
                </div>
                <p className="text-xs text-teal-900 font-medium bg-teal-50/70 px-2 py-0.5 rounded">
                  Key Highlight: {item.highlight}
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 leading-relaxed pt-0.5">
                  {item.outcomes.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold tracking-wider text-slate-950 uppercase border-b border-slate-200 pb-1 font-sans">
              Featured Technical Projects
            </h2>

            {PROJECTS_DATA.slice(0, 3).map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-slate-900">
                    {proj.title}
                  </h3>
                  <span className="text-xs font-bold text-teal-800">
                    {proj.metrics[0]?.value} ({proj.metrics[0]?.label})
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {proj.description}
                </p>
                <p className="text-[11px] text-slate-600">
                  <span className="font-semibold">Technologies:</span> {proj.techStack.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Skills & Certifications Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold tracking-wider text-slate-950 uppercase border-b border-slate-200 pb-1 font-sans">
              Technical Competencies & Certifications
            </h2>
            <div className="text-xs text-slate-800 space-y-1">
              <p><span className="font-bold">Core Stack:</span> Java, Spring Boot, Spring Security, JWT, React, JavaScript, HTML5, CSS3, Tailwind CSS, MySQL, Python, TensorFlow, Streamlit</p>
              <p><span className="font-bold">Tools & Platforms:</span> GitHub, Render, Postman, Razorpay Payment Gateway, Linux/Bash, VS Code</p>
              <p><span className="font-bold">Certifications:</span> Introduction to Data Science and Artificial Intelligence (Infosys Springboard), Cloud Computing (NPTEL)</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
