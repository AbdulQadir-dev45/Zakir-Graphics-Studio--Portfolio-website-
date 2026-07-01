import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('Home');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Promotional Flyers');

  // Handle intersection observer or active tab updates on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    setActiveTab('Contact');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string, tabName: string) => {
    setActiveTab(tabName);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen selection:bg-cyan-500 selection:text-black transition-colors duration-300 ${
      darkMode ? 'bg-[#2B2D33] text-white dark' : 'bg-[#F8FAFC] text-slate-900'
    }`}>
      {/* Top Floating Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Page Layout Sections */}
      <main>
        <Hero
          darkMode={darkMode}
          onExploreClick={() => scrollToSection('projects', 'Projects')}
          onContactClick={() => scrollToSection('contact', 'Contact')}
        />

        <About
          darkMode={darkMode}
        />

        <Services
          darkMode={darkMode}
          onSelectService={handleSelectServiceFromCard}
        />

        <Projects
          darkMode={darkMode}
        />

        <Gallery
          darkMode={darkMode}
        />

        <Contact
          darkMode={darkMode}
          preselectedService={selectedServiceForContact}
        />
      </main>

      {/* Global Studio Footer */}
      <Footer
        darkMode={darkMode}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
