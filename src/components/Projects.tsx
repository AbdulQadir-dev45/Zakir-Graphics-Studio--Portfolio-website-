import React, { useState } from 'react';
import { Search, ExternalLink, Eye, Heart, Layers, X, MessageCircle, FolderOpen, Sparkles } from 'lucide-react';
import { PROJECTS_DATA, DESIGNER_INFO } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All','Logo Design', 'Flyers & Banners', 'Business Cards', 'Social Media'];

  const filteredProjects = PROJECTS_DATA.filter((proj: Project) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className={`py-24 transition-colors duration-300 relative ${
      darkMode ? 'bg-[#1E1F24]' : 'bg-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <FolderOpen className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            My Projects <br className="hidden sm:block" />
            <span className="text-gradient">Portfolio Masterpieces</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400 font-light' : 'text-slate-600'}`}>
            Featuring promotional flyers, gym ads, bakery posters, corporate event banners, and vector monograms.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-custom text-white shadow-lg shadow-cyan-500/20 scale-105'
                    : darkMode
                      ? 'bg-[#2B2D33] text-gray-300 hover:bg-white/10 border border-white/5'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search flyers, tech, food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 rounded-2xl text-sm border focus:outline-none transition-all ${
                darkMode
                  ? 'bg-[#2B2D33] border-white/10 text-white placeholder-gray-500 focus:border-cyan-400'
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500 shadow-sm'
              }`}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <FolderOpen className="w-12 h-12 text-gray-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="text-gray-500 text-sm">Try choosing a different category or clearing your search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: Project) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className={`group cursor-pointer rounded-3xl border transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-2 hover:shadow-2xl ${
                  darkMode
                    ? 'bg-[#2B2D33] border-white/10 hover:border-cyan-400/50 hover:shadow-cyan-500/10'
                    : 'bg-white border-slate-200 hover:border-cyan-500 hover:shadow-xl'
                }`}
              >
                {/* Thumbnail Preview Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-cyan-300 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                    </span>
                    <p className="text-white text-xs line-clamp-2 mb-3">{project.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-cyan-500 text-black text-xs font-bold rounded-full">
                        View Artwork Details
                      </span>
                    </div>
                  </div>

                  {/* Top Right Likes pill */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border border-white/10">
                    <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                    <span>{project.likes}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between text-xs text-cyan-400 font-semibold mb-2">
                      <span className="text-gray-500">{project.year}</span>
                    </div>
                    <h3 className={`font-heading font-extrabold text-xl tracking-tight mb-3 group-hover:text-cyan-400 transition-colors ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {project.title}
                    </h3>
                  </div>

                  {/* Tools & Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-4 mt-4 border-t border-white/5">
                    {project.tools.map((t, idx) => (
                      <span key={idx} className={`px-2.5 py-1 rounded-lg text-[11px] font-bold font-mono ${
                        darkMode ? 'bg-[#1E1F24] text-cyan-300' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {t}
                      </span>
                    ))}
                    {project.tags.slice(0, 2).map((tg, i) => (
                      <span key={i} className="text-[11px] text-gray-400 font-medium px-2 py-1">
                        #{tg}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-lg animate-fadeIn">
          <div className={`relative w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border ${
            darkMode ? 'bg-[#2B2D33] border-white/15' : 'bg-white border-slate-300'
          }`}>
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image Showcase */}
            <div className="md:w-3/5 bg-black relative flex items-center justify-center min-h-[300px] md:min-h-[500px]">
              <img
                src={activeModalProject.imageUrl}
                alt={activeModalProject.title}
                className="max-h-[80vh] w-full object-contain"
              />
            </div>

            {/* Right Details Panel */}
            <div className="md:w-2/5 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-extrabold text-cyan-400 tracking-widest block mb-2">
                  {activeModalProject.category}
                </span>
                <h3 className={`font-heading font-black text-2xl mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {activeModalProject.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-6 font-mono">
                  <span>Year: {activeModalProject.year}</span>
                </div>

                <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">Project Overview:</h4>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-300 font-light' : 'text-slate-600'}`}>
                  {activeModalProject.description}
                </p>

                <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">Design Software & Tools:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeModalProject.tools.map(t => (
                    <span key={t} className="px-3 py-1.5 rounded-xl bg-gradient-custom text-white text-xs font-bold shadow-md">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 py-4 border-y border-white/10 text-xs text-gray-400 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-cyan-400" />
                    <span>{activeModalProject.views} Views</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-rose-400" />
                    <span>{activeModalProject.likes} Appreciations</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons inside modal */}
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href={`https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=Hi%20Zakir!%20I%20love%20your%20project:%20"${encodeURIComponent(activeModalProject.title)}".%20Can%20you%20design%20something%20similar%20for%20me?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Order Similar Design (WhatsApp)</span>
                </a>

                {activeModalProject.behanceUrl && (
                  <a
                    href={activeModalProject.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-6 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 transition-colors ${
                      darkMode ? 'border-white/15 hover:bg-white/5 text-gray-300' : 'border-slate-300 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span>View on Behance</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>

          </div>
        </div>
        )}

        <div className="text-center mt-16 px-6 py-10 rounded-3xl border transition-colors duration-300 flex flex-col items-center justify-center gap-4 ${
          darkMode ? 'bg-[#1E1F24] border-white/10' : 'bg-slate-100 border-slate-300'
        }">
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-slate-600' } font-extrabold`}>
            Want to see more high-converting flyers, banners, Logos and branding inspirations? Visit the gallery section.
          </p>
          <a
            href="#gallery"
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-custom hover:opacity-95 text-white hover:from-cyan-400 hover:to-teal-400 text-white font-extrabold text-sm shadow-lg shadow-cyan-500/25 transition-transform hover:scale-105"
          >
            <span>Visit Gallery Section</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

    </section>
  );
};
