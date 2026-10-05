import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import tejaAboutImg from '../assets/images/teja-about.jpg';
import tejaBikeImg from '../assets/images/teja-bike.jpg';
import tejaBeachImg from '../assets/images/teja-beach.jpg';
import tejaCampusImg from '../assets/images/teja-campus.jpg';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const photoMoments = [
  { id: 'about', label: 'PORTRAIT', image: tejaAboutImg, caption: 'Appari Sri Teja • Developer Focus' },
  { id: 'bike', label: 'MVGR CAMPUS', image: tejaBikeImg, caption: 'At MVGR College Entrance • Royal Enfield' },
  { id: 'campus', label: 'ACADEMIC PRIDE', image: tejaCampusImg, caption: 'MVGR Placements Hub • Class of 2028' },
  { id: 'beach', label: 'REFLECTIONS', image: tejaBeachImg, caption: 'Coastal Moments • Vizag Coast' },
];

export const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [activePhoto, setActivePhoto] = useState(photoMoments[0]);

  // 1. Motion Values for 3D physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(200);
  const spotlightY = useMotionValue(200);

  // 2. Springs for 3D Physics
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [16, -16]), { damping: 18, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), { damping: 18, stiffness: 220 });

  // 3. Spotlight Background
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle 240px at ${x}px ${y}px, rgba(255,255,255,0.35), rgba(212,175,55,0.18), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsCardHovered(true);

  const handleMouseLeave = () => {
    setIsCardHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="about" 
      className="relative w-full max-w-full min-h-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center"
    >
      {/* Background Glows & Ambience */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/6 w-[32rem] h-[32rem] bg-[#D4AF37] rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/6 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F] rounded-full blur-[170px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-4 mb-10"
        >
          <span 
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            01 / ABOUT ME
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Main Grid: Content + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT CONTENT (7 COLS) ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Cinematic Headline with Glow Flare */}
            <motion.div variants={fadeUpVariants} className="relative mb-6 select-none">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.88]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)]">
                  WHERE ARTIFICIAL INTELLIGENCE
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.3)]">
                  MEETS PRODUCTION CODE.
                </span>
              </h2>
            </motion.div>

            {/* Authentic Narrative Bio */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14px] font-light text-[#B3A497] leading-[1.85] tracking-wide mb-10 max-w-xl space-y-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                I&apos;m <span className="text-[#F3DBB3] font-medium">Appari Sri Teja</span>, an AI/ML &amp; Full Stack Developer and 3rd-year B.Tech student in Computer Science &amp; Machine Learning (AIML) at <span className="text-white font-medium">Maharaj Vijayaram Gajapathi Raj College of Engineering (MVGR)</span>, Vizianagaram, holding an <span className="text-[#D4AF37] font-semibold">8.3 / 10 CGPA</span>.
              </p>
              <p>
                I combine algorithmic machine learning with production-grade web systems. Whether developing touchless computer vision interfaces with MediaPipe, engineering multimodal AI ecosystems with Google Gemini APIs, or crafting scalable full-stack applications with React, Node.js, and MongoDB, my philosophy is focused on practical, high-utility engineering.
              </p>
            </motion.div>

            {/* 4 Authentic Student Metrics Grid */}
            <motion.div 
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 pb-2 border-t border-[#8C6D4F]/25"
            >
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#D4AF37] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  8.3 / 10
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5">
                  MVGR B.Tech CGPA
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#F4EBE2] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  3rd Year
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5">
                  B.Tech AIML &apos;28
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#D4AF37] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  18+
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5">
                  GitHub Repositories
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#F4EBE2] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  AI + WEB
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#A8988B] mt-0.5">
                  Dual Core Focus
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT PORTRAIT FRAME (3D INTERACTIVE) ================= */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative perspective-[1400px]">
            
            {/* Ambient Animated Gold Glow Ring Behind Frame */}
            <motion.div 
              animate={{
                scale: isCardHovered ? 1.15 : 1,
                opacity: isCardHovered ? 0.35 : 0.15,
                rotate: isCardHovered ? 180 : 0
              }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute -inset-6 bg-[conic-gradient(from_0deg,#D4AF37_0%,#8C6D4F_30%,transparent_60%,#D4AF37_100%)] blur-2xl rounded-3xl pointer-events-none"
            />

            {/* 3D Holographic Main Card Container */}
            <motion.div
              ref={cardRef}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-3.5 border border-[#8C6D4F]/40 rounded-sm bg-[#120F0C]/80 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] cursor-pointer group transition-colors duration-500 hover:border-[#D4AF37]/80 w-full max-w-[390px]"
            >
              {/* Dynamic Laser Border Pulse */}
              <div className="absolute inset-0 rounded-sm pointer-events-none overflow-hidden">
                <motion.div 
                  animate={{ x: isCardHovered ? ['-100%', '200%'] : '-100%' }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent skew-x-12"
                />
              </div>

              {/* Locked Corner Gold Accent Brackets */}
              <div className="pointer-events-none">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
              </div>

              {/* Portrait Image Canvas */}
              <div className="relative overflow-hidden w-full aspect-[4/5] bg-black rounded-sm">
                {/* Main Portrait */}
                <img
                  src={activePhoto.image}
                  alt={activePhoto.caption}
                  className="w-full h-full object-cover object-top filter brightness-[0.96] contrast-[1.05] group-hover:brightness-105 group-hover:contrast-[1.1] transition-all duration-700 ease-out"
                />

                {/* Mouse-Tracked Holographic Glass Spotlight */}
                <motion.div
                  className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
                  style={{
                    background: spotlightBg,
                    opacity: isCardHovered ? 1 : 0,
                  }}
                />

                {/* Film Noir Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* Caption Tag */}
                <div className="absolute top-3 left-3 z-20 pointer-events-none">
                  <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase bg-black/60 backdrop-blur-md px-2 py-0.5 border border-[#8C6D4F]/40 rounded-sm">
                    {activePhoto.caption}
                  </span>
                </div>

                {/* Monoline Signature */}
                <div className="absolute bottom-4 right-4 z-20 select-none">
                  <span 
                    className="text-3xl text-[#F2D8A7] drop-shadow-[0_0_12px_rgba(242,216,167,0.5)] transition-colors duration-300 group-hover:text-white"
                    style={{ fontFamily: "'Herr Von Muellerhoff', cursive" }}
                  >
                    Sri Teja
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Interactive Photo Moments Switcher */}
            <div className="mt-4 flex items-center justify-center space-x-2 z-20">
              {photoMoments.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePhoto(item)}
                  className={`text-[9.5px] font-mono tracking-widest uppercase px-2.5 py-1 rounded transition-all duration-300 cursor-pointer ${
                    activePhoto.id === item.id
                      ? 'border border-[#D4AF37] bg-[#D4AF37]/20 text-[#FFF5EB] shadow-[0_0_10px_rgba(212,175,55,0.3)]'
                      : 'border border-[#8C6D4F]/30 bg-[#120F0C] text-[#A8988B] hover:text-white hover:border-[#8C6D4F]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;