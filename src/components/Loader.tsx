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
    <div className="fixed inset-0 z-[100] bg-slate-50 flex flex-col items-center justify-center">
      <div className="text-center max-w-sm px-6">
        
        {/* Brand Logo Image */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <img 
            src="/media/logo-hisas-black.png" 
            alt="HISAS Logo" 
            className="h-20 sm:h-24 w-auto object-contain"
          />
        </motion.div>

        {/* Progress Value */}
        <div className="font-sans text-xs font-semibold tracking-widest text-slate-500">
          <span className="text-slate-900 text-lg font-bold">{progress}</span>%
        </div>

        {/* Progress Bar Container */}
        <div className="w-48 h-[2px] bg-slate-200 rounded-full mx-auto mt-4 overflow-hidden relative">
          <div
            className="h-full bg-gold-gradient transition-all duration-100 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>
    </div>
  );
};
