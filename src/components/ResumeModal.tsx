import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#0C0A08] border border-[#8C6D4F]/50 rounded-lg shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-[#E8DFD8]"
          >
            {/* Header Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#8C6D4F]/30 bg-[#120F0C]">
              <div className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
                <h3
                  className="text-lg font-semibold tracking-wider text-[#F7E7C4] uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  CURRICULUM VITAE // APPARI SRI TEJA
                </h3>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href="/resume.pdf"
                  download="Appari_Sri_Teja_Resume.pdf"
                  className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono uppercase bg-[#1D1712] border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#E8D7C5] hover:text-white transition-all rounded"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>
                <button
                  onClick={() => window.print()}
                  className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono uppercase bg-[#1D1712] border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#E8D7C5] hover:text-white transition-all rounded cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 text-[#A8988B] hover:text-white hover:bg-[#1D1712] rounded transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Document Content */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-8 font-sans print:p-0">
              
              {/* Personal Header */}
              <div className="border-b border-[#8C6D4F]/30 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1
                    className="text-4xl sm:text-5xl text-white tracking-tight uppercase"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    APPARI SRI TEJA
                  </h1>
                  <p className="text-sm font-medium text-[#D4AF37] tracking-widest uppercase mt-0.5">
                    AI/ML &amp; Full Stack Developer • MVGR College of Engineering
                  </p>
                </div>
                
                <div className="text-xs space-y-1.5 text-[#A8988B] font-mono">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <a href="mailto:asriteja2387@gmail.com" className="hover:text-white transition-colors">
                      asriteja2387@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>+91 83095 81879</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Vizianagaram, AP, India</span>
                  </div>
                  <div className="flex items-center space-x-4 pt-1">
                    <a
                      href="https://github.com/sriteja2007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-[#E8D7C5] hover:text-[#D4AF37]"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>github.com/sriteja2007</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/appari-sri-teja-ba754a348"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-[#E8D7C5] hover:text-[#D4AF37]"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2
                  className="text-2xl text-[#F7E7C4] tracking-wider uppercase mb-3 flex items-center space-x-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="text-[#D4AF37] font-mono text-sm">//</span>
                  <span>EDUCATION</span>
                </h2>
                <div className="p-4 rounded border border-[#8C6D4F]/30 bg-[#120F0C]/60 space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <h3 className="text-sm font-semibold text-white">
                      Maharaj Vijayaram Gajapathi Raj College of Engineering (MVGR), Vizianagaram
                    </h3>
                    <span className="text-xs font-mono text-[#D4AF37]">2024 – 2028 (Expected)</span>
                  </div>
                  <p className="text-xs text-[#C4B5A5]">
                    Bachelor of Technology in <strong className="text-white font-medium">Computer Science and Engineering (AIML)</strong>
                  </p>
                  <div className="flex items-center space-x-3 pt-1">
                    <span className="px-2.5 py-0.5 text-[11px] font-mono bg-[#1D1712] border border-[#8C6D4F]/40 text-[#D4AF37] rounded">
                      Current CGPA: 8.3 / 10
                    </span>
                    <span className="text-xs text-[#8C6D4F]">Class of 2028 • 3rd Year</span>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h2
                  className="text-2xl text-[#F7E7C4] tracking-wider uppercase mb-3 flex items-center space-x-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="text-[#D4AF37] font-mono text-sm">//</span>
                  <span>TECHNICAL SKILLS</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded border border-[#8C6D4F]/30 bg-[#120F0C]/60">
                    <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-1">
                      Programming Languages:
                    </span>
                    <p className="text-xs text-[#E8DFD8]">
                      C, C++, Python, Java, JavaScript, SQL
                    </p>
                  </div>
                  <div className="p-3.5 rounded border border-[#8C6D4F]/30 bg-[#120F0C]/60">
                    <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-1">
                      AI, ML &amp; Computer Vision:
                    </span>
                    <p className="text-xs text-[#E8DFD8]">
                      TensorFlow, PyTorch, Keras, MediaPipe, Scikit-learn, NLTK, Computer Vision, Generative AI, Google Gemini APIs, Pandas, NumPy, Matplotlib
                    </p>
                  </div>
                  <div className="p-3.5 rounded border border-[#8C6D4F]/30 bg-[#120F0C]/60">
                    <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-1">
                      Web &amp; Full Stack:
                    </span>
                    <p className="text-xs text-[#E8DFD8]">
                      React.js, Node.js, Express.js, HTML5, CSS3, Tailwind CSS, REST APIs
                    </p>
                  </div>
                  <div className="p-3.5 rounded border border-[#8C6D4F]/30 bg-[#120F0C]/60">
                    <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-1">
                      Databases &amp; Core Concepts:
                    </span>
                    <p className="text-xs text-[#E8DFD8]">
                      MongoDB, Firebase, SQL, DBMS, Git, GitHub, DSA (Data Structures &amp; Algorithms), OOP
                    </p>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2
                  className="text-2xl text-[#F7E7C4] tracking-wider uppercase mb-3 flex items-center space-x-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="text-[#D4AF37] font-mono text-sm">//</span>
                  <span>KEY PROJECTS</span>
                </h2>
                <div className="space-y-4">
                  {/* Project 1 */}
                  <div className="p-4 rounded border border-[#8C6D4F]/30 bg-[#120F0C]/60">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                      <h3 className="text-sm font-semibold text-white flex items-center space-x-2">
                        <span>CampusRecover AI (Smart-AiConnect)</span>
                        <a
                          href="https://github.com/sriteja2007/CampusRecover-AI"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D4AF37] hover:underline inline-flex items-center text-xs"
                        >
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </h3>
                      <span className="text-[11px] font-mono text-[#A8988B]">Next.js, TypeScript, Supabase, Gemini AI</span>
                    </div>
                    <p className="text-xs text-[#A8988B] leading-relaxed">
                      AI-powered lost &amp; found ecosystem featuring multimodal image analysis with Google Gemini, automated item-to-owner semantic vector matching, fraud prevention heuristics, admin verification, and instant notifications.
                    </p>
                  </div>

                  {/* Project 2 */}
                  <div className="p-4 rounded border border-[#8C6D4F]/30 bg-[#120F0C]/60">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                      <h3 className="text-sm font-semibold text-white flex items-center space-x-2">
                        <span>PlacementOS-Ai (Career Copilot)</span>
                        <a
                          href="https://github.com/sriteja2007/PlacementOS-Ai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D4AF37] hover:underline inline-flex items-center text-xs"
                        >
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </h3>
                      <span className="text-[11px] font-mono text-[#A8988B]">React, Node.js, Express, Gemini API, MongoDB</span>
                    </div>
                    <p className="text-xs text-[#A8988B] leading-relaxed">
                      Comprehensive career intelligence platform for engineering students providing personalized dashboards, automated mock interview simulations with Gemini LLMs, ATS resume scoring, and customized coding roadmaps.
                    </p>
                  </div>

                  {/* Project 3 */}
                  <div className="p-4 rounded border border-[#8C6D4F]/30 bg-[#120F0C]/60">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                      <h3 className="text-sm font-semibold text-white flex items-center space-x-2">
                        <span>Virtual Mouse (HCI Computer Vision)</span>
                        <a
                          href="https://github.com/sriteja2007/Virtual_Mouse"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D4AF37] hover:underline inline-flex items-center text-xs"
                        >
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </h3>
                      <span className="text-[11px] font-mono text-[#A8988B]">Python, OpenCV, MediaPipe, PyAutoGUI</span>
                    </div>
                    <p className="text-xs text-[#A8988B] leading-relaxed">
                      Touchless human-computer interface utilizing MediaPipe 3D hand landmark recognition and OpenCV for low-latency cursor tracking, click gestures, scrolling, and dragging without physical hardware.
                    </p>
                  </div>

                  {/* Project 4 */}
                  <div className="p-4 rounded border border-[#8C6D4F]/30 bg-[#120F0C]/60">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                      <h3 className="text-sm font-semibold text-white flex items-center space-x-2">
                        <span>Shopper E-Commerce &amp; AI Resume Analyzer</span>
                        <a
                          href="https://shopper-ecommerce-gamma.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D4AF37] hover:underline inline-flex items-center text-xs"
                        >
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </h3>
                      <span className="text-[11px] font-mono text-[#A8988B]">React.js, JavaScript, Python, Scikit-learn, Vercel</span>
                    </div>
                    <p className="text-xs text-[#A8988B] leading-relaxed">
                      Live production full-stack e-commerce deployment featuring responsive catalog and cart state management, alongside an NLP-based resume analyzer with automated ATS scoring and skill extraction.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-[#8C6D4F]/30 bg-[#120F0C] flex items-center justify-between text-xs text-[#8C6D4F] font-mono">
              <span>APPARI SRI TEJA // VERIFIED RESUME</span>
              <span>GRADUATION: 2028</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
