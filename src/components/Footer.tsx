import React from 'react';
import { PenTool, Heart, ArrowUp, ExternalLink, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`pt-16 pb-10 border-t transition-colors duration-300 relative ${
      darkMode ? 'bg-[#1E1F24] border-white/10 text-white' : 'bg-slate-900 border-slate-800 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="flex items-center gap-3 mb-4 group">
              <div className="w-16 h-16 rounded-xl bg-gradient-custom p-[2px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <div className={`w-full h-full rounded-[100px] flex items-center justify-center ${darkMode ? 'bg-[#2B2D33]' : 'bg-white'}`}>
                  <img src="/Public/images/logo.png" alt="Zakir Studio Logo" className="w-12 h-12 object-contain group-hover:rotate-12 transition-transform" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-[20px] tracking-tight flex items-center gap-1">
                ZAK2009<span className="text-gradient">GraphicsStudio</span>
              </span>
            </a>

            <p className="text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed mb-6">
              Modern Graphic Design & UI/UX Portfolio of {DESIGNER_INFO.name}. High-converting commercial artwork, promotional flyers, and brand identity.
            </p>

            <div className="flex flex-col gap-2 text-xs text-gray-300 font-mono">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{DESIGNER_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{DESIGNER_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-cyan-400 mb-4">
              Navigation Tabs
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(link.name);
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-cyan-500 text-xs">▹</span>
                    <span>{link.name} {link.name === 'Gallery' && '(Gallary)'}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Social Profiles */}
          <div className="lg:col-span-4">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-purple-400 mb-4">
              Official Profiles & Socials
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-xs">
              <a
                href={DESIGNER_INFO.links.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500 text-gray-300 hover:text-white flex items-center justify-between transition-all"
              >
                <span>🎨 Behance Portfolio (@mrzakzak2009)</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              </a>

              <a
                href={DESIGNER_INFO.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-pink-600/20 border border-white/10 hover:border-pink-500 text-gray-300 hover:text-white flex items-center justify-between transition-all"
              >
                <span>📸 Instagram Studio (@zak2009graphicsstudio)</span>
                <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
              </a>

              <a
                href={DESIGNER_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500 text-gray-300 hover:text-white flex items-center justify-between transition-all"
              >
                <span>💼 LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              </a>

              <a
                href={DESIGNER_INFO.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-sky-600/20 border border-white/10 hover:border-sky-500 text-gray-300 hover:text-white flex items-center justify-between transition-all"
              >
                <span>🌐 Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="flex items-center gap-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Graphic Designer Portfolio.</span>
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-gray-500">+92 318 2619135 • zak2009graphicsstudio</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-400 transition-colors flex items-center gap-1.5 font-bold"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
