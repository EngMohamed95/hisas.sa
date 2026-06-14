import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Building2, Users, Briefcase, TrendingUp, ChevronDown } from 'lucide-react';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
};

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  const stats = [
    { value: 750, suffix: '+', textKey: 'hero.stat.units', icon: Building2 },
    { value: 7, suffix: '+', textKey: 'hero.stat.projects', icon: Briefcase },
    { value: 5, suffix: '+', textKey: 'hero.stat.investors', icon: Users },
    { value: 1.8, suffix: 'B+', textKey: 'stats.value.label', isDecimal: true, icon: TrendingUp },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary-dark pt-20">
      {/* Background Image with Parallax & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url(${language === 'ar' ? '/media/heroBgAr.6c9a91f749f4169b965f.jpg' : '/media/heroBg.84ea385be791e4c5d28a.jpg'})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 flex flex-col justify-center items-center text-center">
        {/* Animated Saudi Flag Monogram Element */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-gold/40 bg-primary-dark/70 backdrop-blur-md text-gold text-xs font-semibold uppercase tracking-widest flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{t('info.address.title')}</span>
        </motion.div>

        {/* Text Reveal Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight max-w-5xl"
        >
          {t('hero.title')}{' '}
          <span className="text-gold-gradient block mt-2">{t('nav.projects')}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-16 justify-center w-full max-w-md sm:max-w-none"
        >
          <button
            onClick={() => handleScrollTo('#investment')}
            className="px-8 py-4 bg-gold-gradient text-slate-900 font-bold rounded-lg shadow-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 hover:shadow-gold/25"
          >
            {t('hero.cta')}
          </button>
          <button
            onClick={() => handleScrollTo('#contact')}
            className="px-8 py-4 bg-slate-900/60 backdrop-blur-md text-white font-bold rounded-lg border border-slate-700 hover:border-gold hover:text-gold transition-all duration-300"
          >
            {t('hero.secondaryCta')}
          </button>
        </motion.div>

        {/* Floating Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="glass-card p-6 rounded-xl text-center group hover:border-gold/50 transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
                {stat.isDecimal ? (
                  <span>
                    1.8{stat.suffix}
                  </span>
                ) : (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                )}
              </h3>
              <p className="text-xs md:text-sm text-slate-400 font-medium tracking-wide">
                {t(stat.textKey)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scroll Down Hint */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => handleScrollTo('#about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-slate-400 hover:text-gold transition-colors duration-300 flex flex-col items-center gap-1"
        >
          <span className="text-xs tracking-widest uppercase opacity-75">{t('nav.about')}</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
};
