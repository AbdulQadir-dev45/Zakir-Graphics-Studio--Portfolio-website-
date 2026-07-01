import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, PenTool, Sparkles, MessageCircle } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  activeTab,
  setActiveTab
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (name: string, href: string) => {
    setActiveTab(name);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[#1E1F24]/85 backdrop-blur-md border-b border-white/10 shadow-xl py-3'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200 shadow-lg py-3'
          : darkMode
            ? 'bg-transparent py-5'
            : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('Home', '#home');
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-custom p-[2px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className={`w-full h-full rounded-[100px] flex items-center justify-center ${darkMode ? 'bg-[#2B2D33]' : 'bg-white'}`}>
              <img src="/images/logo.png" alt="Zakir Studio Logo" className="w-12 h-12 object-contain group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div>
            <span className="font-heading font-extrabold text-[20px] tracking-tight flex items-center gap-1">
              ZAK2009<span className="text-gradient">GraphicsStudio</span>
            </span>
            <span className={`block text-[12px] uppercase tracking-widest font-semibold ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
              UI/UX & Graphics
            </span>
          </div>
        </a>

        {/* Desktop Nav Tabs */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-inner">
          {navItems.map((item) => {
            const isActive = activeTab.toLowerCase() === item.name.toLowerCase();
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.name, item.href);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? 'text-white bg-gradient-custom shadow-md shadow-cyan-500/25 font-semibold'
                    : darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-white/10'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {item.name}
                {item.name === 'Gallery' && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Dark Mode Toggle & WhatsApp CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className={`p-2.5 rounded-xl border transition-all duration-200 ${
              darkMode
                ? 'bg-white/5 border-white/10 text-cyan-400 hover:bg-white/10 hover:border-cyan-400/40 shadow-inner shadow-cyan-500/10'
                : 'bg-slate-100 border-slate-200 text-amber-500 hover:bg-slate-200 shadow-sm'
            }`}
          >
            {darkMode ? <Sun className="w-5 h-5 animate-spin-slow" /> : <Moon className="w-5 h-5" />}
          </button>

          <a
            href={`https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=Hi%20Zakir!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20graphic%20design%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-500 animate-bounce" />
            <span>WhatsApp Chat</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-xl border ${
              darkMode ? 'bg-white/10 border-white/10 text-cyan-400' : 'bg-slate-100 border-slate-300 text-amber-500'
            }`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl border ${
              darkMode ? 'bg-white/10 border-white/10 text-white' : 'bg-slate-100 border-slate-300 text-slate-800'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-4 pt-4 pb-6 mt-3 border-b animate-fadeIn ${
          darkMode ? 'bg-[#1E1F24] border-white/10 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeTab.toLowerCase() === item.name.toLowerCase();
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.name, item.href);
                  }}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'text-white bg-gradient-custom font-semibold'
                      : darkMode
                        ? 'text-gray-300 hover:bg-white/5'
                        : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.name} {item.name === 'Gallery' && '(Gallary)'}</span>
                  {isActive && <Sparkles className="w-4 h-4" />}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-white/10">
              <a
                href={`https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=Hi%20Zakir!%20Let's%20work%20together.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp ({DESIGNER_INFO.phone})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
