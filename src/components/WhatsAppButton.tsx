import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppButton: React.FC = () => {
  const { language, t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    const baseText = language === 'ar'
      ? 'مرحباً شركة حصص العقارية، أود الاستفسار عن الفرص الاستثمارية والمشاريع السكنية المتاحة.'
      : 'Hello HISAS Real Estate, I would like to inquire about available investment opportunities and residential units.';
    
    const whatsappUrl = `https://wa.me/966555625502?text=${encodeURIComponent(baseText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          className={`fixed bottom-4 sm:bottom-6 ${
            isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'
          } z-40 p-3 sm:p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-300 group`}
          aria-label={t('misc.whatsapp')}
          title={t('misc.whatsapp')}
        >
          {/* Subtle label that slides out on hover */}
          <span className={`absolute ${isRTL ? 'right-full mr-2' : 'left-full ml-2'} opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950 text-white text-xs py-1.5 px-3 rounded shadow-lg whitespace-nowrap pointer-events-none font-sans`}>
            {t('misc.whatsapp')}
          </span>

          {/* Elegant SVG WhatsApp Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 sm:w-7 sm:h-7 fill-white"
          >
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.371a9.945 9.945 0 0 0 4.773 1.226h.005c5.505 0 9.99-4.477 9.99-9.985C22.007 6.478 17.521 2 12.012 2zm0 18.29h-.004a8.252 8.252 0 0 1-4.205-1.148l-.302-.18-3.126.82.834-3.048-.196-.312a8.258 8.258 0 0 1-1.265-4.437c.001-4.558 3.71-8.263 8.272-8.263 2.209 0 4.287.86 5.848 2.424a8.204 8.204 0 0 1 2.42 5.847c-.002 4.56-3.71 8.264-8.278 8.264zm4.53-6.18c-.248-.124-1.464-.722-1.692-.805-.227-.082-.393-.124-.558.124-.165.247-.64.804-.784.969-.145.165-.29.185-.537.062-.248-.124-1.047-.385-1.993-1.23-.737-.657-1.235-1.47-1.38-1.717-.144-.247-.015-.38.11-.503.11-.11.248-.289.372-.433.124-.144.165-.247.248-.412.082-.165.04-.309-.02-.433-.062-.124-.558-1.344-.764-1.84-.2-.487-.402-.42-.558-.429-.144-.007-.31-.008-.475-.008-.165 0-.433.062-.66.309-.227.247-.867.845-.867 2.062 0 1.216.887 2.392.986 2.526.1.134 1.747 2.667 4.23 3.737.59.255 1.053.407 1.413.522.593.189 1.133.162 1.56.098.476-.072 1.464-.598 1.67-.175.207-.423.207-.784.145-.845-.062-.062-.227-.103-.475-.227z" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
