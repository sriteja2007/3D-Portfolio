import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const featuredProjects: Project[] = [
  {
    number: '01',
    title: 'CampusRecover AI',
    category: 'AI-POWERED FULL STACK ECOSYSTEM',
    description:
      'Full-stack intelligent platform that helps reconnect misplaced items with their owners using multimodal Gemini AI image analysis, smart vector matching, fraud prevention heuristics, admin verification, and real-time alerts. Eliminates lost property chaos on campus communities.',
    githubUrl: 'https://github.com/sriteja2007/CampusRecover-AI',
    tech: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Google Gemini AI',
      'Tailwind CSS',
      'Computer Vision',
      'REST APIs',
      'Vercel',
    ],
    metrics: [
      { label: 'VISION ENGINE', value: 'Gemini Multimodal' },
      { label: 'MATCHING', value: 'Semantic Image Vectors' },
      { label: 'VERIFICATION', value: 'Admin & Fraud Shield' },
    ],
  },
  {
    number: '02',
    title: 'PlacementOS-Ai',
    category: 'AI CAREER COPILOT & ED-TECH',
    description:
      'AI-driven comprehensive career navigation platform for engineering students featuring personalized career dashboards, automated mock interview simulations with Gemini LLMs, ATS resume scoring, dynamic learning roadmaps, and coding assessment tracking.',
    githubUrl: 'https://github.com/sriteja2007/PlacementOS-Ai',
    tech: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Google Gemini API',
      'NLP',
      'MongoDB',
      'Tailwind CSS',
    ],
    metrics: [
      { label: 'SIMULATION', value: 'AI Mock Interviews' },
      { label: 'RESUME ANALYTICS', value: 'ATS Match Scoring' },
      { label: 'CURRICULUM', value: 'Dynamic Roadmaps' },
    ],
  },
  {
    number: '03',
    title: 'Virtual Mouse HCI',
    category: 'COMPUTER VISION / TOUCHLESS INTERFACE',
    description:
      'Innovative human-computer interaction system utilizing computer vision and hand landmark tracking to execute seamless cursor navigation, touchless clicks, scrolling, and dragging without physical mouse hardware. Built for hands-free computer control.',
    githubUrl: 'https://github.com/sriteja2007/Virtual_Mouse',
    tech: [
      'Python',
      'OpenCV',
      'MediaPipe',
      'PyAutoGUI',
      'NumPy',
      'HCI Design',
    ],
    metrics: [
      { label: 'LANDMARKS', value: '21 3D Hand Points' },
      { label: 'LATENCY', value: 'Real-Time Tracking' },
      { label: 'GESTURES', value: 'Point, Click & Scroll' },
    ],
  },
  {
    number: '04',
    title: 'AI Resume Analyzer',
    category: 'NLP & MACHINE LEARNING',
    description:
      'Intelligent recruitment analytics utility providing automated ATS benchmark scoring, skill graph extraction, job description matching vectors, and personalized resume enhancement suggestions based on semantic text analysis.',
    githubUrl: 'https://github.com/sriteja2007/AI-Resume-Analyzer',
    tech: [
      'Python',
      'Scikit-learn',
      'NLTK',
      'Pandas',
      'Streamlit',
      'Regex',
    ],
    metrics: [
      { label: 'PARSING', value: 'Rule & Semantic Engine' },
      { label: 'EXTRACTION', value: 'Skill & Entity Graph' },
      { label: 'FIT EVALUATION', value: 'Job Alignment Metric' },
    ],
  },
];

interface AdditionalProject {
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  tech: string[];
}

