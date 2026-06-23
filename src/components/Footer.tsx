import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Twitter, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/hisasrealestate?s=11&t=MvSNCCMc-FQHf3tqIIyDXQ', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/110035613/admin/dashboard', label: 'LinkedIn' },
  ];

  const menuLinks = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.services', path: '/services' },
    { key: 'nav.projects', path: '/projects' },
    { key: 'nav.investment', path: '/investment' },
    { key: 'nav.contact', path: '/contact' },
  ];

  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top footer row */}
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          
          {/* Logo & Corporate profile */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/media/logo-hisas-black.png" 
                alt="HISAS Footer Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-md">
              {t('about.text').slice(0, 220)}...
            </p>
          </div>

          {/* Links Grid */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-800 uppercase tracking-wider">
              {isRTL ? 'خريطة الموقع' : 'Sitemap'}
            </h4>
            <ul className="space-y-2.5 text-base md:text-lg">
              {menuLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="hover:text-gold text-slate-600 transition-colors duration-200"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision 2030 & Socials */}
          <div className="space-y-6 flex flex-col justify-between items-start md:items-end">
            {/* Vision 2030 Badge */}
            <div className="flex flex-col items-start md:items-end p-2">
              <span className="text-xs text-slate-500 uppercase tracking-widest block mb-2">{isRTL ? 'يتوافق مع رؤية' : 'Aligns with'}</span>
              <img 
                src="/media/vision-2030-footer.png" 
                alt="Saudi Vision 2030" 
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-gold hover:border-gold transition-all duration-300"
                  aria-label={soc.label}
                >
                  <soc.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-sm md:text-base text-slate-500 gap-4">
          <div>
            <p>{t('nav.home') === 'الرئيسية' ? 'حقوق الطبع والنشر © ٢٠٢٦ حصص العقارية. جميع الحقوق محفوظة.' : 'Copyright © 2026 HISAS Real Estate. All rights reserved.'}</p>
          </div>

          {/* Back to top & Info */}
          <div className="flex items-center gap-6">
            <span className="font-sans text-slate-555">CR 7035818439</span>
            <button
              onClick={handleBackToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-gold hover:border-gold transition-colors duration-200"
            >
              <span>{t('misc.backToTop')}</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
