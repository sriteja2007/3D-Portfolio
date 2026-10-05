import React from 'react';
import { motion } from 'framer-motion';

export const InsigniaEmblem: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background radial glow */}
      <div className="absolute w-36 h-36 bg-[#D4AF37]/10 rounded-full blur-xl pointer-events-none" />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="relative w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center select-none cursor-pointer"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(212,175,55,0.35)]">
          <defs>
            <path
              id="textCircle"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2D6" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8C6D4F" />
            </linearGradient>
          </defs>

          {/* Outer ring */}
          <circle
            cx="100"
            cy="100"
            r="92"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.6"
          />

          {/* Secondary inner ring */}
          <circle
            cx="100"
            cy="100"
            r="82"
            fill="rgba(12, 10, 8, 0.75)"
            stroke="url(#goldGradient)"
            strokeWidth="1"
            opacity="0.8"
          />

          {/* Circular Text */}
          <text fill="url(#goldGradient)" fontSize="8.2" letterSpacing="0.28em" fontWeight="600" fontFamily="'Montserrat', sans-serif">
            <textPath href="#textCircle" startOffset="0%">
              • APPARI SRI TEJA • AI/ML &amp; FULL STACK • MVGR •
            </textPath>
          </text>

          {/* Core Inner Circle */}
          <circle
            cx="100"
            cy="100"
            r="54"
            fill="rgba(18, 15, 12, 0.9)"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
          />
        </svg>

        {/* Center Monogram (stationary relative to container or rotating with it) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span
            className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5EB] via-[#D4AF37] to-[#8C6D4F] leading-none"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            AST
          </span>
          <span className="text-[7px] font-mono tracking-[0.25em] text-[#D4AF37] mt-0.5 opacity-90">
            2028
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default InsigniaEmblem;
