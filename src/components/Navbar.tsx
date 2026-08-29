import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  User,
  Code2,
  Layers,
  Briefcase,
  Mail,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Props {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<Props> = ({ 
  onOpenResume, 
  activeSection 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 bg-[#0A192F] text-slate-100 ${
        scrolled 
          ? 'shadow-lg shadow-[#0A192F]/40 border-b border-slate-800/80 py-3.5' 
          : 'border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Monogram & Name */}
        <a 
          href="#about" 
          id="nav-brand-logo"
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#112240] border border-teal-500/40 text-teal-400 font-serif font-bold text-sm shadow-inner group-hover:border-teal-400 transition-colors">
            GB
          </div>

          <div className="flex flex-col">
            <span className="text-base font-bold text-slate-100 group-hover:text-teal-400 transition-colors font-serif tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-slate-400 font-sans tracking-wide">
              {PERSONAL_INFO.title}
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const sectionKey = item.href.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={item.label}
                id={`nav-link-${item.label.toLowerCase()}`}
                href={item.href}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-teal-400 font-semibold bg-[#112240]'
                    : 'text-slate-300 hover:text-white hover:bg-[#112240]/60'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Direct Actions (Download Resume CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="nav-link-contact-quick"
            href="#contact"
            className="text-xs font-medium text-slate-300 hover:text-teal-400 px-3 py-1.5 transition-colors"
          >
            Get in Touch
          </a>

          <button
            id="nav-btn-resume"
            type="button"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md bg-teal-600 hover:bg-teal-500 text-white shadow-sm transition-all cursor-pointer font-sans"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="nav-btn-resume-mobile-direct"
            type="button"
            onClick={onOpenResume}
            className="px-3 py-1.5 text-xs font-semibold rounded bg-teal-600 text-white cursor-pointer"
          >
            Resume
          </button>
          <button
            id="nav-btn-mobile-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#112240] border border-slate-700 text-slate-300"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 bg-[#0A192F] border-t border-slate-800 space-y-2 text-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-300 hover:text-teal-400 hover:bg-[#112240]"
            >
              <span>{item.label}</span>
            </a>
          ))}

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-teal-600 text-white text-xs font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>View / Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
