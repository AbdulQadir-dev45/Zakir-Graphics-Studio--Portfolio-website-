import React, { useState } from 'react';
import { Eye, Heart, Sparkles, Image as ImageIcon, ZoomIn, X, ExternalLink, MessageCircle } from 'lucide-react';
import { PROJECTS_DATA, DESIGNER_INFO } from '../data/portfolioData';

interface GalleryProps {
  darkMode: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({ darkMode }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Gallery items derived from projects + high res creative flyers
  const galleryItems = [
    ...PROJECTS_DATA.map((p, i) => ({
      id: `gal-${p.id}`,
      title: p.title,
      category: p.category,
      imageUrl: p.imageUrl,
      likes: p.likes + 20,
    })),
    // {
    //   id: 'gal-extra-1',
    //   title: 'Artisan Coffee Bakery Social Ad',
    //   category: 'Social Media',
    //   imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    //   likes: 312
    // },
    // {
    //   id: 'gal-extra-2',
    //   title: 'Neon Cyberpunk Gaming Tournament Promo',
    //   category: 'Flyers & Banners',
    //   imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    //   likes: 450
    // }
  ];

  return (
    <section id="gallery" className={`py-24 transition-colors duration-300 relative ${
      darkMode ? 'bg-[#2B2D33]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Creative Showcase (Gallary)</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Visual Inspiration & <br className="hidden sm:block" />
            <span className="text-gradient">Studio Artwork Wall</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400 font-light' : 'text-slate-600'}`}>
            Explore our curated masonry showcase of high-resolution promotional posters, digital paintings, and brand mockups.
          </p>
        </div>

        {/* Masonry / Bento Grid Showcase */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className={`group relative break-inside-avoid rounded-3xl overflow-hidden cursor-pointer border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${
                darkMode ? 'bg-[#1E1F24] border-white/10 shadow-lg' : 'bg-slate-50 border-slate-200 shadow-md'
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-cyan-300 text-[10px] font-bold uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <h4 className="text-white font-heading font-extrabold text-base mb-2 line-clamp-1">
                  {item.title}
                </h4>

                <div className="flex items-center justify-between text-xs text-gray-300 pt-2 border-t border-white/20">
                  <div className="flex items-center gap-1 text-rose-400 font-bold">
                    <Heart className="w-3.5 h-3.5 fill-rose-400" />
                    <span>{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-cyan-400 font-bold">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Quick Expand</span>
                  </div>
                </div>
              </div>

              {/* Top right floating pill */}
              <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-white font-semibold flex items-center gap-1 border border-white/15 opacity-80 group-hover:opacity-0 transition-opacity">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>HD</span>
              </div>
            </div>
          ))}
        </div>

        {/* Behance Follow Banner */}
        <div className={`mt-16 p-8 rounded-3xl border text-center flex flex-col items-center justify-center gap-4 ${
          darkMode ? 'bg-[#1E1F24] border-white/10' : 'bg-slate-100 border-slate-300'
        }`}>
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-heading font-black text-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
            Be
          </div>
          <h3 className="font-heading font-extrabold text-2xl tracking-tight">Want to see more high-converting flyers?</h3>
          <p className={`text-sm max-w-lg ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
            Follow Muhammad Zakir Hussain on Behance to stay updated with daily promotional ad releases and branding inspirations.
          </p>
          <a
            href={DESIGNER_INFO.links.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm flex items-center gap-2 shadow-xl shadow-blue-600/25 transition-transform hover:scale-105"
          >
            <span>Visit Official Behance Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Lightbox Viewer */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            <img
              src={galleryItems[lightboxIndex].imageUrl}
              alt={galleryItems[lightboxIndex].title}
              className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            
            <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
              <div>
                <span className="text-xs text-cyan-400 font-bold uppercase tracking-widest">{galleryItems[lightboxIndex].category}</span>
                <h4 className="font-heading font-bold text-lg">{galleryItems[lightboxIndex].title}</h4>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=Hi%20Zakir!%20I%20love%20the%20artwork:%20"${encodeURIComponent(galleryItems[lightboxIndex].title)}"%20from%20your%20Gallery.%20Can%20we%20discuss%20a%20project?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold text-xs flex items-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Request This Design</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
