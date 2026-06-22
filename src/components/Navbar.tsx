import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, ArrowDownToLine } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t, isRTL } = useLanguage();
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
        colors: ['#02464f', '#086E7B', '#011c20']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#02464f', '#086E7B', '#011c20']
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
    { key: 'nav.home', path: '/' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.services', path: '/services' },
    { key: 'nav.projects', path: '/projects' },
    { key: 'nav.investment', path: '/investment' },
    { key: 'nav.contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-slate-200/30 glass-nav ${isScrolled ? 'shadow-md py-3' : 'py-4.5'}`}>
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gold-gradient transition-all duration-100" 
        style={{ width: `${scrollProgress}%`, right: isRTL ? 0 : 'auto', left: isRTL ? 'auto' : 0 }} 
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={language === 'ar' ? '/media/logoAr.0172cb44b0f8e289a021fa0170c5cecd.svg' : '/media/logo.3bd38394fef4850d36326cef27b3bc07.svg'} 
            alt="HISAS Logo" 
            className="h-11 w-auto transition-all duration-300 logo-black"
          />
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.key}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-gold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 ${
                  isActive 
                    ? 'text-gold after:w-full' 
                    : 'after:w-0 hover:after:w-full text-slate-700'
                }`
              }
            >
              {t(link.key)}
            </NavLink>
          ))}
        </div>

        {/* Quick Actions (Language, CTA) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-350 text-slate-700 hover:border-gold hover:text-gold transition-all duration-200 font-sans text-sm"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'ar' ? 'English' : 'عربي'}</span>
          </button>

          {/* Download PDF Button */}
          <button
            onClick={handleDownloadProfile}
            className="flex items-center gap-2 bg-gold-gradient text-white font-semibold px-5 py-2.5 rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:shadow-gold/20"
          >
            <ArrowDownToLine className="w-4 h-4" />
            <span>{t('nav.downloadProfile')}</span>
          </button>
        </div>

        {/* Mobile Menu Action */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full transition-colors hover:bg-slate-200 text-slate-700"
          >
            <Globe className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full transition-colors hover:bg-slate-200 text-slate-700"
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
                <Link
                  key={link.key}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-gold dark:hover:text-gold transition-colors py-2 block"
                >
                  {t(link.key)}
                </Link>
              ))}
              <button
                onClick={handleDownloadProfile}
                className="flex items-center justify-center gap-2 bg-gold-gradient text-white font-bold w-full py-3.5 rounded-lg shadow-lg"
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
