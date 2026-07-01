import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, Sparkles, ExternalLink, Linkedin, Instagram, Facebook } from 'lucide-react';
import { DESIGNER_INFO, SERVICES_DATA } from '../data/portfolioData';
import { ContactFormData } from '../types';

interface ContactProps {
  darkMode: boolean;
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ darkMode, preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: preselectedService || 'Promotional Flyers',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Generate formatted inquiry text
  const generateMessageBody = () => {
    return `*New Graphic Studio Inquiry*\n\n` +
           `*Name:* ${formData.name}\n` +
           `*Email:* ${formData.email}\n` +
           `*Phone:* ${formData.phone}\n` +
           `*Service Needed:* ${formData.serviceType}\n` +
           `*Subject:* ${formData.subject}\n\n` +
           `*Message:*\n${formData.message}`;
  };

  const handleDualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const encoded = encodeURIComponent(generateMessageBody());
    return `https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=${encoded}`;
  };

  const getEmailLink = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.subject || formData.serviceType}`);
    const body = encodeURIComponent(
      `Hello Zakir Hussain,\n\nNew inquiry submitted from your portfolio:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service Needed: ${formData.serviceType}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    return `mailto:${DESIGNER_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className={`py-24 transition-colors duration-300 relative ${
      darkMode ? 'bg-[#1E1F24]' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Let's Start Creating <br className="hidden sm:block" />
            <span className="text-gradient">Your Next Project</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400 font-light' : 'text-slate-600'}`}>
            Have a project in mind or need urgent flyers? Send a message directly to Zakir's WhatsApp number & Email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Direct Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <h3 className="font-heading font-extrabold text-2xl mb-4">Direct Studio Channels</h3>
              <p className={`text-sm mb-8 ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                Contact form submit karanay par message direct Zakir Hussain kay WhatsApp number (+92 318 2619135) or Email par send hojayega.
              </p>

              {/* Contact Direct Items */}
              <div className="flex flex-col gap-5">
                
                {/* Phone & WhatsApp */}
                <a
                  href={`https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=Hi%20Zakir!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 rounded-3xl border flex items-center gap-5 transition-all group ${
                    darkMode
                      ? 'bg-[#2B2D33] border-white/10 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10'
                      : 'bg-white border-slate-200 hover:border-emerald-500 shadow-md'
                  }`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <MessageCircle className="w-7 h-7 fill-emerald-500 text-emerald-500" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block">WhatsApp & Call</span>
                    <strong className={`font-heading text-lg sm:text-xl font-extrabold block group-hover:text-emerald-400 transition-colors ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {DESIGNER_INFO.phone}
                    </strong>
                    <span className="text-xs text-emerald-400 font-medium flex items-center gap-1 mt-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>Online Now • Instant Reply</span>
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${DESIGNER_INFO.email}`}
                  className={`p-6 rounded-3xl border flex items-center gap-5 transition-all group ${
                    darkMode
                      ? 'bg-[#2B2D33] border-white/10 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10'
                      : 'bg-white border-slate-200 hover:border-cyan-500 shadow-md'
                  }`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block">Official Email Address</span>
                    <strong className={`font-heading text-base sm:text-lg font-extrabold block truncate group-hover:text-cyan-400 transition-colors ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {DESIGNER_INFO.email}
                    </strong>
                    <span className="text-xs text-gray-400 block mt-1">zak2009graphicsstudio</span>
                  </div>
                </a>

                {/* Location */}
                <div className={`p-6 rounded-3xl border flex items-center gap-5 ${
                  darkMode ? 'bg-[#2B2D33] border-white/10' : 'bg-white border-slate-200 shadow-md'
                }`}>
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block">Studio Headquarters</span>
                    <strong className={`font-heading text-lg font-extrabold block ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {DESIGNER_INFO.location}
                    </strong>
                    <span className="text-xs text-gray-400 block mt-1">Available for worldwide remote clients</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Network Profiles */}
            <div className={`p-6 rounded-3xl border ${darkMode ? 'bg-[#2B2D33] border-white/10' : 'bg-white border-slate-200 shadow-md'}`}>
              <span className="text-xs font-bold uppercase tracking-wider block text-gray-400 mb-4">Follow Studio Networks:</span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={DESIGNER_INFO.links.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-transform hover:scale-105"
                >
                  <span>Behance</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={DESIGNER_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-transform hover:scale-105"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={DESIGNER_INFO.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-bold text-xs flex items-center justify-center gap-2 transition-transform hover:scale-105"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Dual Dispatch Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-3xl border relative overflow-hidden ${
              darkMode ? 'bg-[#2B2D33] border-white/10 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-custom"></div>

              {submitted ? (
                <div className="py-12 px-4 text-center animate-fadeIn flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/10">
                    <CheckCircle className="w-10 h-10 animate-bounce" />
                  </div>
                  <h3 className="font-heading font-black text-3xl mb-3 text-gradient">Message Formatted & Ready!</h3>
                  <p className={`text-base max-w-md mx-auto mb-8 ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                    As requested, click below to dispatch your message directly to Zakir's WhatsApp No. ({DESIGNER_INFO.phone}) or Email ({DESIGNER_INFO.email}).
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mb-8">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold text-sm flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/30 transition-transform hover:scale-105"
                    >
                      <MessageCircle className="w-5 h-5 fill-white" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <a
                      href={getEmailLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 px-6 rounded-2xl bg-gradient-custom text-white font-extrabold text-sm flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/30 transition-transform hover:scale-105"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Send via Gmail / Email</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-gray-400 hover:text-white underline underline-offset-4"
                  >
                    Edit message or submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDualSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-heading font-black text-2xl tracking-tight mb-2">Send Studio Inquiry</h3>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                      Fill the form below. Once submitted, your inquiry will be instantly routed to {DESIGNER_INFO.phone} & {DESIGNER_INFO.email}.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-xs uppercase font-extrabold tracking-wider mb-2 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-2xl text-sm border focus:outline-none transition-all ${
                          darkMode
                            ? 'bg-[#1E1F24] border-white/10 text-white focus:border-cyan-400'
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500 focus:bg-white'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs uppercase font-extrabold tracking-wider mb-2 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-2xl text-sm border focus:outline-none transition-all ${
                          darkMode
                            ? 'bg-[#1E1F24] border-white/10 text-white focus:border-cyan-400'
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500 focus:bg-white'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-xs uppercase font-extrabold tracking-wider mb-2 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                        WhatsApp / Phone No.
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 234 567 890"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-2xl text-sm border focus:outline-none transition-all ${
                          darkMode
                            ? 'bg-[#1E1F24] border-white/10 text-white focus:border-cyan-400'
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500 focus:bg-white'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs uppercase font-extrabold tracking-wider mb-2 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                        Service Category
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-2xl text-sm border focus:outline-none transition-all cursor-pointer ${
                          darkMode
                            ? 'bg-[#1E1F24] border-white/10 text-white focus:border-cyan-400'
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500 focus:bg-white'
                        }`}
                      >
                        <option value="Promotional Flyers & Banners">Promotional Flyers & Banners</option>
                        <option value="UI/UX Web & Mobile App Design">UI/UX Web & Mobile App Design</option>
                        <option value="Brand Identity & Logo Design">Brand Identity & Logo Design</option>
                        <option value="Social Media Ad Campaign">Social Media Ad Campaign</option>
                        <option value="Print Packaging & Brochures">Print Packaging & Brochures</option>
                        <option value="Photo Retouch & Manipulation">Photo Retouch & Manipulation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs uppercase font-extrabold tracking-wider mb-2 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                      Subject / Short Title
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="e.g. Urgent Flyer Campaign for Tech Summit 2026"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-2xl text-sm border focus:outline-none transition-all ${
                        darkMode
                          ? 'bg-[#1E1F24] border-white/10 text-white focus:border-cyan-400'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500 focus:bg-white'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs uppercase font-extrabold tracking-wider mb-2 ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}>
                      Project Requirements & Dimensions *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Please describe your graphic design project, preferred colors, deadline, and reference examples..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-2xl text-sm border focus:outline-none transition-all resize-y ${
                        darkMode
                          ? 'bg-[#1E1F24] border-white/10 text-white focus:border-cyan-400'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500 focus:bg-white'
                      }`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-8 rounded-2xl bg-gradient-custom text-white font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer group"
                  >
                    <span>Submit & Route Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                  <p className="text-[11px] text-center text-gray-500">
                    🔒 Your information is confidential. Directly routed to Zakir Hussain (+92 318 2619135).
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
