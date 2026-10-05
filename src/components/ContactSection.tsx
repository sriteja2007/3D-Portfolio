import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Download, ArrowUp, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('asriteja2387@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+918309581879');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Sender: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:asriteja2387@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const scrollToTop = () => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  05 / CONTACT &amp; DISPATCH
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    INITIALIZE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    TRANSMISSION.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Available for software engineering internships, AI/ML collaborative research, and full-stack product building. Connect directly through any verified node below.
              </p>

              {/* Direct Verification Channels */}
              <div className="space-y-3 font-mono text-xs mb-8">
                {/* Email Box */}
                <div className="p-3.5 rounded border border-[#8C6D4F]/30 bg-[#0C0A08] flex items-center justify-between group hover:border-[#D4AF37]/60 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-[#8C6D4F] block">DIRECT EMAIL</span>
                      <a href="mailto:asriteja2387@gmail.com" className="text-[#E8DFD8] group-hover:text-white transition-colors">
                        asriteja2387@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-[#8C6D4F] hover:text-[#D4AF37] rounded transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-3.5 rounded border border-[#8C6D4F]/30 bg-[#0C0A08] flex items-center justify-between group hover:border-[#D4AF37]/60 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-[#8C6D4F] block">PHONE // CELL</span>
                      <a href="tel:+918309581879" className="text-[#E8DFD8] group-hover:text-white transition-colors">
                        +91 83095 81879
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 text-[#8C6D4F] hover:text-[#D4AF37] rounded transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location & Status */}
                <div className="p-3.5 rounded border border-[#8C6D4F]/30 bg-[#0C0A08] flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-[#8C6D4F] block">LOCATION</span>
                      <span className="text-[#E8DFD8]">Vizianagaram, AP, India</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#D4AF37] bg-[#16120E] px-2 py-0.5 rounded border border-[#8C6D4F]/30">
                    MVGR CSE (AIML)
                  </span>
                </div>
              </div>

              {/* Social Links & Resume CTA */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/sriteja2007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded border border-[#8C6D4F]/40 bg-[#120F0C] hover:border-[#D4AF37] text-xs font-mono text-[#E8DFD8] hover:text-white transition-all shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
                >
                  <GithubIcon className="w-4 h-4 text-[#D4AF37]" />
                  <span>GITHUB</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/appari-sri-teja-ba754a348"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded border border-[#8C6D4F]/40 bg-[#120F0C] hover:border-[#D4AF37] text-xs font-mono text-[#E8DFD8] hover:text-white transition-all shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#D4AF37]" />
                  <span>LINKEDIN</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded border border-[#D4AF37]/60 bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 text-xs font-mono text-[#F7E7C4] hover:text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                >
                  <Download className="w-4 h-4 text-[#D4AF37]" />
                  <span>CURRICULUM VITAE</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37] text-[#D4AF37] text-base shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  ✓
                </div>
                <h3 className="text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  TRANSMISSION LAUNCHED
                </h3>
                <p className="text-xs text-[#A8988B] font-light max-w-sm mx-auto" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Your email client has been dispatched with the payload. Appari Sri Teja will respond shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-4 py-2 border border-[#8C6D4F]/40 text-xs font-mono uppercase text-[#D4AF37] hover:border-[#D4AF37] transition-all rounded cursor-pointer"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // SENDER NAME
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // CONTACT CHANNEL
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                    // PAYLOAD / INQUIRY DETAILS
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter project specifications, internship opportunity, or collaboration details..."
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center space-x-2 cursor-pointer"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>EXECUTE DISPATCH ↗</span>
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
              APPARI SRI TEJA // 2026 EDITION
            </span>
            <span className="hidden sm:inline text-[#8C6D4F]">•</span>
            <span className="text-[10px] font-mono text-[#8C6D4F]">
              B.Tech CSE (AIML) @ MVGR College of Engineering
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-mono text-[#8C6D4F]">
              ENGINEERED WITH REACT &amp; FRAMER MOTION
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded border border-[#8C6D4F]/30 hover:border-[#D4AF37] text-[#8C6D4F] hover:text-[#D4AF37] transition-colors cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;