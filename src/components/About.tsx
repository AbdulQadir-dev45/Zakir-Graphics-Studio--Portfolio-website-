import React from 'react';
import { User, Award, Layers, ExternalLink, Mail, Phone, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-24 transition-colors duration-300 relative overflow-hidden ${
      darkMode ? 'bg-[#1E1F24]' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <User className="w-3.5 h-3.5" />
            <span>About The Designer</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Passionate About Crafting <br className="hidden sm:block" />
            <span className="text-gradient">Visual Excellence</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400 font-light' : 'text-slate-600'}`}>
            Blending artistic creativity with conversion psychology to elevate digital brands across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Designer Card & Social Profiles */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className={`p-8 rounded-3xl border transition-all relative overflow-hidden ${
              darkMode ? 'bg-[#2B2D33] border-white/10 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-500/10 via-purple-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="flex items-center gap-5 mb-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-custom p-1 shadow-lg shadow-purple-500/20 flex-shrink-0">
                  <img
                    src="/Public/images/designer img.jpeg"
                    alt={DESIGNER_INFO.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-2xl tracking-tight">{DESIGNER_INFO.name}</h3>
                  <span className="text-cyan-400 font-semibold text-sm block mb-1">Graphic Studio Principal</span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Verified Top Designer</span>
                  </div>
                </div>
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                "My mission is simple: design graphics that not only look visually stunning on screen and print, but directly communicate brand trust and drive measurable business results."
              </p>

              {/* Contact Direct Box */}
              <div className={`p-4 rounded-2xl border flex flex-col gap-3 text-xs sm:text-sm mb-6 ${
                darkMode ? 'bg-[#1E1F24] border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <a href={`mailto:${DESIGNER_INFO.email}`} className="hover:text-cyan-400 font-medium transition-colors break-all">
                    {DESIGNER_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <a href={`tel:${DESIGNER_INFO.phone}`} className="hover:text-purple-400 font-medium transition-colors">
                    {DESIGNER_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className={darkMode ? 'text-gray-300' : 'text-slate-600'}>{DESIGNER_INFO.location}</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <span className={`text-xs font-bold uppercase tracking-wider block mb-3 ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                  Connect With Me Online:
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={DESIGNER_INFO.links.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2.5 rounded-xl border flex items-center justify-between text-xs font-bold transition-all ${
                      darkMode
                        ? 'bg-white/5 border-white/10 hover:bg-blue-600/20 hover:border-blue-500 text-white'
                        : 'bg-slate-100 border-slate-200 hover:bg-blue-50 hover:border-blue-400 text-slate-800'
                    }`}
                  >
                    <span>Behance Portfolio</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                  </a>

                  <a
                    href={DESIGNER_INFO.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2.5 rounded-xl border flex items-center justify-between text-xs font-bold transition-all ${
                      darkMode
                        ? 'bg-white/5 border-white/10 hover:bg-pink-600/20 hover:border-pink-500 text-white'
                        : 'bg-slate-100 border-slate-200 hover:bg-pink-50 hover:border-pink-400 text-slate-800'
                    }`}
                  >
                    <span>Instagram Studio</span>
                    <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
                  </a>

                  <a
                    href={DESIGNER_INFO.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2.5 rounded-xl border flex items-center justify-between text-xs font-bold transition-all ${
                      darkMode
                        ? 'bg-white/5 border-white/10 hover:bg-sky-600/20 hover:border-sky-500 text-white'
                        : 'bg-slate-100 border-slate-200 hover:bg-sky-50 hover:border-sky-400 text-slate-800'
                    }`}
                  >
                    <span>Facebook Page</span>
                    <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                  </a>

                  <a
                    href={DESIGNER_INFO.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2.5 rounded-xl border flex items-center justify-between text-xs font-bold transition-all ${
                      darkMode
                        ? 'bg-white/5 border-white/10 hover:bg-indigo-600/20 hover:border-indigo-500 text-white'
                        : 'bg-slate-100 border-slate-200 hover:bg-indigo-50 hover:border-indigo-400 text-slate-800'
                    }`}
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Skills Bars & Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className={`p-8 sm:p-10 rounded-3xl border ${
              darkMode ? 'bg-[#2B2D33] border-white/10 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              <h3 className="font-heading font-extrabold text-2xl tracking-tight mb-2">Professional Skill Mastery</h3>
              <p className={`text-sm mb-8 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                Continuous iteration and refinement across modern graphic tools and industry design standards.
              </p>

              {/* Progress Bars */}
              <div className="flex flex-col gap-6">
                {DESIGNER_INFO.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center text-sm font-bold mb-2">
                      <span className={darkMode ? 'text-white' : 'text-slate-800'}>{skill.name}</span>
                      <span className="font-mono text-cyan-400 font-extrabold">{skill.level}%</span>
                    </div>
                    <div className={`w-full h-3 rounded-full overflow-hidden ${darkMode ? 'bg-[#1E1F24]' : 'bg-slate-200'}`}>
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}, #8B5CF6)`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 pt-8 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className={`font-bold text-sm block ${darkMode ? 'text-white' : 'text-slate-800'}`}>100% Original Vector Art</span>
                    <span className="text-xs text-gray-400">Layered source files included with every deliverable.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className={`font-bold text-sm block ${darkMode ? 'text-white' : 'text-slate-800'}`}>Fast Turnaround SLA</span>
                    <span className="text-xs text-gray-400">Prompt 24-48h ad banner & promo flyer deliveries.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
