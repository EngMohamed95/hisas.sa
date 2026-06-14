import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Globe, Menu, X, ArrowDownToLine } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadProfile = () => {
    // Elegant luxury golden confetti trigger
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#02464f', '#b69f6a', '#8f806c']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#02464f', '#b69f6a', '#8f806c']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
    
    // Simulate file download
    alert(language === 'ar' ? 'جاري تحميل الملف التعريفي لشركة حصص العقارية...' : 'Downloading HISAS Real Estate profile...');
  };

  const navLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.investment', href: '#investment' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl glass-nav py-3' : 'bg-transparent py-5'}`}>
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gold-gradient transition-all duration-100" 
        style={{ width: `${scrollProgress}%`, right: isRTL ? 0 : 'auto', left: isRTL ? 'auto' : 0 }} 
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center gap-3">
          <img 
            src={language === 'ar' ? '/media/logoAr.0172cb44b0f8e289a021fa0170c5cecd.svg' : '/media/logo.3bd38394fef4850d36326cef27b3bc07.svg'} 
            alt="HISAS Logo" 
            className={`h-11 w-auto transition-all duration-300 ${
              isScrolled 
                ? 'logo-black dark:logo-white' 
                : 'logo-white'
            }`}
          />
        </a>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`hover:text-gold dark:hover:text-gold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled ? 'text-slate-700 dark:text-slate-300' : 'text-white/95'
              }`}
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Quick Actions (Language, Theme, CTA) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isScrolled 
                ? 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300' 
                : 'hover:bg-white/10 text-white/95'
            }`}
            title={theme === 'dark' ? t('misc.lightMode') : t('misc.darkMode')}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 font-sans text-sm ${
              isScrolled 
                ? 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-gold hover:text-gold' 
                : 'border-white/30 text-white/95 hover:border-gold hover:text-gold'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'ar' ? 'English' : 'عربي'}</span>
          </button>

          {/* Download PDF Button */}
          <button
            onClick={handleDownloadProfile}
            className="flex items-center gap-2 bg-gold-gradient text-slate-900 font-semibold px-5 py-2.5 rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:shadow-gold/20"
          >
            <ArrowDownToLine className="w-4 h-4" />
            <span>{t('nav.downloadProfile')}</span>
          </button>
        </div>

        {/* Mobile Menu Action */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isScrolled 
                ? 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300' 
                : 'hover:bg-white/10 text-white/95'
            }`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={toggleLanguage}
            className={`p-2 rounded-full transition-colors ${
              isScrolled 
                ? 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300' 
                : 'hover:bg-white/10 text-white/95'
            }`}
          >
            <Globe className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-full transition-colors ${
              isScrolled 
                ? 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300' 
                : 'hover:bg-white/10 text-white/95'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full border-t border-slate-200 dark:border-slate-800 glass-nav overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-gold dark:hover:text-gold transition-colors py-2 block"
                >
                  {t(link.key)}
                </a>
              ))}
              <button
                onClick={handleDownloadProfile}
                className="flex items-center justify-center gap-2 bg-gold-gradient text-slate-900 font-bold w-full py-3.5 rounded-lg shadow-lg"
              >
                <ArrowDownToLine className="w-5 h-5" />
                <span>{t('nav.downloadProfile')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
