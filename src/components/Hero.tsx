import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
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
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    { value: 750, suffix: '+', textKey: 'hero.stat.units', icon: Building2 },
    { value: 7, suffix: '+', textKey: 'hero.stat.projects', icon: Briefcase },
    { value: 5, suffix: '+', textKey: 'hero.stat.investors', icon: Users },
    { value: 1.8, suffix: 'B+', textKey: 'stats.value.label', isDecimal: true, icon: TrendingUp },
  ];

  const slides = [
    {
      titleKey: 'hero.slide1.title',
      highlightKey: 'hero.slide1.highlight',
      subtitleKey: 'hero.slide1.subtitle',
      ctaText: t('hero.cta'),
      secondaryCtaText: t('hero.secondaryCta'),
      ctaPath: '/investment',
      secondaryCtaPath: '/contact'
    },
    {
      titleKey: 'hero.slide2.title',
      highlightKey: 'hero.slide2.highlight',
      subtitleKey: 'hero.slide2.subtitle',
      ctaText: t('projects.explore'),
      secondaryCtaText: t('hero.secondaryCta'),
      ctaPath: '/projects',
      secondaryCtaPath: '/contact'
    },
    {
      titleKey: 'hero.slide3.title',
      highlightKey: 'hero.slide3.highlight',
      subtitleKey: 'hero.slide3.subtitle',
      ctaText: t('hero.cta'),
      secondaryCtaText: t('hero.secondaryCta'),
      ctaPath: '/investment',
      secondaryCtaPath: '/contact'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/new.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for cinematic contrast */}
      <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[0.5px] z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 flex flex-col justify-center items-center text-center">
        {/* Animated Saudi Flag Monogram Element */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-white/25 bg-slate-950/35 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-widest flex items-center gap-2 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{t('info.address.title')}</span>
        </motion.div>

        {/* Content Slider Container */}
        <div className="w-full max-w-5xl min-h-[280px] sm:min-h-[220px] md:min-h-[240px] flex flex-col items-center justify-center overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center text-center"
            >
              {/* Slide Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight max-w-5xl">
                {t(slides[currentSlide].titleKey)}{' '}
                <span className="block mt-2 text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.75)]">
                  {t(slides[currentSlide].highlightKey)}
                </span>
              </h1>

              {/* Slide Subtitle */}
              <p className="text-base md:text-lg text-slate-200 max-w-3xl mb-10 leading-relaxed font-normal">
                {t(slides[currentSlide].subtitleKey)}
              </p>

              {/* Slide CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none">
                <button
                  onClick={() => navigate(slides[currentSlide].ctaPath)}
                  className="px-8 py-4 bg-gold-gradient text-white font-bold rounded-lg shadow-md hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 hover:shadow-gold/20 cursor-pointer"
                >
                  {slides[currentSlide].ctaText}
                </button>
                <button
                  onClick={() => navigate(slides[currentSlide].secondaryCtaPath)}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border border-white/20 hover:border-gold hover:bg-white/20 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-sm cursor-pointer"
                >
                  {slides[currentSlide].secondaryCtaText}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Bullet Indicators */}
        <div className="flex gap-2.5 mt-8 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === index ? 'bg-gold w-8' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Floating Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
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
              <p className="text-xs md:text-sm text-slate-300 font-semibold tracking-wide">
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-slate-300 hover:text-gold transition-colors duration-300 flex flex-col items-center gap-1 animate-bounce"
        >
          <span className="text-xs tracking-widest uppercase opacity-75">{t('nav.about')}</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
};
