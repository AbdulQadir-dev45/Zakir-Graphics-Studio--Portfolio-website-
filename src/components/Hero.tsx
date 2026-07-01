import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, MessageSquare, Layers, Award, Eye } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface HeroProps {
  darkMode: boolean;
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onExploreClick, onContactClick }) => {
  const floatingTools = [
    { name: "Photoshop", icon: "Ps", color: "#31A8FF", desc: "Photo & Flyers" },
    { name: "Illustrator", icon: "Ai", color: "#FF9A00", desc: "Vector Logos" },
    { name: "Figma", icon: "Fg", color: "#00CE53", desc: "UI/UX Apps" },
    { name: "Canva", icon: "Cv", color: "#00C4CC", desc: "Social Media" },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-purple-500/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/15 rounded-full blur-[90px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Status Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 border ${
              darkMode 
                ? 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300 shadow-lg shadow-cyan-500/10' 
                : 'bg-cyan-50 border-cyan-200 text-cyan-800 shadow-sm'
            }`}>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Available for Freelance & Studio Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4">
              Hello, I'm <br className="hidden sm:block" />
              <span className="text-gradient drop-shadow-sm">{DESIGNER_INFO.name}</span>
            </h1>

            {/* Subtitle Roles */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-bold mb-6 font-display">
              <span className={darkMode ? 'text-white' : 'text-slate-800'}>Graphic Designer</span>
              <span className="text-cyan-400 font-extrabold">•</span>
              <span className="text-gradient">UI/UX Designer</span>
              <span className="text-purple-400 font-extrabold">•</span>
              <span className={darkMode ? 'text-gray-300' : 'text-slate-600'}>Brand Identity</span>
            </div>

            {/* Bio excerpt */}
            <p className={`text-base sm:text-lg max-w-2xl leading-relaxed mb-8 ${
              darkMode ? 'text-gray-300 font-light' : 'text-slate-600'
            }`}>
              {DESIGNER_INFO.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreClick}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-custom hover:opacity-95 text-white font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <span>View Portfolio (20+)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border font-bold text-base transition-all ${
                  darkMode
                    ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 shadow-lg shadow-white/5'
                    : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50 shadow-md'
                }`}
              >
                <MessageSquare className="w-5 h-5 text-purple-400" />
                <span>Hire Me Now</span>
              </button>
            </div>

            {/* Direct Quick Info Pills */}
            <div className={`mt-10 pt-6 border-t w-full grid grid-cols-2 sm:grid-cols-4 gap-4 ${
              darkMode ? 'border-white/10' : 'border-slate-200'
            }`}>
              {DESIGNER_INFO.stats.map((st, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-heading text-2xl sm:text-3xl font-black text-gradient">{st.value}</span>
                  <span className={`text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>{st.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Visual Artwork & Software Grid */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            
            {/* Decorative Card Outer Frame */}
            <div className="relative w-full max-w-lg aspect-square rounded-3xl p-4 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-white/10 backdrop-blur-sm shadow-2xl">
              
              {/* Main Artwork Showcase Box */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80"
                  alt="Zakir Hussain Graphic Art Showcase"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2D33] via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-cyan-300 font-bold block">Master Artwork</span>
                    <h3 className="text-white font-heading font-extrabold text-xl">Pen Tool Monogram "Z"</h3>
                  </div>
                </div>
              </div>

              {/* Floating Software Badges */}
              <div className="absolute -top-6 -left-6 grid grid-cols-2 gap-3 z-20 pointer-events-none sm:pointer-events-auto">
                {floatingTools.slice(0, 2).map((t) => (
                  <div key={t.name} className={`p-3.5 rounded-2xl border backdrop-blur-md shadow-xl flex items-center gap-3 ${
                    darkMode ? 'bg-[#1E1F24]/90 border-white/15' : 'bg-white/95 border-slate-200'
                  }`}>
                    <div className="w-10 h-10 rounded-xl font-heading font-black text-white flex items-center justify-center shadow-md text-lg" style={{ backgroundColor: t.color }}>
                      {t.icon}
                    </div>
                    <div>
                      <span className={`block font-bold text-xs ${darkMode ? 'text-white' : 'text-slate-800'}`}>{t.name}</span>
                      <span className="block text-[10px] text-gray-400 font-medium">{t.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-3 z-20 pointer-events-none sm:pointer-events-auto">
                {floatingTools.slice(2, 4).map((t) => (
                  <div key={t.name} className={`p-3.5 rounded-2xl border backdrop-blur-md shadow-xl flex items-center gap-3 ${
                    darkMode ? 'bg-[#1E1F24]/90 border-white/15' : 'bg-white/95 border-slate-200'
                  }`}>
                    <div className="w-10 h-10 rounded-xl font-heading font-black text-white flex items-center justify-center shadow-md text-lg" style={{ backgroundColor: t.color }}>
                      {t.icon}
                    </div>
                    <div>
                      <span className={`block font-bold text-xs ${darkMode ? 'text-white' : 'text-slate-800'}`}>{t.name}</span>
                      <span className="block text-[10px] text-gray-400 font-medium">{t.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Trust Seal */}
              <div className="absolute top-4 right-4 bg-emerald-500/90 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-sm z-20">
                <Award className="w-3.5 h-3.5" />
                <span>Top Rated</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