const additionalProjects: AdditionalProject[] = [
  {
    title: 'Shopper E-Commerce',
    category: 'FULL STACK WEB',
    description: 'Production-ready modern e-commerce storefront with responsive product catalog, reactive shopping cart state, and streamlined checkout experience.',
    githubUrl: 'https://github.com/sriteja2007/Shopper_ecommerce',
    liveUrl: 'https://shopper-ecommerce-gamma.vercel.app',
    tech: ['React.js', 'JavaScript', 'Node.js', 'CSS3', 'Vercel'],
  },
  {
    title: 'TaskStream Cyberpunk Mainframe',
    category: 'PRODUCTIVITY / TERMINAL UI',
    description: 'Futuristic task orchestration interface designed with high-contrast cyberpunk aesthetic, stateful filtering, and instant responsiveness.',
    githubUrl: 'https://github.com/sriteja2007/TaskStream-Cyberpunk-Mainframe',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
  },
  {
    title: 'Spam SMS Detection',
    category: 'NLP CLASSIFICATION',
    description: 'Machine learning classification pipeline utilizing text preprocessing, TF-IDF vectorization, and Naive Bayes to filter fraudulent and spam communications.',
    githubUrl: 'https://github.com/sriteja2007',
    tech: ['Python', 'Scikit-learn', 'NLTK', 'Pandas'],
  },
  {
    title: 'Weather Forecast Dashboard',
    category: 'API & DATA VISUALIZATION',
    description: 'Real-time meteorological monitoring platform pulling multi-day weather telemetry with dynamic atmospheric condition animations.',
    githubUrl: 'https://github.com/sriteja2007/Weather-Website',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
  },
  {
    title: 'Scientific Calculator Engine',
    category: 'UTILITY / LOGIC',
    description: 'Feature-rich scientific calculator engineered to handle arithmetic sequences, algebraic equations, and complex trigonometric operations.',
    githubUrl: 'https://github.com/sriteja2007/scientific-caluculator',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Math Logic'],
  },
  {
    title: 'Particle-Text Simulation',
    category: 'CANVAS / CREATIVE CODING',
    description: 'Interactive canvas particle physics engine that forms kinetic typography and disperses particles fluidly under cursor repulsion fields.',
    githubUrl: 'https://github.com/sriteja2007/Particle-Text',
    tech: ['JavaScript', 'HTML5 Canvas', 'Physics Math'],
  },
];

export const ProjectsSection: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
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
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED SYSTEMS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED SOLUTIONS.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to explore the system architecture cards. Each platform was engineered to solve practical AI, computer vision, and full-stack challenges.
          </p>
        </motion.div>

        {/* Stacking Card Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {featuredProjects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // SYSTEM BENCHMARKS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.22em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>VIEW REPO</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        {/* ================= MORE INNOVATIONS & REPOSITORIES ================= */}
        <div className="mt-20 pt-16 border-t border-[#8C6D4F]/25">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center space-x-2 text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>EXPANDED REPERTORY // GITHUB DISCOVERY</span>
              </div>
              <h3
                className="text-3xl sm:text-4xl text-white uppercase tracking-tight"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                ADDITIONAL OPEN-SOURCE PROJECTS
              </h3>
            </div>

            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="inline-flex items-center space-x-2 px-4 py-2 border border-[#8C6D4F]/40 hover:border-[#D4AF37] bg-[#120F0C] text-[#EAD8C7] hover:text-white text-xs font-mono uppercase tracking-wider rounded transition-all cursor-pointer"
            >
              <span>{showAllProjects ? 'COLLAPSE REPOSITORIES' : 'VIEW ALL REPOSITORIES (6)'}</span>
              {showAllProjects ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Grid of Additional Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(showAllProjects ? additionalProjects : additionalProjects.slice(0, 3)).map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded border border-[#8C6D4F]/30 bg-[#0E0C0A]/90 hover:border-[#D4AF37]/70 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#8C6D4F] mb-3">
                    <span className="uppercase tracking-widest text-[#D4AF37]">{item.category}</span>
                    <Sparkles className="w-3 h-3 text-[#D4AF37]/60" />
                  </div>

                  <h4
                    className="text-2xl text-white group-hover:text-[#F7E7C4] transition-colors uppercase mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {item.title}
                  </h4>

                  <p className="text-xs text-[#A8988B] leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[9px] font-mono uppercase bg-[#16120E] border border-[#8C6D4F]/30 text-[#C4B5A5] rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-3 pt-3 border-t border-[#8C6D4F]/20 text-xs font-mono">
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-[#EAD8C7] hover:text-[#D4AF37] transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-[#D4AF37] hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;