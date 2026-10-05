import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Menu, X, ArrowUpRight, Download, Sparkles } from 'lucide-react';
import InsigniaEmblem from './InsigniaEmblem';
import tejaPortrait from '../assets/images/teja-portrait.jpg';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'JOURNEY', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (!target) return;
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(target, { offset: 0, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full max-w-full min-h-screen lg:h-screen overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black">
      {/* ================= 1. MINIMAL CUSTOM CURSOR (DESKTOP) ================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="hidden md:flex fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#D4AF37]/50 items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.15)' : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      {/* ================= 2. CINEMATIC HERO VISUAL LAYER ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-center lg:justify-end">
        {/* Ambient Gold & Warm Bronze Radial Glows */}
        <div className="absolute top-1/4 right-1/4 w-[36rem] h-[36rem] bg-[#D4AF37]/[0.08] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-[#8C6D4F]/[0.06] rounded-full blur-[160px] pointer-events-none" />

        {/* Real Portrait of Appari Sri Teja with Cinematic Lighting */}
        <div className="relative h-full w-full lg:w-[58vw] flex items-center justify-center lg:justify-end overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[85vh] lg:h-[95vh] w-full max-w-2xl flex items-center justify-center lg:justify-end"
          >
            {/* The Image */}
            <img
              src={tejaPortrait}
              alt="Appari Sri Teja - AI/ML & Full Stack Developer"
              className="h-full w-auto object-cover object-center filter brightness-[0.92] contrast-[1.08] saturate-[1.05] opacity-25 md:opacity-100 transition-opacity duration-500 drop-shadow-[0_20px_60px_rgba(0,0,0,0.95)]"
            />

            {/* Seamless Cinematic Vignette Blends */}
            {/* Left Edge Fade */}
            <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none z-10" />
            
            {/* Right Edge Fade */}
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-black/85 to-transparent pointer-events-none z-10" />

            {/* Bottom Horizon Fade */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-10" />

            {/* Top Ceiling Fade - Dissolve light sky completely into pure black */}
            <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-black via-black/85 via-40% to-transparent pointer-events-none z-10" />

            {/* Subtle All-Around Cinematic Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.7)_100%)] pointer-events-none z-10" />

            {/* Subtle Gold Rim Lighting Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#D4AF37]/[0.04] to-transparent pointer-events-none mix-blend-screen z-10" />
          </motion.div>

          {/* Floating Telemetry Chips (Desktop) */}
          <div className="hidden xl:flex flex-col space-y-3 absolute top-36 right-16 z-20 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="px-3.5 py-1.5 rounded-sm border border-[#8C6D4F]/30 bg-[#0C0A08]/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#D4AF37] shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex items-center space-x-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
              <span>STATUS: ONLINE &amp; BUILDING</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="px-3.5 py-1.5 rounded-sm border border-[#8C6D4F]/30 bg-[#0C0A08]/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#C4B5A5] shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
            >
              MVGR COLLEGE // VIZIANAGARAM
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="px-3.5 py-1.5 rounded-sm border border-[#8C6D4F]/30 bg-[#0C0A08]/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#F7E7C4] shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
            >
              B.TECH AIML &apos;28 // 8.3 CGPA
            </motion.div>
          </div>

          {/* Animated Watermark Insignia Emblem */}
          <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 pointer-events-auto flex items-center justify-center z-20">
            <InsigniaEmblem />
          </div>
        </div>
      </div>

      {/* ================= 3. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-4 sm:px-12 lg:px-16 pt-5 pb-8 pointer-events-none min-h-screen">
        
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center space-x-1.5 shrink-0 text-xs sm:text-sm font-semibold tracking-[0.18em] sm:tracking-[0.35em] uppercase text-[#EAD8C7] hover:text-[#D4AF37] transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="inline sm:hidden">SRI TEJA.</span>
            <span className="hidden sm:inline">APPARI SRI TEJA.</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/70 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="hidden sm:flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#EAD8C7] hover:text-[#D4AF37] border border-[#8C6D4F]/40 bg-[#120F0C]/80 rounded cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="md:hidden fixed inset-x-4 top-20 z-50 bg-[#0E0C0A]/95 backdrop-blur-xl border border-[#8C6D4F]/60 rounded-lg p-6 shadow-2xl pointer-events-auto"
            >
              <div className="flex flex-col space-y-4 text-center">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      scrollToSection(item.href);
                    }}
                    className="text-sm tracking-[0.25em] font-mono text-[#E8DFD8] hover:text-[#D4AF37] py-2 border-b border-[#8C6D4F]/20"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-2 flex flex-col space-y-2">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      scrollToSection('#contact');
                    }}
                    className="w-full py-2.5 bg-[#D4AF37] text-black text-xs font-semibold tracking-widest uppercase rounded"
                  >
                    LET&apos;S TALK
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume?.();
                    }}
                    className="w-full py-2.5 border border-[#8C6D4F] text-[#E8D7C5] text-xs font-semibold tracking-widest uppercase rounded"
                  >
                    VIEW RESUME
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-10 pb-4 my-auto">
          
          {/* LEFT: Balanced Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[38rem] xl:max-w-[42rem] pointer-events-auto z-20"
          >
            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.85]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: I ARCHITECT */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  I ARCHITECT
                </span>

                {/* Line 2: INTELLIGENT */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  INTELLIGENT
                </span>

                {/* Line 3: SYSTEMS */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
                  SYSTEMS
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Technologies */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.24em] uppercase text-[#C4B29E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                AI/ML DEVELOPER <span className="text-[#8C6D4F] mx-1">•</span> FULL STACK ARCHITECT <span className="text-[#8C6D4F] mx-1">•</span> COMPUTER VISION
              </p>
            </motion.div>

            {/* Professional Summary */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14px] font-light text-[#D5CBC0] leading-[1.85] tracking-wide max-w-xl mb-7 space-y-1.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                Bridging machine learning algorithms with production full-stack engineering.
                <br />
                3rd-year B.Tech in CSE (AIML) at MVGR College of Engineering with an 8.3 CGPA, dedicated to turning intelligent algorithms into impactful, real-world platforms.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Explore My Work CTA */}
              <motion.a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#work');
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent pointer-events-none" />
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </motion.a>

              {/* View / Download Resume Button */}
              <motion.button
                onClick={onOpenResume}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#D4AF37] text-[#BFA895] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 cursor-pointer"
              >
                <span>DOWNLOAD RESUME</span>
                <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Quote & Signature Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-8 mr-4 z-20 select-none bg-black/40 backdrop-blur-md p-4 rounded border border-[#8C6D4F]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          >
            {/* 1. Quote Mark */}
            <span className="text-2xl text-[#F7E7C4] leading-none font-serif mb-1">
              “
            </span>

            {/* 2. Compact Two-Line Statement */}
            <div 
              className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#FFF5EB] space-y-1 mb-2.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>CODE IS THE LOGIC.</p>
              <p>INTELLIGENCE IS THE VISION.</p>
            </div>

            {/* 3. Gold Accent Line */}
            <div className="w-28 h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#E8D7C5]/70 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.4)] mb-2" />

            {/* 4. Fine Monoline Calligraphy Signature */}
            <div 
              className="text-[2.4rem] text-[#F3DBB3] font-normal leading-none -ml-0.5 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
              style={{ 
                fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
                letterSpacing: '0.04em',
              }}
            >
              Sri Teja
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;