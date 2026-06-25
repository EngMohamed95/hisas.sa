import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, ArrowDownToLine } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t, isRTL } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const showWhiteText = isHome && !isScrolled;
  const whiteLogoSrc = '/media/logo-hisas-white.png';
  const blackLogoSrc = '/media/logo-hisas-black.png';

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

  const navLinks = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.services', path: '/services' },
    { key: 'nav.projects', path: '/projects' },
    { key: 'nav.investment', path: '/investment' },
    { key: 'nav.blog', path: '/blog' },
    { key: 'nav.contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      !showWhiteText 
        ? 'py-2 shadow-sm bg-white/90 backdrop-blur-md border-b border-slate-200/50' 
        : 'py-3.5 bg-transparent'
    }`}>
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gold-gradient transition-all duration-100" 
        style={{ width: `${scrollProgress}%`, right: isRTL ? 0 : 'auto', left: isRTL ? 'auto' : 0 }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={showWhiteText ? whiteLogoSrc : blackLogoSrc} 
            alt="HISAS Logo" 
            className={`${showWhiteText ? 'h-14 sm:h-16' : 'h-10 sm:h-11'} max-w-[185px] sm:max-w-none w-auto transition-all duration-300`}
          />
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.key}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
                  !showWhiteText
                    ? isActive
                      ? 'text-gold after:w-full after:bg-gold'
                      : 'text-slate-700 hover:text-gold after:w-0 hover:after:w-full after:bg-gold'
                    : isActive
                      ? 'text-white after:w-full after:bg-white'
                      : 'text-white/80 hover:text-white after:w-0 hover:after:w-full after:bg-white'
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
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 font-sans text-sm ${
              !showWhiteText
                ? 'border-slate-300 text-slate-700 hover:border-gold hover:text-gold'
                : 'border-white/30 text-white hover:border-white hover:text-white'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'ar' ? 'English' : 'عربي'}</span>
          </button>

          {/* Download PDF Button */}
          <a
            href="/company-profile.pdf"
            download="HISAS-company-profile.pdf"
            className="flex items-center gap-2 bg-gold-gradient text-white font-semibold px-5 py-2.5 rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:shadow-gold/20"
          >
            <ArrowDownToLine className="w-4 h-4" />
            <span>{t('nav.downloadProfile')}</span>
          </a>
        </div>

        {/* Mobile Menu Action */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleLanguage}
            className={`p-2 rounded-full transition-colors ${
              !showWhiteText
                ? 'hover:bg-slate-200 text-slate-700'
                : 'hover:bg-white/10 text-white'
            }`}
          >
            <Globe className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-full transition-colors ${
              !showWhiteText
                ? 'hover:bg-slate-200 text-slate-700'
                : 'hover:bg-white/10 text-white'
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
            <div className="px-4 py-5 flex flex-col gap-3 max-h-[calc(100vh-72px)] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-bold text-slate-800 dark:text-slate-200 hover:text-gold dark:hover:text-gold transition-colors py-2.5 block"
                >
                  {t(link.key)}
                </Link>
              ))}
              <a
                href="/company-profile.pdf"
                download="HISAS-company-profile.pdf"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 bg-gold-gradient text-white font-bold w-full py-3.5 rounded-lg shadow-lg"
              >
                <ArrowDownToLine className="w-5 h-5" />
                <span>{t('nav.downloadProfile')}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
