import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Small delay before completing loader to let user appreciate the logo
          setTimeout(onComplete, 400);
          return 100;
        }
        // Smooth random increment
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center">
      <div className="text-center max-w-sm px-6">
        
        {/* Animated Golden Logo Monogram SVG */}
        <div className="w-20 h-20 mx-auto mb-8 relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full stroke-gold stroke-[6] fill-none stroke-linecap-round stroke-linejoin-round">
            <defs>
              <linearGradient id="logo-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#02464f" />
                <stop offset="50%" stop-color="#b69f6a" />
                <stop offset="100%" stop-color="#8f806c" />
              </linearGradient>
            </defs>
            {/* Draw Path Animation using Framer Motion */}
            <motion.path
              d="M30,30 L30,70"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              stroke="url(#logo-gold)"
            />
            <motion.path
              d="M70,30 L70,70"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
              stroke="url(#logo-gold)"
            />
            <motion.path
              d="M30,50 L70,50"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.5 }}
              stroke="url(#logo-gold)"
            />
            <motion.path
              d="M30,30 L50,15 L70,30"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.8 }}
              stroke="url(#logo-gold)"
            />
          </svg>
        </div>

        {/* Brand Name */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl font-bold tracking-widest text-white mb-2 uppercase"
        >
          HISAS REAL ESTATE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5 }}
          className="text-[10px] tracking-[0.2em] text-gold uppercase mb-6"
        >
          Saudi Developer • نطور بثقة
        </motion.p>

        {/* Progress Value */}
        <div className="font-sans text-xs font-semibold tracking-widest text-slate-400">
          <span className="text-white text-lg font-bold">{progress}</span>%
        </div>

        {/* Progress Bar Container */}
        <div className="w-48 h-[2px] bg-slate-800 rounded-full mx-auto mt-4 overflow-hidden relative">
          <div
            className="h-full bg-gold-gradient transition-all duration-100 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>
    </div>
  );
};
