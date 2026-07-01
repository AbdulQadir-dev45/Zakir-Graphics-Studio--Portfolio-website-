import React from 'react';
import { Layout, Smartphone, Feather, Printer, Package, Palette, ArrowRight, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  darkMode: boolean;
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ darkMode, onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Feather': return <Feather className="w-6 h-6" />;
      case 'Printer': return <Printer className="w-6 h-6" />;
      case 'Package': return <Package className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className={`py-24 transition-colors duration-300 ${
      darkMode ? 'bg-[#2B2D33]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Services Designed To <br className="hidden sm:block" />
            <span className="text-gradient">Amplify Your Impact</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400 font-light' : 'text-slate-600'}`}>
            From eye-catching print flyers to seamless digital app interfaces, everything you need under one creative roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv: ServiceItem) => (
            <div
              key={srv.id}
              className={`group p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 relative overflow-hidden ${
                darkMode
                  ? 'bg-[#1E1F24] border-white/10 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10'
                  : 'bg-slate-50 border-slate-200 hover:border-cyan-500 hover:shadow-xl hover:bg-white'
              }`}
            >
              {/* Top accent glow line */}
              <div className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-75 group-hover:opacity-100" style={{ backgroundColor: srv.accentColor }}></div>

              <div>
                {/* Icon & Turnaround */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6" style={{ backgroundColor: srv.accentColor }}>
                    {getServiceIcon(srv.iconName)}
                  </div>

                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    darkMode ? 'bg-white/5 text-gray-300 border border-white/10' : 'bg-slate-200 text-slate-700'
                  }`}>
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{srv.turnaround}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-heading font-extrabold text-2xl tracking-tight mb-3 group-hover:text-cyan-400 transition-colors">
                  {srv.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  {srv.description}
                </p>

                {/* Deliverables checklist */}
                <div className="flex flex-col gap-2 mb-8">
                  <span className={`text-xs uppercase font-bold tracking-wider ${darkMode ? 'text-gray-500' : 'text-slate-400'}`}>Key Deliverables:</span>
                  {srv.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span className={darkMode ? 'text-gray-300 font-medium' : 'text-slate-700 font-medium'}>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(srv.title)}
                className={`w-full py-3 px-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                  darkMode
                    ? 'bg-white/5 border border-white/10 hover:bg-gradient-custom text-white hover:border-transparent shadow-md'
                    : 'bg-slate-200 hover:bg-gradient-custom hover:text-white text-slate-800'
                }`}
              >
                <span>Request {srv.title.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          ))}
        </div>

        {/* Custom Package CTA banner */}
        <div className={`mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-custom text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-cyan-500/20`}>
          <div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight mb-2">Need a Custom Bundle or Monthly Retainer?</h3>
            <p className="text-white/90 text-sm sm:text-base max-w-xl">
              Get dedicated daily design support for your brand, startup, or marketing agency at discounted studio rates.
            </p>
          </div>
          <a
            href="https://wa.me/923098780320?text=Hi%20Zakir!%20I'm%20interested%20in%20a%20monthly%20graphic%20design%20retainer%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-[#2B2D33] hover:bg-[#1E1F24] text-white font-extrabold text-base flex items-center gap-3 shadow-xl flex-shrink-0 transition-transform hover:scale-105"
          >
            <span>Discuss on WhatsApp</span>
            <ArrowRight className="w-5 h-5 text-cyan-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
